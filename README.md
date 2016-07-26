# concept-drop
ConceptDrop Coding Task

# Set Up

- Make sure you have Node.js installed on your computer.

- Clone the repo on to your local machine
```git clone https://github.com/roosh1r/concept-drop.git```

- CD in to the newly cloned repo directory
```cd concept-drop```

- You need to install the npm dependencies first.
```npm install```

- Once all the npm packages are installed you need to make sure that you have all the bower modules.
- If you do not have bower installed on your run ```npm install bower -g```
- After you have finished installing bower, run ```bower list``` to check if packages below have been installed. If all the packages are installed, skip the next step.
  * angular v1.5.8
  * angular-route v1.5.8
  * bootstrap v3.3.7
  * jquery v2.2.4
  * font-awesome v4.6.3
- Install any missing packages using ```bower install <package-name>#<version>```

# Running the application
- Now that all the packages and modules have been installed, you are ready to launch the application locally.
- Use ```npm start```
- You shoud see the following message: ```App listening on port 3000```
- Navigate to ```http://localhost:3000/``` to see the application

# Additional things I would've like to do
- Integrate the price modifiers in calculating the total cost
- Improve user experience by providing them feedback about their progress on the form
- Improve the salience of requried fields. Have pattern matching to give immedieate response to the user about their input.
- Change the visual styling for the file input buttons/area.
- Use a mongodb collection to post the form data upon submission
