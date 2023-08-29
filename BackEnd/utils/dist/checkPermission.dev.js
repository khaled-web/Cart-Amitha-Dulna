"use strict";

//.............
//importing
//.............
var _require = require('../errors'),
    CustomError = _require.CustomError; //.............
//App..
//.............


var checkPermissions = function checkPermissions(requestUser, resourceUserId) {
  // console.log(requestUser);
  // console.log(resourceUserId);
  // console.log(typeof resourceUserId);
  // if (requestUser.role === 'admin') return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new CustomError.UnauthorizedError('Not authorized to access this route');
}; //.............
//exporting
//.............


module.exports = checkPermissions;