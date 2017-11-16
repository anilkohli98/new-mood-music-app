//var currentSongNumber = 1;
//var willLoop = 0;
//var willShuffle = 0;
//genre check
			var relax=0;
			var travel=0;
			var party=0;
			var work=0;
			function toggleSong() {
  
								var song = document.querySelector('audio');
								if(song.paused == true) {
								console.log('Play');
								$('.play-icon').removeClass('fa-play').addClass('fa-pause');
								song.play();
								}
								else {
								console.log('Pause');
								$('.play-icon').removeClass('fa-pause').addClass('fa-play');
								song.pause();
								}
								}
								
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.mood').removeClass('hidden');
    } else {
          }    
          $('#name-input').addClass('error');
});

					$('.mood ').on('click', function() {
					  $('.mood').addClass('hidden');
					  $('.main').removeClass('hidden');
					});
					$('.play-icon').on('click', function() {
					  toggleSong();

					});
					$('body').on('keypress', function(event) {
					  var target = event.target;
								if (event.keyCode == 32 &&target.tagName !='INPUT') {
								toggleSong();
							  }
							});
							
function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}
								function updateCurrentTime() { 
						var song = document.querySelector('audio');
						// console.log(song.currentTime);
						// console.log(song.duration);
						var currentTime = Math.floor(song.currentTime);
						currentTime = fancyTimeFormat(currentTime);
						var duration = Math.floor(song.duration);
						duration = fancyTimeFormat(duration);
						$('.time-elapsed').text(currentTime);
						$('.song-duration').text(duration);
						}

var songs = [{
					'name': 'Tamma Tamma',
					'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
					'album': 'Badrinath ki Dulhania',
					'duration': '2:56',
				    'fileName': 'song1.mp3',
				    'image' : 'song1.jpg'
				},
				{
					'name': 'Humma Song',
					'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
					'album': 'Ok Jaanu',
					'duration': '3:15',
					'fileName': 'song2.mp3',
				    'image' : 'song2.jpg'
				},
				{
					'name': 'Nashe Si Chadh Gayi',
					'artist': 'Arijit Singh',
					'album': 'Befikre',
					'duration': '2:34',
					'fileName': 'song3.mp3',
					'image' : 'song3.jpg'
				},
				{
					'name': 'The Breakup Song',
					'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
					'album': 'Ae Dil Hai Mushkil',
					'duration': '2:29',
					'fileName': 'song4.mp3',
					'image' : 'song4.jpg'
				}]

			var songs_relax = [{
				   'name': 'The hills',
						'artist': 'The Weeknd',
						'album': 'Beauty Behind The Madness',
						'duration': '3:54',
					   'fileName': 'song1.mp3',
					   'image': 'song1.jpg',
					},
					{
						'name': 'Still Got Time',
						'artist': 'Zayn Malik',
						'album': 'Still Got Time',
						'duration': '3:07',
						'fileName': 'song2.mp3',
						 'image': 'song2.jpg',
					},
					{
						'name': 'Paris',
						'artist': 'Chainsmokers',
						'album': 'Memories Do not open',
						'duration': '3:41',
						'fileName': 'song3.mp3',
						 'image': 'song3.jpg',
					},
					{
						'name': 'Rockabye',
						'artist': 'Clean Bandit( feat. Sean Paul and Anne Marie)',
						'album': 'Rocksbye',
						'duration': '4:11',
						'fileName': 'song4.mp3',
						 'image': 'song4.jpg',
					},
					{
						'name': 'I TOok Pill In Ibiza',
						'artist': 'Mike Posner',
						'album': 'At NIght, Alone',
						'duration': '3:14',
						'fileName': 'song5.mp3', 
						 'image': 'song5.jpg',
					
				}]	
				var songs_travel = [{
				 'name': 'Journey Song',
					'artist': 'Anupam Rai',
					'album': 'Piku',
					'duration': '4:11',
				    'fileName': 'song8.mp3',
				    'image' : 'song8.jpg'
				},
				
				{
					'name': 'Banjarey',
					'artist': 'Honey Singh',
					'album': 'Fugly',
					'duration': '4:02',
					'fileName': 'song9.mp3',
					'image' : 'song9.jpg'
				},
				{
					'name': 'Dil Dhadkne DO',
					'artist': 'Shanker Mahadevn',
					'album': 'Zindagi na milegi dobara',
					'duration': '3:49',
					'fileName': 'song10.mp3',
					'image' : 'song10.jpg'
				}]	
				var songs_party = [{
				  'name': 'panda',
					'artist': 'desiigner',
					'album': 'new english',
					'duration': '4:02',
				    'fileName': 'song11.m4a',
				    'image' : 'song11.jpg'
				},
				
				{
					'name': 'afterhours',
					'artist': 'diplo',
					'album': 'afterhours',
					'duration': '2:43',
					'fileName': 'song12.mp3',
					'image' : 'song12.jpg'
				}]
				
				var songs_work = [{
				 'name': 'trans',
					'artist': 'poppin john',
					'album': 'street dancer',
					'duration': '3:13',
				    'fileName': 'song14.m4a',
				    'image' : 'song14.jpg'
				},
				
				{
					'name': 'trans',
					'artist': 'poppin john',
					'album': 'street dancers',
					'duration': '2:04',
					'fileName': 'song15.m4a',
					'image' : 'song15.jpg'
				}]	
				



					function changeCurrentSongDetails(songObj) {
					$('.current-song-image').attr('src',songObj.image)
					$('.current-song-name').text(songObj.name)
					$('.current-song-album').text(songObj.album)
					}

