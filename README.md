# Ashlar

Ashlar is Western Washington University's Component Library and Drupal Theme. Originally the basis for the design system, it still serves as the foundation for the [Brand and Communication Guide](https://brand.wwu.edu/).

With the adoption of [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components/Using_custom_elements), Ashlar is now extensible beyond Drupal and can be used to theme standalone web applications, as well as serve as a theming layer to Western's Wordpress sites.

Ashlar utilizes [atomic design](https://atomicdesign.bradfrost.com/table-of-contents/) principles. Originally built in Pattern Lab, in 2023 Ashlar was transitioned to [Docusaurus](https://docusaurus.io/).

## Development in Ashlar

To get started developing, you will first need [Node.js](https://nodejs.org/en/download) installed on your local machine. If you are planning on developing and testing in Drupal, you will also need [Lando](https://github.com/lando/lando/releases). The latest version to be tested with these instructions is v3.0.21, but the latest stable version generally works. Installing Lando will also install Docker.


### 1. Developing in Drupal (optional)
If you are developing and testing in a local Drupal instance, first follow the instructions from the [wwu_drupal](https://bitbucket.org/wwuweb/wwu_drupal/src/11.x/) repository up until step **V. Compile and Enable Ashlar**

Then, navigate to the `/web/themes/contrib` folder, *delete* the ashlar folder, and from the `/web/themes/contrib` execute the commands in the following section.

Because we use [Lando](https://lando.dev/download) as our container to run Drupal, you will have a cleaner experience if you execute the commands in section 2 with a lando prefix. Eg, `lando npm install` and `lando gulp`

After completing section 2, you can navigate to the site in your browser and the theme should be compiled. After that, any changes you make should be compiled by running `lando gulp`, followed by a cache clear (either in the browser or via `lando drush cr`)

### 2. Download and compile Ashlar

Clone this repository:

`git clone https://bitbucket.org/wwuweb/ashlar.git`

Get into the `/ashlar` folder, install packages, and run gulp to compile the theme files using the following commands:

```
cd ashlar

npm install
npm install gulp-cli -g

gulp
```

If you are working in Drupal, be sure to clear the cache after compiling the theme.

### 3. Install and run Docusaurus

Most development can happen without needing to install a local Drupal instance. After setting up Ashlar as in section 2:

1. Navigate to the _docs directory `cd source/_docs`
2. Install packages `npm install` (note: this command does not run inside a lando container)
3. Run `npm run docusaurus start`

After a minute or two, a browser window should launch for you pointed at http://localhost:3000/ashlar/

### Ashlar's File Structure

Everything for basic component development exsists inside the _docs folder. Any given component is composed of up to four files:

* .md Markdown files are what are displayed in Docusaurus. These contain sample markup and documentation, both for developers and for end users
* .scss SASS files contain the styles for the component, written in SASS
* .js JavaScript files contain any interactive scripting, including the custom element scripting for components that use it
* .cy.js Cypress files contain end-to-end (E2E) tests for components to ensure functionality before going live. See "End-to-End Testing in Ashlar" for more info.

Not all components will have all three of these files. Every component should, at least, have a .scss file. Nearly all components will have .md files, with the rare exception of style overrides that exist specifically for Drupal. Only components that require interactive scripting will have .js files.

Any changes to the .md and .js files will reload in real time in the Docusaurus browser, though it is a good idea to refresh the browser after making changes to JavaScript files.

Changes made to .scss files, however, will not automatically display in the browser. These require npm install gulp to be run in base /ashlar folder, and the gulp command to be run for the changes to be compiled. After they are compiled, Docusaurus will automatically reload to display the changes.

Drupal specific twig templates live in the /ashlar/templates folder, and do not get displayed anywhere in Docusaurus.

#### _file.scss vs file.scss
Any SASS file that has an underscore prefix (_file.scss) will be compiled into ashlar-base.css, which is loaded on ALL pages using Ashlar. Most atoms and some molecules are loaded this way.

SASS files that do not have the prefix (file.scss) are instead compiled into their own modular CSS file inside the /build/css/components folder. These CSS files are NOT included by default. They need to be loaded with a <link> element, via a Drupal Library, or in docusaurus.config.js to work on pages where those components are used.

### End-to-End Testing in Ashlar

Ashlar uses the [Cypress testing framework](https://www.cypress.io/) for end-to-end (E2E) automated testing of patterns and components. These tests ensure the theme meets brand and accessibility guidelines, and the patterns continue working as expected.

We use Cypress in our continuous integration (CI) workflow when creating pull requests, and run the tests through Github or Bitbucket. You can also run tests locally before committing code, if you want to verify locally the tests will pass. Cypress can be run either through the app, or through the command line.

#### Using the Cypress app

1. Make sure Docusaurus is running locally (see step 3 "Install and run Docusaurus")
2. Navigate to the _docs directory `cd source/_docs`.
3. In a new terminal window, run `npx cypress open`.
4. When the Cypress app opens, choose "E2E testing" and the browser of your choice. Choose the "Start testing" button.
5. Under "Specs", you will see a list of pattern tests you can run.

#### Using the command line
In source/_docs, run the command `npx cypress run`. **You must be in the source/_docs folder**, since this is where the Cypress config file lives. By default the entire test suite will run&mdash;to run a single test, pass the relative file path in a '--spec' flag.

Example: `npx cypress run --spec "patterns/01-atoms/buttons/buttons.cy.js"`