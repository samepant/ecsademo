### Utilities

The `csvToJson.js` script takes a csv downloaded from (here)[https://docs.google.com/spreadsheets/d/1Qa8dEjySVJljyJ-cHrsglYGLgzSkS6ntCaN0Qs3GI7Y/edit#gid=837034409] and turns it into react ready JSON, which is saved into `../src/assets/`.

To run this script, `cd` into `./utilities` and run `node csvToJson.js team.csv`.You can replace team.csv with a fresh download, but be sure to keep the same header column layout, as the script relies on it to sort ECSA members and Advisors.