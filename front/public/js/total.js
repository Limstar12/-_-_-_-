$(document).ready(function(){
    $('.d1li h3').click(function(){
        $('.d1li').removeClass('on')
        $(this).parent().addClass('on')
    })

    $('.d1ul:first-child').click(function(){
        $('main').removeClass('on')
        $('#main1').addClass('on')
    })
    $('.d1ul:nth-child(1)').click(function(){
        $('main').removeClass('on')
        $('#main2').addClass('on')
    })
    $('.d1ul:last-child').click(function(){
        $('main').removeClass('on')
        $('#main3').addClass('on')
    })
})


