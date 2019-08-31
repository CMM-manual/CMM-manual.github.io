# Regular expressions 

A regular expression defines a search pattern for strings. In CMM, the search pattern can be anything longer than three characters, including fixed strings or complex expressions, but all the searches are limited by 1,000 compounds due to performance issues. 
The pattern defined by the regex may match one, several or no compounds in the databases. Following this, a brief explanation about regular expressions is given below: 

* .	
  * Matches any character 
    * PC(..:2. Matches all the compounds containing two characters between PC( and :2. 
* ^regex 
  * Finds regex that must match at the beginning of the line.	
    * ^PC(..:2. Matches all the compounds starting with PC(, followed by two characters and :2.
* regex$ 
  * Finds regex that must match at the end of the line.
    * PC(..:2$. Matches all the compounds finishing with PC(, followed by two characters and :2.
* \[abc\]
  * Set definition, can match a or b or c.
    * P\[CEG\](..:2. Matches all the compounds containing PC(, PE( or PG( followed by two characters and :2.
* \[abc\]\[de\]	
  * Set definition, can match a or b or c followed by either v or z.
    * P\[CEG\](..:[2-4]. Matches all the compounds containing PC(, PE( or PG( followed by two characters, :, \[a number between 2 and 4\].
* \[^abc\] 
  * When a ^ appears at the first character inside square brackets, it negates the pattern. This matches any character except a, b or c. 
    *P\[^CEG\](..:2. Matches all the compounds containing P, any other character than C, E or G followed by (, two characters and :2.
* \[a-z0-9\] 
  * Ranges: matches a letter between a and z and digits from 0 to 9.
    * P\[CEG\](..:[2-4]. Matches all the compounds containing PC(, PE( or PG( followed by two characters, :,  \[a number between 2 and 4\].
* X|Y 
  * Finds X or Y, being X and Y regular expressions.
    * PC(..:2|PE(..:3. Matches all the compounds containing one of the regular expressions.
* XY Finds X followed directly by Y, being X and Y regular expressions.	
  * PC(..:2(.*. Matches all the compounds containing PC(, two characters, :2( followed by any number of characters.

For a full explanation of regular expressions, we recommend to read [the manual of MySQL](https://dev.mysql.com/doc/refman/8.0/en/regexp.html). 
