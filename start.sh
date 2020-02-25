echo "What is the directory that your repository is in?"
read dir

"#!/bin/bash
declare -x SSH_AUTH_SOCK=$(find /var/folders/*/*/*/*/agent.* -type s | head -1)
cd $dir
date >> garbage
git add garbage
git commit garbage -m 'this is automated'
git push origin master
echo 'done'" > recruitBamboozletest.sh

$currentDir = pwd

crontab -l > chron.txt
"* * * * * /bin/bash $currentDir/recruitBamboozle.sh" >> chron.txt
cron chron.txt