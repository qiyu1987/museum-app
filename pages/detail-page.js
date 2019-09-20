function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textarea = document.getElementById('msg')
    const msg = textarea.value
    if(doesNotPassAllValidations(name, msg)){
        return null
    }
    const nameCapitalized =  name.charAt(0).toUpperCase() + name.slice(1)
    // // return string.charAt(0).toUpperCase() + string.slice(1);
    // // from https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript

    const commentSection = document.getElementById('comments')
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerHTML = `${nameCapitalized} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    // append warning message if necessary
   

    if(containOffensiveWords(msg)){
        const warning = document.createElement('div')
        warning.innerHTML = "Warning: this comment has been flagged as offensive."
        warning.style.color = 'red'
        console.log(warning) 
        comment.appendChild(warning)      
    }
    // check if the message string contains any of the words from an array of substrings 
    // if (substrings.some(function(v) { return str.indexOf(v) >= 0; })) {
    //     // There's at least one
    // }
    // from https://stackoverflow.com/questions/5582574/how-to-check-if-a-string-contains-text-from-an-array-of-substrings-in-javascript

    commentSection.appendChild(comment)
    inputField.value = null
    textarea.value = null
    // Write a boolean expression which returns true if name or msg return a falsy value. 
    // Use console.log to check whether your logic is correct.
   
}
function doesNotPassAllValidations(name, msg) {
    if (!name) {
        alert('You forgot to fill in your name!')       
        return true
    }
    if (!msg) {
        alert('You forgot to fill in your message!')       
        return true
    }
    // Write an if statement that checks whether a comment is longer than 280 characters. 
    // If it is, the comment should not be displayed on the page and the user should get a warning 
    // that the comment is too long.
    if (msg.length > 280) {
        alert("your comment should not be longer than 280 characters")
        return true
    }
    return false
}
function containOffensiveWords(msg) {
    const offensiveWords = ['fuck','ass','cunt']
    return offensiveWords.some((v) => msg.includes(v))
}