function addSongNameClickEvent(songObj,position) {
  var songName = songObj.fileName;
 var id = '#song' + position;
 $(id).click(function() {
 var audio = document.querySelector('audio');
 var currentSong = audio.src;
 if(currentSong.search(songName) != -1)
  {
   toggleSong();
   changeCurrentSongDetails(songObj);
  }
 else {
   audio.src = songName;
   toggleSong();
   changeCurrentSongDetails(songObj);
   $('#now-playing').removeClass('main');
   setTimeout(function(){
     $('#now-playing').addClass('main');
   },);
    }
  });
}

						function whichPlaylist(){ 
							if(relax == 1){

								songs = songs_relax;
							}
							else if(travel == 1){
								console.log("travel run");
								songs = songs_travel ;
							}
							else if(party == 1){
								songs = songs_party ;
							}
							else if( work== 1){
								songs = songs_work ;
							}
							return songs;
						}


function updateSongList(){
    songs=whichPlaylist();
    console.log(songs[0]);
    for(var i =0; i < songs.length;i++) {
       var obj = songs[i];
       var name = '#song' + (i+1);
       var song = $(name);


       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj,i+1)
     }

     $('#songs').DataTable(
       {
           paging: false,
		     searching: false
       }
     );
}

							$('#relax').on('click',function(){
							   if(typeof songs_table != 'undefined' ){
								  songs_table.destroy();
							   }
								relax=1;
								travel=party=work=0;
								updateSongList();
								$('.mood-sorting').addClass('hidden');
								$('.content').removeClass('hidden');

							});


							$('#travel').on('click',function(){
								   if(typeof songs_table != 'undefined'){
									songs_table.destroy();
								}
								travel=1;
								party=work=relax=0;
								updateSongList();
								$('.mood').addClass('hidden');
								$('.content').removeClass('hidden');

							});

							$('#party').on('click',function(){
								 if(typeof songs_table != 'undefined'){
								   songs_table.destroy();
								}
								party=1;
								work=relax=travel=0;
								updateSongList();
								$('.mood').addClass('hidden');
								$('.content').removeClass('hidden');

							});


							$('#work').on('click',function(){
								   if(typeof songs_table != 'undefined'){
									songs_table.destroy();
								}
								work=1;
								relax=travel=party=0;
								updateSongList();
								$('.mood').addClass('hidden');
								$('.content').removeClass('hidden');

							});
$('#back').on('click',function(){

    $('.content').addClass('hidden');
    $('.mood').removeClass('hidden');
    
$('.main').addClass('hidden');

    song = document.querySelector('audio');
          song.pause();

  })

window.onload = function() {
setInterval(function(){
updateCurrentTime();
},1000);
}