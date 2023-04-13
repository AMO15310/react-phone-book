<h1>React Phonebook Backend</h1> 
This is the backend for a React phonebook app. It is built using Node.js and Express.js and serves as the API for the phonebook app.

<h3>Getting Started</h3>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<h2>Prerequisites<h2>
Node.js
npm or yarn
<h3>Installing</h3>
Clone the repository

```
git clone https://github.com/AMO15310/react-phone-book.git
```

Navigate to the project directory

````
cd react-phone-book
```
Install dependencies

```
npm install
```
or
```

yarn install
```
Create a .env file based on the .env.example file and set the environment variables

Start the server

```
npm start
```
or
```
yarn start
```
The server should now be running on http://localhost:5000.

<h3>API Endpoints</h3>
GET /contacts
Returns an array of all the persons in the phonebook.

GET /contacts/:id
Returns the person with the specified ID.

POST /contacts
Creates a new person and adds it to the phonebook.

PUT /contacts/:id
Updates the person with the specified ID.

DELETE contacts/:id
Deletes the person with the specified ID.

<h3>Built With</h3>
Node.js
Express.js
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
````
