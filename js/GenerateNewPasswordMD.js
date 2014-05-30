




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>pGenerator/pGenerator.jquery.js at master · M1Sh0u/pGenerator</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="M1Sh0u/pGenerator" name="twitter:title" /><meta content="pGenerator - Password Generator jQuery Plugin" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/3706005?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/3706005?s=400" property="og:image" /><meta content="M1Sh0u/pGenerator" property="og:title" /><meta content="https://github.com/M1Sh0u/pGenerator" property="og:url" /><meta content="pGenerator - Password Generator jQuery Plugin" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="519AEA6B:7CF3:2F884F4:5384EC82" name="octolytics-dimension-request_id" /><meta content="5765630" name="octolytics-actor-id" /><meta content="SwaleAds" name="octolytics-actor-login" /><meta content="6d677bd2baceb080d919a5ac568f23d008482e286b5ee91873f9f9461eadf8cd" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="amwndpNp1fG4EcciooR+Rlwnrha2U2mEgF4hftviIVLQkTkY9dSNhwO/vo7K1J6UyGFzpufOMrCv4DWLXde9IQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-1121bb0260c396426f82723a30b276d949f537a3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-31ad60ac9cb6abb15c45c1613fcd89f93af3b780.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e20ff1f1e6f5ff4bd9a1d36a5f30d13c">

      
  <meta name="description" content="pGenerator - Password Generator jQuery Plugin" />

  <meta content="3706005" name="octolytics-dimension-user_id" /><meta content="M1Sh0u" name="octolytics-dimension-user_login" /><meta content="8456412" name="octolytics-dimension-repository_id" /><meta content="M1Sh0u/pGenerator" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8456412" name="octolytics-dimension-repository_network_root_id" /><meta content="M1Sh0u/pGenerator" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/M1Sh0u/pGenerator/commits/master.atom" rel="alternate" title="Recent Commits to pGenerator:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="SwaleAds"
      data-repo="M1Sh0u/pGenerator"
      data-branch="master"
      data-sha="454d97d7c16b1de27da117f353231cc456d05d58"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="M1Sh0u/pGenerator" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/SwaleAds" class="name">
        <img alt="SwaleAds" class=" js-avatar" data-user="5765630" height="20" src="https://avatars0.githubusercontent.com/u/5765630?s=140" width="20" /> SwaleAds
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="M1Sh0u/pGenerator">This repository</span>
    </li>
      <li>
        <a href="/M1Sh0u/pGenerator/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="jH/SwKWDJ8tMmzHkTgiNKr0CSjuM+Iw14LJsTeCt8agfERvpuqnXam1CWK2g6DVE38oPuKVax0XryZrQIVZP/Q==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8456412" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/M1Sh0u/pGenerator/watchers">
        2
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/M1Sh0u/pGenerator/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="D27JAmXeIfRlHw4dCi8FeFhgGYzbRHtQopmvKApyuEiBd+s0PEoKD6Wv5HlOBOdYzSlVN+xS64jClxUPmyJblA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar M1Sh0u/pGenerator">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/M1Sh0u/pGenerator/stargazers">
          4
        </a>
