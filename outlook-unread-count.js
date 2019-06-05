function checkUnread() {
    var e = null !== $(".ms-FocusZone [role=tree]:last i[data-icon-name=Inbox]").siblings()[1].querySelector("span span") ? $(".ms-FocusZone [role=tree]:last i[data-icon-name=Inbox]").siblings()[1].querySelector("span span").innerText : 0;
    updateBadge("" === e ? 0 : parseInt(e));
}

function updateBadge(e) {
    1 <= e ? rambox.setUnreadCount(e) : rambox.clearUnreadCount();
}

setInterval(checkUnread, 3000);
