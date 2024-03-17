var elements

window.onload = function() {
    elements = loadPlayList()
    addButtons()
}

chrome.runtime.onMessage.addListener(function (callback) {
    elements = loadPlayList()
    addButtons()
})

function loadPlayList() {
    return document.querySelectorAll("#menu #button.dropdown-trigger")
}

function addButtons() {
    if (elements) {
        for (let element of elements) {
            let btn = document.createElement("div")
            btn.innerText = "Deletar"
            btn.classList.add("youtube_manager_button")
            element.parentNode.parentNode.append(btn)
            console.log(btn)
            /*element.style.backgroundColor = "yellow"*/
        }
    }
}
