const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

jQuery(function(){
    let banner = $('#banner');
    
    if($(window).width()<=768){
        banner.attr('src','./img/banner1.webp');
        $('#default_nav').attr('hidden',true);
        $('#mobile_nav').attr('hidden',false);
    }else{
        banner.attr('src','./img/banner.webp');
        $('#default_nav').attr('hidden',false);
        $('#mobile_nav').attr('hidden',true);
    }
});

$('.nav-elem').hover(function(){
    $(this).addClass('text-muted');
},function(){
    $(this).removeClass('text-muted');
});

$('.social-media').hover(function(){
    $(this).removeClass('text-muted');
},function(){
    $(this).addClass('text-muted');
});

$(window).on('resize',function(){
    let banner = $('#banner');
    if($(window).width()<=768){
        banner.attr('src','./img/banner1.webp');
        $('#default_nav').attr('hidden',true);
        $('#mobile_nav').attr('hidden',false);
    }else{
        banner.attr('src','./img/banner.webp');
        $('#default_nav').attr('hidden',false);
        $('#mobile_nav').attr('hidden',true);
    }
});

$(window).on('load',function(){
    let banner = $('#banner_section');
    banner.fadeIn('slow','swing');
});

$(window).on('focus',function(){
    let banner = $('#banner_section');
    banner.fadeIn('slow','swing');
});

$('#desplegar').click(function(){
    let form = $("#formulario");
    if(jQuery(this).hasClass('bi-arrow-bar-down')){
        $('#desplegar').removeClass('bi-arrow-bar-down').addClass('bi-arrow-bar-up');
        form.fadeOut('fast','linear');
    }else{
        $('#desplegar').removeClass('bi-arrow-bar-up').addClass('bi-arrow-bar-down');
        form.fadeIn('fast','linear');
    };
});

$('#img_1').hover(function(){
    let img = $('#img_1');
    img.attr('src', './img/product_1.webp');
    $('#img_2').addClass('blur');
    $('#img_3').addClass('blur');
},
function(){
    let img = $('#img_1');
    img.attr('src', './img/image_1.webp');
    $('#img_2').removeClass('blur');
    $('#img_3').removeClass('blur');
});
$('#img_2').hover(function(){
    let img = $('#img_2');
    img.attr('src', './img/product_2.webp');
    $('#img_1').addClass('blur');
    $('#img_3').addClass('blur');
},
function(){
    let img = $('#img_2');
    img.attr('src', './img/image_2.webp');
    $('#img_1').removeClass('blur');
    $('#img_3').removeClass('blur');
});
$('#img_3').hover(function(){
    let img = $('#img_3');
    img.attr('src', './img/product_3.webp');
    $('#img_1').addClass('blur');
    $('#img_2').addClass('blur');
},
function(){
    let img = $('#img_3');
    img.attr('src', './img/image_3.webp');
    $('#img_1').removeClass('blur');
    $('#img_2').removeClass('blur');
});


let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
                   
function checkInput(idInput, pattern){
    return $(idInput).val().match(pattern) ? true : false;
}

function checkTextArea(idText){
    return $(idText).val().length > 12 ? true : false; 
}

function enableSubmit(){
    $('#enviarF').removeAttr("disabled");
}
function disableSubmit(){
    $('#enviarF').attr("disabled", "disabled");
}

function checkForm(idForm){
    $(idForm + ' *').on('change keydown',function(){
        if(checkInput("#email", emailPattern) && checkTextArea('#textA')){
            enableSubmit();
        }else{
            disableSubmit();
        }
    });
}

jQuery(function(){
    checkForm('#formulario');
});