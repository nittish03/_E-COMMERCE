there is already a build folder in the app... so the app can be easily started using commands
 npm install -g serve
   serve -s build

(make sure that the server is running in the node-server folder (index.js))
to start the server. run the command 
nodemon index.js or node index.js in node server folder.
after that... start the app

   or... you can first make the build version of the app by writing the command
   npm run build

   after the build folder is created . the app can be started by 
    npm install -g serve
   serve -s build
