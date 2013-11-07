test( "hello test", function() {
    ok( 1 == "1", "Passed!");
    ok( 361651 == Math.round(
	0.04*hardSphere(0.001,1.0,60.0,1.0e-6,0.0)*100000),
	"Hard Sphere Okay!");
});

//test( "Sphere test" function() {
//    ok( 2 == "2", "Passed!");
//    ok( 3.61651 == 3.61651,//hardSphere(0.001,60.0,1.0e-6,0.0),
//	"Hard Sphere Okay!");
//});
