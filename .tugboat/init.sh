curl -sL https://deb.nodesource.com/setup_8.x| sudo -E bash -
apt-get install -y nodejs
apt-get install -y npm
apt-get install -y gcc g++ make
apt-get install -y curl git unzip
apt-get install bsdtar -y
curl -sS https://getcomposer.org/installer -o composer-setup.php
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
composer create-project -n pattern-lab/edition-twig-standard pattern-lab
cd pattern-lab
composer require aleksip/plugin-data-transform "^1.3"
cd ../
php pattern-lab/core/console -c --set sourceDir=../source
php pattern-lab/core/console -c --set twigAutoescape=0
npm --prefix /var/lib/tugboat install gulp
npm install gulp-cli -g
gulp patternlab
php pattern-lab/core/console --generate
ln -snf "${TUGBOAT_ROOT}/pattern-lab/public" "${DOCROOT}"