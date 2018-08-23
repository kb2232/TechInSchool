# This is first MVP
  > "The DREAM: Giants like Google and Facebook thrive of personal data. In exchange for our personal likes and things we search for, both google and facebook can offer us more personalized experience. I want to offer each student every possible way to improve his or her grades, attendance and/or behavior in exchange of ALL data" - Kunle Babatunde

  - [mvp](https://github.com/kb2232/TechInSchool)

# Packages
  ```JSON
  {
    "body-parser": "^1.18.3",
    "cookie-session": "^2.0.0-beta.3",
    "dotenv": "^6.0.0",
    "express": "^4.16.3",
    "express-handlebars": "^3.0.0",
    "method-override": "^3.0.0",
    "mocha-sql": "0.0.6",
    "moment": "^2.22.2",
    "mysql": "^2.16.0",
    "nodemon": "^1.18.3",
    "passport": "^0.4.0"
  }
  ```

# FILE STRUCTUE - MVP pattern
  1. Model - A place to define data structures and methods to interact with your data store. The schema files will go in here for the model
  2. VIews - A place to manage everything the end user sees on his or her screen. This is where all the handlebar files are placed.
  3. Controllers -  A place to take user requests, bring data from the model and pass it back to the view. This is basically where all your routes go.

  ```
  database <---ORM<--->Model <--->Controller ----> Views ----> Browser
                                    ^                            |
                                    |                            |
                                    |                            |
                                    |                            |
                                    -----------------------------
  ```
  * config/
    * prod.js
    * dev.js
    * key.js
    * passport.js
    * ORM.js
  * Controllers/
    * apiRoute.js
    * authRoute.js
    * clientRoute.js
  * database/
    * attendance.sql
    * attendanceSchema.sql
  * helper/
    * auth.js
    * hbs.js
  * Models/
    * connection.js
  * public/
    * css/
      * style.css
    * image/
    * javascript/
  * test/
  * Views/
    * features/
      * attendanceReport.handlebars
    * index/
      * welcome.handlebars
      * contact.handlebars
    * layouts/
      * main.handlebars
    * parent stories
      * mychild.handlebars
    * partials/
      * _footer.handlebars
      * _navbar.handlebars
      * _breadcrumb.handlebars
    * student_stories
      * mypage.handlebars
    * teacher_stories
      * attendance.handlebars
      * quizzes.handlebars
  * xml/...
  * package.json
  * [readme](https://github.com/kb2232/TechInSchool/blob/master/readme.md)
  * server.js

# Testing