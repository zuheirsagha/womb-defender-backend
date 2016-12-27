Instructions to Download Dependencies and Run the Server

Dependencies:

NPM and NodeJS >= 6.2.2
  If you dont have NPM/NodeJS install both here: https://nodejs.org/en/

Postgres (for Mac):
  If you dont have Postgres.app, you can install it here: http://postgresapp.com/

Steps to set up for local (# are comments):
1. run 'npm install' #this downloads all the saved dependencies from package.json

2. Make sure Postgres.app is on (you should see an elephant in the top bar)

3. Type 'psql' to open the local database.

4. Type '\list' or '\l' to check your local databases. wd is currently not present.

5. Type 'CREATE DATABASE wd;' to create the database WD for migration.

6. Type '\q' to exit.

7. run 'knex migrate:latest' #this runs the database migration on your local psql database

8. To start the server, run 'npm start'

9. Can now go to 0.0.0.0:2420 in a browser and you're in the baseUrl of the server

10. Control-C to exit the server.
