# Unit Testing in JavaScript
## Prerequisites
Install node.js & edit the environment variables.
## Folder 1
### 1.0
1. Run in Terminal: Initialises the default values and gives the starting point 'package.json.'
```bash
npm init -y
```
2. Run in Terminal: Installs 'jest', saving it as a development dependency as this testing library is used only during development.
```bash
npm i --save-dev jest
```
3. Run in 'package.json' under 'scripts' and 'test': Test runner (Executes the tests, summarizes results) and Assertion library (defines testing logic and conditions).
```bash
jest
```
4. Run in Terminal: To run all the tests
```bash
npm test
```
### 1.1
1. Run in Terminal: Initialises the default values and gives the starting point 'package.json.'
```bash
npm init -y
```
2. Run in Terminal: Installs 'jest', saving it as a development dependency as this testing library is used only during development
```bash
npm i --save-dev jest
```
3. Run in package.json under "scripts" and "test": To check which lines of the code got tested
```bash
jest --coverage
```
4. Run in Terminal: To run all the tests
```bash
npm test
```
5. Run through coverage -> lcov-report -> index.html: Detailed report
## Folder 2: - End to End
1. Run in Terminal: Initialises the default values and gives the starting point 'package.json.'
```bash
npm init -y
```
2. Run in Terminal: Installs 'jest', saving it as a development dependency as this testing library is used only during development
```bash
npm i --save-dev jest
```
3. Run in package.json under "scripts" and "test": Installs Puppeteer which is a node.js library that provides an API to control Chrome/Chromium over the DevTools Protocol
```bash
npm install --save-dev puppeteer
```
4. in package.json: Commands in the terminal or Commands in the terminal (works for GitHub repositories only)
```bash
jest --watchAll or jest --watch
```
5. Open index.html: Host the file
6. Run through util.test.js -> Line 19 -> URL: Enter the URL of index.html
7. Run in Terminal: To run all the tests
```bash
npm test
```
