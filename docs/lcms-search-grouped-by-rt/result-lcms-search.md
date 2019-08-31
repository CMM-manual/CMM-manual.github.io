# Result LC-MS Search
The output from this functionality is a couple of nested lists. The outer list corresponds to the different retention times, the inner list consists on; first the set of annotations grouped by adduct and secondly the possible parents if the feature can be a fragment. The result list interface with an example is illustrated on Figure 30. and Figure 31. The input data is shown in Figure 29. The input masses mode was m/z with positive ionization mode and only M+H and M+Na adducts were selected.
[1] Outer list: Consist on the different retention times. Since in the input we had two distinct retention times, this outer list only has two tabs.
[2] Inner list: Consist on the different features grouped within a retention time. In the example, since we are in RT 18.842525 there are three tabs for the three features with that retention time.
[3] Annotations grouped by adduct: The first part of the inner list illustrates the different annotations grouped by the selected adducts of a feature. Figure 30.¡Error! No se encuentra el origen de la referencia. shows three putative annotations with adduct M+Na from feature with mass 192.0743.
[4] Possible precursor ions: The second part of the inner list illustrates the possible parents of the actual feature and its corresponding adduct. Figure 31 illustrates the feature with mass 90.021938 does not have annotations but is a possibly an in-source fragment from one of the two different annotations of the feature with a EM 192 and a RT withing the window established by the user. The “parent” feature mass in inside the red square.
 
Figure 29 Input data for LC-MS search

Figure 30 LC-MS grouped by RT output. Annotations grouped by adduct from feature with mass 192.0743 and RT 18.8425

Figure 31 LC-MS grouped by RT output. Possible precursor ions of the feature with mass 90.021938 considered a fragment
