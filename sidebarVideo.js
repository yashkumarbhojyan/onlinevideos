let data =JSON.parse(localStorage.getItem("video"));
let playVideo = (data)=>{
 let videobox =document.querySelector(".play");
 let iframe =document.createElement("iframe"); 
  iframe.src=`https://www.youtube.com/embed/${data.videoId}?autoplay=1`;

  iframe.width="100%";
  iframe.height="100%";
  iframe.setAttribute=("allowfullsceeen",true)
  videobox.append(iframe);
}
console.log(data);
playVideo(data);




