<?php
osc_register_script('bootstrap-confirmation', osc_current_web_theme_js_url('bootstrap-confirmation.js'));

osc_enqueue_script('bootstrap-confirmation');
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
	    <script type="text/javascript">
                    $(document).ready(function(){
                        $("#delete_account").click(function(){
                            $("#dialog-delete-account").dialog('open');
                        });

                        $("#dialog-delete-account").dialog({
                            autoOpen: false,
                            modal: true,
                            buttons: {
                                "<?php echo osc_esc_js(__('Delete', 'summersday')); ?>": function() {
                                    window.location = '<?php echo osc_base_url(true).'?page=user&action=delete&id='.osc_user_id().'&secret='.$user['s_secret']; ?>';
                                },
                                "<?php echo osc_esc_js(__('Cancel', 'summersday')); ?>": function() {
                                    $( this ).dialog( "close" );
                                }
                            }
                        });
                    });
                </script>
	
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
         		<div class="col-md-5">
			<div class="panel panel-success">
				<div class="panel-heading">
					<h3 class="panel-title">Panel 2</h3>
					<span class="pull-right clickable"><i class="glyphicon glyphicon-chevron-up"></i></span>
				</div>
				<div class="panel-body">
                  <h2><?php _e('Update your profile', 'summersday'); ?></h2>
                <?php UserForm::location_javascript(); ?>
			

              <form action="<?php echo osc_base_url(true); ?>" method="post">
                    <input type="hidden" name="page" value="user" />
                    <input type="hidden" name="action" value="profile_post" />
                    <fieldset>
                       
                            <label for="name"><?php _e('Name', 'summersday'); ?></label>
                            <?php UserForm::name_text(osc_user()); ?>
                      
                    
                            <label for="email"><?php _e('Username', 'summersday'); ?></label>
                            <span class="update">
                                <?php echo osc_user_username(); ?><br />
                                <?php if(osc_user_username()==osc_user_id()) { ?>
                                    <a href="<?php echo osc_change_user_username_url(); ?>"><?php _e('Modify username', 'summersday'); ?></a>
                                <?php }; ?>
                            </span>
                       
                   
                            <label for="email"><?php _e('E-mail', 'summersday'); ?></label>
                            <span class="update">
                                <?php echo osc_user_email(); ?><br />
                                <a href="<?php echo osc_change_user_email_url(); ?>"><?php _e('Modify e-mail', 'summersday'); ?></a> <a href="<?php echo osc_change_user_password_url(); ?>" ><?php _e('Modify password', 'summersday'); ?></a>
                            </span>
                    
                            <BR>
                            <label for="user_type"><?php _e('User type', 'summersday'); ?></label>
                            <?php UserForm::is_company_select(osc_user()); ?>
                   
                             <BR>
                            <label for="phoneMobile"><?php _e('Cell phone', 'summersday'); ?></label>
							       <BR>
                            <?php UserForm::mobile_text(osc_user()); ?>
                    
                              <BR>
                            <label for="phoneLand"><?php _e('Phone', 'summersday'); ?></label>
							       <BR>
                            <?php UserForm::phone_land_text(osc_user()); ?>
                          <BR>
                    
                            <label for="country"><?php _e('Country', 'summersday'); ?> </label>
							       <BR>
                            <?php UserForm::country_select(osc_get_countries(), osc_user()); ?>
                     
                        <BR>
                            <label for="region"><?php _e('Region', 'summersday'); ?> *</label>
							       <BR>
                            <?php UserForm::region_select(osc_get_regions(), osc_user()); ?>
							
                
                       <BR>
                            <label for="city"><?php _e('City', 'summersday'); ?> *</label>
							       <BR>
                            <?php UserForm::city_select(osc_get_cities(), osc_user()); ?>
                  
                       <BR>
                            <label for="city_area"><?php _e('City area', 'summersday'); ?></label>
							       <BR>
                            <?php UserForm::city_area_text(osc_user()); ?>
                         <BR>
                            <label for="address"><?php _e('Address', 'summersday'); ?></label>
							       <BR>
                            <?php UserForm::address_text(osc_user()); ?>
                
                           <BR>
                            <label for="webSite"><?php _e('Website', 'summersday'); ?></label>
							       <BR>
                            <?php UserForm::website_text(osc_user()); ?>
                 <BR>
                
                            <?php UserForm::multilanguage_info($locales, osc_user()); ?>
                             <BR>
                     
                            <button type="submit"><?php _e('Update', 'summersday'); ?></button>
							<BR>
                            <button id="delete_account" type="button"><?php _e('Delete my account', 'summersday'); ?></button>
                    
						<BR>
                      <?php osc_run_hook('user_form'); ?>
                    </fieldset>
                </form>
            </div>
        </div>
	

        <div id="dialog-delete-account" title="<?php _e('Delete account', 'summersday'); ?>" class="has-form-actions hide">
            <div class="form-horizontal">
                <div class="form-row">
                    <p><?php _e('All your listings and alerts will be removed, this action can not be undone.', 'summersday');?></p>
                </div>
            </div>
			       <br />
                
        </div>
            </div>
 
    </div>
  </div>
		</div>
	</div>
        <?php osc_current_web_theme_path('footer.php'); ?>
    </body>
</html>
