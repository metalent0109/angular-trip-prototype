include ./.env

push:
	git config --global user.name $(GIT_NAME)
	git config --global user.email $(GIT_EMAIL)
	git add .
	git commit -m "work in progress [`date +'%Y-%m-%d'`]"
	git push
