if [ -z "$1" ]
then
printf "\nERROR:\nYOU MUST SUPPLY GIT COMMIT MESSAGE\n"
else 
gulp
commit_message="$1"
git add . -A
git commit -m "$commit_message"
git push origin master
fi