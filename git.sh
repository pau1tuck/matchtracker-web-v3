#!/bin/bash

datetime=$(date "+%d-%m-%Y %H:%M:%S (UTC%Z)")

# Prompt for a custom commit message
read -p "Commit message: " user_commit_msg
echo Commit time: $datetime
echo ""

git add .
# Commit with the new message
git commit -m "$user_commit_msg"
git push -u origin main
