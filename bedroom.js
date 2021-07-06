bedroom_img="";
function setup() {
    canvas=createCanvas(480,380);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"
}
function preload() {
    bedroom_img=loadImage("bedroom.jpg");
}
function modelLoaded() {
    console.log("COCO SSD LOADED");
    status=true;
    objectDetector.detect(bedroom_img,gotResults);
}
function draw() {
    image(bedroom_img,0,0,480,380);
    fill("#FF0000");
    text("Bed",280,200);
    noFill();
    stroke("#FF0000");
    rect(250,170,230,200);
}
function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}