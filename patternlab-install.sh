#!/bin/bash

# install
lando composer create-project -n pattern-lab/edition-twig-standard pattern-lab
cd pattern-lab
lando composer require aleksip/plugin-data-transform

# provision
lando php pattern-lab/core/console -c --set sourceDir=../source
lando php pattern-lab/core/console -c --set twigAutoescape=0
