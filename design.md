# The Story - First MVP -- Lot of work
  *  **Teaching facing**
  ```
    A teacher logs into the page with his school email ONLY. He has the ability to take attendance of his students at any time during the day. The teacher can then create a quiz of his style. Upon submitting the quiz, he should be able to give his students a code. The students go on the website, enter the code and take the timed quiz. 
    In essence: Teacher : take attendance - create quiz.
  ```
  *  **Parent Facing**
  ```
    A mother should be able to log into the website with her personal email. She should have the ability to enter her son's full name and unique id. Upon entering son's information, his progress report should be displayed. A graph of his weekly attendance record and quiz grades. Mom should be able to send EMAIL to the teacher of that particular class.
    In essence: Mom: see son's person progress - send email to teacher of class.
  ```
  * **student facing**
  ```
    A student logs into the the page with his school email ONLY - he his able to see his progress report, which contains attendance and quiz grade.
    In essence: Student: see his progress report 
  ```
#  **Main Functionality** 
  1.	Take Attendance Multiple times
  2.	Create and Take Quiz 
  3.	Summary of each child per attendance and quiz result
  4.	student, teacher and parent login.
  5.	Navigation of page after loggin in per student, parent and teaher
  6.  Robust Database to access all above information

# Acceptance minimum requirement for anyone who takes number 5(Navigation of page after loggin in per student, parent and teaher) above - the navigation
  * designing
    1. Create a wireframe that explains what happen after **user** logs-in.
    2. By **user** - i mean, how should the page look if the user is a:
      - student
      - parent
      - teacher
    3. The wireframe should show how a parent can send email contact to the teachers of his/her student.
        In essence, it should explain each navigation.
  * building 
    1. Build each views handlebar structure per **user**
    2. More information is availble via speaking with Ronak or Kunle.

# Acceptance minimum requirement for Robust Database to access all above information.
  1. The structure most follow the pattern below
   ```
  database <---ORM<--->Model <--->Controller ----> Views ----> Browser
                                    ^                            |
                                    |                            |
                                    |                            |
                                    |                            |
                                    -----------------------------
  ORM must talk to database and model. More information is available in file structure.
  You must use SEQUALIZE for the ORM.
  Please write the queries to be able to do everything accessible in this document. Speak to Kunle for more info.
  ```
  2. Do NOT build it on your local machine only. Directly - connect it heroku using JawsDB package. Set up all the keys in heroku and make sure all is working before creating on local machine.

  *  **Minimum Information required**
    * Student table must have :
      * first and last name, 
      * email address must be school's email NOT personal, Email should be unique.
      * age, 
      * password(try to encrypt - no mandatory if you cant)
      * student ID number (MUST BE UNIQUE 8 digits)
    * Attendance info:
      * ability to mark present
      * ability to mark absent 
      * ability to mark late
      * abilty to leave a comment (optional)
    * score card for quiz infor:
      * ability to submit scores per quiz per student (quiz id number(should be unique), quiz name, student name, whatever is below)
      * submit correct questions per quiz
      * submit wrong questions per quiz
      * total time it took to take quiz
    * Parent info:
      * name
      * personal email (unique - two parents should not have same exact email)
      * password (encrypted)
      * house address (optional)
      * note you will need to reference this to the child per email
    * Teacher info:
      * name
      * school email (must be school email)
      * password (encrypted)
      * The I.D of the classes they teach (unique)
    * Classes
      * name of class
      * i.d of class
      * name of teacher who teaches class
      * students in class

# Acceptable requirements for Attendance
  1. teacher should be able to take attendance multiple times during day.
  2. the design should be seemless: think of mobile first approach. 
  3. this is its own views page
  4. upon coming to this page - teachers should see their classes and be able to select it and take   attendance.

# Acceptable requirements for Create and Take Quiz 
  1. teacher should be able to create a timed quiz such that when time goes off, quiz stops. 
  2. Upon creating the quiz, a unique code should be generated such that quiz can be taken by anyone who have the code.
  3. Once the time goes off - student should not be able to restart quiz. 
  4. if student finish early, he or she can press done and quiz will stop.
  5. Upon submitting the quiz, a score should be sent to database attached with student name. The database should also store number of question gotten right and wrong and total time it took.
  6. this is its own views page

# Acceptable requirements for Summary of each child per attendance and quiz result
  1. Parent facing:
    - when parent logs in, he/she should be able to enter childs name and unique id. Loggin does not give you access to any student. The child's unique id ought to be entered.
    - Upon enter the child's info - progress report of quiz and attendance should be displayed seemlessly.
    - parent should be able to send email to teacher of the particular class.
  2. Teacher facing: 
    - should be able to see all of his classes, select a class and students roster will show up seemlessly, select a student from the list.
    - upon selecting the student, progress report of quiz and attendance should be displayed seemlessly.
  3. Student facing:
    - upon loggin in with email and password - progress report of quiz and attendance should be displayed seemlessly.

# Acceptable minimum requirements for student, teacher and parent login.
  1. Teacher facing:
    - upon loggin in with school email ONLY and password, the view page must be unique to teachers ONLY. 
    - All teachers view page must be identical with the exception of the classes and students they teach.
  2. Parent facing:
    - upon loggin with personal email and password, view page should be identical to other parents view page.
  3. Student facing:
    - log in with student email and password ONLY
    - the view page should be similar to other students.

# WORK FLOW AND DISTRIBUTION
  * 
  ```
    It would be best if each person is in charge of their own task. Doing it this way will give you freedom of your code and full responsibility. We can do this.
  ```
  * KUNLE BABATUNDE (create your branch)
    - (4) student, teacher and parent login.
    - (2) Create and Take Quiz 
    - Extra: MVP file structure, temporary filenaming so everyone will know where to upload there information. Controlling MASTER BRANCH
  * MICHEAL KIM (create your branch)
    - (1) Take Attendance Multiple times
  * RONAK RAY(create your branch)
    - (3) Summary of each child per attendance and quiz result
  * SEAN KIM (create your branch)
    - (6) Robust Database to access all above information
  * YESENIA (create your branch)
    - (5) Navigation of page after loggin in per student, parent and teaher