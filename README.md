# API Automation Framework using Supertest (API Library), Mocha JS & Chai

## PreRequisites:
1. node.js
2. npm
3. Visual Studio Code Editor (VS Code)

# Steps:
1. Clone the Repo from GitLab
2. Open the folder `API-SUPERTEST-MOCHA-TESTS` in VS Code editor
3. In VS Code editor - open Terminal and run the command to install project existing dependencies: `npm install`

4. In case, `npm install' fails to install required dependencies then run the below command:
    `npm install --save-dev supertest mocha chai mochawesome @babel/core @babel/node @babel/register @babel/preset-env @babel/plugin-transform-runtime`

5. If Step 3 works fine, ignore Step 4

6. # Simply to Run the tests: 
`npm test`

# To see tests along with Passed/Failed report run the command as below:
`npm test -- --reporter mochawesome`

# NOTE: 
1. Once the tests are completed running, in the terminal displays 2 different Report links such as JSON and HTML like below :

JSON Link: `[mochawesome] Report JSON saved to /Users/xxxx/xxxx/xxxx/api-supertest-mocha-tests/mochawesome-report/mochawesome.json`

HTML link: `[mochawesome] Report HTML saved to /Users/xxxx/xxxx/xxxx/api-supertest-mocha-tests/mochawesome-report/mochawesome.html`

2. Copy the HTML report link and paste it in a browser to see the TESTS report 
  (or)
- Click on the 'mochawesome.html' file under the 'mochawesome-report' folder 

## NOTE: 
In this project, under 'screenshots' folder, attached the tests passed report