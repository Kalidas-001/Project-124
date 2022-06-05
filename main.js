function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(560,150);

video=createCapture(VIDEO);
video.size(500,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialized")
}

function gotPoses(results,error)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length > 0)
    {
console.log(results);

console.log("rightwristx = "+results[0]."pose.rightwristy ="  +results[0].pose.rightwrist.y);
console.log("leftwristx = "+results[0]."pose.leftwristy = " +results[0].pose.rightwrist.y);
}
}

function draw()
{
    background('#969a97');
}