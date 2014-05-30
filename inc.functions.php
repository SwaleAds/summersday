<?php

osc_add_hook('init_admin', 'theme_summersday_actions_admin');
osc_add_hook('init_admin', 'theme_summersday_regions_map_admin');
if (function_exists('osc_admin_menu_appearance')) {
    osc_admin_menu_appearance(__('Header logo', 'summersday'), osc_admin_render_theme_url('oc-content/themes/summersday/admin/header.php'), 'header_summersday');
    osc_admin_menu_appearance(__('Theme settings', 'summersday'), osc_admin_render_theme_url('oc-content/themes/summersday/admin/settings.php'), 'settings_summersday');
    osc_admin_menu_appearance(__('Map settings', 'summersday'), osc_admin_render_theme_url('oc-content/themes/summersday/admin/map_settings.php'), 'map_settings_summersday');
} else {

    function summersday_admin_menu() {
        echo '<h3><a href="#">' . __('Brasil theme', 'summersday') . '</a></h3>
            <ul>
                <li><a href="' . osc_admin_render_theme_url('oc-content/themes/summersday/admin/header.php') . '">&raquo; ' . __('Header logo', 'summersday') . '</a></li>
                <li><a href="' . osc_admin_render_theme_url('oc-content/themes/summersday/admin/settings.php') . '">&raquo; ' . __('Theme settings', 'summersday') . '</a></li>
                <li><a href="' . osc_admin_render_theme_url('oc-content/themes/summersday/admin/map_settings.php') . '">&raquo; ' . __('Map settings', 'summersday') . '</a></li>

            </ul>';
    }

    osc_add_hook('admin_menu', 'summersday_admin_menu');
}

function theme_summersday_regions_map_admin() {
    $regions = json_decode(osc_get_preference('region_maps', 'summersday'), true);
    switch (Params::getParam('action_specific')) {
        case('edit_region_map'):
            $regions[Params::getParam('target-id')] = Params::getParam('region');
            osc_set_preference('region_maps', json_encode($regions), 'summersday');
            osc_add_flash_ok_message(__('Region saved correctly', 'summersday'), 'admin');
            header('Location: ' . osc_admin_render_theme_url('oc-content/themes/summersday/admin/map_settings.php'));
            exit;
            break;
    }
}

function map_region_url($region_id) {
    $regionData = Region::newInstance()->findByPrimaryKey($region_id);
    if( function_exists('osc_subdomain_type') ) {
        if(osc_subdomain_type()=='region' || osc_subdomain_type()=='category' || osc_subdomain_type()=='country') {
            return osc_update_search_url(array('sRegion' => $regionData['s_name']));
        } else {
            // If osc_subdomain_type == 'city', redirect to base domain.
            if(osc_rewrite_enabled()) {
                $url    = osc_base_url();
            } else {
                $url    = osc_base_url(true);
            }

            // remove subdomain from url
            if(osc_subdomain_type()!='') {
                $aParts = explode('.', $url);
                unset($aParts[0]);
                // http or https
                $url = 'http://';
                if( isset($_SERVER['HTTPS']) ) {
                    if( strtolower($_SERVER['HTTPS']) == 'on' ){
                        $url = 'https://';
                    }
                }
                $url .= implode('.', $aParts);
            }
            if(osc_rewrite_enabled()) {
                if (osc_get_preference('seo_url_search_prefix') != '') {
                    $url .= osc_get_preference('seo_url_search_prefix') . '/';
                }
                $url .= osc_sanitizeString($regionData['s_name']) . '-r' . $regionData['pk_i_id'];

            } else {
                $url .= '?page=search&sRegion='. $regionData['s_name']; // osc_update_search_url(array('sRegion' => $regionData['s_name']));

            }
            return $url;
        }
    } else {
        return osc_search_url(array('sRegion' => $regionData['s_name']));
    }
}

function theme_summersday_admin_regions_message() {
    $regions = json_decode(osc_get_preference('region_maps', 'summersday'), true);
    if (count($regions) < 0) {
        echo '</div><div class="flashmessage flashmessage-error" style="display:block">' . sprintf(__('Wait! There are unassigned map areas in the map. <a href="%s">Click here</a> to assign regions to the map.', 'summersday'), osc_admin_render_theme_url('oc-content/themes/summersday/admin/map_settings.php')) . '<a class="btn ico btn-mini ico-close">x</a>';
    }
}

osc_add_hook('admin_page_header', 'theme_summersday_admin_regions_message', 10);
?>