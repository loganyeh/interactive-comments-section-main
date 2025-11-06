// DOM ELEMENTS
const timeline = document.getElementById("timeline")

// VARIABLES
let isTweet = true;
let isReply = true;
let isComment = true; 

// FUNCTIONS

// CALLS
let count = 1;
const num = 5;
for(let i = 0; i < num; i++){
    const post = document.createElement(`div`);
    post.id = `tweet-${count}`;
    post.className = `h-1/6 w-5/6 m-3 rounded border-2 border-red-600`;
    post.textContent = `TWEET`;
    timeline.appendChild(post);
    count++;
};

// SANDBOX