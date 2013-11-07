//Q array for tests of form factors
qs = [0.00100,0.00255,0.00411,0.00566,0.00722,0.00877,0.01033,0.01188,
      0.01344,0.01499,0.01655,0.01810,0.01966,0.02121,0.02277,0.02432,
      0.02588,0.02743,0.02898,0.03054,0.03209,0.03365,0.03520,0.03676,
      0.03831,0.03987,0.04142,0.04298,0.04453,0.04609,0.04764,0.04920,
      0.05075,0.05230,0.05386,0.05541,0.05697,0.05852,0.06008,0.06163,
      0.06319,0.06474,0.06630,0.06785,0.06941,0.07096,0.07252,0.07407,
      0.07563,0.07718,0.07873,0.08029,0.08184,0.08340,0.08495,0.08651,
      0.08806,0.08962,0.09117,0.09273,0.09428,0.09584,0.09739,0.09895,
      0.10050,0.10205,0.10361,0.10516,0.10672,0.10827,0.10983,0.11138,
      0.11294,0.11449,0.11605,0.11760,0.11916,0.12071,0.12227,0.12382,
      0.12538,0.12693,0.12848,0.13004,0.13159,0.13315,0.13470,0.13626,
      0.13781,0.13937,0.14092,0.14248,0.14403,0.14559,0.14714,0.14870,
      0.15025,0.15180,0.15336,0.15491,0.15647,0.15802,0.15958,0.16113,
      0.16269,0.16424,0.16580,0.16735,0.16891,0.17046,0.17202,0.17357,
      0.17513,0.17668,0.17823,0.17979,0.18134,0.18290,0.18445,0.18601,
      0.18756,0.18912,0.19067,0.19223,0.19378,0.19534,0.19689,0.19845];

//Hard sphere form factor data from the NCNR tools
//Scale: 1.0
//Radius: 60.0
//Contrast: 1.0e-6
//Background: 0.0
//Volume Fraction 0.0001
hards = [0.90413,0.90054,0.89383,0.88409,0.87137,0.85581,0.83753,0.8167,
	 0.7935,0.76812,0.74077,0.7117,0.68112,0.64929,0.61646,0.58288,
	 0.5488,0.51447,0.48013,0.44601,0.41232,0.37929,0.34709,0.3159,
	 0.28588,0.25716,0.22986,0.20409,0.1799,0.15737,0.13651,0.11736,
	 0.0999,0.08413,0.06999,0.05744,0.04642,0.03685,0.02865,0.02173,
	 0.01598,0.01131,0.00761,0.00478,0.0027,0.00129,0.00044,4.80906E-005,
	 3.556E-005,0.00032,0.00082,0.00146,0.0022,0.00298,0.00375,0.00447,
	 0.00512,0.00567,0.00612,0.00644,0.00664,0.00672,0.00668,0.00653,
	 0.00628,0.00595,0.00555,0.00509,0.0046,0.00408,0.00356,0.00304,
	 0.00254,0.00207,0.00164,0.00125,0.00091,0.00063,0.0004,0.00022,
	 0.0001,2.84203E-005,5.94269E-007,1.2819E-005,5.92593E-005,0.00013,
	 0.00023,0.00034,0.00046,0.00058,0.0007,0.00081,0.00091,0.001,
	 0.00106,0.00111,0.00114,0.00115,0.00113,0.0011,0.00106,0.00099,
	 0.00092,0.00083,0.00074,0.00065,0.00055,0.00046,0.00037,0.00029,
	 0.00022,0.00015,9.89489E-005,5.70856E-005,2.68518E-005,
	 8.09598E-006,3.18028E-007,2.70725E-006,1.41885E-005,3.34732E-005,
	 5.91145E-005,8.95627E-005,0.00012,0.00016,0.00019,0.00023,0.00026,
	 0.00029];

//Ensures that two lists of doubles are equal to within 0.01%
comp_doubles = function(a,b) {
    for(var i=0;i<a.length;i++){
	if(Math.abs(1-a/b) > 0.0001){
	    return false;
	}
    }
    return true;
};

test( "hello test", function() {
    ok( 1 == "1", "Passed!");
    ok( comp_doubles(qs.map(function(q){return 
	0.001*hardSphere(0.001,1.0,60.0,1.0e-6,0.0);}),hards),
	"Hard Spheres Okay!");
});

