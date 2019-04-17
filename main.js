const skyward = require('skyward-rest')

const url = 'https://skyward.kleinisd.net/scripts/wsisa.dll/WService=wsEAplus/seplog01.w';

const scraper = skyward(url); // the scraper!

const user = 'secret';
const pass = 'secret';

scraper.scrapeReport(user, pass)
    .then(({ data }) => {
        studData = (data) // array of reports
    });

scraper.scrapeGradebook(user, pass, { course: 98355, bucket: 'TERM 1' })
    .then(({ data }) => {
        gradeData = (data) // gradebook
        console.log(gradeData.gradebook[1].assignments[0]);
    });
