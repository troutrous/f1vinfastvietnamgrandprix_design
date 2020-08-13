
$(window).on("load", function () {
    $('.loadding').fadeOut(1000);
    
})


$(document).ready(function () {
    var home = new homejs();

})

class homejs {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        $('.tickets-types').on('click', this.viewPoster);
        $('.mini-btn').on('click', this.miniOnClick);
        $('.fas.fa-search').on('click', this.btnSearchOnClick);
        $('.search-item input').blur(this.btnSearchOnBlur);
        $('.interested-root').on('click', this.selectInterestOnClick);
        $('.far.fa-square').on('click', this.selectAcceptOnClick);
        $('.fab.fa-facebook-square').on('click', this.linkFaceBookOnClick);
        $('.fab.fa-instagram').on('click', this.linkInstagramOnClick);
        $('.fab.fa-youtube').on('click', this.linkYouTubeOnClick);
        $('.fab.fa-twitter').on('click', this.linkTwitterOnClick);
        $('.app-care-item.googleplay').on('click', this.appGooglePlayOnClick);
        $('.app-care-item.appstore').on('click', this.appStoreOnClick);
        $('.app-care-item.huaweiapp').on('click', this.appHuaweiOnClick);
        $('#home').on('click', this.btnHomeOnClick);
        $('#news').on('click', this.btnNewsOnClick);
        $('.far.fa-user').on('click', this.btnUserOnClick);
        $('.interested-sub li').on('click', this.optionInterestedOnClick)
        $('.registration-infor input').on('focus', this.inputRegisFormOnFocus);
        $('.registration-infor input').on('blur', this.inputRegisFormOnBlur);
        $('.registration-infor-accept input').on('click', this.inputAcceptOnClick);
        $('.sub-menu #sub-teams li').eq(5).on('click', this.btnMercedesOnClick);
        $('.sub-menu #sub-teams li').eq(3).on('click', this.btnHaasOnClick);
        $('#khandaihanoi').on('click', this.btnKhanDaiHaNoiOnClick);
        
        $(document).click(function (e) {

            var enow = e.target;
            // Đối tượng container chứa popup

            var containerlogin = $(".login-area").add('.far.fa-user').add('.your-comment').add('.fas.fa-reply').add('.your-comment textarea');

            // Nếu click bên ngoài đối tượng container thì ẩn nó đi
            if (!containerlogin.is(enow) && containerlogin.has(enow).length === 0) {
                if ($('.login-area').hasClass('active')) {
                    $('.login-area').addClass('slide-up-hide').one('webkitAnimationEnd', function () {
                        $('.login-area').removeClass('slide-up-hide').removeClass('active');
                        $('.login-form').add('.signup-form').removeClass('active');
                    });
                }  
            }
            var containerinter = $(".interested-root").add('.interested-sub');
            if (!containerinter.is(enow) && containerinter.has(enow).length === 0) {
                if ($('.interested-sub').hasClass('active') == false) {
                    
                }
                else {
                    $('.interested-sub').addClass('slideupinterest').one('webkitAnimationEnd', function () {
                        $('.interested-sub').removeClass('active').removeClass('slideupinterest');
                    });
                }
            }

            var containerposter = $('.posters-tickets.active').add('.tickets-types');
            if (!containerinter.is(enow) && containerposter.has(enow).length === 0) {
                if ($('.posters-tickets.active').length != 0) {
                    $('.posters-tickets.active').addClass('downtohide').one('webkitAnimationEnd', function () {
                        $('.posters-tickets.active').removeClass('active').removeClass('downtohide').removeClass('upfrombottom');
                    });
                }
                
            }

        });

