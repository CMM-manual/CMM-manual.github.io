# Batch Search

Batch search enables the user to find metabolites trough the m/z or the neutral masses. The list of EMs can be uploaded in a .txt, .csv, .xls or .xlsx file. The header of the EM should be called “masses”, and all the values in this column will be handled as decimal floating point. 

![CMM_batch_search_form](/images/batch_search_form.jpg)

1. Experimental Masses (EM): Masses to search in CMM (Da).
2. Tolerance: Tolerance allowed for the putative annotations regarding the EM (ppm or mDa).
3. Databases: The putative annotations should be present in the databases chosen by the user (Kegg, HMDB, LipidMaps, Metlin or MINE).
4. Metabolites: Metabolite types to search. The user can filter the results based on the metabolite type. It may be used for excluding peptides, look only into lipids or perform a query over all type of metabolites.
5. Masses mode: The user introduces the EM in neutral or m/z mode. If the user is working with neutral masses, CMM performs searches over positive or negative mode based on the hypothesis of the neutral mass calculated as [M-H]- or [M+H]+. That means that the EM will correspond to the m/z obtained in the mass spectrometer with the addition or subtraction of the mass of the hydrogen (H). 
6. Ionization mode: The user wants to perform searches over a mass obtained in positive or negative mode. Depending on the ionization mode, the possible adducts formed differ. 
7. Adducts: The possible adducts formed when running the experiment. The user may choose between different adducts in negative or positive mode. All the possible alterations of the mass of the original metabolite (M) given by the selected adducts will be searched by CMM. The list of possible adducts in negative and positive modes are described in [Adducts section](adducts.md). 
