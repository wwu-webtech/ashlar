#!/bin/bash
lando php pattern-lab/core/console -c --set sourceDir=../source
lando php pattern-lab/core/console -c --set twigAutoescape=0
