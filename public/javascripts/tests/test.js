/**
 * Created by Armin on 25.05.2017.
 */
var assert = require('assert');
var request = require('request');
var canteenUrl = 'https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/canteen/2/2017-05-29';
var timetableUrl = 'https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/timetable/INFB/0/5?format=json';

module.exports = {
    'Integrationtest 1' : function(test) {
        test.expect(2);
        request({url: canteenUrl}, function (error, response, body) {
            body = JSON.parse(body);
            test.equal(body.mealGroups[0].meals[0].name, 'Chicken Drum Sticks mit Sweet Chilli Soße');
            test.equal(response.statusCode,200);
            test.done();
        });
    },
    'Integrationtest 2' : function(test) {
        test.expect(2);
        request({url: timetableUrl}, function (error, response, body) {
            body = JSON.parse(body);
            test.equal(body.timetables[0].entries[0].lectureName, 'IT-Service-Management');
            test.equal(response.statusCode,200);
            test.done();
        });
    }
};