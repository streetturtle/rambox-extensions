function checkUnread() {
    var elem = document.querySelector('i[data-icon-name="Inbox"]+span+span>span');
    var count = elem ? elem.innerText.split('\n')[0] : 0;
    var t = parseInt(count);
    updateBadge(t);
}

function updateBadge(e) {
    e && e >= 1 ? rambox.setUnreadCount(e) : rambox.clearUnreadCount();
}

setInterval(checkUnread, 3000);
