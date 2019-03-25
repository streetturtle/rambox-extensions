function checkUnread() {
    var e = document.querySelectorAll('div.thread:not(.nobadge) div.badge');
    var t = 0;
    for (i = 0; i < e.length; i++) {
        t += e[i].innerHTML.trim() != '' ? parseInt(e[i].innerHTML.trim()) : 1;
    }
    updateBadge(t);
}

function updateBadge(e) {
    e && e >= 1 ? rambox.setUnreadCount(e) : rambox.clearUnreadCount();
}

setInterval(checkUnread, 3000);
