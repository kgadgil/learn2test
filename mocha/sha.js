const crypto = require('crypto');

module.exports = function (string) {
	let hash = crypto.createHash('sha256').update(string).digest('hex');
	console.log(hash);
	return hash;
}

// Prints:
//   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50