$(function() {
   let nosotros = $('#acerda-de').offset().top,
       servicios = $('#servicios').offset().top,
       clientes = $('#clientes').offset().top,
       ubicacion = $('#ubicacion').offset().top;
       contacto = $('#contacto').offset().top;

       console.log(nosotros);
       console.log(servicios);
       console.log(clientes);
       console.log(contacto);

    window.addEventListener('resize', function () {
    let nosotros = $('#nosotros').offset().top,
        servicios = $('#servicios').offset().top,
        clientes = $('#clientes').offset().top,
        contacto = $('#contacto').offset().top;
    });
        $('.enlace-inicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            },600);
        });

        $('.enlace-nosotros').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: nosotros 
            },600);
        });

        $('.enlace-servicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: servicios - 75
            },600);
        });

        $('.enlace-clientes').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: clientes 
            },600);
        });

        $('.enlace-ubicacion').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ubicacion
            },600);
        });

        $('.enlace-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto
            },600);
        });
    });
    

