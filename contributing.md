# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Project setup

1.  Fork and clone the repo
2.  `npm install` to install dependencies
3.  `npm start validate` to validate you‘ve got it working
4.  Create a branch for your PR

This project uses [nps](https://npmjs.com/package/nps) and you can run `npm start` to see what scripts are available.

> Tip: Keep your `master` branch pointing at the original repository and make pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/DJTB/hatsuon
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a “remote” called “upstream”, Then fetch the git information from that remote, then set your local `master` branch to use the upstream master branch whenever you run `git pull`. Then you can make all of your pull request branches based on this `master` branch. Whenever you want to update your version of `master`, do a regular `git pull`.

## Add yourself as a contributor

This project follows the [all contributors](https://github.com/kentcdodds/all-contributors) specification. To add yourself to the table of
contributors on the [`readme.md`](./readme.md), please use the automated script as part of your PR:

```sh
npm start contributors.add
```

Follow the prompt. If you‘ve already added yourself to the list and are making a
new type of contribution, you can run it again and select the added contribution
type.

## Committing and Pushing changes

This project uses [semantic-release](https://npmjs.com/package/semantic-release) to do automatic releases and generate a changelog based on the
commit history. So we follow [a convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md) for commit messages. You don‘t have to follow this convention if you don‘t like to. Just know that when we merge your commit, we‘ll probably use “Squash and Merge” so we can change the commit message.

## Help needed

Please checkout the [`roadmap.md`](./other/roadmap.md) and the open issues.

Also, please watch the repo and respond to questions/bug reports/feature requests, Thanks!
