/**
 * Sinon assertions and stubs
 * 1. anon stubs
 * 2. 
 */
var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');

var stub = sinon.stub();
stub('hello');
console.log(stub.firstCall.args); //output: ['hello']

/**
 * 2. Takes object as param and sends it via AJAX to predefined URL
 * @param  {[type]}
 * @param  {Function}
 * @return {[type]}
 */

function saveUser(user, callback) {
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);
}

describe('saveUser', function() {
  it('should send correct parameters to the expected URL', function() {

    //We'll stub $.post same as before
    var post = sinon.stub($, 'post');

    //We'll set up some variables to contain the expected results
    var expectedUrl = '/users';
    var expectedParams = {
      first: 'Expected first name',
      last: 'Expected last name'
    };

    //We can also set up the user we'll save based on the expected data
    var user = {
      firstname: expectedParams.first,
      lastname: expectedParams.last
    }

    saveUser(user, function(){} );
    post.restore();

    sinon.assert.calledWith(post, expectedUrl, expectedParams);
  });
});
