
// GLOBAL VARIABLES
const timeline = document.getElementById("timeline");
const defaultUserProfiles = [
    {id: 1, username: "Nick", profilePicture: "images/avatars/image-juliusomo.png", datePosted: "3 years ago"},
    {id: 2, username: "Broussard", profilePicture: "images/avatars/image-amyrobson.png", datePosted: "2 years ago"},
    {id: 3, username: "Wildes", profilePicture: "images/avatars/image-maxblagun.png", datePosted: "2 years ago"},
    {id: 4, username: "Greg", profilePicture: "images/avatars/image-ramsesmiron.png", datePosted: "1 year ago"},
];
const newUserProfiles = [
    {id: 5, username: "Lamar", profilePicture: "images/avatars/image-amyrobson.png", datePosted: "Week 8"},
    {id: 6, username: "Allen", profilePicture: "images/avatars/image-juliusomo.png", datePosted: "Week 3"},
    {id: 7, username: "Stafford", profilePicture: "images/avatars/image-maxblagun.png", datePosted: "Week 2"},
    {id: 8, username: "Baker", profilePicture: "images/avatars/image-ramsesmiron.png", datePosted: "BYE Week"},
];
let tweetCounter = 0;
// const [num1, num2] = randomNumGenerator();
    // TIMELINE ARRAY
const tweetsArray = [
    () => createTweet(defaultUserProfiles[0].id, defaultUserProfiles[0].username, defaultUserProfiles[0].profilePicture, defaultUserProfiles[0].datePosted),
    () => subTweet(defaultUserProfiles[1].profileTwitterID, defaultUserProfiles[1].username, defaultUserProfiles[1].profilePicture, defaultUserProfiles[1].datePosted),
    () => createTweet(defaultUserProfiles[2].profileTwitterID, defaultUserProfiles[2].username, defaultUserProfiles[2].profilePicture, defaultUserProfiles[2].datePosted),
    () => subTweet(defaultUserProfiles[3].profileTwitterID, defaultUserProfiles[3].username, defaultUserProfiles[3].profilePicture, defaultUserProfiles[3].datePosted),
]

tweetsArray.forEach((fn) => {
    fn();
});

// MAIN (REGULAR) FUNCTIONS
function createTweet(profileTwitterID, profileUsername, profilePicture, datePosted){
    tweetCounter++;

    // TWEET CONTAINER ------------------------------------
    const tweet = document.createElement(`div`);
    tweet.id = `tweet-${tweetCounter}`;
    tweet.className = "h-44 w-5/6 grid grid-rows-13 grid-cols-13 mt-3 p-4 rounded-xl bg-white shadow-md";
    timeline.appendChild(tweet);
                    
    // UPVOTE/DOWNVOTE CONTAINER
    addUpvotingSystem(tweet);
    // PROFILE IMG
    addProfilePicture(tweet, profilePicture);
    // USERNAME
    addUsername(tweet, profileUsername);
    const username = addUsername(tweet, profileUsername);
    userNameClick(username);
    // DATE 
    addDate(tweet, datePosted);
    // TEXT 
    addTwitterText(tweet);
    // REPLY 
    addReplyTextField(tweet);
    const replyButton = addReplyTextField(tweet);
    replyClick(replyButton, tweet.id);

    console.log(`TWEET#: ${tweet.id}`);
    // RETURN TWEET ID

}
function subTweet(profileTwitterID, profileUsername, profilePicture, datePosted){
    tweetCounter++;

    // QUOTE TWEET CONTAINER
    const quoteTweetContainer = document.createElement("div");
    timeline.appendChild(quoteTweetContainer);
    quoteTweetContainer.id = `quote-tweet-${tweetCounter}`;
    quoteTweetContainer.className = "h-44 w-5/6 flex justify-end mt-6 rounded-2xl";
    // QUOTE TWEET CONTAINER BORDER
    const quoteTweetContainerBorder = document.createElement("div");
    quoteTweetContainer.appendChild(quoteTweetContainerBorder);
    quoteTweetContainerBorder.id = "quote-tweet-container-border";
    quoteTweetContainerBorder.className = "h-44 w-11/12 flex justify-end border-l-2 border-gray-200";
    // TWEET CONTAINER
    const tweet = document.createElement(`div`);
    tweet.id = `tweet-${tweetCounter}`;
    tweet.className = "h-full w-11/12 grid grid-rows-13 grid-cols-13 p-4 rounded-2xl bg-white shadow-md";
    quoteTweetContainerBorder.appendChild(tweet);
    
    // UPVOTE/DOWNVOTE CONTAINER
    addUpvotingSystem(tweet);
    // PROFILE IMG
    addProfilePicture(tweet, profilePicture);
    // USERNAME
    addUsername(tweet, profileUsername);
    const username = addUsername(tweet, profileUsername);
    userNameClick(username);
    // DATE 
    addDate(tweet, datePosted);
    // TEXT 
    addTwitterText(tweet);
    // REPLY 
    addReplyTextField(tweet);
    const replyButton = addReplyTextField(tweet);
    replyClick(replyButton, tweet.id);

    console.log(`TWEET#: ${tweet.id}`);
    
}
function createReply(){
    tweetCounter++;

    // REPLY COMMENT CONTAINER -------------------------------
    const replyCommentContainer = document.createElement("div");
    replyCommentContainer.id = `reply-comment-container-${tweetCounter}`;
    replyCommentContainer.className = "h-40 w-5/6 grid grid-rows-13 grid-cols-13 mt-3 p-4 rounded-xl bg-white shadow-md";
    timeline.appendChild(replyCommentContainer);

    // PROFILE IMG 
    const replyProfileImgContainer = document.createElement("div");
    replyProfileImgContainer.id = "reply-profile-img";
    replyProfileImgContainer.className = "row-start-2 row-end-6 col-start-1 col-end-2";
    const replyProfileImg = document.createElement("img");
    replyProfileImg.id = "reply-profile-img";
    replyProfileImg.className = "h-full w-full object-contain";
    replyProfileImg.src = `${defaultUserProfiles[tweetCounter % 4].profilePicture}`;
    replyProfileImgContainer.appendChild(replyProfileImg);
    replyCommentContainer.appendChild(replyProfileImgContainer);

    // REPLY SECTION
    const replySection = document.createElement("div");
    replySection.id = "reply-section";
    replySection.className = "row-start-2 row-end-12 col-start-2 col-end-12";
    replyCommentContainer.appendChild(replySection);
    const textReply = document.createElement("input");
    textReply.type = "text";
    textReply.style.cursor = "autofocus";
    textReply.id = "comment-box";
    textReply.className = "h-full w-full ml-1 text-gray-500 rounded-xl border border-gray-500 focus:border-red-600";
    textReply.placeholder = "Add a comment...";
    replySection.appendChild(textReply);

    // SEND BUTTON
    const sendButton = document.createElement("div");
    sendButton.id = "send-button";
    sendButton.className = "row-start-2 row-end-7 col-start-12 col-end-14 overflow-visible";
    replyCommentContainer.appendChild(sendButton);
    const sendReplyButton = document.createElement("button");
    sendReplyButton.id = "send-reply-button";
    sendReplyButton.className = "h-full w-full ml-2 font-bold text-white bg-blue-900 rounded-xl cursor-pointer";
    sendReplyButton.textContent = "SEND";
    sendButton.appendChild(sendReplyButton);
}

