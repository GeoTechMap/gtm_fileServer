#!/usr/bin/env bash

cd dashboard
yarn build
echo "|^^^^^^|^^^^^| Generating minified file for UI (dashboard)"
cd ..

mvn clean install
echo "|^^^^^^|^^^^^| Generating jar file"

#Copy execute_commands_on_ec2.sh file which has commands to be executed on server... Here we are copying this file
# every time to automate this process through 'deploy.sh' so that whenever that file changes, it's taken care of
scp -i "~/Downloads/geotechmap_aws_key.pem" execute_commands_on_ec2.sh ubuntu@ec2-3-136-112-8.us-east-2.compute.amazonaws.com:/home/ubuntu
echo "|^^^^^^|^^^^^| Copied latest 'execute_commands_on_ec2.sh' file from local machine to ec2 instance"

scp -i "~/Downloads/geotechmap_aws_key.pem" ./target/gtm_webmap-0.0.1-SNAPSHOT.jar ubuntu@ec2-3-136-112-8.us-east-2.compute.amazonaws.com:/home/ubuntu
echo "|^^^^^^|^^^^^| Copied jar file from local machine to ec2 instance"

echo "|^^^^^^|^^^^^| Connecting to ec2 instance and starting server using java -jar command"
ssh -i "~/Downloads/geotechmap_aws_key.pem" ubuntu@ec2-3-136-112-8.us-east-2.compute.amazonaws.com chmod 777 ./execute_commands_on_ec2.sh
ssh -i "~/Downloads/geotechmap_aws_key.pem" ubuntu@ec2-3-136-112-8.us-east-2.compute.amazonaws.com /home/ubuntu/execute_commands_on_ec2.sh