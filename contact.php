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
		<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.4/jquery-ui.min.js"></script>
<script src="oc-content/themes/summersday/js/jquery.contactvalidate.js"></script> <!-- AJAX Form Submit -->
    </head>
    <body>
        <?php osc_current_web_theme_path('header.php'); ?>
       <section id="contact">


		<mark id="message"></mark>

		<form method="post" action="contact.php" name="contactform" id="contactform" autocomplete="on">

			<fieldset>

				<legend>Contact Details</legend>

				<div>
					<label for="name" accesskey="U">Your Name</label>
					<input name="name" type="text" id="name" placeholder="Enter your name" required="required" />
				</div>
				<div>
					<label for="email" accesskey="E">Email</label>
					<input name="email" type="email" id="email" placeholder="Enter your Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
				</div>

				<div>
					<label for="phone" accesskey="P">Phone <small>(optional)</small></label>
					<input name="phone" type="tel" id="phone" size="30" placeholder="Enter your phone number" />
				</div>

				<div>
					<label for="website" accesskey="W">Website <small>(optional)</small></label>
					<input name="website" type="url" id="website" placeholder="Enter your website address" />
				</div>

			</fieldset>

			<fieldset>

				<legend>Your Comments</legend>

				<div>
					<label for="subject" accesskey="S">Subject</label>
					<select name="subject" id="subject" required="required">
						<option value=""></option>
						<option value="Support">Support</option>
						<option value="A Sale">Sales</option>
						<option value="A Bug fix">Report a bug</option>
					</select>
				</div>

				<div>
					<label for="comments" accesskey="C">Comments</label>
					<textarea name="comments" cols="40" rows="3" id="comments" placeholder="Enter your comments" spellcheck="true" required="required"></textarea>
				</div>

			</fieldset>

			<fieldset>

				<legend>Are you human?</legend>

				<label for="verify" accesskey="V" class="verify"><img src="image.php" alt="Verification code" /></label>
				<input name="verify" type="text" id="verify" size="6" required="required" style="width: 50px;" title="This confirms you are a human user and not a spam-bot." />

			</fieldset>

			<input type="submit" class="submit" id="submit" value="Submit" />

		</form>

	</section>
        <?php osc_current_web_theme_path('footer.php'); ?>
    </body>
</html>