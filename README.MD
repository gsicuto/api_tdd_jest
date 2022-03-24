# Starting on tests

This repo is a step by step tutorial on how to start a project using TDD and set up our developer pipeline to ensure consistency and test coverage

## Git aliases

- Create folder and start git in it
- `git config --local --edit` - show git config file for this directory in default editor (vim), you can change the file here if you're comfortable with this interface
- `git config --local core.editor "code"` - change the default editor to visual code
- run again `git config --local --edit` - now the configuration file will be open in VSC

- Create aliases for our git flow: 
    -   'c' - add files to stage and commit; 
    -   'l' - show logs with custom format; 
    -   's' - show status from our staged files in shor way
      
```$
(...)
[alias]
    c = !git add . && git commit -m
    l = !git log --pretty='%C(blue)%h %C(white)%s %C(cyan)%an - %C(green)%cr'
    s = !git status -s
```

## Commit linter hook

We will use a "linter" to avoid doing commits out of pattern
All of ours commits need to have a type definition:

- feat - adding new feature to our commit
- chore - change build process, add libraries or change configurations on our pipeline
- test - includes changes or new tests on our code
- refactor - changes on code that don't changes the behavior

The patern will be `<type>: <subject>` the first word on subject need to be an imperative verb in lowercase
- examples:
    - `chore: add express framework`
    - `feat: create login route for user authentication`
    - `refactor: move createUser method to new file`

check on [Convetional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to more details about commit pattern

To ensure we always make commits using the same pattern we will install *git-commit-msg-linter* as a developer dependency in our project.
This lib creates a pre-commit hook that checks if the commit subject is following that pattern

```$
npm i -D git-commit-msg-linter
```

Don't forget to commit this chore to ensure a nice git commit stack.

## Husky Pre Commiter

Just like Commit Msg Linter, we'll use another lib to create our own git hooks, this will enable us to check if our code is following the patterns we decided to use and if it passes every test before we commit new code.

`$ npx husky-init`

This command will change our package.json including Husky as devDependency, adding the new script 'prepare'. This will run husky every time we start working with this project and we first execute `npm i` install all dependencies.

You will notice a new folder called `.husky` and inside, a file called `pre-commit`. Here we will configure what we want husky to execute before every commit.

After that we need to download and install husky.

`$ npm i` 

To check if it's working, change the last line on `.husky/pre-commit` file

```$
    (...)
    echo "Husky first running"
```

Now we need to commit this new chore, and you can see our message "Husky first running" on terminal

👍🏼 Really cool!!!

## Standard JS

Standard is a style guide, linter and formatter to our js files, you can check the standard rules in [StandardJS Rules](https://standardjs.com/rules.html)

Using standard is simple, first we need to install it as a Dev Dependency

`$ npm i -D standard`

We can already make some tests following standard rules.
Create a js file called **`standardTest.js`** in your project root folder.

Include in this file:

```js
function hello     ()   {
              return {a:1}
}
```

Notice our file is out of pattern with a lot of spaces

run

`$ nxp standard standardTest.js`

Your terminal will list all the problems standard notices in your code

if you run

`$ npx standard standardTest.js --fix` 

The fix option will correct all the problems standard can correct but the fact our function is created but never used we will need to fix it manually.

We want in every commit we run that standard checks the style guide and fix what is fixable, so now we need to change our pre-commit file on husky to run standard

```$
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
    
npx standard --fix
```

:bulb: You can change your test file again, removing style patterns, including extra spaces and, after that, commit this chore to see standard in action.


## Lint Staged

In an real project we'll have an huge amount of files. 
Image with, in every commit we made, automatically run test scripts for every single file, even the files we don't change.
It's unecessary and we can solve that using an lib that will run scripts only on our staged files (in other words all the files that will be changed in our commit)

For that we need to install lint-staged as Dev Dependency

`$ npm i -D lint-staged`

After that create a new file on our project root named **`.lintstagedrc.json`**

With the following content:

```json
{
    "*.js": [
        "echo lint-staged running",
        "npx standard --fix",
        "git add"
    ]
}
```

In this .json we configure lint-staged to every .js file run the following commands on array, first just an message to see lint staged running, after that will check and fix our js standard and if have changes we will add the file again if the changes standard apllies.


To check if its work wil can change your sum.js file and run 

`$ npx lint-staged`

Now we need to tell to husky execute lint-staged so change the file **`.husky/pre-commit`**

```$
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

After that you can change again the file and execute an new commit for this chore and check in your terminal lint-staged running 😊


## Tech

Libs We are using for this tutorial

- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) - Check our commit messages
- [husky](https://typicode.github.io/husky/#/) - add hooks to our commits
- [jest](https://jestjs.io/) - Test framework
- [lint-staged](https://www.npmjs.com/package/lint-staged) - run scripts on staged files
- [standard](https://standardjs.com/) - linter and auto fix our js code