</form>
    <form accept-charset="UTF-8" action="/M1Sh0u/pGenerator/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Q+/5ciN3nl/6CWVyJfPkJ1TJ7T8V04oL9vFuluQV86Wx3oyVUAkbu/M+HsgbUqdPhy0GzHxl1/E4CZi/oXSYOA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star M1Sh0u/pGenerator">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/M1Sh0u/pGenerator/stargazers">
          4
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/M1Sh0u/pGenerator/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of M1Sh0u/pGenerator to your account" aria-label="Fork your own copy of M1Sh0u/pGenerator to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/M1Sh0u/pGenerator/network" class="social-count">2</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/M1Sh0u" class="url fn" itemprop="url" rel="author"><span itemprop="title">M1Sh0u</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/M1Sh0u/pGenerator" class="js-current-repository js-repo-home-link">pGenerator</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/M1Sh0u/pGenerator" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /M1Sh0u/pGenerator">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/M1Sh0u/pGenerator/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /M1Sh0u/pGenerator/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/M1Sh0u/pGenerator/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /M1Sh0u/pGenerator/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/M1Sh0u/pGenerator/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /M1Sh0u/pGenerator/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/M1Sh0u/pGenerator/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /M1Sh0u/pGenerator/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/M1Sh0u/pGenerator/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /M1Sh0u/pGenerator/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/M1Sh0u/pGenerator/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /M1Sh0u/pGenerator/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/M1Sh0u/pGenerator.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/M1Sh0u/pGenerator.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:M1Sh0u/pGenerator.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:M1Sh0u/pGenerator.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/M1Sh0u/pGenerator" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/M1Sh0u/pGenerator" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/M1Sh0u/pGenerator" class="minibutton sidebar-button" title="Save M1Sh0u/pGenerator to your computer and use it in GitHub Desktop." aria-label="Save M1Sh0u/pGenerator to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/M1Sh0u/pGenerator/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download M1Sh0u/pGenerator as a zip file"
                   title="Download M1Sh0u/pGenerator as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/M1Sh0u/pGenerator/blob/f526641d69f6dc64a86a785f17eee44098837f4a/pGenerator.jquery.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:6da5fd7f795e50583d9a56b5aec1f5c2 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/M1Sh0u/pGenerator/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/M1Sh0u/pGenerator/blob/master/pGenerator.jquery.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/M1Sh0u/pGenerator/tree/1.0.2/pGenerator.jquery.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/M1Sh0u/pGenerator/tree/1.0.1/pGenerator.jquery.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/M1Sh0u/pGenerator/tree/1.0.0/pGenerator.jquery.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/M1Sh0u/pGenerator" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">pGenerator</span></a></span></span><span class="separator"> / </span><strong class="final-path">pGenerator.jquery.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="pGenerator.jquery.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Sandy Pleyte" class="main-avatar js-avatar" data-user="363211" height="24" src="https://avatars2.githubusercontent.com/u/363211?s=140" width="24" />
      <span class="author"><a href="/sndpl" rel="contributor">sndpl</a></span>
      <time datetime="2013-09-10T13:42:37+02:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2013-09-10 13:42:37 +0200">September 10, 2013</time>
      <div class="commit-title">
          <a href="/M1Sh0u/pGenerator/commit/169f7180c60d695ccf4240f219ae60adde990d02" class="message" data-pjax="true" title="Fixed missing (">Fixed missing (</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="sndpl" href="/M1Sh0u/pGenerator/commits/master/pGenerator.jquery.js?author=sndpl"><img alt="Sandy Pleyte" class=" js-avatar" data-user="363211" height="20" src="https://avatars2.githubusercontent.com/u/363211?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="M1Sh0u" href="/M1Sh0u/pGenerator/commits/master/pGenerator.jquery.js?author=M1Sh0u"><img alt="M1Sh0u" class=" js-avatar" data-user="3706005" height="20" src="https://avatars3.githubusercontent.com/u/3706005?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Sandy Pleyte" class=" js-avatar" data-user="363211" height="24" src="https://avatars2.githubusercontent.com/u/363211?s=140" width="24" />
            <a href="/sndpl">sndpl</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="M1Sh0u" class=" js-avatar" data-user="3706005" height="24" src="https://avatars3.githubusercontent.com/u/3706005?s=140" width="24" />
            <a href="/M1Sh0u">M1Sh0u</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>147 lines (115 sloc)</span>
          <span class="meta-divider"></span>
        <span>4.111 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/M1Sh0u/pGenerator?branch=master&amp;filepath=pGenerator.jquery.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/M1Sh0u/pGenerator/edit/master/pGenerator.jquery.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/M1Sh0u/pGenerator/raw/master/pGenerator.jquery.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/M1Sh0u/pGenerator/blame/master/pGenerator.jquery.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/M1Sh0u/pGenerator/commits/master/pGenerator.jquery.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/M1Sh0u/pGenerator/delete/master/pGenerator.jquery.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * pGenerator jQuery Plugin v1.0.0</span></div><div class='line' id='LC3'><span class="cm"> * http://accountspassword.com/password-generator-jquery-plugin</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Created by AccountsPassword.com</span></div><div class='line' id='LC6'><span class="cm"> * Released under the GPL General Public License (Feel free to copy, modify or redistribute this plugin.)</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC11'>&nbsp;&nbsp;	<span class="kd">var</span> <span class="nx">numbers_array</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(),</span></div><div class='line' id='LC12'>		<span class="nx">upper_letters_array</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(),</span></div><div class='line' id='LC13'>		<span class="nx">lower_letters_array</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(),</span></div><div class='line' id='LC14'>		<span class="nx">special_chars_array</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(),</span></div><div class='line' id='LC15'>		<span class="nx">$pGeneratorElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC16'>	<span class="kd">var</span> <span class="nx">methods</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC17'>		<span class="nx">init</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callbacks</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>			<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC20'>				<span class="s1">&#39;bind&#39;</span><span class="o">:</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span></div><div class='line' id='LC21'>				<span class="s1">&#39;passwordElement&#39;</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC22'>				<span class="s1">&#39;displayElement&#39;</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC23'>				<span class="s1">&#39;passwordLength&#39;</span><span class="o">:</span> <span class="mi">16</span><span class="p">,</span></div><div class='line' id='LC24'>				<span class="s1">&#39;uppercase&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC25'>				<span class="s1">&#39;lowercase&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC26'>				<span class="s1">&#39;numbers&#39;</span><span class="o">:</span>   <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC27'>				<span class="s1">&#39;specialChars&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC28'>				<span class="s1">&#39;onPasswordGenerated&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">generatedPassword</span><span class="p">)</span> <span class="p">{</span> <span class="p">}</span></div><div class='line' id='LC29'>			<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>			<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">48</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">58</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC32'>				<span class="nx">numbers_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC33'>			<span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">65</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">91</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC34'>				<span class="nx">upper_letters_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC35'>			<span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">97</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">123</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC36'>				<span class="nx">lower_letters_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC37'>			<span class="nx">special_chars_array</span> <span class="o">=</span> <span class="p">[</span><span class="mi">33</span><span class="p">,</span><span class="mi">35</span><span class="p">,</span><span class="mi">64</span><span class="p">,</span><span class="mi">36</span><span class="p">,</span><span class="mi">38</span><span class="p">,</span><span class="mi">42</span><span class="p">,</span><span class="mi">91</span><span class="p">,</span><span class="mi">93</span><span class="p">,</span><span class="mi">123</span><span class="p">,</span><span class="mi">125</span><span class="p">,</span><span class="mi">92</span><span class="p">,</span><span class="mi">47</span><span class="p">,</span><span class="mi">63</span><span class="p">,</span><span class="mi">58</span><span class="p">,</span><span class="mi">59</span><span class="p">,</span><span class="mi">95</span><span class="p">,</span><span class="mi">45</span><span class="p">,</span><span class="mi">53</span><span class="p">];</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>				<span class="nx">$pGeneratorElement</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>				<span class="nx">$pGeneratorElement</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">bind</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC44'>					<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC45'>					<span class="nx">methods</span><span class="p">.</span><span class="nx">generatePassword</span><span class="p">(</span><span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC46'>				<span class="p">});</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>			<span class="p">});</span></div><div class='line' id='LC49'>		<span class="p">},</span></div><div class='line' id='LC50'>		<span class="nx">generatePassword</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>			<span class="kd">var</span> <span class="nx">password</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(),</span></div><div class='line' id='LC53'>				<span class="nx">selOptions</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">uppercase</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">lowercase</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">numbers</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">specialChars</span><span class="p">,</span></div><div class='line' id='LC54'>				<span class="nx">selected</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC55'>				<span class="nx">no_lower_letters</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>			<span class="kd">var</span> <span class="nx">optionLength</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">passwordLength</span> <span class="o">/</span> <span class="nx">selOptions</span><span class="p">);</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">uppercase</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>				<span class="c1">// uppercase letters</span></div><div class='line' id='LC61'>				<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">optionLength</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>					<span class="nx">password</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">upper_letters_array</span><span class="p">[</span><span class="nx">randomFromInterval</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">upper_letters_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC63'>				<span class="p">}</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>				<span class="nx">no_lower_letters</span> <span class="o">=</span> <span class="nx">no_lower_letters</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">upper_letters_array</span><span class="p">);</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>				<span class="nx">selected</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC68'>			<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>			<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">numbers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>				<span class="c1">// numbers letters</span></div><div class='line' id='LC72'>				<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">optionLength</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC73'>					<span class="nx">password</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">numbers_array</span><span class="p">[</span><span class="nx">randomFromInterval</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">numbers_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC74'>				<span class="p">}</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>				<span class="nx">no_lower_letters</span> <span class="o">=</span> <span class="nx">no_lower_letters</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">numbers_array</span><span class="p">);</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>				<span class="nx">selected</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC79'>			<span class="p">}</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>			<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">specialChars</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>				<span class="c1">// numbers letters</span></div><div class='line' id='LC83'>				<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">optionLength</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC84'>					<span class="nx">password</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">special_chars_array</span><span class="p">[</span><span class="nx">randomFromInterval</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">special_chars_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC85'>				<span class="p">}</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>				<span class="nx">no_lower_letters</span> <span class="o">=</span> <span class="nx">no_lower_letters</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">special_chars_array</span><span class="p">);</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>				<span class="nx">selected</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC90'>			<span class="p">}</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>			<span class="kd">var</span> <span class="nx">remained</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">passwordLength</span> <span class="o">-</span> <span class="p">(</span><span class="nx">selected</span> <span class="o">*</span> <span class="nx">optionLength</span><span class="p">);</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>			<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">lowercase</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>				<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">remained</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'>					<span class="nx">password</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">lower_letters_array</span><span class="p">[</span><span class="nx">randomFromInterval</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">lower_letters_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC98'>				<span class="p">}</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>				<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">remained</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>					<span class="nx">password</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">no_lower_letters</span><span class="p">[</span><span class="nx">randomFromInterval</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">no_lower_letters</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC104'>				<span class="p">}</span></div><div class='line' id='LC105'>			<span class="p">}</span></div><div class='line' id='LC106'>			<span class="nx">password</span> <span class="o">=</span> <span class="nx">shuffle</span><span class="p">(</span><span class="nx">password</span><span class="p">);</span></div><div class='line' id='LC107'>			<span class="nx">passwordString</span> <span class="o">=</span> <span class="nx">password</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>			<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">passwordElement</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>				<span class="nx">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">passwordElement</span><span class="p">).</span><span class="nx">val</span><span class="p">(</span><span class="nx">passwordString</span><span class="p">);</span></div><div class='line' id='LC111'>			<span class="p">}</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>			<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">displayElement</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">displayElement</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s2">&quot;input&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">displayElement</span><span class="p">).</span><span class="nx">val</span><span class="p">(</span><span class="nx">passwordString</span><span class="p">);</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">displayElement</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="nx">passwordString</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'>			<span class="p">}</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>			<span class="nx">settings</span><span class="p">.</span><span class="nx">onPasswordGenerated</span><span class="p">(</span><span class="nx">passwordString</span><span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>		<span class="p">}</span></div><div class='line' id='LC124'>&nbsp;&nbsp;	<span class="p">};</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>	<span class="kd">function</span> <span class="nx">shuffle</span><span class="p">(</span><span class="nx">o</span><span class="p">){</span> <span class="c1">//v1.0</span></div><div class='line' id='LC127'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">j</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="nx">i</span><span class="p">),</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">o</span><span class="p">[</span><span class="o">--</span><span class="nx">i</span><span class="p">],</span> <span class="nx">o</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">o</span><span class="p">[</span><span class="nx">j</span><span class="p">],</span> <span class="nx">o</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">x</span><span class="p">);</span></div><div class='line' id='LC128'>		<span class="k">return</span> <span class="nx">o</span><span class="p">;</span></div><div class='line' id='LC129'>	<span class="p">};</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>	<span class="kd">function</span> <span class="nx">randomFromInterval</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">)</span></div><div class='line' id='LC132'>	<span class="p">{</span></div><div class='line' id='LC133'>		<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="p">(</span><span class="nx">to</span><span class="o">-</span><span class="nx">from</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">from</span><span class="p">);</span></div><div class='line' id='LC134'>	<span class="p">};</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">pGenerator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">if</span> <span class="p">(</span> <span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">return</span> <span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span> <span class="p">));</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="o">!</span> <span class="nx">method</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">return</span> <span class="nx">methods</span><span class="p">.</span><span class="nx">init</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="s1">&#39;Method &#39;</span> <span class="o">+</span>  <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39; does not exist on jQuery.pGenerator&#39;</span> <span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="p">}</span></div><div class='line' id='LC144'>&nbsp;&nbsp;	<span class="p">};</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04620s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5bef6dacd990ce272ec009917ceea0b9d96f84b7.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-11f199be4c7be7bc07aab38629dccbbacc2dc3b1.js" type="text/javascript"></script>
      
      
  </body>
</html>

