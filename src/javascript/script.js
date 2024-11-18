$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });


    const sections = $('section');
    const navItems =$('.nav-item');

    /* O comando a baixo é para fazer uma box-shadow, quando scroll rolar para baixo */

    $(window).on('scroll', function(){
        const header = $('header'); 
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSecctionIndex = 0;

        if(scrollPosition <= 0) {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0 ,0 , 0.1');
        }
        else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0 ,0 , 0.1');
        }

        sections.each(function(i) {
            const section = $(this)
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSecctionIndex = i;
                return false;
            }

        })
        navItems.removeClass('active');
        $(navItems[activeSecctionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta',{
        origin: 'left', 
        durantion: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#cta-2',{
        origin: 'right', 
        durantion: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner',{
        origin: 'right', 
        durantion: 2000,
        distance: '90%'
    });

    ScrollReveal().reveal('#banner-min1',{
        origin: 'right', 
        durantion: 2000,
        distance: '90%'
    });

    ScrollReveal().reveal('#banner-2',{
        origin: 'left', 
        durantion: 20000,
        distance: '90%'
    });

    ScrollReveal().reveal('.item-fun',{
        origin: 'left', 
        durantion: 20000,
        distance: '90%'
    });
    
});