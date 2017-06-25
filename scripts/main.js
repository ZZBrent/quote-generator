function showQuote() {
    var index = Math.floor(Math.random() * 20);
    switch (index) {
        case 0: randQuote = "<p><i>We look forward to the time when the Power of Love will replace the Love of Power. Then will our world know the blessings of peace.</i></p><h3 style = 'text-align: right'>-William Ewart Gladstone</h3>";
            break;
        case 1: randQuote = "<p><i>When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy.” They told me I didn’t understand the assignment, and I told them they didn’t understand life.</i></p><h3 style = 'text-align: right'>-Anonymous</h3>";
            break;
        case 2: randQuote = "<p><i>Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it’s the only thing that ever has.</i></p><h3 style = 'text-align: right'>-Margaret Mead</h3>";
            break;
        case 3: randQuote = "<p><i>People are illogical, unreasonable, and self-centered. Love them anyway.</i></p><h3 style = 'text-align: right'>-Kent M. Keith</h3>";
            break;
        case 4: randQuote = "<p><i>The next time you’re faced with something that’s unexpected, unwanted and uncertain, consider that it just may be a gift.</i></p><h3 style = 'text-align: right'>-Stacey Kramer</h3>";
            break;
        case 5: randQuote = "<p><i>To avoid criticism, say nothing, do nothing, be nothing.</i></p><h3 style = 'text-align: right'>-Fred Shero</h3>";
            break;
        case 6: randQuote = "<p><i>If opportunity doesn’t knock, build a door.</i></p><h3 style = 'text-align: right'>-Milton Berle</h3>";
            break;
        case 7: randQuote = "<p><i>I believe in the sacredness of a promise, that a man’s word should be as good as his bond; that character — not wealth or power or position — is of supreme worth.</i></p><h3 style = 'text-align: right'>-John D. Rockefeller (JR.)</h3>";
            break;
        case 8: randQuote = "<p><i>I don’t feel threatened by people who ask questions. It’s those who refuse to answer them that frighten me.</i></p><h3 style = 'text-align: right'>-Jason Bacchetta</h3>";
            break;
        case 9: randQuote = "<p><i>All our dreams can come true, if we have the courage to pursue them.</i></p><h3 style = 'text-align: right'>-Walt Disney</h3>";
            break;
        case 10: randQuote = "<p><i>As a well-spent day brings happy sleep, so a life well spent brings happy death.</i></p><h3 style = 'text-align: right'>-Leonardo Da Vinci</h3>";
            break;
        case 11: randQuote = "<p><i>Courage is contagious. When a brave man takes a stand, the spines of others are stiffened.</i></p><h3 style = 'text-align: right'>-Billy Graham</h3>";
            break;
        case 12: randQuote = "<p><i>Patience is something you admire in the driver behind you, but not in one ahead.</i></p><h3 style = 'text-align: right'>-Bill McGlashen</h3>";
            break;
        case 13: randQuote = "<p><i>Not everything that can be counted counts, and not everything that counts can be counted.</i></p><h3 style = 'text-align: right'>-William Bruce Cameron</h3>";
            break;
        case 14: randQuote = "<p><i>I never took a day off in my twenties. Not one.</i></p><h3 style = 'text-align: right'>-Bill Gates</h3>";
            break;
        case 15: randQuote = "<p><i>Perfection is not attainable, but if we chase perfection we can catch excellence.</i></p><h3 style = 'text-align: right'>-Vince Lombardi</h3>";
            break;
        case 16: randQuote = "<p><i>What lies behind us and what lies before us are tiny matters compared to what lies within us.</i></p><h3 style = 'text-align: right'>-Henry S. Haskins</h3>";
            break;
        case 17: randQuote = "<p><i>How wonderful it is that nobody need wait a single moment before beginning to improve the world.</i></p><h3 style = 'text-align: right'>-Anne Frank</h3>";
            break;
        case 18: randQuote = "<p><i>Waiting for perfect is never as smart as making progress.</i></p><h3 style = 'text-align: right'>-Seth Godin</h3>";
            break;
        case 19: randQuote = "<p><i>It is the mark of an educated mind to be able to entertain a thought without accepting it.</i></p><h3 style = 'text-align: right'>-Aristotle</h3>";
    }
    document.getElementById("quote").innerHTML = randQuote;
    document.getElementById("getQuote").innerHTML = "Next quote>";
    var textArray1 = randQuote.split(">");
    randQuote = textArray1[2].slice(0, -3);
    randQuote = randQuote + " " + textArray1[5].slice(0, -4);
    textArray1 = randQuote.split(" ");
    randQuote = textArray1.join("+");
    document.getElementById("click").innerHTML = `<button id='tweetQuote' onClick=(tweet(randQuote))>Tweet it!</button>`;
}

function tweet(randQuote) {
    randQuote = 'https://twitter.com/intent/tweet?text=' + randQuote
    window.open(randQuote);
}