let countdown=60,interval;function createAlertBox(){const e=document.createElement("div");e.id="alertBox",e.innerHTML=`<h1>We have a message for you!</h1><p>We put our hearts into every video just for you! 💖<br>A small tap on Subscribe means the world to us. 🌍✨<br>If you'd rather wait, no worries—just <span id="countdown">60</span> seconds! ⏳<br>But we'd love to have you with us. 🥰</p><button id="subscribeButton">Subscribe on YouTube!</button>`,e.classList.add("hidden"),document.body.appendChild(e)}function showPopup(){let e=document.getElementById("alertBox");e||(createAlertBox(),e=document.getElementById("alertBox")),e.classList.remove("hidden"),e.style.visibility="visible",e.style.opacity="1";const t=document.getElementById("countdown");t.textContent=countdown,interval=setInterval(()=>{countdown--,t.textContent=countdown,countdown<=0&&(clearInterval(interval),closePopup())},1e3)}function closePopup(){const e=document.getElementById("alertBox");e&&(e.style.visibility="hidden",e.style.opacity="0"),clearInterval(interval)}document.addEventListener("DOMContentLoaded",(function(){setTimeout(showPopup,500),document.body.addEventListener("click",(function(e){"subscribeButton"===e.target.id&&(localStorage.setItem("subscribed","true"),closePopup(),window.open("https://www.youtube.com/@quickplaymobile?sub_confirmation=1","_blank"))})),setInterval(()=>{"true"!==localStorage.getItem("subscribed")&&showPopup()},3e5)}));