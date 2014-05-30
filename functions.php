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

    define('summersday_THEME_VERSION', '3.0.1');

    osc_enqueue_script('php-date');

    if( !OC_ADMIN ) {
        if( !function_exists('add_close_button_action') ) {
            function add_close_button_action(){
                echo '<script type="text/javascript">';
                    echo '$(".flashmessage .ico-close").click(function(){';
                        echo '$(this).parent().hide();';
                    echo '});';
                echo '</script>';
            }
            osc_add_hook('footer', 'add_close_button_action');
        }
    }

    function theme_summersday_actions_admin() {
        if( Params::getParam('file') == 'oc-content/themes/summersday/admin/settings.php' ) {
            if( Params::getParam('donation') == 'successful' ) {
                osc_set_preference('donation', '1', 'summersday_theme');
                osc_reset_preferences();
            }
        }

        switch( Params::getParam('action_specific') ) {
            case('settings'):
                $footerLink  = Params::getParam('footer_link');
				 $themeLink  = Params::getParam('themesupport_link');
                $defaultLogo = Params::getParam('default_logo');
                osc_set_preference('keyword_placeholder', Params::getParam('keyword_placeholder'), 'summersday_theme');
                osc_set_preference('footer_link', ($footerLink ? '1' : '0'), 'summersday_theme');
				osc_set_preference('themesupport_link', ($themeLink ? '1' : '0'), 'summersday_theme');
                osc_set_preference('default_logo', ($defaultLogo ? '1' : '0'), 'summersday_theme');

                osc_add_flash_ok_message(__('Theme settings updated correctly', 'summersday'), 'admin');
                osc_redirect_to(osc_admin_render_theme_url('oc-content/themes/summersday/admin/settings.php'));
            break;
            case('upload_logo'):
                $package = Params::getFiles('logo');
                if( $package['error'] == UPLOAD_ERR_OK ) {
                    if( move_uploaded_file($package['tmp_name'], WebThemes::newInstance()->getCurrentThemePath() . "images/logo.jpg" ) ) {
                        osc_add_flash_ok_message(__('The logo image has been uploaded correctly', 'summersday'), 'admin');
                    } else {
                        osc_add_flash_error_message(__("An error has occurred, please try again", 'summersday'), 'admin');
                    }
                } else {
                    osc_add_flash_error_message(__("An error has occurred, please try again", 'summersday'), 'admin');
                }
                osc_redirect_to(osc_admin_render_theme_url('oc-content/themes/summersday/admin/header.php'));
            break;
            case('remove'):
                if(file_exists( WebThemes::newInstance()->getCurrentThemePath() . "images/logo.jpg" ) ) {
                    @unlink( WebThemes::newInstance()->getCurrentThemePath() . "images/logo.jpg" );
                    osc_add_flash_ok_message(__('The logo image has been removed', 'summersday'), 'admin');
                } else {
                    osc_add_flash_error_message(__("Image not found", 'summersday'), 'admin');
                }
                osc_redirect_to(osc_admin_render_theme_url('oc-content/themes/summersday/admin/header.php'));
            break;
        }
    }
	
	if(summersday_is_fineuploader()) {
		if(!OC_ADMIN) {
		    osc_enqueue_style('fine-uploader-css', osc_assets_url('js/fineuploader/fineuploader.css'));
	    }
	    osc_enqueue_script('jquery-fineuploader');
    }
	
	function modern_is_fineuploader() {
	    return Scripts::newInstance()->registered['jquery-fineuploader'] && method_exists('ItemForm', 'ajax_photos');
    }
	
	
    osc_add_hook('init_admin', 'theme_summersday_actions_admin');
    osc_admin_menu_appearance(__('Header logo', 'summersday'), osc_admin_render_theme_url('oc-content/themes/summersday/admin/header.php'), 'header_summersday');
    osc_admin_menu_appearance(__('Theme settings', 'summersday'), osc_admin_render_theme_url('oc-content/themes/summersday/admin/settings.php'), 'settings_summersday');

    if( !function_exists('logo_header') ) {
        function logo_header() {
            $html = '<img border="0" alt="' . osc_page_title() . '" src="' . osc_current_web_theme_url('images/logo.jpg') . '" />';
            if( file_exists( WebThemes::newInstance()->getCurrentThemePath() . "images/logo.jpg" ) ) {
                return $html;
            } else if( osc_get_preference('default_logo', 'summersday_theme') && (file_exists( WebThemes::newInstance()->getCurrentThemePath() . "images/default-logo.jpg")) ) {
                return '<img border="0" alt="' . osc_page_title() . '" src="' . osc_current_web_theme_url('images/default-logo.jpg') . '" />';
            } else {
                return osc_page_title();
            }
        }
    }

    // install update options
    if( !function_exists('summersday_theme_install') ) {
        function summersday_theme_install() {
            osc_set_preference('keyword_placeholder', __('ie. PHP Programmer', 'summersday'), 'summersday_theme');
            osc_set_preference('version', summersday_THEME_VERSION, 'summersday_theme');
            osc_set_preference('footer_link', true, 'summersday_theme');
			osc_set_preference('themesupport_link', true, 'summersday_theme');
            osc_set_preference('donation', '0', 'summersday_theme');
            osc_set_preference('default_logo', '1', 'summersday_theme');
            osc_reset_preferences();
        }
    }

    if(!function_exists('check_install_summersday_theme')) {
        function check_install_summersday_theme() {
            $current_version = osc_get_preference('version', 'summersday_theme');
            //check if current version is installed or need an update<
            if( !$current_version ) {
                summersday_theme_install();
            }
        }
    }
    check_install_summersday_theme();

?>