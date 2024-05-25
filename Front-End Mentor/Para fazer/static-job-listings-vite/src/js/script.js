import axios from "axios";

const filter = document.querySelector(".header__filter");
// const filterContainer = document.querySelector(".header__flter-items-container");
const jobListContainer = document.querySelector(".job-list");
const clearFilterBtn = document.querySelector("[data-clear]");
const removeTagBtn = document.querySelectorAll(".header__filter-item-X");
const tags = document.querySelectorAll(".job-list__tag");

const API = "data.json";

showJobs();

async function showJobs() {
    const data = await axios.get(API);
    const jobs = await data.data;
    
    jobs.forEach((job) => {
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
                ${job.languages.map(language => `<button class="job-list__tag">${language}</button>`).join("")}            
                ${job.tools.map(tool => `<button class="job-list__tag">${tool}</button>`).join("")}
            </div>

        </li>
        `
    })
}


document.addEventListener("click", (e) => {
    if (e.target.className.includes(("job-list__tag"))) {
        filter.style.display = "grid";
        console.log(e.target.innerText);
    }
})