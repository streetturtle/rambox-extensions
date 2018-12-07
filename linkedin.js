function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
 }
applycss(`

  .right-rail{
    display:none;
  }
  
  .ad-banner {
    display: none;
  }

`);
