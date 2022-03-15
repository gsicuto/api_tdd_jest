# Starting on tests

This repo is an step by step tutorial to start and project using TDD and config our developer pipeline to ensure consistency and test coverage

## Git aliases

- Create folder and start git on it
- `git config --local --edit` - show git config file for this directory on core editor (vim), just for looking you can change here the file if you're comfortable
- `git config --local core.editor "code"` - change de core editor do visual code
- run again `git config --local --edit` - now the config file will be open on vsc

- Create aliases for our git flow: 
    -   'c' - add files to stage and commit; 
    -   'l' show logs with custom format; 
    -   's' show status from our staged files in shor way
    ```
    (...)
    [alias]
	    c = !git add . && git commit -m
	    l = !git log --pretty='%C(blue)%h %C(white)%s %C(cyan)%an - %C(green)%cr'
	    s = !git status -s
    ```

## Commit linter hook

We will use an linter to avoid doing commits out of pattern
All of ours commits need to have an type definition:
- feat - adding new feature to our commit
- chore - change build process, add libraries our change configurations on our pipeline
- test - includes changes or new tests on our code
- refactor - changes on code that not changes te behavior

The patern will be `<type>: <subject>` the first word on subject need to be an imperative verbe in lowercase
- examples:
    - `chore: add express framework`
    - `feat: create login route for user authentication`
    - `refactor: move createUser method to new file`

check on [Convetional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to more details about commit pattern

For ensure we allways make commits using that pattern we will install git-commit-msg-linter as developer dependency on our code this lib create an pre-commit hook that checks your commit subject to see if is following that pattern

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
