// #region create navbar component
const header = document.createElement('header');
header.classList.add(`header`, `d-flex`, `bg-white`, `flex-between`)

// #region search bar
const searchBar = document.createElement('div');
searchBar.classList.add(`search`, `p-relative`);

const searchBarIcon = document.createElement('i')
searchBarIcon.classList.add('fa-solid', 'fa-magnifying-glass')

const searchBarInput = document.createElement('input')
searchBarInput.setAttribute('type', 'search')
searchBarInput.setAttribute('placeholder', 'Type A Word')
searchBarInput.className = "rad-6"

searchBar.appendChild(searchBarIcon)
searchBar.appendChild(searchBarInput)

// --- Search Dropdown ---
const searchDropdown = document.createElement('div');
searchDropdown.style.position = 'absolute';
searchDropdown.style.top = '110%';
searchDropdown.style.left = '0';
searchDropdown.style.width = '100%';
searchDropdown.style.background = 'white';
searchDropdown.style.border = '1px solid #eee';
searchDropdown.style.borderRadius = '6px';
searchDropdown.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
searchDropdown.style.zIndex = '1000';
searchDropdown.style.display = 'none';
searchDropdown.style.maxHeight = '250px';
searchDropdown.style.overflowY = 'auto';
searchBar.appendChild(searchDropdown);

