# File structure

To upload an excel file to be analysed by pathway displayer of CMM, you need to press the button Choose file and, once the file was selected, submit it. 

![pathway_displayer_menu](/images/pathway_displayer.jpg)

The structure of the file should follow the structure of the downloaded files from the result list. 
 
![pathway_displayer_excel](/images/pathway_displayer_excel.jpg)

The header names of lines 1 and 2 should be present in the file, and pathways are listed in subsequent columns after the column 2.
The user should filter the result list until it only contains the annotations corresponding to the identified compounds. If the user has worked with CMM, these annotations have a list of pathways where the compound is present according to KEGG database. 

Once the excel file is loaded, CMM processes it taking into account two different parameters for ordering the pathways present in the excel file. This order may guide the researcher to focus his hypothesis in these pathways that have compounds more specific (For example, Chlorophyll is only present in pathways related to plants):
1. Specificity: In how many pathways is present the compound? It uses the formula:
  * Specificity = Min (1/numberofpathwayswherethecompoundshasbeendetected)
  * Specificity &isin; (0,1].
2. Percentage of the compounds: How many compounds of the pathway are present? It uses the formula:
  * Percentage = (Numberofcompoundspresent∈thefile∈pathway)/(Totalnumberofcompoundspresent∈thepathway)
  * Percentage &isin; (0,1].

The final order is determined by specificity and percentage. Specificity is the first parameter and, if the specificity is the same, then the percentage would be taken into account.
