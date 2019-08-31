# Annotations rules
Ceu Mass Mediator scores the putative annotations based on expert knowledge. This knowledge applied is especially devoted to lipids using Liquid Chromatography. It uses 143 rules divided in three main types:
* &chi;<sub>1</sub>: Propensity of particular adducts formation depending on the lipid class, ionisation mode and mobile phase modifier used. Lipids belonging to particular class may always form some adducts in certain experimental conditions, whereas they may form others in different conditions. The mobile phase modifier used is indicated manually by the user. For example, phosphocholine in negative mode primarily form [M+HCOO]- or [M+CH3COO]- depending on the modifier used (HCOO- or CH3COO-); they may also form [M+Cl]- with lower intensity; and they never form [M-H]-. Lipid classes used in these rules are obtained from the [LipidMaps Classification](https://www.lipidmaps.org/data/classification/LM_classification_exp.php): 
  * PC
  * LPC
  * PE
  * LPE
  * PI
  * PG
  * PS
  * LPS
  * PA
  * MG
  * DG
  * TG
  * CER
  * SM 
  * CE 
* &chi;<sub>2</sub>: Relationship between signals of different adducts from the same compound (Lynn et al., 2015). We only expect certain types of adducts when others are present. For example, glycerophosphoethanolamines (PE) may form [M+Na]+ adduct, but only when [M+H]+ adduct is also formed in higher abundance. If an experimental mass (738.5044 Da) is compatible with a [M+Na]+ adduct of PE(34:2), but the adduct [M+H]+ (716.5225 Da) is not present in the whole data matrix, CMM decreases the score of the annotation of PE(34:2) for experimental mass 738.5044 Da and adduct [M+Na]+.
* &chi;<sub>3</sub>: Relative RT based on the lipid class and the length and number of double bounds in the lipid carbon chains (Godzien et al., 2016). For example, RT of LPG(18:0) must be greater than RT of LPG(16:0); and RT of LPG(18:0) must be greater than RT of LPG(18:2). 
CMM calculates a score for each of these three rule types (&chi;<sub>1</sub>, &chi;<sub>2</sub>, &chi;<sub>3</sub>) and then it integrates them by computing their weighted geometric mean:

![annotation_rules_equation](/images/annotation_rules_equation.jpg)

where &omega;<sub>i</sub> is the weight of each score and &chi;<sub>i</sub> is the punctuation for each score. &omega;<sub>1</sub> = 1, &omega;<sub>2</sub> = 1 and &omega;<sub>3</sub> &isin; [0, 2]. &omega;<sub>3</sub> depends on the number of rules applied for lipid elution time. This is the only rule type that can be triggered a variable number of times for the same annotation, depending on how many other lipid annotations with which the retention time of the annotation to be scored can be compared with. The more rules have been triggered, the more evidence supporting or refuting the annotation would have been gathered, the more weight this evidence should have on the final score. Internally all &chi;<sub>i</sub> &isin; [0, 1], corresponding 0 with a completely refuted annotation, 1 with an annotation for which all the possible evidence is available and it is positive, and the value of 0.5 with an annotation for which there is no evidence (neither refuting nor supporting) but the annotation’s mass matches the query parameters. However, scores are multiplied by 2 in the user interface because our experience has shown us that it is more intuitive to the researchers to see a final score in the interval [0, 2]. 
