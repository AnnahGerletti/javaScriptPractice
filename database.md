# Database flow work

### Web Challenge Website

1. Tables 
- Users table (primary table)
- Code challenges
- Results table 

2. data types needed 
- **Integer** - id's, a rating of difficulty
- **varchar (64)** - limits the amount of characters can use for phone # or name.
- **text** - good for emails, write code challenges in this way
- **binary/ text** - passwords
- **blob** - for small DB but use up to much space if save photos in Data base. 
- **date time** - time stamped when it was submited
- **boolean** - Y/N has something been entered

### Table Schema


| __Users__ | 
|-----------|
| id        | 
| language_id| 
| name      |
| email     |
| pw hash   |
|           |

| __codeChallenge__ | 
|-------------------|
|id               | 
|languageId       | 
|difficulty       |
|text of challenge|
|   |
|           |

| __results__ | 
|------------------|
| id       | 
| codeChallenge_id| 
| user_id      |
| submitted      |
| passed/failed     |
| date   |
|           |

# Schema Logic
### Think about an approch to finding out: 

1. Who has completed the most challenges successfully?
- From the results table, use the user_id to render the users who have submitted passing challenges (passed in any language). Compaire the amount of passed challenges, take that user_id link back to User table to find info on that user.    
 
2. What was the last successful completed challenge for a user?
- Use the users table to find a specific user, connect to the results table find the last passing challenge id, take that challenge id and render it from the codeChallenge table

3. How to log in a user
- match the email or name, with the associated hash 
4. Retrieve a list of challenges for a programming language
5. The names of the people that have completed the last 10 challenges successfully
6. The newest code challenge created for a programming language
7. The number of code challenges for each programming language