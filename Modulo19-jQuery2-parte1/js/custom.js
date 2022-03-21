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

  /*Ouvinte de eventos .nav-modal-open*/
  $('.nav-modal-open').on('click', function(e){
    e.preventDefault();

    let elem = $(this).attr('rel');

    $('.modal-body').html($('#'+ elem).html());
    $('.modal-header h5.modal-title').html($(this).text());

    let myModal = new bootstrap.Modal($('#modelId'));

    myModal.show();
  })

  function validate(elem){
    if(elem.val() == ''){
        console.log('O campo '+ elem.attr('name') + ' é obrigatório');
        elem.parent().find('.text-muted').show()
        elem.addClass('invalid');
        return false;
      }else{
        elem.parent().find('.text-muted').hide()
        elem.removeClass('invalid');
      }
  }

  $('body').on('submit', '.modal-body .form',function(e){
    e.preventDefault();

    const inputName = $('#nome');
    const inputEmail = $('#email');

    validate(inputName);
    validate(inputEmail);

    if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
      console.log('Verificar os campos obrigatórios');
      return false;      
    }else{
      $(this).submit();
    }
  
  })

  $('body').on('blur', '#nome', function(e){
    validate($(this));
  })

  $('body').on('blur', '#email', function(e){
    validate($(this));
  })

$('body').on('focus', '#date', function(){
  $(this).datepicker();
})

  $('body').on('blur', '#date', function(e){
    validate($(this));
    $('#date').mask('00/00/0000');
  })

  $('body').on('blur', '#time', function(e){
    validate($(this));
    $('#time').mask('00:00');
  })

  $('body').on('blur', '#cep', function(e){
    validate($(this));
    $('#cep').mask('00000-000');
  })

  $('body').on('blur', '#phone', function(e){
    validate($(this));
    $('#phone').mask('(00)00000-0000');
  })

  $('body').on('blur', '#cpf', function(e){
    validate($(this));
    $('#cpf').mask('000.000.000-00', {reverse: true});
  }) 
  

});
