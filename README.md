# The Corner Bistro 

## Introduction 

The Coffee Social API is Back-end database that caters for my front-end React project, the Coffee Social. the coffee Social is a social site for coffee lovers to post or blog about there coffee jerney and or to trubble shoot there coffee recipes.

The site allows an Admin user to login using a pre-registered login(superuser) from there the Admin-user can create, read, update and delete(CRUD) Profiles, post and comments. 

This website also allows a users to create a login, make a post on the wbesite and view an edit the there posts and comment/like others. 

To create this website Agile principles where used. The frameworks used were django and Django rest framwork. 

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

 
 

## Agile Methodologie 

 
 

Agile principles were utilised throughout the planning and development of this project. The tecnoligy used in this project was github issues which were categorised into user storys, seperate out into tasks for various aspects of the project. The issues were then added into a project board through github issues as shown. 

 
 

<details> 

 
 

<summary>Agile</summary>  

 
 

![Agile](booking_service/static/images/readme/agile_pic.png) 

 
 

</details> 

 
 
 

I created a user storys template through github issues to layout each user stories containing acceptance criteria. These requirements were altered through the project as things dont always go to plan and new ideas can happen. I also used the MoSCoW method while developing this project this helped to prioritize certian feature ahead of others by using tags on the user storys into three differnt actagorys (Must Haves, Should Have, Could Have). By focusing on the Must Haves first you end up with a MVP (minimuim viable prject) qiucker. 

 
 

<details> 

 
 

<summary>User Storys</summary>  

 
 

![User Storys](booking_service/static/images/readme/agile-user-storys.png) 

 
 

</details> 

 
 

## User Experience 

 
 

As a new visitor to the site, I would like to be able to make a booking and edit it acourdingly. i would also like to be able to login to the website so that i may find and edit my booking. As a returning customer, I want to be able to easily navigate the site and quickily find what I'm looking for. I would also like the ability to contact the Resteraunt directly through their website. 

 
 

### The User Experience Design was constructed using the five planes. 

 
 

+ Stratagy: Is this content relvent to the user and is it culturally appropriate? 

+ Scope: Are we accomplishing our goals of broadcasting The Corner Bistros ethos. 

+ Structure: How many pages should we have in our website and why? 

+ Skeleton: Does the structure of the wireframe meet the users needs? Is the web page responsive? 

+ Surface: Does the site look good visully? Does it have enough images and colours? 

 
 

<details> 

 
 

<summary>Desktop Landing Page</summary>  

 
 

