# Long Chain Oxidation Search

This feature allows aims to help in the identification of the oxPCs from ESI-LC-MS/MS data. It integrates knowledge about fragmentation of oxPCs in the long chain oxidised lipids. For more information about this feature [see Long Chan Oxidation Section](../oxidised-lipids/long-chain-oxidised-lipids.md). The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/oxidationlong](http://ceumass.eps.uspceu.es/mediator/api/oxidationlong)

To perform a query, the user must send a POST request. This request must include:
* A Content-type header set to application/json.
* A request body with a JSON object that includes all data needed for the query: One or two fatty acid’s m/z, their tolerance and tolerance mode, the precursor m/z for negative mode, its tolerance and tolerance mode, and the possible oxidations.

The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below:

Table 25 Long Chain Oxidation Search Service – Request – Query –Attributes
| Name | Type | Default value | Optativity |
| --- | --- | --- | --- |
| fatty_acid_1_mz | double | empty | mandatory |
| fatty_acid_tolerance | double (range: [0..100]) | 10 | mandatory |
| fatty_acid_tolerance_mode | tolerance_mode_enum | “ppm” | mandatory |
| precursor_mz_negative | double | empty | mandatory |
| precursor_tolerance | double (range: [0..100]) | 10 | mandatory |
| precursor_tolerance_mode | tolerance_mode_enum | “ppm” | mandatory |
| oxidations | oxidations_enum | “allOxidations” | mandatory |
| fatty_acid_2_mz | double | empty | optional |

Since the value of some attributes is restricted to a range of literals, the enumeration types are defined below:

| Name | Type |
| --- | --- |
| tolerance_mode_enum | “ppm”, “mDa” |
| oxidations_enum | “allOxidations”, “O”, “OH”, “OH-OH”, “OOH” |

The next example shows the JSON structure of a query for the Long Chain Oxidatiom Search service: 

~~~
{
 "fatty_acid_1_mz": 319.2285,
 "fatty_acid_2_mz": 255.233,
 "fatty_acid_tolerance": 10.0,
 "fatty_acid_tolerance_mode": "ppm",
 "precursor_mz_negative": 842.5572,
 "precursor_tolerance": 10.0,
 "precursor_tolerance_mode": "ppm",
 "oxidations": ["allOxidations"]
}
~~~

The output from this interface provides a list of the identified lipids. 

| Name | Type | Default value | 
| --- | --- | --- |
| results | Array of lipid_objects | - | 

Each lipid_object contains:

| Name | Type |
| --- | --- |
| oxidized_FA_mass | double |
| non_oxidized_FA_mass | double |
| precursor_mass | double |
| adduct_type | string |
| oxidation_type | string |
| name | string |
| formula | string |
| molecular_weight | double |
| error_ppm | double |
| mz_precursor_positive_M_H | double (if neutral_losses_positive is not empty) |
| neutral_losses_positive | array of doubles |
| mz_precursor_negative_M_HCOO | Double (if neutral_losses_negative is not empty) |
| neutral_losses_negative | array of doubles |
| putative_annotations_oxidized | array of putative_annotation_object |
| putative_annotations_non_oxidized | array of putative_annotation_object |

Each putative_annotation_object
| Name | Type |
| --- | --- |
| name | string |
| uri | string |

This example shows the results of a successful request: 

~~~
{
 "results": [
  {
   "oxidized_FA_mass": 319.2285,
   "non_oxidized_FA_mass": 255.233,
   "precursor_mass": 842.5572,
   "adduct_type": "M+FA-H",
   "oxidation_type": "O",
   "name": "PC(16:0/20:3[O])",
   "formula": "C44H82NO8P",
   "molecular_weight": 797.5569521186,
   "error_ppm": 2,
   "neutral_losses_positive": [],
   "neutral_losses_negative": [],
   "putative_annotations_oxidized": [],
   "putative_annotations_non_oxidized": [
     {
      "name": "PC(16:0/20:3(8E,11E,14E))",
      "uri": "http://www.lipidmaps.org/data/LMSDRecord.php?LMID=LMGP01010624"
     }
    ]
  }
}
~~~