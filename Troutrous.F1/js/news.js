$(document).ready(function () {
    var news = new newsjs();
})

class newsjs {
    constructor() {
        var positioncurrently;
        var positionnow;
        var lala = setInterval(this.scrollposition, 500);
        this.initEvent();
    }
    initEvent() {
        $('.news-nav .news-filter > ul > li').on('click', this.btnNewsFilterOnClick);
        $('#back-to-top').on('click', this.btnBackTopOnClick);
        $(window).scroll(this.windowScroll);

    }
    scrollposition() {
        this.positioncurrently = $('html,body').scrollTop();
    }
    windowScroll() {
        this.positionnow = $('html,body').scrollTop();
        console.log()
        if (this.positionnow == 0) {
            $('#menu').removeClass('menu-goto-fix').removeClass('menu-fix');
        }
        else if (this.positionnow > this.positioncurrently) {
            if ($('#menu').hasClass('menu-fix') == true) {
                $('#menu').addClass('menu-clear-fix').one('webkitAnimationEnd', function () {
                    $('#menu').removeClass('menu-clear-fix').removeClass('menu-goto-fix').removeClass('menu-fix');
                });
            }
            //$('#menu').removeClass('menu-goto-fix').removeClass('menu-fix');       
        }
        else if (this.positionnow < this.positioncurrently) { 
            if ($('#menu').hasClass('menu-fix')==false)
            $('#menu').addClass('menu-fix').addClass('menu-goto-fix').one('webkitAnimationEnd', function () {
                $('#menu').removeClass('menu-goto-fix');
            });
        }
        if (positionnow >= 700) {
            if (!$('#back-to-top').hasClass('disflex')) {
                $('#back-to-top').addClass('disflex').addClass('animationbacktotopshow').one('webkitAnimationEnd', function () {
                    $('#back-to-top').removeClass('animationbacktotopshow');
                });
            }           
        }
        else {
            if ($('#back-to-top').hasClass('disflex')) {
                $('#back-to-top').removeClass('animationbacktotopshow').addClass('animationbacktotophide').one('webkitAnimationEnd', function () {
                    $('#back-to-top').removeClass('animationbacktotophide').removeClass('disflex');
                })
            }  
        }
    }
    btnBackTopOnClick() {
        $('html,body').animate({ scrollTop: 0 }, 800);
    }
    btnNewsFilterOnClick() {
        var target = $(this).index();
        if (target == 1) {
            $('.news-list > ul > li').removeClass('inactive');
            $('.news-list > ul > li').addClass('inactive');
            $('.news-list > ul > li .dienbienmuagiai').parent().removeClass('inactive');
        }
        else if (target == 2) {
            $('.news-list > ul > li').removeClass('inactive');
            $('.news-list > ul > li').addClass('inactive');
            $('.news-list > ul > li .congnghexe').parent().removeClass('inactive');
        }
        else if (target == 3) {
            $('.news-list > ul > li').removeClass('inactive');
            $('.news-list > ul > li').addClass('inactive');
            $('.news-list > ul > li .lichsugiaidua').parent().removeClass('inactive');
        }
        else if (target == 4) {
            $('.news-list > ul > li').removeClass('inactive');
            $('.news-list > ul > li').addClass('inactive');
            $('.news-list > ul > li .khandaihanoi').parent().removeClass('inactive');
        }
        else if (target == 0) {
            $('.news-list > ul > li').removeClass('inactive');
        }
    }
}