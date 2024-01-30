const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Your setupNodeEvents logic goes here
    },
    baseUrl: "https://automationexercise.com",

  },
  env: {
    testUser: "qaTest user",
    userName: "qaTestuserqwerty@email.com",
    password: "Qwerty1234!",
    newUser: "qwerty123@email.com"
  },

    "reporter": "mochawesome",
    "reporterOptions": {
      "overwrite": false,
      "html": true,
      "json": true
    }
  

});
