import supertest from 'supertest';
import {expect} from 'chai';

var request = supertest('https://gorest.co.in/public-api');
const TOKEN = 'fceroeiroedfk78996559f481604ee380d19bef870';
var etag_value;

describe('*** API Tests *** ', () => {

    it('GET Test: 200 - /users', async() => {
        const res = await request.get('/users').then(res);
        console.log(" StatusCode :: " + res.body.code);
        expect(res.body.code).to.eq(200);         // Verify - Success 'StatusCode: 200' 
        expect(res.body).to.not.be.empty;         // Check - 'Response' is not empty 
        console.log(res.body.data);               // When response is not empty displays it
        etag_value = res.headers.etag;
        console.log("etag_value :: " + etag_value);
    });

    it('POST Test: 401 - /users', async() => {
        const reqBody  = {
              email: "autotest@hello.comm",
              name: "Test Name",
              gender: "Female",
              status: "Active"
        }
        const res = await request.post('/users')
                                 .set('Authorization', 'Bearer ${TOKEN}') // Set Invalid(UnAuthorized) TOKEN
                                 .send(reqBody)
                                .then(res);
                            
        console.log(" StatusCode :: " + res.body.code);
        expect(res.body.code).to.eq(401);                              // Verify - Authorization Failed 'StatusCode: 401' 
        expect(res.body.data).to.not.be.empty;                         // Check - 'Response' is not empty 
        console.log(res.body);                                         // Print response
        expect(res.body.data.message).to.eq('Authentication failed');  // Verify - 'Authentication failed' message in the response
    });

    it('GET Test: 304 - /users', async() => {
        const res = await request.get('/users')
                                .set({'if-None-Match' : `${etag_value}`})                           
                                .then(res);
        console.log(" StatusCode :: " + res.statusCode);
        expect(res.statusCode).to.eq(304);          // Verify - Not-Modified 'StatusCode: 304' 
        expect(res.body).to.be.empty;               // Check - 'Response' to be empty 
    });

})