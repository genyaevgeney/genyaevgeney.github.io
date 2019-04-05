;(function(){
  "use strict";

  function showPlayList () {

    var playList = [
    {
      author: "LED ZEPPELIN",
      song:"STAIRWAY TO HEAVEN"
    },
    {
      author: "QUEEN",
      song:"BOHEMIAN RHAPSODY"
    },
    {
      author: "LYNYRD SKYNYRD",
      song:"FREE BIRD"
    },
    {
      author: "DEEP PURPLE",
      song:"SMOKE ON THE WATER"
    },
    {
      author: "JIMI HENDRIX",
      song:"ALL ALONG THE WATCHTOWER"
    },
    {
      author: "AC/DC",
      song:"BACK IN BLACK"
    },
    {
      author: "QUEEN",
      song:"WE WILL ROCK YOU"
    },
    {
      author: "METALLICA",
      song:"ENTER SANDMAN"
    }
    ];


    let orderedList = document.createElement('ol');
    orderedList.setAttribute('type', 'I');
    let parentBody = document.getElementsByTagName('body');
    let parentList =document.getElementsByTagName('ol');
    let parentItem =document.getElementsByTagName('li');
    parentBody[0].appendChild(orderedList);
    parentBody[0].style.minHeight = "100vh";
    parentBody[0].style.background = "linear-gradient(to right, #ffa17f, #00223e)";
    parentBody[0].style.display = "flex";
    parentBody[0].style.justifyContent = "center";
    parentBody[0].style.alignItems = "center";
    parentList[0].style.color = "lightgoldenrodyellow";

    for(let i = 0;i < playList.length;i++) {
      let listItem = document.createElement('li');  
      parentList[0].appendChild(listItem);
      let link = document.createElement('a');
      link.innerText = `${playList[i].author} : ${playList[i].song}`;
      parentItem[i].appendChild(link);
    }
  }

  showPlayList();

})();