const inquirer = require( "inquirer" );

//const fs = require( "fs" );
//const generatePage = require( "./src/page-template.js" );
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

 inquirer
   .prompt([
      {
         type: "input",
         name: "name",
         message: "What is your name?"
      }
   ])
   .then( answers => console.log( answers ));

/* 
 fs.writeFile( ".index.html", pageHTML, err => {
   if ( err ) throw err;

   console.log( "Portfolio complete! Check out index.html to see the output!" );
 }); */
