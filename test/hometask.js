const chai = require('chai');
const expect = chai.expect;
const getComment = require('../data/getComment');
const env = require('../endpoint/test');
const fetch = require('node-fetch');



describe('Home Task 12', () => {

    getComment.map((data) => {
        let response;
        let res;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await fetch(data.uri);
            res = await response.json();
            console.log('length', res.length);      
            console.log('headers', response.headers.get('content-type'));
            }); 

        it('Status is 200', () => {
            expect(response.status).to.eql(200);
        });

        it('Content-type header exists', () => {
            expect(response.headers.get('content-type')).is.eql('application/json; charset=utf-8');
        });

        it('response is array of 10 users', () => {
                      
            expect(res.length).to.equal(10);
        });
    })

});