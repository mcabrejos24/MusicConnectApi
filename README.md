# Playlist Pair

Playlist Pair is a project I wanted to do to solve the problem of people not being able to share playlists when they have different music services. Now, with this project, users are able to sync up their gym, work, etc. type of playlists with their friends that use another platform.

An alternative way of using the project is for when you are switching services yourself. If you decide to go from Spotify to Apple, or vice-versa, then you can use this project to move each of your playlists over with ease.

Playlist Pair is accessible at [playlistpair.com]

The backend of the project is accessible at [Playlist Pair API].

## Getting Started

This project uses [git], [node] and [nvm]. Make sure these are all downloaded for your appropriate machine before continuing.

To start, run:
```
nvm use
```
so that the appropriate node version is used. In your terminal, you might have errors saying that you need to install the different node version. Follow the instructions on there to use the correct node version.

Next, run:
```
npm install
```
This will install of our project's dependencies. You don't need to run 'npm install' each time you exit your project and start working again but you might need to run 'nvm use' each time if your local machine isn't set up to default to this project's node version.

Once this is done, the project is ready to run.

## Running the website locally

If you are coming from the "Getting Started" section above, you can skip this step and move on to the next. If not, then run:
```
nvm use
```
Make sure to run this each time if your local machine isn't set up to default to this project's node version.

Before we can run our project though, you will need to add a '.env' file to the project root directory with specific environment variables. To access these variables, reach out to the project administrator.

Once that is added, then you are ready to run the project locally.

To start the project locally, run:
```
npm start
```
This will start the development server.

A window will open in your browser showing the project in development mode.

To stop the development server, PRESS:
```
ctrl-c
```

If you want to run a production mode version of this locally, then run:
```
npm run build
```
Your terminal will then show you a command to run:
```
serve -s build
```
This will allow you to see the site in production mode.

## Running and Adding Tests

To run tests, run:
```
npm run test
```
This will run all of the tests in the project.

To add tests, navigate to the '\__tests\__' folder under the 'src' folder. In here you can add component tests or scenes (pages) tests.

This project uses [jest] and [enzyme] for rendering tests.

## Contributing

If you would like to contribute to this project, branch off from the master branch and name your branches accordingly:

- new features: feature/
- bug fixes: fix/
- simple updates: chore/
- 
Once you make your changes on your new brach, commit and submit a pull request.

Tests will run against your changes. If they do not pass, read the log to see why they failed. If they pass then request a review from @mcabrejos24.

Once a review has been submitted and approved, you may merge the pull request.

Merged pull requests are automatically deployed to production. Wait about 5 - 10 minutes before checking for changes in production.

This project is hosted on [netlify] and can be accessed here at [netlify playlistpair].

Note, you will need to have a netlify account and be a member of the project on netlify to access it.

Message the proejct administrator for access.

[playlistpair.com]: https://playlistpair.com
[Playlist Pair API]: https://github.com/mcabrejos24/Playlist_Pair_API
[git]: https://git-scm.com/downloads
[node]: https://nodejs.org/en/download/
[nvm]: https://github.com/nvm-sh/nvm#installation-and-update
[jest]: https://jestjs.io/
[enzyme]: https://enzymejs.github.io/enzyme/
[netlify]: https://www.netlify.com/
[netlify playlistpair]: https://app.netlify.com/sites/playlistpair/overview
