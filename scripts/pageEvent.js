
chrome.tabs.query({active:true,currentWindow:true},function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,{"todo":"load"}, function (callback){
        console.log(callback)
    })
}) 
