# Unit Testing in JavaScript

// 0
Install node.js & edit the environment variables.

// Folder 1: 1.0

#Step 1 in Terminal:
npm init -y 
Initialises the default values and gives the starting point 'package.json.'

#Step 2 in Terminal:
npm i --save-dev jest
Installs 'jest', saving it as a development dependency as this testing library is used only during development

#Step 3 in package.json under "scripts" and "test":
// jest
Test runner (Executes the tests, summarizes results) and Assertion library (defines testing logic and conditions)             		
#Step 4 in Terminal:
npm test
To run all the tests

// Folder 1: 1.1

#Step 1 in Terminal:
npm init -y 
Initialises the default values and gives the starting point 'package.json.'

#Step 2 in Terminal: 
npm i --save-dev jest
Installs 'jest', saving it as a development dependency as this testing library is used only during development

#Step 3 in package.json under "scripts" and "test":
jest --coverage
To check which lines of the code got tested

#Step 4 in Terminal:
npm test
To run all the tests

#Step 5 (coverage -> lcov-report -> index.html):
Detailed report

// Folder 2: - End to End

#Step 1 in Terminal:
npm init -y 
Initialises the default values and gives the starting point 'package.json.'

#Step 2 in Terminal: 
npm i --save-dev jest
Installs 'jest', saving it as a development dependency as this testing library is used only during development

#Step 3 in package.json under "scripts" and "test": 
npm install --save-dev puppeteer
Installs Puppeteer: This node.js library provides an API to control Chrome/Chromium over the DevTools Protocol

#Step 4 in package.json:
jest --watchAll or jest --watch
Commands in the terminal or Commands in the terminal (works for GitHub repositories only)

#Step 5 in index.html:
Host the file

#Step 6 (util.test.js -> Line 19 -> URL):
Enter the URL of index.html

#Step 7 (Terminal):
npm test
To run all the tests