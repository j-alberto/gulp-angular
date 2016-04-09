# Gulp Angular
Example of angular project. 
## Content
+ [Install Environment](#install-environment)
+ [Initialize Project](#initialize-project)

# Install Environment
## Node Version Manager 
Assuming we are new to this, we install nvm in order to get nodejs, Linux repositories are usually outdated. We suppose you already have curl. Alternatively, you can simply download the script and execute
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
$ source ~/.nvm/nvm.sh 
$ nvm --version
```
**NOTE**: update of nvm is trhough github repository update

## Nodejs
```bash
$ nvm install 4.0 (or your preferred version of nodejs)
$ nvm use 4.0 #(may want to add this to your .bashrc to enable nvm for new sessions)
$ node -v
```
## npm
Is already installed, but we want the latest version
```bash
$ npm install npm -g
$ npm -v
```

# Initialize Project
## Init project in npm
```bash
$ npm init	(Creates a package.json file, after answering a few questions)
$ npm install gulp [-D|-g] (insall gulp dependency in local folder or globally)
$ npm install -D gulp-sass gulp-jshint gulp-concat gulp-uglify gulp-rename gulp-clean gulp-sequence
$ mkdir app app/css app/scss app/js app/fonts app/img
```

A new folder **node_modules** is created. Anyway, the **gulpfile.js** in the project already contains a started configuration. To verify, simply run **gulp** or **gulp default** to run the default task, at the end it should show something like this:
```bash
Finished 'default' after 5.98 μs
```


## Install bower to manage dependencies
	$ npm install -g bower
	$ bower install angular bootstrap

A new folder **bower_components** is created containing angular and bootstrap libraries, we can reference them within our **gulpfile.js**
