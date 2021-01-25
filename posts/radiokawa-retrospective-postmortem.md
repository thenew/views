---
title: RadioKawa Retrospective postmortem
description:
image: /assets/arch/desktopIntro.gif
date: 2020-11-15
tags:
  - post
  - 2020
  - EN
  - web
  - development
  - JavaScript
  - podcast
layout: layouts/post.njk
mp3: '/assets/audiolog/radiokawa-retrospective.mp3'
duration: 06:53
podcastImage: '/assets/audiolog/views_audiolog_3.jpg'
episode: 3
podcastLang: en
---

_version audio_, <small>music: *Sappy* by Neil D. Voss</small>
<audio src="{{ '/assets/audiolog/radiokawa-retrospective.mp3' | url }}" type="audio/mpeg" controls class="audio"></audio>

<hr />

<div class="full-width">

![RadioKawa retrospective Introduction](/assets/rk/desktopIntro.gif)

<div class="full-width-text">

To honour the end of the French-speaking podcast network *RadioKawa*, with whom I have worked since 2015, I designed and developed this retrospective website: [https://retrospective.radiokawa.com/](https://retrospective.radiokawa.com/).

I gathered the timeline, inspirations and some thoughts for a postmortem.

</div>

</div>

While I was working on complex websites, doing more backend than frontend in my day-to-day work, I was searching to do more web animations and reconnect a bit with GSAP.  
*RadioKawa* has tons of content (shows, authors, categories, episodes, etc.) I’m aware of and is a non-profit organisation, so it was a good client to animate some big numbers on my free time.

<h2 data-content='Timeline'>Timeline</h2>

I started noodling the design around 9 February 2020 and then send a message to the *RadioKawa* team to share my idea and a first mock-up on the 24th. I was glad to receive positive feedback.  
In March, Yann, the _Big Boss_, helped me gather appropriate data and collect photographs. On the next three months, during a particularly enjoyable time called lockdown, I [streamed](https://youtu.be/FgP5fEOIfA4), for the first time, some coding sessions.

![RadioKawa retrospective dev stream timelapse](/assets/rk/stream_timelapse_2.gif)

I continued working on it in the evenings and weekends, slowly but surely. Adding a few, simpler, blocks in the last days. The page was finally launched on the 3rd of July.

<h2 data-content='Design'>Design</h2>

My first wish in this project was to play around with *Figma* and I got more accustomed with it. I’m still missing some features from *Illustrator* but it’s an amazing tool and web-based, so you can share it in a blink of an eye.  You can try my [font plugin](https://www.figma.com/community/plugin/746097413727734148/Font-Fascia), by the way ;). 

Not being a designer, I want to stress it, my biggest mistake was to not choose a correct format/ratio to work on, way too much high, it did not correspond to any realistic devices viewports. So the transition to development was a bit tricky.

<div class="row">
  <div class="left">

![RadioKawa retrospective designs screenshot](/assets/rk/design_workbench_1.jpg)

  </div>
  <div class="right">

![RadioKawa retrospective designs screenshot](/assets/rk/design_workbench_4.jpg)

  </div>
</div>

Then, while finishing the development, I realised I totally ignored mobile version, which is pretty foolish. I thought it would be complicated to redesign this big blocks in a small viewport, but it was less a conundrum than expected. It made me test the [*Figma Mirror* mobile app](https://www.figma.com/downloads/), which is awesome to live preview on your device, it’s literally just _log in and play_.

<h2 data-content='Development'>Development</h2>

I started to code my own scroll animation manager but [*ScrollTrigger*](https://greensock.com/docs/v3/Plugins/ScrollTrigger) was announced and released just at the beginning of the development so I quickly drop my draft to try the new toy from *Greensock*.  
It’s well done and kills [*ScrollMagic*](http://scrollmagic.io/), IMHO. The debug tools are nice, but I’m not sure if I’ll ever get used to the syntax. As an efficient but limited framework, it was perfect for this kind of project.

![Spotify Wrapped screenshot](/assets/rk/spotify-wrapped.jpg)

I wanted to try replicate this wrapped typography animation with just CSS and JS. I know they are made with WebGL but when you see [how complex it is](https://medium.com/active-theory/spotify-wrapped-2018-technical-case-study-5b7cfb7e9d3a), I wanted to play dumb. So I’m surprised it kinda works visually but the performances are terrible, will not recommend.  
This was my swan song of dumb HTML animations before jumping on the GL train, _maybe_.

![RadioKawa retrospective Les Tauliers "slot machine" block](/assets/rk/desktopTitles.gif)

In the same idea of ​​playing low-key, I didn’t want to code any lazy loading for the assets so I tried the HTML version: if you want a quick lazy loading, the `loading` img attribute ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading), [web.dev](https://web.dev/native-lazy-loading/)) is a nice native feature, you don’t have control on the loading of the images but it’s plug-and-play.  
Just one thing to consider: if the image is on `position: fixed` the browser will load it immediately so you should change the image styles with JavaScript *after* the document load: put the position to `fixed` or remove a `display: none`, for example.

I had to abandon some designs by lack of time, I’m still glum about it.

Finally, thanks to Valockar for putting it on a new subdomain for more premium feeling ✨

<h2 data-content='Refs'>Refs</h2>

<div class="row">
  <div class="left">

![Area17 2019 year in review screenshot](/assets/rk/area17.jpg)

  </div>
  <div class="right">

![Corn Flakes box](/assets/rk/corn_flakes.jpg)

  </div>
</div>


The *Spotify* annual reports were the main inspiration, they are sadly almost impossible to browse again but we have some case studies:

- [Spotify Wrapped 2018](https://www.awwwards.com/sites/your-2018-wrapped) and [Active Theory’s great case study](https://medium.com/active-theory/spotify-wrapped-2018-technical-case-study-5b7cfb7e9d3a)

- [An analysis of Spotify Wrapped 2019](https://medium.com/throughdesign/spotify-2019-wrapped-a-design-masterstroke-1d06b27b0aec)

- I love Area17 design and its 2019 report was an inspiration, especially the first hero block, obviously: [https://2019.area17.com/](https://2019.area17.com/)

- Cineville, a Dutch cinema subscription, did a good job with its year report: [https://filmblik.cineville.nl/](https://filmblik.cineville.nl/)

- Or random Corn Flakes box cover ¯\_(ツ)_/¯ 

<div class="row">
  <div class="left">

![RadioKawa retrospective screenshot](/assets/rk/desktop.jpg)

  </div>
  <div class="right">

![RadioKawa retrospective dev stream timelapse](/assets/rk/stream_timelapse_1.gif)
![RadioKawa retrospective dev stream timelapse](/assets/rk/stream_timelapse_3.gif)

  </div>
</div>

