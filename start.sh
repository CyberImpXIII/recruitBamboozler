crontab -l > chron.txt
echo "*/1 * * * * /bin/bash recruitBamboozle.sh" >> chron.txt # Add a new job to the file
cron chron.txt