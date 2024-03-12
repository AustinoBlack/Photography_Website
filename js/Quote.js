$(document).ready(function() {

    var quotes = [
        'If you want to achieve greatness stop asking for permission. ' +
        '~Anonymous',
        'Things work out best for those who make the best of how things work out. ~John Wooden',
        'To live a creative life, we must lose our fear of being wrong. ~Anonymous',
        'If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn',
        'Trust because you are willing to accept the risk, not because its safe or certain. ~Anonymous'
    ]

    var random_number = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[random_number];
    console.log(quotes[random_number]);
});