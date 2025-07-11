// handle greeting message for index.html
const handleGreetingMsg = () => {
    if(document.location.pathname.endsWith('index.html')) {
        const greetingMsg = document.createElement('p')
        greetingMsg.textContent = 'Happy to have you here ✨'
        document.querySelector('.content > h1').appendChild(greetingMsg)
    }
}
handleGreetingMsg()