# Batch search

Batch search enables the user to find metabolites through the m/z or the neutral masses. The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/api/batch](http://ceumass.eps.uspceu.es/api/batch)

To perform a query, the user must send a POST request. This request must include:
 * A Content-type header set to application/json.
 * A request body with a JSON object that includes all data needed for the query: masses to search in CMM, tolerance allowed for the putative annotations regarding the masses, metabolite types to search, masses mode, ionization mode, possible adducts formed when running the experiment and databases that will be included in the search.

The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined in the next table.


| Name | Type | Default value | Optativity | 
| --- | --- | --- | --- | 
| masses | array of doubles | - | mandatory |
| tolerance | double (range: [0..100]) | 10 | mandatory |
| tolerance_mode | tolerance_mode_enum | “ppm” | mandatory |
| databases | array of database_enum | “all-except-mine” | mandatory |
| metabolites_type | metabolites_type_enum | “all-except-peptides” | mandatory |
| masses_mode | masses_mode_enum | “mz” | mandatory |
| ion_mode | ion_mode_enum | “positive” | mandatory |
| adducts | array of positive_enum | [“M+H”, “M+2H”, “M+Na”, “M+K”, “M+NH4'”, “M+H-H2O”] | mandatory |
| adducts | array of negative_enum | [“M-H”, “M+Cl”, “M+FA-H”, “M-H-H2O”] | mandatory |
| adducts | array of neutral_enum | [“M”] | mandatory |

As the value of some attributes is restricted to a range of literals, the next table shows the defined enumeration types. 


| Name | Values |
| --- | --- |
| tolerance_mode_enum | “ppm”, “mDa” |
| database_enum | “all”, “all-except-mine”, “HMDB”, “LipidMaps”, “Metlin”, “Kegg”, “in-house”, “mine” |
| metabolites_type_enum | “all-except-peptides”, “only-lipids”, “all-including-peptides” |
| masses_mode_enum | “neutral”, ”mz” |
| ion_mode_enum | “neutral”, ”positive”, “negative” |
| positive_enum | ''allPositives'', M+3H, M+2H+Na, M+H+2K, M+H+2Na, M+3Na, M+2H, M+H+NH4, M+H+Na, M+H+K, M+ACN+2H, M+2Na, M+2ACN+2H, M+3ACN+2H, M+H, M+Na, M+K, M+NH4, M+H-H2O, 2M+H, 2M+Na, M+H+HCOONa, 2M+H-H2O, M+CH3OH+H, M+ACN+H, M+2Na-H, M+IsoProp+H, M+ACN+Na, M+2K-H, M+DMSO+H, M+2ACN+H, M+IsoProp+Na+H, 2M+NH4, 2M+K, 2M+ACN+H, 2M+ACN+Na, M+H-2H2O, M+NH4-H2O, M+Li, 2M+2H+3H2O, M+H+CH3COOH, M+H+CH3COOHNa |
| negative_enum | ''allNegatives'', M-3H, M-2H, M-H2O-H, M-H, M+Na-2H, M+Cl, M+K-2H, M+FA-H, M+Hac-H, M+Br, M+TFA-H, 2M-H, 2M+FA-H, 2M+Hac-H, 3M-H, M-H+HCOONa, M+F 
neutral_enum | ''allNeutral'', ''M'' |


The following example shows a query to the Batch Search service:

~~~~
{
 "metabolites_type": "all-except-peptides",
 "databases": ["hmdb"],
 "masses_mode": "mz",
 "ion_mode": "positive",
 "adducts": ["all"],
 "tolerance": 10.0,
 "tolerance_mode": "ppm",
 "masses": [400.3432, ..., 288.2174]
}
~~~~

If the request contains no errors and is therefore correctly processed, the service returns a set of putative annotations for the masses submitted. 


Table 9 Batch Search service – Response - Results
| Name | Type | Default value |
| --- | --- | --- |
| results | Array of putative_annotation_object | - |

Each putative annotation structure contains the name of the putative annotation compound, its formula, its molecular weight, the difference between the molecular weight and the corresponding experimental mass (ppm), and references of the compound in external databases. 

| Name | Type |
| --- | --- |
| identifier | integer |
| EM | double |
| name | string |
| formula | string |
| adduct | positive_enum |
| adduct | negative_enum |
| adduct | neutral_enum |
| molecular_weight | double |
| error_ppm | integer |
| ionizationScore | integer (Range: -2, [0..2]) |
| FinalScore | integer (Range: -2, [0..2]) |
| cas | string |
| kegg_compound | string |
| kegg_uri | string |
| hmdb_compound | string |
| hmdb_uri | string |
| lipidmaps_compound | string |
| lipidmaps_uri | string |
| metlin_compound | string |
| metlin_uri | string |
| pubchem_compound | string |
| pubchem_uri | string |
| pathways | array of strings |
| inChiKey | string |

While some of these attributes are related with score rules, please bear in mind that rules are only applied when using the Batch Advanced Search service. Therefore, when using the batch search, all the putative annotations returned will have a score of -2, which shows that the rules engine has not been used in this type of search. 
This example shows the results of a successful request: 

~~~
{
 "results": [
  {
   "identifier": 32600,
   "EM": 400.3432,
   "name": "Palmitoylcarnitine",
   "formula": "C23H45NO4",
   "adduct": "M+H",
   "molecular_weight": 399.334858933,
   "error_ppm": 3,
   "ionizationScore": -2,
   "finalScore": -2,
   "cas": "2364-67-2",
   "kegg_compound": "C02990",
   "kegg_uri": "http://www.genome.jp/dbget-bin/www_bget?cpd:C02990",
   "hmdb_compound": "HMDB0000222",
   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000222",
   "lipidmaps_compound": "LMFA07070004",
   "lipidmaps_uri": "http://www.lipidmaps.org/data/LMSDRecord.php?LMID=LMFA07070004",
   "metlin_compound": "961",
   "metlin_uri": "https://metlin.scripps.edu/metabo_info.php?molid=961",
   "pubchem_compound": "11953816",
   "pubchem_uri": "https://pubchem.ncbi.nlm.nih.gov/compound/11953816",
   "pathways": []
  },
  ...
 ]
}
~~~
