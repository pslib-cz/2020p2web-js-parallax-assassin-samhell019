var all = document.getElementsByClassName("parallax-layer")
window.onscroll = (s) => {all[3].style.transform = "translateY(-"+window.scrollY+"px) translateX(-"+window.scrollY/2+"px)";}+