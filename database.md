#Database flow work

### Web Challenge Website

1. Tables 
- Users table (primary table)
- Code challenges
- Results table 

2. data types needed 
- Integer - id's, a rating of difficulty
- varchar (64) - limits the amount of characters can use for phone # or name.
- text - good for emails, write code challenges in this way
- binary/ text - passwords
- Blob - for small DB but use up to much space if save photos in Data base. 
- Date time - time stamped when it was submited
- boolean - Y/N has something been entered

### Table Schema

/***
| __Users__ | 
|-----------|
| ID        | 
|language_id| 
| Name      |
| email     |
| pw hash   |
|           |
***/

/***
| __Animals__ | __Sports__ | __Fruits__ |
|-------------|------------|------------|
| Cat         | Soccer     | Apple      |
| Dog         | Basketball | Orange     |
***/