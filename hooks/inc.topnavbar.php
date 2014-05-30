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

     $sQuery = osc_get_preference('keyword_placeholder', 'summersday');
?>
<div class="col-md-offset-1 col-md-10">
<div class="navbar navbar-default navbar">
    <div class="container">
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
                    <li><a href="#">Link</a>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
					  <?php if( osc_is_web_user_logged_in() ) { ?> <li class="first logged">
                    <h3><?php echo sprintf(__('Hi %s', 'summersday'), osc_logged_user_name() . ''); ?><i class="icon-small icon-star"></i></h3>
                    <a href="<?php echo osc_user_logout_url(); ?>"><?php _e('Logout', 'summersday'); ?></a>
                </li>
			<?php } else { ?>
                           <li> <a href="<?php echo osc_register_account_url(); ?>"><i class="fa fa-star"></i><?php _e(' Get Free Account', 'summersday'); ?>
						   </a></li><li><a href="<?php echo osc_user_login_url(); ?>"><?php _e(' Login', 'summersday'); ?></a></li>
						
                        <?php }; ?>
                   
                </ul>
                <!-- Start: Primary navigation -->
            <div class="nav-collapse collapse">        
              <ul class="nav pull-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">    
	<li><a id="login_open" href="#STARPLogin" data-toggle="modal"><i class="icon-small icon-user"></i><?php _e('Login', 'summersday') ; ?></a></li>
    <li><a id="login_open" href="#STARPReg" data-toggle="modal"><i class="icon-small icon-user"></i><?php _e('Register', 'summersday') ; ?></a></li>
         
        </div>
                <?php if(osc_user_registration_enabled()) { ?>
           
                <?php }; ?>
                  <ul class="dropdown-menu">
                    <li><a href="#">BUY STARPClass</a></li>           
                              
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">About</a>
                  <ul class="dropdown-menu">
                    <li><a href="<?php echo osc_item_post_url_in_category() ; ?>">Publish New Ad</a></li>
                    <li><a href="patnerships.html">Parnerships</a></li>
                    <li><a href="leadership.html">Leadership</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="blog.html">Blog</a></li>
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
    </div>
</div>
</div>