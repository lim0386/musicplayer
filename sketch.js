let musicFile;
function setup()
{
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music', loadMusic);
    // musicFile.play();
}

function loadMusic()
{
    musicFile.play(); // 르세라피므
}

function draw(){
    fill(255, 0, 0);
ellipse(50, 50, 100, 100);
}