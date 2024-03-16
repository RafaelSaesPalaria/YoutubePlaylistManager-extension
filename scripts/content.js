window.onload = function() {
    // Your content script logic here
    var elements = document.querySelectorAll("#menu #button.dropdown-trigger")

    for (let element of elements) {
        let btn = document.createElement("div")
        btn.innerText = "Deletar"
        btn.classList.add("youtube_manager_button")
        element.parentNode.parentNode.append(btn)
        console.log(btn)
        /*element.style.backgroundColor = "yellow"*/
    }

    console.log(elements)
}

