console.log(document.title)

window.setTimeout(() =>{
    let vid_src = ""
    var vid = document.getElementsByTagName('video')[0]
    if(vid.src)
    {
        vid_src = vid.src
    }
    else{
        vid_src = vid.getElementsByTagName('source')[0].src
    }
    var vid_obj = {
        vid_src : vid_src
        
    }    
    console.log(vid_obj.vid_src)
    //console.log(vid_obj.vid_source)
    chrome.runtime.onMessage.addListener(function (request , sender , sendResponse){
        console.log("got messaege")
        if (request === "Send me Link")
        {   console.log("Message Recieved")
            sendResponse(vid_obj);
        }
           
    })
}, 3000);

