function checkUnread() {
    var e = document.querySelector(".aim .aio").querySelector("span").querySelector("a").getAttribute("aria-label").replace(/[^0-9]/g, "");
    updateBadge(e ? parseInt(e) : 0);
}

function updateBadge(e) {
    1 <= e ? rambox.setUnreadCount(e) : rambox.clearUnreadCount();
}

setInterval(checkUnread, 3000);
