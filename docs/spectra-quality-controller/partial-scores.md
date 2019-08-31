# Partial scores
The intensity and the noise parameters are closely related: if a spectrum with low intensity has a noise very low, the peaks can be clearly identified. For this reason, the score of the intensity has a relation with the noise score. The intensity of the MS/MS spectra score depends on the average signal of the MS mode. If the signal in MS mode is very high, the intensity of the spectrum should be also high. 

The number of scans and the number of samples are also related. When more than one sample has been analysed under MS/MS, the score is the highest. 

All the scores are normalised in the range [0,1]. A full description of the partial scores can be read above: 

1.	Intensity score: It follows a linear regression between the values specified in the MS/MS intensity lowest score and the MS/MS intensity highest score depending on the average signal intensity in MS analysis. The next table shows the range of MS/MS intensity score vs the average intensity in MS<super>1</super> analysis.

| average intensity in MS analysis | MS/MS intensity lowest score | MS/MS intensity linear regression score | MS/MS intensity highest score |
| --- | --- | --- | --- |
| &lt;= 10<super>5</super> | &lt;= 10<super>2</super> | 10<super>2</super> - 10<super>3</super> | &gt; 10<super>3</super> |
| 10<super>5</super> - 10<super>7</super> | &lt;= 10<super>3</super> | 10<super>3</super> - 10<super>4</super> | &gt; 10<super>4</super> |
| 10<super>7</super> - 10<super>8</super> | &lt;= 10<super>4</super> | 10<super>4</super> - 10<super>5</super> | &gt; 10<super>5</super> |
| &gt;= 10<super>8</super> | &lt;= 10<super>5</super> | 10<super>5</super> - 10<super>6</super> | &gt; 10<super>6</super> |

 
![intensity_score](/images/intensity_score.jpg)

* If the average intensity in MS analysis is low, (e.g. &lt;= 10<super>5</super>): 
  * Then the MS/MS intensity will be good enough for identification if it has an intensity &gt;= 10<super>3</super> (see panel A of the previous figure).
  * It will be acceptable if it is between 10<super>2</super> - 10<super>3</super>(see panel B of the previous figure).
  * It will be very difficult to identify the peaks formed from the parent ion if it is &lt;= 102 (see panel D of the previous figure). 
  * However, if the noise is below 5%, the peaks can be distinguishable (see panel C of the previous figure).
  * \* Therefore if the MS/MS intensity score is below 0.5 and above 0.3 and the noise is very low (&lt;= 5%), the intensity score is set to 0.5. 

2. Noise score: 
  * A noise percentage below 5% is considered as excellent for the identification of a compound based on its MS/MS spectrum. 
  * In the other hand, a noise percentage above 20% is high enough to lose important information above the fragments formed by the parent ion and the noise itself, so it is considered as inadequate. 
  * A linear regression is calculated if the noise is between 5 and 20% to set the score. 

3. Number of scans score: short methods cause that the width of peaks is reduced, resulting in a lower number of acquisition points across a peak. This characteristic is problematic in MS and it has a higher impact in MS/MS, especially in the cases when MS/MS scans are acquired within intervals of MS scans. To have a reliable MS/MS spectrum at least three MS/MS scans for a single peak are needed. The score is 
  * Excellent spectra with more than 5 scans – 1 point.
  * Acceptable spectra with 5 scans – 0.75 points.
  * 4 scans – 0.5 points.
  * 3 scans – 0.25 points.
  * Inadequate spectra with less than 3 scans – 0 points.
  * \* MS/MS spectra acquired across different analyses (multiple analysis) - 1 point. 
The last option is particularly devoted to the spectra acquired in data dependent mode, where number of scans is often limited to 1 or 2 and then a particular ion is excluded for certain time to allow other ions to be targeted. Following this stratification such spectra would be classified as an inadequate, therefore to overcome this and, at the same time, to ensure quality, MS/MS acquisition should be repeated. Concordance between different analyses, even for single scan, confirms reliability and consequently the quality of obtained information.

4. Co-elution score: 
  * Excellent spectra with no co-elution – 1 point.
  * Acceptable spectra with co-elution with known molecule and known fragmentation pattern – 0.5 point. 
  * Inadequate spectra with co-elution with an unknown molecule – 0 points. 
  * \* It is unthinkable to distinguish between the fragments of two different parent ions in the same MS/MS analysis if a fragmentation pattern of one of them is not available, making the identification of them almost impossible. If there is co-elution with an unknown compound, then the overall score is automatically 0, since it is not possible to know which peaks observed in MS/MS correspond to each compound. 

5. Cross-talk score: The principle of MS/MS analysis is to isolate and target molecule of interest, with the intention to obtain its fragmentation spectrum. Following this, it can be assumed that the collision cell, between different scans, is completely free of any ions preventing overlap of signals originating from different molecules. However, often the ions from one scan are delayed by fragmentation and are still ongoing when the next scan starts, especially in the case of very short inter-scan delay. This results in the mixture of ions reaching the detector, a phenomenon called cross-talk. It influences both qualitative and quantitative analysis and becomes more problematic when the acquisition rate is increased.
If there is no cross-talk in the MS/MS spectrum, the identification is feasible for this parameter. If the cross-talk has a low intensity, the identification is still possible since the main fragments formed are distinguishable based on their intensity, and a hard cross-talk hinders the identification of the parent ion. 
Fragmentation of a particular ion produces a series of its product ions which have smaller m/z than the molecule from which they originate. Consequently, a typical MS/MS spectrum does not have ions with higher mass than the precursor, unless some dimmers or clusters were formed. Therefore, one of the easiest ways to detect a cross-talk is to observe the mass region above the targeted mass. The score for the cross-talk parameter is: 
  * Excellent spectra with no cross-talk – 1 point. 
  * Acceptable spectra with cross-talk where intensities of cross-talk signals are lower than the intensity of product ions – 0.5 points 
  * Inadequate spectra with cross-talk of intensity comparable or more abundant than intensity of product ions – 0 points.

This approach has been automated in CMM for users who wants to check how much they can rely on the MS/MS spectrum from their samples. There are different aspects which join in this analysis. 

![spectral_quality_form](/images/spectral_quality_form.jpg) 

1. Average signal in MS mode: It measures the average intensity of the signals in the MS analysis of the sample. It is a floating-point number between 0 and 1,000,000,000.
2. Intensity of the MS/MS spectra: It measures the intensity of the MS/MS spectrum according to the average signal of the metabolite analysed in MS. It is necessary to indicate the average signal in MS mode as well as the overall intensity of the MS/MS spectrum. It is a floating-point number between 0 and 1,000,000,000.
3. Noise: Level of noise detected in the MS/MS spectrum under analysis. It is a floating-point number between 0 and 100, indicated as a percentage. 100 would be a spectrum where no signal is distinguishable due to the noise and 0 would be a clear spectrum where the base signal is low and all the peaks are clearly recognised. 
4. Number of scans: Number of scans acquired during the MS/MS analysis. It is an integer between 0 and 100.
5. Number of samples: Number of samples used for acquiring the MS/MS spectrum. It is an integer between 0 and 100.
6. Co-elution: Has the signal of the MS/MS spectra more than one compound? In case yes, do you know what is the other compound? If you know what the other compound is, it is possible to buy standards and pay attention to the peaks corresponding to the compound under identification study. 
7. Cross-talk: Is there cross-talk from the previous scan? The user can check it if there are signals with an m/z higher than the parent ion. The intensity of the cross-talk is important since a low signal allows the user to identify the peaks corresponding to the parent ion under analysis based on the higher intensity. 
 
