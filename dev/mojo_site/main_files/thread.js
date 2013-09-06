/*jslint evil:true */
/*global DISQUS:false */
/**
 * Dynamic thread loader
 *
 * 
 *  * 
 * 
*/

(function (window) {
    var DISQUS = window.DISQUS;
    var jsonData, cookieMessages, session;

    // 
    if (!DISQUS || typeof DISQUS === 'function') {
        throw "DISQUS object is not initialized";
    }
    // 
    // json_data and default_json django template variables will close
    // and re-open javascript comment tags

    /* */ jsonData = {"reactions": [], "reactions_limit": 10, "ordered_highlighted": [], "posts": {}, "ordered_posts": [], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": true, "integration": {"receiver_url": "", "hide_user_votes": false, "reply_position": true, "disqus_logo": false}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1359478749", "users": {}, "user_unapproved": {}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 0, "offset_posts": 0, "slug": "white_house_pretty_much_gives_up_on_closing_gitmo", "likes": 0, "num_pages": 0, "days_alive": 0, "moderate_none": false, "voters": {}, "total_posts": 0, "realtime_paused": false, "queued": false, "pagination_type": "append", "user_vote": null, "identifiers": ["node/214841"], "num_posts": 0, "closed": false, "per_page": 80, "id": 1053676102, "killed": false, "moderate_all": false}, "forum": {"use_media": false, "avatar_size": 32, "apiKey": "27nPmYEgaEcLRjCi2Begn4YyHDaRpv0gFJ3KMcHwzSY1LfmbU45fMmnLbEydNnkH", "features": {"achievements": true, "training": true, "logs": true, "realtime": true, "support_implementation": true, "partner_key": true, "multiauthor_moderation": true, "support_vip": true, "reports": true, "vip_servers": true, "analytics": true, "sso": true, "multisite_admin": true, "uptime": true, "dtpl_editor": true}, "comment_max_words": 200, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": false, "streaming_realtime": false, "reply_position": true, "id": 431522, "default_avatar_url": "http://mediacdn.disqus.com/1359478749/images/noavatar32.png", "template": {"url": "http://mediacdn.disqus.com/1359478749/uploads/themes/01931a6925d3de09e5f87419d9d55055/theme.js?1", "mobile": {"url": "http://mediacdn.disqus.com/1359478749/uploads/themes/mobile/theme.js?254", "css": "http://mediacdn.disqus.com/1359478749/uploads/themes/mobile/theme.css?254"}, "api": "1.0", "name": "Custom 1 (motherjones)", "css": "http://mediacdn.disqus.com/1359478749/uploads/themes/01931a6925d3de09e5f87419d9d55055/theme.css?1"}, "max_depth": 5, "ranks_enabled": false, "lastUpdate": 1321914977, "linkbacks_enabled": false, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/43/1522/motherjones.css", "show_avatar": true, "reactions_enabled": false, "disqus_auth_disabled": false, "name": "Mother Jones", "language": "en", "mentions_enabled": true, "url": "motherjones", "allow_anon_post": false, "thread_votes_disabled": true, "hasCustomStyles": true, "moderate_all": false}, "settings": {"uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1359478749", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "52254943976", "juggler_url": "http://juggler.services.disqus.com", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1359478749"}, "ranks": {}, "request": {"sort": "oldest", "is_authenticated": true, "user_type": "verified", "subscribe_on_post": null, "missing_perm": null, "user_id": 22049166, "remote_domain_name": "", "remote_domain": "", "comments_count": 5, "is_verified": true, "profile_url": "", "username": "benbreedlove", "is_global_moderator": false, "sharing": {"twitter": {"auto": false, "enabled": false}, "facebook": {"auto": false, "enabled": false}, "yahoo": {"auto": false, "enabled": false}}, "timestamp": "2013-01-29_16:05:56", "is_moderator": true, "ordered_unapproved_posts": [], "likes_count": 17, "unapproved_posts": {}, "forum": "motherjones", "is_initial_load": true, "display_username": "benbreedlove", "points": 17, "has_email": true, "moderator_can_edit": true, "is_remote": false, "userkey": "benbreedlove", "page": 1}, "context": {"use_twitter_signin": false, "use_fb_connect": false, "show_reply": true, "sigma_chance": 10, "use_google_signin": false, "switches": {"listactivity_replies": true, "juggler_enabled": true, "next_realtime_indicators": true, "community_icon": true, "firehose": true, "static_styles": true, "upload_media": false, "stats": true, "website_addons": true, "firehose_gnip_http": true, "discovery_next": true, "next_dragdrop_nag": true, "firehose_gnip": true, "firehose_pubsub": true, "dark_jester": true, "limit_get_posts_days_30d": true, "juggler_thread_onReady": true, "website_homepage_https_off": true, "promoted_discovery_random": true, "phoenix": true, "phoenix_reputation": true, "discovery_next:top_placement": true, "uploads:UserProfile:s3_only": true, "shardpost:index": true, "new_sort_paginator": true, "use_rs_paginator_5m": true, "firehose_push": true, "enable_link_affiliation": true, "shardpost": true, "textdigger_crawler": true, "phoenix_optout": true, "discovery_analytics": true, "discovery_next:truncate": true, "uploads:Forum:s3_only": true, "listactivity_replies_30d": true, "uploads:Forum": true, "uploads:UserProfile": true, "firehose_pubsub_throttle": true, "uploads": true, "next_discard_low_rep": true, "mentions": true, "content_security_policy": true, "limit_textdigger": true}, "forum_facebook_key": "2087febb7c19c5f4510c0e272ad5e357", "use_yahoo": false, "subscribed": false, "active_gargoyle_switches": ["community_icon", "content_security_policy", "dark_jester", "discovery_analytics", "discovery_next", "discovery_next:top_placement", "discovery_next:truncate", "enable_link_affiliation", "firehose", "firehose_gnip", "firehose_gnip_http", "firehose_pubsub", "firehose_pubsub_throttle", "firehose_push", "juggler_enabled", "juggler_thread_onReady", "limit_get_posts_days_30d", "limit_textdigger", "listactivity_replies", "listactivity_replies_30d", "mentions", "new_sort_paginator", "next_discard_low_rep", "next_dragdrop_nag", "next_realtime_indicators", "phoenix", "phoenix_optout", "phoenix_reputation", "promoted_discovery_random", "shardpost", "shardpost:index", "static_styles", "stats", "textdigger_crawler", "uploads", "uploads:Forum", "uploads:Forum:s3_only", "uploads:UserProfile", "uploads:UserProfile:s3_only", "use_rs_paginator_5m", "website_addons", "website_homepage_https_off"], "realtime_speed": 15000, "use_openid": false}}; /* */
    /* __extrajson__ */
    cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null};

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }

    // The mappings below are for backwards compatibility--before we port all the code that
    // accesses jsonData.settings to DISQUS.settings

    var mappings = {
        debug:                'disqus.debug',
        minify_js:            'disqus.minified',
        read_only:            'disqus.readonly',
        recaptcha_public_key: 'disqus.recaptcha.key',
        facebook_app_id:      'disqus.facebook.appId',
        facebook_api_key:     'disqus.facebook.apiKey'
    };

    var urlMappings = {
        disqus_url:    'disqus.urls.main',
        media_url:     'disqus.urls.media',
        ssl_media_url: 'disqus.urls.sslMedia',
        realtime_url:  'disqus.urls.realtime',
        uploads_url:   'disqus.urls.uploads'
    };

    if (DISQUS.jsonData.context.switches.realtime_setting_change) {
        urlMappings.realtimeHost = 'realtime.host';
        urlMappings.realtimePort = 'realtime.port';
    }
    for (key in mappings) {
        if (mappings.hasOwnProperty(key)) {
            DISQUS.settings.set(mappings[key], DISQUS.jsonData.settings[key]);
        }
    }

    for (key in urlMappings) {
        if (urlMappings.hasOwnProperty(key)) {
            DISQUS.jsonData.settings[key] = DISQUS.settings.get(urlMappings[key]);
        }
    }

    DISQUS.jsonData.context.csrf_token = '0f9022cb6feaadcbd11f29e3df473129';

    DISQUS.jsonData.urls = {
        login: 'http://disqus.com/profile/login/',
        logout: 'http://disqus.com/logout/',
        upload_remove: 'http://motherjones.disqus.com/thread/white_house_pretty_much_gives_up_on_closing_gitmo/async_media_remove/',
        request_user_profile: 'http://disqus.com/benbreedlove/',
        request_user_avatar: 'http://mediacdn.disqus.com/1359478749/images/noavatar92.png',
        verify_email: 'http://disqus.com/verify/',
        remote_settings: 'http://motherjones.disqus.com/_auth/embed/remote_settings/',
        edit_profile_window: 'http://disqus.com/embed/profile/edit/',
        embed_thread: 'http://motherjones.disqus.com/thread.js',
        embed_vote: 'http://motherjones.disqus.com/vote.js',
        embed_thread_vote: 'http://motherjones.disqus.com/thread_vote.js',
        embed_thread_share: 'http://motherjones.disqus.com/thread_share.js',
        embed_queueurl: 'http://motherjones.disqus.com/queueurl.js',
        embed_hidereaction: 'http://motherjones.disqus.com/hidereaction.js',
        embed_more_reactions: 'http://motherjones.disqus.com/more_reactions.js',
        embed_subscribe: 'http://motherjones.disqus.com/subscribe.js',
        embed_highlight: 'http://motherjones.disqus.com/highlight.js',
        embed_block: 'http://motherjones.disqus.com/block.js',
        update_moderate_all: 'http://motherjones.disqus.com/update_moderate_all.js',
        update_days_alive: 'http://motherjones.disqus.com/update_days_alive.js',
        show_user_votes: 'http://motherjones.disqus.com/show_user_votes.js',
        forum_view: 'http://motherjones.disqus.com/white_house_pretty_much_gives_up_on_closing_gitmo',
        cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
        realtime: DISQUS.jsonData.settings.realtime_url,
        thread_view: 'http://motherjones.disqus.com/thread/white_house_pretty_much_gives_up_on_closing_gitmo/',
        twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
        yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
        openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
        googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
        community: 'http://motherjones.disqus.com/community.html',
        admin: 'http://motherjones.disqus.com/admin/moderate/',
        moderate: 'http://motherjones.disqus.com/admin/moderate/',
        moderate_threads: 'http://motherjones.disqus.com/admin/moderate-threads/',
        settings: 'http://motherjones.disqus.com/admin/settings/',
        unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',
        juggler: DISQUS.jsonData.settings.juggler_url,

        channels: {
            def:      'http://disqus.com/default.html', /* default channel */
            auth:     'https://disqus.com/embed/login.html',
            tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=motherjones',
            edit:     'http://motherjones.disqus.com/embed/editcomment.html'
        }
    };


    // 
    //     
    DISQUS.jsonData.urls.channels.reply = 'http://mediacdn.disqus.com/1359478749/build/system/reply.html';
    DISQUS.jsonData.urls.channels.upload = 'http://mediacdn.disqus.com/1359478749/build/system/upload.html';
    DISQUS.jsonData.urls.channels.sso = 'http://mediacdn.disqus.com/1359478749/build/system/sso.html';
    DISQUS.jsonData.urls.channels.facebook = 'http://mediacdn.disqus.com/1359478749/build/system/facebook.html';
    //     
    // 
}(window));
