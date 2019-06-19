/*chai.should();
 
describe('MyAPI', function() {
  beforeEach(function() {
    //Enable a fake HTML Request 
    this.xhr = sinon.useFakeXMLHttpRequest();
    //put each request in an array
    //by saving these values
    ////hence avail to be used within test case
    this.requests = [];
    //create a listener to put all xhr into requests array
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });
 
  afterEach(function() {
    //restore to original XMLHttpRequest object
    this.xhr.restore();
  });
 
  it('should parse fetched data as JSON', function(done) {
    var data = { foo: 'bar' };
    var dataJson = JSON.stringify(data);
    //validate result with test data
    myapi.get(function(err, result) {
      result.should.deep.equal(data);
      //done tells Mocha that async test is complete
      done();
    });
    //respond is a fake func
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });
  it('should send given data as JSON body', function() {
    var data = { hello: 'world' };
    var dataJson = JSON.stringify(data);
   
    myapi.post(data, function() { });
   
    this.requests[0].requestBody.should.equal(dataJson);
  });

  it('should return error into callback', function(done) {
    myapi.get(function(err, result) {
      err.should.exist;
      done();
    });

    this.requests[0].respond(500);
  });

});

//fakeXHR pretends that the JSON we gave it was sent by a web server 
//myapi.get sees it and calls the callback. 
//If the response is handled correctly, it should parse the data it received into an object. 
//then we compare the date we sent
*/
function saveUser(user, callback) {
  $.post('/users', {
    first: user.firstname,
    last: user.lastname
  }, callback);
}
describe('saveUser', function() {
  it('should call callback after saving', function() {

    //We'll stub $.post so a request is not sent
    var post = sinon.stub($, 'post');
    post.yields();

    //We can use a spy as the callback so it's easy to verify
    var callback = sinon.spy();

    saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

    post.restore();
    sinon.assert.calledOnce(callback);
  });
});