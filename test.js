import test from 'ava'

import isEmailMaybe from './index'

test('regex is exported', t => {
  t.regex('a@b.c', isEmailMaybe.regex)
})

const passingStrings = [
  'customer/department@example.com',
  '$A12345@example.com',
  '!def!xyz%abc@example.com',
  '_Yosemite.Sam@example.com',
  '~@example.com',
  'Ima.Fool@example.com',
]

passingStrings.forEach(s => {
  test(`VALID: ${s}`, t => t.true(isEmailMaybe(s)))
})

const failingStrings = [
  '',
  'NotAnEmail',
  '@NotAnEmail',
  '"test\blah"@example.com',
  '"test\rblah\"@example.com',
  '"test"blah"@example.com',
  'Ima Fool@example.com',
  'not@anemail.com!',
]

failingStrings.forEach(s => {
  test(`INVALID: ${s}`, t => t.false(isEmailMaybe(s)))
})
