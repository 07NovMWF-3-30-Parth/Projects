let truth = [
    "What's the last lie you told?",
    "What was the most embarrassing thing you've ever done on a date?",
    "Have you ever accidentally hit something (or someone!) with your car?",
    "Name someone you've pretended to like but actually couldn't stand.",
    "What's your most bizarre nickname?",
    "What's been your most physically painful experience?",
    "What bridges are you glad that you burned?",
    "What's the craziest thing you've done on public transportation?",
    "If you met a genie, what would your three wishes be?",
    "If you could write anyone on Earth in for President of the United States, who would it be and why?",
    "What's the meanest thing you've ever said to someone else?",
    "What's the craziest thing you've done in front of a mirror?",
    "What's the meanest thing you've ever said about someone else?",
    "What's something you love to do with your friends that you'd never do in front of your partner?",
    "Who are you most jealous of?",
    "What do your favorite pajamas look like?",
    "Have you ever faked sick to get out of a party?",
    "Who's the oldest person you've dated?",
    "How many selfies do you take a day?",
    "How many times a week do you wear the same pants?",
    "Would you date your high school crush today?",
    "Where are you ticklish?",
    "Do you believe in any superstitions? If so, which ones?",
    "What's one movie you're embarrassed to admit you enjoy?",
    "When's the last time you apologized? What for?",
    "Where do most of your embarrassing odors come from?",
    "Have you ever cheated on a partner?",
    "Boxers or briefs?",
    "Have you ever peed in a pool?",
    "What's the weirdest place you've ever grown hair?",
    "If you were guaranteed to never get caught, who on Earth would you murder?",
    "What's the cheapest gift you've ever gotten for someone else?",
    "What app do you waste the most time on?",
    "What's the weirdest thing you've done on a plane?",
    "How many gossip blogs do you read a day?",
    "What is the youngest age partner you'd date?",
    "Have you ever picked your nose in public?",
    "Have you ever lied about your age?",
    "If you had to delete one app from your phone, which one would it be?",
    "What's your most embarrassing late-night purchase?",
    "What's the longest you've gone without showering?",
    "Have you ever used a fake ID?",
];

let dare = [
    "Show the most embarrassing photo on your phone",
    "Show the last five people you texted and what the messages said",
    "Let the rest of the group DM someone from your Instagram account",
    "Eat a raw piece of garlic",
    "Do 100 squats",
    "Keep three ice cubes in your mouth until they melt",
    "Say something dirty to the person on your left",
    "Give a foot massage to the person on your right",
    "Put 10 different available liquids into a cup and drink it",
    "Yell out the first word that comes to your mind",
    "Like the first 15 posts on your Facebook newsfeed",
    "Eat a spoonful of mustard",
    "Keep your eyes closed until it's your go again",
    "Send a text to the last person in your phonebook",
    "Empty out your wallet/purse and show everyone what's inside",
    "Pretend to be the person to your right for 10 minutes",
    "Eat a snack without using your hands",
    "Say two honest things about everyone else in the group",
    "Try and make the group laugh as quickly as possible",
    "Tell everyone an embarrassing story about yourself",
    "Try to lick your elbow",
    "Post the oldest selfie on your phone on Instagram Stories",
    "Tell the saddest story you know",
    "Howl like a wolf for two minutes",
    "Dance without music for two minutes",
    "Let someone else tickle you and try not to laugh",
    "Put as many snacks into your mouth at once as you can"
];
// console.log(Math.random(x));
// console.log(Math.floor(x));
// console.log(x.length);

// let res = Math.floor(Math.random() * truth.length);
// console.log(res);
// let random = truth[res];
// console.log(x[res])

// document.getElementById("display").innerText = random


function dTruth() {
    let res = Math.floor(Math.random() * truth.length);
    console.log(res)
    let random = truth[res];
    console.log(random)
    document.getElementById("display").innerText = random
}

function dDare() {
    let res = Math.floor(Math.random() * dare.length);
    let random = dare[res];
    document.getElementById("display").innerText = random
}