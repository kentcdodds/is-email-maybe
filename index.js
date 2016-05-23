/*
 * copied from the angular.js project:
 * https://github.com/angular/angular.js/blob/fa79eaa816aa27c6d1b3c084b8372f9c17c8d5a3/src/ng/directive/input.js#L27
 * The main purpose of this library is to isolate this regex for testing and reuse
 * Thanks angular people!
*/
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i

isEmailMaybe.regex = EMAIL_REGEX
export default isEmailMaybe

function isEmailMaybe(email) {
  return EMAIL_REGEX.test(email)
}
