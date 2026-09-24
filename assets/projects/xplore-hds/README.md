# EPFL Xplore — Handling Device System photos

Place project pictures in this folder (for example, `img1.jpg` and `img2.jpg`).

In the root `script.js`, find the Space Robotics project and add image paths to
its `gallery` in display order. The current cover is `img1.webp`:

```js
gallery: [
  "assets/projects/xplore-hds/img1.webp",
  "assets/projects/xplore-hds/img2.jpg",
],
```

Use the exact filenames and extensions, including capitalization. JPG, PNG, and
WebP images are supported. The first image becomes the card's cover; the carousel
and larger viewer are enabled automatically. Until then, the card displays
"Photos coming soon".
