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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="<?php echo str_replace('_', '-', osc_current_user_locale()); ?>">
    <head>
        <?php osc_current_web_theme_path('head.php'); ?>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
    </head>
    <body>
	
        <?php osc_current_web_theme_path('header.php'); ?>
		<div id="site_content">
           <div class="container">
    <div class="row">
        <div class="col-sm-3 col-md-3">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="fa fa-dashboard fa-lg">
                            </span><?php echo sprintf(__(' Hello %s', 'summersday') ,osc_logged_user_name()); ?></a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                   
                                        <span class="fa fa-user"></span> <?php echo osc_private_user_menu(); ?>
                                  
                                </tr>
                               
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="fa fa-lock fa-lg">
                            </span>&nbsp;Account</a>
                        </h4>
                    </div>
                   
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <a href="#">Edit Profile</a> <span class="label label-success">New</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Change Password</a> <span class="label label-primary">New</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Upload Profile Pic</a> <span class="label label-warning">New</span>
                                    </td>
                                </tr>
           
                            </table>
                   
                    </div>
                </div>
            
                </div>
            
        </div>
       
                <h1></h1>
                <h2><?php echo sprintf(__('Listings from %s', 'summersday') ,osc_logged_user_name()); ?></h2>
                <?php if(osc_count_items() == 0) { ?>
                    <h3><?php _e('No listings have been added yet', 'summersday'); ?></h3>
                <?php } else { ?>
                    <?php while(osc_has_items()) { ?>
                        <div class="userItem" >
                            <div>
                                <a href="<?php echo osc_item_url(); ?>"><?php echo osc_item_title(); ?></a>
                            </div>
                            <div class="userItemData" >
                            <?php _e('Publication date', 'summersday'); ?>: <?php echo osc_format_date(osc_item_pub_date()); ?><br />
                                    <?php if( osc_price_enabled_at_items() && osc_item_category_price_enabled() ) { _e('Price', 'summersday'); ?>: <?php echo osc_format_price(osc_item_price()); } ?>
                                    <p class="options">
                                        <strong><a href="<?php echo osc_item_url(); ?>"><?php _e('View listing', 'summersday'); ?></a></strong>
                                        <span>|</span>
                                        <a href="<?php echo osc_item_edit_url(); ?>"><?php _e('Edit', 'summersday'); ?></a>
                                        <?php if(osc_item_is_inactive()) {?>
                                        <span>|</span>
                                        <a href="<?php echo osc_item_activate_url();?>" ><?php _e('Activate', 'summersday'); ?></a>
                                        <?php } ?>
                                    </p>
                                          <br />
                    <?php } ?>
                <?php } ?>
            </div>
        </div>
            </div>
        </div>
    </div>
</div>
</div>
        <?php osc_current_web_theme_path('footer.php'); ?>
    </body>
</html>
