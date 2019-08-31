# Short chain oxidised lipids

Short chain oxidised glycerophosphocholines: Input data includes non-oxidised (native) fatty acid and precursor ion. Tolerance for mass matching for precursor and fatty acids can be established and oxidation type can be restricted.

Mass of precursor is subtracted by mass of the adduct (either -H or -HCOO) phosphocholine head group and then by non-oxidized fatty acid. Remain part of the molecule correspond to the oxidized fatty acid. This remained mass is subsequently subtracted by the mass of possible oxidation and then non-oxidised form is searched against fatty acid library. Then results of these searches are reported, which includes the name, molecular formula and ppm-error, displayed for each oxidation type in separate bookmarks. In this case non-oxidised precursor is not searched since it is impossible to deduce the initial length of truncated chain. For this reason, the identity of the molecule is deduced based on oxidation type and annotation of both fatty acids, e.g. PC(16:0/4:0(COOH)). Similarly to LCh-oxPC functionality here also neutral losses or fragments are needed to confirm or reject particular candidate are provided. 

In this case, it is only possible to search over oxidised precursor ion, since the oxidation in the short chain modifies the structure of the fatty acids and it is not possible to know from which lipid comes from. 
