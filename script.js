console.log("Welcome to Spotify");


// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3'); // Our first target is to play songs
let masterPlay = document.getElementById('masterPlay');   // play button id name is masterPlay
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


// we will make array of songs object in javascript
let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
] 


// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})


// Listen to Events (Time change events)
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update Seekbar
})
// Now what we want is whenever someone clicks on play button, song must start to play and song name should come under the range slider
 