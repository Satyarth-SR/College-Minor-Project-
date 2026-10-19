const chatlist = document.querySelector(".chat-list")
const chatItem = document.querySelectorAll(".chat-item");
const chatWindow = document.querySelector(".chat-window");
const backBtn = document.querySelector(".chat-window-header i");
const logoutBtn = document.querySelector(".logout-btn");


const logoutButton = () => {
    window.location.href = "login.html"
}

logoutBtn.addEventListener("click", logoutButton);



// for Mobile
const openchatWindow = () => {
    if (window.innerWidth <= 480) {
        chatlist.style.display = "none"
        chatWindow.style.display = "flex"
    }
};

const closechatWindow = () => {
    chatWindow.style.display = "none"
    chatlist.style.display = "flex"
}

chatItem.forEach((item) => {
    item.addEventListener("click", openchatWindow);
});

backBtn.addEventListener("click",  closechatWindow);




// --------------------------------------------------------------------------------------------

// const chatlist = document.querySelector(".chat-list");
// const chatItem = document.querySelectorAll(".chat-item");
// const chatWindow = document.querySelector(".chat-window");
// const backBtn = document.querySelector(".chat-window-header i");

// const openchatWindow = () => {
//     if (window.innerWidth <= 480) {
//         chatlist.classList.add("hidden");
//         chatWindow.classList.add("active");
//     }
// };

// const closechatWindow = () => {
//     chatWindow.classList.remove("active");
//     chatlist.classList.remove("hidden");
// };

// chatItem.forEach((item) => {
//     item.addEventListener("click", openchatWindow);
// });

// backBtn.addEventListener("click", closechatWindow);
