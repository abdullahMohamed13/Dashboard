//#region handle show/hide more skills for skills.html
const showMoreSkillsButton = document.querySelector('.show-more');
const allHidedSkills = document.querySelectorAll('.hided-skill');

showMoreSkillsButton.onclick = () => {
    showMoreSkillsButton.textContent === 'Show more 🔺' ?
    showMoreSkillsButton.textContent = 'Show less 🔻' :
    showMoreSkillsButton.textContent = 'Show more 🔺'
    
    allHidedSkills.forEach((skill) => {
        skill.classList.toggle('hided-skill')
    })
}
//#endregion

//#region handle show/hide profile information for profile.html
const toggleSwitches = document.querySelectorAll('.toggle-checkbox');
const profileSections = document.querySelectorAll('.profile-page > .information > .right > .row.editable');
const stateSpan = document.querySelectorAll('.profile-page > .information > .right > .row > span.editable');

for(let i = 0; i < profileSections.length; i++) {
    // If user clicks on one of the toggle switches, check if it's private or not:
    toggleSwitches[i].onclick = () => {
        // handle class change
        profileSections[i].classList.contains('opacity-50') ? 
        profileSections[i].classList.remove('opacity-50') :
        profileSections[i].classList.add('opacity-50');
        
        // handle textContent change
        stateSpan[i].textContent === 'Public' ?
        stateSpan[i].textContent = 'Private' :
        stateSpan[i].textContent = 'Public';
    }
}
//#endregion
