# Covid-19 Travel App

## Intro:
---
- mention node needs to be installed and git

## Set up:
---
### <span style="text-decoration: underline;">Pulling Repo and Installing Dependencies:</span>
First things first. If you want to pull this repo down onto your local machine, you should start by forking this repo on to your GitHub account, then copying the new URL, and finally inputting into your terminal:

```http
git clone [URL_here]
```

After the repo has been successfully added onto your machine, type the command:

```http
cd Covid-19-Travel-App
```
Followed by the command:

```http
npm install
```
This will install all the needed dependencies and dev dependencies on to the repo.

### <span style="text-decoration: underline">Running Tests:</span>

The unit tests for the api are located on the path:

```http
Covid-19-Travel-App/backend/__tests__/
```
The only file within this directory is the api.test.ts which tests each endpoint that has been created for the api.

To run the tests, run the command:
```http
npm test
```
## Structure:
---
The project is structured in two repo's. This half of the project is the back end, the other half can be found here: [INSERT_URL_HERE].

Within this repository, all code that relates to the back end can be found in the "backend" directory.

All files in the root are for configuration purposes, information purposes, or for relevant packages to be run.

The only files contained within the "backend" directory are app.ts and listen.ts. These files are for routing the relevant CRUD requests and to activate the server on a local PORT, respectively.

The first sub-directory is the __tests__ directory which houses the app.test.ts file which covers the majority of endpoints for this project. To run the tests folow the command above this section.

Next is the controllers sub-directory. This directory is home to all the controllers for each of the relevant routes that are used, either by a user of internally by the team. The files are categorised by the relevant router that has been established.

After the controllers directory is thte db directory. This houses everything relevant to the database. The Data which is then seperated into test and dev data with files for Users and Countries, with a generic export file. Within the development data directory, we have a convertToJson file, as we came across standardised data problems, and this was the easiest way to resolve these issues. We'd drop the countries collection and then would post all the data back in using Insomnia.

The db also contains the connection.ts file, seed.ts, run-seed.ts within the seed sub-sub-directory. This allows us to establish a connection to MongoDB that is either hosted locally, or on the cloud. And if it is hosted locally, it will switch to either test or dev data depending on what is being run, automatically. The seed file populates the database as we need each time it is run, and run-seed executes the seeding function.

After the dense db directory, is the errors directory. This has one file which is our custom error handling for the app should anything go wrong. This allows us to control the information that we give to the user to help protect the database from malicious intent.

Following up is the models sub-directory. This houses all the models, by the router used, to manipulate and adapt the information that is required by our database. After it has done so, it will pass all control back to the controllers.

Lastly, there is the routers directory. This is where the requests are handled after app.ts has received the request. It will direct the requests down the relevant path, if the request is valid. Otherwise it will emit a status 500 error.

## How to use:
---
There are 3 ways to use this program...

The first is to run it locally on your machine. If this is what you plan to do, you must have MongoDB installed on your local machine.

Here is a good website to get MongoDB installed locally: [URL_HERE_FOR_MONGO].

Next, once you have finished all these steps and you can access mongo by typing "mongo" on you Command Line. Type the following command in the root of your directory:

```html
npm run init_db
```

This will build the relevant databases and collections for the rest of this project to run smoothly.

After this, if you open a program like Insomnia, and start the database using...

```html
npm run listen
```

This will set the program to listen for your requests. Lastly, in Input box at the top, type in: localhost://7000.

This will allow you to connect locally to the program, and you can begin using the api as you want.

A second option to access the API is by using the app. If you go here [URL_HERE], you can get this repo and access the front end portion of the application. This connects to the hosted back end.

Lastly, you can use Insomnia to connect to the hosted version of this. If you copy and paste the following link into the search bar, you can make your desired requests to the DB: https://covid-travel-app-21.herokuapp.com/api

## Finishing off:
---
A final word on the project. I have personally enjoyed building this app with my team mates. It's presented a fun challenge for all of us to put our newly acquired dev skills into practice.

We had a plethora of ideas to build upon this app including:
- Adding more than just European countries into the database,
- Adding functionality for live updates,
- Adding a review/social aspect for people to share details about their trip and precautions institutions were taking to prevent the spread of Covid-19,
- Adding travel capabilities from more than the UK for those who want to go to multiple countries in 1 trip,
- Automatic archiving so that any current trips would be moved into past trips once the returning date had expired,

Overall, I'm proud of this project, and our team that built it. I hope that it showcases to you the skills that we have learnt during our coding journey.