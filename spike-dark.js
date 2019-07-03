function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`
body {filter: invert(100%)}
iframe {filter: invert(100%)}
img {
   -webkit-filter: invert(1);
   filter: invert(1)
   }
img.icon {filter: invert(0%)}
#oWIP {filter: invert(100%)}
.attachemoji {filter: invert(100%)}
.badge  {filter: invert(100%)}
.bubble .body .emojitext {filter: invert(100%)}
.bubble a {filter: invert(100%)}
.bubble div div div div {filter: invert(100%)}
.bubble-wrapper {filter: invert(100%)}
.button {filter: invert(100%)}
.button img {filter: invert(0%)}
.button .icon {filter: invert(100%)}
.checkbox {filter: invert(100%)}
.emojiCategory {filter: invert(100%)}
.emojiCategory.emojiCategory {filter: invert(100%)}
.emojiCategory.selected {filter: invert(100%)}
.hover {filter: invert(100%)}
.hover:hover {background-color: #0085ff}
.on {filter: invert(100%)}
.person .name {filter: invert(100%)}
.section {filter: invert(0%)}
.section:hover {filter: invert(100%);}
.section:hover {background-color: #0085ff}
.section:hover .title {filter: invert(100%)}
.separatorBottom div {filter: invert(100%)}
.separatorBottom .picture-border {filter: invert(100%)}
.separatorBottom .title {filter: invert(0%)}
.separatorBottom .subtitle {filter: invert(0%)}
.status {filter: invert(100%)}
`);
