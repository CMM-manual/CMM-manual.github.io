# Spectral Quality Controller
This feature, explaining in depth in the [spectra quality controller section](../spectra-quality-controller/README.md), allows the user to analyse how reliable is the spectrum obtained by applying some particular rules derived from the study of hundreds of MS/MS spectra. The service is accessed through the following URI: 

[http://ceumass.eps.uspceu.es/mediator/api/spectralquality](http://ceumass.eps.uspceu.es/mediator/api/spectralquality)

To perform a query, the user must send a POST request. This request must include:
* A Content-type header set to application/json.
* A request body with a JSON object that includes all data needed for the query: The average signal of the MS mode, intensity of the MS/MS spectra and the level of noise, the number of scans, the number of samples, the coelution ions and the crosstalk phenomena.

The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below: 

| Name | Type | Default value | Optativity |
| --- | --- | --- | --- |
| averageSignal | integer (Range: 0..109) | - | mandatory |
| intensity | integer (Range: 0..100) | - | mandatory |
| noise | integer (Range: 0..100) | - | mandatory |
| scans | integer (Range: 0..100) | - | mandatory |
| samples | integer (Range: 0..100) | - | mandatory |
| coelution | coelution_enum | - | mandatory |
| crosstalk | crosstalk_enum | - | mandatory |

Since the value of some attributes is restricted to a range of literals, the enumeration types used are described below:

| Name | Type |
| --- | --- |
| coelution | “no-coelution”, “with-known-compound”, “with-unknown-compound” |
| crosstalk | “no”, “soft”, “hard” |

The next example shows the JSON structure of a query for the Spectral Quality Controller Search service:

~~~
{
    "averageSignal": 50000,
    "intensity": 80000,
    "noise": 10,
    "scans": 3,
    "samples": 1,
    "coelution": "with-known-compound",
    "crosstalk": "soft"
}
~~~

The output from this service shows the obtained score on each of the following dimensions: intensity, noise, scans, coelution and crosstalk. Also, an overall score is provided:

| Name | Type | Default value |
| --- | --- | --- |
| overallScore | double (Range: 0..5) | - |
| intensity  | double (Range: 0..1) | - |
| noise | double (Range: 0..1) | - |
| scans | double (Range: 0..1) | - |
| coelution | double (Range: 0..1) | - |
| crosstalk | double (Range: 0..1) | - |

This example shows the results of a successful request: 
 
~~~
{
    "overallScore": 2.916666666666667,
    "intensity": 1,
    "noise": 0.6666666666666667,
    "scans": 0.25,
    "coelution": 0.5,
    "crosstalk": 0.5
}
~~~