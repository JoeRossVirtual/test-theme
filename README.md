# Proof of git concept for WordPress themes

## First Time Installation Proccess 

1. Clone git repo
2. run `npm install --global gulp-cli` to install the Gulp CLI
3. run `npm install` in project folder

## Deployment process


1. Make changes to the syles in the src folder (currently only has support for css files located in the src/css folder)
1. If you are using a Bash Terminal
    * Run `bash build.sh "<Your_commit_message>"` in the project folder
3. If you are using Command Prompt
    * Run `build "<Your_commit_message>"`
3. In a couple of seconds check the changes on the [Wordpress install](http://virtualtest.wpengine.com/?page_id=4)

## How it works

* build scripts file run the gulp command which runs the gulpfile.js file.
* the gulpfile has the build process which currently builds the theme by copying the php and js files, and concatinating the css files.
* The build scripts then finish by using the commit message you supplied to create a git commit and pushing the new commit to github
* This repo is set up with a webhook so when changes are pushed to the repo it sends a notification to [DeployHq](https://www.deployhq.com/)
* [DeployHq](https://www.deployhq.com/) is an online service which sends files from your git repo to another server using sftp whenever it recieves the webhook notification (I currently am using a demo version which is free for the week, the pricing can be found [here](https://www.deployhq.com/pricing))
* Once the files have been transfered you should see the changes to the theme.  (currently only the style.css file is being updated since that is the only file that is built)