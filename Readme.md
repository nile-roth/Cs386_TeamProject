# Money Monkey 

Money Monkey is a payroll tracking app that allows hourly wage workers to track the amount of money they have made on their shift, to ensure that the worker is being paid the correct amount and to mitigate any potential error with their paycheck; unlike ADP, Money Monkey has an aesthetic UI, which make the user feel trendy while keeping track of their income. 


## Getting Started

* Clone the respository in VS code

* Commit changes / Make a pull request to main branch



### Prerequisites
Visual Studio 2022's latest release should be installed

 
How to install VSC:
  * Follow the guide on     https://code.visualstudio.com/docs/setup/windows#:~:text=Installation%201%20Download%20the%20Visual%20Studio%20Code%20installer,Code%20is%20installed%20under%20C%3A%5CUsers%5C%20%7BUsername%7D%5CAppData%5CLocal%5CPrograms%5CMicrosoft%20VS%20Code


VS Code is supported on the following platforms:

OS X El Capitan (10.11+)
Windows 8.0, 8.1 and 10, 11 (32-bit and 64-bit)
Linux (Debian): Ubuntu Desktop 16.04, Debian 9
Linux (Red Hat): Red Hat Enterprise Linux 7, CentOS 7, Fedora 34

Our code can also be cloned using Git. To install git, use the installer in the following website.
* https://git-scm.com/download/win

### Installing

1. Go to the website https://www.eclipse.org/ide/

2. Dowwnload the latest version of the Eclipse IDE

3. Open Eclipse and use it for the automated testing.



## Running the tests

Explain how to run the automated tests for this system

From Scratch:
1. Navigate to the project directory on the command line.
2. Install Nodejs and npm.
3. Initialize npm with the command: npm init, and provide information as prompted.
4. Install Mocha on the command line via npm with the command: npm install mocha
5. Make a new directory called test within the project directory.
6. Copy the file test.js into the test directory.
7. Navigate back to the project directory and install jsdom with the command: npm install --save-dev --save-exact jsdom jsdom-global.
8. Run the tests with the command: ./node_modules/mocha/bin/mocha.js -r jsdom-global/register

Alternatively: 
1. Make a local copy of this repository
2. In the project directory, run the command: npm install
3. Run the tests with the command: ./node_modules/mocha/bin/mocha.js -r jsdom-global/register

## Current Tests
1. setWage
 Tests that wage will be successfully set to a value entered by the user.
2. testInit
 Tests that dollars and cents will be initialized to the proper values to avoid error in paycheck calculation.
3. testCount (future release)
 Tests that wage will increment by the proper amount per second on the wage clock as determined by the hourly wage given by the user.

## Deployment

-Deploy using Azure Web App services.

## Built With
* CSS
* JavaScript
* C++ / C#


## Contributing

Please read [CONTRIBUTING.md](https://github.com/nilewuzhere/Cs386_TeamProject/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors
* **Veronica Cardenas** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* **Rain Bigsby**
* **Naima Ontiveros**
* **Nile Roth**
* **Rebbecca Chavez**
* **Regan Kalvelage**



## License
This project is licensed under the GNU License v3.0.

## Acknowledgments
* Vikash and Avinash of EasyTutorials: "How to Make A Website Header using HTML and CSS"

