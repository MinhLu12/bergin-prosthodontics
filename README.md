# Bergin Prosthodontics

I. Software Needed:
* Git
* Node.Js
* Visual Studio Code


II. Steps to Run: 
* Download a copy of the latest commit
* Open Git-Bash
* Find the directory that contains the .json file
* Use npm to run the React application. 
Type + enter 'npm install' to install npm. Type 'npm start' to launch the website in your browser. 

Make sure only to use 'npm ci' in the build process to retain the dependency graph, and 'npm install' to install specific dependencies. 'npm ci' will delete everything in the node_modules folder, but will re-install the exact dependencies specified in the package-lock.json file if it already exists. Otherwise, 'npm install' needs to be used. 


NOTE: If you're running the website on a Windows machine, make sure to toggle the package.json and global.scss files to the LF end-of-line sequence mode! Otherwise you will get a build error in React.js


