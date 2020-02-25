#!/bin/bash
declare -x SSH_AUTH_SOCK=$(find /var/folders/*/*/*/*/agent.* -user Jacob -type s | head -1)
cd /Users/Specter/Desktop/Projects/codeProjects/personalProjects/recruit-bamboozler
date >> garbage
# git remote set-url origin git@github.com:username/repo.git
git add garbage
git commit garbage -m 'this is automated'
git push origin master
echo 'done'