# WWU Living Style Guide
This is all a work in progress. If you figure out a better way to do something/explain something, please do not hesitate edit this guide.

## Overview
We are developing a living style guide for Western's campus sites. Because we are planning on transitioning into Drupal 8 soon, this seems like the perfect opportunity to use some of the newer tools available for both making development within Drupal 8 easier, as well as tools created specifically for the purpose of making living style guides.

The general idea is that we will be developing a component based Drupal 8 theme that will serve both as a public facing style guide as well as a base theme for future sites.

Some tools that we are currently utilizing for this process are Lando, Pattern Lab, and Shila.

### Lando
[Lando](https://docs.devwithlando.io/) is a local development environment build on Docker. It allows you to very quickly spin up Drupal 8 project without needing to have any sort of virtual machines running. Nifty!

### Pattern Lab
[Pattern Lab](http://patternlab.io/) is a few things: In one sense, it is a design system based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) philosophy. It is also a static site generator, specifically for a style guide.

The design system is, broadly, built around the idea of starting with small components and putting them together to create larger components. It uses a vocabulary of atoms -> molecules -> organisms -> templates -> pages. To read more about Atomic Design principles, I recommend perusing Brad Frost's [online book about the topic](http://atomicdesign.bradfrost.com/).

The static site that Pattern Lab generates isn't meant to be public facing, but it is very useful for developing the different levels of the atomic design. The static site itself makes it easy to navigate through different levels of the design, and it has some built in responsive design toggles. Pattern Lab has a number of different editions. One set is run on Node, and one set is PHP based. The PHP based editions have both Mustache templating and Twig templating versions. We are most interested in the Twig templating version. There is a Drupal edition, but it's still under development and not what I would currently recommend using.

### Shila & Ashlar
[Shila](https://github.com/aleksip/shila-drupal-theme) is a Drupal 8 starter theme created by [Alek Sip](https://www.aleksip.net/projects), which ties together Pattern Lab with a functional Drupal 8 theme. It uses a plugin by the same author called [Data Transform Plugin](https://github.com/aleksip/plugin-data-transform) that is very useful for keeping patterns consistent between Pattern Lab and Drupal while allowing for unique data at each level. Our Drupal 8 theme, Ashlar, was originally built from Shila.

### Developing with Pattern Lab and Ashlar
The general idea is that you have Pattern Lab installed *inside* of the Ashlar Theme. This Pattern Lab installation doesn't have any template files of it's own, though. Instead it goes down one folder and grabs all of its templates and styles from the theme to generate things. That way, as you are developing the theme you can generate that handy Pattern Lab static site (which is great for the design development process) while at the same time you're building out the theme for Drupal itself.

This is great because:

* You don't need any content on the Drupal site as you're developing styles
* But, you *can* check the styles as they'll look on the Drupal site if you DO have content
* You don't need to clear Drupal caches, you can just look at them on the static site (quick!)

## Getting Started

### I. Lando
Download and install version v3.0.0-beta.39 of lando (or the latest **stable** version. Be sure to read the release notes, some versions contain hot fixes that will cause problems in this installation process) [Lando](https://github.com/lando/lando/releases).

### II. Drupal
Download the latest stable version of [Drupal 8](https://www.drupal.org/download). Unzip the archive and use the terminal to navigate into the folder `drupal-8.x.x`.

In the terminal, run:

    lando init

  * Select drupal8 from the recipe list
  * Webroot should be this folder `.`
  * You can call the app whatever you want (Ex: Living Style Guide)

Open the .lando.yml file and replace the text with this lando profile:

```yaml
name: wwu-style-guide
recipe: drupal8

config:
  webroot: .
  drush: global:8.1.16

services:
  database:
    type: mysql:5.7
  node:
    type: node:8
    globals:
      gulp-cli: "latest"

tooling:
  npm:
    service: node
  node:
    service: node
  gulp:
    service: node
```

To spin up a local server and install required services run `lando start`.

Open one of the URLs output to the screen in a browser (something like `http://localhost:32787` or `http://my-app-name.lndo.site`) and follow the on screen instructions to install Drupal.

  * When you get to the database screen you can get the username, password, and database name (probably all `drupal8`) by running

        lando info

  * Under advanced options, the host should be changed to whatever is listed under `internal_connection` (likely `database`)
  * None of the other installation options really matter at this point so just put anything for site name, username, etc

### III. Ashlar
Download these modules:

  * [Component Libraries](https://www.drupal.org/project/components)
  * [UI Patterns](https://www.drupal.org/project/ui_patterns)

**The theme will not work unless Component Libraries is installed and enabled.** UI Paterns is Optional.

You can install the required Component Libraries module via composer in the root of your `drupal-8.x.x` directory:

    lando composer require drupal/components

Enable it through the Drupal interface (under the **Extend** tab) or with drush.

    lando composer require drush/drush
    lando drush en components

UI Patterns can be installed with drush:

    lando drush dl ui_patterns
    lando drush en ui_patterns

Clone Ashlar into the `drupal-8.x.x/themes` folder:

    git clone https://bitbucket.org/wwuweb/ashlar

Enable the theme in Drupal under the **Appearance** tab and set it as default. Navigate into `drupal-8.x.x/themes/ashlar` and run:

    lando npm install
    lando gulp

At this point you should be able to navigate to the site and see some very basic styles.

### IV. Pattern Lab
Within `drupal-8.x.x/themes/ashlar` run (do NOT prefix with `lando`):

    ./patternlab-install.sh

Once the install script has completed, run:

    ./patternlab-provision.sh

Compile the theme static assets to the Pattern Lab source directory:

    lando gulp patternlab

To build the pattern lab site for the first time, run:

    lando php pattern-lab/core/console --generate

To serve the Pattern Lab files locally, you'll need to run PHP directly on your machine (do NOT prefix with `lando`; it won't work if you try to do it within lando):

    php pattern-lab/core/console --server

Navigate to `http://localhost:8080` in your browser to view the Pattern Lab standalone site. You can leave the server running by opening a new terminal window and running this command, which will allow you to continue working with other commands without needing to repeatedly restart the Pattern Lab server.

#### Installing standalone Pattern Lab
One thing I found helpful was to install a pre-made Pattern Lab twig edition separately from the whole Drupal installation, to have a different and more complete template to refer to. The easiest way to do this is to download one from [this page](https://github.com/pattern-lab/edition-php-twig-standard/releases)

You can view the demo page by running the following within the `twig-standard` folder

    php core/console --generate
    php core/console --server --port 8000

(note: I specified a port here so that both instances of pattern lab can be served locally at the same time, the default port is 8080)

### V. Editing the Theme
Changes to the theme will mostly happen in files contained in `ashlar/source/_patterns`. The `_patterns` folder is organized into the atoms -> molecules -> organisms -> templates -> pages scheme. Sub folders dictate how the static site will nest different components.

#### Drupal Site
After making changes to static assets (CSS and JS), recompile the theme:

    lando gulp

To see the changes in Drupal, you'll probably need to clear the cache. You can do this within the Drupal interface or run `lando drush cr`.

#### Pattern Lab
To see the changes in Pattern Lab, you'll need to first compile the static assets so that they are available to Pattern Lab:

    lando gulp patternlab

Then, regenerate the static site:

    php pattern-lab/core/console --generate
