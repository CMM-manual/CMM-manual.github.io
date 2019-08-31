# Result List
Once the user has performed any type of query (see sections [Simple Search](simple-search.md), [Advanced Search](advanced-search.md), [Batch Search](batch-search.md), [Batch Advanced Search](batch-advanced-search.md)), a list of results is returned by CMM. 

![results_list](/images/result_list_labelled.jpg)

1. Compound Id: CMM Id.
2. Name: Name of the putative annotation compound.
3. Formula: Formula of the putative annotation compound.
4. Molecular weight: Molecular weight of the putative annotation compound.
5. Retention time: Retention time introduced by the user for the experimental mass (see [18]).
6. Error PPM: Difference in parts per million (ppm or mDa) between the molecular weight and the corresponding experimental mass ([18]) and it corresponding adduct ([19]).
7. Score 1: Score for ionization rules (see &chi;<sub>1</sub> in [Annotation rules](annotation-rules.md)). The code colour is structured in four ranges: 
* [0, 0.5) is red and means that this annotation is very likely wrong.
* [0.5, 1) is orange and means that this annotation is likely wrong.
* [1, 1.5) is yellow and means that this annotation is likely right.
* [1.5, 2] is green and means that this annotation is very likely right.
8. Score 2: Score for adduct formation rules (see &chi;<sub>2</sub> in [Annotation rules](annotation-rules.md)). The code colour is the same than for score 1.
9. Score 3: Score for lipid elution order (see &chi;<sub>3</sub> in [Annotation rules](annotation-rules.md)). The code colour is the same than for score 1.
10. Final score: Integrated score (see &chi; in [Annotation rules](annotation-rules.md)). The code colour is the same than for score 1.
11. Cas: CAS Id.
12. KEGG Id: KEGG ID and its corresponding link.
13. HMDB Id: HMDB ID and its corresponding link.
14. LipidMaps Id: LipidMaps ID and its corresponding link.
15. Metlin Id: Metlin ID and its corresponding link.
16. PubChem Id: Pub Chemical Id and its corresponding link.
17. Pathways: Pathways from KEGG where the compound is present and its corresponding link.
18. Experimental mass: Experimental mass introduced by the user.
19. Adduct: Corresponding adduct for this table.
20. Number of hits: Number of hits found for the search corresponding to experimental mass ([18]) and its corresponding adduct ([19]). 
21. Generate Excel: Button which generates an Excel file with the complete result list (all experimental masses and adducts). This excel file contains the same fields that the on-line interface and the same code colour explained in [7].
