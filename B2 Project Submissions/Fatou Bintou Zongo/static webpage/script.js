 var menuBtn = document.getElementById('menuBtn');
 var sideNav = document.getElementById('sideNav');
 var menu = document.getElementById('menu');

sideNav.style.right == "-250px";
 menuBtn.onclick = function() {
     if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png"
     }
     else{
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png" 

     }
 }


 function togglePopup(){
   document.getElementById("popup-1").classList.toggle("active");
 }

 function showPopup(){
   document.getElementById("popup-2").classList.toggle("active");
 }
 function displayPopup(){
   document.getElementById("popup-3").classList.toggle("active");
 }
 function popPopup(){
   document.getElementById("popup-4").classList.toggle("active");
 }
 