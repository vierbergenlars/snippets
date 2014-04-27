/*!
 * Quick and dirty sticky element plugin
 * 
 * @author Lars Vierbergen <vierbergenlars@gmail.com>
 * @license MIT
 *
 * Usage:
 *  $(elem).sticky({
 *      top: 55, // Keep 55 px removed from the top of the viewport
 *      boundary: $(elem).parent() // Movement of the stickied element will be limited within this container
 *  });
 *
 * URL: https://github.com/vierbergenlars/snippets/blob/master/js/affix.jquery.js
 */
(function() {

    /*
     * Initialization, and re-initialisation on window resize
     */
    function initialize($affixed, $bounding_box, offsetTop) {
        setStyles($affixed, {});
        $affixed.data('sticky', {
            'top' : $affixed.offset().top,
            'left' : $affixed.offset().left,
            'height' : $affixed.height(),
            'width' : $affixed.width(),
            'offsetTop' : offsetTop,
            'scrollBottom' : $bounding_box.offset().top
                    + $bounding_box.height() - offsetTop,
        });
        calculate($affixed);
    }

    /*
     * Calculations based on window scroll position
     */
    function calculate($affixed) {
        var windowTop = $(window).scrollTop();
        var stickyData = $affixed.data('sticky');
        if ((stickyData.top - stickyData.offsetTop) > windowTop) {
            setStyles($affixed, {
                position : 'static',
            });
        } else if ((stickyData.scrollBottom - stickyData.height) < windowTop) {
            setStyles($affixed, {
                position : 'relative',
                top : (stickyData.scrollBottom - stickyData.height
                        - stickyData.top + stickyData.offsetTop),
            });
        } else {
            setStyles($affixed, {
                position : 'fixed',
                top : stickyData.offsetTop,
                left : stickyData.left,
                width : stickyData.width,
            });
        }
    }

    /*
     * Helper to only set the new styles on the element
     */
    function setStyles($elem, styles) {
        $elem.removeAttr('style');
        $elem.css(styles);
    }

    /*
     * Main routine
     */
    function stick($affixed, $bounding_box, offsetTop) {

        initialize($affixed, $bounding_box, offsetTop);

        $(window).on('scroll', function() {
            calculate($affixed);
        }).on('resize', function() {
            initialize($affixed, $bounding_box, offsetTop);
        });
    }

    $.fn.sticky = function(opts) {
        return this.each(function() {
            stick($(this), opts.boundary, opts.top);
        });
    }
})();
