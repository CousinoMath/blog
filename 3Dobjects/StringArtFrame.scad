unit = 1;
postHolderScale = 0.5;

module Frame(frameR,frameW,frameH,postR,postW,postLipH) {
    frameRout = frameR + frameW / 2;
    frameRin = frameR - frameW / 2;
    framePostOffset = abs(frameW - postW);
    postCenterOffset = frameR + postR + abs(frameW - postW);
    postRout = postR + postW / 2;
    difference() {
        cylinder(r=frameRout,h=frameH);
        cylinder(r=frameRin,h=frameH);
    }
    for(a=[0,120,240]) {
        rotate(a) translate([postCenterOffset,0,0]) difference() {
            union() {                        
                cylinder(r=postRout, h=frameH);
                translate([-postCenterOffset,-postRout,0]) cube(size=[postCenterOffset, 2*postRout,frameH]);
            }
            translate([0,0,postLipH]) cylinder(r=postR - postW/2, h=frameH - postLipH);
        }
    }
}

unit = 1; //cm
frameRadius = 41 * unit;
frameHeight = 10 * unit;
frameWidth = 10 * unit;
postRadius = 5 * unit;
postWidth = 5 * unit;
postLip = 6 * unit;
postHeight = 66 * unit;
finese = 15;
tolerance = 0.01 * unit;

//Top and bottom piece of the frame
Frame(frameRadius,frameWidth,frameHeight,postRadius + tolerance + postWidth/2,postWidth,postLip,$fn=finese);
//Three supports of the frame
//cylinder(r=postRadius - tolerance,h=postHeight,$fn=finese);