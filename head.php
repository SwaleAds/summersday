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

<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

<title><?php echo meta_title(); ?></title>
<meta name="title" content="<?php echo osc_esc_html(meta_title()); ?>" />
<meta name = "viewport" content = "width=device-width, maximum-scale = 1, minimum-scale=1" />
<?php if( meta_description() != '' ) { ?>
<meta name="description" content="<?php echo osc_esc_html(meta_description()); ?>" />
<?php } ?>
<?php if( function_exists('meta_keywords') ) { ?>
<?php if( meta_keywords() != '' ) { ?>
<meta name="keywords" content="<?php echo osc_esc_html(meta_keywords()); ?>" />
<?php } ?>
<?php } ?>
<?php if( osc_get_canonical() != '' ) { ?>
<link rel="canonical" href="<?php echo osc_get_canonical(); ?>"/>
<?php } ?>

<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="Fri, Jan 01 1970 00:00:00 GMT" />
<script type="text/javascript">
    var fileDefaultText = '<?php echo osc_esc_js( __('No file selected', 'summersday') ); ?>';
    var fileBtnText     = '<?php echo osc_esc_js( __('Choose File', 'summersday') ); ?>';
</script>


<?php
osc_enqueue_style('style', osc_current_web_theme_url('css/style.css'));
osc_enqueue_style('tabs', osc_current_web_theme_url('tabs.css'));
osc_enqueue_style('bootstrap-css', osc_current_web_theme_url('css/bootstrap.min.css'));
osc_enqueue_style('selectstyle', osc_current_web_theme_url('css/bootstrap-select.min.css'));
osc_enqueue_style('font-awsome', osc_current_web_theme_url('css/font-awesome/css/font-awesome.min.css'));
osc_enqueue_style('jquery-ui-datepicker', osc_assets_url('css/jquery-ui/jquery-ui.css'));

osc_register_script('jquery-uniform', osc_current_web_theme_js_url('jquery.uniform.js'), 'jquery');
osc_register_script('jquerylatest', ('http://code.jquery.com/jquery.min.js'), 'jquery');
osc_register_script('global', osc_current_web_theme_js_url('global.js'));
osc_register_script('summersdayize', osc_current_web_theme_js_url('summersdayizr-1.5.min.js'));
osc_register_script('sooperfish', osc_current_web_theme_js_url('jquery.sooperfish.js'));
osc_register_script('sooperfish-ease', osc_current_web_theme_js_url('jquery.easing-sooper.js'));
osc_register_script('bootstrap-select', osc_current_web_theme_js_url('bootstrap-select.js'));
osc_register_script('PasswordGenerate', osc_current_web_theme_js_url('GenerateNewPasswordMD.js'));

osc_enqueue_script('jquerylatest','http://code.jquery.com/jquery.js');
osc_enqueue_script('jquery-ui');
osc_enqueue_script('jquery-uniform');
osc_enqueue_script('tabber');
osc_enqueue_script('global');
osc_enqueue_script('summersdayize');
osc_enqueue_script('sooperfish');
osc_enqueue_script('sooperfish-ease');
osc_enqueue_script('bootstrap-select');
osc_enqueue_script('PasswordGenerate');


osc_run_hook('header');

FieldForm::i18n_datePicker();

?>