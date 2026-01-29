
function makeBig() { 
    document.getElementById("video1").style.width = "100%";
    document.getElementById("video1").style.height = "90%"
} 

function makeSmall() { 
    document.getElementById("video1").style.width = "50%";
    document.getElementById("video1").style.height = "50%"
} 

function makeNormal() { 
    document.getElementById("video1").style.width = "75%";
    document.getElementById("video1").style.height = "75%";
} 

let videoList = ["114156489411162&bvid=BV1v7QKYjESu&cid=28851308275&p=1", "114251029021822&bvid=BV12yZBYzEse&cid=29149367160&p=1", 
    "691640521&bvid=BV1324y1S7Zz&cid=934195874&p=1", "1300750085&bvid=BV1Hu4m1N75z&cid=1445515589&p=1", 
    "114142581102480&bvid=BV1hnRnYHEzU&cid=28807923874&p=1", "114119613092887&bvid=BV1iM92YaEWQ&cid=28791015003&p=1", 
    "398634929&bvid=BV1wo4y157rE&cid=1130555400&p=1", "852283386&bvid=BV1YL4y1T7Ff&cid=549181509&p=1", 
    "307582209&bvid=BV1sA411Z7s4&cid=957736145&p=1", "307281957&bvid=BV1eA411f7q4&cid=952309038&p=1", 
    "392711168&bvid=BV1Bd4y157vA&cid=961094794&p=1", "1002343863&bvid=BV1Jx4y1m7m9&cid=1488676044&p=1"];    

    
    function randomVideo() {
    for(c=0; c<10000; c++){
        list1 = Math.floor(Math.random() * videoList.length);
        list2 = Math.floor(Math.random() * videoList.length);
        temp = videoList[list1];
        videoList[list1] = videoList[list2];
        videoList[list2] = temp;
    }

    document.getElementById("video2").innerHTML='<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=' + videoList[9] + 'scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>';
}
