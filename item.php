<?php
    /*
     *      Osclass – software for creating and publishing online classified
     *                           advertising platforms
     *
     *                        Copyright (C) 2012 OSCLASS
     *
     *       This program is free software: you can redistribute it and/or
     *     modify it under the terms of the GNU Affero General Public License
     *     as published by the Free Software Foundation, either version 3 of
     *            the License, or (at your option) any later version.
     *
     *     This program is distributed in the hope that it will be useful, but
     *         WITHOUT ANY WARRANTY; without even the implied warranty of
     *        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     *             GNU Affero General Public License for more details.
     *
     *      You should have received a copy of the GNU Affero General Public
     * License along with this program.  If not, see <http://www.gnu.org/licenses/>.
     */

    osc_enqueue_script('fancybox');
    osc_enqueue_style('fancybox', osc_assets_url('js/fancybox/jquery.fancybox.css'));
    osc_enqueue_script('jquery-validate');

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="<?php echo str_replace('_', '-', osc_current_user_locale()); ?>">
    <head>
        <?php osc_current_web_theme_path('head.php'); ?>

        <script type="text/javascript">
            $(document).ready(function(){
                $("a[rel=image_group]").fancybox({
                    openEffect : 'none',
                    closeEffect : 'none',
                    nextEffect : 'fade',
                    prevEffect : 'fade',
                    loop : false,
                    helpers : {
                            title : {
                                    type : 'inside'
                            }
                    }
                });
            });
        </script>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
    </head>
    <body>
        <?php osc_current_web_theme_path('header.php'); ?>
		
       <div id="sidebar_container">
        <div class="sidebar">
            <h4> Sidebar % <strong></strong></h4>
            <h5></h5>
            <p>test</p>

          </div>
		   <div class="row">
	<div class="col-md-6">

    	<div class="sidebar">
