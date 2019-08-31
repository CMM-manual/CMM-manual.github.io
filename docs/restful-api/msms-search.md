# MS/MS Search

This feature allows metabolites’ identification through tandem mass spectrometry data (MS/MS). This identification is reached based on the similarity of an input parent ion mass and the parent ion masses of the putative annotations within a tolerance. For more information about this feature, [see the MS/MS search section](../msms-search/README.md). The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/msmssearch](http://ceumass.eps.uspceu.es/mediator/api/msmssearch)

To perform a query, the user must send a POST request. This request must include:
* A Content-type header set to application/json.
* A request body with a JSON object that includes all data needed for the query: The mass to search in CMM, a set of peaks (m/z, intensity) from the mass spectrum (check [section MS/MS search](../msms-search/README.md)), the parent ion tolerance, m/z tolerance, the ionization mode and ionization voltage applied when performing MS/M, and the type of spectra over which the search if performed. The type of spectra can be experimental and/or predicted.

The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below: 

| Name | Type | Default value | Optativity |
| --- | --- | --- | --- |
| ion_mass | double | empty | mandatory |
| ms_ms_peaks | array of ms_ms_Peak objects | false | mandatory |
| precursor_ion_tolerance | double (range: [0..100]) | 10 | mandatory |
| precursor_ion_tolerance_mode | tolerance_mode_enum | “ppm” | mandatory |
| precursor_mz_tolerance | double (range: [0..100]) | 10 | mandatory |
| precursor_mz_tolerance_mode | tolerance_mode_enum | “ppm” | mandatory |
| ion_mode | ion_mode_enum | “positive” | mandatory |
| ionization_voltage | ionization_voltage_enum | “low” | mandatory |
| spectra_types | array of spectra_type_enum types | “experimental” | mandatory |

The ms_ms_peak contains:

| Name | Type | Default value |
| --- | --- | --- |
| mz | double | - |
| intensity | double | - |

Since the value of some attributes is restricted to a range of literals, the defined enumeration types are described below.

| Name | Type |
| --- | --- |
| tolerance_mode_enum | “ppm”, “mDa” |
| ion_mode_enum | ”positive”, “negative” |
| ionization_voltage_enum | “low”, “medium”, “high”, “all” |
| spectra_type_enum | “experimental”, “predicted” |

The next example shows the JSON structure of a query for the MS/MS Search service:

~~~
{
 "ion_mass": 147.0,
 "ms_ms_peaks": [
  {"mz": 40.948, "intensity": 0.174},
  {"mz": 56.022, "intensity": 0.424},
  {"mz": 84.37, "intensity": 53.488},
  {"mz": 101.5, "intensity": 8.285},
  {"mz": 102.401, "intensity": 0.775},
  {"mz": 129.67, "intensity": 100.0},
  {"mz": 146.966, "intensity": 20.07}
 ],
 "precursor_ion_tolerance": 100.0,
 "precursor_ion_tolerance_mode": "mDa",
 "precursor_mz_tolerance": 500.0,
 "precursor_mz_tolerance_mode": "mDa",
 "ion_mode":"positive",
 "ionization_voltage": "low",
 "spectra_types": ["experimental"]
}
~~~

The output from this interface provides a list of ranked metabolites’ identifications:

| Name | Type | Default value |
| --- | --- | --- |
| results | Array of MS_MS_compound_objects | - |

Each MS_MS_compound contains:

| Name | Type |
| --- | --- |
| spectral_display_tools | spectra_type_enum |
| identifier | integer |
| hmdb_compound | string |
| hmdb_uri | string |
| mass | double |
| score | integer (Range: -2, [0..2]) |

This example shows the results of a successful request:

~~~
{
 "results": [
  {
   "spectral_display_tools": "Experimental",
   "identifier": 147619,
   "hmdb_compound": "HMDB0000641",
   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000641",
   "name": "L-Glutamine",
   "formula": "C5H10N2O3",
   "mass": 146.069142196,
   "score": 0.9329460115162349
  },
  {
   "spectral_display_tools": "Experimental",
   "identifier": 27610,
   "hmdb_compound": "HMDB0000422",
   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000422",
   "name": "2-methyl-glutaric acid",
   "formula": "C6H10O4",
   "mass": 146.057908808,
   "score": 0.9128931813574501
  }
}
~~~