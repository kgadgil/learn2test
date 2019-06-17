//test/request-time.spec.js
const assert = require('assert');
const requestTime = require('../request-time');

describe('requestTime middleware', function(){
	it('should add a `requestTime` property to the `req` parameter', function(){
		//call function
		const req = {};
		//requestTime(req);		//next func not defined so test fails
		requestTime(req,null,()=>{});	//test passes
		//make assertion
		assert.ok(req.requestTime > 0);
	});
});