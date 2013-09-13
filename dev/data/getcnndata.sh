#!~/bin/bash

NOW=$(date +'%m%d.%I%p')
echo $NOW
cd /Users/bbreedlove/workspace/syria/dev/data/
/usr/local/bin/wget http://www.cnn.com/interactive/2013/09/politics/syria-congress-vote-count/js/senate.js
FILE="senate.$NOW.json"
echo $FILE
mv senate.js $FILE
