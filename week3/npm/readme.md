# npm setup

## step1 - initialise npm in our app.

Use command `npm init -y` in bash/powershell terminal. Ensure `"type": "module"` is added at the end of `package.json` so the app is instructed to understand ES6.

## step2 - install packages

Paste install into terminal (commonly `i packageName`). Check documentation on how to install.
New files and folders will appear in your project. `package-lock.json` is a full version of `package.json`, and is the data the node needs to run (never edit!).
You can instal globally (`g packageName`), but do not do this under normal circumstances.
To uninstall, "npm uninstall packageName" in terminal.

## step3 - add a .gitignore file

This will contain the names of the files you dont want to push to GitHub.
Create this manually. Always put `node_modules` in the file and add any others on seperate lines, never add the JSON files.

We can now use the package!

## extra set - add new scripts to your package.json

add `"cowsay": "node cowsay.js" ` in package.json, under `scripts`, and it will be able to run in Veet or others, rather than just in Node (it can now run in Node with `npm run fileName`).
You can also add `"dev": "node app.js"` to run your file by just typing `npm run dev`.