<h4>Information</h4>
    		
		</div>
	</div>
	</div>
          <div class="sidebar2">
            <h3><strong><?php _e("Region", 'summersday') ; ?></strong></h3>
						<ul>
                        <?php while(osc_has_list_regions() ) { ?>
                            <li><a href="<?php echo osc_list_region_url() ; ?>"><?php echo osc_list_region_name() ; ?></a> <em>(<?php echo osc_list_region_items() ; ?>)</em></li>
                        <?php } ?>
                        </ul>
          </div>
          <div class="sidebar">
            <h4>Contact Us</h4>
            <p>We'd love to hear from you. Call us, <a href="#">email us</a> or complete our <a href="contact.php">contact form</a>.</p>
          </div>
        </div>
        <div id="content">
		<div class="main">
          <!-- put your main content here -->
		 
		 
        </div>
	   <div class="latest_ads">
                    <h1><strong><?php _e('Latest Listings', 'summersday'); ?></strong></h1>
                    <?php if( osc_count_latest_items() == 0) { ?>
                        <p class="empty"><?php _e('No Latest Listings', 'summersday'); ?></p>
                    <?php } else { ?>
                        <table border="0" cellspacing="0">
                             <tbody>
                                <?php $class = "even"; ?>
                                <?php while ( osc_has_latest_items() ) { ?>
                                 <tr class="<?php echo $class. (osc_item_is_premium()?" premium":""); ?>">
                                        <?php if( osc_images_enabled_at_items() ) { ?>
                                         <td class="photo">
										 <div class="mag">
                                            <?php if( osc_count_item_resources() ) { ?>

                                                   <img data-toggle="magnify" src="<?php echo osc_resource_thumbnail_url(); ?>" width="170" height="150" title="<?php echo osc_item_title(); ?>" alt="<?php echo osc_item_title(); ?>" />
												   <BR> <!-- Lets Space the button between the picture and the button-->
												   <div class="span1">
												   <a href="<?php echo osc_item_url(); ?>" class="btn btn-warning">
												   <i class="fa fa-smile-o fa-lg"></i><span><strong>&nbsp;&nbsp;Contact Member</strong></span>  
												  
                                                </a>
												</div>
											
                                            <?php } else { ?>
                                                <img data-toggle="magnify" src="<?php echo osc_current_web_theme_url('images/no_photo.gif'); ?>" width="170" height="150" alt="" title="" />
                                            <?php } ?>
											</div>
                                         </td>
                                        <?php } ?>
                                         <td class="text">
                                             <h1><a href="<?php echo osc_item_url(); ?>"><?php echo osc_item_title(); ?></a></h1>
											 <div class="span2">
												   <a href="<?php echo osc_item_url(); ?>" class="btn btn-primary">
												   <i class="fa fa-eye fa-lg"></i><span><strong>&nbsp;&nbsp;View</strong></span>
												   </a>
                                                   &nbsp;&nbsp;<a href="#" class="btn btn-default"> 
                                                   <i class="fa fa-user fa-lg"></i><span><strong>&nbsp;&nbsp;<?php if(function_exists('useronline_show_user_status')) {useronline_show_user_status();} ?></strong></span>												   
												  
                                                </a>
                                             <p><strong><BR><?php if( osc_price_enabled_at_items() && osc_item_category_price_enabled() ) { echo osc_item_formated_price(); ?> - <?php } echo osc_item_city(); ?> (<?php echo osc_item_region();?>) - <?php echo osc_format_date(osc_item_pub_date()); ?></strong></p>
                                             <p><?php echo osc_highlight( strip_tags( osc_item_description() ) ); ?></p>
                                         </td>
                                     </tr>
                                    <?php $class = ($class == 'even') ? 'odd' : 'even'; ?>
                                <?php } ?>
                            </tbody>
                        </table>
                        <?php if( osc_count_latest_items() == osc_max_latest_items() ) { ?>
                        <p class='pagination'><?php echo osc_search_pagination(); ?></p>
                            <p class="see_more_link"><a href="<?php echo osc_search_show_all_url();?>"><strong><?php _e("See all offers", 'summersday'); ?> &raquo;</strong></a></p>
                        <?php } ?>
                    <?php View::newInstance()->_erase('items'); } ?>
					<?php osc_current_web_theme_path('footer.php') ; ?>
                </div>
            </div>
    </div>
  </div>
 </div>
  <script type="text/javascript">
    $(document).ready(function() {
      $('ul.sf-menu').sooperfish();
    });
  </script>
  <script>
  !function ($) {

    "use strict"; // jshint ;_;


    /* MAGNIFY PUBLIC CLASS DEFINITION
     * =============================== */

    var Magnify = function (element, options) {
        this.init('magnify', element, options)
    }

    Magnify.prototype = {

        constructor: Magnify

        , init: function (type, element, options) {
            var event = 'mousemove'
                , eventOut = 'mouseleave';

            this.type = type
            this.$element = $(element)
            this.options = this.getOptions(options)
            this.nativeWidth = 0
            this.nativeHeight = 0

            this.$element.wrap('<div class="magnify" \>');
            this.$element.parent('.magnify').append('<div class="magnify-large" \>');
            this.$element.siblings(".magnify-large").css("background","url('" + this.$element.attr("src") + "') no-repeat");

            this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));
            this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));
        }

        , getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay
                    , hide: options.delay
                }
            }

            return options
        }

        , check: function (e) {
            var container = $(e.currentTarget);
            var self = container.children('img');
            var mag = container.children(".magnify-large");

            // Get the native dimensions of the image
            if(!this.nativeWidth && !this.nativeHeight) {
                var image = new Image();
                image.src = self.attr("src");

                this.nativeWidth = image.width;
                this.nativeHeight = image.height;

            } else {

                var magnifyOffset = container.offset();
                var mx = e.pageX - magnifyOffset.left;
                var my = e.pageY - magnifyOffset.top;

                if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {
                    mag.fadeIn(100);
                } else {
                    mag.fadeOut(100);
                }

                if(mag.is(":visible"))
                {
                    var rx = Math.round(mx/container.width()*this.nativeWidth - mag.width()/2)*-1;
                    var ry = Math.round(my/container.height()*this.nativeHeight - mag.height()/2)*-1;
                    var bgp = rx + "px " + ry + "px";

                    var px = mx - mag.width()/2;
                    var py = my - mag.height()/2;

                    mag.css({left: px, top: py, backgroundPosition: bgp});
                }
            }

        }
    }


    /* MAGNIFY PLUGIN DEFINITION
     * ========================= */

    $.fn.magnify = function ( option ) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('magnify')
                , options = typeof option == 'object' && option
            if (!data) $this.data('tooltip', (data = new Magnify(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.magnify.Constructor = Magnify

    $.fn.magnify.defaults = {
        delay: 0
    }


    /* MAGNIFY DATA-API
     * ================ */

    $(window).on('load', function () {
        $('[data-toggle="magnify"]').each(function () {
            var $mag = $(this);
            $mag.magnify()
        })
    })

} ( window.jQuery );
</script>
        
		
        </div>
		
    </body>
</html>
