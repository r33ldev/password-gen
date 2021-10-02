## Hello and welcome to GenPass

This tiny project has only one purpose in its life and that is to generate a random password

It runs with nodejs, and the dependencies used are

    chalk
    commander
    clipboardy


To run this project on your local machine

first clone the repo by running
       
       git clone https://github.com/j4jedah/JEDIDIAH_APPS-1-Password-Generator-.git

install all the required dependencies by running
       
       yarn install

to see all available commands, run
       
       node index.js -h

to generate a random password run
       
       node index.js 

The above commmand will will generate a random password of 8 characters, numbers and symbols included.

If you want to customize the generated password, you should run 
      
      node index.js --length=40 -nn -ns
    
    add -nn and -ns if you do not want numbers and symbols in the generated password.

Finally, if you want to save the generated password to a file, named password.txt in the root directory, run     
        
        node index.js --length=40 --save

This command will create the file if it does not exist


Note: To run this app from any where in your local machine, 
you should run 
       
       yarn link 
       
### And now, you can run from any where.

## Options

| alias | command           | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 8) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |

## I am going to convert this to typescript in a day or two... 
