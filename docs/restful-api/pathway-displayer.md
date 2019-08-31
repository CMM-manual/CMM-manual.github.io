# Pathway Displayer
As stated in the [pathway displayer section](../pathway-displayer/README.md), this service extracts information from a list of already identified compounds in order to perform a rank about the pathways. The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/pathwaydisplayer](http://ceumass.eps.uspceu.es/mediator/api/pathwaydisplayer)

To perform a query, the user must send a POST request. This request must include:
* A Content-type header set to application/json.
* A request body with a JSON object that includes all data needed for the query: The list of putative annotation objects (as defined in the table of putative annotations, in the [batch advanced search section](batch-advanced-search.md)) with extended info about its pathways.
The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below:

| Name | Type | Default value | 
| --- | --- | --- |
| compounds | Array of extended putative annotation objects with extended pathways | - |

As seen earlier, the structure of the putative annotation objects must fulfill the requirements established in the table of putative annotations, in the [batch advanced search section](batch-advanced-search.md)). But the field "pathways" (previously defined as a string) must be extended. The following table defines the structure of the extended pathway that should be included in each object:

| Name | Type | Default value | Optativity |
| --- | --- | --- | --- |
| name | string | - | mandatory |
| uri | string | - | mandatory |
| identifier | string | - | mandatory |

The next example shows the JSON structure of a query for the Pathway Displayer service:

~~~
{
 "compounds": 
 [
  {
   "identifier": 139243,
   "EM": 174.1109,
   "RT": 1.1756,
   "name": "L-Arginine",
   "formula": "C6H14N4O2",
   "adduct": "M+H",
   "molecular_weight": 174.1117,
   "error_ppm": 4,
   "adductRetentionScore": 0.0,
   "ionizationScore": 0.0,
   "RTScore": 0.0,
   "finalScore": 0.0,
   "cas": "74-79-3",
   "kegg_compound": "C00062",
   "kegg_uri": "http://www.genome.jp/dbget-bin/www_bget?cpd:C00062",
   "hmdb_compound": "HMDB0000517",
   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000517",
   "lipidmaps_compound": "",
   "lipidmaps_uri": "",
   "metlin_compound": "13",
   "metlin_uri": "https://metlin.scripps.edu/metabo_info.php?molid=13",
   "pubchem_compound": "6322",
   "pubchem_uri": "https://pubchem.ncbi.nlm.nih.gov/compound/6322",
   "inChiKey": "ODKSFYDXXFIFQN-BYPYZUCNSA-N",
   "pathways": [
    {
     "identifier": "map00260",
     "name": "Glycine and Serine Metabolism",
     "uri": "http://www.genome.jp/kegg-bin/show_pathway?map00260"
    },
    ...
    {
     "identifier": "map0513",
     "name": "Salmonella infection",
     "uri": "http://www.genome.jp/kegg-bin/show_pathway?map05132"
    }
   ]
  },
  ...
 ]
}
~~~

The output from this service provides, for each extended pathway, two list of putative annotation objects: a list including all compounds that are part of that pathway, and other list with those components that are not included in it: 


| Name | Type | Default value | 
| --- | --- | --- |
| pathways | Array of OutputPathway | - |

Each output_pathway consists of: 

| Name | Type | Default value |
| --- | --- | --- |
| identifier | string | - |
| name | string | - |
| uri | string | - |
| compounds_found | Array of extended putative annotation objects with extended pathways | - |
| compounds_not_found | Array of extended putative annotation objects with extended pathways | - |

This example shows the results of a successful request: 

~~~
{"pathways": 
 [
  {
	"identifier": "map05132",
	"name": "Salmonella infection",
	"uri": "http://www.genome.jp/kegg-bin/show_pathway?map05132"
	"compounds_found": [{
		"identifier": 139243,
		"EM": 174.1109,
		"RT": 1.1756,
		"name": "L-Arginine",
		"formula": "C6H14N4O2",
		"adduct": "M+H",
		"molecular_weight": 174.1117,
		"error_ppm": 4,
		"adductRetentionScore": 0.0,
		"ionizationScore": 0.0,
		"RTScore": 0.0,
		"finalScore": 0.0,
		"cas": "74-79-3",
		"kegg_compound": "C00062",
		"kegg_uri": "http://www.genome.jp/dbget-bin/www_bget?cpd:C00062",
		"hmdb_compound": "HMDB0000517",
		"hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000517",
		"lipidmaps_compound": "",
		"lipidmaps_uri": "",
		"metlin_compound": "13",
		"metlin_uri": "https://metlin.scripps.edu/metabo_info.php?molid=13",
		"pubchem_compound": "6322",
		"pubchem_uri": "https://pubchem.ncbi.nlm.nih.gov/compound/6322",
		"inChiKey": "ODKSFYDXXFIFQN-BYPYZUCNSA-N",
		"pathways": [{
			"identifier": "map00260",
			"name": "Glycine and Serine Metabolism",
			"uri": "http://www.genome.jp/kegg-bin/show_pathway?map00260"
		},
		...
		{
			"identifier": "map05132",
			"name": "Salmonella infection",
			"uri": "http://www.genome.jp/kegg-bin/show_pathway?map05132"
		}
		]}],
"compounds_not_found": []
},
...
  }
 ]
}
~~~