![Large Screen Dashboard](booking_service/static/images/readme/wireframe-landingpage.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>Mobile Landing Page</summary>  

 
 

![Small Screen Dashboard](booking_service/static/images/readme/wireframe-mobile.png) 

 
 

</details> 

 
 

# Features 

 
 

## Navbar


+ The Navbar contains the logo for the website and when you click on it it will bring you to the home page. 

+ The sticky navbar, has 8 differnt heading, the heading will change if you are login from login to loggout. 

+ The header reflects the login state of the user by showing the login or the log out icon inthe header. 

 
 

<details> 

 
 

<summary>Login</summary>  

 
 

![Login](src/assets/readme/navbar-loggin.png) 

 
 

</details> 

<details> 

 
 

<summary>Loggout</summary>  

 
 

![Logout](src/assets/readme/navbar-logout.png) 

 
 

</details> 

 
## Log-in form

+ The log in on the navbar will disapear when you have logged in confreming your login 

+ on the login form you can also sign up if you havent alread done so. 

<details> 




<summary>Log-in</summary>  

 
 

![Log-in](src/assets/readme/signin.png) 

 
 

</details> 

 
 

## Sign-up form

 
 

+ The sign-up form maneks you enter your new password twice and is case sensitve. when youve sign-up it will bring you to the sign-in page outomaticly.

 
 

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

 
 

+ the edit profile page lets you add a profile picture, edit you password and user name or add yourself as a Barista user.

 
 

<details> 

 
 

<summary>Edit Profile Page</summary> 

 
 

![Edit Profile Page](src/assets/readme/profile-edit.png) 

 
 

</details> 

 
 
## Barista registation form

 
 

+ This form lets you sign up as a barista.

 
 

<details> 

 
 

<summary>Barista registation form</summary> 

 
 

![Barista registation form](src/assets/readme/barista-registation.png) 

 
 

</details> 

 
 

## Barista Page


+ this page lets you see the barista that are registeed and you create reviews and lets you see others reviews

<details> 

 
 

<summary>Barista Page</summary> 

 
 

![Barista Page](src/assets/readme/barista-page.png) 

 
 

</details> 


## Reviews Page


+ This page lets you review barista that are registered 

<details> 

 
 

<summary>Reviews Page</summary> 

 
 

![Reviews Page](src/assets/readme/reviewpage.png) 

 
 

</details> 


## Reviews Form


+ This page lets you write a review for baristas.

<details> 

 
 

<summary>Reviews Form</summary> 

 
 

![Reviews Form](src/assets/readme/reviews.png) 

 
 

</details> 

## Post Form page


+ This page lets you create a post with images and contect.

<details> 

 
 

<summary>Post Form page</summary> 

 
 

![Post Form page](src/assets/readme/makeapost.png) 

 
 

</details> 

## Edit Posts


+ This page lets you create a post with images and contect.

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


+ This lets you see the most popular profiles on the sociial website.

<details> 

 
 

<summary>Most followed Profile</summary> 

 
 

![Most followed Profile](src/assets/readme/mostfollowed.png) 

 
 

</details> 

## Contact Admin


+ This lets you Contact the administaor of the site for quieries and reports offensive content.

<details> 

 
 

<summary>Contact Admin</summary> 

 
 

![Contact Admin](src/assets/readme/contact-admin.png) 

 
 

</details> 

 
 

## Technologies 

 
 

### Libraries, Frameworks, Tools 

 
 

* [Django 3.2.22](https://www.djangoproject.com/) 

* [Bootstrap 4.6.2](https://getbootstrap.com/docs/4.6/getting-started/introduction/) 

* [Heroku](https://www.heroku.com) 

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

* [CI pep8 linter](https://pep8ci.herokuapp.com/) 

* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) 

* [Balsamiq](https://balsamiq.com/wireframes/?gad=1&gclid=CjwKCAjwr_CnBhA0EiwAci5sikJlbA3yk1dYGRdNiY0Krv7_98bWbqabFd_DxfjzG1-J7kWnl2-byhoC2cIQAvD_BwE) 

 
 

### Languages 

 
 

* [HTML5](https://www.w3schools.com/html/) 

* [CSS3](https://www.w3schools.com/css/) 

* [Python 3.9](https://www.python.org/downloads/release/python-390/) 

 
 
 

# Testing 

 
 

### Bugs 

 
 

+ My login, logout and signup template from allauth where not loading my base templates. 

  + The fix was to move my booking_service app in the installeed app section in setting.py above the allauth installed app. this means the booking_service app was loading first. 

+ When I try to view my Booking detials it shows me multiple Booking. This bug has not yet been resolved but will be in the future. Due to time constaints I must leave the bug in for now.

  + The fix i believe is using a primary Key on each booking. When you want to see a booking call the primary key in the views.py file. 

 
 

### Manual Testing



## Features Testing



**Navbar**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| The Corner Bistro Logo present | Yes  | Pass |
| Click Logo in navbar | Home page Redirect | Pass |
| Click Home in navbar | Home page Redirect | Pass |
| Click Menu in navbar| Bring user to menu page | Pass |
| Click Log-in | Redirect to Log-in page | Pass |
| Click Log-out | Redirect to Log-out page | Pass |
| Click Sign-up | Redirect to Sign-up page | Pass |
| If user Logged in booking appears in navbar | log-in disappears and booking appears | Pass |
| Click Booking in navbar | Redirect to Booking page | Pass |



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
| Make sure infinit scroll is working on the post list page | Yes  | Pass |


**Contact Adiministater**



|Test  | Expected Outcome  | Pass or Fail |
|--|--|--|
| Make sure you can navagite to contact-admin in navbar and be able to submit the form | Yes  | Pass |


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
| Make sure when you Edit a comment by clicking the three dot it works | Yes  | Pass |
| Make sure when you Delete a comment by clicking the three dot and preesing delete | Yes  | Pass |
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
| Sign-in form dose not signs in a user if information is incorrect  | Yes  | Pass |
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

 
 

### HTML 

 
 

+ Before I deployed my App for the final time. I ran the code throught the validator and it pass. 

 
 

<details> 

 
 

<summary>W3C Validation HTML</summary> 

 
 

![W3C Validation HTML](booking_service/static/images/readme/validation_testing/html-validater.png) 

 
 

</details> 

 
 

### CSS 

 
 

+ Before I deployed my App for the final time. I ran the code throught the validator and it pass. 

 
 

<details> 

 
 

<summary>W3C Validation CSS</summary> 

 
 

![W3C Validation CSS](booking_service/static/images/readme/validation_testing/css-validation.png) 

 
 

</details> 

 
 

### Python 

 
 

+ Before I deployed my App for the final time. I ran the code throught the PEP8 validator and it pass. 

 
 

<details> 

 
 

<summary>view.py</summary> 

 
 

![view.py](booking_service/static/images/readme/validation_testing/view.py_validation.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>setting.py</summary> 

 
 

![setting.py](booking_service/static/images/readme/validation_testing/setting.py_validator.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>models.py</summary> 

 
 

![models.py](booking_service/static/images/readme/validation_testing/models.py_validation.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>form.py</summary> 

 
 

![form.py](booking_service/static/images/readme/validation_testing/form.py-validation.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>corner bistro url.py</summary> 

 
 

![corner_bistro_url.py](booking_service/static/images/readme/validation_testing/corner_bistro_url.py_validation.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>booking service url.py</summary> 

 
 

![booking_service_url.py](booking_service/static/images/readme/validation_testing/booking_service_url.py_validator.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>app.py</summary> 

 
 

![app.py](booking_service/static/images/readme/validation_testing/app.py_validation.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>admin.py</summary> 

 
 

![admin.py](booking_service/static/images/readme/validation_testing/admin.py_valation.png) 

 
 

</details> 

 
 

## Responsiveness Testing 

All pages were tested to ensure responsiveness on screen sizes from mobile to desktop for responsive design on Chrome, Edge, Firefox  browsers.

Steps to test:

+ Open browser and navigate to coffee social.
+ Open the developer tools.
+ Set to responsive and decrease width.
+ Click and drag the responsive window to maximum width
+ See if anything breakes

As i was doing my responsive testing nothing broke in any of the browers. so i would consider that a pass.

 
 

### Lighthouse 

 
 

+ I used the chrome developer tool light house witch gave me the insight of how my webpage looked on diffent screens everything looked great on each page and when i ran the light house analizs these are the score i got returned to me. 

 
 

<details> 

 
 

<summary>Booking page</summary> 

 
 

![Booking page](booking_service/static/images/readme/lighthous_testing/lighthouse_booking.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>Home page</summary> 

 
 

![Home page](booking_service/static/images/readme/lighthous_testing/lighthouse_home.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>login page</summary> 

 
 

![login page](booking_service/static/images/readme/lighthous_testing/lighthouse_login.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>Menu page</summary> 

 
 

![menu page](booking_service/static/images/readme/lighthous_testing/lighthouse_menu.png) 

 
 

</details> 

 
 

<details> 

 
 

<summary>Menu page</summary> 

 
 

![menu page](booking_service/static/images/readme/lighthous_testing/lighthouse_sign_up.png) 

 
 

</details> 

 
 

## Deployment 

 
 

The first thing you should do when creating a new project is to deploy it as quick as you can to prevent any nasty errors that might be a pain to fix when your project is complete. For this project I used Heroku to deploy too. The framework I used in this project was Django, so the first thing you need to do is to create a Django project in you work space and install all the supporting libraries. Once evrthing is installed you should you should make a migration to the database with a small model to make sure everything works. 

 
 

Just to make a note of this the database used in the workspace (db.sqlite3) does not work when deployed to Heroku so we need a differnt database when deplying. I used ElephantSQL database as it was free and works with Heroku. 

 
 

### Installing Django and Libraries 

 
 

+ Step 1: Django and Gunicorn installation enter in the terminal: 

 
 

        pip3 install 'django<4' gunicorn 

+ Step 2: Install Supporting Libraries in the terminal: 

 
 

        pip3 install dj_database_url==0.5.0 psycopg2 

+ Step 3: Install Cloudinary Libraries in the terminal: 

 
 

        pip3 install dj3-cloudinary-storage 

        pip3 install urllib3==1.26.15 

+ Step 4: Create a requirements file in the terminal: 

 
 

        pip3 freeze --local > requirements.txt 

+ Step 5: Create a Project in the terminal: 

 
 

        django-admin startproject *Your Project name*. 

+ Step 6: Create a App in the terminal: 

 
 

        python3 manage.py startapp *App name* 

+ Step 7: Add App name to the  Installed Apps in setting.py file. 

 
 

+ Step 8: Migrate the changes enter in the terminal: 

 
 

        python3 manage.py migrate 

+ Step 9: Run the local server to make sure that everthing works, enter in the terminal: 

 
 

        python3 manage.py runserver 

+ Step 10: Add your local URL from the preview page to your setting.py file in the section thats called ALLOWED HOST. You must also Add your Heroku URL here too. 

 
 

+ Step 11: Create ElephantSQL Database, by creating/login to your account, creating a new instance, and copying the URL into Heroku (See step 13) 

 
 

+ Step 12: Create a new Heroku project by creating/login to your account and clicking (Create new app). Pick a name for your project and the region that your project is base in. Then click CREATE APP. 

 
 

+ Step 13: In the Heroku app setting click on Reveal Config Vars, add DATABASE_URL as a value with the URL from ElephantSQL as the Key. Repeat this step for SECRET_KEY, DEBUG, CLOUDINARY_URL, Port and DISABLE_COLLECTSTATIC as seen in the image below. 

 
 

    <details> 

 
 

    <summary>config var Image</summary>  

 
 

    ![config var](booking_service/static/images/readme/config-var.png) 

 
 

    </details> 

 
 

+ Step 14: IN your workspace create an env.py file to store all your sensative data, like in step 13 add your DATABASE_URL, SECRET_KEY and CLOUDINARY_URL to this file. at the top of this file add import os. 

 
 

    <details> 

 
 

    <summary>Env.py</summary>  

 
 

    ![Env.py](booking_service/static/images/readme/env.py.png) 

 
 

    </details> 

 
 

+ Step 15: Go back to setting.py file and at the top add these lines of code 

 
 

        from pathlib import Path 

        import os 

        import dj_database_url 

        if os.path.isfile('env.py'): 

            import env 

 
 

    <details> 

 
 

    <summary>Top of Setting.py</summary>  

 
 

    ![Top of Setting.py](booking_service/static/images/readme/top_of_setting.py.png) 

 
 

    </details> 

 
 

+ Step 16: In Setting.py find where it say SECRET_KEY and replace it with: 

 
 

        SECRET_KEY = os.environ.get('SECRET_KEY') 

 
 

+ Step 17: IN setting.py find the section DATABASES and comment out the section of code. 

 
 

    <details> 

 
 

    <summary>Database Comment Out</summary>  

 
 

    ![Database Comment Out](booking_service/static/images/readme/database_comment_out.png) 

 
 

    </details> 

 
 

+ Step 18: IN setting.py just below DATABASES the commented out section, add this code. 

 
 

        DATABASES = { 

            'default': dj_database_url.parse(os.environ.get("DATABASE_URL")) 

        } 

 
 

    <details> 

 
 

    <summary>Database Add</summary>  

 
 

    ![Database Add](booking_service/static/images/readme/database_add.png) 

 
 

    </details> 

 
 
 

+ Step 19: At this point it is a good idea to make a migration, so in the terminal: 

 
 

        python3 manage.py migrate 

 
 

+ Step 20: IN setting.py in the Installed Apps section add (location added is importent see image below): 

 
 

        'cloudinary_storage', 

        'cloudinary', 

 
 

    <details> 

 
 

    <summary>Cloudinary</summary>  

 
 

    ![Cloudinary](booking_service/static/images/readme/cloudinary_apps.png) 

 
 

    </details> 

 
 

+ Step 21: IN setting.py find the area called Static files and add this code.(makes Django use cloudinary for storing static files) 

 
 

        STATIC_URL = '/static/' STATICFILES_STORAGE = ('cloudinary_storage.storage.' 'StaticHashedCloudinaryStorage') STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static'), ] STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles') 

 
 

        MEDIA_URL = '/media/' DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage' 

 
 

        DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField' 

 
 

    <details> 

 
 

    <summary>Cloudinary Static</summary>  

 
 

    ![Cloudinary Static](booking_service/static/images/readme/cloudinary_static_media.png) 

 
 

    </details> 

 
 

+ Step 22: IN setting.py add this code just below BASE_DIR 

 
 

        TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates') 

 
 

+ Step 23: create 3 new in the base directory static templates and media 

 
 

+ Step 24: IN setting.py In the templates array add this: 

 
 

        'DIRS': [TEMPLATES_DIR], 

 
 

    <details> 

 
 

    <summary>TEMPLATES</summary>  

 
 

    ![TEMPLATES](booking_service/static/images/readme/templates_setting.png) 

 
 

    </details> 

 
 

+ Step 25: Add a Procfile to the root directory make sire the Procfile has a capital P. In the Procfile add this code: 

 
 

        web: gunicorn cornerbistro.wsgi 

 
 

+ Step 26: In your Heroku app navigate to the setting and add buildpack: heroku/python. 

 
 

+ Step 27: Link your GitHub Repo to your project. 

 
 

+ Step 28: Navigate to the deploy section and click on Automatic deployment (mian) 

 
 

+ Step 29: Well done!! 

 
## Conclusion

This project has thought me a lot about the differnt technologys used. It has also thought me a lot about time constrains and working to a deadline. The deadlines forced me to prioritize differnt parts of the project with User Storys and MoSCoW thinking. Moving on if you get stuck on something small and come back to it at a later time is a must when you have time constains. keeping everything well documented is a must, when not fully finishing feature (if you get stuck) so that when you come back to the feature you can pick up where you left off. 

## Credits 

+ Thanks to the tutors at Coding instatute and to my mentor Anthony for guiding me through my project. I would also like to thank Katie Duggan for proofreading the content.
 

+ This help me set up the time zone correctly  [Timezone](https://www.educative.io/answers/what-is-djangoutilstimezone) 

+ Fontawesome for icons [Fontawesome](https://fontawesome.com/icons/rss?f=classic&s=solid) 


+ Upload icon [iconscout](https://iconscout.com/free-icon/no-results-4677121) 


### Media 

 
 

Background image was taken from [pexels](https://www.pexels.com/search/bistro/) 

 
 

Favicon was generated by [favicon](https://favicon.io/favicon-generator/) 

 
 

 