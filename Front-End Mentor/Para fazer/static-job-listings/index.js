const jobsContainer = document.querySelector(".jobs");
const filterElement = document.querySelector(".filter-element");
const filterContainer = document.querySelector(".filter");
const filterRemoveIcon = document.querySelectorAll(".filter-remove-icon");
const filterClear = document.querySelector(".filter__clear");
const elementTag = document.querySelector(".filtered-tag");

let jobs = [];

trazerApi();

async function trazerApi() {
    const api = await fetch("data.json");
    const DadosDaApi = await api.json();
    mostrarJobs(DadosDaApi);
    jobs = DadosDaApi;
    filtrar();
}

function mostrarJobs(jobsList) {
    jobsContainer.innerHTML = "";
    jobsList.forEach((job) => {
        let newOrNot =
            job.new == true ? '<span class="job__new">New!</span>' : "";
        let featuredOrNot =
            job.featured == true
                ? '<span class="job__featured">Featured</span>'
                : "";
        let border = job.featured == true ? "active-border" : "";

        let languagesTags = job.languages
            .map(
                (language) =>
                    `<span class="job__tag job__tag-languages">${language}</span>`
            )
            .join("");
        let toolsTags = job.tools
            .map(
                (tool) => `<span class="job__tag job__tag-tools">${tool}</span>`
            )
            .join("");

        jobsContainer.innerHTML += `
        <div class="job ${border}">
            <img src="${job.logo}" alt="company-logo" class="job__company-logo">
            <div class="job__information">
            <div class="job__header">
                <span class="job__company">${job.company}</span>
                    <div class="job__new-and-featured">
                    ${newOrNot}
                    ${featuredOrNot}
                    </div>
                </div>
                <h1 class="job__position">${job.position}</h1>
                <div class="job__postedAt-contract-location">
                    <span class="job__postedAt">${job.postedAt}</span>
                    <span class="job__contract">${job.contract}</span>
                    <span class="job__location">${job.location}</span>
                    </div>
            </div>

            <hr>

            <div class="job__tags">
                <span class="job__tag job__tag-role">${job.role}</span>
                <span class="job__tag job__tag-level">${job.level}</span>
                ${languagesTags}
                ${toolsTags}
            </div>
        </div>
        `;
    });
}

const filteredTags = [];
function filtrar() {
    const jobTags = document.querySelectorAll(".job__tag");
    jobTags.forEach((tag) => {
        tag.addEventListener("click", () => {
            const tagText = tag.innerText;
            if (!filteredTags.includes(tagText)) {
                filteredTags.push(tagText);
                filterContainer.classList.add("active-filter");
                filterContainer.innerHTML += `
                <span class="filtered-tag">
                <p class="filtered-tag-text">${tagText}</p>
                <img src="images/icon-remove.svg" alt="icon-remove" class="filter-remove-icon">
                </span>
                `;
            }
            const filteredJobs = jobs.filter((job) => {
                return filteredTags.every((tag) => {
                    return (
                        job.role === tag ||
                        job.level === tag ||
                        job.languages.includes(tag) ||
                        job.tools.includes(tag)
                    );
                });
            });
            mostrarJobs(filteredJobs);
        });
    });
}

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-remove-icon")) {
        const removedTag = event.target.previousElementSibling.innerText;
        const tagIndex = filteredTags.indexOf(removedTag);
        if (tagIndex !== -1) {
            filteredTags.splice(tagIndex, 1);
            mostrarJobsFiltrados();
            event.target.parentElement.remove(); // Remover o elemento pai (a tag filtrada)
        }
    }
});
