#!/bin/bash
lando composer create-project -n pattern-lab/edition-twig-standard pattern-lab
cd pattern-lab
lando composer require aleksip/plugin-data-transform
