/*
The following command is used to perform a Mongo import.
mongoimport
*/

mongoimport --db student --collection students --type csv --headerline --file c:\Sample\student.csv

/*
The following command is used to perform a Mongo export.
mongoexport
*/

mongoexport --db student --collection students --out C:\Sample\student.json



