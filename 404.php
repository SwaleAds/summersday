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

    osc_enqueue_script('jquery-validate');
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
        <div class="content error">
            <div class="container">
  <div class="row">
    <div class="span12">
      <div class="hero-unit center">
          <h1>Page Not Found <small><font face="Tahoma" color="red">Error 404</font></small></h1>
          <br />
          <p>The page you requested could not be found, either contact your webmaster or try again. Use your browsers <b>Back</b> button to navigate to the page you have prevously come from</p>
          <p><b>Or you could just press this neat little button:</b></p>
          <a href="#" class="btn btn-large btn-info"><i class="icon-home icon-white"></i> Take Me Home</a>
        </div>
        <br />
      <div class="thumbnail">
        <center><h2>Recent Content :</h2></center>
      </div>
        <br />
        <div class="thumbnail span3 center">
          <h3>Try This...</h3>
          <p>write about your error page conent here and give some fool a good load of information or not</p>
          <div class="hero-unit">
            <img src="http://placehold.it/100x100"><!--Why Not Put a Picture To Celebrate Your 404-->
            <p></p>
          </div>
          <a href="#" class="btn btn-danger btn-large"><i class="icon-share icon-white"></i> Take Me There...</a>
        </div>
        <div class="thumbnail span3 center"> 
          <h3>Try This...</h3>
          <p>write about your error page conent here and give some fool a good load of information or not</p>
          <div class="hero-unit">
            <img src="http://placehold.it/100x100"><!--Why Not Put a Picture To Celebrate Your 404-->
            <p></p>
          </div>
          <a href="#" class="btn btn-danger btn-large"><i class="icon-share icon-white"></i> Take Me There...</a>
        </div>
            <div class="thumbnail span3 center">
          <h3>Try This...</h3>
          <p>write about your error page conent here and give some fool a good load of information or not</p>
          <div class="hero-unit">
            <img src="http://placehold.it/100x100"><!--Why Not Put a Picture To Celebrate Your 404-->
            <p></p>
          </div>
          <a href="#" class="btn btn-danger btn-large"><i class="icon-share icon-white"></i> Take Me There...</a>
        </div>
            <div class="thumbnail span3 center">
          <h3>Try This...</h3>
          <p>write about your error page conent here and give some fool a good load of information or not</p>
          <div class="hero-unit">
            <img src="http://placehold.it/100x100"><!--Why Not Put a Picture To Celebrate Your 404-->
            <p></p>
          </div>
          <a href="#" class="btn btn-danger btn-large"><i class="icon-share icon-white"></i> Take Me There...</a>
        </div>
        <br />
        <p></p>
        <!-- By ConnerT HTML & CSS Enthusiast -->  
    </div>
  </div>
</div>
        </div>
        <?php osc_current_web_theme_path('footer.php'); ?>
    </body>
</html>