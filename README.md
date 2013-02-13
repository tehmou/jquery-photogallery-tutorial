# jQuery Photo Gallery

## Initialize CSS

Set all of the children of image-container to have position: absolute. This way they will lay on top of each other. Also set display: block to make them behave.

There are already some styles in place to move the container to the center and add a small shadow.


## Include scripts at the end of body

This way the content is loaded before the scripts and the user can at least see something.

`<script src="lib/jquery-1.9.0.js"></script>
<script src="js/main.js"></script>`


## The script is broken!

A lazy developer created the structure for the code but didn't have time to fill in the details. Fortunately the comments are there, and the missing parts are marked with three dots.


## Where to go from here?

### Add a cool transition

jQuery function calls can be "chained". This means that it's perfectly valid to say $("#container").css("color", "red").html(""); You can have as many as you like!

Anyway, after you have found the new image you want to show, wrap it into jQuery and call

´.hide().fadeIn()´

This will first hide it and then make a fade in animation. If you don't hide it first, it will not have a chance to fade in :)


### Add buttons to move back and forth

Create two new <button> elements to index.html at the end of #image-gallery-wrapper. This should make them show below the images.

`<button id="previous-button">Previous</button>
<button id="next-button">Next</button>`

Instead of assigning a click handler to the whole #image-gallery, assign a different one to each of the buttons. In the case of previous, decrease index by one.

Notice that you will have to handle the case of going below 0 in the update function!


### Add an text indicating which picture is showing

Create a new span at the end of #image-gallery-wrapper. Give it an id of "current-image-label".

In update function, use $("#current-image-label").html("..."); to set the text of the label into 1/5 or 4/5 etc. depending on which picture is current selected.

