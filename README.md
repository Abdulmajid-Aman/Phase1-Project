# User Authentication and Profile Management System
This project is a simple web-based application that allows users to sign up, log in, view their profile, edit their profile, and delete their account. The application interacts with a RESTful API to manage user data.

### Deployable link to my website
- **https://phase1-project-theta.vercel.app/**

### Features
- **As a user you can do the following:**
1. **Sign Up:** New users can register by providing their details.
2. **Log In:** Existing users can log in using their username and password.
3. **Profile View:** Logged-in users can view their profile information.
4. **Edit Profile:** Users can edit their profile details.
5. **Delete Account:** Users can delete their account.
6. **Interactive UI:** The app features a dynamic user interface with various interactive elements.

### Technologies Used
1. Frontend: HTML, CSS, JavaScript
2. Backend: RESTful API
3. HTTP Requests: Fetch API

### Usage
#### Signing Up
1. Open the application.
2. Click on the "Sign Up" button.
3. Fill out the registration form.
4. Submit the form to create a new user account.
#### Logging In
1. Open the application.
2. Click on the "Log In" button.
3. Enter your username and password.
4. Submit the form to log in to your account.
#### Viewing Profile
1. After logging in, your profile information will be displayed.
2. View your username, profile picture, followers, following, posts, and bio.
#### Editing Profile
1. Click on the "Edit Profile" button.
2. Update your profile information.
3. Submit the form to save changes.
#### Deleting Account
1. Click on the "Delete Account" button.
2. Confirm the deletion to remove your account from the system.
#### Event Listeners
- The application uses the following event listeners for interactivity:

1. **Click Event:** Toggle between Sign Up and Log In forms.
2. **Submit Event:** Handle form submissions for logging in, signing up, and editing profiles.
3. **Click Event:** Handle delete account action.

### Getting Started
#### Prerequisites
Ensure you have a RESTful API running on **https://users-backend-six.vercel.app/users**. This API should support the following endpoints:
- **POST** /users: Create a new user
- **GET /users:** Retrieve all users.
- **GET /users/:id:** Retrieve a specific user by ID.
- **POST /users:** Add a new user.
- **PATCH /users/:id:** Update an existing user.
- **DELETE /users/:id:** Delete a user

### Installation
`Clone the repository:`

`bash`
***Copy code***
`git clone git@github.com:Abdulmajid-Aman/Week-3-Code-Lab.git`
***Navigate to the project directory:***

`bash`
`Copy code`
`cd Project`
`code .`

`Open index.html in your web browser.`

### Utility Functions
- **`select(id):`** Selects an HTML element by its ID.
- **`createElement(element):`** Creates a new HTML element.
- **`addEvent(element, event, callback):`** Adds an event listener to an element.

#### Main Functionalities
1. Toggling Between Sign Up and Log In Forms
2. Logging In an Existing User
3. Fetching and Displaying User Data
4. Registering a New User
5. Editing User Information
6. Deleting User Account

#### Example User Workflow
1. **Sign Up:** Click on the "Sign Up" button and fill in the registration form. Complete the process by filling in additional details and submitting the form.
2. **Log In:** Click on the "Log In" button, enter your username and password, and submit the form.
3. **View Profile:** Upon successful log-in, your profile information will be displayed.
4. **Edit Profile:** Click on the "Edit Profile" button, update your information, and submit the form to save changes.
5. **Delete Account:** Click on the "Delete Account" button to remove your account from the system.

### Contributing
- If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

### License
- This project is licensed under the MIT License. See the LICENSE file for details.

Project by **Abdulmajid Aman Hussein**

