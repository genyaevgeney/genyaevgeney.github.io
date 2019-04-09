;(function(){
  "use strict";
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

  function showPlayList (data) {

    const orderedList = document.createElement('ol');
    orderedList.setAttribute('type', 'I');
    document.body.appendChild(orderedList);
    document.body.style.minHeight = "100vh";
    document.body.style.background = "linear-gradient(to right, #ffa17f, #00223e)";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    orderedList.style.color = "lightgoldenrodyellow";

    for(let i = 0;i < data.length;i++) {
      const listItem = document.createElement('li');
      const link = document.createElement('a');  
      link.innerText = `${data[i].author} : ${data[i].song}`;
      listItem.appendChild(link);
      orderedList.appendChild(listItem);
    }
  }

  showPlayList(playList);

})();