        var autocountdown = setInterval(this.countDownToStart, 1000);

    }
    countDownToStart() {
        var countDownDate = new Date(2021, 4, 3, 0, 0, 0).getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $('#time .time-item').eq(0).find('span').text(days < 10 ? "0" + days : days);
        $('#time .time-item').eq(1).find('span').text(hours < 10 ? "0" + hours : hours);
        $('#time .time-item').eq(2).find('span').text(minutes < 10 ? "0" + minutes : minutes);
        $('#time .time-item').eq(3).find('span').text(seconds < 10 ? "0" + seconds : seconds);      
        if (distance < 0) {
            clearInterval(x);
            $('#time .time-item').eq(0).find('span').text("00");
            $('#time .time-item').eq(1).find('span').text("00");
            $('#time .time-item').eq(2).find('span').text("00");
            $('#time .time-item').eq(3).find('span').text("00");
        }
    }

    inputAcceptOnClick() {
        if ($('.policy-accept .fas.fa-check').hasClass('inactive') == true) {
            alert('Vui lòng đồng ý với Chính sách bảo mật');
        }
        else {
            if (!$('.registration-infor-email input').val()) {
                alert('Vui lòng nhập địa chỉ email!');
            }
            else {
                alert("Một email đẫ được gửi tới " + $('.registration-infor-email input').val().trim() + ", hãy xác nhận chúng. Cảm ơn!")
            }
        }
    }

    inputRegisFormOnFocus() {
        $(this).addClass('focusregis');
    }

    inputRegisFormOnBlur() {
        if (!$(this).val()) {
            $(this).removeClass('focusregis');
        }
    }

    optionInterestedOnClick() {
        $(this).find('.far.fa-square').triggerHandler('click');
    }

    btnUserOnClick() {
        if ($('.login-area').hasClass('active') == false) {
            $('html,body').animate({ scrollTop: 0 },800);
            $('.login-form').addClass('active');
            $('.login-area').addClass('active').addClass('slide-down-show').one('webkitAnimationEnd', function () {
                $('.login-area').removeClass('slide-down-show');
                $('#txtUserNameSignIn').focus();
            });
        }
        else {
            $('.login-area').addClass('slide-up-hide').one('webkitAnimationEnd', function () {
                $('.login-area').removeClass('slide-up-hide').removeClass('active');
                $('.login-form').add('.signup-form').removeClass('active');
            });
            
        }
    }

    viewPoster() {
        var self = this;
        var firstActived = $('.posters-tickets').hasClass('active');
        if (!firstActived) {
            var numberActive = $(this).index() + 1;
            $('.posters-tickets:nth-child(' + (numberActive) + ')').addClass('active').addClass('upfrombottom');
        }
        else {
            var numberActived = $('.posters-tickets.active').index() + 1;
            var numberActive = $(this).index() + 1;
            if (numberActive != numberActived) {
                $('.posters-tickets').removeClass('active').removeClass('upfrombottom');
                $('.posters-tickets:nth-child(' + (numberActive) + ')').addClass('active').addClass('upfrombottom');
            }
            else {
                $('.posters-tickets.active').addClass('downtohide').one('webkitAnimationEnd', function () {
                    $('.posters-tickets.active').removeClass('active').removeClass('downtohide').removeClass('upfrombottom');
                })
            }
        }
    }

    miniOnClick() {
        $('.posters-tickets.active').addClass('downtohide').one('webkitAnimationEnd', function () {
            $('.posters-tickets.active').removeClass('active').removeClass('downtohide').removeClass('upfrombottom');
        });
    }

    btnSearchOnClick() {
        if ($('.search-item').hasClass('searching-item') == false) {
            $('.search-item').addClass('searching-item');
        $('.search-root').addClass('searching-root');
        $('.search-item input').focus();
            }
        else {
        alert('aa');
        }
    }
    btnSearchOnBlur() {
        var txtsearch = $('.search-item input').val();
        if (!txtsearch) {
            $('.search-item').removeClass('searching-item');
            $('.search-root').removeClass('searching-root');
        }
    }
    selectInterestOnClick() {
        if ($('.interested-sub').hasClass('active') == false) {
            $('.interested-sub').addClass('active').addClass('slidedowninterest').one('webkitAnimationEnd', function () {
                $('.interested-sub').removeClass('slidedowninterest');
            });
        }
        else {
            $('.interested-sub').addClass('slideupinterest').one('webkitAnimationEnd', function () {
                $('.interested-sub').removeClass('active').removeClass('slideupinterest');
            });
        }
    }
    selectAcceptOnClick() {
        if ($(this).find('.fas.fa-check').hasClass('inactive') == false) {
            $(this).find('.fas.fa-check').addClass('inactive');
        }
        else {
            $(this).find('.fas.fa-check').removeClass('inactive');
        }
    }
    linkFaceBookOnClick() {
        window.open('https://www.facebook.com/formula1vietnamgrandprix', '_blank');
        
    }
    linkInstagramOnClick() {
        window.open('https://www.instagram.com/f1/', '_blank');
    }
    linkYouTubeOnClick() {
        
        window.open('https://www.youtube.com/user/Formula1', '_blank');
    }
    linkTwitterOnClick() {
        window.open('https://twitter.com/f1', '_blank');
    }
    appGooglePlayOnClick() {
        window.open('https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB', '_blank');
    }
    appStoreOnClick() {
        window.open('https://apps.apple.com/us/app/f1-race-guide/id1332717455', '_blank');
    }
    btnHomeOnClick() {
        window.location.href('https://localhost:44381/html/home.html');
    }
    btnNewsOnClick() {
        window.location.href = 'https://localhost:44381/html/news.html';
    }
    btnMercedesOnClick() {
        window.location.href = 'https://localhost:44381/html/mercedes.html';
    }
    btnHaasOnClick() {
        window.location.href = 'https://localhost:44381/html/haas.html';
    }


}



