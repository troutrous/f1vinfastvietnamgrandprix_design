$(document).ready(function () {
    var poster = new posterjs();
})

class posterjs {
    constructor(){
        this.initEvent();
    }
    initEvent() {
        var xxx = setInterval(this.hideAndShow, 3500);
        $('.nav-right-item').on('click', this.nriOnClick);
    }

    hideAndShow() {
        var now = $('.ill-images.active').index();
        if (now == $('.ill-images').length - 1) {
            var next = 0;
        }
        else {
            var next = now + 1;
        }
        $('.ill-images').eq(now).addClass('slidehide').one('webkitAnimationEnd', function () {
            $('.ill-images').eq(now).removeClass('slidehide').removeClass('active');
        });
        $('.ill-images').eq(next).addClass('active').addClass('slideshow').one('webkitAnimationEnd', function () {
            $('.ill-images').eq(next).removeClass('slideshow');
            //debugger;
        });
    }
    nriOnClick() {
        var now = $('.nav-right-item.label-choose').index();
        var taget = $(this).index();
        if (now != taget) {
            $('.nav-right-item').eq(now).removeClass('label-choose');
            $('.nav-right-item').eq(taget).addClass('label-choose');
            $('.right-item').eq(now).removeClass('content-choose');
                
            $('.right-item').eq(taget).addClass('content-choose').addClass('slidezoomin').one('webkitAnimationEnd', function () {
                $('.right-item').eq(taget).removeClass('slidezoomin');
                //debugger;
            });
        }
    }
}