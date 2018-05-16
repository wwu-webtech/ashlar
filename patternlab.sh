#!/bin/bash
lando composer create-project -n pattern-lab/edition-twig-standard pattern-lab
cd pattern-lab
lando composer require aleksip/plugin-data-transform
lando php core/console -c --set sourceDir=../build
lando php core/console -c --set twigAutoescape=0
