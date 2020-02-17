sudo crontab -l > chron.txt
echo "*/1 * * * * /bin/bash /Users/Specter/Desktop/Projects/codeProjects/personalProjects/recruit-bamboozler/recruitBamboozle.sh" >> chron.txt
sudo cron ./chron.txt