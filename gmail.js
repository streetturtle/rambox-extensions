function applycss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`

  .aKB{
    display:none;
  }
  .bsU{
      border: 2px solid teal;
      border-radius: 8px;
      font-weight: bold;
      text-align: center;
      padding: 0 !important;
      width: 20px;
  }

`);
