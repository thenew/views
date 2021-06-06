---
title: Generate and animate a QR code
description: Different ways to generate a QR code and how to add a cool reveal animation.
image: /assets/qr/qr.gif
date: 2021-04-06
lang: en
tags:
  - post
  - 2021
  - EN
  - code
  - SVG
layout: layouts/post.njk
---

<style>

.qr-post-media {
  max-width: 300px;
  padding: 20px;
  margin: 0 auto 1.8em;
  border: 1px solid #002fa7;
  box-shadow: inset 0 0 0 1px #fff, 5px 5px #000102;
  background-color: rgba(0, 47, 167, .05);
}

.qr-post-media p {
  margin: 0;
}

.qr-code-demo {
  display: block;
}

.qr-code-demo svg {
  height: auto;
}

.qr-code-demo use {
  opacity: 0.01;
  transition: opacity 0.05s ease;
  stroke-width: 1px;
  stroke: rgba(0, 1, 2, 0.8);
}

.qr-code-demo.js-active use {
  opacity: 1;
}

.qr-code-demo.js-active use:nth-child(2n) {
  transition-delay: 0.2s;
}

.qr-code-demo.js-active use:nth-child(3n) {
  transition-delay: 0.1s;
}

.qr-code-demo.js-active use:nth-child(4n) {
  transition-delay: 0.4s;
}

.qr-code-demo.js-active use:nth-child(5n) {
  transition-delay: 0.3s;
}

.qr-code-demo-button {
  display: block;
  margin: 20px auto 0;
  padding: 8px 20px 7px;
  text-align: center;
  color: #002fa7;
  background-color: transparent;
  border: 4px solid #002fa7;
  transition: box-shadow .2s ease, background .2s ease, color .2s ease;
}

.qr-code-demo-button.js-active {
  color: #fff;
  background-color: #002fa7;
}

.qr-code-demo-button:focus {
  outline: 0;
}

.qr-code-demo-button:focus,
.qr-code-demo-button:hover {
  box-shadow: inset 0 0 0 1px #002fa7;
}

.qr-code-demo-button:active {
  box-shadow: inset 0 0 0 2px #002fa7;
}

</style>

<div class="full-width">

<div style="height: 50vh; background: url(/assets/qr/qr.gif) repeat top left;"></div>

<div class="full-width-text" style="color: #fff;background-color: #002fa7;">

It’s easy to generate a QR code but here is simple way to add a bit of fun to its reveal animation.

</div>

</div>

<h2 data-content='Bitmap image'>Bitmap image</h2>

