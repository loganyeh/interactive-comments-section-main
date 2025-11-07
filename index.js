// ----- DOM ELEMENTS ----- 

// VARIABLES

// EVENT LISTENERS

// FUNCTIONS

// CALLS
// WHEN ADDING OTHER TWEETS PUT THE IMAGES AND TWEETS USERNAMES INTO THE ARRAY AND
// ITERATE THROUGH THAT

let count = 1;
for(let i=0;i<1;i++){
    // TIMELINE CONTAINER ---------------------------------
    const timeline = document.getElementById("timeline");

    // TWEET CONTAINER ------------------------------------
    const tweet = document.createElement(`div`);
    tweet.id = "tweet";
    tweet.className = "h-44 w-5/6 grid grid-rows-13 grid-cols-13 mt-3 p-4 rounded-xl bg-white shadow-md";
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
    username.className = "row-start-2 row-end-4 col-start-4 col-end-7 -ml-2 font-bold cursor-pointer hover:underline z-10 overflow";
    username.textContent = "amyrobson";
    tweet.appendChild(username);

    // DATE 
    const date = document.createElement("div");
    date.id = "date";
    date.className = "row-start-2 row-end-4 col-start-7 col-end-10 -ml-11 text-gray-500 z-10 overflow";
    date.textContent = `${count} month ago`;
    count++;
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

    // REPLY COMMENT CONTAINER -------------------------------
    const replyCommentContainer = document.createElement("div");
    replyCommentContainer.id = "reply-comment-container";
    replyCommentContainer.className = "h-44 w-5/6 grid grid-rows-13 grid-cols-13 mt-3 p-4 rounded-xl bg-white shadow-md";
    timeline.appendChild(replyCommentContainer);

    // PROFILE IMG 
    const replyProfileImgContainer = document.createElement("div");
    replyProfileImgContainer.id = "reply-profile-img";
    replyProfileImgContainer.className = "row-start-2 row-end-6 col-start-1 col-end-2";
    const replyProfileImg = document.createElement("img");
    replyProfileImg.id = "reply-profile-img";
    replyProfileImg.className = "h-full w-full";
    replyProfileImg.src = "images/avatars/image-juliusomo.png";
    replyProfileImgContainer.appendChild(replyProfileImg);
    replyCommentContainer.appendChild(replyProfileImgContainer);

    // ----------------------------------------------------------------

    // DOM ELEMENTS

    // EVENT LISTENERS
    username.addEventListener("click", () => {
        console.log("clicked username... visiting profile");
    });
    replyImg.addEventListener("click", () => {
        console.log("clicked reply button");
    });

    // FUNCTIONS

    // CALLS

    // SANDBOX




}

// SANDBOX
