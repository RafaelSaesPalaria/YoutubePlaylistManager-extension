var elements

window.onload = function() {
    document.querySelector("div#contents.style-scope.ytd-playlist-video-list-renderer.style-scope.ytd-playlist-video-list-renderer").addEventListener("DOMNodeInserted", function (a) {
        //a.target.style.backgroundColor = "red"
        console.log(a)
        console.log(a.target.matches("#menu .yt-spec-icon-shape div"))
        if (a.target.matches("#menu .yt-spec-icon-shape div")) {
            a.target.style.backgroundColor = "red"
            addButton(a.target)
        }
            //addButton(a.relatedNode.childNodes[0].querySelector("#menu #button.dropdown-trigger")))
            //addButton(a.relatedNode.childNodes[0])
        //elements = loadPlayList()
        //addButtons()
    })
}

chrome.runtime.onMessage.addListener(function (callback) {
})

function addButton(element) {
    let btn = document.createElement("div")
    btn.innerText = "Deletar"
    btn.classList.add("youtube_manager_button")
    element.parentNode.parentNode.append(btn)
     /*element.style.backgroundColor = "yellow"*/
}
