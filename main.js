const json =
  '[ { "id": 1, "company": "Photosnap", "logo": "./images/photosnap.svg", "new": true, "featured": true, "position": "Senior Frontend Developer", "role": "Frontend", "level": "Senior", "postedAt": "1d ago", "contract": "Full Time", "location": "USA Only", "languages": ["HTML", "CSS", "JavaScript"], "tools": [] }, { "id": 2, "company": "Manage", "logo": "./images/manage.svg", "new": true, "featured": true, "position": "Fullstack Developer", "role": "Fullstack", "level": "Midweight", "postedAt": "1d ago", "contract": "Part Time", "location": "Remote", "languages": ["Python"], "tools": ["React"] }, { "id": 3, "company": "Account", "logo": "./images/account.svg", "new": true, "featured": false, "position": "Junior Frontend Developer", "role": "Frontend", "level": "Junior", "postedAt": "2d ago", "contract": "Part Time", "location": "USA Only", "languages": ["JavaScript"], "tools": ["React", "Sass"] }, { "id": 4, "company": "MyHome", "logo": "./images/myhome.svg", "new": false, "featured": false, "position": "Junior Frontend Developer", "role": "Frontend", "level": "Junior", "postedAt": "5d ago", "contract": "Contract", "location": "USA Only", "languages": ["CSS", "JavaScript"], "tools": [] }, { "id": 5, "company": "Loop Studios", "logo": "./images/loop-studios.svg", "new": false, "featured": false, "position": "Software Engineer", "role": "Fullstack", "level": "Midweight", "postedAt": "1w ago", "contract": "Full Time", "location": "Worldwide", "languages": ["JavaScript"], "tools": ["Ruby", "Sass"] }, { "id": 6, "company": "FaceIt", "logo": "./images/faceit.svg", "new": false, "featured": false, "position": "Junior Backend Developer", "role": "Backend", "level": "Junior", "postedAt": "2w ago", "contract": "Full Time", "location": "UK Only", "languages": ["Ruby"], "tools": ["RoR"] }, { "id": 7, "company": "Shortly", "logo": "./images/shortly.svg", "new": false, "featured": false, "position": "Junior Developer", "role": "Frontend", "level": "Junior", "postedAt": "2w ago", "contract": "Full Time", "location": "Worldwide", "languages": ["HTML", "JavaScript"], "tools": ["Sass"] }, { "id": 8, "company": "Insure", "logo": "./images/insure.svg", "new": false, "featured": false, "position": "Junior Frontend Developer", "role": "Frontend", "level": "Junior", "postedAt": "2w ago", "contract": "Full Time", "location": "USA Only", "languages": ["JavaScript"], "tools": ["Vue", "Sass"] }, { "id": 9, "company": "Eyecam Co.", "logo": "./images/eyecam-co.svg", "new": false, "featured": false, "position": "Full Stack Engineer", "role": "Fullstack", "level": "Midweight", "postedAt": "3w ago", "contract": "Full Time", "location": "Worldwide", "languages": ["JavaScript", "Python"], "tools": ["Django"] }, { "id": 10, "company": "The Air Filter Company", "logo": "./images/the-air-filter-company.svg", "new": false, "featured": false, "position": "Front-end Dev", "role": "Frontend", "level": "Junior", "postedAt": "1mo ago", "contract": "Part Time", "location": "Worldwide", "languages": ["JavaScript"], "tools": ["React", "Sass"] } ]';

let dataObj = JSON.parse(json);
const filtersActiveClass = "header__filters--active";
const filtersContainerEl = document.querySelector(".header__filters");
const filtersTagsEl = document.querySelector(".header__tags");
const filters = [];
const jobsEl = document.querySelector(".jobs");
const jobTags = document.querySelectorAll(".job__tag");
const jobHiddenClass = "job--hidden";
const jobElements = [];

function generateTags(tab) {
  let html = "";
  for (const item of tab) {
    const tag = `<button class="job__tag">${item}</button>`;
    html += tag;
  }

  return html;
}

function generateFilterTag(label) {
    const html = `<button class="header__tag">
    <span class="header__tag-text">${label}</span>
    <div class="header__icon"><img src="./images/icon-remove.svg" alt=""></div>
    </button>`;
    
    return html;
  }

function generateJobHtml(data) {
  const el = document.createElement("article");
  el.classList.add("job");

  el.innerHTML = `
  <div class="job__content">
  <div class="job__logo">
    <img class="job__img" src="${data.logo}" alt="">
  </div>
  <div>
    <div class="job__header">
      <span class="job__company">${data.company}</span>
      ${data.new ? '<span class="job__label">New!</span>' : ""}
      ${
        data.new
          ? '<span class="job__label job__label--dark">Featured</span>'
          : ""
      }
    </div>
    <p class="job__title">${data.role}</p>
    <div class="job__details">
      <span class="job__detail">${data.postedAt}</span>
      <span class="job__detail">${data.contract}</span>
      <span class="job__detail">${data.location}</span>
    </div>
  </div>

  <hr class="job__dec-line">

  <div class="job__tags">
    <button class="job__tag">${data.role}</button>
    <button class="job__tag">${data.level}</button>
    ${generateTags(data.languages)}
    ${generateTags(data.tools)}
  </div>
</div>
  `;
  return el;
}

function renderJobs() {
  for (item of dataObj) {
    const el = generateJobHtml(item);
    jobElements.push(el);
    jobsEl.appendChild(el);
  }
}

function displayFilters(display = true) {
  if (display) {
    filtersContainerEl.classList.add(filtersActiveClass);
  } else {
    filtersContainerEl.classList.remove(filtersActiveClass);
  }
}

function filterJobs() {
  jobElements.forEach((job) => {
    const isFullfilled = filters.every((filter) => job.querySelector('.job__tags').innerHTML.includes(filter));
    if(!isFullfilled) {
      job.classList.add(jobHiddenClass);
    } else {
      job.classList.remove(jobHiddenClass);
    }
  })
}

renderJobs();

jobTags.forEach((job) => {
  job.addEventListener("click", (e) => {
    displayFilters();

    if(filters.includes(e.target.textContent)) return;
    filters.push(e.target.textContent);
    const filterTag = generateFilterTag(e.target.textContent);
    filtersTagsEl.innerHTML += filterTag; 
    filterJobs();
  });
});
