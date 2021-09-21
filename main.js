song = "";
LeftWristX = 0;
LeftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song= loadSound("music.mp3");
}

function setup() {
    canvas= createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = lm5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses')
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        LeftWristX = results[0].pose.LeftWrist.x;
        LeftWristY = results[0].pose.LeftWrist.y;
        console.log("LeftWristX = " + LeftWristX + " LeftWristY = " + LeftWristY)
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY =" + rightWristY)
    }
}
function draw() {
image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}