hardSphere = function (q,scale,radius,drho,background) {
    var xrad = q*radius;
    var bes = 3.0*(Math.sin(xrad)-xrad*Math.cos(xrad))/Math.pow(xrad,3);
    var vol = 4.0*Math.PI/3.0*Math.pow(radius,3.0);
    var f = bes*drho;
    var f2 = f*f*vol*1.0e8;
    return scale*f2+background
}
