# Ex-Tracker

## [Live Demo](https://ex-tracker-4ddb9.firebaseapp.com/)

## This app is used to track my 'exs'. The user is able to search for names or addresses (such as 'Chic-Fil-A' or '6500 Charlotte Pike') via a search box. The user can also filter by the time of day my ex usually frequents those locations. Using jQuery over vanilla JavaScript, the functionality is basic, but important.

## Technology
- HTML5
- CSS3
- JavaScript/ES6
- jQuery/Bootstrap
- Node.JS/Grunt/Browserify
- Firebase (database)

## Screenshots
This the page after loading. You can see a photo of my 'ex' with some information about her. Below, there are cards showing locations my ex frequents. If you click on the 'details' button, the name, address and a link to the location on Google maps pops up. At the bottom of the screen is a fixed-footer that allows the user to search by time of day or by a specific search term.

![On page load](https://raw.githubusercontent.com/amillion3/ex-tracker/master/images/screenshots/on-load.png)
___

Detail of the location card. On the second card, you can see what the pop-up looks like. The pop-up also contains the exs that frequent these locations.

![alt text](https://raw.githubusercontent.com/amillion3/ex-tracker/master/images/screenshots/popover.png)
___

In this screenshot, we see that the user has searched for `taco`. The only matching card is Taco Bell, which is now the only card shown.

![Search funtionality](https://raw.githubusercontent.com/amillion3/ex-tracker/master/images/screenshots/search.png)
___

In this screenshot, the user has filtered by time of day, selecting the Morning button. The 4 cards shown are all locations my ex frequents in the morning.

![Time of day filtering](https://raw.githubusercontent.com/amillion3/ex-tracker/master/images/screenshots/button-time.png)
___


Here, the user has clicked on one of my exs profiles. This will clear the screen and show all the locations/times my ex goes there. There is a back button for the user to return to the main page.

![Time of day filtering](https://raw.githubusercontent.com/amillion3/ex-tracker/master/images/screenshots/clicked-ex.png)
___

## Running The Project
1. Clone down this repo and CD into project.
2. Install the [http-server](https://www.npmjs.com/package/http-server) plugin via [npm](https://www.npmjs.com/).
3. CD into the `lib` directory and run `npm install` via command line.
4. In the `lib` directory run the command `grunt`.
5. CD to the root of the directory and type `hs` to start the local http-server.
6. The terminal will give you a URL, such as `http://127.0.0.1:8081`, enter that address into your web browser.


## Contributors
[Andy Million](https://github.com/amillion3)
