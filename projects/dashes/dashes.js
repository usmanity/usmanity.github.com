function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
$(document).ready(function() {
    $('li').click(function(e) {
        if (e.shiftKey) {
            copyToClipboard($(this).find('.description .unicode numeric'));
        } else if (e.altKey) {
            copyToClipboard($(this).find('.description .html-ref numeric'));
        } else {
            copyToClipboard($(this).find('.dash'));
        }
        $('tooltip').removeClass('hidden');
        setTimeout(function() {
            $('tooltip').addClass('hidden');
        }, 1500);
    });
    // $(window).on()
    $(window).keydown(function(event) {
        if (event.which == 16) {
            $('.shift-key').addClass('highlighted');
        }
        if (event.which == 18) {
            $('.alt-key').addClass('highlighted');
        }
    });
    
    $(window).keyup(function() {
        $('.button-ui').removeClass('highlighted');
    });

    
});
