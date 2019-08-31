# Oxidised Lipids
The biological role of oxidised glycerophosphocholines (PCs) is a current topic of research, with new and very important contributions to the health and disease state still being made. Therefore, global, non-targeted metabolomics offers a very good approach to expand current knowledge and to link oxidised glycerophosphocholines (oxPCs) with new biological functions. 

This functionality aims to help in the identification of the oxPCs from ESI-LC-MS/MS data. It integrates knowledge about fragmentation of oxPCs in the long and the short chain oxidised lipids. The oxidation and fragmentation process differ depending on the oxidised chain, therefore these oxidations should be handled different. 

Information about the oxidation products of oxPCs was added. There are a limited number of oxPCs listed in current databases online, so some of them were added to CMM. Added data contain accurate monoisotopic masses, chemical formulae, as well as systematic and common names of the studied compounds. The database is continuously updated with new oxidation products found in biological experiments. 

An indoor-built library for fatty acid chains was created: It covers fatty acids from C3:0 till C36:6 with all intermediate degrees of chain length and unsaturation. The name, the monoisotopic mass and the formula are the descriptors of the fatty acids. The name is given as CX:Y, where X indicates the number of carbons in chains and Y specifies the number of double bonds. 

The recognition of oxPCs firstly hypothesised based on the fragmentation patters observed in biological samples and then confirmed by means of authentic standards. Annotation assumes that an unidentified (for LCh-oxPC) or missing (for SCh-oxPC) fatty acid from the mid-mass region of a negative ionisation mode fragmentation spectrum is oxidised.

This is the interface of the CMM oxidised lipids identification for long and short chain oxidation

![oxidation](/images/oxidation.jpg)

The workflow for identifying oxidised lipids in non-targeted studies is explained below: 

![schema_ox_oxidation](/images/schema_ox_oxidation.jpg)

The next two section explains specifically how the recognition of long chain oxidation and short chain oxidation lipids works. 