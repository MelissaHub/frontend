## Backend

----------
Backend routes for the App. Goal is to make a Pitch site for any and all pitches a user would want to keep organized.

----------

## Getting started / Prerequistes

## React Installations

- npx create-react-app (name)
- npm i axios
- npm i react-router-dom@6



### Mongoose
-----------
- In your .env PORT = 3000
- Add your MONG URI = (link)




### Create these files and folders

### Inside Src Folder
- (folder) componets (apparently this is also where pages are supposed to be instead)
   -- Footer.js
   -- Nav.js
- (folder) pages (Schema)
    -- Create.js
    -- Edit.js
    -- Home.js
    -- Profile.js
    -- Project.js
- (folder) services (Axios Routes)
  -- bwu-api.js



  ## App.js starter
  -----
  - Import all your pages/ componets indiviually
  - Import the Browser Routes / Router
  - You can chose to play with your CSS and install Bootstrap
  - Set up your routes and router ( I put nave and Footer on outside since will be on all pages)

  ## Pages / Componets / Notes
  Once you add your skeletal callback functions in each ( npm start) to see if things are simply connected. This will automatically notify you of errors on screen.
  From there you can use the code presented with to perform each task. Make sure the App Routes on your App.js coicide to where you want your links to go to, especially for the /:id. 
  Keep and eye on how the functions from the Api are called as well as the Syntax for the folders.


  ### Bootstrap
    - npm i bootstrap (whats on site)
    - import 'bootstrap/dist/css/bootstrap.min.css' (public index.js)
    - <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"> (index.html in head)


  ## bwu-api.js (axios)
  -----
  This just be the local host link at first and then heroku when comleted and push 

  - Seeding
  - Index
  - Delete
  - Update
  - Create
  - Show


  ## in folder run nodemon