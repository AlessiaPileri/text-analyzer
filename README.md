# Text analyzer

This project get and analyze a text, providing:
- number of words
- number of letters
- number of spaces
- number of words repeated more than 10 times

## Develop

To start contributing to this project, you just have to type ``
make install-deps`` and ``make start-dev``

## Run
To run the project in a local environment (**node is required**), you have to  ``
make install-deps``, ``make build`` and finally  ``node ./dist/index.js``. 

Build command executes unit tests before building application, and in case of fail no build is provided. To debug unit tests, you can use `make test` or `make test-watch`