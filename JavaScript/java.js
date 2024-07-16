// API URL
const apiUrl = 'http://localhost:3000/users'

// UTILITY FUNCTIONS
function select(id) {
  return document.querySelector(id)
}

function createElement(element) {
  return document.createElement(element)
}

function addEvent(element, event, callback) {
  return element.addEventListener(event, callback)
}

// Toggling between the Sign up and Login in page
// Getting the items from HTML
let log = select('#log')
let sign = select('#sign')
let logIn = select('#login')
let signContainer = select('#sign-container')
let mainDivContainer = select('#border-container')
let header = select('#header')

// Adding the event listeners
addEvent(sign, 'click', (e) => {
  e.preventDefault()
  changeContent(signContainer)
})
addEvent(log, 'click', (e) => {
  e.preventDefault()
  changeContent(logIn)
})

// ChangeContent function
function changeContent(first) {
  if (first === signContainer) {
    logIn.style.display = 'none'
    signContainer.style.display = 'block'
  } else {
    logIn.style.display = 'block'
    signContainer.style.display = 'none'
  }
}

// LOGGING BACK IN
// Getting the items from HTML
let form = select('#log-in')
let usernameInput = select('#username')
let passwordInput = select('#password')
let submit = select('#submit')

// FETCHING ALL EXISTING USER DATA
fetch(apiUrl)
 .then(res => res.json())
 .then(data => loggingIn(data))

 function loggingIn(data) {
    addEvent(form, 'submit', (e) => {
        e.preventDefault()
        let text = usernameInput.value
        let passwordBack = passwordInput.value
        let findUser = data.find(user => user.username === text && user.password === passwordBack)
        if(findUser) {
            // FETCHING THE LOGGED IN USER INFO
            fetchData(findUser.id)
        } else {
            alert('Incorrect username or password. Please try again !!')
        }
    })
 }

 function fetchData(id) {
    fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(data => renderAccount(data))
 }

 // Displaying his account
 function renderAccount(data) {
    alert(`Welcome back ${data.username}`)
    let html = 
    `    <div id = account-information>
         <h3> Username : @${data.username}</h3>
         <div id = container>
         <div id = profile-picture>
         <img src = ${data.profile_picture} alt = Profile picture>
         </div>
         <div id = stats>
         <p>${data.followers}<br>
         <span id = name>followers</span></p>
         <p>${data.following}<br>
         <span id = name>following</span></p>
          <p>${data.number_posts}<br>
         <span id = name>posts</span></p>
         </div>
         </div>
           <div id = text>
         <p>${data.name}</p>
         <p>${data.bio}</p>
         </div>
         <div id = buttons>
         <button> Delete Account </button>
         <button> Share profile </button>
         </div>
         <label id = post> POSTS </label><br>
         <div id = posts>
         <img src = ${data.posts["1"]}>
         <img src = ${data.posts["2"]}>
         <img src = ${data.posts["3"]}>
         </div>
         </div>

    
        `
            
            // Creating an element to assign the text content
            let div = createElement('div')
            // Appending the new element
            let mainDiv = select('#existing-users')
            mainDiv.appendChild(div)
            // Displaying the content
            mainDiv.style.display = 'block'
            logIn.style.display =  'none'
            signContainer.style.display = 'none'
            mainDivContainer.style.display = 'none'
            header.style.display = 'none'
            // Assigning text content to the created element
            div.innerHTML = html          
 }