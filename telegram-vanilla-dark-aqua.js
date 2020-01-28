function applycss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`

:root{--main-dark:#5B8E90;--main:#77BABC;--main-light:#8ED1CC;--gray-dark:#1D1D24;--gray:#23232D;--gray-light:#2C2C36;--gray-selection:#31313B;--text:#959595;--light:#AAAAAA}.icon-select-tick,.im_message_file_button_icon,.md_modal_split_action_camera,.md_modal_split_action_msg,.md_modal_split_action_twitter{-webkit-filter:hue-rotate(-30deg)!important;filter:hue-rotate(-30deg)!important}.composer_command_btn.active .icon-slash,.composer_emoji_insert_btn:active .icon-emoji,.composer_emoji_insert_btn_on .icon-emoji,.composer_emoji_tooltip_category.active i,.icon-about,.icon-contacts,.icon-faq,.icon-keyboard,.icon-new-group,.icon-settings,.im_attach:active .icon-paperclip,.im_dialog_pinned,.im_media_attach:active .icon-camera,.im_record:active .icon-mic{-webkit-filter:brightness(50%) sepia(1) hue-rotate(144.4deg) saturate(151.4%) brightness(140%)!important;filter:brightness(50%) sepia(1) hue-rotate(144.4deg) saturate(151.4%) brightness(140%)!important}
.im_page_wrap,.tg_head_split{max-width:100%!important}.im_message_wrap,.im_send_form,.im_send_panel_wrap{max-width:90%!important}
.composer_user_photo,.im_dialog_photo,.im_message_contact_photo,.im_message_from_photo,.im_message_fwd_photo,.im_panel_own_photo,.im_panel_peer_photo,.md_modal_list_peer_photo,.media_modal_author_photo,.peer_modal_photo{border-radius:10%!important}

/* Color */
.im_message_outer_wrap span.im_message_sign_link,
.im_message_outer_wrap.hasselect:hover span.im_message_sign_link,
.im_submit_edit_label,
.im_submit_send_label,
a.im_dialog .im_short_message_media,
a.im_dialog .im_short_message_service {
    color: var(--main-dark) !important;
}
.btn-link.dropdown-toggle,
.btn-link.dropdown-toggle:hover,
.composer_command_value,
.composer_emoji_tooltip_tab_emoji,
.composer_emoji_tooltip_tabs_stickers_active .composer_emoji_tooltip_tab_stickers,
.dropdown-toggle,
.im_message_author,
.im_message_document_name,
.im_message_fwd_author,
.im_message_reply_author,
.im_submit_edit_label:focus,
.im_submit_edit_label:hover,
.im_submit_send_label:focus,
.im_submit_send_label:hover,
.link_preview_site_name,
.link_preview_title,
.md_modal_section_link:focus,
.md_modal_section_link:hover,
.md_modal_section_link.pull-right,
.tg_head_logo_dropdown .dropdown-menu > li > a,
.tg_head_peer_dropdown .dropdown-menu > li > a,
a strong,
a {
    color: var(--main) !important;
}
.badge,
.btn-link:hover,
.btn-md:hover,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover,
.btn-primary.active,
.btn:hover .im_selected_count,
.im_send_dropbox_wrap,
.open .btn-primary.dropdown-toggle,
.reply_markup_button:focus,
.reply_markup_button:hover,
a.tgme_action_button_new:focus,
a.tgme_action_button_new:hover,
a.tgme_action_button:focus,
a.tgme_action_button:hover {
    color: var(--gray-dark) !important;
}
.audio_player_duration,
.audio_player_size,
.btn,
.composer_command_desc,
.composer_command_option:hover .composer_command_desc,
.composer_rich_textarea:empty:before,
.dropdown-menu > li > a,
.form-control,
.form-control::placeholder,
.im_message_date,
.im_message_document_size,
.im_message_views_cnt,
.im_page_wrap,
.im_selected_count,
.inactive_description,
.link_preview_description,
.login_footer_wrap,
.md_modal_list_peer_description .status_online,
.md_modal_list_peer_description.status_online,
.md-input-label,
.media_modal_date,
.peer_modal_profile_description,
.reply_markup_button,
.session_active_date_online,
.settings_modal_username_link,
.settings_modal_username_link:hover,
.tg_head_connecting_text,
.tg_head_peer_status,
.tgme_page_embed_code,
.tgme_page_wrap,
.tgme_widget_message_author,
.tgme_widget_message_contact_phone,
.tgme_widget_message_document_extra,
.tgme_widget_message_footer,
.tgme_widget_message_forwarded_from,
a.im_dialog .im_short_message_text,
a.md_modal_action,
a.media_modal_date:hover,
a.tg_radio,
a.tgme_action_button_new,
a.tgme_action_button,
body,
body.body_widget_post,
html,
p.tg_checkbox,
span.im_short_message_text {
    color: var(--text) !important;
}
.countries_scrollable_wrap a.countries_modal_country:hover .countries_modal_country_code,
.im_bot_intro_message_wrap,
.im_dialog_peer,
.im_history_select_active .im_message_outer_wrap:hover .im_message_audio_duration,
.im_history_select_active .im_message_outer_wrap:hover .im_message_audio_size,
.im_history_select_active .im_message_outer_wrap:hover .im_message_author_admin,
.im_history_select_active .im_message_outer_wrap:hover .im_message_date,
.im_history_select_active .im_message_outer_wrap:hover .im_message_document_size,
.im_history_select_active .im_message_outer_wrap:hover .im_message_fwd_date,
.im_history_select_active .im_message_outer_wrap:hover .im_message_views_cnt,
.im_message_focus_active .audio_player_duration,
.im_message_focus_active .audio_player_size,
.im_message_focus_active .im_message_author_admin,
.im_message_focus_active .im_message_date,
.im_message_focus_active .im_message_document_size,
.im_message_focus_active .im_message_edited,
.im_message_focus_active .im_message_fwd_date,
.im_message_focus_active .im_message_views_cnt,
.im_message_selected .im_message_audio_duration,
.im_message_selected .im_message_audio_size,
.im_message_selected .im_message_author_admin,
.im_message_selected .im_message_date,
.im_message_selected .im_message_document_size,
.im_message_selected .im_message_fwd_date,
.im_message_selected .im_message_views_cnt,
.im_message_unread_split,
.im_service_message_pinned,
.im_service_message,
.inactive_title,
.login_form_head,
.md_modal_head,
.md_modal_section_link,
.md_modal_section_param_name,
.md-input,
.media_modal_author,
.tg_checkbox.tg_checkbox_on span.icon-checkbox-outer,
.tg_head_peer_media,
.tg_head_peer_title,
.tgme_page_title,
a.contacts_modal_contact:hover .md_modal_list_peer_description,
a.im_dialog .im_dialog_chat_from_wrap,
a.im_dialog:hover .im_dialog_date,
a.md_modal_action:focus,
a.md_modal_action:hover,
a.tg_checkbox,
h1, h2, h3, h4, h5 {
    color: var(--light) !important;
}
.active .im_dialog_date,
.active .im_dialog_peer,
.active a.im_dialog .im_dialog_chat_from_wrap,
.active a.im_dialog .im_short_message_media,
.active a.im_dialog .im_short_message_service,
.active a.im_dialog .im_short_message_text,
.active a.im_dialog:hover .im_dialog_date {
    color: #FFFFFF !important;
}
.user_color_1,
.user_color_1:hover {
    color: #8365AB !important;
}
.user_color_2,
.user_color_2:hover {
    color: #539E4F !important;
}
.user_color_3,
.user_color_3:hover {
    color: #AE9661 !important;
}
.user_color_4,
.user_color_4:hover {
    color: #4979A3 !important;
}
.user_color_5,
.user_color_5:hover {
    color: #B7635D !important;
}
.user_color_6,
.user_color_6:hover {
    color: #B3577A !important;
}
.user_color_7,
.user_color_7:hover {
    color: #5397B4 !important;
}
.user_color_8,
.user_color_8:hover {
    color: #C07844 !important;
}
/* Background-color */
.btn-link:hover,
.btn-md:hover,
.btn-primary.active,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover,
.composer_sticker_btn:hover,
.contacts_modal_col .nano > .nano-pane > .nano-slider,
.countries_modal_col .nano > .nano-pane > .nano-slider,
.im_dialogs_col .nano > .nano-pane > .nano-slider,
.im_dialogs_modal_col .nano > .nano-pane > .nano-slider,
.im_dialogs_scrollable_wrap .active a.im_dialog,
.im_dialogs_scrollable_wrap .active a.im_dialog:hover,
.im_history_col .nano > .nano-pane > .nano-slider,
.im_send_dropbox_wrap,
.img_round_video_unread .img_round_meta,
.nav-pills > li.active > a,
.open .btn-primary.dropdown-toggle,
.reply_markup_button:focus,
.reply_markup_button:hover,
.sessions_modal_col .nano > .nano-pane > .nano-slider,
.stickerset_modal_col .nano > .nano-pane > .nano-slider,
.stickerset_modal_sticker_wrap:hover,
.tg_checkbox.tg_checkbox_on span.icon-checkbox-outer,
a.composer_emoji_btn:hover,
a.tgme_action_button_new:active,
a.tgme_action_button_new:focus,
a.tgme_action_button_new:hover,
a.tgme_action_button:active,
a.tgme_action_button:focus,
a.tgme_action_button:hover {
    background-color: var(--main-dark) !important;
}
.audio_player_seek_slider .tg_slider_track_fill,
.audio_player_volume_slider .tg_slider_thumb,
.audio_player_volume_slider .tg_slider_track_fill,
.composer_emoji_tooltip_tab_shadow,
.im_dialog_badge_muted,
.im_dialog_unread,
.im_message_reply_border,
.im_send_reply_cancel:hover .icon-reply-bar,
.tg_checkbox.tg_checkbox_on i.icon-checkbox-inner,
.tg_down_progress .progress-bar,
.tg_slider_thumb,
.tg_slider_track_fill,
.tg_up_progress .progress-bar,
.tgme_head_wrap,
.tgme_widget_message_game:before,
.tgme_widget_message_link_preview:before,
.tgme_widget_message_reply:before,
a.tg_radio.tg_radio_on i.icon-radio {
    background-color: var(--main) !important;
}
.icon-message-status,
.im_history_pinned_hide:hover .icon-reply-bar,
a.tg_radio.tg_radio_on:hover i.icon-radio {
    background-color: var(--main-light) !important;
}
.tgme_page_widget_actions,
body,
body.body_widget_post,
html {
    background-color: var(--gray-dark) !important;
}
.composer_command_option,
.composer_dropdown_wrap,
.composer_emoji_tooltip,
.contacts_modal_search_field,
.contacts_modal_search_field:active,
.contacts_modal_search_field:focus,
.countries_modal_search_field,
.countries_modal_search_field:active,
.countries_modal_search_field:focus,
.dropdown-menu,
.error_modal_wrap,
.icon-tooltip-tail,
.im_bottom_panel_wrap,
.im_dialogs_col_wrap,
.im_dialogs_modal_col_wrap .im_dialogs_search_field,
.im_dialogs_panel,
.im_dialogs_scrollable_wrap a.im_dialog_searchpeer,
.im_dialogs_search_field,
.im_dialogs_search_field:active,
.im_dialogs_search_field:focus,
.im_history_empty_wrap,
.im_history_messages,
.im_history_not_selected,
.im_history_pinned_wrap,
.im_history_typing_wrap,
.im_message_outer_wrap,
.im_page_split,
.im_page_wrap,
.im_record_bg,
.im_service_message_wrap,
.login_footer_about_wrap,
.login_form_wrap,
.md_modal_body,
.md_modal_footer,
.md_simple_modal_wrap,
.md-input,
.modal-content,
.tg_head_split,
a.im_dialog,
a.tgme_head_dl_button,
i.icon-radio {
    background-color: var(--gray) !important;
}
.btn,
.button,
.composer_dropdown li a:hover,
.composer_dropdown li a.composer_command_option:hover,
.composer_dropdown li.composer_autocomplete_option_active a,
.contacts_modal_col .nano > .nano-pane,
.contacts_modal_members_list a.contacts_modal_contact:hover,
.countries_modal_col .nano > .nano-pane,
.countries_scrollable_wrap a.countries_modal_country:hover,
.dropdown-menu .divider,
.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover,
.dropdown.open .tg_head_btn,
.im_dialogs_modal_col .nano > .nano-pane,
.im_dialogs_scrollable_wrap a.im_dialog:hover,
.im_history_col .nano > .nano-pane,
.im_history_select_active .im_message_outer_wrap:hover,
.im_message_selected .im_message_outer_wrap,
.im_message_unread_split,
.login_head_bg,
.md_modal_head,
.md_modal_section_splitter,
.media_modal_wrap,
.sessions_modal_col .nano > .nano-pane,
.stickerset_modal_col .nano > .nano-pane,
.tg_head_btn:hover,
.tg_head_logo_dropdown .dropdown-menu > li > a:hover,
.tg_head_peer_dropdown .dropdown-menu > li > a:hover,
.tgme_page_embed_code,
.tgme_widget_message_bubble,
a.tgme_action_button_new,
a.tgme_action_button,
a.tgme_head_dl_button:active,
a.tgme_head_dl_button:hover {
    background-color: var(--gray-light) !important;
}
.im_message_file_button,
.tg_down_progress,
.tg_slider_track,
.tg_up_progress,
.tgme_widget_message_document_icon {
    background-color: var(--gray-selection) !important;
}
.tg_checkbox i.icon-checkbox-inner,
a.tg_radio:hover i.icon-radio {
    background-color: var(--light) !important;
}
.active .im_dialog_badge,
.active .im_dialog_unread,
.active .im_dialog:hover .im_dialog_unread {
    background-color: #FFFFFF !important;
}
.btn.btn-link.dropdown-toggle,
.im_submit_edit,
.im_submit_edit:focus,
.im_submit_edit:hover,
.im_submit_send,
.im_submit_send:focus,
.im_submit_send:hover {
    background-color: transparent !important;
}
.im_message_mymention {
    background-color: #464C7B !important;
}
/* Borders */
.contacts_modal_search_field,
.im_dialogs_modal_col_wrap .im_dialogs_search_field,
.im_dialogs_search_field,
.im_dialogs_search_field:active,
.im_dialogs_search_field:focus,
.im_edit_panel_border,
.im_send_dropbox_wrap,
.tg_radio.tg_radio_on .icon-radio-outer,
.tg_radio.tg_radio_on i.icon-radio,
i.icon-radio {
    border-color: var(--gray) !important;
}
.im_panel_peer_online,
hr {
    border-color: var(--gray-light) !important;
}
.im_message_webpage_wrap,
.tg_radio.tg_radio_on .icon-radio-outer {
    border-color: var(--main) !important;
}
.tg_checkbox i.icon-checkbox-inner,
.tg_radio .icon-radio-outer {
    border-color: var(--light) !important;
}
.composer_dropdown_wrap,
.composer_emoji_tooltip,
.countries_modal_search_field,
.countries_modal_search_field:active,
.countries_modal_search_field:focus,
.icon-tooltip-tail,
.im_page_wrap,
.login_footer_about_wrap,
.login_form_wrap,
.tg_head_logo_dropdown.open .dropdown-menu,
.tg_head_peer_dropdown .dropdown-menu,
.tgme_page_embed_code,
.tgme_widget_message_bubble {
    border: 1px solid var(--gray-light) !important;
}
.tg_head_split {
    border-right: 1px solid var(--gray-light) !important;
    border-left: 1px solid var(--gray-light) !important;
}
.fixed_actions .tgme_page_widget_actions,
.im_bottom_panel_wrap {
    border-top: 1px solid var(--gray-light) !important;
}
.im_dialogs_col_wrap,
.tg_head_logo_wrap {
    border-right: 1px solid var(--gray-light) !important;
}
.im_history_col_wrap {
    border-left: 1px solid var(--gray-light) !important;
}
.im_dialog_wrap,
.im_dialogs_panel,
.im_history_pinned_wrap,
.md-input-group,
.md_modal_iconed_section_wrap {
    border-bottom: 1px solid var(--gray-light) !important;
}
.md_modal_section_splitter {
    border-top-color: var(--main-dark) !important;
}
/* Box-shadows */
.composer_emoji_tooltip_tab_shadow {
    -webkit-box-shadow: 0 1px 0 var(--main) !important;
    box-shadow: 0 1px 0 var(--main) !important;
}
.composer_rich_textarea,
.composer_textarea,
.login_footer_about_wrap,
.login_form_wrap {
    -webkit-box-shadow: 0 1px 0 var(--gray-light) !important;
    box-shadow: 0 1px 0 var(--gray-light) !important;
}
.composer_rich_textarea:focus {
    -webkit-box-shadow: 0 2px 0 0 var(--main-dark) !important;
    box-shadow: 0 2px 0 0 var(--main-dark) !important;
}
.composer_dropdown_wrap,
.im_page_wrap,
.md_modal_section_splitter,
.tg_head_logo_dropdown .dropdown-menu,
.tg_head_peer_dropdown .dropdown-menu {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}
.im_message_focus_active .im_message_outer_wrap {
    -webkit-animation-duration: 2s !important;
    animation-duration: 2s !important;
}
@-webkit-keyframes im_message_focus_fade {
    from {
        background-color: var(--gray-light);
    }
}
@keyframes im_message_focus_fade {
    from {
        background-color: var(--gray-light);
    }
}
/* Selection */
::-moz-selection {
    background-color: var(--main) !important;
    color: #FFFFFF !important;
}
::selection {
    background-color: var(--main) !important;
    color: #FFFFFF !important;
}
/* Margin / Padding */
.im_service_message {
    margin: 0 !important;
    padding: 9px 7px !important;
}
.im_dialogs_panel {
    padding: 8px !important;
}
/* Progress arc */
.progress-arc-intermediate .progress-arc .progress-arc-bar {
    stroke: var(--main);
}
.stop0,
.stop60,
.stop100 {
    stop-color: var(--main) !important;
}
.composer_emoji_insert_btn:hover .icon-emoji,
.inactive_image {
    opacity: 0.8 !important;
}
.composer_emoji_insert_btn_on:hover .icon-emoji {
    opacity: 1 !important;
}
/* Hue rotation */
.composer_emoji_tooltip_category i {
    -webkit-filter: invert(100%) !important;
    filter: invert(100%) !important;
}
.active .im_dialog_pinned,
.tgme_widget_message_views:after {
    -webkit-filter: brightness(250%) !important;
    filter: brightness(250%) !important;
}
.icon-filter-audio,
.icon-filter-documents,
.icon-filter-photos,
.icon-filter-video,
.icon-message-views {
    -webkit-filter: brightness(75%) !important;
    filter: brightness(75%) !important;
}
.im_history_message_wrap.im_message_selected .icon-message-views {
    -webkit-filter: saturate(0%) !important;
    filter: saturate(0%) !important;
}
/* Code blocks */
code, pre {
    background-color: #272822 !important;
    border: none !important;
    color: #EFEBDA !important;
}

`);
