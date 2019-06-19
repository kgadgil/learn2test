/* md5.js */

var crypto = require('crypto');

module.exports = function(string, callback) {
  var withCallback = (typeof callback === 'function');
  //console.log(typeof string)
  try {
  
    var hash = crypto.createHash('md5')
      .update(string)
      .digest('hex');
      
    withCallback && callback(null, hash);
    
  } catch (err) {
    if (withCallback) callback(err);
    else {
      //console.log(err);
      throw err;
    }
  }
};