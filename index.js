// ----- DOM ELEMENTS ----- 
const timeline = document.getElementById("timeline")
    // UPVOTE CONTAINER DOM ELEMENTS
    const upvoteContainer = document.getElementById("upvote-container");
    const upvote = document.getElementById("upvote");
    const totalUpvotes = document.getElementById("total-upvotes");
    const downvote = document.getElementById("downvote");

// VARIABLES
let isTweet = true;
let isReply = true;
let isComment = true; 
let currentUpvotes = Number(totalUpvotes.innerText);

// EVENT LISTENERS
upvote.addEventListener("click", () => {
    console.log("upvote listener clicked");
    upvoteTick();
});
downvote.addEventListener("click", () => {
    console.log("downvote listener clicked");
    downvoteTick();
});

// FUNCTIONS
function upvoteTick(){
    totalUpvotes.innerHTML = `
        ${currentUpvotes++}
    `
}
function downvoteTick(){
    totalUpvotes.innerHTML = `
        ${currentUpvotes--}
    `
}

// CALLS
let count = 1;
const num = 5;
// for(let i = 0; i < num; i++){
//     const post = document.createElement(`div`);
//     post.id = `tweet-${count}`;
//     post.className = `h-1/6 w-5/6 grid grid-rows-4 grid-cols-4 m-3 rounded border-2 border-red-600`;
//     post.textContent = `TWEET`;
//     timeline.appendChild(post);
//     count++;
// };

// SANDBOX
