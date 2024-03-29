# Coffee Social React FrontEnd

## Introduction 

The concept of the site came to my when I was looking around the internet for information on differnt coffee machines to purchase. After I got one, the real trubole shooting started. I was going from forum to forum trying to sift through for the information I was looking for. I thought it might be a better idea to create a space for coffee enthusiasts to come together to connect, ask questions, and in general to celebrate coffee.
The Coffee Social API is a Back-End App that serves the front-end website The Coffee Social. It is a social site for coffee lovers to post or blog about there coffee journey and/or to troubleshoot there coffee recipes.
The site allows an Admin user to login using a pre-registered login(superuser). From there, the Admin-user can create, read, update and delete(CRUD) Profiles, posts, and comments on posts. 
This website also allows a user to create a login, make a post on the wbesite and view and edit their posts and comments and like other's. 


 + This is a link to my live website [Live site](https://coffee-social-react-9c0fd55d8b45.herokuapp.com/)
 + This is a link to my Repo [Repo](https://github.com/Brionconroy/coffee-social-react)

--- 

## Table of Contents 

 
 

 - ## [Introduction](#introduction) 

 
 

 - ## [Agile Methodologie](#agile-methodologie-1) 

 
 

 - ## [User Experience](#user-experience-1) 

 
 

 - ## [Features](#features-1) 

 
 

 - ## [Technologies](#technologies-1) 

     

- ## [Testing](#testing-1) 

    - ## [Bugs](#bugs-1) 

    - ## [Manual Testing](#manual-testing-1) 

    - ## [Code Validation](#code-validation-1) 

    - ## [Responsiveness Testing](#responsiveness-testing-1) 

     

 
 

- ## [Deployment](#deployment-1) 

 
 

- ## [Credits](#credits-1) 

--- 

 
 

## Agile Methodology 

 
 

Agile principles were utilised throughout the planning and development of this project. The tecnology used in this project was github issues which were categorised into user stories, seperated out into tasks for various aspects of the project. The issues were then added into a project board through github issues as shown. 

 
 

<details> 

 
 

<summary>Agile</summary>  

 
 

![Agile](src/assets/readme/agile.png) 

 
 

</details> 

 
 
 

I created a user stories template through github issues to lay out each user story containing acceptance criteria. These requirements were altered through the project as things don't always go to plan and new ideas can happen. I also used the MoSCoW method while developing this project this helped to prioritize certian features ahead of others by using tags on the user stories into three different catagories (Must Haves, Should Haves, Could Haves). By focusing on the Must Haves first you end up with a MVP (minimuim viable prject) qiucker. 

 
 

<details> 

 
 

<summary>User Stories</summary>  

 
 

![User Stories](src/assets/readme/userstorys.png) 

 
 

</details> 

Link to UserStories https://github.com/users/Brionconroy/projects/8

 
 

## User Experience 

 
 

As a new visitor to the site, I would like to be able to make a profile and connect with others on the site. I would also like to be able to login to the website so that I can view and engage with the site's content. I want to be able to easily navigate the site and quickily find what I'm looking for. I would also like to be able to share my own posts and reviews. 

 
 

### The User Experience Design was constructed using the five planes. 

 
 

+ Stratagy: Is this content relevent to the user and is it culturally appropriate? 

+ Scope: Are we accomplishing our goals of create a space that people will come together to discuss coffee? 

+ Structure: How many pages should we have in our website and why? 

+ Skeleton: Does the structure of the wireframe meet the users needs? Is the web page responsive? 

+ Surface: Does the site look good visually? Does it have enough images and colours? 

 
 

<details> 

 
 

<summary>Desktop Landing Page</summary>  

 
 

![Large Screen Dashboard](src/assets/readme/wireframedesktop.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>Mobile Landing Page</summary>  

 
 

![Small Screen Dashboard](src/assets/readme/wireframemobile.png) 

 
 

</details> 

 
 

# Features 

 
 

## Navbar


+ The Navbar contains the logo for the website and when you click on it it will bring you to the home page. 

+ The sticky navbar, has 8 differnt heading, the heading will change if you are logged in from 'login' to 'loggout'. 

+ The header reflects the login state of the user by showing the login or the log out icon in the header. 

 
 

<details> 

 
 

<summary>Login</summary>  

 
 

![Login](src/assets/readme/navbar-loggin.png) 

 
 

</details> 

<details> 

 
 

<summary>Loggout</summary>  

 
 

![Logout](src/assets/readme/navbar-logout.png) 

 
 

</details> 

 
## Log-in form

+ The log in on the navbar will disapear when you have logged in confirming your login 

+ on the login form you can also sign up if you haven't alread done so. 

<details> 




<summary>Log-in</summary>  

 
 

![Log-in](src/assets/readme/signin.png) 

 
 

</details> 

 
 

## Sign-up form

 
 

+ The sign-up form makes you enter your new password twice and is case sensitve. When you've signed up, it will bring you to the sign-in page automatically

 
 

<details> 

 
 

<summary>Sign-up</summary> 

 
 

![Sign-up](src/assets/readme/signup.png) 

 
 

</details> 

 
 

## Profile Page


<details> 

 
 

<summary>Profile Page</summary> 

 
 

![Profile Page](src/assets/readme/profilepage.png) 

 
 

</details> 

 
 

## Edit Profile Page

 
 

+ the edit profile page lets you add a profile picture, edit your password and user name or add yourself as a Barista user.

 
 

<details> 

 
 

<summary>Edit Profile Page</summary> 

 
 

![Edit Profile Page](src/assets/readme/profile-edit.png) 

 
 

</details> 

 
 
## Barista registration form

 
 

+ This form lets you sign up as a barista.

 
 

<details> 

 
 

<summary>Barista registration form</summary> 

 
 

![Barista registration form](src/assets/readme/barista-registation.png) 

 
 

</details> 

 
 

## Barista Page


+ this page lets you see the baristas that are registered, allows you to create reviews, and lets you see other's reviews

<details> 

 
 

<summary>Barista Page</summary> 

 
 

![Barista Page](src/assets/readme/barista-page.png) 

 
 

</details> 


## Reviews Page


+ This page lets you review baristas that are registered 

<details> 

 
 

<summary>Reviews Page</summary> 

 
 

![Reviews Page](src/assets/readme/reviewpage.png) 

 
 

</details> 


## Reviews Form


+ This page lets you write a review for a barista.

<details> 

 
 

<summary>Reviews Form</summary> 

 
 

![Reviews Form](src/assets/readme/reviews.png) 

 
 

</details> 

## Post Form page


+ This page lets you create a post with images and text content.

<details> 

 
 

<summary>Post Form page</summary> 

 
 

![Post Form page](src/assets/readme/makeapost.png) 

 
 

</details> 

## Edit Posts


+ This page lets you create a post with images and text content.

<details> 

 
 

<summary>Edit Posts</summary> 

 
 

![Edit Posts](src/assets/readme/editpostpage.png) 

 
 

</details> 

## Like a Post


+ This feture lets you like a post.

<details> 

 
 

<summary>Like a Post</summary> 

 
 

![Like a Post](src/assets/readme/like-post.png) 

 
 

</details> 

## Comment on a Post


+ This feture lets you like a post.

<details> 

 
 

<summary>Comment on a Post</summary> 

 
 

![Comment on a Post](src/assets/readme/comment-post.png) 

 
 

</details> 

## Edit a Comment


+ This feture lets you make a comment on a post.

<details> 

 
 

<summary>Edit a Comment</summary> 

 
 

![Edit a Comment](src/assets/readme/edit-delete-comment.png) 

 
 

</details> 

## Search Bar


+ This lets you search the site for profiles and posts.

<details> 

 
 

<summary>Search Bar</summary> 

 
 

![Search Bar](src/assets/readme/searchbar.png) 

 
 

</details> 

## Most followed Profile


+ This lets you see the most popular profiles on the social website.

<details> 

 
 

<summary>Most followed Profile</summary> 

 
 

![Most followed Profile](src/assets/readme/mostfollowed.png) 

 
 

</details> 

## Contact Admin


+ This lets you Contact the administrator of the site for quieries and also allows you to report offensive content.

<details> 

 
 

<summary>Contact Admin</summary> 

 
 

![Contact Admin](src/assets/readme/contact-admin.png) 

 
 

</details> 

 ### Reuseablity

 Making components reusable makes the site more developer friendly and easeir to maintain. The various components, such as the moredropdown, navbar, and avatar, are reuseable in different parts of the site. This makes the load times quicker as the site does not neeed to relaod the component each time it is used. 
 

## Technologies 

 
 

### Libraries, Frameworks, Tools 

 
 

* [Django 3.2.22](https://www.djangoproject.com/) 

* [Bootstrap 4.6.2](https://getbootstrap.com/docs/4.6/getting-started/introduction/) 

* [Heroku](https://www.heroku.com) 

* [React](https://legacy.reactjs.org/) 

* [Node](https://nodejs.org/en) 

* [ElephantSQL](https://www.elephantsql.com/) 

* [SQLite3](https://www.sqlite.org/index.html) 

* [Google Fonts](https://fonts.google.com/) 

* [Cloudinary 1.36.0](https://cloudinary.com/) 

* [Gunicorn 21.2.0](https://gunicorn.org/) 

* [Psycopg2 2.9.9](https://pypi.org/project/psycopg2/) 

* [GitPod](https://www.gitpod.io/) 

* [GitHub](https://github.com/) 

* [FontAwesome](https://fontawesome.com/) 

* [W3C Validator](https://validator.w3.org/) 

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 

* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) 

* [Balsamiq](https://balsamiq.com/wireframes/?gad=1&gclid=CjwKCAjwr_CnBhA0EiwAci5sikJlbA3yk1dYGRdNiY0Krv7_98bWbqabFd_DxfjzG1-J7kWnl2-byhoC2cIQAvD_BwE) 

 
 

### Languages 

 
 

* [HTML5](https://www.w3schools.com/html/) 

* [CSS3](https://www.w3schools.com/css/) 

* [Javascrpt](hhttps://devdocs.io/javascript/) 

 
 
 

# Testing 

 
 

### Bugs 

 
 

+ My report section was not sending reports to the data base, this was due to an incorect url naming convention. It was an easy fix by changing contact-admins to contact-admin. By removing the s everthing worked fine.


 
 

### Manual Testing



## Features Testing



**Navbar**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| The Coffee Social Logo present | Yes  | Pass |
| Click Logo in navbar | Home page Redirect | Pass |
| Click Home in navbar | Home page Redirect | Pass |
| Click Feed in navbar| Bring user to feed page | Pass |
| Click Like in navbar| Bring user to thier like page | Pass |
| Click Report in navbar| Bring user to contact admin page | Pass |
| Click Log-in | Redirect to Log-in page | Pass |
| Click Log-out | Redirect to Log-out page | Pass |
| Click Sign-up | Redirect to Sign-up page | Pass |
| If user is Logged in logged in content appears in navbar | log-in disappears and log-out appears | Pass |
| Click profile in navbar | Redirect to profile page | Pass |



**Profiles**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Ensure user can register | Yes  | Pass |
| Ensure you can edit your profile (edit password, username and profile picture) | Yes  | Pass |
| Ensure profile page displays correct content | Yes | Pass |
| Ensure users can follow/unfollow other users | Yes | Pass |
| Ensure you can post when logged in | Yes | Pass |
| Make sure you can sign up as an Barista | Yes | Pass |

**Create a Post**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Make sure when pressing Posts in the navbar it redirects you to the post from | Yes  | Pass |
| Make sure that when post is created that it is editable (edit and delete functinality) | Yes  | Pass |
| Make sure the comment and like counters are working apropritley  | Yes  | Pass |
| Make sure infinite scroll is working on the post list page | Yes  | Pass |


**Contact Adiministator**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Make sure you can navagite to contact-admin in navbar and are able to submit the form | Yes  | Pass |


**Like a Post**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Make sure when you press the like button it lights up | Yes  | Pass |
| Make sure when you press the like button the number of likes goes up | Yes  | Pass |
| Make sure when you press the like button again it unlikes the post. | Yes  | Pass |
| Make sure when you navigate to the likes in the navbar you see all the posts youve liked | Yes  | Pass |


**Comment on a Post**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Ensure user can create a comment on a post by clicking the speech icon | Yes  | Pass |
| Make sure when you Edit a comment by clicking the three dots that it works | Yes  | Pass |
| Make sure when you Delete a comment by clicking the three dots and preesing delete | Yes  | Pass |
| Make sure that all the comments on a post can be viewed | Yes  | Pass |
| Make sure that the time you posted the comment is correct | Yes  | Pass |


**Sign-up**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Sign-up form creates an account on the database | Yes  | Pass |
| Form must have a username to create an account | Yes  | Pass |
| Form must have a password to create an account | Yes  | Pass |
| Account will only be created if password is entered twice correctly | Yes  | Pass |
| The sign up button will redirect you to home page | Yes  | Pass |
| The sign up button will redirect to sing-in page | Yes  | Pass |



**Sign-in**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Sign-in form signs in a user if information is correct  | Yes  | Pass |
| Sign-in form does not sign in a user if information is incorrect  | Yes  | Pass |
| Sign-in form will throw a (The username and/or password you specified are not correct.) if password is incorrect| Yes  | Pass |
| Sign-in form will throw a (The username and/or password you specified are not correct.) if username is incorrect| Yes  | Pass |
| The Remember Me if toggled remembers users information | Yes  | Pass |
| Clicking sign-in button will sign you in | Yes  | Pass |
| Clicking sign-in button will also return you to the home page if clicked | Yes  | Pass |



**Sign-out**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Sign-out will only appear in navbar if signed in | Yes  | Pass |
| Sign-out message appear on page asking you are you sure you want to sign out | Yes  | Pass |
| clicking Sign-out will redirect user to home page | Yes  | Pass |

### Code Validation 


+ Before I deployed my App for the final time. I ran the code throught the validator and it passed. 

 

<details> 

 
 

<summary>W3C Validation</summary> 

 
 

![W3C Validation](src/assets/readme/valadation.png) 

 
 

</details> 


 

## Responsiveness Testing 

All pages were tested to ensure responsiveness on screen sizes from mobile to desktop for responsive design on Chrome, Edge, Firefox  browsers.

Steps to test:

+ Open browser and navigate to coffee social.
+ Open the developer tools.
+ Set to responsive and decrease width.
+ Click and drag the responsive window to maximum width
+ See if anything breakes

As i was doing my responsive testing nothing broke in any of the browsers. so i would consider that a pass.

 
 

### Lighthouse 

 
 

+ I used the chrome developer tool lighthouse which gave me the insight of how my webpage looked on diffent screens. Everything looked great on each page. When I ran the lighthouse analysis these are the scores returned to me. Testing was performed and found performance to be poor, this was because there where so many images. This could be combatted or improved by compressing images before uploading them. I didnt have time to implement this but will in the future.

 
 

<details> 

 
 

<summary>Lighthouse</summary> 

 
 

![Lighthouse](src/assets/readme/lighthouse.png) 

 
 

</details> 

### ESlint

Eslint was installed and configured locally. After running, some minor errors where found and fixed, react version not specified but no errors were logged.

This is where i got the information to install https://github.com/jsx-eslint/eslint-plugin-react#configuration

 

## Deployment 

 
 

The first thing you should do when creating a new project is to deploy it as quickly as you can to prevent any nasty errors that might be a pain to fix when your project is complete. For this project I used Heroku to deploy to. So the first thing you need to do is to create a React project in your work space and install all the supporting libraries. Once everything is installed you should make sure everthing is working with some 'hello world' text.

 
 

Just to make a note of this, the database used in the workspace (db.sqlite3) does not work when deployed to Heroku so we need a differnt database when deplying. I used ElephantSQL database as it was free and works with Heroku. 

 
 

### Deploying To Heroku

+ sign in or create an account if you have to.

+ Click on the New Button on the to right hand corner.

+ enter the name of your new App.

+ select a region.

+ click create.

+ Click on the deploy tab.

+ Conecet to your git hub repository.

+ At the bottom of the deployed tab click on manualy deploy.

+ select the main barnch and click deploy.

+ Good Luck!

### Run Localy

+ Go to the GitHub repo you want to clone

+ Click on the code dropdown menu

+ Select the HTTPS

+ Copy the repo link

+ Open your IDE and in the terminal type git copie-git-url

+ the project you copied is now on your local computer.


 


 
## Conclusion

This project has thought me a lot about the differnt technologies used. It has also thought me a lot about time constrains and working to a deadline. The deadlines forced me to prioritize different parts of the project with User Stories and MoSCoW thinking. Moving on if you get stuck on something small and come back to it at a later time is a must when you have time constraints. Keeping everything well documented is a must when not fully finishing a feature (if you get stuck) so that when you come back to the feature you can pick up where you left off. 

## Credits 

+ Thanks to the tutors at Coding institute and to my mentor Gareth for guiding me through my project. I would also like to thank Katie Duggan for proofreading the content.
 



+ Fontawesome for icons [Fontawesome](https://fontawesome.com/icons/rss?f=classic&s=solid) 


+ Upload icon [iconscout](https://iconscout.com/free-icon/no-results-4677121) 


### Media 

 
+ This gave me some stock images for the site  [istockphoto](https://www.istockphoto.com/stock-photos) 

+ Favicon was generated by [favicon](https://favicon.io/favicon-generator/) 

+ Page not found icon  [icons8](https://icons8.com/icons/set/magnifying-glass--yellow) 


 
 

 