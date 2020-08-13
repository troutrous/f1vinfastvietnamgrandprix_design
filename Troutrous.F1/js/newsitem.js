$(document).ready(function () {
    var newsitem = new newsitemjs();
})

class newsitemjs {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        $(document).on('focus', '.news-list .news-item .news-item-root .news-item-comment textarea',this.textAreaCommentOnFocus);
        $(document).on('blur', '.news-list .news-item .news-item-root .news-item-comment textarea',this.textAreaCommentOnBlur);
        $('.news-list .news-item .news-item-root .news-item-footer .fab.fa-facebook').on('click', this.btnshareOnFabeBookOnClick);
        $('.news-list .news-item .news-item-root .news-item-footer .fab.fa-twitter').on('click', this.btnshareOnTwitterOnClick);
        $('.news-list .news-item .news-item-root .news-item-footer .fas.fa-envelope').on('click', this.btnshareOnMailOnClick);
        $('.news-list .news-item .news-item-root .news-item-footer .fas.fa-link').on('click', this.btnCopyLinkOnClick);
        $('.news-list .news-item .news-item-root .news-item-footer .far.fa-bookmark').on('click', this.btnSaveNewOnClick);
        $(document).on('click', '.news-list .news-item .news-item-root .news-item-comment .your-comment .your-comment-sent', this.btnSentYourCommentOnClick);
        $(document).on('click', '.news-list .news-item .news-item-root .news-item-comment ul li .user-comment .user-comment-react .fa-thumbs-up', this.btnLikeOnClick);
        $(document).on('click', '.news-list .news-item .news-item-root .news-item-comment ul li .user-comment .user-comment-react .fas.fa-reply',this.btnReplyOnClick);
    }
    btnReplyOnClick() {
        if ($(this).parent().parent().parent().parent().hasClass('comment-lever-one') == true) {
            $(this).parent().parent().parent().find('.your-comment').show();
            $(this).parent().parent().parent().find('.your-comment textarea').trigger('focus');
            $(this).parent().parent().parent().find('.your-comment textarea').val("@" + $(this).parent().parent().children('.user-name').text());
        }
        else {
            $(this).parent().parent().parent().parent().parent().parent().find('.your-comment').show();
            $(this).parent().parent().parent().parent().parent().parent().find('.your-comment textarea').trigger('focus');
            $(this).parent().parent().parent().parent().parent().parent().find('.your-comment textarea').val("@" + $(this).parent().parent().children('.user-name').text());
        }
    }
    btnLikeOnClick() {
        if (!$(this).hasClass('ilike')) {
            $(this).addClass('ilike');
        }
        else {
            $(this).removeClass('ilike');
        }
    }
    btnSentYourCommentOnClick() {
        if ($('.login-area').attr("loginstatus") == "false") {
            $('.far.fa-user').trigger('click');
            $('.news-list .news-item .news-item-root .news-item-comment .your-comment textarea').addClass('focusregis');
        }
        else {
            if (!$(this).parent().find('textarea').val()) {
                $(this).parent().find('textarea').val(null).trigger('blur');
            }
            else {
                if ($(this).parent().attr('typecomment') == "reply") {
                    var positionreply = $(this).parent().parent().parent().index();
                    var commenttext = $(this).parent().find('textarea').val();
                    var $commenthtml = $(`<li>
                                    <div class="user-avatar">
                                        <img src="../images/meoadmin.jpg" />
                                    </div>
                                    <div class="user-comment">
                                        <div class="user-name">
                                            admin
                                        </div>
                                        <div class="user-comment-text">`+ commenttext +`</div>
                                        <div class="user-comment-react">
                                            <i class="fas fa-thumbs-up"></i>
                                            <i class="fas fa-reply"></i>
                                            <i class="fas fa-share-alt-square"></i>
                                        </div>
                                    </div>
                                </li>`);
                    $(this).parent().parent().find('.comment-lever-two').first().append($commenthtml);
                    $(this).parent().find('textarea').val(null).trigger('blur');
                }
                else if ($(this).parent().attr('typecomment') == "comment"){
                    var commenttext = $(this).parent().find('textarea').val();
                    var $commenthtml = $(`<li>
                                    <div class="user-avatar">
                                        <img src="../images/meoadmin.jpg" />
                                    </div>
                                    <div class="user-comment">
                                        <div class="user-name">
                                            admin
                                        </div>
                                        <div class="user-comment-text">`+ commenttext +`</div>
                                        <div class="user-comment-react">
                                            <i class="fas fa-thumbs-up"></i>
                                            <i class="fas fa-reply"></i>
                                            <i class="fas fa-share-alt-square"></i>
                                        </div>
                                        <ul class="comment-lever-two"></ul>
                                        <div class="your-comment" typecomment="reply">
                                            <textarea maxlength="1500"></textarea>
                                            <span class="effect-regis" data-placeholder="Ý kiến của bạn..."></span>
                                            <div class="your-comment-sent">
                                                <i class="fas fa-angle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>`);
                    $('.news-list .news-item .news-item-root .news-item-comment > ul').prepend($commenthtml);
                    $(this).parent().find('textarea').val(null).trigger('blur');
                }
            }
        }
    }
    textAreaCommentOnFocus() {
        if ($('.login-area').attr("loginstatus") == "false") {
            $('.far.fa-user').trigger('click');
            $('.news-list .news-item .news-item-root .news-item-comment .your-comment textarea').addClass('focusregis');
        }
        else {
            $(this).addClass('focusregis');
            $(this).css("min-height", "250px").css("box-shadow", "-1px -3px 19px 0px #95adb1");
        }
    }
    textAreaCommentOnBlur() {
        if (!$(this).val()) {
            $(this).removeClass('focusregis');
            $(this).css("min-height", "50px").css("box-shadow", "1px 0px 7px 0px #95adb1");
        }
    }
    btnshareOnFabeBookOnClick() {
        window.open("https://www.facebook.com/", "_blank");
    }
    btnshareOnTwitterOnClick() {
        window.open("https://twitter.com/", "_blank");
    }
    btnshareOnMailOnClick() {
        window.open("https://mail.google.com/mail/u/0/", "_blank");
    }
    btnCopyLinkOnClick() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val("https://localhost:44381/html/news-vettel-roi-ferrari-cuoi-mua-2020.html").select();
        document.execCommand("copy");
        $temp.remove();
    }
    btnSaveNewOnClick() {
        if ($(this).attr("class") == "far fa-bookmark") {
            $(this).attr("class", "fas fa-bookmark").attr("title","Bỏ lưu tin");
        }
        else {
            $(this).attr("class", "far fa-bookmark").attr("title", "Lưu tin");
        }
        
    }
}