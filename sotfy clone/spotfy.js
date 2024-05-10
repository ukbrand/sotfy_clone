
let songIndex = 0;
let audioElemnt = new Audio('kt1.mp3');
let masterPlay1 = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');

let song = [

		{songName:"Salam-e-ishq",filePath:"kt1.mp3",coverPath:"cover/kt1.mp3"}
	
	];


// handle play pause click


function  uk( ) {

	console.log('umesh');
	 
	 
			if(audioElemnt.paused || audioElemnt.currentTime<=0) {

					audioElemnt.play();
					masterPlay1.classList.remove("fa-circle-play");
					masterPlay1.classList.add("fa-forward");

			};

 }

//listen to Ecents

// myProgressBar.addEventListener('timeupdate',()=>{

// 		console.log('timeupdate');

// })
// audioElemnt.play();