# Batch advanced search

Batch advanced search also enables the user (on top of the functionality offered by the batch search service) to find metabolites through the m/z or the {neutral masses query parameters. But, in contrast with the batch search service, it uses additional information devoted to biomarker discovery experiments using LC/MS. The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/advancedbatch](http://ceumass.eps.uspceu.es/mediator/api/advancedbatch)

To perform a query, the user must send a POST request. This request must include:
* A Content-type header set to application/json.
 * A request body with a JSON object that includes all data needed for the query. In this case, the query is just an extension of the Batch Search query. Therefore, it must include all attributes described in [batch search section](batch-search.md) and, on top of that, provide the additional information: RTs, composite spectra (spectra created by the summation of all co-eluting m/z ions that are related), chemical alphabet (possible elements of the putative annotations), etc.

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
| chemical_alphabet | chemical_alphabet_enum | “CHNOPS” | mandatory |
| deuterium | boolean | false | mandatory |
| modifiers_type | modifiers_type_enum | “none” | mandatory |
| retention_times | array of doubles | empty | optional |
| composite_spectra | array of arrays of spectra_object | empty | optional |
| all_masses | array of doubles | empty | optional |
| all_retention_times | array of doubles | empty | optional |
| all_composite_spectra | array of arrays of spectra_object | empty | optional |

The spectra object is defined by: 

| Name | Type | Default value |
| --- | --- | --- |
| mz | double | - |
| intensity | double | - |

And the enumeration types used in batch advanced search request are:

| Name | Type |
| --- | --- |
| tolerance_mode_enum | “ppm”, “mDa” |
| database_enum | “all”, “all-except-mine”, “HMDB”, “LipidMaps”, “Metlin”, “Kegg”, “in-house”, “mine” |
| metabolites_type_enum | “all-except-peptides”, “only-lipids”, “all-including-peptides” |
| masses_mode_enum | “neutral”, ”mz” |
| ion_mode_enum | “neutral”, ”positive”, “negative” |
| positive_enum | ''allPositives'', M+3H, M+2H+Na, M+H+2K, M+H+2Na, M+3Na, M+2H, M+H+NH4, M+H+Na, M+H+K, M+ACN+2H, M+2Na, M+2ACN+2H, M+3ACN+2H, M+H, M+Na, M+K, M+NH4, M+H-H2O, 2M+H, 2M+Na, M+H+HCOONa, 2M+H-H2O, M+CH3OH+H, M+ACN+H, M+2Na-H, M+IsoProp+H, M+ACN+Na, M+2K-H, M+DMSO+H, M+2ACN+H, M+IsoProp+Na+H, 2M+NH4, 2M+K, 2M+ACN+H, 2M+ACN+Na, M+H-2H2O, M+NH4-H2O, M+Li, 2M+2H+3H2O, M+H+CH3COOH, M+H+CH3COOHNa |
| negative_enum | ''allNegatives'', M-3H, M-2H, M-H2O-H, M-H, M+Na-2H, M+Cl, M+K-2H, M+FA-H, M+Hac-H, M+Br, M+TFA-H, 2M-H, 2M+FA-H, 2M+Hac-H, 3M-H, M-H+HCOONa, M+F 
neutral_enum | ''allNeutral'', ''M'' |
| chemical_alphabet_enum | “CHNOPS”, “CHNOPSCL”, “ALL” |
| modifiers_type_enum | “none”, “NH3”, “HCOO”, “CH3COO”, “HCOONH3”, “CH3COONH3” |

 
The next example shows the JSON structure of a query for the Batch Advanced Search service:  

~~~
{
 "chemical_alphabet": "all",
 "modifiers_type": "none",
 "metabolites_type": "all-except-peptides",
 "databases": ["hmdb"],
 "masses_mode": "mz",
 "ion_mode": "positive",
 "adducts": ["all"],
 "deuterium": false,
 "tolerance": 10.0,
 "tolerance_mode": "ppm",
 "masses": [400.3432, ..., 288.2174],
 "all_masses": [],
 "retention_times": [18.842525, ..., 4.021555],
 "all_retention_times": [],
 "composite_spectra": [
  [{
    "mz": 400.3432,
    "intensity": 307034.88
   },
   ...,
   {
    "mz": 311.20145,
    "intensity": 400.03336
   },
   ...
  ]
 ]
}
~~~

When using the Batch Advance Search service, CMM scores the putative annotations based on expert knowledge. Thus, the response structure of this service contains all attributes already defined in [batch search section](batch-search.md), plus some other attributes:

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
| RT | double | 
| adductRelationScore | integer (Range: -2, [0..2]) |
| RTScore | integer (Range: -2, [0..2]) |

This example shows the results of a successful request: 

~~~
{
 "results": [
  {
   "RT": 8.144917,
   "adductRelationScore": -2,
   "RTscore": 2,
   "identifier": 111123,
   "EM": 338.2299,
   "name": "MG(0:0/i-12:0/0:0)",
   "formula": "C15H30O4",
   "adduct": "M+ACN+Na",
   "molecular_weight": 274.214409446,
   "error_ppm": 1,
   "ionizationScore": -2,
   "finalScore": 2,
   "kegg_compound": "",
   "kegg_uri": "",
   "hmdb_compound": "HMDB0072858",
   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0072858",
   "lipidmaps_compound": "",
   "lipidmaps_uri": "",
   "metlin_compound": "",
   "metlin_uri": "",
   "pubchem_compound": "131779644",
   "pubchem_uri": "https://pubchem.ncbi.nlm.nih.gov/compound/131779644",
   "pathways": []
  },
  ...
 ]
}
~~~