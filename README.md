# Mildy interesting days

What mildly interesting day falls on your birthday? [Click the :birthday: to find out!](https://mildly-interesting-days.herokuapp.com)

## Getting started

There isn't really a purpose for this :joy: I was bored. I needed something to do. Went on Reddit [(/r/unpopularopinion)](https://www.reddit.com/r/unpopularopinion/comments/83fq7o/these_national_day_days_are_annoying_it_seems/), rest is history.

### What's your stack bro?

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MaterializeCSS](https://materializecss.com/)

### How to use it

1.  Click on the date
2. Select your birthday or something
3. Hit `Submit`
4. Magic?! :sparkles::sparkles::sparkles:

### How it works

1. When you hit `Submit`, you make an HTTP POST request. Now, what does that POST request contain? It contains a string with the **day**, a single space and the **month**
2. That string is placed in a variable (date)
3. The `.match(/\S+/g)` is used on the `date` variable to remove that ~~disgusting~~ whitespace :stuck_out_tongue_closed_eyes:. It also turns it into an array with the first item being the month and the second item the day.
4. Then those array items are put into corresponding variables (month and day, obviously :joy:)
5. The `.toLowerCase()` method is used on the month variable
6. The `.findOne()` function (provided by the Mongoose models) is executed to fetch a mongoose query object from our MongoDB database. That query object contains the **day**, the **month** and the **name** of the day (a.k.a. what mildly interesting thing is celebrated)
7. Then you're redirected to  `/show/month/day`
8. Because you're redirected, you automatically make an HTTP GET request for the show page of that particular date
9. Have a :taco: 'cause that's it!

________________
[Follow me on Instagram](https://www.instagram.com/georgioucostantinos/) :wink:
