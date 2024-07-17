// API URL
const apiUrl = 'https://users-backend-xnuo.vercel.app/users';

// UTILITY FUNCTIONS
function select(id) {
  return document.querySelector(id);
}

function createElement(element) {
  return document.createElement(element);
}

function addEvent(element, event, callback) {
  return element.addEventListener(event, callback);
}

// Toggling between the Sign up and Login page
let log = select('#log');
let sign = select('#sign');
let logIn = select('#login');
let signContainer = select('#sign-container');
let mainDivContainer = select('#border-container');
let header = select('#header');

addEvent(sign, 'click', (e) => {
  changeContent(signContainer);
});
addEvent(log, 'click', (e) => {
  changeContent(logIn);
});

function changeContent(first) {
  if (first === signContainer) {
    logIn.style.display = 'none';
    signContainer.style.display = 'block';
  } else {
    logIn.style.display = 'block';
    signContainer.style.display = 'none';
  }
}

// LOGGING BACK IN FOR AN EXISTING USER
let form = select('#log-in');
let usernameInput = select('#username');
let passwordInput = select('#password');

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => loggingIn(data));

function loggingIn(data) {
  addEvent(form, 'submit', (e) => {
    e.preventDefault();
    let text = usernameInput.value;
    let passwordBack = passwordInput.value;
    let findUser = data.find((user) => user.username === text && user.password === passwordBack);
    if (findUser) {
      fetchData(findUser.id);
    } else {
      alert('Incorrect username or password. Please try again !!');
    }
  });
}

function fetchData(id) {
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then((data) => renderAccount(data))
}

// Displaying account
function renderAccount(data) {
  alert(`Welcome back ${data.username}`);
  let html = `
    <div id="account-information">
      <h3> Username: @${data.username}</h3>
      <div id="container">
        <div id="profile-picture">
          <img src=${data.profile_picture} alt="Profile picture">
        </div>
        <div id="stats">
          <p>${data.followers}<br><span id="name">followers</span></p>
          <p>${data.following}<br><span id="name">following</span></p>
          <p>${data.number_posts}<br><span id="name">posts</span></p>
        </div>
      </div>
      <div id="text">
        <p>${data.name}</p>
        <p>${data.bio}</p>
      </div>
      <div id="buttons">
        <button onclick=deleteAcc(${data.id})>Delete Account</button>
        <button onclick=editAcc(${data.id})>Edit profile</button>
      </div>
      <label id="post">POSTS</label><br>
      <div id="posts">
        <img src=${data.posts[1]}>
        <img src=${data.posts[2]}>
        <img src=${data.posts[3]}>
      </div>
    </div>
  `;
  let div = createElement('div');
  let mainDiv = select('#existing-users');
  mainDiv.innerHTML = ''; // Clear existing content
  mainDiv.appendChild(div);
  mainDiv.style.display = 'block';
  logIn.style.display = 'none';
  signContainer.style.display = 'none';
  mainDivContainer.style.display = 'none';
  header.style.display = 'none';
  div.innerHTML = html;
}

// A NEW USER
let email = select('.email');
let newUserPassword = select('.password');
let userName = select('.username');
let newUserForm = select('#sign-up');

addEvent(newUserForm, 'submit', (e) => {
  e.preventDefault();
  registerUser();
});

// Generating an id
function generateRandomNumericId() {
  return Math.floor(Math.random() * 1000000); // Generates a number between 0 and 999999
}

function registerUser() {
  let lastForm = select('#finish-signup');
  let finishDiv = select('#finish');

  logIn.style.display = 'none';
  signContainer.style.display = 'none';
  finishDiv.style.display = 'block';

  addEvent(lastForm, 'submit', (e) => {
    e.preventDefault();

    // Getting the first and second sign up inputs inside the event listener
    let fullName = select('#full-name').value;
    let post1 = select('#post-1').value;
    let post2 = select('#post-2').value;
    let post3 = select('#post-3').value;
    let follow = select('#follow').value;
    let followed = select('#followed').value;
    let bio = select('#Bio-stuff').value;
    let picture = select('#picture').value;
    let emailValue = email.value;
    let newUserPasswordValue = newUserPassword.value;
    let userNameValue = userName.value;

    const newUserData = {
      id: generateRandomNumericId().toString(),
      name: fullName,
      email: emailValue,
      password: newUserPasswordValue,
      username: userNameValue,
      profile_picture: picture,
      number_posts: "3",
      posts: {
        1: post1,
        2: post2,
        3: post3
      },
      followers: follow,
      following: followed,
      bio: bio
    };

    addUser(newUserData);
  });
}

// Posting the new user data
function addUser(newUserData) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json"
    },
    body: JSON.stringify(newUserData)
  }).then((res) => res.json())
    .then((data) => renderAccount(data));
  newUserForm.reset();
  select('#finish-signup').reset();
}

// Deleting an account
function deleteAcc(id) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
}

// Editing account information
function editAcc(id) {
  // Fetch user data for editing
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(data => {
      showEditForm(data); 
    })
}

function showEditForm(data) {
  let editDiv = select('#edit-info');
  let editForm = select('#editing-profile');

  // Prefill form fields with existing data
  select("#new-name").value = data.name;
  select("#username").value = data.username;
  select("#textarea").value = data.bio;
  select("#new-email").value = data.email;
  select("#new-password").value = data.password;
  select("#new-profile").value = data.profile_picture;

  // Displaying the edit form and hiding other content
  signContainer.style.display = 'none';
  logIn.style.display = 'none';
  select('#existing-users').style.display = 'none';
  header.style.display = 'none';
  editDiv.style.display = 'block';

  // Handling form submission for updating user information
  addEvent(editForm, 'submit', (e) => {
    e.preventDefault();

    const updatedUser = {
      name: select("#new-name").value,
      username: select("#username").value,
      bio: select("#textarea").value,
      email: select("#new-email").value,
      password: select("#new-password").value,
      profile_picture: select("#new-profile").value,
    };

    // Sending PATCH request to update user information
    fetch(`${apiUrl}/${data.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then(res => res.json())
      .then((updatedData) => {
        renderAccount(updatedData); 
        // Hide edit form after successful update
        editDiv.style.display = 'none'; 
      })
      // Displaying the account information after successful update
      select('#existing-users').style.display = 'block'
  });
}