// SMALL FUNCTIONS
function randomNumGenerator(){
    const min = 0;
    const max = 4;
    let x = 0;
    let y = 0;
    x = Math.floor(Math.random() * max - min + min) + min;
    y = Math.floor(Math.random() * max - min + min) + min;

    return [x, y];
}

// HELPER FUNCTIONS
function addUpvotingSystem(tweetContainer){
    // UPVOTE/DOWNVOTE CONTAINER
    const upvoteContainer = document.createElement("div");
    upvoteContainer.id = "upvote container";
    upvoteContainer.className = "row-start-2 row-end-11 col-start-1 col-end-2 text-gray-50 bg-gray-200 rounded-lg";
    tweetContainer.appendChild(upvoteContainer);

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
}
function addProfilePicture(tweetContainer, profilePicture){
    // PROFILE IMG
    const profileImg = document.createElement("div");
    profileImg.id = "profile-img";
    profileImg.className = "flex justify-center items-center row-start-2 row-end-4 col-start-2 col-end-4";
    tweetContainer.appendChild(profileImg);
    const amyProfileImg = document.createElement("img");
    amyProfileImg.id = "profile-pic-1";
    amyProfileImg.className = "h-10 w-10 rounded-full";
    // amyProfileImg.src = "images/avatars/image-amyrobson.png";
    amyProfileImg.src = `${profilePicture}`;
    profileImg.appendChild(amyProfileImg);
}
function addUsername(tweetContainer, profileUsername){
    const username = document.createElement("div");
    username.id = "username";
    username.className = "row-start-2 row-end-4 col-start-4 col-end-7 font-bold cursor-pointer hover:underline z-10 overflow";
    username.textContent = `${profileUsername}`;
    tweetContainer.appendChild(username);

    return username;
}
function addDate(tweetContainer, datePosted){
    // VARIABLES
    let dateCounter = 1;

    // DATE 
    const dateDiv = document.createElement("div");
    dateDiv.id = "datePosted";
    dateDiv.className = "row-start-2 row-end-4 col-start-7 col-end-10 text-gray-500 z-10 overflow";
    dateDiv.textContent = `${datePosted}`;
    dateCounter++;
    tweetContainer.appendChild(dateDiv);
}
function addTwitterText(tweetContainer){
    // TEXT 
    const text = document.createElement("div");
    text.id = "text";
    text.className = "row-start-5 row-end-12 col-start-2 col-end-14 mt-2 pl-6 text-gray-500 overflow-y-visible"
    text.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quod atque magnam maiores, ipsam illo tempora, amet eaque provident neque exercitationem earum praesentium aliquam!"
    tweetContainer.appendChild(text);
}
function addReplyTextField(tweetContainer){
    // REPLY 
    const reply = document.createElement("div");
    reply.id = "reply";
    reply.className = "row-start-2 row-end-4 col-start-11 col-end-14 pr-2 text-right";
    tweetContainer.appendChild(reply);

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

    return replyButton;
}

// EVENT LISTENERS
function userNameClick(username){
    username.addEventListener("click", () => {
        console.log("clicked username... visiting profile");
    });
}
let isClickedReply = false;

function replyClick(reply, id){
    let isClicked = false;

    reply.addEventListener("click", () => {
        isClicked = !isClicked;
        console.log("clicked reply button");
        const tweetID = Number(id.slice(6));

        const [num1, num2] = randomNumGenerator();
        let username = defaultUserProfiles[num1].username;
        let profilePicture = defaultUserProfiles[num2].profilePicture;

        if(isClicked){
            tweetsArray.push(() => createTweet(username, profilePicture));
            tweetsArray[tweetsArray.length - 1]();
            console.log(tweetsArray);
        }
        else{
            tweetsArray.pop();
            
            timeline.innerHTML = ``;
            tweetCounter = 0;
            count = 1;
            tweetsArray.forEach((fn) => {
                fn();
            });
            console.log(tweetsArray);
        }

    });
}


