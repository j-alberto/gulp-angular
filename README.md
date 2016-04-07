# install nodejs

## install Node Version Manager (we want the latest nodejs version, not in linux repos)
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
	source ~/.nvm/nvm.sh     (may want to add this to your .bashrc)
	*NOTE: update of nvm is though github repository update

## install node
	nvm install 4.0 (or your preferred version of nodejs)
	nvm use 4.0

## install npm
	sudo apt-get install npm
	sudo npm install npm -g (we update to the latest)



