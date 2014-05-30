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
?>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="<?php echo str_replace('_', '-', osc_current_user_locale()); ?>">
    <head>
        <?php osc_current_web_theme_path('head.php'); ?>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
    </head>
    <body>
	<script>
	 $('.selectpicker').selectpicker();
	 </script>
	 
        <?php osc_current_web_theme_path('header.php'); ?>
	<div class="progress progress-striped active">
  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
   New Theme for OSClass 85% Completed
  </div>
</div>
		<!--  osc_current_web_theme_path('hooks/inc.newsalert.php'); ?> -->
		<!-- Start Main Container -->
	
		<?php osc_current_web_theme_path('hooks/inc.main.php'); ?>
	
        <div id="sidebar_container">
        <div class="sidebar">
            <h4><i class="fa fa-heart"></i> Welcome To <strong><?php echo osc_page_title() ; ?></strong></h4>
            <h5>%site is the number #1 classifieds website for listing things for sale across the internet. Get started by clicking the button below.</h5>
            <p>New Member? <a href="<?php echo osc_register_account_url(); ?>">Register</a></p>
<center><a href="<?php echo osc_item_post_url_in_category(); ?>" class="btn btn-info btn-large"><i class="fa fa-tags"></i> Sell My Stuff</a></center>
          </div>
		   <div class="row">
	<div class="col-md-6">

    	<div class="sidebar">

    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title">Login via site</h3>
			 	</div>
			  	<div class="panel-body">
			    	<form accept-charset="UTF-8" role="form">
                    <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="yourmail@example.com" name="email" type="text">
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="password" type="password" value="">
			    		</div>
			    		<div class="checkbox">
			    	    	<label>
			    	    		<input name="remember" type="checkbox" value="Remember Me"> Remember Me
			    	    	</label>
			    	    </div>
			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
			    	</fieldset>
			      	</form>
					<?php if( osc_is_web_user_logged_in() ) { ?> <li class="first logged">
                    <h3><?php echo sprintf(__('Hi %s', 'summersday'), osc_logged_user_name() . ''); ?><i class="icon-small icon-star"></i></h3>
                    <a href="<?php echo osc_user_logout_url(); ?>"><?php _e('Logout', 'summersday'); ?></a>
                </li>
				  <?php }; ?>
                      <hr/>
                    <center><h4>OR</h4></center>
                    <input class="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook">
			    </div>
			</div>
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
	
                   
                    <?php if( osc_count_latest_items() == 0) { ?>
                        <p class="empty"><?php _e('No Latest Listings', 'summersday'); ?></p>
                    <?php } else { ?>
                    <table border="0" cellspacing="0" width="600px">
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
