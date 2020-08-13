$(document).ready(function () {
    var teamitem = new teamitemjs();
})

class teamitemjs {
    constructor() {
        this.slidestatus = null;  
        this.initEvent();
        
    }
    initEvent() {
        $('.team-slide-back').hover(this.btnSlideBackOnHover, this.btnSlideBackOnUnHover)
        $('.team-slide-next').hover(this.btnSlideNextOnHover, this.btnSlideNextOnUnHover)
        $('.team-slide-next').on('click', this.btnSlideNextOnClick.bind(this));
        $('.team-slide-back').on('click', this.btnSlideBackOnClick.bind(this));
        var autonextslide = setInterval(this.autoclick.bind(this), 4000);
    }
    autoclick() {
        var self = this;
        if (self.slidestatus == null || self.slidestatus == true) {
            $('.team-slide-next').trigger('click');
        }
        
    }
    btnSlideBackOnHover() {
        $('.team-slide-information .team-slide-images').addClass('mousebackin');
    }
    btnSlideBackOnUnHover() {
        $('.team-slide-information .team-slide-images').removeClass('mousebackin');
    }
    btnSlideNextOnHover() {
        $('.team-slide-information .team-slide-images').addClass('mousenextin');
    }
    btnSlideNextOnUnHover(){
        $('.team-slide-information .team-slide-images').removeClass('mousenextin');
    }


    btnSlideBackOnClick() {
        var self = this;
        if (self.slidestatus == null || self.slidestatus == true) {
            self.slidestatus = false;
            $('.team-slide-information .team-slide-images').removeClass('mousebackin');
            var slidepositionprev = $('.team-slide-information .team-slide-images .team-slide-image-item.slide-prev').index();
            var slidepositionshow = $('.team-slide-information .team-slide-images .team-slide-image-item.slide-show').index();
            var slidepositionnext = $('.team-slide-information .team-slide-images .team-slide-image-item.slide-next').index();
            var slidecount = $('.team-slide-information .team-slide-images .team-slide-image-item').length - 2;
            if (slidepositionprev == $('.team-slide-information .team-slide-images .team-slide-image-item').eq(0).index()) {
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).addClass('slideright').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).removeClass('slideright').removeClass('slide-show');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(-1 - 1).addClass('slide-show');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionnext).removeClass('slide-next');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(-1).addClass('slide-next');
                    self.slidestatus = true;
                });
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionprev).addClass('slideright').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionprev).removeClass('slideright').removeClass('slide-prev');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(-1 - 1 - 1).addClass('slide-prev');
                });
                $('.team-slide-information .team-slide-texts .team-slide-text-item').removeClass('active');
                $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(-1 - 1).addClass('active').addClass('textshow').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(-1 - 1).removeClass('textshow');
                });
                $('.team-slide-information .team-slide-footer .team-slide-counter').text("" + slidecount + "/" + slidecount + "");
            }
            else if (slidepositionprev == slidepositionshow - 1 && slidepositionshow == slidepositionnext - 1) {
                var slidepositionready = slidepositionprev - 1;
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).addClass('slideright').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).removeClass('slide-show').addClass('slide-next').removeClass('slideright');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionnext).removeClass('slide-next');
                });
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionprev).addClass('slideright').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionprev).removeClass('slide-prev').addClass('slide-show').removeClass('slideright');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionready).addClass('slide-prev');
                    self.slidestatus = true;
                });
                $('.team-slide-information .team-slide-texts .team-slide-text-item').removeClass('active');
                $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(slidepositionprev).addClass('active').addClass('textshow').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(slidepositionprev).removeClass('textshow');
                });
                $('.team-slide-information .team-slide-footer .team-slide-counter').text("" + slidepositionprev + "/" + slidecount + "");
            }
            else {
                $('.team-slide-information .team-slide-images .team-slide-image-item').removeClass('slide-prev').removeClass('').removeClass('');
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(0).addClass('slide-prev');
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(1).addClass('slide-show');
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(2).addClass('slide-next');
            }
        }
    }


    btnSlideNextOnClick() {
        var self = this;
        if (self.slidestatus == null || self.slidestatus == true) {
            self.slidestatus = false;
            $('.team-slide-information .team-slide-images').removeClass('mousenextin');
            var slidepositionprev = $('.team-slide-information .team-slide-images .team-slide-image-item.slide-prev').index();
            var slidepositionshow = $('.team-slide-information .team-slide-images .team-slide-image-item.slide-show').index();
            var slidepositionnext = $('.team-slide-information .team-slide-images .team-slide-image-item.slide-next').index();
            var slidecount = $('.team-slide-information .team-slide-images .team-slide-image-item').length - 2;
            if (slidepositionnext == $('.team-slide-information .team-slide-images .team-slide-image-item').eq(-1).index()) {
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).addClass('slideleft').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).removeClass('slideleft').removeClass('slide-show');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(1).addClass('slide-show');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionprev).removeClass('slide-prev');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(0).addClass('slide-prev');
                    self.slidestatus = true;});
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionnext).addClass('slideleft').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionnext).removeClass('slideleft').removeClass('slide-next');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(2).addClass('slide-next');});
                $('.team-slide-information .team-slide-texts .team-slide-text-item').removeClass('active');
                $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(1).addClass('active').addClass('textshow').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(1).removeClass('textshow');
                });
                $('.team-slide-information .team-slide-footer .team-slide-counter').text("1/" + slidecount);
            }
            else if (slidepositionprev == slidepositionshow - 1 && slidepositionshow == slidepositionnext - 1) {
                var slidepositionready = slidepositionnext + 1;
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).addClass('slideleft').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionshow).removeClass('slide-show').addClass('slide-prev').removeClass('slideleft');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionprev).removeClass('slide-prev');
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionready).addClass('slide-next');
                });
                $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionnext).addClass('slideleft').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-images .team-slide-image-item').eq(slidepositionnext).removeClass('slide-next').addClass('slide-show').removeClass('slideleft');                   
                    self.slidestatus = true;
                });
                $('.team-slide-information .team-slide-texts .team-slide-text-item').removeClass('active');
                $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(slidepositionnext).addClass('active').addClass('textshow').one('webkitAnimationEnd', function () {
                    $('.team-slide-information .team-slide-texts .team-slide-text-item').eq(slidepositionnext).removeClass('textshow');
                });
                $('.team-slide-information .team-slide-footer .team-slide-counter').text("" + slidepositionnext + "/" + slidecount + "");
            } 
        }
    }
    


}



