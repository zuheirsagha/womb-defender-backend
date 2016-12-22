Instructions to Download Dependencies and Run the Server

Dependencies:

NPM and NodeJS >= 6.2.2
  If you dont have NPM/NodeJS install both here: https://nodejs.org/en/

Postgres (for Mac):
  If you dont have Postgres.app, you can install it here: http://postgresapp.com/

Steps to set up for local (# are comments):
1. run 'npm install' #this downloads all the saved dependencies from package.json

2. Make sure Postgres.app is on (you should see an elephant in the top bar)

3. run 'knex migrate:latest' #this runs the database migration on your local psql database

4. To start the server, run 'npm start'

5. Can now go to 0.0.0.0:2420 in a browser and you're in the baseUrl of the server

6. Control-C to exit the server.
