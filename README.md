# Ashlar and the WWU Design System
## Overview
We are developing a design system for Western's campus sites. Because we are planning on transitioning into Drupal 8, this is the perfect opportunity to use some of the newer tools available for both making development within Drupal 8 easier, as well as tools created specifically for the purpose of making design systems and living style guides.

The general idea is that we will be developing a component based Drupal 8 theme that will serve both as a public facing style guide as well as a base theme for future Drupal and static sites.

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

## Getting Started

### I. Drupal
If you are installing Ashlar & Pattern Lab as part of developing a Drupal 8 site, follow the instructions for our [composer installation](https://bitbucket.org/wwuweb/wwu_drupal8_composer). Then, skip to step IV. Pattern Lab below.

If you are not planning on developing a Drupal 8 site, then proceed with the instructions below.

### II. Ashlar
First, clone this repository to your local machine.

    git clone git@bitbucket.org:wwuweb/ashlar.git

### III. Lando
Download and install the latest **stable** version of [Lando](https://github.com/lando/lando/releases).

In the terminal, navigate into the ashlar director `cd ashlar`, then run `lando init`

  * Select custom from the recipe list
  * Don't enter anything for Pantheon machine token (just hit enter)
  * Webroot should be this folder `.`
  * You can call the app whatever you want

Open the .lando.yml file in a text editor and replace the text with this lando profile:

```yaml
name: your-app-name
recipe: custom

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

Then run the following commmands:

    lando start
    lando npm install
    lando gulp

These steps will each take a few moments to complete. `lando start` initiates the lando container. `lando npm install` installs npm locally within the ashlar folder. `lando gulp` runs various tasks, including compiling the theme files.

### IV. Pattern Lab   
Within `ashlar` run (do NOT prefix with `lando`):

    ./patternlab-install.sh

Once the install script has completed, run:

    ./patternlab-provision.sh

These commands install and provision pattern lab inside of the Ashlar folder.

#### Running Patternlab
Compile the theme static assets to the Pattern Lab source directory:

    lando gulp patternlab

To build the pattern lab site run:

    lando php pattern-lab/core/console --generate

To serve the Pattern Lab files locally, you'll need to run PHP directly on your machine (do NOT prefix with `lando`; it won't work if you try to do it within lando):

    php pattern-lab/core/console --server

Navigate to `http://localhost:8080` in your browser to view the Pattern Lab standalone site. You can leave the server running by opening a new terminal window and running this command, which will allow you to continue working with other commands without needing to repeatedly restart the Pattern Lab server.

#### Developing Patterns
Changes to the theme will mostly happen in files contained in `ashlar/source/_patterns`. The `_patterns` folder is organized into the atoms -> molecules -> organisms -> templates -> pages scheme. Sub folders dictate how the static site will nest different components.

After making changes to twig, sass, and yaml files, you can review you changes in patternlab by running the three above commands in sequence:

    lando gulp patternlab
    lando php pattern-lab/core/console --generate
    php pattern-lab/core/console --server

It can be helpful to put these commands into a small bash script to speed up your workflow.

#### Compiling changes for an external stylesheet
Running the following compile the ashlar `\_pattern files` into the `build` directory.

    lando gulp

If you are developing a Drupal 8 site, you will need to run this command along with `lando drush cr` to see your changes reflected in your local Drupal site.

Eventually we would like to have these compiled css files hosted somewhere that can be referenced by campus sites. In the interim, any sites that are built to utilize ashlar should reference the `components.css` stylesheet.
