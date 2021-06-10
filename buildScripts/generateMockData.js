import { schema } from './mockDataSchema';
import chalk from 'chalk';

const {resolve, extend} = require('json-schema-faker');
const fs = require('fs');
extend('faker', () => require('faker'));


resolve(schema).then(sample => {
        console.log('Writing to db.json')
        fs.writeFile("./src/api/db.json", JSON.stringify(sample), function(err) {
          if(err) {
                return console.log(chalk.red(err));
          } else {
                console.log(chalk.green("Mock Data generated"));
          }
        });
      });