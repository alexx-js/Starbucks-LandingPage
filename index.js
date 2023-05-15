var banner = document.getElementById("banner");
var sticky = banner.offsetTop;
var tablinks = document.getElementsByClassName("tabLink");
var tabcontent = document.getElementsByClassName("tabContent");
var tabcontent1 = document.getElementById("25s");
var tablinks1 = document.getElementById("tab1");
var toogle = false;

function bannerFunction() {
  if (window.scrollY > sticky) {
    banner.classList.add("bannerFixed");
  } else {
    banner.classList.remove("bannerFixed");
  }
}

function bannerFunction2() {
  if (window.scrollY > 4700) {
    banner.classList.remove("bannerFixed");
  } else {
    banner.classList.add("banner");
    bannerFunction();
  }
}

function openCard(evt, cardName) {
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cardName).style.display = "flex";
  evt.currentTarget.className += " active";
}

window.onscroll = () => {
  bannerFunction();
  bannerFunction2();
};
openCard(event, "25s");
