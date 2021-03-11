# Ashlar and the WWU Design System
## Overview
We are developing a design system for Western's campus sites. Because we are planning on transitioning into Drupal 8, this is the perfect opportunity to use some of the newer tools available for both making development within Drupal 8 easier, as well as tools created specifically for the purpose of making design systems and living style guides.

We have developed a component based Drupal 8 theme that will serve both as a public facing style guide as well as a base theme for future Drupal and static sites.

### Lando
[Lando](https://docs.devwithlando.io/) is a local development environment build on Docker. It allows you to very quickly spin up Drupal 8 project without needing to have any sort of virtual machines running. Nifty!

### Pattern Lab
[Pattern Lab](http://patternlab.io/) is a few things: In one sense, it is a design system based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) philosophy. It is also a static site generator, specifically for a style guide.

The design system is, broadly, built around the idea of starting with small components and putting them together to create larger components. It uses a vocabulary of atoms -> molecules -> organisms -> templates -> pages. To read more about Atomic Design principles, I recommend perusing Brad Frost's [online book about the topic](http://atomicdesign.bradfrost.com/).

The static site that Pattern Lab generates isn't meant to be public facing, but it is very useful for developing the different levels of the atomic design. The static site itself makes it easy to navigate through different levels of the design, and it has some built in responsive design toggles. Pattern Lab has a number of different editions. One set is run on Node, and one set is PHP based. The PHP based editions have both Mustache templating and Twig templating versions. We are most interested in the Twig templating version. There is a Drupal edition, but it's still under development and not what I would currently recommend using.

### Shila & Ashlar
[Shila](https://github.com/aleksip/shila-drupal-theme) is a Drupal 8 starter theme created by [Alek Sip](https://www.aleksip.net/projects), which ties together Pattern Lab with a functional Drupal 8 theme. It uses a plugin by the same author called [Data Transform Plugin](https://github.com/aleksip/plugin-data-transform) that is very useful for keeping patterns consistent between Pattern Lab and Drupal while allowing for unique data at each level. Our Drupal 8 theme, Ashlar, was originally built from Shila.

### Developing with Pattern Lab and Ashlar
The general idea is that you have Pattern Lab installed *inside* of the Ashlar Theme. This Pattern Lab installation doesn't have any template files of it's own. Instead it goes down one folder and grabs all of its templates and styles from the theme to generate patterns. This theme has been developed for Drupal 8, so many of the twig templates use the structure of a Drupal 8 site. However, the stylesheets and templates that are output by pattern lab are also useful for building static sites with these components.

### Ashlar Accessibility
[Western is committed to creating an inclusive web](https://www.wwu.edu/commitment-accessibility) for its community members, including students, staff, faculty, and guests. Because Ashlar reflects the current standards for branding and web development, we take extra care in making sure the end result is accessible.

This means adding accessibility checks to changes in the theme before those changes get submitted to the repository. These checks allow developers to address common issues before they are introduced into the live code, and prevents barriers that come from those issues.

For additional instructions on setting up accessibility checks in Pattern Lab, see "Accessibility Testing in Ashlar" under the Pattern Lab section.

## Getting Started
Download and install the latest **stable** [version of Lando](https://github.com/lando/lando/releases). The latest version to be tested with these instructions is [v3.0.21](https://github.com/lando/lando/releases/tag/v3.0.21)

You will also need to have [PHP 7](https://www.php.net/) installed on your machine in order to serve Pattern Lab, and be able to run [Git](https://git-scm.com/) from the Terminal or Command Line.

### IA. Lando container with working Drupal 8 site
Follow the instructions on the [composer installation profile](https://bitbucket.org/wwuweb/wwu_drupal). Once you get to step **IV. Compile Ashlar** on that page, skip that step and return here and proceed with Step **II. Ashlar** below.

> Don't forget: If using Drupal, you must remove Clean URLs after running `lando start` but before installing Drupal in the browser.


### IB. Lando container without a working Drupal 8 site
Even if you aren't planning on developing for a Drupal 8 site specifically (and instead are planning on developing in Pattern Lab) the easiest way to get a Lando container running is to use the [composer installation profile](https://bitbucket.org/wwuweb/wwu_drupal). The difference is that you don't need to complete the Drupal installation.

To get started, run the following commands:

    git clone https://bitbucket.org/wwuweb/wwu_drupal.git
    cd wwu_drupal
    lando start

This will create a workspace with the default name "my-new-site". If you would like to have multiple Lando containers running simultaneously, or would like to control the URL of your lando instance, edit the first line of the .lando.yml file with a different site name.

Lando will automatically run composer install, so just sit back and wait for the install to complete. It should take a minute or two.

### II. Ashlar

#### Installation
The composer installation automatically fetches a copy of Ashlar. However, this copy may not be the most recent version. Additionally, in order to contribute to the theme you'll need to be working in an active git repository.

To get started with this, use the following commands (starting in the `wwu_drupal` directory from above):

    # Delete the existing ashlar directory
    cd web/themes/contrib/
    rm -rf ashlar

    # Clone this repo in its place
    git clone https://bitbucket.org/wwuweb/ashlar.git

    # Install gulp task runner  
    cd ashlar
    lando npm install gulp

#### Development
When developing in Ashlar with a Drupal 8 site directly, the only thing you'll need to do is run gulp and clear the caches on your Drupal site to see the changes. You can run the following commands from anywhere in your Lando instance (i.e. in any folder that is within the `wwu_drupal` directory) after you have made changes to files in the `ashlar` directory.

    lando gulp
    lando drush cr

### IV. Pattern Lab

#### Installation
While still in the `ashlar` folder, install and provision pattern lab with these scripts:

    ./patternlab-install.sh
    ./patternlab-provision.sh

#### Development
The commands you will need to run, from the `ashlar` folder, to get a pattern lab site generated and served locally are:

    lando gulp patternlab
    php pattern-lab/core/console --generate
    php pattern-lab/core/console --server --port 8000

Run these commands each time you make changes, and navigate to http://localhost:8000 in your browser.

It can be helpful to put these commands in a bash script (or two, with the server running constantly in a separate terminal window) to speed up workflow.

Note: you can change the `--port 8000` to a different number if needed. Pattern Lab defaults to port 8080, but this often conflicts with other local server instances.

Changing the port does mean that Pa11y accessibility checks in Ashlar will not work by default, since it refers to localhost:8000. If you do need to change the port, you can change the URLs in the .pa11yci to your chosen port so Pa11y can find the right URL.

#### Accessibility Testing in Ashlar

Running "lando npm install" in Pattern Lab will download Pa11y CI, an automated accessibiltiy engine that can check for code issues in the Pattern Lab components, typically at the following URL pattern:

    http://localhost:8000/patterns/pattern-name/index.html

This command will run if you are contributing to Ashlar development, when pushing changes to this repository. If all checks pass, the changes will finally get push into a new branch or existing branch.

#### Possible Accessibility Testing Errors

**"Failed to run"/"ERR_CONNECTION_REFUSED"**

This error usually means the Pattern Lab server shut off, and the crawler can't access the localhost URLs. Check the Pattern Lab server is on by running `php pattern-lab/core/console --server --port 8000`.  

**"Chromium isn’t installed" Error**

If you get a Pa11y error when pushing changes that says “Chromium isn’t installed,” it’s probably because lando npm install installs Chromium for the lando container which is linux. We haven’t found a way for Lando to talk to Chromium yet, so the patch for this error is to go into /ashlar/node_modules/puppeteer and run npm install. It should then install chromium for your OS and run pa11y-ci.

If pa11y-ci is working, it will run through the commands listed in the husky pre-push hook.

### V. Working with Patterns

#### SASS/CSS and JavaScript
Changes to the theme will mostly happen in files contained in `ashlar/source/_patterns`. The `_patterns` folder is organized into the atoms -> molecules -> organisms -> templates -> pages scheme. Sub folders dictate how the static site will nest different components.

#### Templates
There are template files in two places. Most templates are also found in the `_patterns` folder. These templates are used by Drupal 8 and are also generated in the Pattern Lab instance and can be useful for other purposes.

The files in the `templates` folder in the base `ashlar` directory are specific to Drupal 8, and do not appear in Pattern Lab.

Drupal 8 [loads templates based on naming conventions](https://www.drupal.org/docs/8/theming/twig/twig-template-naming-conventions). The Component Libraries module allows Drupal to look in the `_patterns` folder for template files, and it will look here first. If there are templates in the `_patterns` folder that match the name in the base `templates` folder, it will prefer the templates in the `_patterns` folder. If you create a template in the `templates` folder, and Drupal doesn't load it, check in the `_patterns` to see if a file there is overriding your template.

#### Compiling
Once the `lando gulp` command is run, the sass files for these patterns are all compiled into a single `components.css` stylesheet in the `buid/css` folder. JavaScript files are wrapped in Drupal friendly containers and are put into the `build/js` folder.

#### Drupal 7
The [Drupal 7 Version of Ashlar](https://bitbucket.org/wwuweb/ashlar_d7/src) contains the `build/` and `dist/` folders from this insstance of Ashlar, updated regularly by automated scripts. It also contains a page.tpl.php file that is generated by patternlab.
