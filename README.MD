# Starting on tests

This repo is an step by step tutorial to start and project using TDD and configure our developer pipeline to ensure consistency and test coverage

## Git aliases

- Create folder and start git on it
- `$ git config --local --edit` - show git config file for this directory in default editor (vim), you can change the file if you're comfortable with this interface
- `$ git config --local core.editor "code"` - change the default editor do visual code
- run again `$ git config --local --edit` - now the configuration file will be open in VSC

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
This lib creates a pre-commit hook that checks your commit subject to see if is following that pattern

```$
npm i -D git-commit-msg-linter
```

Don't forget to commit this chore to ensure an nice git commit stack.

## Husky Pre Commiter

Just like Commit Msg Linter, we'll use another lib to create ours own git hooks, this will enable us to check if our code is ok with patterns we decide to use and every tests is passing before ours commits 

`$ npx husky-init`

This command will change our package.json including Husky as devDependency, adding an new script 'prepare' this is to run husky every time we start to work with this project and run npm i to first install of dependencies 

You will notice an new folder named `.husky` and inside an file named `pre-commit` here e will configure what we want husky execute before every commit

After that we need to run install to download husky

`$ npm i` 

Just for check if its working, change the last line on `.husky/pre-commit` file

```$
    (...)
    echo "Husky first running"
```

Now we need to commit this new chore, and you can see our message "Husky first running" on terminal

👍🏼 Really cool!!!

## Standard JS

We will use an linter for our js files, this linter wil check if our file

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

After that you can change again the file and execute an new commit for this chore


## Tech

Libs We are using for this tutorial

- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) - Check our commit messages
- [husky](https://typicode.github.io/husky/#/) - add hooks to our commits
- [jest](https://jestjs.io/) - Test framework
- [lint-staged](https://www.npmjs.com/package/lint-staged) - run scripts on staged files
- [standard](https://standardjs.com/) - linter and auto fix our js code
