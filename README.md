# WebdriverIO with TypeScript and Cucumber

This repo is created to show subjects below:

* Cucumber and WebdriverIO library usage with Typescript.

## How It Works

1. Download node.js to your pc.
2. Clone repository to your pc.
3. Execute command "npm install" in the folder that you downloaded the project.
 

## Usage
When every instalation is done you use command below for execution the test in the terminal.
NOTICE: wdio.conf.ts file path should be correct.

 ```sh
    $ npx wdio run test/wdio.conf.ts
 ```
To create allure test report you should execute command below:

 ```sh
    $ allure serve <path of the allure results folder>  
 ```
## Test Cases

### Case 1:
* Verify that user could see specific errors when not enough information is provided during registration process
* Verify that user can create an account with valid data 
* Verify that registered user can add a new address. 

## Design

I used page object oriented approach to create functions. Each step definition verifies the test steps. Each verification step is one scenario in the feature file.
