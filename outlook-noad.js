function applycss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`

._2qPmszDwBfYpF7PO9Mn3KN, 
._3a6SuYqdwIspGohT1zu16B, 
._1_ag99JsBHxI6S4FP5ayPv,
._3_hHr3kfEhbNYRFM5YJxH9{
    display:none !important;
}

`);
