import axios, { all } from "axios";

const filter = document.querySelector(".header__filter");
const filterContainer = document.querySelector(".header__filter-items-container");
const jobListContainer = document.querySelector(".job-list");
const clearFilterBtn = document.querySelector("[data-clear]");
// const removeTagBtn = document.querySelectorAll(".header__filter-item-X");
// const tags = document.querySelectorAll(".job-list__tag");

const API = "data.json";
const data = await axios.get(API);
const jobs = await data.data;

showJobs(jobs);

async function showJobs(listOfJobs) {
    listOfJobs.forEach((job) => {
        jobListContainer.innerHTML += `
        <li class="job-list__item ${job.featured ? "border-left" : ""}">        
            <img src="${job.logo}" alt="" class="job-list__item-logo">

            <div class="job-list__infos">

                <div class="job-list__item-company-container">
                    <strong class="job-list__item-company">${job.company}</strong>
                    ${job.new ? "<span class='job-list__item-new'>New!</span>" : ""}
                    ${job.featured ? "<span class='job-list__item-featured'>Featured</span>" : ""}          
                </div>

                <h2 class="job-list__item-position">${job.position}</h2>

                <div class="job-list__item-info-container">
                    <span class="job-list__item-info">${job.postedAt}</span>
                    <span class="job-list__item-info">${job.contract}</span>
                    <span class="job-list__item-info">${job.location}</span>
                </div>
            </div>
            <hr>

            <div class="job-list__tags">                
                <button class="job-list__tag">${job.role}</button>            
                <button class="job-list__tag">${job.level}</button>            
                ${job.languages.map((language) =>`<button class="job-list__tag">${language}</button>`).join("")}            
                ${job.tools.map((tool) => `<button class="job-list__tag">${tool}</button>`).join("")}
            </div>

        </li>
        `;
    });
}

let tagList = [];
let filteredJobs = [];

function showFilteredJobs() {
    jobListContainer.innerHTML = "";

}


document.addEventListener("click", (e) => {
    if (e.target.matches(".job-list__tag")) {
        filter.style.display = "grid";
        const tagName = e.target.innerText;
        if (!tagList.includes(tagName)) {
            tagList.push(tagName);
            addTagFilter();
            showFilteredJobs();

            // Here goes the filter logic to show on the screen only the jobs containing the clicked tags
            
        }
    }
});

function addTagFilter() {
    filterContainer.innerHTML = "";
    tagList.forEach((tag) => {
        filterContainer.innerHTML += `
        <li class="header__filter-items">
            <span class="header__filter-item">${tag}</span>
            <button class="header__filter-item-X">
                <img src="images/icon-remove.svg" alt="">
            </button>
        </li>
        `;
    });
}

function clearFilter() {
    tagList = [];
    filterContainer.innerHTML = '';
    filter.style.display = "none";
    jobListContainer.innerHTML = '';
    showJobs(jobs);
}

clearFilterBtn.addEventListener("click", clearFilter);