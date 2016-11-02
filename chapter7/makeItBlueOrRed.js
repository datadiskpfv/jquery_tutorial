/**
 * Created by pvalle on 01/11/2016.
 */

(function($){
    $.fn.makeItBlueOrRed = function() {
        return this.each(function(){
            $(this).css('color',$(this).is('[id]') ? 'blue' : 'red');
            $(this).css('font-weight',$(this).is('[id]') ? 'bold' : 'normal');
            $(this).css('background-color',$(this).is('[id]') ? 'red' : 'white');
        });
    };
})(jQuery);
