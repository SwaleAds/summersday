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
	osc_register_script('jquery10', osc_current_web_theme_js_url('jquery-1.10.2.min.js'), 'jquery');
osc_enqueue_script('jquery10'); 
	 
?>
<!-- container -->

<img src="http://www.sheppey-webhosting.com/dev/oc-content/themes/summersday/images/sun.png">

<div class="container">

</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<script>
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
</script>
 <div id="container">
	 
 <div class="home">

    <div id="main">
      <header>
        <div id="logo">
          <div id="logo_text">
                <a id="logo" href="<?php echo osc_base_url(); ?>">
    <?php echo logo_header(); ?>
    </a>
            <h2>Summers Day Template</h2>
			<br>
          </div>
        
        </div>
   
<div class="navbar navbar-default navbar">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        
        </div>
        <center>
            <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="<?php echo osc_base_url(); ?>"><i class="fa fa-home fa-fw"></i>Home</a>
                    </li>
                      <li><a href="<?php echo osc_item_post_url_in_category() ; ?>"><i class="fa fa-pencil fa-fw"></i> New Ad</a></li>
                    </li>
                        <ul class="nav navbar-nav navbar-right">
                    <li><a href="#search">Search</a></li>
                </ul>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
				
		
                           <li> <a href="<?php echo osc_register_account_url(); ?>"><i class="fa fa-star"></i><?php _e(' Get Free Account', 'summersday'); ?>
						   </a></li><li><a href="<?php echo osc_user_login_url(); ?>"><?php _e(' Login', 'summersday'); ?></a></li>
						
              
                   
                </ul>
                <!-- Start: Primary navigation -->
            <div class="nav-collapse collapse">        
              <ul class="nav pull-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">    
	<li><a id="login_open" href="#STARPLogin" data-toggle="modal"><i class="icon-small icon-user"></i><?php _e('Login', 'summersday') ; ?></a></li>
    <li><a id="login_open" href="#STARPReg" data-toggle="modal"><i class="icon-small icon-user"></i><?php _e('Register', 'summersday') ; ?></a></li>
         
        </div>
		<div id="search">

                <?php if(osc_user_registration_enabled()) { ?>
           
                <?php }; ?>
                  <ul class="dropdown-menu">
                            
                              
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">About</a>
                  <ul class="dropdown-menu">
                    <li><a href="<?php echo osc_item_post_url_in_category() ; ?>">Publish New Ad</a></li>
                    <li><a href="patnerships.html">Parnerships</a></li>
                    <li><a href="leadership.html">Leadership</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="events.html">Events</a></li>
                
                  </ul>
                </li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="<?php echo osc_contact_url(); ?>">Contact us</a></li>
				 <li><a href="#StarpReg">Sign up</a></li>
                <li><a href="<?php echo osc_user_login_url(); ?>">Sign in</a></li>
               
              </ul>
            </div>
          </div>
        </center>
  
		<br>
			 
      </header>

    
<!-- /header -->
<div class="forcemessages-inline">
    <?php osc_show_flash_message(); ?>
</div>
<script>
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});
</script>
		<script src="http://www.sheppey-webhosting.com/dev/oc-content/themes/summersday/bootstrap/js/bootstrap.js"></script>
<a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><i class="fa fa-caret-square-o-up"></i></a>
	  