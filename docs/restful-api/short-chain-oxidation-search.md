# Short Chain Oxidation Search

This feature allows aims to help in the identification of the oxPCs from ESI-LC-MS/MS data. It integrates knowledge about fragmentation of oxPCs in the short chain oxidised lipids. For more information about this feature [see Short Chan Oxidation Section](../oxidised-lipids/short-chain-oxidised-lipids.md). The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/oxidationshort](http://ceumass.eps.uspceu.es/mediator/api/oxidationshort)

To perform a query, the user must send a POST request. This request must include:
* A Content-type header set to application/json.
* A request body with a JSON object that includes all data needed for the query: The non oxidized fatty acid m/z, the tolerance and the tolerance mode for the fatty acids, the precursor m/z for negative mode, its tolerance and tolerance mode, and the possible oxidations.

The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below:

| Name | Type | Default value | Optativity
| --- | --- | --- | --- |
| fatty_acid_mz | double | empty | Mandatory | 
| fatty_acid_tolerance | double (range: [0..100]) | 10 | Mandatory |
| fatty_acid_tolerance_mode | tolerance_mode_enum | “ppm” | Mandatory |
| precursor_mz_negative | double | empty | Mandatory |
| precursor_tolerance | double (range: [0..100]) | 10 | Mandatory |
| precursor_tolerance_mode | tolerance_mode_enum | “ppm” | Mandatory |
| oxidations | oxidations_enum | “allOxidations” | Mandatory |

Since the value of some attributes is restricted to a range of literals,  enumeration types are defined below:

| Name | Type |
| --- | --- |
| tolerance_mode_enum | “ppm”, “mDa” |
| oxidations_enum | “allOxidations”, “CO”, “COOH” |

The next example shows the JSON structure of a query for the Short Chain Oxidation Search service:

~~~
{
 "fatty_acid_mz": 255.233,
 "fatty_acid_tolerance": 10.0,
 "fatty_acid_tolerance_mode": "ppm",
 "precursor_mz_negative": 638.3675,
 "precursor_tolerance": 10.0,
 "precursor_tolerance_mode": "ppm",
 "oxidations": ["allOxidations"]
}
~~~

The output from this interface provides a list of the identified lipids:


| Name | Type | Default value |
| results | Array of lipid_objects | - |

Each lipid object contains:

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
| mz_precursor_negative_M_HCOO | double (if neutral_losses_negative is not empty) |
| neutral_losses_negative | array of doubles |
| putative_annotations_oxidized | array of putative_annotation |
| putative_annotations_non_oxidized | array of putative_annotation |

Each putative annotation contains:

| Name | Type |
| --- | --- |
| name | string |
| uri | string |

This example shows the results of a successful request: 
 
~~~
{
 "results": [
  {
   "oxidized_FA_mass": 115.03955999999994,
   "non_oxidized_FA_mass": 255.233,
   "precursor_mass": 638.3675,
   "adduct_type": "M+FA-H",
   "oxidation_type": "COH",
   "name": "PC(16:0/5:0[COH])",
   "formula": "C29H58NO8P",
   "molecular_weight": 593.3691513482,
   "error_ppm": 0,
   "neutral_losses_positive": [],
   "mz_precursor_negative_M_HCOO": 593.3691513482,
   "neutral_losses_negative": [-59.0371],
   "putative_annotations_oxidized": [
     {
      "name": "PC(16:0/5:0(CHO))\n1-palmitoyl-2-(5-oxovaleroyl)-sn-glycero-3-phosphocholine\nOV-PC",
      "uri": ""
     }
    ],
   "putative_annotations_non_oxidized": []
  }
 ]
}

~~~