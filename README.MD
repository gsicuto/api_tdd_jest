# Starting on tests

This repo is an step by step tutorial to start and project using TDD and configure our developer pipeline to ensure consistency and test coverage

## Git aliases

- Create folder and start git on it
- `git config --local --edit` - show git config file for this directory in default editor (vim), you can change the file here if you're comfortable with this interface
- `git config --local core.editor "code"` - change the default editor to visual code
- run again `git config --local --edit` - now the configuration file will be open in VSC

- Create aliases for our git flow: 
    -   'c' - add files to stage and commit; 
    -   'l' - show logs with custom format; 
    -   's' - show status from our staged files in shor way
    ```
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

```sh
npm i -D git-commit-msg-linter
```

## Tech

Libs We are using for this tutorial

- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) - Check our commit messages
- [husky](https://typicode.github.io/husky/#/) - add hooks to our commits
- [jest](https://jestjs.io/) - Test framework
- [lint-staged](https://www.npmjs.com/package/lint-staged) - run scripts on staged files
- [standard](https://standardjs.com/) - linter and auto fix our js code
