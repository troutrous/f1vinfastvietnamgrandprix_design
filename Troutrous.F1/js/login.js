$(document).ready(function () {
    var login = new loginjs();
})

class loginjs {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        $('.btn-log').on('click', this.btnLogOnClick);
        $('.btn-sign').on('click', this.btnSignOnClick);
        $('#signup-request').on('click', this.btnSignUpRequestOnClick);
        $('.box-form input').on('focus', this.inputBoxFormOnFocus);
        $('.box-form input').on('blur', this.inputBoxFormOnBlur);
        $('.form-nav .fas.fa-times').on('click', this.btnTimesLoginOnClick);
        $('.form-nav .fas.fa-angle-left').on('click', this.btnBackLoginOnClick);
        $('#loginwithfacebook').on('click', this.btnloginwithfbOnClick);
        $('#loginwithgoogle').on('click', this.btnloginwithggOnClick);
        $(document).keypress(function (e) {
            if (e.keyCode == '13' && $('.login-area').hasClass('active') == true)
            {
                if ($('.login-form').hasClass('active') == true) {
                    $('.btn-log').trigger('click');
                }
                else if ($('.signup-form').hasClass('active') == true) {
                    $('.btn-sign').trigger('click');
                }
            }
        });
    }
    
    btnloginwithggOnClick() {
        window.open('https://mail.google.com/', '_blank');
    }
    btnloginwithfbOnClick() {
        window.open('https://www.facebook.com/', '_blank');
    }
    btnBackLoginOnClick() {
        $('.signup-form').addClass('slide-to-hide').one('webkitAnimationEnd', function () {
            $('.signup-form').removeClass('slide-to-hide').removeClass('active');
        });
        $('.login-form').addClass('active').addClass('slide-to-show').one('webkitAnimationEnd', function () {
            $('.login-form').removeClass('slide-to-show');
            $('#txtUserNameSignIn').focus();
        });
    }
    btnTimesLoginOnClick() {
        if ($('.login-area').hasClass('active')) {
            $('.login-area').addClass('slide-up-hide').one('webkitAnimationEnd', function () {
                $('.login-area').removeClass('slide-up-hide').removeClass('active');
                $('.login-form').add('.signup-form').removeClass('active');
            });
        }       
    }
    btnSignOnClick() {
        if (!$('.signup-form .box-form #txtUserNameSignUp').val() || !$('.signup-form .box-form #txtPassWordSignUp').val() || !$('.signup-form .box-form #txtConfirmPassWordSignUp').val() || $('.signup-form .box-form #txtConfirmPassWordSignUp').val() != $('.signup-form .box-form #txtPassWordSignUp').val()) {
            alert('Đăng ký thất bại!');
        }
        else {            
            alert('Đăng kí thành công!');
            window.open('https://localhost:44381/html/home.html', '_top');
        }
    }
    btnLogOnClick() {
        if ($('.login-form .box-form #txtUserNameSignIn').val() == "admin" && $('.login-form .box-form #txtPassWordSignIn').val() == "admin") {   
            alert('Đăng nhập thành công!')
            $('.login-area').attr("loginstatus","true");
            $('.form-nav .fas.fa-times').trigger('click');
        }
        else {
            alert('Đăng nhập thất bại!');
            $('.login-area').attr("loginstatus", "false");
        }
    }
    btnSignUpRequestOnClick() {
        $('.login-form').addClass('slide-to-hide').one('webkitAnimationEnd', function () {
            $('.login-form').removeClass('slide-to-hide').removeClass('active');
        });
        $('.signup-form').addClass('active').addClass('slide-to-show').one('webkitAnimationEnd', function () {
            $('.signup-form').removeClass('slide-to-show');
            $('#txtUserNameSignUp').focus();
        });
    }
    inputBoxFormOnFocus() {
        $(this).addClass('focus');
    }
    inputBoxFormOnBlur() {
        if (!$(this).val()) {
            $(this).removeClass('focus');
        }
    }
}
