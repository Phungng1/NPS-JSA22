 //function nút back to top
 let mybutton = document.getElementById("myBtn")

 window.onscroll = function () { scrollFunction() }

 function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
    }
    else {
       mybutton.style.display = "none";
    }
 }
 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }
 
 
 //function thêm vào giỏ hàng
 let a = document.getElementById("add")
 a.onclick = function () { alertFunction() }

 function alertFunction() {
    alert("Đã thêm vào giỏ hàng")
 }






 