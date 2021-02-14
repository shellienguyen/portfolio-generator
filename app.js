const inquirer = require( "inquirer" );
const generatePage = require( "./src/page-template.js" );
const { writeFile, copyFile } = require( "./utils/generate-site.js" );
//const { COPYFILE_FICLONE_FORCE } = require("constants");
//const pageHTML = generatePage( name, github );

//let profileDataArgs = process.argv.slice( 2 );
//const [ name, github ] = profileDataArgs;

/*
const printProfileData = profileDataArr => {
   // This ...
   for ( let i = 0; i < profileDataArr.length; i++ ){
      console.log( profileDataArr[ i ] );
   };

   console.log( "================" );

   // Is the same as this ...
   profileDataArr.forEach(( profileItem ) => {
      console.log( profileItem );
   });

   console.log( "================" );

   // Or this ...
   profileDataArr.forEach( profileItem => console.log( profileItem ));
};

printProfileData( profileDataArgs );
*/


//const generatePage = () => "Name: Shellie, Github: shellienguyen";
//console.log( generatePage() );
//const generatePage = ( userName, githubName ) => `Name: ${userName}, Github: ${githubName}`;

/* 
const generatePage = (userName, githubName ) => {
   return `
      Name: ${userName}
      GitHub: ${githubName}
   `;
};
 */
/* 
console.log( name, github );
console.log( generatePage( name, github ));
 */

const promptUser = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "What is your name?",
         validate: nameInput => {
            if ( nameInput ) {
               return true;
            }
            else {
               console.log( "Please enter your name!" );
               return false;
            };
         }
      },
      {
         type: "input",
         name: "github",
         message: "Enter your Github Username:",
         validate: githubUsernameInput => {
            if ( githubUsernameInput ) {
               return true;
            }
            else {
               console.log( "Please enter your Github Username!" );
               return false;
            };
         }
      },
      {
         type: "confirm",
         name: "confirmAbout",
         message: 'Would you like to enter some information about yourself for an "About" section?',
         default: true
      },
      {
         type: "input",
         name: "about",
         message: "Provide some information about yourself:",
         when: ({ confirmAbout }) => {
            if ( confirmAbout ) {
               return true;
            }
            else {
               return false;
            };
         }
      }
   ]);
};

const promptProject = portfolioData => {
   console.log( `
=================
Add a New Project
=================
`);
   // If there is not a "projects" array property, create on
   if ( !portfolioData.projects ) {
      portfolioData.projects = [];
   };

   return inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "What is the name of your project?",
         validate: projectNameInput => {
            if ( projectNameInput ) {
               return true;
            }
            else {
               console.log( "Please enter the name of your project!" );
               return false;
            };
         }
      },
      {
         type: "input",
         name: "description",
         message: "Provide a description of the project (Required):",
         validate: projectDescInput => {
            if ( projectDescInput ) {
               return true;
            }
            else {
               console.log( "Please enter the description of your project!" );
               return false;
            };
         }
      },
      {
         type: "checkbox",
         name: "languages",
         message: "What did you build this project with? (Check all that apply):",
         choices: [ "JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
      },
      {
         type: "input",
         name: "link",
         message: "Enter the GitHub link to your project. (Required):",
         validate: githubLinkInput => {
            if ( githubLinkInput ) {
               return true;
            }
            else {
               console.log( "Please enter the Github link to your project!" );
               return false;
            };
         }
      },
      {
         type: "confirm",
         name: "feature",
         message: "Would you like to feature this project?",
         default: false
      },
      {
         type: "confirm",
         name: "confirmAddProject",
         message: "Would you like to enter another project?",
         default: false
      }
   ])
      .then( projectData => {
         portfolioData.projects.push( projectData );

         if ( projectData.confirmAddProject ) {
            return promptProject( portfolioData );
         }
         else {
            return portfolioData;
         };
      })
};

/* 
const mockData = {
   name: "Shellie",
   github: "shellie",
   projects: []
};

const pageHTML = generatePage( mockData );
 */

/* 
promptUser()
   .then( promptProject )
   .then( portfolioData => {
      console.log( portfolioData );
      const pageHTML = generatePage( portfolioData );
      
      fs.writeFile( "./dist/index.html", pageHTML, err => {
         if ( err ) {
            console.log( err );
            return;
         };

         console.log( "Page created! Check out index.html in this directory to see the output!" );
         
         fs.copyFile( "./src/style.css", "./dist/style.css", err => {
            if ( err ) {
               console.log( err );
               return;
            };

            console.log( "Style sheet copied successfully!" );
         });
      });
});
 */

 promptUser()
   .then( promptProject )
   .then( portfolioData => {
      return generatePage( portfolioData );
   })
   .then( pageHTML => {
      return writeFile( pageHTML );
   })
   .then( writeFileResponse => {
      console.log( writeFileResponse );
      return copyFile();
   })
   .then( copyFileResponse => {
      console.log( copyFileResponse );
   })
   .catch( err => {
      console.log( err );
   });