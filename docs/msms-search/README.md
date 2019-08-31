# MS/MS Search
This feature allows metabolites’ identification through tandem mass spectrometry data (MS/MS). This identification is reached based on the similarity of an input parent ion mass and the parent ion masses of the putative annotations within a tolerance. The MS/MS spectrum patterns from these putative annotations are scored against the input spectrum, which is the set of specified peaks (m/z and intensity couples). The MS/MS spectrum from the putative annotations are extracted from the CMM database. The MS/MS data was implemented from Human Metabolome Database, which includes experimental and in silico fragmentation patterns. The parameters to perform the search are illustrated below.

![msms_form](/images/msms_form.jpg)

1. Parent ion mass (m/z): The mass to search in CMM (Da).
2. MS/MS Peak List: A set of peaks (m/z, intensity) from the mass spectrum. Intensities can be introduced as absolute of relative. It is necessary to introduce just one m/z and its correspondent intensity per line, in that order and separated by a blank space. The next figure illustrates how to insert the peaks' input with absolute or relative intensities.

![msms_input_examples](/images/msms_input_examples.jpg)

3. Parent ion Tolerance: The mass difference allowed between the experimental mass and the parent ion mass. It can be specified in ppm or Da.
4. m/z Tolerance: The tolerance for peaks’ m/z matching (spectral matching). It can be specified in ppm or Da.
5. Ionization Mode: The ionization mode applied when performing MS/MS.
6. Ionization Voltage: The ionization voltage applied when performing MS/MS.
7. Type of spectra: The type of spectra over which the search if performed. The type of spectra can be experimental (MS/MS data obtained from real metabolites) and/or predicted (MS/MS data obtained through in silico fragmentation performed by HMDB). 

The score equation applied over the tandem mass spectra peaks was developed by MetFrag web tool. After testing different parameters for the weights, the best results were achieved with weight 3 for the m/z and 0.6 for the intensities.

![msms_equation](/images/msms_equation.jpg)
