var mongoose = require("mongoose");
var MInDay  = require("../models/minday");

var data = [
    {
        name: "Bloody Mary", 
        day: "1",
        month: "january"
    },
    {
        name: "Buffet", 
        day: "2",
        month: "january"
    },
    {
        name: "Chocolate-Covered Cherry", 
        day: "3",
        month: "january"
    },
    {
        name: "Hypnotism", 
        day: "4",
        month: "january"
    },
    {
        name: "Whipped Cream", 
        day: "5",
        month: "january"
    },
    {
        name: "Cuddle Up", 
        day: "6",
        month: "january"
    },
    {
        name: "Old Rock", 
        day: "7",
        month: "january"
    },
    {
        name: "Earth's Rotation", 
        day: "8",
        month: "january"
    },
    {
        name: "Static Electricity", 
        day: "9",
        month: "january"
    },
    {
        name: "Cut Your Energy Costs", 
        day: "10",
        month: "january"
    },
    {
        name: "Learn Your Name in Morse Code", 
        day: "11",
        month: "january"
    },
    {
        name: "Kiss A Ginger", 
        day: "12",
        month: "january"
    },
    {
        name: "Rubber Duckie", 
        day: "13",
        month: "january"
    },
    {
        name: "International Kite", 
        day: "14",
        month: "january"
    },
    {
        name: "Strawberry Ice Cream", 
        day: "15",
        month: "january"
    },
    {
        name: "International Hot and Spicy Food", 
        day: "16",
        month: "january"
    },
    {
        name: "Ditch New Year's Resolutions", 
        day: "17",
        month: "january"
    },
    {
        name: "Museum Selfie", 
        day: "18",
        month: "january"
    },
    {
        name: "Popcorn", 
        day: "19",
        month: "january"
    },
    {
        name: "Cheese Lovers", 
        day: "20",
        month: "january"
    },
    {
        name: "International Sweatpants", 
        day: "21",
        month: "january"
    },
    {
        name: "Hot Sauce", 
        day: "22",
        month: "january"
    },
    {
        name: "Handwriting", 
        day: "23",
        month: "january"
    },
    {
        name: "Talk Like A Grizzled Prospector", 
        day: "24",
        month: "january"
    },
    {
        name: "Opposite", 
        day: "25",
        month: "january"
    },
    {
        name: "Peanut Brittle", 
        day: "26",
        month: "january"
    },
    {
        name: "Chocolate Cake", 
        day: "27",
        month: "january"
    },
    {
        name: "Kazoo", 
        day: "28",
        month: "january"
    },
    {
        name: "Puzzle", 
        day: "29",
        month: "january"
    },
    {
        name: "Bubble Wrap Appreciation", 
        day: "30",
        month: "january"
    },
    {
        name: "Backwards", 
        day: "31",
        month: "january"
    },
    {
    	name: "World Read Aloud",
    	day: "1",
    	month: "february",
    },
    {
    	name: "Work Naked",
    	day: "2",
    	month: "february",
    },
    {
    	name: "Eat Ice Cream for Breakfast",
    	day: "3",
    	month: "february",
    },
    {
    	name: "Homemade Soup",
    	day: "4",
    	month: "february",
    },
    {
    	name: "World Nutella",
    	day: "5",
    	month: "february",
    },
    {
    	name: "Frozen Yogurt",
    	day: "6",
    	month: "february",
    },
    {
    	name: "National Periodic Table",
    	day: "7",
    	month: "february",
    },
    {
    	name: "Kite Flying",
    	day: "8",
    	month: "february",
    },
    {
    	name: "Pizza",
    	day: "9",
    	month: "february",
    },
    {
    	name: "Umbrella",
    	day: "10",
    	month: "february",
    },
    {
    	name: "Don't Cry Over Spilled Milk",
    	day: "11",
    	month: "february",
    },
    {
    	name: "Charles Darwin",
    	day: "12",
    	month: "february",
    },
    {
    	name: "Madly In Love With Me",
    	day: "13",
    	month: "february",
    },
    {
    	name: "International Book Giving",
    	day: "14",
    	month: "february",
    },
    {
    	name: "Singles Awareness",
    	day: "15",
    	month: "february",
    },
    {
    	name: "Innovation",
    	day: "16",
    	month: "february",
    },
    {
    	name: "Random Act of Kindness",
    	day: "17",
    	month: "february",
    },
    {
    	name: "Drink Wine",
    	day: "18",
    	month: "february",
    },
    {
    	name: "International Tug-of-War",
    	day: "19",
    	month: "february",
    },
    {
    	name: "Love Your Pet",
    	day: "20",
    	month: "february",
    },
    {
    	name: "International Mother Language",
    	day: "21",
    	month: "february",
    },
    {
    	name: "Be Humble",
    	day: "22",
    	month: "february",
    },
    {
    	name: "Play Tennis",
    	day: "23",
    	month: "february",
    },
    {
    	name: "World Sword Swallower's",
    	day: "24",
    	month: "february",
    },
    {
    	name: "Chocolate-Covered Peanuts",
    	day: "25",
    	month: "february",
    },
    {
    	name: "Tell a Fairy Tale",
    	day: "26",
    	month: "february",
    },
    {
    	name: "No Brainer",
    	day: "27",
    	month: "february",
    },
    {
    	name: "Chocolate Soufflé",
    	day: "28",
    	month: "february",
    },
    {
    	name: "Leap Year",
    	day: "29",
    	month: "february",
    },
    {
    	name: "World Compliment",
    	day: "1",
    	month: "march",
    },
    {
    	name: "Dr. Seuss",
    	day: "2",
    	month: "march",
    },
    {
    	name: "What If Cats and Dogs Had Opposable Thumbs",
    	day: "3",
    	month: "march",
    },
    {
    	name: "March Forth and Do Something",
    	day: "4",
    	month: "march",
    },
    {
    	name: "Learn What Your Name Means",
    	day: "5",
    	month: "march",
    },
    {
    	name: "White Chocolate Cheesecake",
    	day: "6",
    	month: "march",
    },
    {
    	name: "Cereal",
    	day: "7",
    	month: "march",
    },
    {
    	name: "Proofreading",
    	day: "8",
    	month: "march",
    },
    {
    	name: "Get Over It",
    	day: "9",
    	month: "march",
    },
    {
    	name: "Awesomeness",
    	day: "10",
    	month: "march",
    },
    {
    	name: "Plumbing",
    	day: "11",
    	month: "march",
    },
    {
    	name: "Fanny Pack",
    	day: "12",
    	month: "march",
    },
    {
    	name: "Open An Umbrella Indoors",
    	day: "13",
    	month: "march",
    },
    {
    	name: "Pi",
    	day: "14",
    	month: "march",
    },
    {
    	name: "True Confessions",
    	day: "15",
    	month: "march",
    },
    {
    	name: "No Selfies",
    	day: "16",
    	month: "march",
    
    },
    {
    	name: "Saint Patrick’s",
    	day: "17",
    	month: "march",
    },
    {
    	name: "Awkward Moments",
    	day: "18",
    	month: "march",
    },
    {
    	name: "Read To Me",
    	day: "19",
    	month: "march",
    },
    {
    	name: "Day of Happiness",
    	day: "20",
    	month: "march",
    },
    {
    	name: "Common Courtesy",
    	day: "21",
    	month: "march",
    },
    {
    	name: "Goof Off",
    	day: "22",
    	month: "march",
    },
    {
    	name: "Puppy",
    	day: "23",
    	month: "march",
    },
    {
    	name: "Chocolate Covered Raisins",
    	day: "24",
    	month: "march",
    },
    {
    	name: "Waffle",
    	day: "25",
    	month: "march",
    },
    {
    	name: "Make Up Your Own Holiday",
    	day: "26",
    	month: "march",
    },
    {
    	name: "Whisk(e)y",
    	day: "27",
    	month: "march",
    },
    {
    	name: "Weed Appreciation",
    	day: "28",
    	month: "march",
    },
    {
    	name: "Smoke and Mirrors",
    	day: "29",
    	month: "march",
    },
    {
    	name: "Take A Walk In The Park",
    	day: "30",
    	month: "march",
    },
    {
    	name: "Eiffel Tower",
    	day: "31",
    	month: "march",
    },
    {
    	name: "Fun",
    	day: "1",
    	month: "april",
    },
    {
    	name: "Peanut Butter and Jelly",
    	day: "2",
    	month: "april",
    },
    {
    	name: "Party",
    	day: "3",
    	month: "april",
    },
    {
    	name: "Walk Around Things",
    	day: "4",
    	month: "april",
    },
    {
    	name: "Go For Broke",
    	day: "5",
    	month: "april",
    },
    {
    	name: "Caramel Popcorn",
    	day: "6",
    	month: "april",
    },
    {
    	name: "Pillow Fight",
    	day: "7",
    	month: "april",
    },
    {
    	name: "Draw a Picture of a Bird",
    	day: "8",
    	month: "april",
    },
    {
    	name: "Unicorn",
    	day: "9",
    	month: "april",
    },
    {
    	name: "Golfer’s",
    	day: "10",
    	month: "april",
    },
    {
    	name: "Pet",
    	day: "11",
    	month: "april",
    },
    {
    	name: "Walk On Your Wild Side",
    	day: "12",
    	month: "april",
    },
    {
    	name: "Scrabble",
    	day: "13",
    	month: "april",
    },
    {
    	name: "Look Up at the Sky",
    	day: "14",
    	month: "april",
    },
    {
    	name: "Take A Wild Guess",
    	day: "15",
    	month: "april",
    },
    {
    	name: "Wear Your Pajamas To Work",
    	day: "16",
    	month: "april",
    },
    {
    	name: "Blah Blah Blah",
    	day: "17",
    	month: "april",
    },
    {
    	name: "Piñata",
    	day: "18",
    	month: "april",
    },
    {
    	name: "Hanging Out",
    	day: "19",
    	month: "april",
    },
    {
    	name: "Volunteer Recognition",
    	day: "20",
    	month: "april",
    },
    {
    	name: "Creativity and Innovation",
    	day: "21",
    	month: "april",
    },
    {
    	name: "Earth",
    	day: "22",
    	month: "april",
    },
    {
    	name: "Talk Like Shakespeare",
    	day: "23",
    	month: "april",
    },
    {
    	name: "Pig In A Blanket",
    	day: "24",
    	month: "april",
    },
    {
    	name: "Hug A Plumber",
    	day: "25",
    	month: "april",
    },
    {
    	name: "Get Organized",
    	day: "26",
    	month: "april",
    },
    {
    	name: "Silence",
    	day: "27",
    	month: "april",
    },
    {
    	name: "Superhero",
    	day: "28",
    	month: "april",
    },
    {
    	name: "Dance",
    	day: "29",
    	month: "april",
    },
    {
    	name: "Jazz",
    	day: "30",
    	month: "april",
    },
    {
    	name: "Lei",
    	day: "1",
    	month: "may",
    },
    {
    	name: "Play Your Ukulele",
    	day: "2",
    	month: "may",
    },
    {
    	name: "Password",
    	day: "3",
    	month: "may",
    },
    {
    	name: "International Tuba",
    	day: "4",
    	month: "may",
    },
    {
    	name: "Hug A Shed And Take A Selfie",
    	day: "5",
    	month: "may",
    },
    {
    	name: "World Laughter",
    	day: "6",
    	month: "may",
    },
    {
    	name: "Cosmopolitan",
    	day: "7",
    	month: "may",
    },
    {
    	name: "World Donkey",
    	day: "8",
    	month: "may",
    },
    {
    	name: "Lost Sock Memorial",
    	day: "9",
    	month: "may",
    },
    {
    	name: "Stay Up All Night",
    	day: "10",
    	month: "may",
    },
    {
    	name: "Eat What You Want",
    	day: "11",
    	month: "may",
    },
    {
    	name: "Nutty Fudge",
    	day: "12",
    	month: "may",
    },
    {
    	name: "World Bellydance",
    	day: "13",
    	month: "may",
    },
    {
    	name: "Chicken Dance",
    	day: "14",
    	month: "may",
    },
    {
    	name: "Chocolate Chip",
    	day: "15",
    	month: "may",
    },
    {
    	name: "Drawing",
    	day: "16",
    	month: "may",
    },
    {
    	name: "World Telecommunications",
    	day: "17",
    	month: "may",
    },
    {
    	name: "No Dirty Dishes",
    	day: "18",
    	month: "may",
    },
    {
    	name: "May Ray",
    	day: "19",
    	month: "may",
    },
    {
    	name: "Pick Strawberries",
    	day: "20",
    	month: "may",
    },
    {
    	name: "I Need A Patch For That",
    	day: "21",
    	month: "may",
    },
    {
    	name: "Sherlock Holmes",
    	day: "22",
    	month: "may",
    },
    {
    	name: "Turtle",
    	day: "23",
    	month: "may",
    },
    {
    	name: "Tiara",
    	day: "24",
    	month: "may",
    },
    {
    	name: "Geek Pride",
    	day: "25",
    	month: "may",
    },
    {
    	name: "Paper Airplane",
    	day: "26",
    	month: "may",
    },
    {
    	name: "Sun Screen",
    	day: "27",
    	month: "may",
    },
    {
    	name: "Hamburger",
    	day: "28",
    	month: "may",
    },
    {
    	name: "Put A Pillow On Your Fridge",
    	day: "29",
    	month: "may",
    },
    {
    	name: "Water a Flower",
    	day: "30",
    	month: "may",
    },
    {
    	name: "Web Designer",
    	day: "31",
    	month: "may",
    },
    {
    	name: "Say Something Nice",
    	day: "1",
    	month: "june",
    },
    {
    	name: "Rocky Road",
    	day: "2",
    	month: "june",
    },
    {
    	name: "Repeat",
    	day: "3",
    	month: "june",
    },
    {
    	name: "Hug Your Cat",
    	day: "4",
    	month: "june",
    },
    {
    	name: "Hot Air Balloon",
    	day: "5",
    	month: "june",
    },
    {
    	name: "Yo-Yo",
    	day: "6",
    	month: "june",
    },
    {
    	name: "Chocolate Ice Cream",
    	day: "7",
    	month: "june",
    },
    {
    	name: "Best Friends",
    	day: "8",
    	month: "june",
    },
    {
    	name: "Donald Duck",
    	day: "9",
    	month: "june",
    },
    {
    	name: "Iced Tea",
    	day: "10",
    	month: "june",
    },
    {
    	name: "Corn On The Cob",
    	day: "11",
    	month: "june",
    },
    {
    	name: "Superman",
    	day: "12",
    	month: "june",
    },
    {
    	name: "International Axe Throwing",
    	day: "13",
    	month: "june",
    },
    {
    	name: "World Blood Donor",
    	day: "14",
    	month: "june",
    },
    {
    	name: "Flip-Flop",
    	day: "15",
    	month: "june",
    },
    {
    	name: "Fresh Veggies",
    	day: "16",
    	month: "june",
    },
    {
    	name: "Eat Your Vegetables",
    	day: "17",
    	month: "june",
    },
    {
    	name: "International Panic",
    	day: "18",
    	month: "june",
    },
    {
    	name: "Martini",
    	day: "19",
    	month: "june",
    },
    {
    	name: "World Productivit",
    	day: "20",
    	month: "june",
    },
    {
    	name: "Selfie",
    	day: "21",
    	month: "june",
    },
    {
    	name: "Positive Media",
    	day: "22",
    	month: "june",
    },
    {
    	name: "Let It Go",
    	day: "23",
    	month: "june",
    },
    {
    	name: "Pralines",
    	day: "24",
    	month: "june",
    },
    {
    	name: "Global Beatles",
    	day: "25",
    	month: "june",
    },
    {
    	name: "Chocolate Pudding",
    	day: "26",
    	month: "june",
    },
    {
    	name: "Sunglasses",
    	day: "27",
    	month: "june",
    },
    {
    	name: "Happy Heart Hugs",
    	day: "28",
    	month: "june",
    },
    {
    	name: "Camera",
    	day: "29",
    	month: "june",
    },
    {
    	name: "Meteor Watch",
    	day: "30",
    	month: "june",
    },
    {
    	name: "International Joke",
    	day: "1",
    	month: "july",
    },
    {
    	name: "World UFO",
    	day: "2",
    	month: "july",
    },
    {
    	name: "Compliment Your Mirror",
    	day: "3",
    	month: "july",
    },
    {
    	name: "Barbecue",
    	day: "4",
    	month: "july",
    },
    {
    	name: "Bikini",
    	day: "5",
    	month: "july",
    },
    {
    	name: "International Kissing",
    	day: "6",
    	month: "july",
    },
    {
    	name: "Tell The Truth",
    	day: "7",
    	month: "july",
    },
    {
    	name: "Chocolate with Almonds",
    	day: "8",
    	month: "july",
    },
    {
    	name: "Sugar Cookie",
    	day: "9",
    	month: "july",
    },
    {
    	name: "Piña Colada",
    	day: "10",
    	month: "july",
    },
    {
    	name: "World Population",
    	day: "11",
    	month: "july",
    },
    {
    	name: "Different Colored Eyes",
    	day: "12",
    	month: "july",
    },
    {
    	name: "Embrace Your Geekness",
    	day: "13",
    	month: "july",
    },
    {
    	name: "Mac & Cheese",
    	day: "14",
    	month: "july",
    },
    {
    	name: "Gummi Worm",
    	day: "15",
    	month: "july",
    },
    {
    	name: "Guinea Pig Appreciation",
    	day: "16",
    	month: "july",
    },
    {
    	name: "World Emoji",
    	day: "17",
    	month: "july",
    },
    {
    	name: "Hot Dog",
    	day: "18",
    	month: "july",
    },
    {
    	name: "Daiquiri",
    	day: "19",
    	month: "july",
    },
    {
    	name: "Space Exploration",
    	day: "20",
    	month: "july",
    },
    {
    	name: "Junk Food",
    	day: "21",
    	month: "july",
    },
    {
    	name: "Hammock",
    	day: "22",
    	month: "july",
    },
    {
    	name: "Sprinkle",
    	day: "23",
    	month: "july",
    },
    {
    	name: "Tequila",
    	day: "24",
    	month: "july",
    },
    {
    	name: "Thread The Needle",
    	day: "25",
    	month: "july",
    },
    {
    	name: "All or Nothing",
    	day: "26",
    	month: "july",
    },
    {
    	name: "Take Your Houseplant For A Walk",
    	day: "27",
    	month: "july",
    },
    {
    	name: "Milk Chocolate",
    	day: "28",
    	month: "july",
    },
    {
    	name: "Lipstick",
    	day: "29",
    	month: "july",
    },
    {
    	name: "Paperback Book",
    	day: "30",
    	month: "july",
    },
    {
    	name: "World Ranger",
    	day: "31",
    	month: "july",
    },
    {
    	name: "World Wide Web",
    	day: "1",
    	month: "august",
    },
    {
    	name: "Ice Cream Sandwich",
    	day: "2",
    	month: "august",
    },
    {
    	name: "Clean Your Floors",
    	day: "3",
    	month: "august",
    },
    {
    	name: "Sandcastle",
    	day: "4",
    	month: "august",
    },
    {
    	name: "Work Like a Dog",
    	day: "5",
    	month: "august",
    },
    {
    	name: "Wiggle Your Toes",
    	day: "6",
    	month: "august",
    },
    {
    	name: "Lighthouse",
    	day: "7",
    	month: "august",
    },
    {
    	name: "Happiness Happens",
    	day: "8",
    	month: "august",
    },
    {
    	name: "Rice Pudding",
    	day: "9",
    	month: "august",
    },
    {
    	name: "Lazy",
    	day: "10",
    	month: "august",
    },
    {
    	name: "Play In The Sand",
    	day: "11",
    	month: "august",
    },
    {
    	name: "Vinyl Record",
    	day: "12",
    	month: "august",
    },
    {
    	name: "International Lefthanders",
    	day: "13",
    	month: "august",
    },
    {
    	name: "Creamsicle",
    	day: "14",
    	month: "august",
    },
    {
    	name: "Relaxation",
    	day: "15",
    	month: "august",
    },
    {
    	name: "Rollercoaster",
    	day: "16",
    	month: "august",
    },
    {
    	name: "Black Cat Appreciation",
    	day: "17",
    	month: "august",
    },
    {
    	name: "Bad Poetry",
    	day: "18",
    	month: "august",
    },
    {
    	name: "International Bow",
    	day: "19",
    	month: "august",
    },
    {
    	name: "World Mosquito",
    	day: "20",
    	month: "august",
    },
    {
    	name: "Senior Citizens",
    	day: "21",
    	month: "august",
    },
    {
    	name: "Be An Angel",
    	day: "22",
    	month: "august",
    },
    {
    	name: "Ride the Wind",
    	day: "23",
    	month: "august",
    },
    {
    	name: "International Strange Music",
    	day: "24",
    	month: "august",
    },
    {
    	name: "Whisky Sour",
    	day: "25",
    	month: "august",
    },
    {
    	name: "Cherry Popsicle",
    	day: "26",
    	month: "august",
    },
    {
    	name: "Banana Lovers",
    	day: "27",
    	month: "august",
    },
    {
    	name: "Bow Tie",
    	day: "28",
    	month: "august",
    },
    {
    	name: "More Herbs, Less Salt",
    	day: "29",
    	month: "august",
    },
    {
    	name: "Frankenstein",
    	day: "30",
    	month: "august",
    },
    {
    	name: "Trail Mix",
    	day: "31",
    	month: "august",
    },
    {
    	name: "World Beard",
    	day: "1",
    	month: "september",
    },
    {
    	name: "Pet Rock",
    	day: "2",
    	month: "september",
    },
    {
    	name: "Skyscraper",
    	day: "3",
    	month: "september",
    },
    {
    	name: "College Colors",
    	day: "4",
    	month: "september",
    },
    {
    	name: "Be Late For Something",
    	day: "5",
    	month: "september",
    },
    {
    	name: "Fight Procrastination",
    	day: "6",
    	month: "september",
    },
    {
    	name: "Salami",
    	day: "7",
    	month: "september",
    },
    {
    	name: "Star Trek",
    	day: "8",
    	month: "september",
    },
    {
    	name: "Wonderful Weirdos",
    	day: "9",
    	month: "september",
    },
    {
    	name: "Boss/Employee Exchange",
    	day: "10",
    	month: "september",
    },
    {
    	name: "No News is Good News",
    	day: "11",
    	month: "september",
    },
    {
    	name: "Video Games",
    	day: "12",
    	month: "september",
    },
    {
    	name: "Programmers’",
    	day: "13",
    	month: "september",
    },
    {
    	name: "Hug Your Boss",
    	day: "14",
    	month: "september",
    },
    {
    	name: "International Eat An Apple",
    	day: "15",
    	month: "september",
    },
    {
    	name: "Collect Rocks",
    	day: "16",
    	month: "september",
    },
    {
    	name: "International Country Music",
    	day: "17",
    	month: "september",
    },
    {
    	name: "Cheeseburger",
    	day: "18",
    	month: "september",
    },
    {
    	name: "Talk Like A Pirate",
    	day: "19",
    	month: "september",
    },
    {
    	name: "Pepperoni Pizza",
    	day: "20",
    	month: "september",
    },
    {
    	name: "Miniature Golf",
    	day: "21",
    	month: "september",
    },
    {
    	name: "Doodle",
    	day: "22",
    	month: "september",
    },
    {
    	name: "Celebrate Bisexuality",
    	day: "23",
    	month: "september",
    },
    {
    	name: "Punctuation",
    	day: "24",
    	month: "september",
    },
    {
    	name: "Binge",
    	day: "25",
    	month: "september",
    },
    {
    	name: "Batman",
    	day: "26",
    	month: "september",
    },
    {
    	name: "Crush a Can",
    	day: "27",
    	month: "september",
    },
    {
    	name: "Ask A Stupid Question",
    	day: "28",
    	month: "september",
    },
    {
    	name: "Save Your Photos",
    	day: "29",
    	month: "september",
    },
    {
    	name: "Mud Pack",
    	day: "30",
    	month: "september",
    },
    {
    	name: "International Coffee",
    	day: "1",
    	month: "october",
    },
    {
    	name: "Name Your Car",
    	day: "2",
    	month: "october",
    },
    {
    	name: "Random Acts of Poetry",
    	day: "3",
    	month: "october",
    },
    {
    	name: "Ship in A Bottle",
    	day: "4",
    	month: "october",
    },
    {
    	name: "Balloons Around the World",
    	day: "5",
    	month: "october",
    },
    {
    	name: "Noodle",
    	day: "6",
    	month: "october",
    },
    {
    	name: "Frappe",
    	day: "7",
    	month: "october",
    },
    {
    	name: "World Octopus",
    	day: "8",
    	month: "october",
    },
    {
    	name: "Face Your Fears",
    	day: "9",
    	month: "october",
    },
    {
    	name: "Hug A Drummer",
    	day: "10",
    	month: "october",
    },
    {
    	name: "Coming Out",
    	day: "11",
    	month: "october",
    },
    {
    	name: "World Egg",
    	day: "12",
    	month: "october",
    },
    {
    	name: "No Bra",
    	day: "13",
    	month: "october",
    },
    {
    	name: "Be Bald And Free",
    	day: "14",
    	month: "october",
    },
    {
    	name: "Global Handwashing",
    	day: "15",
    	month: "october",
    },
    {
    	name: "Steve Jobs",
    	day: "16",
    	month: "october",
    },
    {
    	name: "Wear Something Gaudy",
    	day: "17",
    	month: "october",
    },
    {
    	name: "No Beard",
    	day: "18",
    	month: "october",
    },
    {
    	name: "Evaluate Your Life",
    	day: "19",
    	month: "october",
    },
    {
    	name: "International Sloth",
    	day: "20",
    	month: "october",
    },
    {
    	name: "Count Your Buttons",
    	day: "21",
    	month: "october",
    },
    {
    	name: "Caps Lock",
    	day: "22",
    	month: "october",
    },
    {
    	name: "Mole",
    	day: "23",
    	month: "october",
    },
    {
    	name: "United Nations",
    	day: "24",
    	month: "october",
    },
    {
    	name: "Punk for a Day",
    	day: "25",
    	month: "october",
    },
    {
    	name: "Howl At The Moon",
    	day: "26",
    	month: "october",
    },
    {
    	name: "Hug A Sheep",
    	day: "27",
    	month: "october",
    },
    {
    	name: "Plush Animal Lover’s",
    	day: "28",
    	month: "october",
    },
    {
    	name: "Internet",
    	day: "29",
    	month: "october",
    },
    {
    	name: "Haunted Refrigerator ",
    	day: "30",
    	month: "october",
    },
    {
    	name: "Magic",
    	day: "31",
    	month: "october",
    },
    {
    	name: "Go Cook For Your Pets",
    	day: "1",
    	month: "november",
    },
    {
    	name: "Men Make Dinner",
    	day: "2",
    	month: "november",
    },
    {
    	name: "Cliché",
    	day: "3",
    	month: "november",
    },
    {
    	name: "Use Your Common Sense",
    	day: "4",
    	month: "november",
    },
    {
    	name: "Gunpowder",
    	day: "5",
    	month: "november",
    },
    {
    	name: "Saxophone",
    	day: "6",
    	month: "november",
    },
    {
    	name: "Hug A Bear",
    	day: "7",
    	month: "november",
    },
    {
    	name: "Cappuccino",
    	day: "8",
    	month: "november",
    },
    {
    	name: "Chaos Never Dies",
    	day: "9",
    	month: "november",
    },
    {
    	name: "Vanilla Cupcake",
    	day: "10",
    	month: "november",
    },
    {
    	name: "International Tongue Twister",
    	day: "11",
    	month: "november",
    },
    {
    	name: "World Quality",
    	day: "12",
    	month: "november",
    },
    {
    	name: "World Kindness",
    	day: "13",
    	month: "november",
    },
    {
    	name: "Pickle",
    	day: "14",
    	month: "november",
    },
    {
    	name: "Clean Out Your Refrigerator",
    	day: "15",
    	month: "november",
    },
    {
    	name: "Have a Party with Your Bear",
    	day: "16",
    	month: "november",
    },
    {
    	name: "Take A Hike",
    	day: "17",
    	month: "november",
    },
    {
    	name: "Mickey Mouse",
    	day: "18",
    	month: "november",
    },
    {
    	name: "Have A Bad Day",
    	day: "19",
    	month: "november",
    },
    {
    	name: "Name Your PC",
    	day: "20",
    	month: "november",
    },
    {
    	name: "World Hello",
    	day: "21",
    	month: "november",
    },
    {
    	name: "Go For A Ride",
    	day: "22",
    	month: "november",
    },
    {
    	name: "Fibonacci",
    	day: "23",
    	month: "november",
    },
    {
    	name: "Celebrate Your Unique Talent",
    	day: "24",
    	month: "november",
    },
    {
    	name: "Shopping Reminder",
    	day: "25",
    	month: "november",
    },
    {
    	name: "Cake",
    	day: "26",
    	month: "november",
    },
    {
    	name: "Pins And Needles",
    	day: "27",
    	month: "november",
    },
    {
    	name: "French Toast",
    	day: "28",
    	month: "november",
    },
    {
    	name: "Throw Out Your Leftovers",
    	day: "29",
    	month: "november",
    },
    {
    	name: "Stay Home Because You’re Well",
    	day: "30",
    	month: "november",
    },
    {
    	name: "Day Without Art",
    	day: "1",
    	month: "december",
    },
    {
    	name: "Fritters",
    	day: "2",
    	month: "december",
    },
    {
    	name: "Roof Over Your Head",
    	day: "3",
    	month: "december",
    },
    {
    	name: "Wear Brown Shoes",
    	day: "4",
    	month: "december",
    },
    {
    	name: "International Ninja",
    	day: "5",
    	month: "december",
    },
    {
    	name: "Put On Your Own Shoes",
    	day: "6",
    	month: "december",
    },
    {
    	name: "Cotton Candy",
    	day: "7",
    	month: "december",
    },
    {
    	name: "Pretend To Be A Time Traveler",
    	day: "8",
    	month: "december",
    },
    {
    	name: "Techno",
    	day: "9",
    	month: "december",
    },
    {
    	name: "Lager",
    	day: "10",
    	month: "december",
    },
    {
    	name: "Have a Bagel",
    	day: "11",
    	month: "december",
    },
    {
    	name: "Gingerbread House",
    	day: "12",
    	month: "december",
    },
    {
    	name: "Violin",
    	day: "13",
    	month: "december",
    },
    {
    	name: "Lost & Found",
    	day: "14",
    	month: "december",
    },
    {
    	name: "Cupcake",
    	day: "15",
    	month: "december",
    },
    {
    	name: "Chocolate Covered Anything",
    	day: "16",
    	month: "december",
    },
    {
    	name: "Wright Brothers",
    	day: "17",
    	month: "december",
    },
    {
    	name: "Bake Cookies",
    	day: "18",
    	month: "december",
    },
    {
    	name: "Oatmeal Muffin",
    	day: "19",
    	month: "december",
    },
    {
    	name: "Sangria",
    	day: "20",
    	month: "december",
    },
    {
    	name: "Ugly Christmas Sweater",
    	day: "21",
    	month: "december",
    },
    {
    	name: "Date Nut Bread",
    	day: "22",
    	month: "december",
    },
    {
    	name: "Roots",
    	day: "23",
    	month: "december",
    },
    {
    	name: "Eggnog",
    	day: "24",
    	month: "december",
    },
    {
    	name: "Pumpkin Pie",
    	day: "25",
    	month: "december",
    },
    {
    	name: "Thank You Note",
    	day: "26",
    	month: "december",
    },
    {
    	name: "Make Cut-out Snowflakes",
    	day: "27",
    	month: "december",
    },
    {
    	name: "Card Playing",
    	day: "28",
    	month: "december",
    },
    {
    	name: "Tick Tock",
    	day: "29",
    	month: "december",
    },
    {
    	name: "Bacon",
    	day: "30",
    	month: "december",
    },
    {
    	name: "Champagne",
    	day: "31",
    	month: "december",
    }
];

function seedDB(){
   //Remove all campgrounds
   MInDay.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("cleared everything");
         //add a few campgrounds
         var i=1;
        data.forEach(function(seed){
            MInDay.create(seed, function(err, miday){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a day [", i, "]");
                    i++;
                }
            });
        });
    }); 
}

module.exports = seedDB;
