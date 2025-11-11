CLI tool that generates code from the template (reference)
- takes 2 arguments: name  and dist
- generates file {name}.js  in the corresponding folder if dist passed, or in the current folder
-creates missing folders from dist parameter
- dist  supports both relative and absolute paths
- Usage example node generate.js --name MyAwesomeComponent --dist ./my_awesome_directory
