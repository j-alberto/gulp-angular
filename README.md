# Gulp Angular
Example of angular project. 

## Install nodejs
### Node Version Manager 
Assuming we are new to this, we install nvm in order to get nodejs, Linux repositories are usually outdated. We suppose you already have curl. Alternatively, you can simply download the script and execute
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
	source ~/.nvm/nvm.sh      (may want to add this to your .bashrc to enable nvm for new sessions)
nvm --version
```
*NOTE: update of nvm is trhough github repository update

### Nodejs
	nvm install 4.0 (or your preferred version of nodejs)
	nvm use 4.0
	node -v

### npm
Is already installed, but we want the latest version
	npm install npm -g
	npm -v

# Initialize the project:
## Init project in npm
	npm init	(Creates a package.json file, after answering a few questions)
	npm install gulp [-D|g] to insall gulp dependency in project folder or globally
	npm install -D gulp-sass gulp-jshint gulp-concat gulp-uglify gulp-rename gulp-clean gulp-sequence

	mkdir app
	mkdir app/css
	mkdir app/scss
	mkdir app/js
	mkdir app/fonts
	mkdir app/img

a new folder ``node_modules`` is created. Anyway, the gulpfile.js in the project already contains a started configuration. To verify, simply run ```gulp```, at the end should show something similar to this:
	Finished 'default' after 5.98 μs


## Install bower to manage dependencies
	npm install -g bower
	bower install angular bootstrap

A new folder `` bower_components`` is created