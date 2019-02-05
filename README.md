# Fast Food Fast

*travis build *test coverage *maintainability *hound reviewed

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
└───src
│   │   Router.jsx
│   │   file012.txt
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

    POST	sign up as a user	email, password, confirm_password, name, phone
    POST	login so as to get an auth token	email, password

| Endpoints                | Action                                      |
| ------------------------ | ------------------------------------------- |
| POST /api/v2/auth/login  | This endpoint is used for logging in        |
| POST /api/v2/auth/signup | This endpoint is used to register new users |

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
