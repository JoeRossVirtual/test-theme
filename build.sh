if [ $1 != ""]
then
gulp
commit_message="$1"
git add . -A
git commit -m "$commit_message"
git push origin master
else 
echo \n\nERROR:\nYOU MUST SUPPLY GIT COMMIT MESSAGE
fi