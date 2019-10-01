[![Build Status](https://travis-ci.org/DeliceLydia/myDairy.svg?branch=develop)](https://travis-ci.org/DeliceLydia/myDairy) [![Coverage Status](https://coveralls.io/repos/github/DeliceLydia/myDairy/badge.svg?branch=ch-testing-%23168659186)](https://coveralls.io/github/DeliceLydia/myDairy?branch=ch-testing-%23168659186) [![Maintainability](https://api.codeclimate.com/v1/badges/4d769ba85fe19b31200f/maintainability)](https://codeclimate.com/github/DeliceLydia/myDairy/maintainability)

# myDairy
My Diary is an online journal where users can pen down their thoughts and feelings.

## UI

## User Interface (UI)
* HTML
* CSS

### GitHub Pages link for UI
[myDiary/UI link]( https://delicelydia.github.io/myDairy/UI/html/)

---------------------------------------------------------------------

## SERVER

## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/entries| POST | posting an entry |
| /api/v1/entries| GET | Getting all entries|
| /api/v1/entries/:id| GET | Getting an entry by ID |
| /api/v1/entries/:id | DELETE | deleting a specific entry |
| /api/v1/entries/:id | PUT| Get the user to modify an entry  |

## Used Tools

### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* (run time Environment for running JS codes)
 ```
### Framework
```
 *Express* (used for building fast APIs)
 ```
### Testing Framework and assertion library
```
 *Mocha* and *Chai*
 ```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```
### Deployment
```
Heroku
```
### Heroku link Example
[myDiary heroku link](https://safe-citadel-00027.herokuapp.com/)


## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

## Run the server
```
> npm run dev
```
## Run the test
```
> npm test
```


## Author
- Lydia Ingabire <Delydia84@gmail.com>

---

## License & copyright
Copyright (c) Lydia Ingabire, Software developer