[QR code](https://en.wikipedia.org/wiki/QR_code) or Quick Response code is a 2D barcode that contains information, most usely an URL.  

We can easily get one with the Google API but it’s only a PNG bitmap image.  
Just replace put whatever text you want to share at the end of this URL, after `chl=`: https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=http://views.thenew.fr/posts/generate-and-animate-a-qr-code

and you will get your visual matrix code:

<div class="qr-post-media">

<img src="https://chart.googleapis.com/chart?chs=500x500&amp;cht=qr&amp;chl=http://views.thenew.fr/posts/generate-and-animate-a-qr-code" alt="https://chart.googleapis.com/chart?chs=500x500&amp;cht=qr&amp;chl=http://views.thenew.fr/posts/generate-and-animate-a-qr-code">

</div>

<h2 data-content='SVG'>SVG</h2>

But many libraries exist to generate it ourself and therefore choose the output format.  
SVG is better than a PNG: we can zoom on it as much as we want, it will stay sharp and it’s so much lighter, because it’s vector graphics.

For example, in JavaScript, with [node-qrcode](https://github.com/soldair/node-qrcode):

``` javascript
// JavaScript

const QRCode = require("qrcode")

QRCode.toString(

  // the URL to encode
  "http://views.thenew.fr/posts/generate-and-animate-a-qr-code",
  {
    // the format
    type: "svg"
  },
  function (err, url) {

    // insert the SVG into the HTML element <div id="qrcode"></div>
    document.getElementById("qrcode").innerHTML = url;
  }
)
```

SVG images are XML files, so we can change the color easily directly in the code or with CSS. But this SVG is containing only one `<path>` so there is no room to play with it.

<div class="qr-post-media">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" shape-rendering="crispEdges"><path stroke="#002fa7" d="M4 4.5h7m3 0h1m5 0h1m2 0h2m1 0h2m2 0h7M4 5.5h1m5 0h1m3 0h2m3 0h2m1 0h1m2 0h1m2 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h5m1 0h1m1 0h1m2 0h5m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m7 0h1m2 0h1m1 0h3m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m4 0h3m2 0h3m1 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m2 0h4m2 0h2m1 0h3m1 0h1m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m1 0h1M4 12.5h1m1 0h5m2 0h1m3 0h2m2 0h3m2 0h3m1 0h5M4 13.5h4m1 0h1m1 0h2m4 0h1m4 0h3m2 0h4m2 0h4M5 14.5h7m2 0h1m1 0h7m2 0h2m5 0h1m1 0h2M5 15.5h1m2 0h2m1 0h3m1 0h3m4 0h8m2 0h4M4 16.5h2m4 0h5m3 0h2m1 0h3m2 0h1m1 0h2m1 0h3m1 0h1M4 17.5h2m6 0h1m3 0h1m2 0h1m1 0h3m3 0h1m2 0h1m3 0h3M6 18.5h1m1 0h3m1 0h2m1 0h2m1 0h4m2 0h2m3 0h1m5 0h1M6 19.5h4m2 0h2m1 0h2m2 0h2m4 0h1m2 0h1m1 0h1m1 0h3M6 20.5h1m3 0h1m1 0h2m1 0h1m1 0h1m1 0h3m4 0h1m2 0h1m1 0h2m3 0h1M4 21.5h6m1 0h2m4 0h1m2 0h2m1 0h1m1 0h1m1 0h1m2 0h2m1 0h2m1 0h1M5 22.5h2m2 0h2m4 0h5m4 0h2m3 0h2m1 0h1m1 0h2M6 23.5h2m1 0h1m3 0h2m1 0h5m2 0h5m2 0h1m1 0h3m1 0h1M4 24.5h1m1 0h1m2 0h9m1 0h1m1 0h1m4 0h1m1 0h2m1 0h3m1 0h2M4 25.5h2m1 0h1m1 0h1m1 0h2m2 0h1m4 0h1m1 0h6m2 0h2m2 0h1m1 0h1M4 26.5h1m1 0h2m1 0h3m6 0h2m2 0h1m1 0h3m3 0h1m2 0h3M4 27.5h1m3 0h1m3 0h9m1 0h1m1 0h3m2 0h1m3 0h4M4 28.5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m1 0h5m1 0h2m1 0h8m2 0h1M12 29.5h5m1 0h1m1 0h1m1 0h4m1 0h2m3 0h1m1 0h1m1 0h1M4 30.5h7m2 0h2m3 0h5m1 0h5m1 0h1m1 0h1m1 0h2M4 31.5h1m5 0h1m1 0h3m3 0h1m5 0h2m1 0h2m3 0h1m1 0h2M4 32.5h1m1 0h3m1 0h1m1 0h1m5 0h2m1 0h1m4 0h1m1 0h6m1 0h1M4 33.5h1m1 0h3m1 0h1m1 0h2m3 0h1m2 0h4m3 0h3m1 0h6M4 34.5h1m1 0h3m1 0h1m1 0h1m1 0h3m1 0h4m2 0h1m1 0h3m1 0h2m2 0h1M4 35.5h1m5 0h1m2 0h3m1 0h1m2 0h1m3 0h2m3 0h1m1 0h4M4 36.5h7m1 0h1m4 0h2m1 0h2m4 0h1m1 0h1m2 0h2m2 0h1"></path></svg>

</div>


<h2 data-content='SVG detailed'>Detailed SVG</h2>

The [PHP QR Code](http://phpqrcode.sourceforge.net/) library is also generating a QR code but the SVG output is defining every squares, this time.

``` php
// PHP

include 'lib/full/qrlib.php';

echo QRcode::svg("http://views.thenew.fr/posts/generate-and-animate-a-qr-code");
```

The SVG doesn’t have one `path` but as many `rect` as it has squares. The code is very big compared to the previous SVG but it’s the price to pay to be able to animate it.  
To avoid code repetition, it uses the SVG elements `use` and `defs`.

``` html
<!-- HTML -->

<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 264 264" title="QR Code to view [URL] on mobile">
  <defs>
    <rect id="p" width="8" height="8" />
  </defs>
  <g fill="#000102">
    <use x="0" y="0" href="#p" /><use x="8" y="0" href="#p" /><use x="16" y="0" href="#p" /><use x="24" y="0" href="#p" /><use x="32" y="0" href="#p" /><use x="40" y="0" href="#p" /><use x="48" y="0" href="#p" /><use x="80" y="0" href="#p" /><use x="96" y="0" href="#p" /><use x="104" y="0" href="#p" /><use x="120" y="0" href="#p" /><use x="136" y="0" href="#p" /><use x="144" y="0" href="#p" /><use x="152" y="0" href="#p" /><use x="160" y="0" href="#p" /><use x="168" y="0" href="#p" /><use x="176" y="0" href="#p" /><use x="184" y="0" href="#p" /><use x="208" y="0" href="#p" /><use x="216" y="0" href="#p" /><use x="224" y="0" href="#p" /><use x="232" y="0" href="#p" /><use x="240" y="0" href="#p" /><use x="248" y="0" href="#p" /><use x="256" y="0" href="#p" /><use x="0" y="8" href="#p" /><use x="48" y="8" href="#p" /><use x="64" y="8" href="#p" /><use x="80" y="8" href="#p" /><use x="104" y="8" href="#p" /><use x="112" y="8" href="#p" /><use x="120" y="8" href="#p" /><use x="128" y="8" href="#p" /><use x="136" y="8" href="#p" /><use x="160" y="8" href="#p" /><use x="192" y="8" href="#p" /><use x="208" y="8" href="#p" /><use x="256" y="8" href="#p" /><use x="0" y="16" href="#p" /><use x="16" y="16" href="#p" /><use x="24" y="16" href="#p" /><use x="32" y="16" href="#p" /><use x="48" y="16" href="#p" /><use x="96" y="16" href="#p" /><use x="104" y="16" href="#p" /><use x="120" y="16" href="#p" /><use x="128" y="16" href="#p" /><use x="144" y="16" href="#p" /><use x="168" y="16" href="#p" /><use x="176" y="16" href="#p" /><use x="208" y="16" href="#p" /><use x="224" y="16" href="#p" /><use x="232" y="16" href="#p" /><use x="240" y="16" href="#p" /><use x="256" y="16" href="#p" /><use x="0" y="24" href="#p" /><use x="16" y="24" href="#p" /><use x="24" y="24" href="#p" /><use x="32" y="24" href="#p" /><use x="48" y="24" href="#p" /><use x="64" y="24" href="#p" /><use x="72" y="24" href="#p" /><use x="80" y="24" href="#p" /><use x="96" y="24" href="#p" /><use x="112" y="24" href="#p" /><use x="120" y="24" href="#p" /><use x="136" y="24" href="#p" /><use x="208" y="24" href="#p" /><use x="224" y="24" href="#p" /><use x="232" y="24" href="#p" /><use x="240" y="24" href="#p" /><use x="256" y="24" href="#p" /><use x="0" y="32" href="#p" /><use x="16" y="32" href="#p" /><use x="24" y="32" href="#p" /><use x="32" y="32" href="#p" /><use x="48" y="32" href="#p" /><use x="72" y="32" href="#p" /><use x="128" y="32" href="#p" /><use x="136" y="32" href="#p" /><use x="144" y="32" href="#p" /><use x="152" y="32" href="#p" /><use x="160" y="32" href="#p" /><use x="184" y="32" href="#p" /><use x="208" y="32" href="#p" /><use x="224" y="32" href="#p" /><use x="232" y="32" href="#p" /><use x="240" y="32" href="#p" /><use x="256" y="32" href="#p" /><use x="0" y="40" href="#p" /><use x="48" y="40" href="#p" /><use x="64" y="40" href="#p" /><use x="72" y="40" href="#p" /><use x="88" y="40" href="#p" /><use x="96" y="40" href="#p" /><use x="120" y="40" href="#p" /><use x="144" y="40" href="#p" /><use x="160" y="40" href="#p" /><use x="176" y="40" href="#p" /><use x="208" y="40" href="#p" /><use x="256" y="40" href="#p" /><use x="0" y="48" href="#p" /><use x="8" y="48" href="#p" /><use x="16" y="48" href="#p" /><use x="24" y="48" href="#p" /><use x="32" y="48" href="#p" /><use x="40" y="48" href="#p" /><use x="48" y="48" href="#p" /><use x="64" y="48" href="#p" /><use x="80" y="48" href="#p" /><use x="96" y="48" href="#p" /><use x="112" y="48" href="#p" /><use x="128" y="48" href="#p" /><use x="144" y="48" href="#p" /><use x="160" y="48" href="#p" /><use x="176" y="48" href="#p" /><use x="192" y="48" href="#p" /><use x="208" y="48" href="#p" /><use x="216" y="48" href="#p" /><use x="224" y="48" href="#p" /><use x="232" y="48" href="#p" /><use x="240" y="48" href="#p" /><use x="248" y="48" href="#p" /><use x="256" y="48" href="#p" /><use x="72" y="56" href="#p" /><use x="80" y="56" href="#p" /><use x="88" y="56" href="#p" /><use x="112" y="56" href="#p" /><use x="120" y="56" href="#p" /><use x="128" y="56" href="#p" /><use x="160" y="56" href="#p" /><use x="168" y="56" href="#p" /><use x="176" y="56" href="#p" /><use x="184" y="56" href="#p" /><use x="192" y="56" href="#p" /><use x="0" y="64" href="#p" /><use x="8" y="64" href="#p" /><use x="16" y="64" href="#p" /><use x="24" y="64" href="#p" /><use x="32" y="64" href="#p" /><use x="48" y="64" href="#p" /><use x="56" y="64" href="#p" /><use x="64" y="64" href="#p" /><use x="72" y="64" href="#p" /><use x="88" y="64" href="#p" /><use x="120" y="64" href="#p" /><use x="136" y="64" href="#p" /><use x="152" y="64" href="#p" /><use x="176" y="64" href="#p" /><use x="200" y="64" href="#p" /><use x="216" y="64" href="#p" /><use x="232" y="64" href="#p" /><use x="248" y="64" href="#p" /><use x="24" y="72" href="#p" /><use x="56" y="72" href="#p" /><use x="80" y="72" href="#p" /><use x="96" y="72" href="#p" /><use x="104" y="72" href="#p" /><use x="112" y="72" href="#p" /><use x="128" y="72" href="#p" /><use x="136" y="72" href="#p" /><use x="144" y="72" href="#p" /><use x="152" y="72" href="#p" /><use x="168" y="72" href="#p" /><use x="184" y="72" href="#p" /><use x="208" y="72" href="#p" /><use x="248" y="72" href="#p" /><use x="256" y="72" href="#p" /><use x="0" y="80" href="#p" /><use x="32" y="80" href="#p" /><use x="48" y="80" href="#p" /><use x="56" y="80" href="#p" /><use x="80" y="80" href="#p" /><use x="104" y="80" href="#p" /><use x="112" y="80" href="#p" /><use x="120" y="80" href="#p" /><use x="128" y="80" href="#p" /><use x="176" y="80" href="#p" /><use x="200" y="80" href="#p" /><use x="216" y="80" href="#p" /><use x="0" y="88" href="#p" /><use x="16" y="88" href="#p" /><use x="24" y="88" href="#p" /><use x="64" y="88" href="#p" /><use x="96" y="88" href="#p" /><use x="104" y="88" href="#p" /><use x="128" y="88" href="#p" /><use x="160" y="88" href="#p" /><use x="168" y="88" href="#p" /><use x="176" y="88" href="#p" /><use x="184" y="88" href="#p" /><use x="200" y="88" href="#p" /><use x="216" y="88" href="#p" /><use x="224" y="88" href="#p" /><use x="240" y="88" href="#p" /><use x="0" y="96" href="#p" /><use x="8" y="96" href="#p" /><use x="32" y="96" href="#p" /><use x="40" y="96" href="#p" /><use x="48" y="96" href="#p" /><use x="64" y="96" href="#p" /><use x="72" y="96" href="#p" /><use x="80" y="96" href="#p" /><use x="96" y="96" href="#p" /><use x="112" y="96" href="#p" /><use x="136" y="96" href="#p" /><use x="176" y="96" href="#p" /><use x="184" y="96" href="#p" /><use x="192" y="96" href="#p" /><use x="200" y="96" href="#p" /><use x="216" y="96" href="#p" /><use x="224" y="96" href="#p" /><use x="0" y="104" href="#p" /><use x="8" y="104" href="#p" /><use x="24" y="104" href="#p" /><use x="64" y="104" href="#p" /><use x="72" y="104" href="#p" /><use x="128" y="104" href="#p" /><use x="144" y="104" href="#p" /><use x="152" y="104" href="#p" /><use x="160" y="104" href="#p" /><use x="168" y="104" href="#p" /><use x="184" y="104" href="#p" /><use x="208" y="104" href="#p" /><use x="232" y="104" href="#p" /><use x="248" y="104" href="#p" /><use x="256" y="104" href="#p" /><use x="8" y="112" href="#p" /><use x="32" y="112" href="#p" /><use x="48" y="112" href="#p" /><use x="64" y="112" href="#p" /><use x="80" y="112" href="#p" /><use x="88" y="112" href="#p" /><use x="96" y="112" href="#p" /><use x="120" y="112" href="#p" /><use x="128" y="112" href="#p" /><use x="144" y="112" href="#p" /><use x="168" y="112" href="#p" /><use x="176" y="112" href="#p" /><use x="192" y="112" href="#p" /><use x="200" y="112" href="#p" /><use x="208" y="112" href="#p" /><use x="216" y="112" href="#p" /><use x="232" y="112" href="#p" /><use x="248" y="112" href="#p" /><use x="0" y="120" href="#p" /><use x="8" y="120" href="#p" /><use x="16" y="120" href="#p" /><use x="24" y="120" href="#p" /><use x="32" y="120" href="#p" /><use x="40" y="120" href="#p" /><use x="72" y="120" href="#p" /><use x="88" y="120" href="#p" /><use x="112" y="120" href="#p" /><use x="152" y="120" href="#p" /><use x="160" y="120" href="#p" /><use x="168" y="120" href="#p" /><use x="176" y="120" href="#p" /><use x="192" y="120" href="#p" /><use x="208" y="120" href="#p" /><use x="240" y="120" href="#p" /><use x="16" y="128" href="#p" /><use x="24" y="128" href="#p" /><use x="40" y="128" href="#p" /><use x="48" y="128" href="#p" /><use x="56" y="128" href="#p" /><use x="72" y="128" href="#p" /><use x="80" y="128" href="#p" /><use x="88" y="128" href="#p" /><use x="120" y="128" href="#p" /><use x="136" y="128" href="#p" /><use x="152" y="128" href="#p" /><use x="176" y="128" href="#p" /><use x="200" y="128" href="#p" /><use x="224" y="128" href="#p" /><use x="248" y="128" href="#p" /><use x="16" y="136" href="#p" /><use x="32" y="136" href="#p" /><use x="56" y="136" href="#p" /><use x="72" y="136" href="#p" /><use x="96" y="136" href="#p" /><use x="104" y="136" href="#p" /><use x="112" y="136" href="#p" /><use x="128" y="136" href="#p" /><use x="152" y="136" href="#p" /><use x="160" y="136" href="#p" /><use x="184" y="136" href="#p" /><use x="208" y="136" href="#p" /><use x="232" y="136" href="#p" /><use x="248" y="136" href="#p" /><use x="256" y="136" href="#p" /><use x="16" y="144" href="#p" /><use x="40" y="144" href="#p" /><use x="48" y="144" href="#p" /><use x="56" y="144" href="#p" /><use x="72" y="144" href="#p" /><use x="104" y="144" href="#p" /><use x="112" y="144" href="#p" /><use x="120" y="144" href="#p" /><use x="128" y="144" href="#p" /><use x="160" y="144" href="#p" /><use x="176" y="144" href="#p" /><use x="200" y="144" href="#p" /><use x="216" y="144" href="#p" /><use x="224" y="144" href="#p" /><use x="232" y="144" href="#p" /><use x="248" y="144" href="#p" /><use x="0" y="152" href="#p" /><use x="16" y="152" href="#p" /><use x="24" y="152" href="#p" /><use x="64" y="152" href="#p" /><use x="72" y="152" href="#p" /><use x="96" y="152" href="#p" /><use x="104" y="152" href="#p" /><use x="120" y="152" href="#p" /><use x="128" y="152" href="#p" /><use x="144" y="152" href="#p" /><use x="168" y="152" href="#p" /><use x="184" y="152" href="#p" /><use x="200" y="152" href="#p" /><use x="224" y="152" href="#p" /><use x="232" y="152" href="#p" /><use x="240" y="152" href="#p" /><use x="8" y="160" href="#p" /><use x="16" y="160" href="#p" /><use x="24" y="160" href="#p" /><use x="32" y="160" href="#p" /><use x="48" y="160" href="#p" /><use x="56" y="160" href="#p" /><use x="72" y="160" href="#p" /><use x="80" y="160" href="#p" /><use x="96" y="160" href="#p" /><use x="112" y="160" href="#p" /><use x="136" y="160" href="#p" /><use x="176" y="160" href="#p" /><use x="184" y="160" href="#p" /><use x="192" y="160" href="#p" /><use x="200" y="160" href="#p" /><use x="216" y="160" href="#p" /><use x="224" y="160" href="#p" /><use x="232" y="160" href="#p" /><use x="248" y="160" href="#p" /><use x="0" y="168" href="#p" /><use x="16" y="168" href="#p" /><use x="64" y="168" href="#p" /><use x="80" y="168" href="#p" /><use x="144" y="168" href="#p" /><use x="152" y="168" href="#p" /><use x="160" y="168" href="#p" /><use x="168" y="168" href="#p" /><use x="184" y="168" href="#p" /><use x="192" y="168" href="#p" /><use x="200" y="168" href="#p" /><use x="208" y="168" href="#p" /><use x="216" y="168" href="#p" /><use x="232" y="168" href="#p" /><use x="240" y="168" href="#p" /><use x="248" y="168" href="#p" /><use x="256" y="168" href="#p" /><use x="0" y="176" href="#p" /><use x="16" y="176" href="#p" /><use x="40" y="176" href="#p" /><use x="48" y="176" href="#p" /><use x="56" y="176" href="#p" /><use x="64" y="176" href="#p" /><use x="88" y="176" href="#p" /><use x="96" y="176" href="#p" /><use x="120" y="176" href="#p" /><use x="160" y="176" href="#p" /><use x="168" y="176" href="#p" /><use x="176" y="176" href="#p" /><use x="192" y="176" href="#p" /><use x="200" y="176" href="#p" /><use x="224" y="176" href="#p" /><use x="248" y="176" href="#p" /><use x="0" y="184" href="#p" /><use x="24" y="184" href="#p" /><use x="64" y="184" href="#p" /><use x="72" y="184" href="#p" /><use x="88" y="184" href="#p" /><use x="112" y="184" href="#p" /><use x="160" y="184" href="#p" /><use x="168" y="184" href="#p" /><use x="176" y="184" href="#p" /><use x="184" y="184" href="#p" /><use x="192" y="184" href="#p" /><use x="200" y="184" href="#p" /><use x="208" y="184" href="#p" /><use x="216" y="184" href="#p" /><use x="232" y="184" href="#p" /><use x="240" y="184" href="#p" /><use x="0" y="192" href="#p" /><use x="16" y="192" href="#p" /><use x="32" y="192" href="#p" /><use x="48" y="192" href="#p" /><use x="56" y="192" href="#p" /><use x="64" y="192" href="#p" /><use x="72" y="192" href="#p" /><use x="80" y="192" href="#p" /><use x="88" y="192" href="#p" /><use x="120" y="192" href="#p" /><use x="128" y="192" href="#p" /><use x="136" y="192" href="#p" /><use x="144" y="192" href="#p" /><use x="152" y="192" href="#p" /><use x="176" y="192" href="#p" /><use x="192" y="192" href="#p" /><use x="200" y="192" href="#p" /><use x="208" y="192" href="#p" /><use x="216" y="192" href="#p" /><use x="224" y="192" href="#p" /><use x="256" y="192" href="#p" /><use x="64" y="200" href="#p" /><use x="72" y="200" href="#p" /><use x="80" y="200" href="#p" /><use x="96" y="200" href="#p" /><use x="104" y="200" href="#p" /><use x="112" y="200" href="#p" /><use x="128" y="200" href="#p" /><use x="136" y="200" href="#p" /><use x="144" y="200" href="#p" /><use x="152" y="200" href="#p" /><use x="168" y="200" href="#p" /><use x="176" y="200" href="#p" /><use x="184" y="200" href="#p" /><use x="192" y="200" href="#p" /><use x="224" y="200" href="#p" /><use x="256" y="200" href="#p" /><use x="0" y="208" href="#p" /><use x="8" y="208" href="#p" /><use x="16" y="208" href="#p" /><use x="24" y="208" href="#p" /><use x="32" y="208" href="#p" /><use x="40" y="208" href="#p" /><use x="48" y="208" href="#p" /><use x="64" y="208" href="#p" /><use x="72" y="208" href="#p" /><use x="104" y="208" href="#p" /><use x="112" y="208" href="#p" /><use x="120" y="208" href="#p" /><use x="128" y="208" href="#p" /><use x="160" y="208" href="#p" /><use x="184" y="208" href="#p" /><use x="192" y="208" href="#p" /><use x="208" y="208" href="#p" /><use x="224" y="208" href="#p" /><use x="232" y="208" href="#p" /><use x="240" y="208" href="#p" /><use x="248" y="208" href="#p" /><use x="0" y="216" href="#p" /><use x="48" y="216" href="#p" /><use x="80" y="216" href="#p" /><use x="96" y="216" href="#p" /><use x="104" y="216" href="#p" /><use x="120" y="216" href="#p" /><use x="160" y="216" href="#p" /><use x="168" y="216" href="#p" /><use x="184" y="216" href="#p" /><use x="192" y="216" href="#p" /><use x="224" y="216" href="#p" /><use x="232" y="216" href="#p" /><use x="240" y="216" href="#p" /><use x="248" y="216" href="#p" /><use x="256" y="216" href="#p" /><use x="0" y="224" href="#p" /><use x="16" y="224" href="#p" /><use x="24" y="224" href="#p" /><use x="32" y="224" href="#p" /><use x="48" y="224" href="#p" /><use x="64" y="224" href="#p" /><use x="72" y="224" href="#p" /><use x="96" y="224" href="#p" /><use x="112" y="224" href="#p" /><use x="120" y="224" href="#p" /><use x="128" y="224" href="#p" /><use x="136" y="224" href="#p" /><use x="176" y="224" href="#p" /><use x="192" y="224" href="#p" /><use x="200" y="224" href="#p" /><use x="208" y="224" href="#p" /><use x="216" y="224" href="#p" /><use x="224" y="224" href="#p" /><use x="256" y="224" href="#p" /><use x="0" y="232" href="#p" /><use x="16" y="232" href="#p" /><use x="24" y="232" href="#p" /><use x="32" y="232" href="#p" /><use x="48" y="232" href="#p" /><use x="64" y="232" href="#p" /><use x="72" y="232" href="#p" /><use x="128" y="232" href="#p" /><use x="144" y="232" href="#p" /><use x="152" y="232" href="#p" /><use x="160" y="232" href="#p" /><use x="168" y="232" href="#p" /><use x="224" y="232" href="#p" /><use x="232" y="232" href="#p" /><use x="240" y="232" href="#p" /><use x="248" y="232" href="#p" /><use x="256" y="232" href="#p" /><use x="0" y="240" href="#p" /><use x="16" y="240" href="#p" /><use x="24" y="240" href="#p" /><use x="32" y="240" href="#p" /><use x="48" y="240" href="#p" /><use x="64" y="240" href="#p" /><use x="80" y="240" href="#p" /><use x="88" y="240" href="#p" /><use x="96" y="240" href="#p" /><use x="120" y="240" href="#p" /><use x="128" y="240" href="#p" /><use x="144" y="240" href="#p" /><use x="168" y="240" href="#p" /><use x="184" y="240" href="#p" /><use x="192" y="240" href="#p" /><use x="208" y="240" href="#p" /><use x="232" y="240" href="#p" /><use x="240" y="240" href="#p" /><use x="0" y="248" href="#p" /><use x="48" y="248" href="#p" /><use x="64" y="248" href="#p" /><use x="88" y="248" href="#p" /><use x="112" y="248" href="#p" /><use x="120" y="248" href="#p" /><use x="128" y="248" href="#p" /><use x="160" y="248" href="#p" /><use x="168" y="248" href="#p" /><use x="176" y="248" href="#p" /><use x="200" y="248" href="#p" /><use x="208" y="248" href="#p" /><use x="224" y="248" href="#p" /><use x="232" y="248" href="#p" /><use x="240" y="248" href="#p" /><use x="0" y="256" href="#p" /><use x="8" y="256" href="#p" /><use x="16" y="256" href="#p" /><use x="24" y="256" href="#p" /><use x="32" y="256" href="#p" /><use x="40" y="256" href="#p" /><use x="48" y="256" href="#p" /><use x="64" y="256" href="#p" /><use x="88" y="256" href="#p" /><use x="136" y="256" href="#p" /><use x="144" y="256" href="#p" /><use x="160" y="256" href="#p" /><use x="176" y="256" href="#p" /><use x="184" y="256" href="#p" /><use x="192" y="256" href="#p" /><use x="208" y="256" href="#p" /><use x="232" y="256" href="#p" /><use x="248" y="256" href="#p" />
  </g>
</svg>
```

By changing the styles of this `use` elements in CSS, we can animate them randomly from one state to another.

``` css
/* CSS */

.qrcode use {
  opacity: 0.01; /* hide */
  transition: opacity 0.05s ease;
}

.qrcode.active use {
  opacity: 1; /* show */
}

/* Add delay to random squares */
.qrcode.active use:nth-child(2n) {
  transition-delay: 0.2s;
}

.qrcode.active use:nth-child(3n) {
  transition-delay: 0.1s;
}

.qrcode.active use:nth-child(4n) {
  transition-delay: 0.4s;
}

.qrcode.active use:nth-child(5n) {
  transition-delay: 0.3s;
}
```

A bit of JavaScript is adding the `.active` class and voila!


<div class="qr-post-media">

<div class="qr-js-code-demo qr-code-demo">

<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" width="264" height="264" viewBox="0 0 264 264" title="QR Code to view this product on mobile: "><defs><rect id="p" width="8" height="8" /></defs><g fill="#000102"><use x="0" y="0" href="#p" /><use x="8" y="0" href="#p" /><use x="16" y="0" href="#p" /><use x="24" y="0" href="#p" /><use x="32" y="0" href="#p" /><use x="40" y="0" href="#p" /><use x="48" y="0" href="#p" /><use x="80" y="0" href="#p" /><use x="96" y="0" href="#p" /><use x="104" y="0" href="#p" /><use x="120" y="0" href="#p" /><use x="136" y="0" href="#p" /><use x="144" y="0" href="#p" /><use x="152" y="0" href="#p" /><use x="160" y="0" href="#p" /><use x="168" y="0" href="#p" /><use x="176" y="0" href="#p" /><use x="184" y="0" href="#p" /><use x="208" y="0" href="#p" /><use x="216" y="0" href="#p" /><use x="224" y="0" href="#p" /><use x="232" y="0" href="#p" /><use x="240" y="0" href="#p" /><use x="248" y="0" href="#p" /><use x="256" y="0" href="#p" /><use x="0" y="8" href="#p" /><use x="48" y="8" href="#p" /><use x="64" y="8" href="#p" /><use x="80" y="8" href="#p" /><use x="104" y="8" href="#p" /><use x="112" y="8" href="#p" /><use x="120" y="8" href="#p" /><use x="128" y="8" href="#p" /><use x="136" y="8" href="#p" /><use x="160" y="8" href="#p" /><use x="192" y="8" href="#p" /><use x="208" y="8" href="#p" /><use x="256" y="8" href="#p" /><use x="0" y="16" href="#p" /><use x="16" y="16" href="#p" /><use x="24" y="16" href="#p" /><use x="32" y="16" href="#p" /><use x="48" y="16" href="#p" /><use x="96" y="16" href="#p" /><use x="104" y="16" href="#p" /><use x="120" y="16" href="#p" /><use x="128" y="16" href="#p" /><use x="144" y="16" href="#p" /><use x="168" y="16" href="#p" /><use x="176" y="16" href="#p" /><use x="208" y="16" href="#p" /><use x="224" y="16" href="#p" /><use x="232" y="16" href="#p" /><use x="240" y="16" href="#p" /><use x="256" y="16" href="#p" /><use x="0" y="24" href="#p" /><use x="16" y="24" href="#p" /><use x="24" y="24" href="#p" /><use x="32" y="24" href="#p" /><use x="48" y="24" href="#p" /><use x="64" y="24" href="#p" /><use x="72" y="24" href="#p" /><use x="80" y="24" href="#p" /><use x="96" y="24" href="#p" /><use x="112" y="24" href="#p" /><use x="120" y="24" href="#p" /><use x="136" y="24" href="#p" /><use x="208" y="24" href="#p" /><use x="224" y="24" href="#p" /><use x="232" y="24" href="#p" /><use x="240" y="24" href="#p" /><use x="256" y="24" href="#p" /><use x="0" y="32" href="#p" /><use x="16" y="32" href="#p" /><use x="24" y="32" href="#p" /><use x="32" y="32" href="#p" /><use x="48" y="32" href="#p" /><use x="72" y="32" href="#p" /><use x="128" y="32" href="#p" /><use x="136" y="32" href="#p" /><use x="144" y="32" href="#p" /><use x="152" y="32" href="#p" /><use x="160" y="32" href="#p" /><use x="184" y="32" href="#p" /><use x="208" y="32" href="#p" /><use x="224" y="32" href="#p" /><use x="232" y="32" href="#p" /><use x="240" y="32" href="#p" /><use x="256" y="32" href="#p" /><use x="0" y="40" href="#p" /><use x="48" y="40" href="#p" /><use x="64" y="40" href="#p" /><use x="72" y="40" href="#p" /><use x="88" y="40" href="#p" /><use x="96" y="40" href="#p" /><use x="120" y="40" href="#p" /><use x="144" y="40" href="#p" /><use x="160" y="40" href="#p" /><use x="176" y="40" href="#p" /><use x="208" y="40" href="#p" /><use x="256" y="40" href="#p" /><use x="0" y="48" href="#p" /><use x="8" y="48" href="#p" /><use x="16" y="48" href="#p" /><use x="24" y="48" href="#p" /><use x="32" y="48" href="#p" /><use x="40" y="48" href="#p" /><use x="48" y="48" href="#p" /><use x="64" y="48" href="#p" /><use x="80" y="48" href="#p" /><use x="96" y="48" href="#p" /><use x="112" y="48" href="#p" /><use x="128" y="48" href="#p" /><use x="144" y="48" href="#p" /><use x="160" y="48" href="#p" /><use x="176" y="48" href="#p" /><use x="192" y="48" href="#p" /><use x="208" y="48" href="#p" /><use x="216" y="48" href="#p" /><use x="224" y="48" href="#p" /><use x="232" y="48" href="#p" /><use x="240" y="48" href="#p" /><use x="248" y="48" href="#p" /><use x="256" y="48" href="#p" /><use x="72" y="56" href="#p" /><use x="80" y="56" href="#p" /><use x="88" y="56" href="#p" /><use x="112" y="56" href="#p" /><use x="120" y="56" href="#p" /><use x="128" y="56" href="#p" /><use x="160" y="56" href="#p" /><use x="168" y="56" href="#p" /><use x="176" y="56" href="#p" /><use x="184" y="56" href="#p" /><use x="192" y="56" href="#p" /><use x="0" y="64" href="#p" /><use x="8" y="64" href="#p" /><use x="16" y="64" href="#p" /><use x="24" y="64" href="#p" /><use x="32" y="64" href="#p" /><use x="48" y="64" href="#p" /><use x="56" y="64" href="#p" /><use x="64" y="64" href="#p" /><use x="72" y="64" href="#p" /><use x="88" y="64" href="#p" /><use x="120" y="64" href="#p" /><use x="136" y="64" href="#p" /><use x="152" y="64" href="#p" /><use x="176" y="64" href="#p" /><use x="200" y="64" href="#p" /><use x="216" y="64" href="#p" /><use x="232" y="64" href="#p" /><use x="248" y="64" href="#p" /><use x="24" y="72" href="#p" /><use x="56" y="72" href="#p" /><use x="80" y="72" href="#p" /><use x="96" y="72" href="#p" /><use x="104" y="72" href="#p" /><use x="112" y="72" href="#p" /><use x="128" y="72" href="#p" /><use x="136" y="72" href="#p" /><use x="144" y="72" href="#p" /><use x="152" y="72" href="#p" /><use x="168" y="72" href="#p" /><use x="184" y="72" href="#p" /><use x="208" y="72" href="#p" /><use x="248" y="72" href="#p" /><use x="256" y="72" href="#p" /><use x="0" y="80" href="#p" /><use x="32" y="80" href="#p" /><use x="48" y="80" href="#p" /><use x="56" y="80" href="#p" /><use x="80" y="80" href="#p" /><use x="104" y="80" href="#p" /><use x="112" y="80" href="#p" /><use x="120" y="80" href="#p" /><use x="128" y="80" href="#p" /><use x="176" y="80" href="#p" /><use x="200" y="80" href="#p" /><use x="216" y="80" href="#p" /><use x="0" y="88" href="#p" /><use x="16" y="88" href="#p" /><use x="24" y="88" href="#p" /><use x="64" y="88" href="#p" /><use x="96" y="88" href="#p" /><use x="104" y="88" href="#p" /><use x="128" y="88" href="#p" /><use x="160" y="88" href="#p" /><use x="168" y="88" href="#p" /><use x="176" y="88" href="#p" /><use x="184" y="88" href="#p" /><use x="200" y="88" href="#p" /><use x="216" y="88" href="#p" /><use x="224" y="88" href="#p" /><use x="240" y="88" href="#p" /><use x="0" y="96" href="#p" /><use x="8" y="96" href="#p" /><use x="32" y="96" href="#p" /><use x="40" y="96" href="#p" /><use x="48" y="96" href="#p" /><use x="64" y="96" href="#p" /><use x="72" y="96" href="#p" /><use x="80" y="96" href="#p" /><use x="96" y="96" href="#p" /><use x="112" y="96" href="#p" /><use x="136" y="96" href="#p" /><use x="176" y="96" href="#p" /><use x="184" y="96" href="#p" /><use x="192" y="96" href="#p" /><use x="200" y="96" href="#p" /><use x="216" y="96" href="#p" /><use x="224" y="96" href="#p" /><use x="0" y="104" href="#p" /><use x="8" y="104" href="#p" /><use x="24" y="104" href="#p" /><use x="64" y="104" href="#p" /><use x="72" y="104" href="#p" /><use x="128" y="104" href="#p" /><use x="144" y="104" href="#p" /><use x="152" y="104" href="#p" /><use x="160" y="104" href="#p" /><use x="168" y="104" href="#p" /><use x="184" y="104" href="#p" /><use x="208" y="104" href="#p" /><use x="232" y="104" href="#p" /><use x="248" y="104" href="#p" /><use x="256" y="104" href="#p" /><use x="8" y="112" href="#p" /><use x="32" y="112" href="#p" /><use x="48" y="112" href="#p" /><use x="64" y="112" href="#p" /><use x="80" y="112" href="#p" /><use x="88" y="112" href="#p" /><use x="96" y="112" href="#p" /><use x="120" y="112" href="#p" /><use x="128" y="112" href="#p" /><use x="144" y="112" href="#p" /><use x="168" y="112" href="#p" /><use x="176" y="112" href="#p" /><use x="192" y="112" href="#p" /><use x="200" y="112" href="#p" /><use x="208" y="112" href="#p" /><use x="216" y="112" href="#p" /><use x="232" y="112" href="#p" /><use x="248" y="112" href="#p" /><use x="0" y="120" href="#p" /><use x="8" y="120" href="#p" /><use x="16" y="120" href="#p" /><use x="24" y="120" href="#p" /><use x="32" y="120" href="#p" /><use x="40" y="120" href="#p" /><use x="72" y="120" href="#p" /><use x="88" y="120" href="#p" /><use x="112" y="120" href="#p" /><use x="152" y="120" href="#p" /><use x="160" y="120" href="#p" /><use x="168" y="120" href="#p" /><use x="176" y="120" href="#p" /><use x="192" y="120" href="#p" /><use x="208" y="120" href="#p" /><use x="240" y="120" href="#p" /><use x="16" y="128" href="#p" /><use x="24" y="128" href="#p" /><use x="40" y="128" href="#p" /><use x="48" y="128" href="#p" /><use x="56" y="128" href="#p" /><use x="72" y="128" href="#p" /><use x="80" y="128" href="#p" /><use x="88" y="128" href="#p" /><use x="120" y="128" href="#p" /><use x="136" y="128" href="#p" /><use x="152" y="128" href="#p" /><use x="176" y="128" href="#p" /><use x="200" y="128" href="#p" /><use x="224" y="128" href="#p" /><use x="248" y="128" href="#p" /><use x="16" y="136" href="#p" /><use x="32" y="136" href="#p" /><use x="56" y="136" href="#p" /><use x="72" y="136" href="#p" /><use x="96" y="136" href="#p" /><use x="104" y="136" href="#p" /><use x="112" y="136" href="#p" /><use x="128" y="136" href="#p" /><use x="152" y="136" href="#p" /><use x="160" y="136" href="#p" /><use x="184" y="136" href="#p" /><use x="208" y="136" href="#p" /><use x="232" y="136" href="#p" /><use x="248" y="136" href="#p" /><use x="256" y="136" href="#p" /><use x="16" y="144" href="#p" /><use x="40" y="144" href="#p" /><use x="48" y="144" href="#p" /><use x="56" y="144" href="#p" /><use x="72" y="144" href="#p" /><use x="104" y="144" href="#p" /><use x="112" y="144" href="#p" /><use x="120" y="144" href="#p" /><use x="128" y="144" href="#p" /><use x="160" y="144" href="#p" /><use x="176" y="144" href="#p" /><use x="200" y="144" href="#p" /><use x="216" y="144" href="#p" /><use x="224" y="144" href="#p" /><use x="232" y="144" href="#p" /><use x="248" y="144" href="#p" /><use x="0" y="152" href="#p" /><use x="16" y="152" href="#p" /><use x="24" y="152" href="#p" /><use x="64" y="152" href="#p" /><use x="72" y="152" href="#p" /><use x="96" y="152" href="#p" /><use x="104" y="152" href="#p" /><use x="120" y="152" href="#p" /><use x="128" y="152" href="#p" /><use x="144" y="152" href="#p" /><use x="168" y="152" href="#p" /><use x="184" y="152" href="#p" /><use x="200" y="152" href="#p" /><use x="224" y="152" href="#p" /><use x="232" y="152" href="#p" /><use x="240" y="152" href="#p" /><use x="8" y="160" href="#p" /><use x="16" y="160" href="#p" /><use x="24" y="160" href="#p" /><use x="32" y="160" href="#p" /><use x="48" y="160" href="#p" /><use x="56" y="160" href="#p" /><use x="72" y="160" href="#p" /><use x="80" y="160" href="#p" /><use x="96" y="160" href="#p" /><use x="112" y="160" href="#p" /><use x="136" y="160" href="#p" /><use x="176" y="160" href="#p" /><use x="184" y="160" href="#p" /><use x="192" y="160" href="#p" /><use x="200" y="160" href="#p" /><use x="216" y="160" href="#p" /><use x="224" y="160" href="#p" /><use x="232" y="160" href="#p" /><use x="248" y="160" href="#p" /><use x="0" y="168" href="#p" /><use x="16" y="168" href="#p" /><use x="64" y="168" href="#p" /><use x="80" y="168" href="#p" /><use x="144" y="168" href="#p" /><use x="152" y="168" href="#p" /><use x="160" y="168" href="#p" /><use x="168" y="168" href="#p" /><use x="184" y="168" href="#p" /><use x="192" y="168" href="#p" /><use x="200" y="168" href="#p" /><use x="208" y="168" href="#p" /><use x="216" y="168" href="#p" /><use x="232" y="168" href="#p" /><use x="240" y="168" href="#p" /><use x="248" y="168" href="#p" /><use x="256" y="168" href="#p" /><use x="0" y="176" href="#p" /><use x="16" y="176" href="#p" /><use x="40" y="176" href="#p" /><use x="48" y="176" href="#p" /><use x="56" y="176" href="#p" /><use x="64" y="176" href="#p" /><use x="88" y="176" href="#p" /><use x="96" y="176" href="#p" /><use x="120" y="176" href="#p" /><use x="160" y="176" href="#p" /><use x="168" y="176" href="#p" /><use x="176" y="176" href="#p" /><use x="192" y="176" href="#p" /><use x="200" y="176" href="#p" /><use x="224" y="176" href="#p" /><use x="248" y="176" href="#p" /><use x="0" y="184" href="#p" /><use x="24" y="184" href="#p" /><use x="64" y="184" href="#p" /><use x="72" y="184" href="#p" /><use x="88" y="184" href="#p" /><use x="112" y="184" href="#p" /><use x="160" y="184" href="#p" /><use x="168" y="184" href="#p" /><use x="176" y="184" href="#p" /><use x="184" y="184" href="#p" /><use x="192" y="184" href="#p" /><use x="200" y="184" href="#p" /><use x="208" y="184" href="#p" /><use x="216" y="184" href="#p" /><use x="232" y="184" href="#p" /><use x="240" y="184" href="#p" /><use x="0" y="192" href="#p" /><use x="16" y="192" href="#p" /><use x="32" y="192" href="#p" /><use x="48" y="192" href="#p" /><use x="56" y="192" href="#p" /><use x="64" y="192" href="#p" /><use x="72" y="192" href="#p" /><use x="80" y="192" href="#p" /><use x="88" y="192" href="#p" /><use x="120" y="192" href="#p" /><use x="128" y="192" href="#p" /><use x="136" y="192" href="#p" /><use x="144" y="192" href="#p" /><use x="152" y="192" href="#p" /><use x="176" y="192" href="#p" /><use x="192" y="192" href="#p" /><use x="200" y="192" href="#p" /><use x="208" y="192" href="#p" /><use x="216" y="192" href="#p" /><use x="224" y="192" href="#p" /><use x="256" y="192" href="#p" /><use x="64" y="200" href="#p" /><use x="72" y="200" href="#p" /><use x="80" y="200" href="#p" /><use x="96" y="200" href="#p" /><use x="104" y="200" href="#p" /><use x="112" y="200" href="#p" /><use x="128" y="200" href="#p" /><use x="136" y="200" href="#p" /><use x="144" y="200" href="#p" /><use x="152" y="200" href="#p" /><use x="168" y="200" href="#p" /><use x="176" y="200" href="#p" /><use x="184" y="200" href="#p" /><use x="192" y="200" href="#p" /><use x="224" y="200" href="#p" /><use x="256" y="200" href="#p" /><use x="0" y="208" href="#p" /><use x="8" y="208" href="#p" /><use x="16" y="208" href="#p" /><use x="24" y="208" href="#p" /><use x="32" y="208" href="#p" /><use x="40" y="208" href="#p" /><use x="48" y="208" href="#p" /><use x="64" y="208" href="#p" /><use x="72" y="208" href="#p" /><use x="104" y="208" href="#p" /><use x="112" y="208" href="#p" /><use x="120" y="208" href="#p" /><use x="128" y="208" href="#p" /><use x="160" y="208" href="#p" /><use x="184" y="208" href="#p" /><use x="192" y="208" href="#p" /><use x="208" y="208" href="#p" /><use x="224" y="208" href="#p" /><use x="232" y="208" href="#p" /><use x="240" y="208" href="#p" /><use x="248" y="208" href="#p" /><use x="0" y="216" href="#p" /><use x="48" y="216" href="#p" /><use x="80" y="216" href="#p" /><use x="96" y="216" href="#p" /><use x="104" y="216" href="#p" /><use x="120" y="216" href="#p" /><use x="160" y="216" href="#p" /><use x="168" y="216" href="#p" /><use x="184" y="216" href="#p" /><use x="192" y="216" href="#p" /><use x="224" y="216" href="#p" /><use x="232" y="216" href="#p" /><use x="240" y="216" href="#p" /><use x="248" y="216" href="#p" /><use x="256" y="216" href="#p" /><use x="0" y="224" href="#p" /><use x="16" y="224" href="#p" /><use x="24" y="224" href="#p" /><use x="32" y="224" href="#p" /><use x="48" y="224" href="#p" /><use x="64" y="224" href="#p" /><use x="72" y="224" href="#p" /><use x="96" y="224" href="#p" /><use x="112" y="224" href="#p" /><use x="120" y="224" href="#p" /><use x="128" y="224" href="#p" /><use x="136" y="224" href="#p" /><use x="176" y="224" href="#p" /><use x="192" y="224" href="#p" /><use x="200" y="224" href="#p" /><use x="208" y="224" href="#p" /><use x="216" y="224" href="#p" /><use x="224" y="224" href="#p" /><use x="256" y="224" href="#p" /><use x="0" y="232" href="#p" /><use x="16" y="232" href="#p" /><use x="24" y="232" href="#p" /><use x="32" y="232" href="#p" /><use x="48" y="232" href="#p" /><use x="64" y="232" href="#p" /><use x="72" y="232" href="#p" /><use x="128" y="232" href="#p" /><use x="144" y="232" href="#p" /><use x="152" y="232" href="#p" /><use x="160" y="232" href="#p" /><use x="168" y="232" href="#p" /><use x="224" y="232" href="#p" /><use x="232" y="232" href="#p" /><use x="240" y="232" href="#p" /><use x="248" y="232" href="#p" /><use x="256" y="232" href="#p" /><use x="0" y="240" href="#p" /><use x="16" y="240" href="#p" /><use x="24" y="240" href="#p" /><use x="32" y="240" href="#p" /><use x="48" y="240" href="#p" /><use x="64" y="240" href="#p" /><use x="80" y="240" href="#p" /><use x="88" y="240" href="#p" /><use x="96" y="240" href="#p" /><use x="120" y="240" href="#p" /><use x="128" y="240" href="#p" /><use x="144" y="240" href="#p" /><use x="168" y="240" href="#p" /><use x="184" y="240" href="#p" /><use x="192" y="240" href="#p" /><use x="208" y="240" href="#p" /><use x="232" y="240" href="#p" /><use x="240" y="240" href="#p" /><use x="0" y="248" href="#p" /><use x="48" y="248" href="#p" /><use x="64" y="248" href="#p" /><use x="88" y="248" href="#p" /><use x="112" y="248" href="#p" /><use x="120" y="248" href="#p" /><use x="128" y="248" href="#p" /><use x="160" y="248" href="#p" /><use x="168" y="248" href="#p" /><use x="176" y="248" href="#p" /><use x="200" y="248" href="#p" /><use x="208" y="248" href="#p" /><use x="224" y="248" href="#p" /><use x="232" y="248" href="#p" /><use x="240" y="248" href="#p" /><use x="0" y="256" href="#p" /><use x="8" y="256" href="#p" /><use x="16" y="256" href="#p" /><use x="24" y="256" href="#p" /><use x="32" y="256" href="#p" /><use x="40" y="256" href="#p" /><use x="48" y="256" href="#p" /><use x="64" y="256" href="#p" /><use x="88" y="256" href="#p" /><use x="136" y="256" href="#p" /><use x="144" y="256" href="#p" /><use x="160" y="256" href="#p" /><use x="176" y="256" href="#p" /><use x="184" y="256" href="#p" /><use x="192" y="256" href="#p" /><use x="208" y="256" href="#p" /><use x="232" y="256" href="#p" /><use x="248" y="256" href="#p" /></g></svg>

</div>

<button type="button" class="qr-code-demo-button" onClick="(function(_this){
    const on = _this.classList.contains('js-active')
    document.querySelector('.qr-js-code-demo').classList.toggle('js-active');
    _this.classList.toggle('js-active');
    _this.innerHTML = on ? 'Toggle animation ☹' : 'Toggle animation ☺'
})(this);return false;">Toggle animation ☹</button>

</div>


<h2 data-content='Misc'>Misc</h2>

- Google Chrome recently added an option to create a QR code for the current page in the right click menu but we can only download it as a poor quality, branded PNG.

- Worth noting, the longer the text or URL we are encoding in the QR Code, more complex it will be. So we can have a smaller Flash code, with less rows and columns, by using a URL shortener, for example.

- I think the average person is still ignoring QR code as the adoption is still really slow after years of uses in many communication support. I guess it’s just not appealing to scan a gibberish splatter of black and white dots.  
I believe it should be replaced in medium term by a human **and** machine-readable URL as many modern smartphone can scan text now so the URL would be displayed with some specific graphics around to help the machine to scan.

- Don’t forget to add a `title` attribute to a SVG to make it accesible.

<p>Fin <span class="end"></span></p>