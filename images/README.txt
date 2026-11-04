C'ERA UNA VOLTA – WHERE TO PUT THE PHOTOS
=========================================

Save each photo with exactly the file name below. As soon as a file
exists, it replaces its placeholder automatically – no code changes needed.
JPG is expected; if you use another format, change the extension in the
file listed in brackets.

LOGO
  images/logo.png                    (header, footer, browser tab icon)

HOME PAGE  [index.html]
  images/hero/hero-bar.jpg           big background photo at the top
                                     (cocktail glasses / bar atmosphere,
                                     landscape, at least 2000 px wide)
  Intro section       gallery photo 14  (images/gallery/photos/)
  Live music section  gallery video 13  – the page plays the web copy
                      images/gallery/optimized/video-13-web.mp4
  Menu invitation     gallery photo 36  (images/gallery/photos/)

ABOUT US  [about.html]
  images/team/team-photo-1.jpg       portrait 4:5
  images/team/team-photo-2.jpg       portrait 4:5

GALLERY  [js/gallery.js]
  The gallery uses the folder next to the website folder:
    images/gallery/photos/     the original photos  (never changed)
    images/gallery/video/      the original videos  (never changed)
    images/gallery/optimized/  smaller WebP copies the page actually shows
  Every photo and video, with its category (ambient / drinks / music), is
  listed in GALLERY_ITEMS at the top of js/gallery.js. To move an item to
  another category, change its "cat". When uploading the site, upload the
  "images" folder next to the "website" folder so these paths keep working.
