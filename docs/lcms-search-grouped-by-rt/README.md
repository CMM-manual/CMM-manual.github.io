# LC/MS Search grouped by RT
The coupling of Liquid Chromatography (LC) to Mass Spectrometry (MS) facilitates metabolites identification by reducing the complexity of the data, since it allows separation of the sample over the time. LC is the most used separation technique due to its versatility without losing too much reproducibility. 
LC-MS data provides a set of experimental masses (m/z) and retention times. These data pairs are known as features. Those features with the same retention time may be derived from the same analyte. In this case, some of the experimental masses correspond to in-source fragmentation due to the breaking of some parts of the precursor ion. 
There are software tools for peak detection as CAMERA that use the peak size and the isotopic profile information for grouping the peaks taking information from the shape of the peak and the isotopic profile. This software tools for peak detection assign the features related to the same group, but in most of the cases, they do not perform an identification of the peaks based on MS/MS data from the putative precursor ions. They group the features and they assign the possible adduct and/or neutral loose suffered by the feature, but the subsequent identification has to be performed. 
Due to that, CMM has developed a system where the user can introduce a RT window where all the features will be checked to establish relation between different adducts corresponding to the same ionization mode (positive or negative). This process is called adduct detection. Moreover, it checks if some of the peaks with no relation can correspond to fragments of the features with a higher m/z due to in-source fragmentation. 
To do that, it looks into the fragmentation spectra of putative annotations of the compounds with a higher m/z. The MS/MS spectra information of the compounds has been integrated from HMDB (experimental and predicted spectra).
A retention time zero will be assigned for those features without retention time. Features with retention time zero will not be grouped together, as they do not provide information about the elution time into the separation column. 
The full process of the LC-MS search grouping the features by their RT is: 
1.	CMM assigns different groups depending on the tolerance introduced by the user.
2.	CMM tries to detect the adduct based on the relationships between peaks within a group. 
3.	The putative annotations corresponding to different adducts are assigned to each feature. Here CMM marks features as possible fragments of the ones with a greater experimental mass. 
4.	Iterates the features marked as possible fragments. In this case, each putative fragment has a different ionization hypothesis. Depending on the ionization hypothesis, the possible precursor ion should be ionized consequently (look Table 5 and Table 6). Then, CMM considers the fragmentation pattern (information retrieved from HMDB) to check if the experimental mass of the possible fragment has been detected in the fragmentation of the putative precursor ions (annotations over the features with a higher m/z). 
Table 5 Fragments and the corresponding possible precursor ions. Positive ionization mode.
POSITIVE IONIZATION MODE
Fragment ion	Precursor ions
M+H	M+H, M+2H, M+3H, M+H-H2O, M+H+NH4, M+H+HCOONa, M+2H+Na, M+H+2K, M+H+2Na, M+H+Na, M+H+K, 2M+H, 2M+H-H2O, M+ACN+2H, M+2ACN+2H, M+3ACN+2H, M+CH3OH+H, M+ACN+H, M+IsoProp+H, M+DMSO+H, M+2ACN+H, M+IsoProp+Na+H, 2M+ACN+H
M+2H	M+2H, M+2H+Na, M+ACN+2H, M+2ACN+2H, M+3ACN+2H
M+Na	M+Na, 2M+Na, M+2H+Na, M+H+2Na, M+3Na, M+H+Na, M+2Na, M+2Na-H, M+ACN+Na, M+IsoProp+Na+H, 2M+ACN+Na
M+K	M+K, M+H+2K, M+H+K, M+2K-H, 2M+K
M+NH4	M+NH4, M+H+NH4, 2M+NH4
M+H-H2O	2M+H-H2O, M+H-H2O
M+H+NH4	M+H+NH4
M+H+HCOONa	M+H+HCOONa
M+3H	M+3H
M+2H+Na	M+2H+Na
M+H+2K	M+H+2K
M+H+2Na	M+H+2Na
M+3Na	M+3Na
M+H+Na	M+2H+Na, M+H+2Na, M+H+Na
M+H+K	M+H+2K, M+H+K
M+ACN+2H	M+3ACN+2H, M+2ACN+2H, M+ACN+2H
M+2Na	M+3Na, M+2Na, M+H+2Na, M+2Na-H
M+2ACN+2H	M+3ACN+2H, M+2ACN+2H
M+3ACN+2H	M+3ACN+2H
M+CH3OH+H	M+CH3OH+H
M+ACN+H	M+ACN+2H, M+ACN+H, M+2ACN+2H, M+3ACN+2H, M+2ACN+H, 2M+ACN+H
M+2Na-H	M+2Na-H
M+IsoProp+H	M+IsoProp+Na+H, M+IsoProp+H
M+ACN+Na	2M+ACN+Na, M+ACN+Na
M+2K-H	M+2K-H
M+DMSO+H	M+DMSO+H
M+2ACN+H	M+3ACN+2H, M+2ACN+2H, M+2ACN+H
M+IsoProp+Na+H	M+IsoProp+Na+H

