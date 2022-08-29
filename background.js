console.log("loaded BG");


chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    chrome.tabs.sendMessage(tab.id,"Send me Link",function(respose){
        window.open(respose.vid_src)
        //window.open(respose.vid_source)
    })
}
