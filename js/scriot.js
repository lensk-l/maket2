$(document).ready(function (){

 //cпрятать бургер    
    $('.header_burger').click(function() {
        $('.header_burger, .nav').toggleClass('active')
        $('body').toggleClass('lock')
    });

//cпрятать бургер 
    $('.nav-item').click(function() {
        $('.header_burger, .nav').removeClass('active');
        $('body').removeClass('lock')
    });

//кнопка вверх
    $('.up').click(function(){
        window.scroll(top)
    });

// форма 
$('.submit').on('click', function(event){
    const form = $('form')
    event.preventDefault()
    if (checkValid(form)=== true) {
    sendRequest(form)
    }
    })
    
    function checkValid(form) {
        let isValid = true
        $('.form-attention-input').removeClass('form-attention-input')
        const phone = form.find('input[name="phone"]');
        const email = form.find('input[name="email"]');
    
        const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const phonePattern = /^[0-9]{10,}$/;
    
        if ( !phone.val().match(phonePattern) ) {
            phone.addClass('form-attention-input').val('').css('border', '1px solid salmon')
            isValid = false
        } 
        if ( !email.val().match(emailPattern)) {
            email.addClass('form-attention-input').val('').css('border', '1px solid salmon')
            isValid = false
          }
        return isValid
    }
    function sendRequest(form) {
        $.ajax({
            url: "/mail.php",
            method: "post",
            data: form.serialize(), 
            success: function(result) {
                $('#contact').hide(300)
                $('.thanks').css("display", "block")
            }
        }) 
    }
    


/// слайдер мобильный 
const slideCount = $('.about-2').length
console.log(slideCount)

$(document).on('click', '#nextP', function(){
const currentSlide = $('.show')
$('.about-2').hide()
 currentSlide.removeClass('show')

if(currentSlide.data('order') < slideCount) {
    currentSlide.next().show().addClass('show')
} else {
    $('.about-2').first().addClass('show').show()
}
})

$(document).on('click', '#previosP', function(){
    const currentSlide = $('.show')
    $('.about-2').hide()
     currentSlide.removeClass('show')
    
    if(currentSlide.data('order') > $('.about-2').first().data('order')) {
        currentSlide.prev().show().addClass('show')
    } else {
        $('.about-2').last().addClass('show').show()
    }
    })

    


});   

