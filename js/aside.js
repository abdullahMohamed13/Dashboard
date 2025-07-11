// Parent side bar
const asideComponent = document.createElement('aside');
asideComponent.classList.add(`bg-white`, `p-relative`);

// h2 to hold the username
const h2 = document.createElement('h2')
h2.classList.add(`mt-0`,`txt-c`, `p-relative`, `fs-18`);
h2.textContent = 'infoDash';

asideComponent.appendChild(h2)

// List parent that navigates between all pages
const ul = document.createElement('ul');

const lis = [];

const allPagesNames = [
    'home',
    'settings',
    'profile',
    'projects',
    'courses',
    'friends',
    'files',
    'plans',
]

const pagesHrefs = [
    '../pages/home.html',
    '../pages/settings.html',
    '../pages/profile.html',
    '../pages/projects.html',
    '../pages/courses.html',
    '../pages/friends.html',
    '../pages/files.html',
    '../pages/plans.html',
];

const iconsTypes = [
    "fa-chart-line",
    "fa-gear",
    "fa-user",
    "fa-diagram-project",
    "fa-user-graduate",
    "fa-user-group",
    "fa-file",
    "fa-credit-card",
]

const renderAllPages = () =>  {
    for(let i = 0; i < allPagesNames.length; i++) {
        // Create children of the UL element
        const liElement = document.createElement('li');
        liElement.classList.add(`d-flex`);

        // Create anchor element of every LI
        const anchor = document.createElement('a');
        anchor.setAttribute('href', pagesHrefs[i]);
        anchor.classList.add(`aside-element`, `d-flex`, `c-black`, `f-bold`, `align-center`, `fs-14`, `rad-6`, `p-10`);
        
        // Check if current page matches this link and add active class
        const currentPage = window.location.pathname.split('/').pop();
        const linkPage = pagesHrefs[i].split('/').pop();
        if (currentPage === linkPage) {
            anchor.classList.add('active');
        }

        // Add icons to anchor
        const icon = document.createElement('i')
        icon.classList.add('fa-solid', iconsTypes[i]);
        

        // Add the name of every page to anchor
        const currentPageName = document.createElement('span');
        currentPageName.classList.add(`hide-mobile`);
        currentPageName.textContent = allPagesNames[i].charAt(0).toUpperCase() + allPagesNames[i].slice(1); // Capitalize the first letter
        
        anchor.appendChild(icon);
        anchor.appendChild(currentPageName);
        liElement.appendChild(anchor);

        lis.push(liElement);
        
    }
}

// Push all li elements to the parent ul
const appendLisToUl = () => {
    lis.map((li) => {
        ul.appendChild(li);
    })
}

// Functions implementation
renderAllPages();
appendLisToUl();

// Add elements to the aside
asideComponent.appendChild(ul);

// Main div
const pageDiv = document.querySelector('body > div.page');

pageDiv.append(asideComponent);
