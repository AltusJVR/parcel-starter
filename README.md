[![Netlify Status](https://api.netlify.com/api/v1/badges/77d48bb7-8568-49db-9a3a-a61af69863f6/deploy-status)](https://app.netlify.com/sites/vigorous-hypatia-24a37c/deploys)

[![Greetings](https://github.com/AltusJVR/parcel-starter/actions/workflows/greetings.yml/badge.svg)](https://github.com/AltusJVR/parcel-starter/actions/workflows/greetings.yml)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/AltusJVR/parcel-starter?color=Green&style=plastic)

[![CodeFactor](https://www.codefactor.io/repository/github/altusjvr/parcel-starter/badge)](https://www.codefactor.io/repository/github/altusjvr/parcel-starter)


Preview the start er template on [Netlify](https://parcel-scss-practice.netlify.app/). 

##### To use this package:
1. Fork from [Github](https://github.com/AltusJVR/parcel-starter).
2. Clone onto your local machine. 
3. If using as astarter for new projects, remeber to remove the git remote, using `git remote remove [git-remote-name]`.
### How to use
- `npm run dev` - starts a dev server on http://localhost:8080/ and watches for file changes. 
- All changes should happen in the `src/` folder. Changes in dist or temp will be **overwritten**!
- If you want to automatically open the browser add the `--open` flag in `package.json` to the `dev` srcipt. 
 - **Script should look like this:**
```json
parcel src/**/*.html --no-cache --port 8080 --out-dir tmp --open
```
- Please see the [Parcel](https://parceljs.org/) docs for more info on flags to use in the dev and build script.

-  `npm run build` - build and minifies files into the dist folder, parcel will create this folder by itself, you do not need to create it before running the script.
 ##### Dependencies
 1. Parcel ("^2.0.0-beta.2").
  - Parcel website documentation is out of date. Please rfere to the npm repo for Parcel v2. [Parcel](https://v2.parceljs.org/) 
  - Another issue I encountered was scss errors, Parcel does nt=ot auto restart after clearing the error. 
 #### Dev Dependencies 

```json
devDependencies": {
    "@parcel/transformer-sass": "^2.0.0-beta.2"
  }
```
- devDependencies get installed automaitcally by Parcel. 
----------
##### Why I created this package
- This package was created as a personal starter to practice Sass and setting up a task runner. I settled on Parcel as it was easy to set up and made sense for my workflow. 
- I also wanted a way to swop out Google font pairings without replacing an entire `@import` url everytime I wanted to see a new font pairing, in my wn project. 
- It's different to see a font pairing recommendation on a design website where everything is perfect. I wanted to see these fonts "in the wild".
-  ###### Some Recommendations for font pairing suggestions: 
1. [Fontpair](https://www.fontpair.co/)
2. [Reliable](https://www.reliablepsd.com/ultimate-google-font-pairings/)
3. [PageCloud](https://www.pagecloud.com/blog/best-google-fonts-pairings) One of my Favourites (Gives recommedations on weights and style).
4. [Typewolf](https://www.typewolf.com/)
5. [Fontjoy](https://fontjoy.com/) Another one f my favourites (lets you genrate 100's of pairings).

----------

1. [Project layout](#project-layout)
2. [Partials and Google Fonts](#partials)
3. [The typo file](#typo-scss)
3.1 [Typo Variabes](#typo-variables)
3.2 [The fonts file](#fonts-scss)
4. [The Colors file](#colors-scss)
5. [The javasript file](#javascript) 




#Project layout
- Outside the `src/` folder there is a `.sassrc` file (this was recommended in the parcel documentation. 
- `.sassrc`:
```json
{
  "includePaths": ["node_modules"],  
}
```
```
src/
  |__"index.html"
  |__"main.scss"
  |
  |__img/
  |  |_(empty)
  |
  |__js/
  |  |__ "main.js"
  |
  |__scss/
    |__abstracts
    |     |_ "_colors.scss"
    |     |_ "_font-imports.scss"
    |     |_ "_fonts.scss"
    |__base/
    |     |_ "_mixins.scss"
    |     |_ "_reset.scss"
    |     |_ "_typo.scss"
    |__components/
    |     |_ "_buttons.scss" (curently empty)
    |     |_ "_footer.scss"
    |     |_ "_navbar.scss"
    |__layout/
    |     |_ "_container.scss"
    |     |_ "_index.scss"
    |     |_ "mobile.scss" (this is called in any .html file after the main.scss!)
    |__pages
      |_ (empty)
```  
- `.scss` files can be refrenced directly in `index.html` Parcel together with Dart-sass will complile this to css and reference the compiled css in the `tmp/` or `dist/` folder.
- Other `.html` pages can also be created in the `src/` folder. 

#Partials 
- In the project there is a `_fonts.scss` and `_colors.scss`. These contain the main `sass:maps` for this project starter. 
- Google fonts are stored in `.scss` varibales in the `_font-import.scss` file. 
- The google font pairs are only referenced when calling a font pair in the `_typo.scss` file. 

#Typo scss 
- In `_typo.scss` a font pair can be selected, the font pair inlcudes a Heading font and a body font. 
- Change the `var` in `$font-theme: (1-12);` to select a different font pairing.   
- Each `heading`(h1,h2,h3,h4,h5,h6) css selector is generated with the following:
```css
h1 {
  font-family: value;
    font-weight: value;
    font-style: value;
    color:value;
    font-size: value;
    letter-spacing: value;
}

h2 {
  ...
} etc
```
- `letter-spacing` is determined by a letter-sppacing map and modifier related to each font (currently only headings). 

#Typo variables 
- In the `_typo.scss` file, `background-color`, `font-color` and `heading-color` can be set. 
- Colors are referenced from `_colors.scss`. 

#Fonts scss
- Each font pair has an associated map with the following: 
```css
Example:
$playfair-map:(
  import1: fi.$playfair-display, /* - import from Goolge Fonts */
  import2: fi.$raleway, /* - import from Goolge Fonts */
  heading: $playfair-display, /* - Heading font family */
  heading-ls: 200, /* - Heading letter spacing modifier */
  h-w: 'regular', /* - Heading font weight (references the weight map in __fonts.scss) */
  h-s: $font-style, /* - Heading font style(can be any other css font style) */
  body:$raleway, /* - Body font family */
  body-weight: 'regular', /* - Body font weight (references the weight map in __fonts.scss) */
  b-s: $font-style, /* - Body font style(can be any other css font style) */
  );
```
- Heading sizes are also mapped in the `_fonts.scss` file.

#Colors-scss
- This file contains color maps for white-gray, blue and overlay colors.
- Each map has a set of varaiables assigned to it so that the variable can be referenced and not the map in other `.scss` modules. 
- Please see the [Dart-sass](https://sass-lang.com/) documentation on how to use variables in other files. 

#Javascript 
- The only Javascript in this project is to toggle the navbar on small screensizes and animate the navbar opacity when scrolling. 

----------