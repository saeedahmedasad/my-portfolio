//? FOR ABOUT SECTION
const tabLinkSkill = document.querySelector("#tab-link-skills");
const tabLinkExperience = document.querySelector("#tab-link-experience");
const tabLinkEducation = document.querySelector("#tab-link-education");

const tabContentSkill = document.querySelector("#tab-content-skill");
const tabContentExperience = document.querySelector("#tab-content-experience");
const tabContentEducation = document.querySelector("#tab-content-education");

tabLinkSkill.addEventListener("click", () => {
  console.log("Clikc");
  tabLinkSkill.classList.add("active-link");
  tabLinkExperience.classList.remove("active-link");
  tabLinkEducation.classList.remove("active-link");

  tabContentSkill.classList.add("active-content");
  tabContentExperience.classList.remove("active-content");
  tabContentEducation.classList.remove("active-content");
});
tabLinkExperience.addEventListener("click", () => {
  console.log("Clikc");
  tabLinkExperience.classList.add("active-link");
  tabLinkSkill.classList.remove("active-link");
  tabLinkEducation.classList.remove("active-link");

  tabContentExperience.classList.add("active-content");
  tabContentSkill.classList.remove("active-content");
  tabContentEducation.classList.remove("active-content");
});
tabLinkEducation.addEventListener("click", () => {
  console.log("Clikc");

  tabLinkEducation.classList.add("active-link");
  tabLinkSkill.classList.remove("active-link");
  tabLinkExperience.classList.remove("active-link");

  tabContentEducation.classList.add("active-content");
  tabContentSkill.classList.remove("active-content");
  tabContentExperience.classList.remove("active-content");
});

//! FOR HAMBURGER
const showMenu = document.querySelector(".fa-bars");
const hideMenu = document.querySelector(".fa-times");
const navList = document.querySelector(".nav-list");
showMenu.addEventListener("click", () => {
  navList.style.right = "10px";
});
hideMenu.addEventListener("click", () => {
  navList.style.right = "-200px";
});

const allLi = document.querySelectorAll(".nav-list-item");
allLi.forEach((n) => {
  n.addEventListener("click", () => {
    navList.style.right = "-200px";
    console.log("clicked on allLi");
  });
});
