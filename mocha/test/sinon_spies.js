/**
 * SINON SPIES
 * spies are used to gather info about function calls
 * used to verify if func was called, with how many params, which params etc
 * 1. anon spies
 * 2. replace a func with a spy
 * 3. verify that callback was called
 * @see {[https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/]}
 */
var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');


/*var spy = sinon.spy();
spy('Hello', 'World');
console.log(spy.firstCall.args);*/

/**
 * 2.
 * Replace func with a spy
 * @type {Object}
 */
/*var user = {
  setName: function(name){
    this.name = name;
  }
}
//Create a spy for the setName function
var setNameSpy = sinon.spy(user, 'setName');
//Now, any time we call the function, the spy logs information about it
user.setName('Darth Vader');
//Which we can see by looking at the spy object
console.log(setNameSpy.callCount); //output: 1
//Important final step - remove the spy
setNameSpy.restore();*/


/** 
 * 3.
 * Spies not often used but useful for verifying if callback was called 
 * uses chai and mocha for assert
 * previous tests didnt need the chai,assert globals
 * @param  {callback}
 * @return {[type]}
 */
function myFunction(condition, callback){
	if(condition){
		callback();
	}	 
}

describe('myFunction', function() {
  it('should call the callback function', function() {
    var callback = sinon.spy();

    myFunction(true, callback);

    //assert(callback.calledOnce);
    sinon.assert.calledOnce(callback);
    sinon.assert.calledWith(callback);
  });

  it('should throw error',function(){
  	var callback = sinon.spy();
  	myFunction(true);
	sinon.assert.calledWith(callback);
  })
});



/**
 * Junk from trying sinon to test sha code 
 * @param  {[type]}
 * @return {[type]}
 */
/*describe('#sha', function(){	
	var sandbox;	//sinon.js starts 
	//beforeEach is called before every test is ran
	//beforeEach is mocha hook?
	beforeEach(function(){
		//create sandbox
		sandbox = sinon.sandbox.create();
		//stub some console methods 
		sandbox.stub(console,'log');
		sandbox.stub(console,'error');
	});
  	// this function will be called after every single test
	afterEach(function() {
	// restore the environment as it was before
	sandbox.restore();
	});
	it('should return correct value of hash', function(){
		var callback = sinon.stub();
		sha('some data to hash')
	});

});*/