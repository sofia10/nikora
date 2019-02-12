$(document).ready(function () {
    function responsiveMessenger(){
        $('.messenger-block .list-item').click(function(){
            $('.chat-users-box').addClass('disabled');
            $('.conversation-box').removeClass('disabled');
        });

        $('.messenger-block .back-to-list').click(function(){
            $('.chat-users-box').removeClass('disabled');
            $('.conversation-box').addClass('disabled');
        });

    }
    responsiveMessenger();

    $('.add-chat').click(function(){
        $('.new-adress_input').addClass('active');
        $('.user-top').hide();
    });
    $('.address-btn').click(function(){
        $('.new-adress_input').addClass('active');
        $('.user-top').hide();
    });

    window.onload=function () {
        var objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

});