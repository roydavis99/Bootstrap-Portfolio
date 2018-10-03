//Used in the portfolio html to generate the cards on the fly.

//Create Objects that hold the information about the name, image, description, git repository, and the working link

function cardFactory() {
    var me = this;

    var projects = [
        {
            name: "Hang Man",
            image: "./assets/images/Hangman.jpg",
            description: "Movie themed Hang Man game!  Test you knowledge of different movies. Demonstrates how to catch and use user input.",
            git: "https://github.com/roydavis99/Word-Guess-Game",
            link: "https://roydavis99.github.io/Word-Guess-Game",
        },
        {
            name: "RPG Game",
            image: "./assets/images/RPG-Game.jpg",
            description: "Star Wars themed RPG. Demonstrates the use of objects and maintaining the objects value through arrays.",
            git: "https://github.com/roydavis99/unit-4-game",
            link: "https://roydavis99.github.io/unit-4-game",
        },
        {
            name: "Trivia Game",
            image: "./assets/images/Trivia-Game.jpg",
            description: "Test you knowledge on this trivia game. Demonstrates the use of timers and API's for questions.",
            git: "https://github.com/roydavis99/TriviaGame",
            link: "https://roydavis99.github.io/TriviaGame",
        } ,
        {
            name: "Musical Mappy",
            image: "./assets/images/map.jpg",
            description: "Explore the world and find music! Group project where we combined our skills to create a web app using data bases and API's",
            git: "https://github.com/marquiwarqui/PROJECT-1",
            link: "https://marquiwarqui.github.io/PROJECT-1/",
        } 
    ]

    /* 
        <div class="card">
                    <img class="card-img-top" src="./assets/images/Hangman.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Hangman</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://roydavis99.github.io/Word-Guess-Game/" class="btn btn-primary">Hangman</a>
                        <a href="https://github.com/roydavis99/Word-Guess-Game" class="btn btn-primary float-right">Git</a>
                    </div>
                </div>
    */

    var createCards = function () {
        projects.forEach(project => {
            var col = $("<div class='col-md-6'>");

            var card = $("<div class='card m-1'>");
            var image = $("<img class='card-img-top'>");
            var body = $("<div class='card-body'>");
            var title = $("<h5 class='card-title'>");
            var p = $("<p>");
            var git = $("<a class='btn btn-primary float-right'>Git</a>");
            var link = $("<a class='btn btn-primary'>Link</a>");

            git.attr("href", project.git);
            link.attr("href", project.link);
            p.text(project.description);
            title.text(project.name);
            image.attr("src", project.image);
            image.width(250);
            image.height(250);
            card.css({
                "min-width": "300px"
            });

            body.append(title, p, link, git);
            card.append(image, body);
            col.append(card);

            $("#projects").append(col);
        });
    }
    me.createCards = createCards;

    return me;
}

$(document).ready(function () {
    cards = new cardFactory();

    cards.createCards();
});