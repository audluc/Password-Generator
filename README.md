# Password-Generator
Create a Javascript Password Generator that includes; 
      *A secure password
      *A button to generate a password
      *Then present with a series of prompts to create the password
      *The password needs to include;
         *The length of the password (8-128 characters)
         *Upper, lower, numberic, or special character case 
         *This needs to be answered with prompt questions
         *The password needs to include all criteria when generated
         *Needs to be displayed within the password box
         
I did not alter the Html or the CSS coding. I created a Script page for Javascript.
In the JS coding I included lower, upper, numeric, and special character arrays. These arrays include all examples of lower, upper, numeric, and special characters. 
Then I created a function for the prompting options. These include the questions displayed in the prompt. I added a return option to set the criteria for creating the password.
I then created "if" options so true statements would be recognized and false statements would not be included
Then a return final was created, basically letting the generator know the prompts have been answers and depending on the true/false statements use the information to generate a password.
A random function was coded to instruct to randomize the given arrays based off the criteria.
Then a button was created to acknowledge that a request is being made.
Another function was created to actually generate the password and then an addEventListener to display in password area.
