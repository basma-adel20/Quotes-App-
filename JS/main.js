
var quotes=[ {
    text:"You only live once, but if you do it right, once is enough.",
    writer:"Mae West"},
    {
    text:"Be the change that you wish to see in the world.",
    writer:"Mahatma Gandhi"},
    {
    text:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    writer:"Mahatma Gandhi"},
    {
    text:"I have not failed. I've just found 10,000 ways that won't work.",
    writer:"Thomas A. Edison"},
    {
    text:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    writer:"Albert Einstein"},
    {
    text:"It is never too late to be what you might have been.",
    writer:"George Eliot"},
    {
    text:"For every minute you are angry you lose sixty seconds of happiness.",
    writer:"Ralph Waldo Emerson"},
    {
    text:"We don't see things as they are, we see them as we are.",
    writer:"Anaïs Nin"}, ];



var current_num = 0;

function printQuote() {
    var rand_num = Math.floor(Math.random() * 9);
    while(rand_num==current_num){
        rand_num = Math.floor(Math.random() * 9);
    }
    var quote = quotes[rand_num];
    var text ="\""+quote.text+"\"";
    var writer = "-- "+quote.writer;
    document.getElementById("quote").innerHTML=text;
    document.getElementById("writer").innerHTML=writer;
    current_num = rand_num;
}