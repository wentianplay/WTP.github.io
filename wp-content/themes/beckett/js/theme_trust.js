var gridContainer = jQuery('.default.thumbs'),
    projectGridContainer = jQuery('#projects .thumbs'),
    topOffest = (jQuery('body').hasClass('admin-bar')) ? 32 : 0,
    windowHeight = jQuery(window).height(),
    windowWidth = jQuery(window).width(),
    offset = -(windowHeight - 480) / 2,
    scroll = jQuery(window).scrollTop(),
    stickyNav = jQuery('#menu .bottom .surround'),
    player = {},
    stickyNavOffsetTop,
    currVolume;
windowHeightAdjusted = 0;



///////////////////////////////
// Mobile Detection
///////////////////////////////

function isMobile() {
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/))
    );
}

///////////////////////////////
// Project Filtering
///////////////////////////////

function projectFilterInit() {
    if (jQuery('#filter-nav a').length > 0) {
        jQuery('#filter-nav a').click(function() {
            var selector = jQuery(this).attr('data-filter');
            jQuery('#projects .thumbs').isotope({
                filter: selector,
                hiddenStyle: {
                    opacity: 0,
                    scale: 1
                }
            });

            if (!jQuery(this).hasClass('selected')) {
                jQuery(this).parents('#filter-nav').find('.selected').removeClass('selected');
                jQuery(this).addClass('selected');
            }

            return false;
        });
    } // if() - Don't have this element on every page on which we call Isotope
}

///////////////////////////////
// Isotope
///////////////////////////////

function isotopeInit() {
    setColumns("");
    gridContainer.isotope({
        resizable: true,
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: colW
        }
    });

    jQuery(".default.thumbs .small").css("visibility", "visible");
}

function projectIsotopeInit() {
    setColumns("projects");
    projectGridContainer.isotope({
        resizable: true,
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: colW
        }
    });

    jQuery("#projects .thumbs .small").css("visibility", "visible");
}

///////////////////////////////
// Isotope Grid Resize
///////////////////////////////

function setColumns(g) {
    var columns;
    var gw = gridContainer.width();
    var ww = jQuery(window).width()
    if (ww <= 700) {
        columns = 1;
    } else if (ww <= 870) {
        columns = 2;
    } else {
        columns = 3;
    }
    colW = Math.floor(gw / columns);
    jQuery('.thumbs .small').each(function(id) {
        jQuery(this).css('width', colW + 'px');
    });
    jQuery('.thumbs .small').show();
}

function gridResize() {
    setColumns();
    gridContainer.isotope({
        resizable: false,
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: colW
        }
    });
}

function setProjectColumns() {
    var columns;
    var gw = projectGridContainer.width();
    var ww = jQuery(window).width()
    if (ww <= 700) {
        columns = 1;
    } else if (ww <= 870) {
        columns = 2;
    } else {
        columns = 3;
    }
    colW = Math.floor(gw / columns);
    jQuery('#projects .thumbs .small').each(function(id) {
        jQuery(this).css('width', colW + 'px');
    });
    jQuery('#projects .small').show();
}

function projectGridResize() {
    setProjectColumns();
    projectGridContainer.isotope({
        resizable: false,
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: colW
        }
    });
}

///////////////////////////////
// Set Slideshow Height
///////////////////////////////

function setHomeSlideshowHeight() {
    var windowHeight = jQuery(window).height();
    jQuery('.home #slideshow .slide').height(windowHeight);
}

///////////////////////////////
// Center Slideshow Content
///////////////////////////////

function centerHomeSlideshowContent() {
    var offset = 0;
    jQuery('body.home #slideshow .content').each(function(id) {
        jQuery(this).css('margin-top', '-' + ((jQuery(this).actual('height') / 2) + offset) + 'px');
        jQuery(this).show();
    });
}

///////////////////////////////
// Menu
///////////////////////////////

function navInit() {
    jQuery('#menu-toggle').on('click', function() {
        jQuery(this).toggleClass('active');
        jQuery('#menu-bg, #main-nav').toggleClass('active');
    });
}

///////////////////////////////
// Header
///////////////////////////////

function adjustHeader() {
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top
    var header = jQuery(".site-header")
    if (scrollTop > 100 || jQuery(window).width() < 700) {
        header.addClass('solid thinner');
    } else {
        header.removeClass('solid thinner');
    }
}

///////////////////////////////
// Sticky Nav Offset
///////////////////////////////

function setStickyNavOffset() {
    if (jQuery('body').hasClass('home') && jQuery('body').hasClass('has-slideshow')) {
        jQuery('.middle').css('padding-top', 0);
    } else if (jQuery(window).width() > 700) {
        jQuery('.middle').css('padding-top', jQuery('.site-header').height());
    }
}


///////////////////////////////
// Initialize
///////////////////////////////

jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery(".content-area").fitVids();
    navInit();
    adjustHeader();
    jQuery('body').imagesLoaded(function() {
        setStickyNavOffset();
        setHomeSlideshowHeight();
        centerHomeSlideshowContent();
        projectFilterInit();
        jQuery('.home #container').css('opacity', '1');
        gridResize();
        projectGridResize();
        jQuery('#container').css('opacity', '1');
    });

    jQuery(window).smartresize(function() {
        gridResize();
        projectGridResize();
        setHomeSlideshowHeight()
        centerHomeSlideshowContent();
        setStickyNavOffset();
    });


    //Set Down Arrow Button
    jQuery('#down-button').click(function() {
        jQuery.scrollTo(".middle", {
            easing: 'easeInOutExpo',
            duration: 1000
        });
    });

    jQuery(window).scroll(function() {
        adjustHeader();
    });

});