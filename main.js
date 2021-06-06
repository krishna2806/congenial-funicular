img = "";
status = "";
obj = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    c = createCanvas(750, 400);
    c.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS:DETECTING OBJECTS";
}

function modelLoaded() {
    console.log("model loaded!");
    status = true;
    objectdetector.detect(img, gotreusult);
}

function gotreusult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        obj = result;
    }
}

function draw() {
    image(img, 0, 0, 750, 400)

    if (status != "") {
        for (i = 0; i < obj.length; i++) {
            fill("#00FF00");
            document.getElementById("status").innerHTML = "STATUS:OBJECT DETECTED";
            percent = floor(obj[i].confidence * 100);
            
           
            text(obj[i].label + "   " + percent + "%", obj[i].x + 15, obj[i].y + 15);
            noFill();
            stroke("#FFFFFF");
            rect(obj[i].x, obj[i].y, obj[i].width, obj[i].height);
        }
    }



}