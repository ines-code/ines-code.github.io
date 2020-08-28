var sketch1 = function ( f ) {
    f.setup = function () {
       
        var canvas = f.createCanvas(900,500);
        canvas.parent('#sketch1');
    };

    f.draw = function () {
        f.background(50);
        f.fill(255);
        f.textSize(32);
        f.textLeading((f.mouseY / f.width) * 60);
        f.text("I am a student with a great passion for computers, AI, creative coding and art. I am currently studying at the University of Applied Sciences in Zagreb and graduating from the Faculty of Teacher Education. In addition, I am currently enrolled in MicroMasters Integrated Digital Media. I have an excellent work ethic and I am quick learner, very passionate about knowledge. I love challenging environments and improving myself.",
            100, 100, 700, 400);
    };
};



var sketch2 = function ( s ) {
    var sourceText = "  Ines     Kukrić";
    var curIndex = 0;
    s.setup = function () {
        var canvas = s.createCanvas(700, 200);
        canvas.parent('#sketch2');
        s.frameRate(10);
        s.textFont('Helvetica');
    };
    s.draw = function () {
        s.background(230, 230, 250);
        s.fill(216, 191, 216);
        s.stroke(7);
        s.strokeWeight(7);
        s.textSize(144);
        s.textAlign(s.CENTER, s.CENTER);
        s.text(sourceText.substring(curIndex, curIndex + 10), s.width / 2, s.height / 2);

        curIndex++;

        if (curIndex > sourceText.length) {
            curIndex = 0;
        }
    }

}


var myFirstSketch = new p5(sketch1);

var mySecondSketch = new p5(sketch2);
