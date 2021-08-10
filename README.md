Simple web app panic responder web app:

First, make sure you have have NodeJS and PostgreSQL installed. Visit the PostgreSQL home page for more info and to download the install file.


Running project locally:

Hop into the project directory and install the dependencies:

    $ npm i
    $ cd client
	$ npm i

Create db 'aura' in Postgres sql DB either through pgAdmin or psql shell. 


Migrations. Run from root directory:
	$ npx sequelize-cli db:migrate 

Seeders(optional):
	$ npx sequelize-cli db:seed:all

More info on sequelize at:
https://sequelize.org/master/manual/migrations.html


Create/edit .env file, check sample.env. Edit the variables
	DB_PASSWORD,
	DB_USER,
	DB_NAME,
	DB_PORT,


Edit the development, test and production variables in ./config/config.json to your db connection params.


Then start the Webpack dev server and client. Run from the root directory of the project:
	$ npm run dev

