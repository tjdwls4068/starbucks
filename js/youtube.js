 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'lHVbLdLxux0&t=502s',  // 최초 재생 영상
     playerVars: {
       autoplay: 1,
       loop: true,
       playlist: 'lHVbLdLxux0&t=502s', // 반복 재생 영상 
       mute: true

     },
     envents: {
       onReady: function (event) {
         event.target.mute() // 음소거 
         
       }
     }
   });
 }


 