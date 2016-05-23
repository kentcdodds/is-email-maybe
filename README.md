# is-email-maybe

Hey, I just met you, and this is crazy, but here's my address. `isEmailMaybe`? Sort-of-strong, but also loose email
address validator which uses the same regex as Angular 1.

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]

## The problem

Email validation is hard. You'll probably always get it wrong. The most sure way to validate that an email is valid is
by sending it something. Most of the time this works great. If someone wants to sign up for you newsletter, you just let
them type whatever they want, then you send them an email and ask them to click on a link to validate they got your
email.

However, there are some cases where you really need to protect from human error. In my specific scenario, if the user
enters an incorrect email, they could send hundreds of dollars to the wrong person. Or think that they paid their bill
on time, but find out too late that they made a typo in the email address.

When doing email validation, you should weigh the costs of getting it wrong. If your validation is over-ambitiously
validating an email address, that could lead to some serious frustration on the part of the end user and they may not
subscribe to your newsletter (for example), so you may as well make validation as loose as possible (don't use this).
However, if you have a scenario like mine where a typo can lead to serious mistakes, then a more ambitious validation
solution is probably good.

## This solution

This is a direct copy/paste from the [Angular 1][angular] code [here][angular-code]. It's not perfect, but it does a
pretty good job of validating 99% of use cases. And it's definitely been battle tested across hundreds of thousands of
Angular applications throughout the world.

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should
be installed as one of your project's `dependencies`:

```
npm install --save is-email-maybe
```

You can also get it from [npmcdn.com][cdn]: [https://npmcdn.com/is-email-maybe][cdn-url]

## Usage

```javascript
const isEmailMaybe = require('is-email-maybe')
isEmailMaybe('a@b.c') // true
isEmailMaybe('a@@b.c') // false
isEmailMaybe.regex.test('email@example.com') // true
```

## Other Solutions

- [is-email][is-email] - `/.+\@.+\..+/`
- [email-validator][email-validator] - Checks more (is more strict?) than this lib
- [is_js][is_js] - Has a bunch of validators, including email

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](http://kent.doddsfamily.us)<br />[💻](https://github.com/kentcdodds/is-email-maybe/commits?author=kentcdodds) [📖](https://github.com/kentcdodds/is-email-maybe/commits?author=kentcdodds) 🚇 [⚠️](https://github.com/kentcdodds/is-email-maybe/commits?author=kentcdodds) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification. Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/is-email-maybe.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/is-email-maybe
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/is-email-maybe.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/is-email-maybe
[version-badge]: https://img.shields.io/npm/v/is-email-maybe.svg?style=flat-square
[package]: https://www.npmjs.com/package/is-email-maybe
[downloads-badge]: https://img.shields.io/npm/dm/is-email-maybe.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=is-email-maybe&from=2016-04-01
[license-badge]: https://img.shields.io/npm/l/is-email-maybe.svg?style=flat-square
[license]: https://github.com/kentcdodds/is-email-maybe/blob/master/other/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/is-email-maybe/blob/master/other/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/kentcdodds/is-email-maybe/blob/master/other/ROADMAP.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[angular]: https://github.com/angular/angular.js
[angular-code]: https://github.com/angular/angular.js/blob/fa79eaa816aa27c6d1b3c084b8372f9c17c8d5a3/src/ng/directive/input.js#L27
[cdn]: https://npmcdn.com
[cdn-url]: https://npmcdn.com/is-email-maybe
[is-email]: https://www.npmjs.com/package/is-email
[email-validator]: https://www.npmjs.com/package/email-validator
[is_js]: https://npmjs.com/package/is_js
