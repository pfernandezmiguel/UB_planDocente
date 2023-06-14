
// Header hidden
$(document).ready(function(){
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
		document.getElementById("sticky").style.top = "0";
	  } else {
		document.getElementById("sticky").style.top = "-500px";
	  }
	  prevScrollpos = currentScrollPos;
	}
});

// Totop

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#toTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 100);
			return false;
		});
});


//VARIABLES
let screenWidth = screen.width
let detail = document.getElementById("detail");
let detailCalendar = document.getElementById("detailCalendar");

let detailMobile = document.getElementById("detailMobile");
let detailMobileCalendar = document.getElementById("detailMobileCalendar");
let listMobile = document.getElementById("listMobile");
let fichaDetail = document.getElementById("fichaDetail");
let index_title = document.getElementById('index-title');
let index_dropdown = document.getElementById('index-dropdown');
let anchor1 = document.getElementById('anchor-mobile1');
let anchor2 = document.getElementById('anchor-mobile2');
let objetivos_desktop = document.getElementById('Objetivos_desktop');
let objetivos_mobile = document.getElementById('Objetivos_mobile');
let teorico_practica = document.getElementById('teorico-practica');
let t_grupos = document.getElementById('t-grupos');
let trabajo = document.getElementById('trabajo');
let aprendizaje = document.getElementById('aprendizaje');
aprendizaje.style.display = "none";
trabajo.style.display = "none";
teorico_practica.style.display = "none";
t_grupos.style.display = "none";

function openDetail() {
  if (screenWidth < 579) {
    if (listMobile.style.display == "block") {
      listMobile.style.display = "none";
      minus.style.display = "none";
      plus.style.display = 'inline'
    } else {
      listMobile.style.display = "block";
      plus.style.display = "none";
      minus.style.display = 'inline'
    }
    return;
  }
  if (detail.style.display == "block") {
    detail.style.display = "none";
    minus.style.display = "none";
    plus.style.display = 'inline'
  } else {
    detail.style.display = "block";
    plus.style.display = "none";
    minus.style.display = 'inline'
  }
}

function openDetailPlan(id){
  let dt = "detailPlan"+id
  let pl = "plus"+id
  let mn = "minus"+id
  let plus = document.getElementById(pl);
  let minus = document.getElementById(mn);
  let detailPlan = document.getElementById(dt);

  if (detailPlan.style.display == "block") {
    detailPlan.style.display = "none";
    minus.style.display = "none";
    plus.style.display = 'inline'
  } else {
    detailPlan.style.display = "block";
    plus.style.display = "none";
    minus.style.display = 'inline'
  }
}
window.addEventListener("resize", function () {
  screenWidth = screen.width;
  if (screenWidth < 579) {
    objetivos_mobile.style.display = "block";
    objetivos_desktop.style.display = "none";
    anchor1.style.display = "none";
    anchor2.style.display = "none";
    index_title.style.display = "none";
    index_dropdown.style.display = "block";
  } else {
    objetivos_mobile.style.display = "none";
    objetivos_desktop.style.display = "block";
    anchor1.style.display = "block";
    anchor2.style.display = "block";
    index_title.style.display = "block";
    index_dropdown.style.display = "none";
    listMobile.style.display = "none"
  }
});

function openDetailMobileRow() {
  if (detailMobile.style.display == "table-row") {
    detailMobile.style.display = "none";
  } else {
    detailMobile.style.display = "table-row";
  }
}

function openDetailMobileblock() {
  if (detailMobile.style.display == "block") {
    detailMobile.style.display = "none";
  } else {
    detailMobile.style.display = "block";
  }
}

function openDetailCalendar() {
  if (detailCalendar.style.display == "block") {
    detailCalendar.style.display = "none";
    minus.style.display = "none";
    plus.style.display = 'inline'
  } else {
    detailCalendar.style.display = "block";
    plus.style.display = "none";
    minus.style.display = 'inline'
  }
}
function openDetailMobileCalendar() {
  if (detailMobileCalendar.style.display == "block") {
    detailMobileCalendar.style.display = "none";
  } else {
    detailMobileCalendar.style.display = "block";
  }
}
function openDetailDates() {
  if (fichaDetail.style.display == "block") {
    fichaDetail.style.display = "none";
  } else {
    fichaDetail.style.display = "block";
  }
}
function displayList(tab) {
  document.getElementById(tab).style.display === "none" ? document.getElementById(tab).style.display = 'block' : document.getElementById(tab).style.display = "none";
}

function goToAnchor(tab){
  document.getElementById(tab).scrollIntoView('tab');
}

function printDocument(){
  window.print();
}