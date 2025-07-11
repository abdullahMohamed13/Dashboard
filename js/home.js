// handle greeting message for home.html
const handleGreetingMsg = () => {
    if(document.location.pathname.endsWith('home.html')) {
        const greetingMsg = document.createElement('p')
        greetingMsg.textContent = 'Happy to have you here ✨'
        document.querySelector('.content > h1').appendChild(greetingMsg)
    }
}
handleGreetingMsg()