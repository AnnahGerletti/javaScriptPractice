# Database workflow

### What kind of DB would you need for a Web Challenge Website?

1. Tables 
- Users table (primary table)
- Code challenges
- Results table 

2. Querying a DataBase (SQL)
- select, update, insert, delete
- count()
- order by()

3. data types needed 
- **Integer** - id's, a rating of difficulty
- **varchar (64)** - limits the amount of characters can use for phone # or name.
- **text** - good for emails, write code challenges in this way
- **binary/ varchar** - password hash
- **blob** - for small DB but use up to much space if save photos in Data base. 
- **datetime** - time stamped when it was submited
- **boolean** - Y/N has something been entered

### Table Schema


| __Users__ | 
|--------------|
| id        | 
| language_id| 
| name      |
| email     |
| pw hash   |
| dateCreated|
| completedChallenges| 

| __codeChallenge__ | 
|-------------------|
|id               | 
|languageId       | 
|difficulty       |
|textOfChallenge|
|dateCreated|

| __results__ | 
|------------------|
| id       | 
| codeChallenge_id| 
| user_id      |
| submitted      |
| successful     |
| dateSubmited  |
|           |

# Schema Logic
### Think about an approch to finding out: 

1. Who has completed the most challenges successfully?
  - reference the completed challenges field of the user table, sort through users to find most user who completed the most.  

2. What was the last successful completed challenge for a user?
  - Use the users table to find a specific user, connect to the results table find the last passing challenge id, take that challenge id and render it from the codeChallenge table

3. How to log in a user
  - match the email or name, with the associated hash 

4. Retrieve a list of challenges for a programming language
  - reference the codeChallenge table, using the languageId find all the code challenge text associted with that language Id.  

5. The names of the people that have completed the last 10 challenges successfully
  - results table find all the instences where there are 10 consecutive passing challenges, now take the user_id to link to the users table to find the names of the ppl who completed the last 10 challenges successfully.

6. The newest code challenge created for a programming language
  - code challenge table, would use the languageId and the date created to find the specific newest code challenge. 

7. The number of code challenges for each programming language
  - Codechallenge table, divide up challenges by each language, using count() to count challengeId find out how many there are of each. 