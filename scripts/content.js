window.onload = function() {
    // Your content script logic here
    var elements = document.querySelectorAll("#menu #button.dropdown-trigger")

    for (element of elements) {
        element.style.backgroundColor = "yellow"
    }

    console.log(elements)
}

