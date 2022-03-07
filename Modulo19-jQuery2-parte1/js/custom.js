// Estancia jQuery e evita conflitos
//jQuery( function($){
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
  $("h4"); // Tag
  $(".feature-item"); //Class
  $("#featured"); //Id

  // Configuração de produtos
  $(".featured-item a").addClass("btn btn-dark stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-secondary">Novo</span>'
  );

  $(".featured-item h4").click(function () {
    $(this).css({
      color: "#f00",
      background: "#00f",
    });
  });

  /* CALLBACK
  |*
  |*/

  $(".featured-item:nth(1)")
    .hide(500, function () {
      console.log($(this).find("h4").text() + " Esgotado");
    })
    .show(500, function () {
      console.log($(this).find("h4").text() + " Em estoque!");
    });

  /*
    |* Animações
    |*/

  /*$('.featured-item:nth(0)').hide()*/

  $("#form-submit").on("click", function (e) {
    e.preventDefault();
    if ($("#email").val() != "") {
      $("#email").animate(
        {
          opacity: "toggle",
        },
        1000,
        function () {
          console.log($(this).val());
        }
      );
    }
  });
});
