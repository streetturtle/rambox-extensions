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
._3_hHr3kfEhbNYRFM5YJxH9,
._2F6rWwLisyawGGg32JOcop,
._23fxOotSm5HPNB1U_ZVw4i,
._1fti_QgAzqGWPGlqh_FSvI,
._1fti_QgAzqGWPGlqh_FSvI,
._1elFdDtE02urszo_h9-MJw,
._151cu27-mizfa2_45gn3Zp,
._2_TS1mjVqZoXWVRD0GM3re,
.UsCOauPURwRS_x4JuG08,
.VPtFloqixpkkqJNcOv2T,
.O3eUZdnmMvkIwt1YXEL4,
.pBKjVBVDRKIDHWS0A95I,
.O3eUZ,
.pBKjV,
.VPtFl
{
    display:none !important;
}
`);
