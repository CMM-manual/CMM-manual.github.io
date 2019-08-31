# Browse Search

Browse Search allows the user to find metabolites based on the name or the formula. The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/browsesearch](http://ceumass.eps.uspceu.es/mediator/api/browsesearch)

To perform a query, the user must send a POST request. This request must include:

* A Content-type header set to application/json.
* A request body with a JSON object that includes all data needed for the query: name to search, exact name to indicate if the given name is an exact match or a regular expression ([see regular expressions](../browse-search/regular-expressions.md)), formula to search, exact formula to indicate if the given formula is an exact match or a regular expression, the databases that will be included in the search and the metabolites that will appear in the search.

When no exact name or formula is selected, this service will use regular expressions, as explained in [section of browse search](../browse-search/README.md). 
The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below:

| Name | Type | Default value | Optativity
| --- | --- | --- | --- |
| name | string | empty | Mandatory |
| exactName | boolean | false | Mandatory |
| formula | String | empty | Mandatory |
| databases | array of database_enum | “all-except-mine” | Mandatory |
| metabolites_type | metabolites_type_enum | “all-except-peptides” | Mandatory |

Since the value of some attributes is restricted to a range of literals, ¡Error! No se encuentra el origen de la referencia. shows the defined enumeration types:

| Name | Type |
| --- | --- |
| database_enum | “all”, “all-except-mine”, “HMDB”, “LipidMaps”, “Metlin”, “Kegg”, “in-house”, “mine” |
| metabolites_type_enum | “all-except-peptides”, “only-lipids”, “all-including-peptides” |

The next example shows the JSON structure of a query for the Browse Search service:

~~~
{
 "name":"choline",
 "exactName":false,
 "formula":"C5H14NO",
 "exactFormula":false,
 "databases":["all-except-mine"],
 "metabolites_type":"all-except-peptides"
}

~~~

When using the Browse Search service, CMM returns a list of theoretical compounds that match the search values: 

| Name | Type | Default value |
| --- | --- | --- |
| results | Array of theoretical_compound_objects | 

Where each theoretical_compound_object contains:

| Name | Type |
| --- | --- |
| identifier | integer |
| name | string |
| formula | string |
| molecular_weight | double |
| cas | string |
| hmdb_compound | string |
| hmdb_uri | string |
| metlin_compound | string |
| metlin_uri | string |
| lipidmaps_compound | string |
| lipidmaps_uri | string |
| kegg_compound | string |
| kegg_uri | string |
| pubchem_compound | string |
| pubchem_uri | string |
| inChiKey | string |
| pathways | array of Pathway objects |

The pathway object contains the attributes:

| Name | Type |
| --- | --- |
| name | string |
| uri | string |

This example shows the results of a successful request: 
 
~~~
{
 "results": [
  {
   "identifier": 117801,
   "name": "Choline",
   "formula": "C5H14NO",
   "molecular_weight": 104.107539075,
   "cas": "62-49-7",
   "hmdb_compound": "HMDB0000097",
   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000097",
   "metlin_compound": "56",
   "metlin_uri": "https://metlin.scripps.edu/metabo_info.php?molid=56",
   "lipidmaps_compound": "",
   "lipidmaps_uri": "http://www.lipidmaps.org/data/LMSDRecord.php?LMID=",
   "kegg_compound": "C00114",
   "kegg_uri": "http://www.genome.jp/dbget-bin/www_bget?cpd:C00114",
   "pubchem_compound": "305",
   "pubchem_uri": "https://pubchem.ncbi.nlm.nih.gov/compound/305",
   "inChiKey": "OEYIOHPDSNJKLS-UHFFFAOYSA-N",
   "pathways": [
    {
     "name": "Glycine and Serine Metabolism",
     "uri": "http://www.genome.jp/kegg-bin/show_pathway?map00260"
    },
    {
     "name": "Methionine Metabolism",
     "uri": "http://www.genome.jp/kegg-bin/show_pathway?map00270"
    }
   ]
}

~~~