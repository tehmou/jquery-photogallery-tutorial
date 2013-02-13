$(function () {

    // Index of the image that is currently shown.
    var currentImageIndex = ...;

    // Get all of the images inside of the #image-container with jquery.
    var $images = ...;

    // Count the number of elements we found.
    var numImages = ...;

    // Get the image container with jquery for future use.
    var $imageGallery = ...;

    console.log("Found " + numImages + " images in the image-container");

    // Function for updating the current picture that is visible.
    function update () {

        // Rewind currentImageIndex to 0 if we are already too far.
        if (...) {
            currentImageIndex = 0;
        }

        console.log("Updating gallery");
        console.log("currentImageIndex = " + currentImageIndex);

        // Get the currentImage based on the currentImageIndex.
        // Notice that the $images is actually an array of DOM elements.
        // (The elements of the array are *not* jquery wrapped, but here
        // we don't have to care about that.
        var currentImage = ...;

        // Append the currentImage to $imageContainer. It will remove the
        // element from its last location and insert it on top of everything.
        // (To put it below everything would be to "prepend")
        $imageGallery...;
    }

    // Add a click handler function to the whole image container and only allow
    // going forward. In other words increase the currentImageIndex by
    // one and call update function. Update will take care of rewinding
    // if we are past the last picture.
    $imageGallery...;

    // Trigger update function manually the first time to reset everything.
    ...

});
