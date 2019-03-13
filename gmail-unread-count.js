function checkUnread() {
    var e = document.getElementsByClassName("bsU");
    var t = 0;
    for( i = 0; i < e.length; i++ ) t += parseInt(e[i].innerHTML.trim());
    updateBadge(t);
}

function updateBadge(e) {
    e && e >= 1 ? rambox.setUnreadCount(e) : rambox.clearUnreadCount();
}

setInterval(checkUnread, 3000);
