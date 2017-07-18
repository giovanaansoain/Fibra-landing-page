$(document).ready(function(){

  // ABRIR E FECHAR MENU
  var botaoMenu = $("#header button");
  var navMenu = $("#header nav");
  var openMenu = $(".open-menu");
  var closeMenu = $(".close-menu");
  var linkNav = $(".menu-hamburguer a");

  botaoMenu[0].onclick = openCloseMenu;

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].click(openCloseMenu);
    linkNav[i].click(transitionID);
  }

  function openCloseMenu() {
    navMenu.toggleClass("show");
    changeSvg();

    function changeSvg() {
      openMenu.toggleClass("hide");
      closeMenu.toggleClass("hide");
    }
  }

  // ANIMAÇAO SCROLL
  function transitionID(e) {
    e.preventDefault();

    id = this.id.replace("link-", "");
    var offset = $("#"+id).offset().top - 120;
    $('html,body').animate({ scrollTop: offset }, 'slow');
  }

});
