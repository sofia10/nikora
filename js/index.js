$('.groups-title').click(function(){
    $(this).toggleClass('active');
    $(this).closest('.groups').find('.menu-list_block').slideToggle('100');
});

$('.show-comments').click(function(){
    $(this).closest('.news-feed_item').find('.comments').slideToggle('100');
});

$('.show-prev').click(function(){
    $(this).closest('.comments').find('.prev-comments').fadeIn('100');


});

$('.like-btn').click(function(){
    if ( $(this).hasClass( "active" ) ) {
        $(this).text( "მომწონს");
    } else {
        $(this).text( "მოწონებული");
    }

    $(this).toggleClass("active");
});

$('.going').click(function(){
    $(this).toggleClass('active');
});

$('.reply').click(function(){
    $(this).closest('.news-feed_item').find('.comment-txt').focus();
});

$('.click').click(function(event){
    event.preventDefault();
    $('.click-input').click();
    $('.upload-img').removeClass('click');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.added').attr('src', e.target.result);
            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
        $('.bg').hide();
        $('.upload-img').addClass('add-trash');
    }
}

$('.new-answer').click(function(){
    $('.add-poll-block').append('<div class="answer">\n' +
        '                                                    <input type="text" placeholder="პასუხი">\n' +
        '                                                </div>');
});

$(function(){
    $('#datepicker').datepicker();
});

$('.calendar').click(function(event){
    event.preventDefault();
    $('.input-txt').click();
});

$('.paperclip-icon').click(function(event){
    event.preventDefault();
    $('.file-upload').click();
});

$('.camera-icon').click(function(event){
    event.preventDefault();
    $('.attach').click();
});

$(function () {
    $('#date-val').change(function () {
        $('.date-event').val($(this).val());
    });
});

$('.pinon').click(function(){
    $(this).closest('.news-feed_item').addClass('pin');
    $(this).hide();
    $(this).closest('.more-option').find('.pinoff').show();
});

$('.pinoff').click(function(){
    $(this).closest('.news-feed_item').removeClass('pin');
    $(this).hide();
    $(this).closest('.more-option').find('.pinon').show();
});

$('.more-birth').click(function(){
    $('.birthdays').addClass('active');
});

$('.edit-btn').click(function(){
    $(this).closest('.news-feed_item').find('.descr').hide();
    $(this).closest('.news-feed_item').find('.descr_edit').show();
    $(this).closest('.news-feed_item').find('.txt_edit').hide();

    var title = $(this).closest('.news-feed_item').find('.news-feed_title').html();
    var text = $(this).closest('.news-feed_item').find('.news-feed_txt').html();

    $(this).closest('.news-feed_item').find('.title_edit').val(title);
    $(this).closest('.news-feed_item').find('.emoji-wysiwyg-editor').html(text);
    $(this).closest('.news-feed_item').find('.add-comment').hide();
    $(this).closest('.news-feed_item').find('.news-feed_item_opt').attr('style','display:none !important');

    runResizer();
});

$('.dropdown-item').click(function(ev){
    ev.preventDefault();
});

$('.save-text-edit').click(function(ev){
    ev.preventDefault();

    $(this).closest('.news-feed_item').find('.descr_edit').hide();
    $(this).closest('.news-feed_item').find('.descr').show();
    $(this).closest('.news-feed_item').find('.txt_edit').show();
    $(this).closest('.news-feed_item').find('.add-comment').show();
    $(this).closest('.news-feed_item').find('.news-feed_item_opt').show();

    var title = $(this).closest('.news-feed_item').find('.title_edit').val();
    var text = $(this).closest('.news-feed_item').find('.emoji-wysiwyg-editor').html();

    $(this).closest('.news-feed_item').find('.news-feed_txt').html(text);
    $(this).closest('.news-feed_item').find('.news-feed_title').html(title);

    $(this).closest('.news-feed_item').find('.emoji-wysiwyg-editor').empty();

});

function runResizer(){
    jQuery.each(jQuery('.descr_edit .emoji-wysiwyg-editor'), function() {
        var offset = this.offsetHeight - this.clientHeight;

        var resizeTextarea = function(el) {
            jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
        };
        resizeTextarea(this);

        $(this).keyup(function(){
            resizeTextarea(this);
        });
    });
}
$('.edit-btn').click(function(){
    $(this).closest('.com-block').find('.inp-text').hide();
    $(this).closest('.com-block').find('.show-text').show();

    var text = $(this).closest('.com-block').find('.inp-text').html();
    $(this).closest('.com-block').find('.show-text').html(text);
});