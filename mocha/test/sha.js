/*********************************************************************************
* SHA 256 example picked from 
* crypto api pages
* @see https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding
***********************************************************************************/

var chai = require('chai');
var assert = chai.assert;
//assert = require("assert");	//how are these two diff
var expect = chai.expect;
var should = chai.should();

var sha = require('../sha');
var expect = require('chai').expect;



/***************************
*	BDD interface to Mocha
****************************/

describe('#sha', function(){
	/**
	* Mocha
	**/
	it('should return correct hash', function(){
		var result = sha('some data to hash');
		let expected = '6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50';
		result.should.equal(expected);			//The Real BDD
		expect(result).to.eql(expected);		//who uses ExpectJS?
		assert.equal(expected, result, 
		'But the hash ' + result +' was returned.');		//TDD?
	});
});


/***************************
*	TDD interface to Mocha
*	Errored out with ReferenceError: suite is not defined
****************************/
/*suite('Sha', function(){
	setup(function(){
		let expected = '6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50';
		let actual = sha('some data to hash');	})
	test('should return the correct hash',function(){

	});
});
*/