//request-time.js

/**
* Express middleware; adds a timestamp `requestTime` property 
* to the incoming Request object
* @see https://expressjs.com
*/

module.exports = (req, res, next) => {
	req.requestTime = Date.now();
	next();
};