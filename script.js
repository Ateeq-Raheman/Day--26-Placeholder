const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.querySelector("#profile_img");
const profile_img_img = document.createElement("img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getdata, 1500);

function getdata() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Header Image" />';
    title.innerHTML = "Lorem ipsum dolor sit amet.";
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
    profile_img_img.src = "https://randomuser.me/api/portraits/men/45.jpg";
    profile_img_img.alt = "profile image";
    profile_img.appendChild(profile_img_img);
    name.innerHTML = "John";
    date.innerHTML = "Oct 12, 2024";
    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
