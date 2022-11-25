let musicFile;
function setup()
{
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music', loadMusic);
    // musicFile.play();
}

function loadMusic()
{
    musicFile.play();
}