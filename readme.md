# Long tail scraper
Cypress script to extract all the suggestions from Google's autocomplete.

## Dependencies
In order to using it you need to install the following dependencies:
* Node.js
* NPM or Yarn
* Cypress

## Usage
First, you need to modify the value of the query you want to scrape in `./cypress/integration/0-long-tail-scraper/longTailScraper.spec.js` line 16.

Then, to run the script you need to install the dependencies and run the following command:
```bash
yarn run cypress run
```