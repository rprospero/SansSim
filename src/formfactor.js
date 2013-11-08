qrange = function (min,max,steps) {
    var list = [];
    var i = 0;
    step = (max-min)/(steps-1);
    for(i=0;i<steps;i++){
	list[i] = min + step*i;
    }
    return list;
}

makedata = function (f, xs) {
    var list = [];
    var ys = xs.map(f);
    for(i=0;i<ys.length;i++){
	list[i] = [xs[i],ys[i]];
    }
    return list;
};

hardSphere = function (q,scale,radius,drho,background) {
    var xrad = q*radius;
    var bes = 3.0*(Math.sin(xrad)-xrad*Math.cos(xrad))/Math.pow(xrad,3);
    var vol = 4.0*Math.PI/3.0*Math.pow(radius,3.0);
    var f = bes*drho;
    var f2 = f*f*vol*1.0e8;
    return scale*f2+background
}
