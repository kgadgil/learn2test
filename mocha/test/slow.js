describe('slow test', function() {

  // Tests will be considered slow after 1 second elapses
  this.slow(1000);
  
  // Completes after the specified 1 second elapses
  it('should be complete in a second', function(done) {
    setTimeout(done, 1500);
  })
  
  // Completes immediately
  it('should be complete instantly', function() {})
  
})