Table 6 Fragments and the corresponding possible precursors ions. Negative ionization mode.
NEGATIVE IONIZATION MODE
Fragment ion	Precursor ions
M-H	M-H, M+FA-H, M-H-H2O, M-H+HCOONa, 2M-H, M+Hac-H, M+TFA-H, 2M+FA-H, 2M+Hac-H, 3M-H, M-2H, M+Na-2H, M+K-2H, M-3H,
M+Cl	M+Cl
M+FA-H	2M+FA-H, M+FA-H
M-H-H2O	M-H-H2O
M-H+HCOONa	M-H+HCOONa
M+H-H2O	2M+H-H2O, M+H-H2O
M-3H	M-3H
M-2H	M+Na-2H, M-2H, M+K-2H
M+Na-2H	M+Na-2H
M+K-2H	M+K-2H
M+H+2K	M+H+2K
M+Hac-H	M+Hac-H
M+Br	M+Br
M+TFA-H	M+TFA-H

The workflow of the entire process is shown on the Figure 26. EM refers to experimental mass and RT to retention time. The final step, the searching over possible in-source fragments, is more detailed on the Figure 27.

Figure 26 LC-MS search grouping features by RT workflow
Figure 27 In-source fragmentation search
Figure 28 shows the fields of the LC/MS search grouping the features by their RT. These fields are the same explained in 2.5, except the tolerance introduced to group the features by their RT. The only mandatory field are the experimental masses of the significant compounds, the retention times, composite spectra and non-significant features are employed to apply knowledge.
[1] Significant Experimental Masses (EM): Masses (Da) identified as different among the experimental groups during statistical analysis.
[2] Retention Time (RT): The units used do not matter since RTs are used for checking relationships between different putative annotations. The RTs introduced here correspond to the experimental masses introduced in field [1] in the same order. 
Even if RTs were not used for supporting annotations, they will be automatically reported for all the annotations, which simplifies further revision since RTs do not have to be added manually.
[3] Composite Spectra (CS): Spectra created by the summation of all co-eluting m/z ions that are related, including isotopes, adducts and dimers formed by the same compound. 
CMM takes advantage of the grouping of signals corresponding to the same feature. It automatically detects the target experimental mass and adduct calculating differences between the m/z listed in the CS. This avoids the need of to manually calculate which adduct corresponds to each feature. The goal of this step is the identification of the true mass of the compound M that generated all the signals in the CS. If this detection is successful, only the mass of M will be searched in the database, ignoring the rest of the masses' alterations. The CSs introduced here correspond to the experimental masses introduced in field [1] in the same order.
[4] All experimental Masses (EM): All masses (statistically significant and non-significant) found in a particular data set. Statistically non-significant masses provide evidence for supporting or refuting the putative annotations, but are not returned among the results of the query.
[5] All Retention Times (RT): The RTs introduced here correspond to the experimental masses introduced in field [4] in the same order. 
[6] All Composite Spectra (CS): The CSs introduced here correspond to the experimental masses introduced in field [4] in the same order. 
[7] RT Window with: is the tolerance applied to the features’ retention times in order to group them by RT. By default it is 0.05.
 [8] Tolerance: Tolerance allowed for the putative annotations regarding the statistically significant EM defined as relative(ppm) or absolute (mDa) value.
[9] Chemical Alphabet: Possible elements of the putative annotations. This option restricts the returned annotations to only those fulfilling the chosen option. The available options are CHNOPS, CHNOPS + Cl, and all elements. Compounds with deuterium can be filtered or added.
 
Figure 28 LC-MS search interface
