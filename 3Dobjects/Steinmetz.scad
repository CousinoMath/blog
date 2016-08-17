intersection_for(n = [0:1]) {
    x=[for(i=[0:2]) (i==n ? 1 : 0)];
    rotate(a=90,v=x) cylinder(h=4,r=1,center=true,$fn=100);
}