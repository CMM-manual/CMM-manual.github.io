# Composite Spectrum

This section explains how to create the CS based on different signals arising from the same feature.
The next list, where x is m/z, y is the intensity, z is the charge, and s is the adduct and/or the isotope, shows different signals arising from the same feature corresponding to glutamic acid. 

1.	x=”295.1136” y=”7002.5” z=”1” s=”2M+H”
2.	x=”296.1166” y=”845.9” z=”1” s=”2M+H+1”
3.	x=”297.1184” y=”161.8” z=”1” s=”2M+H+2”
4.	x=”148.0610” y=”100212.0” z=”1” s=”M+H”
5.	x=”149.0640” y=”6052.8” z=”1” s=”M+H+1”
6.	x=”150.0655” y=”972.1” z=”1” s=”M+H+2”
7.	x=”186.0169” y=”1822.0” z=”1” s=”M+K”
8.	x=”170.0492” y=”67582.0” z=”1” s=”M+Na”
9.	x=”171.0460” y=”4075.2” z=”1” s=”M+Na+1”
10.	x=”172.0474” y=”655.5” z=”1” s=”M+Na+2”
11.	x=”74.5339” y=”192535.0” z=``2” s=”M+2H”
12.	=”75.0354” y=”11667.6” z=``2” s=”M+2H+1”
13.	x=”75.5361” y=”1867.6” z=``2” s=”M+2H+2”

This list can be represented as the following CS: 
(295.1136,7002.5), (296.1166,845.9), 297.1184,161.8), (148.0610,100212.0), (149.0640,6052.8), (150.0655,972.1), (186.0169,1822.0), (170.0492,67582.0), (171.0460,4075.2), (172.0474,655.5), (74.5339,417.192535.0), (75.0354,11667.6), (75.5361,1867.6), 
where the first number corresponds to the m/z, and the second to the intensity. Each pair of values corresponds to one signal, being either a particular adduct or its isotope(s). Nevertheless, this clustering process sometimes fails, and ions are split into separate features. CMM makes a processing to detect different features arising from the same signal (see [Annotation rules](annotations-rules.md)).
