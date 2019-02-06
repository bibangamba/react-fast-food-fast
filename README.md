# Fast Food Fast

[![Build Status](https://travis-ci.org/bibangamba/react-fast-food-fast.svg?branch=develop)](https://travis-ci.org/bibangamba/react-fast-food-fast)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cc613e00de3ca5f0235e/test_coverage)](https://codeclimate.com/github/bibangamba/react-fast-food-fast/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/cc613e00de3ca5f0235e/maintainability)](https://codeclimate.com/github/bibangamba/react-fast-food-fast/maintainability)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-7af442.svg)](https://houndci.com)

# Description.

This repository contains code for a product called Fast Food Fast. Its purpose is to enable users register/login, access our menu, and make orders online. The orders (and their status) is also tracked on this web application by the admin user. It is broken down into a [backend](https://github.com/bibangamba/fast-food-fast/tree/ch-power-ui-with-endpoints) (API endpoints) and a frontend (ReactJS application - this one)

# Folder Structure.

```
react-fast-food-fast
│   README.md
│   .gitignore
│   package.json
│   travis.yml
│   yarn.lock
│
└───public
|   |index.html
|   |...
└───src
│   │   Router.jsx
│   │
│   └───components
│   |   │   component1.jsx
│   |   │   ...
│   │
│   └───containers
│   |   │   component1.jsx
│   |   │   ...
|   |   |
│   └───actions
│   |   │   action.js
│   |   │   ...
│   │
│   └───reducers
│       │   reducer1.js
│       │   ...
```

- Presentational components are placed in components folder
- Stateful/Container components are placed in the container folder
- Actions & Reducers are placed in their aptly named folders.

# Documentation.

Below is a list of endpoints consumed by this frontend;

| Endpoints                | Action                                      | Parameters                                     |
| ------------------------ | ------------------------------------------- | ---------------------------------------------- |
| POST /api/v2/auth/login  | This endpoint is used for logging in        | email, password                                |
| POST /api/v2/auth/signup | This endpoint is used to register new users | email, password, confirm_password, name, phone |

# Setup

## Dependencies

- Install NodeJs(Download node.js from the official website)

## Getting Started

- Clone the repository locally

  `git clone https://github.com/andela/react-fast-food-fast.git`

- Enter the repo directory

  `cd react-fast-food-fast`

- Install the dependencies.

  `yarn install`

- Run the application.

  `yarn start`

## Testing

- Run tests.

  `yarn test`
