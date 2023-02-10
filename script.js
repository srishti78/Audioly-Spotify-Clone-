console.log("Welcome to Spotify");


// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3'); // Our first target is to play songs
let masterPlay = document.getElementById('masterPlay');   // play button id name is masterPlay
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// we will make array of songs object in javascript
let songs = [
    {songName: "Rabba Janda", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ladki pahadi", filePath: "2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Irraday", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "I have got a little crush on you", filePath: "4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Haule Haule", filePath: "5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dile mere", filePath: "6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Yeh Tune kya kiya", filePath: "7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Udd Chaliye", filePath: "8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Mujhe Kon puchta tha", filePath: "9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Delhi-6", filePath: "10.mp3", coverPath: "covers/10.jfif"},
] 


songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click , Now what we want is whenever someone clicks on play button, song must start to play and song name should come under the range slider
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen to Events (Time change events)
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update Seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(Progress);
}) 


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}


    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {
            //  console.log(e.target);
            makeAllPlays();
            index = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `${index+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
        });
    });












    /*                                                      NOTE                                               */
    // Sometimes when checking your Chrome browser's console you may have noticed an error such as
    //  net::ERR_BLOCKED_BY_CLIENT appearing for a particular site you are visiting or working on.
    // This error is commonly caused due to one of the extensions installed within Chrome.
    // Most likely you will see this error appear if you are using an extension such as Adblock or a browser safety plugin.
