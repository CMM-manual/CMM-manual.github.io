# Batch Advanced Search
Batch advanced search enables the user to find metabolites trough the m/z or the neutral masses query parameters explained in [Advanced search](advanced-search.md). In addition, it has three input fields devoted to biomarker discovery experiments. The experimental masses corresponding to non-significant features together with its corresponding RT and CS may be introduced to provide evidences that support or refute the putative annotations. However, the putative annotations of the compounds introduced in all experimental masses field, but not included in significant experimental masses, are not returned in the result list. The list of EM, RT and CS for significant and all features can be uploaded in a .txt, .csv, .xls or .xls file. The header of the EM should be called “masses”, the header of the RT should be called “RT” and the header of the CS should be called “CS”. Values from masses and RT will be handled as decimal floating point. Values in CS should follow the format specified in the [Composite Spectrum section](composite-spectrum.md).

![CMM__batch_advanced_search_form](/images/batch_advanced_search_form.jpg)

The only mandatory field regarding to the features obtained in the mass spectrometer are the experimental masses of the significant compounds. RT, CS and non-significant experimental masses are optional fields that will be used by CMM for applying knowledge based on the rules explained in the [Annotation rules](annotations-rules.md). The more information the user provides in the form, the more evidence can be used for supporting or refuting the putative annotations. 
1. Significant Experimental Masses (EM): Masses (Da) identified as different among the experimental groups during statistical analysis.
2. Retention Time (RT): The units used do not matter since RTs are used for checking relationships between different putative annotations. The RTs introduced here correspond to the experimental masses introduced in field [1] in the same order. 
Even if RTs were not used for supporting annotations, they will be automatically reported for all the annotations, which simplifies further revision since RTs do not have to be added manually.
3. Composite Spectra (CS): Spectra created by the summation of all co-eluting m/z ions that are related, including isotopes, adducts and dimers formed by the same compound. 
CMM takes advantage of the grouping of signals corresponding to the same feature. It automatically detects the target experimental mass and adduct calculating differences between the m/z listed in the CS. This avoids the need of to manually calculate which adduct corresponds to each feature. The goal of this step is the identification of the true mass of the compound M that generated all the signals in the CS. If this detection is successful, only the mass of M will be searched in the database, ignoring the rest of the masses' alterations. The CSs introduced here correspond to the experimental masses introduced in field [1] in the same order.
4. All experimental Masses (EM): All masses (statistically significant and non-significant) found in a particular data set. Statistically non-significant masses provide evidence for supporting or refuting the putative annotations, but are not returned among the results of the query.
5. All Retention Times (RT): The RTs introduced here correspond to the experimental masses introduced in field [4] in the same order. 
6. All Composite Spectra (CS): The CSs introduced here correspond to the experimental masses introduced in field [4] in the same order. 
7. Tolerance: Tolerance allowed for the putative annotations regarding the statistically significant EM defined as relative(ppm) or absolute (mDa) value.
8. Chemical Alphabet: Possible elements of the putative annotations. This option restricts the returned annotations to only those fulfilling the chosen option. The available options are CHNOPS, CHNOPS + Cl, and all elements. Compounds with deuterium can be filtered or added.
9. Modifiers: Mobile phase modifier used. Depending on this modifier, the adduct formation may change. They are considered in the [adduct formation rules](annotations-rules.md). Options available are: NH3, HCOOH, CH3COOH, HCOONH4, and CH3COONH4. 
10. Databases: Search is performed against databases selected by the user: Kegg, HMDB, LipidMaps, Metlin and/or MINE.
11. Metabolites: Types of metabolites to search. The user can filter the results based on the metabolite type. It may be used for excluding peptides, looking only for lipids or performing a query over all types of metabolites. CMM considers as lipids the compounds present in LipidMaps.
12. Masses mode: The user introduces the EM as neutral or m/z. Neutral mass search offers three possibilities: true neutral mass search or positive/negative mass search. The second and third options are available considering the fact that often the neutral mass obtained during data re-processing does not correspond to [M+H]+ or [M-H]-. 
This is because these ions are used as default ones by many reprocessing software when only a single adduct is detected. However, some compounds, due to their chemical properties, do not form such ions. Consequently, the neutral mass assigned by the software is wrong. To overcome this, when choosing the option positive or negative for neutral mass mode, CMM turns the neutral mass to m/z and performs searches across the databases using this m/z instead of the neutral mass.
13. Ionization mode: The user indicates whether the masses were obtained in positive or negative mode. Depending on the ionization mode, the possible adducts differ.
14. Adducts: The possible adducts formed when running the experiment. The user can choose between different adducts in negative or positive mode. The list of possible adducts in negative and positive modes are shown in Figure 3 and Figure 4. All the possible alterations of the mass of the original metabolite (M) given by the selected adducts will be searched by CMM.

Batch advanced search process all information provided (significant EM are mandatory, RT, CS and non-significant EM are optional) for scoring the putative annotations based on the [Annotation rules](annotations-rules.md).
