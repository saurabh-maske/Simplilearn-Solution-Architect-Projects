# Simplilearn-Solution-Architect-Projects
Projects based on real world industry use case with all hot AWS services as Ec2, VPC, Cloudwatch, CloudFront etc.

# Setup AWS RDS - MySql databse

**Steps:-
1. Login to RDS Console and choose MySql as database along with required configurations
2. Generate Password and username to connect to mysql server ( common username is admin)
3.Clickon create database

In this example I have created  emp database with table name  emp_details to store name and age of employee.

#Setup EC2 instance for Nodejs Server using Launch Template 
Steps:-

1. Click on launch template
2.Give Template name
3.Choose Base Image along with hardware configurations such as instance type ,RAM as per your requirment.

ps:- Here I have used user data option to add base dependencies to run my application (nodejs,npm,git,pm2) on first launch of instance itself.So that I do not need to add them manually
-------------------------------------------------------------------------------------------------------------
// User data (shell script)
#!/bin/bash

#Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

#Install Git
sudo apt-get install -y git

#Install PM2
sudo npm install -g pm2

#Start your Node.js application
pm2 start app.js
--------------------------------------------------------------------------------------------------------------

4.Click on Create template
5.Click on Launch EC2 using template 
6. Choose your template name from list and click on launch.
7.Connect to your ec2 instance using any appropriate method (SSH,RDP,Session management)
8.Install all required dependencies to sucessfully run backend services(nodejs,mysql,npm,pm2)
9.Clone your nodejs server code using below command 
  - git clone https://github.com/saurabh-maske/Simplilearn-Solution-Architect-Projects.git
10. cd server
11.npm i 
12. sudo pm2 start server.js

#Setup EC2 instance for ReactJs Server using Launch Template 
steps:-

1. Follow same steps asmentioned in Nodejs Server installation from 1-7
8. Use below user data to install React dependencies
-------------------------------------------------------------------------------------
//
#!/bin/bash



#Install Git
sudo apt-get install -y git

#Install PM2
sudo npm install -g pm2

#Install Create React App
sudo npm install -g create-react-app

#Create a new React app
create-react-app my-app

#Start your React app with PM2
cd my-app
pm2 start npm --name "my-app" -- start
//
-----------------------------------------------------------------------------------------
9.Clone your nodejs server code using below command 
  - git clone https://github.com/saurabh-maske/Simplilearn-Solution-Architect-Projects.git
10. cd client
11.cd empclient
12.npm i
13. pm2 start npm --reactclient "empclient" -- start

#Setup Route 53 Monitoring Using Health Check

1.Go to Route 53 and select Health Check
2.Create Health check for endpont / resources ( I have picked endpoint)
3. Fill your IP address of Node server along with port and endpoint name
4.Choose failure threashold as 3 and request interval as 30 sec
4. Click on create health check 
-------------------------------------------------------------------------------------------

# .env file data
host="your aws rds endpont"
user="username set while creatingmysql db "
password="youpassword"
database="databasenamegoeshere"

