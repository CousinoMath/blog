frameThickness = 2;
frameWidth = 3;
frameDiameter = 80;
squareSide=frameDiameter/sqrt(2);
circleRadius = frameDiameter / 2;
finese = 100;

module CylindricalHalfShell(rout,rin,h) {
    intersection() {
        difference() {
            cylinder(r=rout,h=h,center=true);
            cylinder(r=rin,h=h,center=true);
        }
        translate([-rout,0,-h/2]) cube([2*rout,rout,h]);
    }
}

rotate([90,45,0]) difference() {
    cube([squareSide, squareSide, frameThickness], center=true);
    cube([squareSide - 2 * frameWidth, squareSide - 2 * frameWidth, frameThickness], center=true);
}

CylindricalHalfShell(circleRadius, circleRadius - frameWidth, frameThickness, $fn=finese);

mirror([0,1,0]) rotate(a=90,v=[0,1,0]) CylindricalHalfShell(circleRadius, circleRadius - frameWidth, frameThickness, $fn=finese);

cube([frameDiameter,frameThickness,frameThickness],center=true);
cube([frameThickness,frameDiameter,frameThickness],center=true);
cube([frameThickness,frameThickness,frameDiameter],center=true);
