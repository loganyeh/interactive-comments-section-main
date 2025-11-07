// ----- DOM ELEMENTS ----- 
const timeline = document.getElementById("timeline")

    // UPVOTE CONTAINER DOM ELEMENTS
    const upvoteContainer = document.getElementById("upvote-container");
    const upvote = document.getElementById("upvote");
    const totalUpvotes = document.getElementById("total-upvotes");
    const downvote = document.getElementById("downvote");

// REPLY BUTTON DOM 
const replyButton = document.getElementById("reply-button");

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
replyButton.addEventListener("click", () => {
    console.log("reply button clicked");
})

// FUNCTIONS
function upvoteTick(){
    isClicked = !isClicked;
    if(isClicked){
        currentUpvotes++;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        setTimeout(() => {
            totalUpvotes.style.color = "green";
        }, 12);
        setTimeout(() => {
            totalUpvotes.style.color = "#1E40AF";
        }, 1000);
        upvote.style.color = "orange";
    }
    else{
        currentUpvotes--;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        setTimeout(() => {
            totalUpvotes.style.color = "red";
        }, 12);
        setTimeout(() => {
            totalUpvotes.style.color = "#1E40AF";
        }, 1000);
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
        setTimeout(() => {
            totalUpvotes.style.color = "red";
        }, 12);
        setTimeout(() => {
            totalUpvotes.style.color = "#1E40AF";
        }, 1000);
        downvote.style.color = "orange";
    }
    else{
        currentUpvotes++;
        totalUpvotes.innerHTML = `
            ${currentUpvotes}
        `;
        setTimeout(() => {
            totalUpvotes.style.color = "green";
        }, 12);
        setTimeout(() => {
            totalUpvotes.style.color = "#1E40AF";
        }, 1000);
        downvote.style.color = "#6B7280";
    }
    
}

// CALLS
// WHEN ADDING OTHER TWEETS PUT THE IMAGES AND TWEETS USERNAMES INTO THE ARRAY AND
// ITERATE THROUGH THAT

for(let i=0;i<2;i++){
    // TWEET CONTAINER
    const tweet = document.createElement(`div`);
    tweet.id = "tweet";
    tweet.className = "h-52 w-5/6 grid grid-rows-13 grid-cols-13 mt-6 p-4 rounded-2xl bg-white shadow-md";
    timeline.appendChild(tweet);
    
    // UPVOTE/DOWNVOTE CONTAINER
    const upvoteContainer = document.createElement("div");
    upvoteContainer.id = "upvote container";
    upvoteContainer.className = "row-start-2 row-end-11 col-start-1 col-end-2 text-gray-50 bg-gray-200 rounded-lg";
    tweet.appendChild(upvoteContainer);

    const upvote = document.createElement("div");
    upvote.id = "upvote";
    upvote.className = "h-1/3 w-full flex justify-center items-center font-bold text-gray-500 rounded-t-lg hover:bg-gray-500 active:bg-gray-400 hover:text-gray-50 active:text-white cursor-pointer";
    upvote.textContent = "+";
    upvoteContainer.appendChild(upvote);

    const totalUpvotes = document.createElement("div");
    totalUpvotes.id = "total-upvotes";
    totalUpvotes.className = "h-1/3 w-full flex justify-center items-center font-bold text-blue-800";
    totalUpvotes.textContent = "12";
    upvoteContainer.appendChild(totalUpvotes);

    const downvote = document.createElement("div");
    downvote.id = "downvote";
    downvote.className = "h-1/3 w-full flex justify-center items-center font-bold text-gray-500 rounded-b-lg hover:bg-gray-500 active:bg-gray-400 hover:text-gray-50 active:text-white cursor-pointer";
    downvote.textContent = "-";
    upvoteContainer.appendChild(downvote);

    // PROFILE IMG
    const profileImg = document.createElement("div");
    profileImg.id = "profile-img";
    profileImg.className = "flex justify-center items-center row-start-2 row-end-4 col-start-2 col-end-4";
    tweet.appendChild(profileImg);
    const amyProfileImg = document.createElement("img");
    amyProfileImg.id = "profile-pic-1";
    amyProfileImg.className = "h-10 w-10 rounded-full";
    amyProfileImg.src = "images/avatars/image-amyrobson.png";
    profileImg.appendChild(amyProfileImg);

    // USERNAME
    const username = document.createElement("div");
    username.id = "username";
    username.className = "row-start-2 row-end-4 col-start-4 col-end-7 -ml-2 font-bold z-10 overflow";
    username.textContent = "amyrobson";
    tweet.appendChild(username);

    // DATE 
    const date = document.createElement("div");
    date.id = "date";
    date.className = "row-start-2 row-end-4 col-start-7 col-end-10 -ml-11 text-gray-500 z-10 overflow";
    date.textContent = "1 month ago";
    tweet.appendChild(date);

    // TEXT 
    const text = document.createElement("div");
    text.id = "text";
    text.className = "row-start-5 row-end-12 col-start-2 col-end-14 mt-2 pl-6 text-gray-500 overflow-y-visible"
    text.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quod atque magnam maiores, ipsam illo tempora, amet eaque provident neque exercitationem earum praesentium aliquam animi! Labore inventore rem error aut?"
    tweet.appendChild(text);

    // REPLY 
    const reply = document.createElement("div");
    reply.id = "reply";
    reply.className = "row-start-2 row-end-4 col-start-11 col-end-14 pr-2 text-right";
    tweet.appendChild(reply);
    // REPLY BUTTON
    const replyButton = document.createElement("button");
    replyButton.id = "reply-button";
    replyButton.className = "cursor-pointer pr-1";
    reply.appendChild(replyButton);
    const replyImg = document.createElement("img");
    replyImg.src = "images/icon-reply.svg";
    replyButton.appendChild(replyImg);
    // REPLY SPAN
    const replyText = document.createElement("span");
    replyText.id = "reply-text";
    replyText.className = "font-bold text-blue-900";
    replyText.textContent = "Reply";
    reply.appendChild(replyText);


}

// SANDBOX
