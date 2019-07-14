---
title: Post-mortem of my tiny JS web app "Archives"
description:
image: /assets/arch/thenew_archives_editor.jpg
date: 2019-07-10
tags:
  - post
  - 2019
  - EN
  - web
  - development
  - JavaScript
layout: layouts/post.njk
---

Some takeaways from the development of [archives.thenew.fr](http://archives.thenew.fr/).

![](/assets/arch/thenew_archives_editor.jpg)

<h2 data-content='Backstory'>Backstory</h2>

When I ended up on the portfolio of my old colleague [Ilk](https://www.ilkflottante.com/work-category/digital/), I thought I should save screenshots of my previous projects. And I liked so much the way [AREA 17](https://archive.area17.com/) was hosting theirs archives I decided to simply steal it.

Besides the nostalgic trip through my old projects, thanks again [archive.org](https://archive.org/), I wanted to make the smallest JavaScript app possible.



<h2 data-content='Tech'>Tech</h2>

* Node.js still doesn’t support ECMAScript Modules,
The `—-experimental-modules` flag can be used to enable the feature, but only with `.mjs` files.
[ECMAScript Modules | Node.js v11.11.0 Documentation](https://nodejs.org/api/esm.html#esm_ecmascript_modules)
nodemon can also be used with it.

* Building an HTTP server with Node.js is so simple thanks to the `http` core module. No need of [Express](https://expressjs.com/), even if it covers more cases, without any doubts.
For example, I had troubles with the  `Content-Type` of my responses, I had to specify it, surely because of the configuration of my Debian machine.
I first did it manually but then used [serve-static](https://github.com/expressjs/serve-static) module for the static files.

* I tried to make it as simple as possible, so the projects' name were automatically drawn from the directories’ name. A few obscure encoding issues with my server later, I had to introduce weird helpers functions to resolve them. But still no need to edit a config file or a JS object to add or update a project. 🙌
But for any bigger website, it’s criminal to rely on the folders’ name.

<h2 data-content='Build'>Build</h2>

* To bundle my app in a smaller package, I chose to try [Rollup](https://rollupjs.org/), which is the main solution to build Node.js packages. You can easily change the settings to build an app to be used for a browser instead of Node.js.
I wanted to avoid [webpack](https://webpack.github.io/) to try something simpler and smaller.

* Final touch : adding analytics tracking. With nothing better than Google Analytics suiting my needs, I added the package `universal-analytics`.
Issue : the rollup build is not compatible with the package’s code.
I had to exclude it from the build with
```
external: [‘universal-analytics’]
```
in `rollup.config.js` and copy it to the production server. Not nice.

I should look at [Fathom](https://usefathom.com/) and [Matomo](https://matomo.org/) to replace Google Analytics in the future, this will ask more work or money.

![](/assets/arch/thenew_archives.jpg)

<h2 data-content='Hosting'>Hosting</h2>

* I wanted to try [Heroku](https://www.heroku.com/) for a long time and gave them a shot. The whole experience is good and the integration of GitHub pretty, but I somehow missed the important downside of this free offer: each app goes to sleep (idle) after 30 min if not used.
And the problem is the load of a page will suddenly take around 30 seconds. So, no good, for my tiny, confidential app.
Back to my personal hosting.

* I fumbled to find a working configuration for the apache virtual host :

```
<VirtualHost *:80>
  ServerAlias archives.thenew.fr
  ErrorLog ${APACHE_LOG_DIR}/error.log

  DocumentRoot /path/to/archives

  ProxyPreserveHost On

  ProxyPass / http://127.0.0.1:4100/
</VirtualHost>
```

* I’m using `pm2` to manage Node applications on the server and let them run in the background as a service. With the `-—watch` parameter to see the change in production after each deploy: [PM2 - Watch & Restart](http://pm2.keymetrics.io/docs/usage/watch-and-restart/)
A good tutorial to [setup a Node.js app for production](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04).

* GitLab CI offers free solutions to deploy to a server:
[GitLab Build and Deploy to a Server via SSH – codeburst](https://codeburst.io/gitlab-build-and-push-to-a-server-via-ssh-6d27ca1bf7b4)

Thanks for reading, I hope those bits could help other web tinkerers. <span class="end"></span>
