
    DISQUS.addBlocks('theme')(function ($d) {
        $d.blocks["comment"] = function block_comment ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("\x3Cdiv id\x3D\x22comment\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E\x3C/div\x3E\x3Cli id\x3D\x22dsq\x2Dcomment\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22    style\x3D\x22margin\x2Dleft:");
if (forum.max_depth != 0 && comment.depth > forum.max_depth) { 
$h.put(($h.esc || function (s) { return s; })(forum.max_depth * 30));
} else {
$h.put(($h.esc || function (s) { return s; })(comment.depth * 30));
}
$h.put("px\x3B\x22    class\x3D\x22dsq\x2Dcomment ");
if (request.page > 1) { 
$h.put("dsq\x2Dappend");
}
$h.put(" ");
if (comment.depth) { 
$h.put("dsq\x2Dcomment child dsq\x2Ddepth\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.depth));
$h.put(" dsq\x2Dparent\x2Dis\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.parent_post_id));
}
$h.put(" ");
if (comment.author_is_creator) { 
$h.put("special dsq\x2Dspecial");
}
$h.put(" ");
if (comment.author_is_moderator) { 
$h.put("dsq\x2Dmoderator");
}
$h.put(" ");
if (comment.even) { 
$h.put("dsq\x2Deven");
} else {
$h.put("dsq\x2Dodd");
}
$h.put(" ");
if (comment.num_replies > 0) { 
$h.put("dsq\x2Dcomment\x2Dis\x2Dparent");
}
$h.put("\x22\x3E  \x3C!\x2D\x2D placeholder for collapsed comment block (inserted dynamically later) \x2D\x2D\x3E  \x3Cdiv id\x3D\x22dsq\x2Dcollapsed\x2Dcomment\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dcollapsed\x2Dcomment\x22\x3E\x3C/div\x3E  \x3Cdiv class\x3D\x22dsq\x2Dfull\x2Dcomment\x22\x3E \x3C!\x2D\x2D wraps header, body, footer \x2D\x2D\x3E    \x3Cdiv id\x3D\x22dsq\x2Dcomment\x2Dheader\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dcomment\x2Dheader\x22\x3E      \x3Ctable\x3E        \x3Ctr\x3E          \x3Ctd id\x3D\x22dsq\x2Dheader\x2Davatar\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dheader\x2Davatar\x22\x3E            \x3Ca id\x3D\x22dsq\x2Davatar\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Davatar dsq\x2Dtt\x22 title\x3D\x22");
$h.put($d.interpolate(trans("Expand %(name)s\x26#39\x3Bs profile"), { "name": comment.author.display_name }));
$h.put("\x22 href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(comment.author.url));
$h.put("\x22               onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27profile.show\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(", null)\x3B\x22\x3E              ");
if (forum.show_avatar) { 
$h.put("              \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(forum.default_avatar_url));
$h.put("\x22 class\x3D\x22dsq\x2Ddeferred\x2Davatar\x22 data\x2Dsrc\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(comment.author.avatar));
$h.put("\x22 alt\x3D\x22\x22 width\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(forum.avatar_size));
$h.put("\x22 height\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(forum.avatar_size));
$h.put("\x22 /\x3E              ");
}
$h.put("            \x3C/a\x3E          \x3C/td\x3E          \x3Ctd class\x3D\x22dsq\x2Dcomment\x2Dheader\x2Dmeta\x22\x3E            \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dheader\x2Dmeta\x2Dwrapper\x22\x3E              \x3Ccite id\x3D\x22dsq\x2Dcite\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dcomment\x2Dcite\x22\x3E                ");
if (comment.author.blog) { 
$h.put("                \x3Ca id\x3D\x22dsq\x2Dauthor\x2Duser\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(comment.author.blog));
$h.put("\x22                   target\x3D\x22_blank\x22 rel\x3D\x22nofollow\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(comment.author.display_name));
$h.put("\x3C/a\x3E                ");
} else {
$h.put("                \x3Cspan id\x3D\x22dsq\x2Dauthor\x2Duser\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(comment.author.display_name));
$h.put("\x3C/span\x3E                ");
}
$h.put("                \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.media_url));
$h.put("/images/themes/narcissus/moderator.png\x22 class\x3D\x22dsq\x2Dmoderator\x2Dstar\x22                     alt\x3D\x22");
$h.put(trans("Moderator"));
$h.put("\x22 title\x3D\x22");
$h.put(trans("Moderator"));
$h.put("\x22 width\x3D\x2215\x22 height\x3D\x2214\x22/\x3E                ");
if (forum.ranks_enabled && ranks[comment.user_key]) { 
$h.put("                \x3Cspan class\x3D\x22dsq\x2Dbadge\x2Dwrap\x22\x3E                    ");
if (ranks[comment.user_key].rank.has_icon) { 
$h.put("                    \x3Cdiv class\x3D\x22dsq\x2Dbadge\x2Dimage\x22\x3E                        \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(ranks[comment.user_key].rank.icon));
$h.put("\x22 alt\x3D\x22\x22 width\x3D\x2232\x22 height\x3D\x2232\x22 /\x3E                    \x3C/div\x3E                    ");
} else {
$h.put("                    \x3Cspan class\x3D\x22dsq\x2Dbadge dsq\x2Dtt\x22 title\x3D\x22Score: \x26nbsp\x3B");
$h.put(($h.esc || function (s) { return s; })(ranks[comment.user_key].score));
$h.put(" \x26nbsp\x3B\x26nbsp\x3B Placement: \x26nbsp\x3B");
$h.put(($h.esc || function (s) { return s; })(ranks[comment.user_key].placement));
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(ranks[comment.user_key].rank.name));
$h.put("\x3C/span\x3E                    ");
}
$h.put("                \x3C/span\x3E                ");
}
$h.put("              \x3C/cite\x3E              ");
$h.put("\x3Cspan class\x3D\x22dsq\x2Dcomment\x2Dheader\x2Dtime\x22\x3E                \x3Ca href\x3D\x22#comment\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22                   onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.permalink\x27,");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22                   title\x3D\x22");
$h.put($d.interpolate(trans("Link to comment by %(author)s"), { "author": comment.author.display_name }));
$h.put("\x22\x3E");
if (comment.is_realtime) { 
$h.put(trans("Just now"));
} else {
$h.put(($h.esc || function (s) { return s; })(comment.date));
}
$h.put("\x3C/a\x3E              \x3C/span\x3E");
if (comment.parent && comment.parent.author.display_name) { 
$h.put("\x3Ca onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.showParent\x27,");
$h.put(($h.esc || function (s) { return s; })(comment.parent_post_id));
$h.put(")\x3B return false\x22                 href\x3D\x22#comment\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.parent_post_id));
$h.put("\x22 title\x3D\x22");
$h.put(trans("Jump to comment"));
$h.put("\x22 class\x3D\x22dsq\x2Dreply\x2Dlink\x22\x3E");
$h.put(trans("in reply to"));
$h.put("\x26nbsp\x3B");
$h.put(($h.esc || function (s) { return s; })(comment.parent.author.display_name));
$h.put("\x3C/a\x3E");
}
$h.put("              \x3Ca class\x3D\x22dsq\x2Dcomment\x2Dhide\x2Dthread\x22 href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.collapse\x27, this, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22 title\x3D\x22");
$h.put(trans("Collapse thread"));
$h.put("\x22\x3E\x3C/a\x3E            \x3C/div\x3E          \x3C/td\x3E        \x3C/tr\x3E      \x3C/table\x3E    \x3C/div\x3E    \x3Cdiv id\x3D\x22dsq\x2Dcomment\x2Dbody\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dcomment\x2Dbody\x22\x3E      ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {"cls": "dsq-comment-message"});
$h.put($d.renderBlock("commentMessage", $l));
}());
$h.put("      ");
if (forum.use_media && comment.media && comment.approved && !comment.killed) { 
$h.put("      \x3Cdiv id\x3D\x22dsq\x2Dmedia\x2Dembed\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dmedia\x2Dembed\x22\x3E        \x3Ch4\x3E");
$h.put(trans("Attached files"));
$h.put("\x3C/h4\x3E        ");
$d.each(comment.media, function (media, $index, $collection) {
var $locals = { "media": media, "index": $index };
$h.put("        \x3Ca id\x3D\x22dsq\x2Dmedia\x2Dembed\x2Dthumbnail\x2D");
$h.put(($h.esc || function (s) { return s; })(media.id));
$h.put("\x22 href\x3D\x22#\x22           onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.expandMediaEmbed\x27, ");
$h.put(($h.esc || function (s) { return s; })(media.id));
$h.put(")\x3B\x22\x3E          \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(media.thumbnailURL));
$h.put("\x22 style\x3D\x22width:75px\x3Bheight:75px\x3B\x22/\x3E        \x3C/a\x3E        ");
});
$h.put("      \x3C/div\x3E      ");
}
$h.put("    \x3C/div\x3E    \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dfooter\x22 id\x3D\x22dsq\x2Dcomment\x2Dfooter\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E      \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dleft\x22\x3E        ");
if (request.is_moderator) { 
$h.put("            \x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.moderate.options\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22\x3E");
$h.put(trans("Moderate"));
$h.put("\x3C/a\x3E            \x3Cspan class\x3D\x22dsq\x2Dhighlight\x22\x3E              \x3Cimg id\x3D\x22dsq\x2Dhighlight\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22                   src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.media_url));
$h.put("/images/v3/icon/16/");
if (comment.highlighted) { 
$h.put("44.png");
} else {
$h.put("44\x2Dgrey.png");
}
$h.put("\x22                   ");
if (comment.highlighted) { 
$h.put("                   onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.unhighlight\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22                   ");
} else {
$h.put("                   onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.highlight\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22                   ");
}
$h.put("                   width\x3D\x2216\x22 height\x3D\x2216\x22/\x3E            \x3C/span\x3E        ");
} else {
$h.put("            \x3Ca href\x3D\x22#\x22 id\x3D\x22dsq\x2Dpost\x2Dreport\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dpost\x2Dreport\x22                onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.report\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(", false)\x3B\x22\x3E");
$h.put(trans("Flag"));
$h.put("\x3C/a\x3E        ");
}
$h.put("      \x3C/div\x3E      ");
if (!comment.killed && comment.approved) { 
$h.put("      \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dright\x22\x3E        ");
if (comment.points > 0) { 
$h.put("\x3Cspan class\x3D\x22dsq\x2Duser\x2Dlike\x22\x3E");
if (integration.hide_user_votes || !comment.user_voted) { 
$h.put("\x3Cspan id\x3D\x22dsq\x2Dlike\x2Dpts\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(comment.points));
$h.put("\x26nbsp\x3B");
$h.put(($h.esc || function (s) { return s; })(lang.pluralize(comment.points, trans('person'), trans('people'))));
$h.put("\x3C/span\x3E\x26nbsp\x3B");
$h.put(trans("liked this"));
$h.put(".");
} else {
$h.put("\x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.disqus_url));
$h.put("/");
$h.put(($h.esc || function (s) { return s; })(comment.user_voted.username));
$h.put("\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27profile.show\x27, null, \x27");
$h.put(($h.esc || function (s) { return s; })(comment.user_voted.username));
$h.put("\x27)\x3B return false\x22               target\x3D\x22_blank\x22\x3E\x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(comment.user_voted.avatar_url));
$h.put("\x22 alt\x3D\x22\x22/\x3E\x3C/a\x3E");
if (comment.points > 1) { 
$h.put("\x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.showUserVotes\x27,");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22\x3E");
}
if (comment.user_voted.display_name) { 
$h.put(($h.esc || function (s) { return s; })(comment.user_voted.display_name));
} else {
$h.put(($h.esc || function (s) { return s; })(comment.user_voted.username));
}
$h.put("\x3Cspan id\x3D\x22dsq\x2Dlike\x2Dpts\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E");
if (comment.points > 1) { 
$h.put("\x26nbsp\x3B");
$h.put($d.interpolate(trans("and %(num)s more"), { "num": (comment.points-1) }));
}
$h.put("\x3C/span\x3E\x26nbsp\x3B");
$h.put(trans("liked this"));
if (comment.points > 1) { 
$h.put("\x3C/a\x3E");
}
}
$h.put("\x3C/span\x3E");
}
$h.put("        \x3Cspan class\x3D\x22dsq\x2Dcomment\x2Dbuttons\x22\x3E          ");
if (comment.votable) { 
$h.put("          \x3Cspan id\x3D\x22dsq\x2Dlike\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 class\x3D\x22dsq\x2Dlike\x22\x3E            \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall ");
if (comment.up_voted) { 
$h.put("dsq\x2Ddisabled\x2Dbtn");
}
$h.put("\x22 data\x2Dvote\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(+comment.vote));
$h.put("\x22                    onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.like\x27, this, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22\x3E                        ");
if (comment.up_voted) { 
$h.put(trans("Liked"));
} else {
$h.put(trans("Like"));
}
$h.put("            \x3C/button\x3E          \x3C/span\x3E          ");
}
$h.put("          ");
if (comment.from_request_user) { 
$h.put("          \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall dsq\x2Dpost\x2Dedit\x22                  onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.edit.show\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B return false\x22\x3E            ");
$h.put(trans("Edit"));
$h.put("          \x3C/button\x3E          ");
}
$h.put("          ");
if (comment.can_reply) { 
$h.put("          \x3Cspan class\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dreply\x22 id\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dreply\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22                onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.reply\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(", this)\x3B\x22\x3E            \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall\x22\x3E");
$h.put(trans("Reply"));
$h.put("\x3C/button\x3E            \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dreply\x2Dtab\x22\x3E");
$h.put(trans("Reply"));
$h.put("\x3C/button\x3E            \x3Cspan\x3E\x3C/span\x3E          \x3C/span\x3E          ");
}
$h.put("        \x3C/span\x3E      \x3C/div\x3E \x3C!\x2D\x2D /comment\x2Dfooter\x2Dright \x2D\x2D\x3E      ");
}
$h.put("    \x3C/div\x3E \x3C!\x2D\x2D /comment\x2Dfooter \x2D\x2D\x3E  \x3C/div\x3E \x3C!\x2D\x2D dsq\x2Dfull\x2Dcomment \x2D\x2D\x3E\x3C/li\x3E\x3Cdiv id\x3D\x22dsq\x2Dappend\x2Dpost\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E\x3C/div\x3E");
return $h.compile();

}

};
$d.blocks["reactions"] = function block_reactions ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if (reactions) { 
$h.put("    \x3Ch3 class\x3D\x22dsq\x2Dh3\x2Dreactions\x22\x3E");
$h.put(trans("Reactions"));
$h.put("\x3C/h3\x3E    \x3Cul id\x3D\x22dsq\x2Dreactions\x22 class\x3D\x22dsq\x2Dreactions\x22\x3E      ");
$d.each(reactions, function (reaction, $index, $collection) {
var $locals = { "reaction": reaction, "index": $index };
$h.put("        ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("reaction", $l));
}());
$h.put("      ");
});
$h.put("      ");
if (context.has_more_reactions) { 
$h.put("      \x3Cli id\x3D\x22dsq\x2Dshow\x2Dmore\x2Dreactions\x22 class\x3D\x22dsq\x2Dshow\x2Dmore\x2Dreactions\x22\x3E        \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall\x22                onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27reactions.loadMore\x27)\x3B\x22\x3E          ");
$h.put(trans("Show more reactions"));
$h.put("        \x3C/button\x3E      \x3C/li\x3E      ");
}
$h.put("    \x3C/ul\x3E  ");
}
return $h.compile();

}

};
$d.blocks["trackbacks"] = function block_trackbacks ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if (forum.linkbacks_enabled) { 
$h.put("    ");
if (context.trackbacks && context.trackbacks.length) { 
$h.put("      \x3Ch3 class\x3D\x22dsq\x2Dh3\x2Dtrackbacks\x22\x3E");
$h.put(trans("Trackbacks"));
$h.put("\x3C/h3\x3E    ");
}
$h.put("    \x3Cdiv class\x3D\x22dsq\x2Ditem\x2Dtrackback\x22\x3E      ");
$h.put(trans("Trackback URL"));
$h.put("\x26nbsp\x3B\x3Cinput class\x3D\x22dsq\x2Dtrackback\x2Durl\x22 onclick\x3D\x22this.select()\x3B\x22                                      readonly\x3D\x22true\x22 value\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(context.trackback_url));
$h.put("\x22/\x3E    \x3C/div\x3E    ");
if (context.trackbacks && context.trackbacks.length) { 
$h.put("    \x3Cul id\x3D\x22dsq\x2Dreferences\x22\x3E      ");
$d.each(context.trackbacks, function (trackback, $index, $collection) {
var $locals = { "trackback": trackback, "index": $index };
$h.put("      \x3Cli\x3E        \x3Ccite\x3E          \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(trackback.author_url));
$h.put("\x22 rel\x3D\x22nofollow\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(trackback.author_name));
$h.put("\x3C/a\x3E        \x3C/cite\x3E        \x3Cp class\x3D\x22dsq\x2Dmeta\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(trackback.date));
$h.put("\x3C/p\x3E        \x3Cp class\x3D\x22dsq\x2Dcontent\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(trackback.excerpt));
$h.put("\x3C/p\x3E      \x3C/li\x3E      ");
});
$h.put("    \x3C/ul\x3E    ");
}
$h.put("  ");
}
return $h.compile();

}

};
$d.blocks["postbox_login_options_horizontal"] = function block_postbox_login_options_horizontal ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cdiv id\x3D\x22dsq\x2Dauthenticate");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22 class\x3D\x22dsq\x2Dauthenticate\x22\x3E    \x3Cp class\x3D\x22dsq\x2Dautheneticate\x2Dcopy\x22\x3E      ");
if (forum.allow_anon_post) { 
$h.put("          ");
if (forum.revert_new_login_flow) { 
$h.put("              ");
$h.put(trans("You are commenting as a"));
$h.put(" ");
$h.put(trans("Guest"));
$h.put(".          ");
}
$h.put("          ");
$h.put(trans("Optional"));
$h.put(": ");
$h.put(trans("Login below"));
$h.put(".      ");
} else {
$h.put("      ");
$h.put(trans("Required"));
$h.put(":\x26nbsp\x3B");
$h.put(trans("Please login below to comment"));
$h.put(".      ");
}
$h.put("    \x3C/p\x3E    \x3Cul class\x3D\x22dsq\x2Dlogin\x2Dbuttons\x22\x3E      ");
$d.each(loginOptions, function (option, $index, $collection) {
var $locals = { "option": option, "index": $index };
$h.put("        ");
if (option.enabled) { 
$h.put("          ");
if (option.userDefined) { 
$h.put("            \x3Cli class\x3D\x22dsq\x2Dlogin\x2Dbutton\x22\x3E              \x3Ca href\x3D\x22#\x22 title\x3D\x22Login with ");
$h.put(($h.esc || function (s) { return s; })(lang.capitalize(option.name)));
$h.put("\x22                  onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27");
$h.put(($h.esc || function (s) { return s; })(option.action));
$h.put("\x27)\x22\x3E                \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(option.button_url));
$h.put("\x22\x3E              \x3C/a\x3E            \x3C/li\x3E          ");
} else {
$h.put("            \x3Cli class\x3D\x22dsq\x2Dlogin\x2Dbutton dsq\x2Dlogin\x2Dbutton\x2D");
$h.put(($h.esc || function (s) { return s; })(option.name));
$h.put("\x22\x3E              \x3Ca href\x3D\x22#\x22 title\x3D\x22Login with ");
$h.put(($h.esc || function (s) { return s; })(lang.capitalize(option.name)));
$h.put("\x22                onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27");
$h.put(($h.esc || function (s) { return s; })(option.action));
$h.put("\x27)\x3B\x22\x3E\x3C/a\x3E            \x3C/li\x3E          ");
}
$h.put("        ");
}
$h.put("      ");
});
$h.put("      \x3Cli style\x3D\x22clear:both\x22\x3E\x3C/li\x3E    \x3C/ul\x3E  \x3C/div\x3E");
return $h.compile();

}

};
$d.blocks["commentCount"] = function block_commentCount ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cdiv id\x3D\x22dsq\x2Dcomments\x2Dtitle\x22\x3E    \x3Ch3\x3E      ");
if (thread.total_posts && thread.total_posts > thread.num_posts) { 
$h.put("        ");
if (thread.pagination_type == 'num') { 
$h.put("          ");
$h.put($d.interpolate(trans("Showing \x3Cspan id\x3D\x27dsq\x2Dnum\x2Dposts\x27\x3E1\x2D%(num)s\x3C/span\x3E of \x3Cspan id\x3D\x27dsq\x2Dtotal\x2Dposts\x27\x3E%(total)s\x3C/span\x3E comments"), { "num": thread.num_posts, "total": thread.total_posts }));
$h.put("        ");
} else {
$h.put("          ");
$h.put($d.interpolate(trans("Showing \x3Cspan id\x3D\x27dsq\x2Dnum\x2Dposts\x27\x3E%(num)s\x3C/span\x3E of \x3Cspan id\x3D\x27dsq\x2Dtotal\x2Dposts\x27\x3E%(total)s\x3C/span\x3E comments"), { "num": thread.num_posts, "total": thread.total_posts }));
$h.put("        ");
}
$h.put("      ");
} else {
$h.put("        ");
if (thread.num_posts == 1) { 
$h.put("          ");
$h.put(trans("Showing \x3Cspan id\x3D\x27dsq\x2Dnum\x2Dposts\x27\x3E1\x3C/span\x3E comment"));
$h.put("        ");
} else {
$h.put("          ");
$h.put($d.interpolate(trans("Showing \x3Cspan id\x3D\x27dsq\x2Dnum\x2Dposts\x27\x3E%(num)s\x3C/span\x3E comments"), { "num": thread.num_posts }));
$h.put("        ");
}
$h.put("      ");
}
$h.put("    \x3C/h3\x3E  \x3C/div\x3E");
return $h.compile();

}

};
$d.blocks["subscribe"] = function block_subscribe ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cspan class\x3D\x22dsq\x2Dsubscribe\x2Demail\x22\x3E    \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.media_url));
$h.put("/images/embed/email.png\x22 alt\x3D\x22\x22/\x3E\x26nbsp\x3B    \x3Cspan id\x3D\x22dsq\x2Dsubscribe\x22\x3E      ");
if (context.subscribed) { 
$h.put("      \x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.unsubscribe\x27)\x3B\x22\x3E");
$h.put(trans("Unsubscribe"));
$h.put("\x3C/a\x3E      ");
} else {
$h.put("      \x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.subscribe\x27)\x3B\x22\x3E");
$h.put(trans("Subscribe by email"));
$h.put("\x3C/a\x3E      ");
}
$h.put("    \x3C/span\x3E    \x3Cspan class\x3D\x22dsq\x2Dsubscribe\x2Drss\x22\x3E      \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.media_url));
$h.put("/images/embed/bullet\x2Dfeed.png\x22 alt\x3D\x22\x22/\x3E\x26nbsp\x3B      \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(urls.forum_view));
$h.put("/latest.rss\x22\x3E");
$h.put(trans("Subscribe by RSS"));
$h.put("\x3C/a\x3E    \x3C/span\x3E  \x3C/span\x3E");
return $h.compile();

}

};
$d.blocks["maintenanceNotice"] = function block_maintenanceNotice ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if (settings.read_only) { 
$h.put("    \x3Cdiv class\x3D\x22dsq\x2Dalert\x2Dmessage\x22\x3E      The Disqus comment system is temporarily in maintenance mode. You can still read comments during this time, however posting comments and other actions are temporarily delayed.    \x3C/div\x3E  ");
}
return $h.compile();

}

};
$d.blocks["realtimeNotice"] = function block_realtimeNotice ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if (context.realtime_enabled) { 
$h.put("  \x3Cdiv id\x3D\x22dsq\x2Drealtime\x2Doptions\x22 class\x3D\x22dsq\x2Doptions\x22\x3E    ");
$h.put(trans("Real\x2Dtime updating is"));
$h.put(" \x3Cstrong id\x3D\x22dsq\x2Drealtime\x2Dstatus\x22 style\x3D\x22text\x2Dtransform:lowercase\x22\x3E");
$h.put(trans("enabled"));
$h.put("\x3C/strong\x3E. \x3Ca href\x3D\x22#\x22 id\x3D\x22dsq\x2Drealtime\x2Dtoggle\x22 style\x3D\x22text\x2Dtransform:capitalize\x22\x3E\x3C/a\x3E  \x3C/div\x3E  ");
}
return $h.compile();

}

};
$d.blocks["postbox"] = function block_postbox ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

if (!context.show_reply) { 
$h.put("  ");
if (!request.is_authenticated) { 
$h.put("    ");
if (forum.login_buttons_enabled) { 
$h.put("    ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("postbox_login_options_horizontal", $l));
}());
$h.put("    ");
}
$h.put("    \x3Cdiv id\x3D\x22dsq\x2Dform\x2Darea\x22 style\x3D\x22display:none\x3B\x22\x3E      \x3Cdiv id\x3D\x22dsq\x2Dtextarea\x2Dwrapper\x22\x3E      \x3C/div\x3E    \x3C/div\x3E  ");
} else {
$h.put("    \x3C!\x2D\x2D Nothing here \x2D\x2D\x3E  ");
}
} else {
$h.put("  \x3Cdiv id\x3D\x22");
if (!comment) { 
$h.put("dsq\x2Dnew\x2Dpost");
} else {
$h.put("dsq\x2Dreply\x2Dpost\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22 class\x3D\x22dsq\x2Dpost\x2Darea");
if (!request.is_authenticated) { 
$h.put(" dsq\x2Dunauthenticated");
}
$h.put("\x22\x3E    ");
if (!comment) { 
$h.put("      \x3Ch3\x3E");
$h.put(trans("Add New Comment"));
$h.put("\x3C/h3\x3E      \x3Cdiv style\x3D\x22clear:both\x22\x3E\x3C/div\x3E      ");
} else {
$h.put("      \x3Ch3\x3E");
$h.put(trans("Replying to"));
$h.put(" ");
$h.put(($h.esc || function (s) { return s; })(comment.author.display_name));
$h.put("\x3C/h3\x3E    ");
}
$h.put("    ");
if (request.is_authenticated) { 
$h.put("        ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("postbox_request_user_info", $l));
}());
$h.put("    ");
} else if (forum.login_buttons_enabled) {
$h.put("        ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("postbox_login_options_horizontal", $l));
}());
$h.put("    ");
}
$h.put("    \x3Cdiv id\x3D\x22dsq\x2Dform\x2Darea");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22\x3E      \x3Cdiv class\x3D\x22dsq\x2Dtextarea\x22\x3E        \x3Cdiv class\x3D\x22dsq\x2Dtextarea\x2Dwrapper\x22 id\x3D\x22dsq\x2Dtextarea\x2Dwrapper");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22\x3E            \x3C!\x2D\x2D filled dynamically \x2D\x2D\x3E        \x3C/div\x3E      \x3C/div\x3E      ");
if (context.switches.upload_media) { 
$h.put("        \x3Cdiv id\x3D\x22dsq\x2Dmedia\x2Dpreview");
$h.put(($h.esc || function (s) { return s; })(comment ? ('-' + comment.id) : ''));
$h.put("\x22 class\x3D\x22dsq\x2Dmedia\x2Dpreview\x22 style\x3D\x22display:none\x22\x3E        \x3C/div\x3E      ");
}
$h.put("      ");
if (forum.revert_new_login_flow && !request.is_authenticated) { 
$h.put("      \x3Cdiv class\x3D\x22dsq\x2Dpost\x2Dfields\x22\x3E        \x3Cform onsubmit\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.send\x27, ");
if (comment) { 
$h.put(($h.esc || function (s) { return s; })(comment.id));
} else {
$h.put("null");
}
$h.put(")\x3B\x22\x3E        \x3Ctable\x3E          \x3Ctr\x3E            \x3Ctd class\x3D\x22dsq\x2Dpost\x2Dfields\x2Dleft\x22\x3E              \x3Cdiv class\x3D\x22dsq\x2Dinput\x2Dwrapper\x22\x3E                \x3Cinput id\x3D\x22dsq\x2Dfield\x2Dname");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22                       type\x3D\x22text\x22 class\x3D\x22dsq\x2Dplaceholder\x22                       value\x3D\x22");
if (config.def_name) { 
$h.put(($h.esc || function (s) { return s; })(config.def_name));
} else if (session.name) {
$h.put(($h.esc || function (s) { return s; })(session.name));
} else {
$h.put(trans("Name"));
}
$h.put("\x22                       onfocus\x3D\x22DISQUS.dtpl.actions.fire(\x27placeholder.handle\x27, event, this, \x27name\x27)\x3B\x22                       onblur\x3D\x22DISQUS.dtpl.actions.fire(\x27placeholder.handle\x27, event, this, \x27name\x27)\x3B\x22/\x3E              \x3C/div\x3E            \x3C/td\x3E            \x3Ctd class\x3D\x22dsq\x2Dpost\x2Dfields\x2Dright\x22\x3E              \x3Cdiv class\x3D\x22dsq\x2Dinput\x2Dwrapper\x22\x3E                \x3Cinput id\x3D\x22dsq\x2Dfield\x2Dwebsite");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22                       type\x3D\x22text\x22 class\x3D\x22dsq\x2Dplaceholder\x22                       value\x3D\x22");
if (session.url) { 
$h.put(($h.esc || function (s) { return s; })(session.url));
} else {
$h.put(trans("Website"));
$h.put(" (");
$h.put(trans("Optional"));
$h.put(")");
}
$h.put("\x22                       onfocus\x3D\x22DISQUS.dtpl.actions.fire(\x27placeholder.handle\x27, event, this, \x27website\x27)\x3B\x22                       onblur\x3D\x22DISQUS.dtpl.actions.fire(\x27placeholder.handle\x27, event, this, \x27website\x27)\x3B\x22/\x3E              \x3C/div\x3E            \x3C/td\x3E          \x3C/tr\x3E          \x3Ctr\x3E            \x3Ctd class\x3D\x22dsq\x2Dpost\x2Dfields\x2Dleft\x22\x3E              \x3Cdiv class\x3D\x22dsq\x2Dinput\x2Dwrapper\x22\x3E                \x3Cinput id\x3D\x22dsq\x2Dfield\x2Demail");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22 type\x3D\x22text\x22 class\x3D\x22dsq\x2Dplaceholder\x22                       value\x3D\x22");
if (config.def_email) { 
$h.put(($h.esc || function (s) { return s; })(config.def_email));
} else if (session.email) {
$h.put(($h.esc || function (s) { return s; })(session.email));
} else {
$h.put(trans("Email"));
}
$h.put("\x22                       onfocus\x3D\x22DISQUS.dtpl.actions.fire(\x27placeholder.handle\x27, event, this, \x27email\x27)\x3B\x22                       onblur\x3D\x22DISQUS.dtpl.actions.fire(\x27placeholder.handle\x27, event, this, \x27email\x27)\x3B\x22/\x3E              \x3C/div\x3E            \x3C/td\x3E            \x3Ctd class\x3D\x22dsq\x2Dpost\x2Dfields\x2Dright\x22\x3E              \x3Cdiv class\x3D\x22dsq\x2Dsubscribe\x2Dmenu\x22\x3E                \x3Clabel class\x3D\x22dsq\x2Dsubscribe\x2Dlabel\x22\x3E                  \x3Cinput id\x3D\x22dsq\x2Dsubscribe\x2Don\x2Dpost");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22 type\x3D\x22checkbox\x22                         ");
if (request.subscribe_on_post) { 
$h.put("checked\x3D\x22true\x22");
}
$h.put("/\x3E                  ");
$h.put(trans("Subscribe to all comments by email"));
$h.put("                \x3C/label\x3E              \x3C/div\x3E            \x3C/td\x3E          \x3Ctr\x3E        \x3C/table\x3E        \x3C/form\x3E      \x3C/div\x3E      ");
}
$h.put("      \x3Cdiv class\x3D\x22dsq\x2Dpost\x2Dfooter\x22\x3E      ");
if (context.switches.upload_media && forum.use_media) { 
$h.put("        \x3Cdiv class\x3D\x22dsq\x2Dattach\x2Dmedia\x22\x3E            \x3Cdiv class\x3D\x22dsq\x2Dattach\x2Dmedia\x2Dcontainer\x22\x3E                \x3Cspan\x3E");
$h.put(trans("Image"));
$h.put("\x3C/span\x3E                \x3C!\x2D\x2D filled dynamically \x2D\x2D\x3E            \x3C/div\x3E        \x3C/div\x3E        ");
}
$h.put("        ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("postSharingOptions", $l));
}());
$h.put("        ");
if (forum.revert_new_login_flow || request.is_authenticated) { 
$h.put("          \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x22 id\x3D\x22dsq\x2Dpost\x2Dbutton");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22                  onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.send\x27, ");
if (comment) { 
$h.put(($h.esc || function (s) { return s; })(comment.id));
} else {
$h.put("null");
}
$h.put(", this)\x3B\x22\x3E            \x3Cspan\x3E                ");
if (forum.allow_anon_post || request.is_authenticated) { 
$h.put("                ");
$h.put(trans("Post as"));
$h.put("                ");
if (request.display_username) { 
$h.put(($h.esc || function (s) { return s; })(request.display_username));
} else {
$h.put(trans("Guest"));
}
$h.put("                ");
} else {
$h.put("                ");
$h.put(trans("Login and Post"));
$h.put("                ");
}
$h.put("            \x3C/span\x3E          \x3C/button\x3E        ");
} else {
$h.put("          \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x22 id\x3D\x22dsq\x2Dpost\x2Dbutton");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22                  onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.validate\x27, ");
if (comment) { 
$h.put(($h.esc || function (s) { return s; })(comment.id));
} else {
$h.put("null");
}
$h.put(")\x3B\x22\x3E            \x3Cspan\x3E              ");
$h.put(trans("Post as"));
$h.put(" \x26hellip\x3B            \x3C/span\x3E          \x3C/button\x3E        ");
}
$h.put("        ");
if (comment) { 
$h.put("        \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x22 id\x3D\x22dsq\x2Dcancel\x2Dbutton\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22                onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.reply\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(", this)\x3B\x22\x3E          \x3Cspan\x3E");
$h.put(trans("Cancel"));
$h.put("\x3C/span\x3E        \x3C/button\x3E        ");
}
$h.put("      \x3C/div\x3E      \x3Cdiv style\x3D\x22clear:both\x22\x3E\x3C/div\x3E    \x3C/div\x3E  \x3C/div\x3E");
}
return $h.compile();

}

};
$d.blocks["header"] = function block_header ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("maintenanceNotice", $l));
}());
$h.put("  ");
if (!integration.reply_position) { 
$h.put("    ");
if (context.show_reply) { 
$h.put("      ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("postbox", $l));
}());
$h.put("    ");
}
$h.put("  ");
}
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("permissionNotice", $l));
}());
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("commentCount", $l));
}());
$h.put("  \x3Cdiv class\x3D\x22dsq\x2Doptions\x22\x3E    ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("commentSort", $l));
}());
$h.put("    ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("subscribe", $l));
}());
$h.put("  \x3C/div\x3E  ");
if (!integration.reply_position) { 
$h.put("    ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("realtimeNotice", $l));
}());
$h.put("  ");
}
return $h.compile();

}

};
$d.blocks["comments"] = function block_comments ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("realtimeAlert", $l));
}());
$h.put("  \x3Cul id\x3D\x22dsq\x2Dcomments\x22\x3E    ");
$d.each(comments, function (comment, $index, $collection) {
var $locals = { "comment": comment, "index": $index };
$h.put("        ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("comment", $l));
}());
$h.put("    ");
});
$h.put("  \x3C/ul\x3E  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("realtimeAlert", $l));
}());
return $h.compile();

}

};
$d.blocks["realtimeAlert"] = function block_realtimeAlert ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if (context.realtime_enabled && !forum.streaming_realtime) { 
$h.put("  \x3Cdiv style\x3D\x22display:none\x3B\x22 class\x3D\x22dsq\x2Drealtime\x2Dalert\x22\x3E\x3C/div\x3E  ");
}
return $h.compile();

}

};
$d.blocks["commentMessage"] = function block_commentMessage ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cdiv class\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(cls));
$h.put("\x22 id\x3D\x22dsq\x2Dcomment\x2Dmessage\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E    ");
if (comment.killed) { 
$h.put("      \x3Cem\x3E");
$h.put(trans("Comment removed."));
$h.put("\x3C/em\x3E    ");
} else if (!comment.approved) {
$h.put("      \x3Cem\x3E");
$h.put(trans("This comment was flagged for review."));
$h.put("\x3C/em\x3E    ");
} else {
$h.put("      ");
$h.put("      \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dtext\x22 id\x3D\x22dsq\x2Dcomment\x2Dtext\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E        ");
$h.put(($h.esc || function (s) { return s; })(comment.message));
$h.put("      \x3C/div\x3E      ");
$h.put("      ");
if (forum.comment_max_words != 0) { 
$h.put("        \x3Ca href\x3D\x22#\x22 class\x3D\x22dsq\x2Dcomment\x2Dtruncate\x2Dexpand\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.text.expand\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22\x3E ");
$h.put(trans("show more"));
$h.put("\x3C/a\x3E        \x3Ca href\x3D\x22#\x22 class\x3D\x22dsq\x2Dcomment\x2Dtruncate\x2Dcollapse\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.text.collapse\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22\x3E ");
$h.put(trans("show less"));
$h.put("\x3C/a\x3E      ");
}
$h.put("      ");
if (comment.last_modified_by == 'moderator') { 
$h.put("        \x3Cp class\x3D\x22dsq\x2Deditedtxt\x22\x3E(");
$h.put(trans("Edited by a moderator"));
$h.put(")\x3C/p\x3E      ");
} else if (comment.last_modified_by == 'author' && comment.has_replies) {
$h.put("        \x3Cp class\x3D\x22dsq\x2Deditedtxt\x22\x3E(");
$h.put(trans("Edited by author"));
$h.put(" ");
$h.put(($h.esc || function (s) { return s; })(comment.last_modified_date));
$h.put(")\x3C/p\x3E      ");
}
$h.put("    ");
}
$h.put("  \x3C/div\x3E");
return $h.compile();

}

};
$d.blocks["collapsedComment"] = function block_collapsedComment ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Ca class\x3D\x22dsq\x2Dcomment\x2Dshow\x2Dthread\x22 href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.expand\x27, this, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22 title\x3D\x22");
$h.put(trans("Expand thread"));
$h.put("\x22\x3E\x3C/a\x3E  \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(comment.author.avatar));
$h.put("\x22 alt\x3D\x22\x22/\x3E  \x3Cspan\x3E      ");
if (comment.num_replies == 0) { 
$h.put("        1 ");
$h.put(trans("comment collapsed."));
$h.put("      ");
} else {
$h.put("        ");
$h.put(($h.esc || function (s) { return s; })(comment.num_replies + 1));
$h.put(" ");
$h.put(trans("comments collapsed."));
$h.put("      ");
}
$h.put("  \x3C/span\x3E  \x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27comments.expand\x27, this, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(")\x3B\x22 title\x3D\x22");
$h.put(trans("Expand thread"));
$h.put("\x22\x3E");
$h.put(trans("Expand"));
$h.put("\x3C/a\x3E");
return $h.compile();

}

};
$d.blocks["editArea"] = function block_editArea ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cdiv class\x3D\x22dsq\x2Dtextarea\x2Dwrapper\x22\x3E    \x3Ctextarea class\x3D\x22dsq\x2Dedit\x2Dtextarea\x22 id\x3D\x22dsq\x2Dedit\x2Dtextarea\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(comment.message));
$h.put("\x3C/textarea\x3E    \x3Cdiv id\x3D\x22dsq\x2Dedit\x2Diframe\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put("\x22 style\x3D\x22display:none\x22\x3E\x3C/div\x3E  \x3C/div\x3E  \x3Cdiv class\x3D\x22dsq\x2Dsave\x2Dedit\x22\x3E      \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x22        onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27comments.edit.send\x27, ");
$h.put(($h.esc || function (s) { return s; })(comment.id));
$h.put(", this)\x3B\x22\x3E");
$h.put(trans("Save edit"));
$h.put("\x3C/button\x3E  \x3C/div\x3E");
return $h.compile();

}

};
$d.blocks["reaction"] = function block_reaction ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("\x3Cli class\x3D\x22dsq\x2Dcomment dsq\x2Dreaction\x22 id\x3D\x22dsq\x2Dreaction\x2D");
$h.put(($h.esc || function (s) { return s; })(reaction.id));
$h.put("\x22\x3E  \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dheader\x22\x3E    \x3Ctable\x3E      \x3Ctr\x3E        \x3Ctd class\x3D\x22dsq\x2Dheader\x2Davatar\x22\x3E          ");
if (reaction.author_url) { 
$h.put("          \x3Ca target\x3D\x22_blank\x22 href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(reaction.author_url));
$h.put("\x22 class\x3D\x22dsq\x2Davatar\x22\x3E          ");
}
$h.put("          ");
if (reaction.avatar_url) { 
$h.put("          \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(reaction.avatar_url));
$h.put("\x22/\x3E          ");
} else {
$h.put("          \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.media_url));
$h.put("/images/noavatar92.png\x22/\x3E          ");
}
$h.put("          ");
if (reaction.author_url) { 
$h.put("          \x3C/a\x3E          ");
}
$h.put("        \x3C/td\x3E        \x3Ctd\x3E          \x3Ccite class\x3D\x22dsq\x2Dcomment\x2Dcite\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(reaction.author_name));
$h.put("\x3C/cite\x3E          \x3Cspan class\x3D\x22dsq\x2Dcomment\x2Dheader\x2Dtime\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(reaction.date_created));
$h.put("\x3C/span\x3E        \x3C/td\x3E        \x3Ctd class\x3D\x22dsq\x2Dcomment\x2Dheader\x2Dlikes\x22\x3E\x3C/td\x3E      \x3C/tr\x3E    \x3C/table\x3E  \x3C/div\x3E  \x3Cdiv class\x3D\x22dsq\x2Dreaction\x2Dheader\x22\x3E    \x3Ctable\x3E      \x3Ctr\x3E        \x3Ctd class\x3D\x22dsq\x2Dreaction\x2Dheader\x2Dleft\x22\x3E          \x3Cimg class\x3D\x22dsq\x2Dservice\x2Dicon\x22               src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(settings.media_url));
$h.put("/images/reactions/services/");
$h.put(($h.esc || function (s) { return s; })(reaction.service_icon));
$h.put(".png\x22/\x3E\x26nbsp\x3B          ");
$h.put(trans("From"));
$h.put("\x26nbsp\x3B          \x3Ca class\x3D\x22dsq\x2Dservice\x2Dname\x22 target\x3D\x22_blank\x22 href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(reaction.url));
$h.put("\x22\x3E            ");
$h.put(($h.esc || function (s) { return s; })(reaction.get_service_name));
$h.put("          \x3C/a\x3E        \x3C/td\x3E        \x3Ctd class\x3D\x22dsq\x2Dreaction\x2Dheader\x2Dright\x22\x3E          ");
if (reaction.retweets) { 
$h.put("            ");
if (reaction.retweets.length == 1) { 
$h.put("              ");
$h.put(trans("One more retweet from"));
$h.put("              \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(reaction.retweets[0].url));
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(reaction.retweets[0].author_name));
$h.put("\x3C/a\x3E            ");
} else if (reaction.retweets.length > 0) {
$h.put("              ");
$h.put(($h.esc || function (s) { return s; })(reaction.retweets.length));
$h.put(" ");
$h.put(trans("more retweets from"));
$h.put("              \x3Cspan class\x3D\x22dsq\x2Dreaction\x2Dretweets\x2D");
$h.put(($h.esc || function (s) { return s; })(reaction.id));
$h.put("\x22\x3E                ");
$d.each(reaction.retweets.slice(0, 3), function (retweet, $index, $collection) {
var $locals = { "retweet": retweet, "index": $index };
$h.put("                \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(retweet.url));
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(retweet.author_name));
$h.put("\x3C/a\x3E\x26nbsp\x3B                ");
});
$h.put("              \x3C/span\x3E              ");
if (reaction.retweets.length > 3) { 
$h.put("              \x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27reactions.showRetweets\x27, ");
$h.put(($h.esc || function (s) { return s; })(reaction.id));
$h.put(")\x3B\x22\x3E");
$h.put(($h.esc || function (s) { return s; })("Show all"));
$h.put("\x3C/a\x3E              ");
}
$h.put("            ");
}
$h.put("          ");
}
$h.put("        \x3C/td\x3E      \x3C/tr\x3E    \x3C/table\x3E  \x3C/div\x3E  \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dbody\x22\x3E    \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dmessage\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(reaction.body));
$h.put("\x3C/div\x3E  \x3C/div\x3E  \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dfooter\x22\x3E    \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dleft\x22\x3E\x3C/div\x3E    ");
if (request.is_moderator) { 
$h.put("    \x3Cdiv class\x3D\x22dsq\x2Dcomment\x2Dfooter\x2Dright\x22\x3E      \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall dsq\x2Dhide\x2Dreaction\x22              onclick\x3D\x22DISQUS.dtpl.actions.fire(\x27reactions.hide\x27, ");
$h.put(($h.esc || function (s) { return s; })(reaction.id));
$h.put(")\x3B\x22\x3E");
$h.put(trans("Hide"));
$h.put("      \x3C/button\x3E    \x3C/div\x3E    ");
}
$h.put("  \x3C/div\x3E\x3C/li\x3E");
return $h.compile();

}

};
$d.blocks["pagination"] = function block_pagination ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if ((thread.num_pages > 1) && (request.page <= thread.num_pages)) { 
$h.put("    ");
if (thread.pagination_type == 'num') { 
$h.put("      ");
if (request.page > 1) { 
$h.put("        \x3Cspan\x3E\x26larr\x3B\x3C/span\x3E\x26nbsp\x3B\x3Ca class\x3D\x22dsq\x2Dpaginate\x2Darrows\x22 id\x3D\x22dsq\x2Dpaginate\x2Dprevious\x22 href\x3D\x22#dsq\x2Dcomments\x22           onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, ");
$h.put(($h.esc || function (s) { return s; })((request.page - 1)));
$h.put(")\x3B\x22           title\x3D\x22");
$h.put(trans("Previous"));
$h.put("\x22\x3E");
$h.put(trans("Previous"));
$h.put("\x3C/a\x3E      ");
}
$h.put("      ");
if ((request.page != 1) && !lang.contains(thread.page_numbers, 1)) { 
$h.put("        \x3Ca href\x3D\x22#dsq\x2Dcomments\x22 class\x3D\x22dsq\x2Dpaginate\x2Dfirst\x22           onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, 1)\x3B\x22\x3E1\x3C/a\x3E        \x26hellip\x3B      ");
}
$h.put("      ");
$d.each(thread.page_numbers, function (number, $index, $collection) {
var $locals = { "number": number, "index": $index };
$h.put("        ");
if (request.page == number) { 
$h.put("        \x3Cspan class\x3D\x22dsq\x2Dpaginate\x2Dselected ");
if (number == 1) { 
$h.put("dsq\x2Dpaginate\x2Dfirst");
}
$h.put("\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(number));
$h.put("\x3C/span\x3E        ");
} else {
$h.put("        \x3Ca href\x3D\x22#dsq\x2Dcomments\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, ");
$h.put(($h.esc || function (s) { return s; })(number));
$h.put(")\x3B\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(number));
$h.put("\x3C/a\x3E        ");
}
$h.put("      ");
});
$h.put("      ");
if ((request.page != thread.num_pages) && !lang.contains(thread.page_numbers, thread.num_pages)) { 
$h.put("        \x26hellip\x3B        ");
$h.put("\x3Ca href\x3D\x22#dsq\x2Dcomments\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27,");
$h.put(($h.esc || function (s) { return s; })(thread.num_pages));
$h.put(")\x3B\x22\x3E");
$h.put(($h.esc || function (s) { return s; })(thread.num_pages));
$h.put("\x3C/a\x3E");
$h.put("      ");
}
$h.put("      ");
if (request.page < thread.num_pages) { 
$h.put("        \x3Ca class\x3D\x22dsq\x2Dpaginate\x2Darrows\x22 id\x3D\x22dsq\x2Dpaginate\x2Dnext\x22 href\x3D\x22#dsq\x2Dcomments\x22           onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, ");
$h.put(($h.esc || function (s) { return s; })((request.page + 1)));
$h.put(")\x3B\x22 title\x3D\x22");
$h.put(trans("Next"));
$h.put("\x22\x3E          ");
$h.put(trans("Next"));
$h.put("\x3C/a\x3E\x26nbsp\x3B\x3Cspan\x3E\x26rarr\x3B\x3C/span\x3E        \x3C/a\x3E      ");
}
$h.put("    ");
} else if (thread.pagination_type == 'append') {
$h.put("      ");
if (request.page < thread.num_pages) { 
$h.put("      \x3Ca class\x3D\x22dsq\x2Dpaginate\x2Dappend\x2Dtext\x22 href\x3D\x22#\x22         onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, ");
$h.put(($h.esc || function (s) { return s; })(request.page + 1));
$h.put(", this)\x3B\x22\x3E        ");
$h.put(trans("Show more comments"));
$h.put(" \x26hellip\x3B      \x3C/a\x3E      \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall dsq\x2Dpaginate\x2Dappend\x2Dbutton\x22              onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, ");
$h.put(($h.esc || function (s) { return s; })(request.page + 1));
$h.put(", this)\x3B\x22\x3E        ");
$h.put(trans("Load more comments"));
$h.put("      \x3C/button\x3E      \x3Cbutton type\x3D\x22button\x22 class\x3D\x22dsq\x2Dbutton\x2Dsmall dsq\x2Dpaginate\x2Dall\x2Dbutton\x22              onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27thread.paginate\x27, 1, this, 0)\x3B\x22\x3E        ");
$h.put(trans("Show all comments"));
$h.put("      \x3C/button\x3E      ");
}
$h.put("    ");
}
$h.put("  ");
}
return $h.compile();

}

};
$d.blocks["permissionNotice"] = function block_permissionNotice ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
if (request.missing_perm && request.missing_perm.match(/locked|blacklist|verify/)) { 
$h.put("  \x3Cdiv class\x3D\x22dsq\x2Dmissing\x2Dpermissions\x22\x3E    ");
if (request.missing_perm == 'locked') { 
$h.put("      \x3Cp\x3E");
$h.put(trans("Comments for this page are closed."));
$h.put("\x3C/p\x3E    ");
} else if (request.missing_perm == 'blacklist') {
$h.put("      \x3Cp\x3E");
$h.put(trans("The site has blocked you from posting new comments."));
$h.put("\x3C/p\x3E    ");
} else if (request.missing_perm == 'verify') {
$h.put("      \x3Cp\x3E");
$h.put(trans("You must verify your Disqus Profile email address before your comments are approved."));
$h.put("      \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(urls.verify_email));
$h.put("\x22 target\x3D\x22_blank\x22\x3E");
$h.put(trans("Click here to verify"));
$h.put("\x3C/a\x3E\x3C/p\x3E    ");
}
$h.put("  \x3C/div\x3E  ");
}
return $h.compile();

}

};
$d.blocks["thread"] = function block_thread ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("globalToolbar", $l));
}());
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("header", $l));
}());
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("comments", $l));
}());
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("footer", $l));
}());
return $h.compile();

}

};
$d.blocks["footer"] = function block_footer ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cdiv id\x3D\x22dsq\x2Dpagination\x22 class\x3D\x22dsq\x2Dpagination\x22\x3E    ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("pagination", $l));
}());
$h.put("  \x3C/div\x3E  ");
if (integration.reply_position) { 
$h.put("    ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("realtimeNotice", $l));
}());
$h.put("    ");
if (context.show_reply) { 
$h.put("      ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("postbox", $l));
}());
$h.put("    ");
}
$h.put("  ");
}
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("reactions", $l));
}());
$h.put("  ");
(function () {
var $l = {};
$d.extend($l, $locals);
$d.extend($l, {});
$h.put($d.renderBlock("trackbacks", $l));
}());
return $h.compile();

}

};
$d.blocks["cookieFailure"] = function block_cookieFailure ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("\x3Cp class\x3D\x22dsq\x2Dalert\x2Dmessage dsq\x2Derror\x22\x3E  \x3Cstrong\x3E");
$h.put(trans("Warning"));
$h.put(":\x3C/strong\x3E ");
$h.put(trans("A browser setting is preventing you from logging in."));
$h.put("  ");
$h.put("\x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27help.login\x27)\x3B\x22\x3E");
$h.put(trans("Fix this setting to log in"));
$h.put("\x3C/a\x3E");
$h.put("\x3C/p\x3E");
return $h.compile();

}

};
$d.blocks["commentSort"] = function block_commentSort ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("  \x3Cspan class\x3D\x22dsq\x2Ditem\x2Dsort\x22\x3E    ");
$h.put(trans("Sort by"));
$h.put("    \x3Cselect id\x3D\x22dsq\x2Dsort\x2Dselect\x22 onchange\x3D\x22DISQUS.dtpl.actions.fire(\x27thread.sort\x27, this.value)\x3B\x22\x3E      ");
$d.each(sorting, function (option, $index, $collection) {
var $locals = { "option": option, "index": $index };
$h.put("      \x3Coption value\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(option.value));
$h.put("\x22 ");
if (option.selected) { 
$h.put("selected\x3D\x22selected\x22");
}
$h.put("\x3E");
$h.put(($h.esc || function (s) { return s; })(option.label));
$h.put("\x3C/option\x3E      ");
});
$h.put("    \x3C/select\x3E  \x3C/span\x3E");
return $h.compile();

}

};
$d.blocks["postbox_request_user_info"] = function block_postbox_request_user_info ($globals, $locals) {

    var $h = new $d.Builder();

    var localScope = DISQUS.extend({}, $globals, $locals);
    with (localScope) {

$h.put("\x3Cdiv class\x3D\x22dsq\x2Drequest\x2Duser\x2Dinfo\x22\x3E \x3C!\x2D\x2D If authenticated \x2D\x2D\x3E  ");
if (request.is_sso && config.sso && config.sso.logout) { 
$h.put("    \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(config.sso.logout));
$h.put("\x22 class\x3D\x22dsq\x2Drequest\x2Duser\x2Dlogout\x22\x3E      ");
$h.put(trans("Logout"));
$h.put("    \x3C/a\x3E  ");
} else {
$h.put("    \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(urls.logout));
$h.put("?ctkn\x3D");
$h.put(($h.esc || function (s) { return s; })(context.csrf_token));
$h.put("\x22       class\x3D\x22dsq\x2Drequest\x2Duser\x2Dlogout\x22\x3E");
$h.put(trans("Logout"));
$h.put("\x3C/a\x3E  ");
}
$h.put("  \x3Ctable\x3E    \x3Ctr\x3E      \x3Ctd rowspan\x3D\x222\x22 class\x3D\x22dsq\x2Dheader\x2Davatar\x22\x3E        ");
if (!forum.disqus_auth_disabled) { 
$h.put("        \x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(urls.request_user_profile));
$h.put("\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27profile.show\x27, null, \x27");
$h.put(($h.esc || function (s) { return s; })(request.userkey));
$h.put("\x27)\x3B return false\x22\x3E        ");
}
$h.put("          \x3Cimg src\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(urls.request_user_avatar));
$h.put("\x22 width\x3D\x2248\x22 height\x3D\x2248\x22               class\x3D\x22dsq\x2Drequest\x2Duser\x2Davatar\x22/\x3E        ");
if (!forum.disqus_auth_disabled) { 
$h.put("        \x3C/a\x3E        ");
}
$h.put("      \x3C/td\x3E      \x3Ctd class\x3D\x22dsq\x2Drequest\x2Duser\x2Dname\x22\x3E        ");
if (!forum.disqus_auth_disabled) { 
$h.put("\x3Ca href\x3D\x22");
$h.put(($h.esc || function (s) { return s; })(urls.request_user_profile));
$h.put("\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27profile.show\x27, null, \x27");
$h.put(($h.esc || function (s) { return s; })(request.userkey));
$h.put("\x27)\x3B return false\x22\x3E");
}
$h.put(($h.esc || function (s) { return s; })(request.display_username));
if (!forum.disqus_auth_disabled) { 
$h.put("\x3C/a\x3E");
}
$h.put("        ");
if (request.is_remote && request.email) { 
$h.put("        \x3Csmall\x3E          (\x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27user.remoteAccountSettings\x27)\x3B\x22\x3E");
$h.put(trans("change settings"));
$h.put("\x3C/a\x3E)        \x3C/small\x3E        ");
}
$h.put("        ");
if (!request.is_remote && !forum.disqus_auth_disabled) { 
$h.put("        \x3Csmall\x3E(\x3Ca href\x3D\x22#\x22 onclick\x3D\x22return DISQUS.dtpl.actions.fire(\x27profile.edit\x27)\x3B return false\x22\x3E");
$h.put(trans("edit profile"));
$h.put("\x3C/a\x3E)        \x3C/small\x3E        ");
}
$h.put("      \x3C/td\x3E    \x3C/tr\x3E    \x3Ctr\x3E      \x3Ctd class\x3D\x22dsq\x2Drequest\x2Duser\x2Dstats\x22\x3E        \x3Cspan class\x3D\x22dsq\x2Drequest\x2Duser\x2Dstat dsq\x2Drequest\x2Duser\x2Dstat\x2Dcomments\x22\x3E          \x3Cbig\x3E");
$h.put(($h.esc || function (s) { return s; })(request.comments_count));
$h.put("\x3C/big\x3E          \x3Cspan id\x3D\x22dsq\x2Drequest\x2Duser\x2Dstats\x2Dcomments");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22\x3E            ");
if (request.comments_count == 1) { 
$h.put(trans("comment"));
} else {
$h.put(trans("comments"));
}
$h.put("          \x3C/span\x3E        \x3C/span\x3E        \x3Cspan class\x3D\x22dsq\x2Drequest\x2Duser\x2Dstat dsq\x2Drequest\x2Duser\x2Dstat\x2Dpoints\x22\x3E          \x3Cbig\x3E");
$h.put(($h.esc || function (s) { return s; })(request.points));
$h.put("\x3C/big\x3E          \x3Cspan id\x3D\x22dsq\x2Drequest\x2Duser\x2Dstats\x2Dpoints");
if (comment) { 
$h.put("\x2D");
$h.put(($h.esc || function (s) { return s; })(comment.id));
}
$h.put("\x22\x3E            ");
if (request.points == 1) { 
$h.put(trans("like"));
} else {
$h.put(trans("likes"));
}
$h.put("            ");
$h.put(trans("received"));
$h.put("          \x3C/span\x3E        \x3C/span\x3E      \x3C/td\x3E    \x3C/tr\x3E  \x3C/table\x3E\x3C/div\x3E");
return $h.compile();

}

};
    });

(function (window, undefined) {
var document = window.document, DISQUS = window.DISQUS;

// CAUTION!
// If you modify this function, bear in mind that
// it is used by both Custom and Next so be careful!
DISQUS.registerActions = function () {
    /**
 * Actions for the Narcissus theme
 */

var add = DISQUS.dtpl.actions.register;
var fire = DISQUS.dtpl.actions.fire;
var likeTooltip = null;
var shareJobs = [];

function eachChildComment(id, callback) {
    var container = DISQUS.nodes.get('#dsq-comments');
    var comments = DISQUS.nodes.get('li.dsq-comment', container);

    // Find *all* comment elements on the page. Locate the triggered
    // comment, and its location (index) in the result set.
    var start = -1;
    var root;
    var i;
    for (i = 0; i < comments.length; i++) {
        if (comments[i].id == 'dsq-comment-' + id) {
            root = comments[i];
            start = i + 1;
            break;
        }
    }
    if (start == -1) {
        return; // should never happen
    }

    // Helper method returns the depth of a comment element.
    function getdepth(node) {
        var match = node.className.match(/dsq-depth-[0-9]+/);
        if (!match) {
            return 0;
        }
        return Number(match[0].replace(/dsq-depth-/, ''));
    }

    var rootDepth = getdepth(root);

    var node;
    for (i = start; i < comments.length; i++) {
        node = comments[i];

        if (getdepth(node) <= rootDepth) {
            break;
        }
        callback(node);
    }
}

add('comments.like.onSuccess', function (id, points, vote) {
    var successText = '';
    var userVoteIsDisplayed = DISQUS.jsonData.posts[id].user_voted;
    if (userVoteIsDisplayed) {
        // If their avatar pic is revealed
        successText = ' and ' + (points - 1 || 1) + ' more';
    } else {
        successText = points + DISQUS.strings.pluralize(points, ' person', ' people');
    }

    var element = DISQUS.nodes.get('#dsq-like-pts-' + id);
    if (element) {
        element.innerHTML = successText;
    }

    var container = DISQUS.nodes.get('#dsq-like-' + id);

    // Remove the spinner
    var loader = DISQUS.nodes.get('img', container)[0];
    container.removeChild(loader);

    // Bring back the button!
    var button = DISQUS.nodes.get('button', container)[0];
    if (vote) {
        DISQUS.nodes.addClass(button, 'dsq-disabled-btn');
        button.innerHTML = DISQUS.strings.get('Liked');
    } else {
        DISQUS.nodes.removeClass(button, 'dsq-disabled-btn');
        button.innerHTML = DISQUS.strings.get('Like');
    }

    button.style.display = 'inline';
});

add('comments.collapse', function(src, id) {
    var root = DISQUS.nodes.get('#dsq-comment-' + id);
    DISQUS.nodes.addClass(root, 'dsq-comment-is-collapsed');

    var collapsedComment = DISQUS.nodes.get('#dsq-collapsed-comment-' + id);
    collapsedComment.innerHTML = DISQUS.renderBlock('collapsedComment', {
        comment: DISQUS.jsonData.posts[id]
    });

    eachChildComment(id, function(node) {
        // Only hide child comments that aren't already hidden by another child
        if (!node.getAttribute('data-dsq-collapsed-parent-id')) {
            node.style.display = 'none';
            node.setAttribute('data-dsq-collapsed-parent-id', id);
        }
    });
});

add('comments.expand', function(src, id) {
    var root = DISQUS.nodes.get('#dsq-comment-' + id);
    DISQUS.nodes.removeClass(root, 'dsq-comment-is-collapsed');

    eachChildComment(id, function(node) {
        // Only reveal child comments that were directly hidden by this comment
        if (node.getAttribute('data-dsq-collapsed-parent-id') == id) {
            node.style.display = 'block';
            node.removeAttribute('data-dsq-collapsed-parent-id');
        }
    });
});

var highlightHandler; // comments.highlight/unhighlight handler

add('comments.highlight.onSuccess', function (post) {
    var json = DISQUS.jsonData,
        star = DISQUS.nodes.get('#dsq-highlight-' + post.id);

    // This is a huge hack for the new CNN theme. If dsq-highlight-<id> is not
    // an image, we assume that the site is CNN. Otherwise, treat it as a
    // Narcissus template.
    //
    // No way around this until we allow people to customize JavaScript.

    if (star.src)
        star.src = json.settings.media_url + '/images/v3/icon/16/44.png';
    else
        star.innerHTML = 'Featured';

    // Remove all current handlers
    star.onclick = null;
    if (highlightHandler)
        DISQUS.events.remove(star, 'click', highlightHandler);

    highlightHandler = DISQUS.events.add(star, 'click', function () {
        DISQUS.dtpl.actions.fire('comments.unhighlight', post.id);
    });
});

add('comments.unhighlight.onSuccess', function (post) {
    var json = DISQUS.jsonData,
        star = DISQUS.nodes.get('#dsq-highlight-' + post.id);

    // This is a huge hack for the new CNN theme. If dsq-highlight-<id> is not
    // an image, we assume that the site is CNN. Otherwise, treat it as a
    // Narcissus template.
    //
    // No way around this until we allow people to customize JavaScript.

    if (star.src)
        star.src = json.settings.media_url + '/images/v3/icon/16/44-grey.png';
    else
        star.innerHTML = 'Mark as Featured';

    // Remove all current handlers
    star.onclick = null;
    if (highlightHandler)
        DISQUS.events.remove(star, 'click', highlightHandler);

    highlightHandler = DISQUS.events.add(star, 'click', function () {
        DISQUS.dtpl.actions.fire('comments.highlight', post.id);
    });
});

add('comments.showParent', function (id) {
    var author = DISQUS.nodes.get('#dsq-author-user-' + id).innerHTML;
    var post = DISQUS.nodes.get('#dsq-comment-message-' + id).innerHTML;

    post += '<br/><br/><a href="#comment-' + id + '">' +
            DISQUS.strings.get('Jump to comment') + '</a>';
    DISQUS.popup.popModal(post, author + ' ' + DISQUS.strings.get('said') + '...', id);
});

add('thread.initialize', function () {

    // IE6 global toolbar fallback
    var menu = DISQUS.nodes.get('#dsq-dropdown-menu');
    if (DISQUS.browser.ie6 && menu) {
        // .dsq-dropdown-menu only exists when login buttons disabled (new flow)
        var container = DISQUS.nodes.get('#dsq-logo-dropdown');
        var arrow = DISQUS.nodes.get('a.dsq-dropdown-arrow', container)[0];

        DISQUS.events.add(arrow, 'click', function() {
            DISQUS.nodes.toggleClass(arrow, 'dsq-visible');
            DISQUS.nodes.toggleClass(menu, 'dsq-visible');
        });

        DISQUS.events.add(menu, 'click', function(e) {
            var target = e.target || e.srcElement;
            if (DISQUS.nodes.closest(target, '.dsq-login-button')) {
                // Clicking a login button closes the toolbar
                DISQUS.nodes.toggleClass(arrow, 'dsq-visible');
                DISQUS.nodes.toggleClass(menu, 'dsq-visible');
            }
        });
    }

    return true;
});

add('thread.onSubscribe', function (status) {
    var title;
    var message;

    if (parseInt(status, 10)) {
        title = DISQUS.strings.get('Subscribed!');
        message = DISQUS.strings.get('You have subscribed to this comment thread. New comments will be sent directly to your email inbox, where you may read and respond by email.');

        DISQUS.nodes.get('#dsq-subscribe').innerHTML =
            '<a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.unsubscribe\');">' +
                DISQUS.strings.get('Unsubscribe') +
            '</a>';
    } else {
        title = DISQUS.strings.get('Unsubscribed!');
        message = DISQUS.strings.get('You have unsubscribed from this comment thread. New comments will no longer be sent to your email inbox.');

        DISQUS.nodes.get('#dsq-subscribe').innerHTML =
            '<a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.subscribe\');">' +
                DISQUS.strings.get('Subscribe by email') +
            '</a>';
    }

    DISQUS.popup.popModal(message, title);
});

add('thread.updateSharingLabel', function (element, id) {
    // This appears to be a Telegraph-only event. Should we remove?
    var label = element.id.replace('-' + id, '');
    label += '-label' + (id ? '-' + id : '');
    DISQUS.nodes.get('#' + label).checked = element.checked ? 'true' : '';
});

add('shareon.focus', function (id) {
    var element = '#dsq-post-button';
    if (id) {
        element += '-' + id;
    }

    DISQUS.nodes.get(element).focus();
});

add('placeholder.handle', function (event, element, key) {
    var placeholder = {
        name: DISQUS.strings.get('Name'),
        email: DISQUS.strings.get('Email'),
        website: DISQUS.strings.get('Website') +
            ' (' + DISQUS.strings.get('Optional') + ')'
    }[key];

    if (event.type == 'focus') {
        if (element.value == placeholder) {
            element.value = '';
            element.className = '';
        }
    } else if (event.type == 'blur') {
        if (/^\s*$/.test(element.value)) {
            element.value = placeholder;
            element.className = 'dsq-placeholder';
        }
    }
});

add('help.login', function () {
    DISQUS.popup.popModal(
        DISQUS.renderBlock('helpLogin'),
        DISQUS.strings.get('Help: Enabling cookies')
    );
});

add('thread.fixIframesIE', function (id) {
    var thread = DISQUS.nodes.get('#' + DISQUS.config.container_id);
    var iframes = thread.getElementsByTagName('iframe');

    var container = DISQUS.nodes.get('#dsq-content');
    if (id) {
        container = DISQUS.nodes.get('#' + id);
    }

    if (container) {
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].style.width = container.offsetWidth;
        }
    }
});

add('comments.reply.onResize', function(postId, height) {
    // grab a handle to the reply iframe and then resize
    var id = 'dsq-textarea-wrapper' + (postId ? ('-' + postId) : '');

    // unset style so that textarea-wrapper can wrap
    // around the iframe
    var textarea = document.getElementById(id);
    if (textarea.style.height !== 'auto') {
        textarea.style.height = 'auto';
    }

    var frame = document.getElementById(id).getElementsByTagName('iframe')[0];
    frame.style.height = parseInt(height, 10) + 'px';
    if (DISQUS.browser.ie && frame.style.width !== '100%') {
        frame.style.width = '100%';
    }

});

add('comments.reply.new.onLoadingStart', function(id) {
    var wrapper = DISQUS.nodes.get('#dsq-textarea-wrapper' + (id ? '-' + id : ''));
    DISQUS.nodes.addClass(wrapper, 'dsq-textarea-loading ');
    var iframe = DISQUS.nodes.get('iframe', wrapper)[0];
    if (iframe) {
        iframe.style.position = 'absolute';
        iframe.style.top = '-2000px';
    }
});

add('comments.reply.new.onLoadingEnd', function(id) {
    var wrapper = DISQUS.nodes.get('#dsq-textarea-wrapper' + (id ? '-' + id : ''));
    DISQUS.nodes.removeClass(wrapper, 'dsq-textarea-loading');
    var iframe = DISQUS.nodes.get('iframe', wrapper)[0];
    if (iframe) {
        iframe.style.position = 'relative';
        iframe.style.top = '0px';
    }
});

/* Upload Media Code */
add('comments.reply.media.upload.onLoadingStart', function(id) {
    var wrapper = DISQUS.nodes.get('#dsq-reply' + (id ? ('-' + id) : ''));
    var button = DISQUS.nodes.get('.dsq-button', wrapper)[0];

    // called right before the image is uploaded
    fire('private.setLoadingButton', button);
});

add('comments.reply.media.upload.onLoadingEnd', function(id) {
    fire('private.setLoadingButton');
});

add('comments.reply.media.upload.onSuccess', function(data, id) {

    // create image preview
    var wrapper = document.createElement('div');
    var close = document.createElement('a');
    var thumb = document.createElement('a');
    id = id || '';

    wrapper.className = 'dsq-media-wrapper';
    wrapper.appendChild(close);
    wrapper.appendChild(thumb);

    // massage the data object
    var media = data;
    data = {
        forum_id: DISQUS.jsonData.forum.id,
        thread_id: DISQUS.jsonData.thread.id,
        id: id,
        media: media
    };

    // create close button and bind close event
    close.href = '#';
    close.className = 'dsq-media-image-close';
    DISQUS.events.add(close, 'click', function(event) {
        DISQUS.dtpl.actions.fire('comments.reply.media.remove', data, id);
        event.preventDefault();
    });

    // create the thumbnail and bind popup
    thumb.href = '#';
    thumb.innerHTML = '<img class="dsq-media-image" src="' + media.thumbnailURL + '" />';
    DISQUS.events.add(thumb, 'click', function(event) {
        DISQUS.popup.popModal(
            DISQUS.renderBlock('mediaEmbedPopup', { media: media }),
            DISQUS.strings.get('Attached file'),
            null, true, 'dsq-media-embed');
        event.preventDefault();
    });

    // add hover events to close image
    DISQUS.events.add(thumb, 'mouseover', function(event) {
        event.preventDefault();
        DISQUS.nodes.show(close);
    });
    DISQUS.events.add(thumb, 'mouseout', function(event) {
        event.preventDefault();
        DISQUS.nodes.hide(close);
    });
    DISQUS.events.add(close, 'mouseover', function(event) {
        event.preventDefault();
        DISQUS.nodes.show(close);
    });
    DISQUS.events.add(close, 'mouseout', function(event) {
        event.preventDefault();
        DISQUS.nodes.hide(close);
    });

    // initially hide the close button
    DISQUS.nodes.hide(close);

    // get preview pane, and insert into DOM
    var preview = DISQUS.nodes.get('#dsq-media-preview' + (id ? ('-' + id) : ''));
    preview.appendChild(wrapper);
    DISQUS.nodes.show(preview);

});

add('comments.reply.media.remove.onSuccess', function(data) {

    // fired immediately after we the removal response from the server
    var preview = DISQUS.nodes.get('#dsq-media-preview' + (data.id ? ('-' + data.id) : ''));
    var regex;
    if (data && data.media && data.media.thumbnail) {
        regex = new RegExp(data.media.thumbnail, 'i');
    }

    // sanity check
    if (!regex || !preview) {
        return;
    }

    // remove matching images from preview pane
    DISQUS.each(DISQUS.nodes.get('img', preview), function(elem) {
        if (regex.test(elem.src)) {
            elem = DISQUS.nodes.closest(elem, '.dsq-media-wrapper');
            elem.parentNode.removeChild(elem);
            return;
        }
    });

    // if there are no more images, hide the preview pane
    if (!DISQUS.nodes.get('.dsq-media-wrapper').length) {
        DISQUS.nodes.hide(preview);
    }

});

add('comments.reply.media.upload.clear', function(id) {
    var elem = DISQUS.nodes.get('#dsq-media-preview' + (id ? ('-' + id) : ''));
    if (elem) {
        elem.innerHTML = '';
    }
});


};

/*
 * Alias for registerActions
 * because this function is used in Next
 * to load a bunch of Javascript files that
 * contain DISQUS.define's
 */
DISQUS.runThemeScript = DISQUS.registerActions;

}(this));
