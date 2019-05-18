
const quotes =[
    {
        quote : "Push yourself because no one else is going to do it for you",
        author: "me"
    },
    {
        quote: "Happiness depends on each person. If you think you are happy, then you must be happy.",
        author:"Sakata Gintoki"
    },
    {
        quote: "There’s no short-cut to becoming strong. Even if you try to look strong on the outside, that thin layer will soon fall off.",
        author: " Shimura Shinpachi"
    },
    {
        quote:" If you run into a wall and pretend it doesn’t exist, you’ll never make progress. The wall will never change, so you’re the one who has to change.",
        author:" Hijikata Toshiro"
    }
    {
        quote:"You have to keep doing it. No matter how difficult it gets",
        author: "Saitama"
    },
    {
        quote: "Human beings are strong because we have the ability to change ourselves",
        author: "Saitama"
    },
    {
        quote: "I'm not stupid, I'm just lazy to show you how smart I am.",
        author: "Oreki Shiro"
    },
    {
        quote: "Stay strong. Make them wonder how you're still smiling",
        author:"Saitama"
    },

];
 
function getRandomQuote(){
    const randomNumber = getRandomNumber();
    const quoteObject = quotes[randomNumber];
    setElement(quoteObject)
}

function getRandomNumber() {
    return Math.floor (Math.random()* quotes.length);
}
function setElement(quoteObject){
    document.getElementById("quote").innerHTML = quoteObject.quote;
    document.getElementById ("author").innerHTML=quoteObject.author;

}


