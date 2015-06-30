/*!
 * jQuery ClassyCompare
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.2.0
 *
 */

(function($) {
    $.fn.extend({
        ClassyCompare: function(b) {
            var c = {
                gap: 50,
                leftGap: 10,
                rightGap: 10,
                caption: false,
                reveal: 0.5
            };
            var b = $.extend(c, b);
            return this.each(function() {
                var c = b, h = $(this).children('img:eq(0)').width(), i = $(this).children('img:eq(0)').height();
                $(this).children('img').hide();
                $(this).css({
                    overflow: 'hidden',
                    position: 'relative'
                });
                $(this).append('<div class="uc-mask"></div>');
                $(this).append('<div class="uc-bg"></div>');
                $(this).append('<div class="uc-caption">' + $(this).children('img:eq(0)').attr('alt') + '</div>');
                $(this).children('.uc-mask, .uc-bg').width(h);
                $(this).children('.uc-mask, .uc-bg').height(i);
                $(this).children('.uc-mask').animate({
                    width: h - c.gap
                }, 1e3);
                $(this).children('.uc-mask').css('backgroundImage', 'url(' + $(this).children('img:eq(0)').attr('src') + ')');
                $(this).children('.uc-bg').css('backgroundImage', 'url(' + $(this).children('img:eq(1)').attr('src') + ')');
                if (c.caption) {
                    $(this).children('.uc-caption').show();
                }
            }).mousemove(function(c) {
                var d = b, pos_img = $(this).position()['left'], pos_mouse = c.pageX - $(this).children('.uc-mask').offset().left;
                var _w = pos_mouse - pos_img, _iw = $(this).width();
                var _i = $(this).children('img:eq(0)').attr('alt'), _ii = $(this).children('img:eq(1)').attr('alt');
                if (_w > d.leftGap && _w < _iw - d.rightGap) {
                    $(this).children('.uc-mask').width(_w);
                }
                if (_w < _iw * d.reveal) {
                    $(this).children('.uc-caption').html(_ii);
                }
                else {
                    $(this).children('.uc-caption').html(_i);
                }
            });
        }
    });
})(jQuery);