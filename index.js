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
let isClicked = false;

// EVENT LISTENERS
upvote.addEventListener("click", () => {
    upvoteTick();
});
downvote.addEventListener("click", () => {
    downvoteTick();
});

// FUNCTIONS
function upvoteTick(){
    isClicked = !isClicked;
    if(isClicked){
        currentUpvotes++;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        upvote.style.color = "orange";
    }
    else{
        currentUpvotes--;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        upvote.style.color = "#6B7280";
    }
}
function downvoteTick(){
    isClicked = !isClicked;
    if(isClicked){
        currentUpvotes--;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        downvote.style.color = "orange";
    }
    else{
        currentUpvotes++;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        downvote.style.color = "#6B7280";
    }
    
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
