# Proof of git concept for WordPress themes

## Deployment process

1. Clone git repo
2. run `npm install --global gulp-cli` to install the Gulp CLI
3. run `npm install` in project folder
4. Make changes to the syles in the src folder (currently only has support for css files located in the src/css folder)
5. Open Bash terminal (git bash) and run `bash run.text s"<Your_commit_message>"` in the project folder (currently only have a bash script, could write a batch file later for command prompt support)
6. In a couple of seconds check the changes on the [Wordpress install](http://virtualtest.wpengine.com/?page_id=4)

## How it works

* run.txt file runs the gulp command which runs the gulpfile.js file.
* the gulpfile has the build process which currently just concatinates the css files and creates the build css file.  This can be extended to minify files, add support for js or php files and other things
* The run.txt then finishes by using the commit message you supplied to create a git commit and pushing the new commit to github
* This repo is set up with a webhook so when changes are pushed to the repo it sends a notification to [DeployHq](https://www.deployhq.com/)
* [DeployHq](https://www.deployhq.com/) is an online service which sends files from your git repo to another server using sftp whenever it recieves the webhook notification (I currently am using a demo version which is free for the week, the pricing can be found [here](https://www.deployhq.com/pricing))
* Once the files have been transfered you should see the changes to the theme.  (currently only the style.css file is being updated since that is the only file that is built)