// --- Search Data ---
const searchData = [
  // Pages
  { label: 'Home', url: '../profile.html', type: 'Page' },
  { label: 'Settings', url: '../settings.html', type: 'Page' },
  { label: 'Profile', url: '../profile.html', type: 'Page' },
  { label: 'Projects', url: '../projects.html', type: 'Page' },
  { label: 'Courses', url: '../courses.html', type: 'Page' },
  { label: 'Friends', url: '../friends.html', type: 'Page' },
  { label: 'Files', url: '../files.html', type: 'Page' },
  { label: 'Plans', url: '../plans.html', type: 'Page' },
  // Home News
  { label: 'Created SASS Section', url: '../index.html', type: 'News' },
  { label: 'Changed The Design', url: '../index.html', type: 'News' },
  { label: 'Team Increased', url: '../index.html', type: 'News' },
  { label: 'Added Payment Gateway', url: '../index.html', type: 'News' },
  // Home Tasks
  { label: 'Record One New Video', url: '../index.html', type: 'Task' },
  { label: 'Write Article', url: '../index.html', type: 'Task' },
  { label: 'Finish Project', url: '../index.html', type: 'Task' },
  // Skills
  { label: 'HTML5', url: '../profile.html', type: 'Skill' },
  { label: 'CSS3', url: '../profile.html', type: 'Skill' },
  { label: 'JavaScript', url: '../profile.html', type: 'Skill' },
  { label: 'React.js', url: '../profile.html', type: 'Skill' },
  { label: 'Tailwind CSS', url: '../profile.html', type: 'Skill' },
  { label: 'TypeScript', url: '../profile.html', type: 'Skill' },
  { label: 'React Router', url: '../profile.html', type: 'Skill' },
  { label: 'Redux', url: '../profile.html', type: 'Skill' },
  { label: 'Framer Motion', url: '../profile.html', type: 'Skill' },
  { label: 'Vite', url: '../profile.html', type: 'Skill' },
  { label: 'Shadcn ui', url: '../profile.html', type: 'Skill' },
  { label: 'npm', url: '../profile.html', type: 'Skill' },
  { label: 'VS Code', url: '../profile.html', type: 'Skill' },
  { label: 'GitHub', url: '../profile.html', type: 'Skill' },
  { label: 'React Bits', url: '../profile.html', type: 'Skill' },
  // Profile Activities
  { label: 'Bought The Mastering Next.js Course', url: '../profile.html', type: 'Activity' },
  { label: 'Got The TypeScript Certificate', url: '../profile.html', type: 'Activity' },
  { label: 'Unlocked The 10 Skills Badge', url: '../profile.html', type: 'Activity' },
  { label: 'Bought The Node.js Course', url: '../profile.html', type: 'Activity' },
  // Projects
  { label: 'UFC Dashboard', url: '../projects.html', type: 'Project' },
  { label: 'Academy Portal', url: '../projects.html', type: 'Project' },
  { label: 'Chatting Application', url: '../projects.html', type: 'Project' },
  { label: 'Ahmed Dashboard', url: '../projects.html', type: 'Project' },
  { label: 'Emad Portal', url: '../projects.html', type: 'Project' },
  { label: 'Mohamed Application', url: '../projects.html', type: 'Project' },
  { label: 'Yasser Dashboard', url: '../projects.html', type: 'Project' },
  // Courses
  { label: 'Mastering Web Design', url: '../courses.html', type: 'Course' },
  { label: 'Data Structure', url: '../courses.html', type: 'Course' },
  { label: 'PHP Examples', url: '../courses.html', type: 'Course' },
  { label: 'Mastering Python', url: '../courses.html', type: 'Course' },
  { label: 'Responsive Web Design', url: '../courses.html', type: 'Course' },
  { label: 'Apple Pay', url: '../courses.html', type: 'Payment' },
  { label: 'Master Card', url: '../courses.html', type: 'Payment' },
  { label: 'PayPal', url: '../courses.html', type: 'Payment' },
  // Friends
  { label: 'Zeiad Maged', url: '../friends.html', type: 'Friend' },
  { label: 'Zeiad Tarek', url: '../friends.html', type: 'Friend' },
  { label: 'Abdelaziz Waleed', url: '../friends.html', type: 'Friend' },
  { label: 'Ahmed Mohamed', url: '../friends.html', type: 'Friend' },
  { label: 'Hadaba', url: '../friends.html', type: 'Friend' },
  { label: 'Belal Wael', url: '../friends.html', type: 'Friend' },
  { label: 'Abdelaziz Omar', url: '../friends.html', type: 'Friend' },
  { label: 'Shehab Helmy', url: '../friends.html', type: 'Friend' },
  { label: 'Omar Mohamed', url: '../friends.html', type: 'Friend' },
  { label: 'Unknown', url: '../friends.html', type: 'Friend' },
  // Files
  { label: 'resume.pdf', url: '../files.html', type: 'File' },
  { label: 'my-file.avi', url: '../files.html', type: 'File' },
  { label: 'my-file.dll', url: '../files.html', type: 'File' },
  { label: 'my-file.eps', url: '../files.html', type: 'File' },
  { label: 'project_files.zip', url: '../files.html', type: 'File' },
  { label: 'my-file.psd', url: '../files.html', type: 'File' },
  { label: 'my-file.pdf', url: '../files.html', type: 'File' },
  // Plans
  { label: 'Free', url: '../plans.html', type: 'Plan' },
  { label: 'Basic', url: '../plans.html', type: 'Plan' },
  { label: 'Premium', url: '../plans.html', type: 'Plan' },
  { label: 'Apple Pay', url: '../plans.html', type: 'Payment' },
  { label: 'Master Card', url: '../plans.html', type: 'Payment' },
  { label: 'PayPal', url: '../plans.html', type: 'Payment' },
  // Settings
  { label: 'Quick Draft', url: '../settings.html', type: 'Widget' },
  { label: 'Yearly Targets', url: '../settings.html', type: 'Widget' },
  { label: 'Tickets Statistics', url: '../settings.html', type: 'Widget' },
  { label: 'Latest News', url: '../settings.html', type: 'Widget' },
  { label: 'Latest Tasks', url: '../settings.html', type: 'Widget' },
  { label: 'Top Search Items', url: '../settings.html', type: 'Widget' },
  { label: 'Backup Manager', url: '../settings.html', type: 'Setting' },
  { label: 'Site Control', url: '../settings.html', type: 'Setting' },
  { label: 'General Info', url: '../settings.html', type: 'Setting' },
  { label: 'Security Info', url: '../settings.html', type: 'Setting' },
  { label: 'Social Info', url: '../settings.html', type: 'Setting' },
];

