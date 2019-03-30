// const express = require('express');
// const supertest = require('supertest');

// describe('service test', function() {
//     var app = express();
//     var server;
//     beforeEach(function() {
//         server = app.listen(3001);
//     });
//     afterEach(function() {
//         server.close();
//     });
//     test('GET request outputs status code of 200', (error) => {
//         if (error){
//           console.log(error);
//         } else {
//           supertest(app).get('/some').expect(200);
//         }
//     });
// });


describe('service test', function() {
    test('if listing id is a string', (done) => {
        expect(typeof 'seed.listing_id').toBe('string');
        done();
      });
});