function renderSearchResults(results) {
  searchDropdown.innerHTML = '';
  if (results.length === 0) {
    const noResult = document.createElement('div');
    noResult.textContent = 'No results found.';
    noResult.style.padding = '10px';
    noResult.style.color = '#888';
    searchDropdown.appendChild(noResult);
    return;
  }
  results.forEach(item => {
    const resultItem = document.createElement('a');
    resultItem.textContent = item.label + (item.type ? ` (${item.type})` : '');
    resultItem.href = item.url;
    resultItem.style.display = 'block';
    resultItem.style.padding = '10px';
    resultItem.style.color = '#222';
    resultItem.style.textDecoration = 'none';
    resultItem.style.borderBottom = '1px solid #f0f0f0';
    resultItem.onmouseover = () => resultItem.style.background = '#f5f5f5';
    resultItem.onmouseout = () => resultItem.style.background = 'white';
    searchDropdown.appendChild(resultItem);
  });
}

searchBarInput.addEventListener('input', function() {
  const value = this.value.trim().toLowerCase();
  if (value.length >= 2) {
    const filtered = searchData.filter(item => item.label.toLowerCase().includes(value));
    renderSearchResults(filtered);
    searchDropdown.style.display = 'block';
  } else {
    searchDropdown.style.display = 'none';
  }
});

searchBarInput.addEventListener('blur', function() {
  setTimeout(() => { searchDropdown.style.display = 'none'; }, 150);
});

searchBarInput.addEventListener('focus', function() {
  if (this.value.trim().length >= 2 && searchDropdown.innerHTML) {
    searchDropdown.style.display = 'block';
  }
});

header.appendChild(searchBar)
//#endregion

const iconsSection = document.createElement('div');
iconsSection.classList.add(`icons`, `d-flex`, `align-center`);

// #region Notifications
// bill and notifications div
const bill_notification = document.createElement('span')
bill_notification.className = 'p-relative';

const billIcon = document.createElement('i');
billIcon.className = 'fa-regular fa-bell';
bill_notification.appendChild(billIcon);

const notificationDiv = document.createElement('div');
notificationDiv.className = 'notifications hide';

// notification number 1
const n1 = document.createElement('div')
n1.classList.add('msg');

const img1 = document.createElement('img')
img1.setAttribute('src', './images/Friends/friend-01.png')

const info1 = document.createElement('info')
info1.className = 'info';

const msg1 = document.createElement('p');
msg1.textContent = 'Hey Abdallah, wanna go out sometime?'
const time1 = document.createElement('p')
time1.textContent = 'Today 19:30'
time1.className = 'c-grey'

info1.appendChild(msg1)
info1.appendChild(time1)

n1.appendChild(img1)
n1.appendChild(info1)

const separator = document.createElement('hr')
separator.className = 'separator'

// notification number 2
const n2 = document.createElement('div')
n2.classList.add('msg');

const img2 = document.createElement('img')
img2.setAttribute('src', './images/Friends/friend-02.png')

const info2 = document.createElement('info')
info2.className = 'info';

const msg2 = document.createElement('p');
msg2.textContent = 'I got your course, it was so great I appreciate the work 💌'
const time2 = document.createElement('p')
time2.textContent = 'Yesterday 11:24'
time2.className = 'c-grey'

info2.appendChild(msg2)
info2.appendChild(time2)

n2.appendChild(img2)
n2.appendChild(info2)

notificationDiv.appendChild(n1)
notificationDiv.appendChild(separator)
notificationDiv.appendChild(n2)

bill_notification.appendChild(notificationDiv)

header.appendChild(bill_notification)
// #endregion

// #region profile picture section
const profilePicSection = document.createElement('a')
profilePicSection.setAttribute('href', '../profile.html')

const profileImg = document.createElement('img')
profileImg.setAttribute('src', './images/me.jpeg')
profileImg.setAttribute('alt', 'Profile Picture')

profilePicSection.appendChild(profileImg)
// #endregion
iconsSection.appendChild(bill_notification)
iconsSection.appendChild(profilePicSection)

header.appendChild(iconsSection)

const contentDiv = document.querySelector('body > div.page > div.content');
contentDiv.append(header);
// #endregion

// #region handle notification show/hide

billIcon.onclick = () => {
    if (notificationDiv.classList.contains('show')) {
        notificationDiv.classList.remove('show');
        notificationDiv.classList.add('hide');
    } else {
        notificationDiv.classList.remove('hide');
        notificationDiv.classList.add('show');
    }
}
// #endregion
