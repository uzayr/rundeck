__twttrll([6],{169:function(e,t,i){function n(e){e.selectors({shareMenuOpener:".js-showShareMenu",shareMenu:".timeline-ShareMenu",shareMenuTimelineHeader:".timeline-Header",shareMenuTimelineFooter:".timeline-Footer"}),e.define("getHeaderHeight",function(){var e=this.selectOne("shareMenuTimelineHeader");return e?e.getBoundingClientRect().height:0}),e.define("getFooterHeight",function(){var e=this.selectOne("shareMenuTimelineFooter");return e?e.getBoundingClientRect().height:0}),e.define("getShareMenuPositionClass",function(e){var t=e.getBoundingClientRect(),i=t.top-this.getHeaderHeight(),n=this.sandbox.height-t.bottom-this.getFooterHeight();return n<i?d:l}),e.after("render",function(){this.on("click","shareMenuOpener",function(e,t){function i(){r.remove(l,n),d.el.removeEventListener("click",i,!1),o.removeEventListener("click",i,!1)}var n,d=this,l=s.closest(this.selectors.shareMenu,e.target,this.el);e.preventDefault(),l&&(n=this.getShareMenuPositionClass(t),r.add(l,n),a.async(function(){d.el.addEventListener("click",i,!1),o.addEventListener("click",i,!1)}))})})}var r=i(20),s=i(21),o=i(9),a=i(11),d="is-openedAbove",l="is-openedBelow";e.exports=n},198:function(e,t,i){var n=i(91);e.exports=n.build([i(199),i(203),i(156),i(157),i(107),i(204),i(103),i(207),i(208),i(146),i(147),i(142),i(145),i(211),i(212),i(213),i(215),i(217),i(169),i(155),i(220),i(222),i(148),i(149),i(159),i(224),i(170)],{pageForAudienceImpression:"timeline",productName:"embeddedtimeline",breakpoints:[330,430,550,660,820,970]})},199:function(e,t,i){function n(e){e.params({dataSource:{required:!0},lang:{required:!0,transform:p.matchLanguage,fallback:"en"},useLegacyDefaults:{required:!0,fallback:!1},width:{validate:m,transform:m},height:{validate:m,transform:m},theme:{fallback:[h(a.val,a,"widgets:theme")],validate:g},tweetLimit:{transform:l.asInt},partner:{fallback:h(a.val,a,"partner")},staticContent:{required:!1,transform:l.asBoolean}}),e.selectors({header:".timeline-Header",footer:".timeline-Footer",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet"}),e.around("scribeNamespace",function(e){return c.aug(e(),{page:"timeline"})}),e.around("scribeData",function(e){var t=this.params.dataSource.id;return c.aug(e(),{widget_id:l.isNumber(t)?t:void 0,widget_data_source:t,message:this.params.partner,query:this.el&&this.el.getAttribute("data-search-query"),profile_id:this.el&&this.el.getAttribute("data-profile-id")})}),e.around("widgetDataAttributes",function(e){return c.aug({"widget-id":this.params.dataSource.id,"user-id":this.el&&this.el.getAttribute("data-profile-id"),"search-query":this.el&&this.el.getAttribute("data-search-query")},e())}),e.define("updateViewportHeight",function(){var e,t=this.sandbox,i=this.selectOne("header"),n=this.selectOne("footer"),r=this.selectOne("viewport");return o.read(function(){e=t.height-2*S,e-=i?i.offsetHeight:0,e-=n?n.offsetHeight:0}),o.write(function(){r.style.height=e+"px"})}),e.define("adjustWidgetSize",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():this.updateViewportHeight()}),e.define("reconfigureWithServerSideParams",function(e){e=e||{},this.params.linkColor=this.params.linkColor||e.linkColor,this.params.theme=this.params.theme||e.theme||"light",this.params.height=m(this.params.height||e.height),this.isFullyExpanded=this.isStaticTimeline||!this.params.useLegacyDefaults&&!this.params.height,this.isFullyExpanded||this.params.height||(this.params.height=y)}),e.define("scribeImpressionsForInitialTweetSet",function(e){var t=f(this.select("tweetsInStream")),i=Object.keys(t),n=i.length?"results":"no_results",r=this.el.getAttribute("data-collection-id");r&&(i.push(r),t[r]={item_type:b.CUSTOM_TIMELINE}),this.scribe({component:"timeline",element:"initial",action:n},{widget_in_viewport:e,item_ids:i,item_details:t})}),e.override("initialize",function(){this.params.width||(this.params.width=this.params.useLegacyDefaults?I:T),this.isStaticTimeline=this.params.staticContent||this.params.tweetLimit>0}),e.override("hydrate",function(){var e=this;return this.params.dataSource.fetch().then(function(t){e.html=t.html,e.reconfigureWithServerSideParams(t.config),v(e,t,w.INITIAL)})}),e.override("render",function(){var e,t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.lang=this.params.lang,this.isFullyExpanded&&this.sandbox.addRootClass("var-fully-expanded"),this.isStaticTimeline&&this.sandbox.addRootClass("var-static"),e=s.timeline(this.params.lang,this.params.theme),r.all([this.sandbox.appendStyleSheet(e),this.sandbox.styleSelf({display:"inline-block",maxWidth:T,width:this.params.width,minWidth:C,marginTop:0,marginBottom:0})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):r.reject(new Error("unable to render"))}),e.override("show",function(){var e=this.sandbox,t=this;return this.sandbox.makeVisible().then(function(){return e.styleSelf({minHeight:t.isStaticTimeline?void 0:x,height:t.params.height})}).then(function(){return t.adjustWidgetSize()}).then(function(){return o.read(function(){var i=d(e.sandboxEl);t.scribeImpressionsForInitialTweetSet(i)})})}),e.last("resize",function(){return this.adjustWidgetSize()})}var r=i(2),s=i(96),o=i(46),a=i(37),d=i(141),l=i(25),c=i(11),u=i(91),h=i(13),f=i(108),m=i(140),p=i(97),g=i(200),v=i(201),b=i(109),w=i(202),C="180px",T="100%",x="200px",I="520px",y="600px",S=1;e.exports=u.couple(i(105),i(121),n)},200:function(e,t){function i(e){return n.test(e)}var n=/^(dark|light)$/;e.exports=i},201:function(e,t,i){function n(e,t,i){switch(e.cursors=e.cursors||{},e.pollInterval=t.pollInterval,i){case r.INITIAL:e.cursors.min=t.minCursorPosition,e.cursors.max=t.maxCursorPosition;break;case r.NEWER:e.cursors.max=t.maxCursorPosition||e.cursors.max;break;case r.OLDER:e.cursors.min=t.minCursorPosition||e.cursors.min}}var r=i(202);e.exports=n},202:function(e,t){e.exports={INITIAL:1,NEWER:2,OLDER:3}},203:function(e,t,i){function n(e){e.params({chrome:{transform:s,fallback:""}}),e.selectors({streamContainer:".timeline-Viewport",tweetStream:".timeline-TweetList"}),e.before("render",function(){this.params.chrome.transparent&&this.sandbox.addRootClass("var-chromeless"),this.params.chrome.hideBorder&&this.sandbox.addRootClass("var-borderless"),this.params.chrome.hideHeader&&this.sandbox.addRootClass("var-headerless"),this.params.chrome.hideFooter&&this.sandbox.addRootClass("var-footerless")}),e.after("render",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.after("resize",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.define("hideScrollBar",function(){var e=this.selectOne("streamContainer"),t=this.selectOne("tweetStream");return r.defer(function(){var i,n;e.style.width="",i=e.offsetWidth-t.offsetWidth,n=e.offsetWidth+i,e.style.width=n+"px"})})}var r=i(46),s=i(162);e.exports=n},204:function(e,t,i){function n(e){e.selectors({privacyNotice:".js-privacyNotice"}),e.after("show",function(){var e,t=this.selectOne(this.selectors.privacyNotice);t&&(e=r.register(t,this.sandbox.sandboxEl,function(){this.scribe({element:"notice",action:"seen"},this.scribeItems()),r.unregister(e)}.bind(this)))})}var r=i(205);e.exports=n},205:function(e,t,i){var n=i(141),r=i(69),s=i(206),o=i(7),a=i(8),d=50,l=function(e){return(o.requestIdleCallback||o.requestAnimationFrame||function(e){e()})(e)},c=function(){this.observers=[]};c.prototype.register=function(e,t,i){var r;return a.hasIntersectionObserverSupport()?(r=new o.IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>=1&&l(i)})},{threshold:1}),r.observe(e),r):(r={update:function(r,s){n(e,{viewportWidth:r,viewportHeight:s,threshold:1,sandboxEl:t})&&i()}},this.observers.push(r),1===this.observers.length&&(this.unlisten=s.addScrollListener(this._onViewportChange.bind(this))),this._onViewportChange(),r)},c.prototype.unregister=function(e){var t;a.hasIntersectionObserverSupport()&&e instanceof o.IntersectionObserver?e.disconnect():(t=this.observers.indexOf(e),t>-1&&(this.observers.splice(t,1),0===this.observers.length&&this.unlisten&&this.unlisten()))},c.prototype._onViewportChange=function(){r(l(function(){this._notify(s.getWidth(),s.getHeight())}.bind(this)),d,this)},c.prototype._notify=function(e,t){this.observers.forEach(function(i){i.update(e,t)})},e.exports=new c},206:function(e,t,i){var n=i(7),r={_addListener:function(e,t){var i,r=function(){t()};return n.addEventListener(e,r),i=function(){n.removeEventListener(e,r)}},addScrollListener:function(e){return this._addListener("scroll",e)},getHeight:function(){return n.innerHeight},getWidth:function(){return n.innerWidth}};e.exports=r},207:function(e,t){function i(e){e.params({ariaLive:{fallback:""}}),e.selectors({newTweetsNotifier:".new-tweets-bar"}),e.after("render",function(){var e=this.selectOne("newTweetsNotifier");"assertive"===this.params.ariaLive&&e&&e.setAttribute("aria-live","assertive")})}e.exports=i},208:function(e,t,i){function n(e){e.selectors({fullTimestampToLocalize:".long-permalink time",relativeTimestampToLocalize:".permalink time"}),e.after("prepForInsertion",function(e){var t=a(this.el);t&&(this.select(e,"fullTimestampToLocalize").forEach(function(e){var i=e.getAttribute("datetime"),n=i&&t.localTimeStamp(i);n&&(e.innerHTML=n)}),this.select(e,"relativeTimestampToLocalize").forEach(function(e){var i=e.getAttribute("datetime"),n=i&&t.timeAgo(i);n&&(e.innerHTML=n)}))}),e.define("updateRelativeTimestamps",function(){var e,t=a(this.el);if(t)return e=this.select("relativeTimestampToLocalize").reduce(function(e,i){var n=i.getAttribute("datetime"),r=n&&t.timeAgo(n);return r&&e.push(function(){i.innerHTML=r}),e},[]),r.all(e.map(s.write))}),e.after("render",function(){var e=this;o.setInterval(function(){e.updateRelativeTimestamps()},d)})}var r=i(2),s=i(46),o=i(7),a=i(209),d=6e4;e.exports=n},209:function(e,t,i){function n(e){return new s(r.compact({months:(e.getAttribute("data-dt-months")||"").split("|"),phrases:{AM:e.getAttribute("data-dt-am"),PM:e.getAttribute("data-dt-pm"),now:e.getAttribute("data-dt-now"),s:e.getAttribute("data-dt-s"),m:e.getAttribute("data-dt-m"),h:e.getAttribute("data-dt-h"),second:e.getAttribute("data-dt-second"),seconds:e.getAttribute("data-dt-seconds"),minute:e.getAttribute("data-dt-minute"),minutes:e.getAttribute("data-dt-minutes"),hour:e.getAttribute("data-dt-hour"),hours:e.getAttribute("data-dt-hours")},formats:{full:e.getAttribute("data-dt-full"),explicit:e.getAttribute("data-dt-explicit-timestamp"),abbr:e.getAttribute("data-dt-abbr"),shortdate:e.getAttribute("data-dt-short"),longdate:e.getAttribute("data-dt-long")}}))}var r=i(11),s=i(210);e.exports=n},210:function(e,t){function i(e){return e<10?"0"+e:e}function n(e){function t(e,t){return r&&r[e]&&(e=r[e]),e.replace(/%\{([\w_]+)\}/g,function(e,i){return void 0!==t[i]?t[i]:e})}var r=e&&e.phrases,s=e&&e.months||a,o=e&&e.formats||d;this.timeAgo=function(e){var i,r,a,d=n.parseDate(e),m=+new Date,p=m-d;return d?isNaN(p)||p<2*l?t("now"):p<c?(i=Math.floor(p/l),t(o.abbr,{number:i,symbol:t(f,{abbr:t("s"),expanded:t(i>1?"seconds":"second")})})):p<u?(i=Math.floor(p/c),t(o.abbr,{number:i,symbol:t(f,{abbr:t("m"),expanded:t(i>1?"minutes":"minute")})})):p<h?(i=Math.floor(p/u),t(o.abbr,{number:i,symbol:t(f,{abbr:t("h"),expanded:t(i>1?"hours":"hour")})})):p<365*h?t(o.shortdate,{day:d.getDate(),month:t(s[d.getMonth()])}):o.explicit&&(r=o.explicit.split(" - "),a=r[1])?a:t(o.longdate,{day:d.getDate(),month:t(s[d.getMonth()]),year:d.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(e){var r,a;return o.explicit?o.explicit:(r=n.parseDate(e),a=r&&r.getHours(),r?t(o.full,{day:r.getDate(),month:t(s[r.getMonth()]),year:r.getFullYear(),hours24:i(a),hours12:a<13?a?a:"12":a-12,minutes:i(r.getMinutes()),seconds:i(r.getSeconds()),amPm:t(a<12?"AM":"PM")}):"")}}var r=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[+-]\d{2}:?\d{2})/,s=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([+-]\d{2}:?\d{2}) (\d{4})/i,o=/^\d+$/,a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},l=1e3,c=60*l,u=60*c,h=24*u,f='<abbr title="%{expanded}">%{abbr}</abbr>';n.parseDate=function(e){var t,i,n=e||"",d=n.toString();return!!(t=function(){var e;return o.test(d)?parseInt(d,10):(e=d.match(s))?Date.UTC(e[7],a.indexOf(e[1]),e[2],e[3],e[4],e[5]):(e=d.match(r),e?Date.UTC(e[1],e[2]-1,e[3],e[4],e[5],e[6]):void 0)}())&&(i=new Date(t),!isNaN(i.getTime())&&i)},e.exports=n},211:function(e,t,i){function n(e){e.selectors({followButton:".follow-button"}),e.define("handleFollowButtonClick",function(e,t){var i=s.intentForFollowURL(t.href),n=o.asBoolean(t.getAttribute("data-age-gate"));n||r.open(i,this.sandbox.sandboxEl,e)}),e.after("render",function(){this.on("click","followButton",function(e,t){this.handleFollowButtonClick(e,t)})})}var r=i(22),s=i(23),o=i(25);e.exports=n},212:function(e,t,i){function n(e){e.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),e.define("dismissNsfwWarning",function(e,t){var i=r.closest(this.selectors.mediaCard,t,this.el);i&&s.remove(i,"is-nsfw")}),e.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}var r=i(21),s=i(20);e.exports=n},213:function(e,t,i){function n(e){function t(e){var t=e.createElement("div");return t.className="MediaCard-mediaAsset",t}function i(e){return h.url(e,p)}e.params({lang:{required:!0,transform:c.matchLanguage,fallback:"en"}}),e.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",sourceIdInfo:".js-tweetIdInfo"}),e.define("replaceInterstitialWithMedia",function(e,t){return m.all([this.restoreLastMediaInterstitial(),u.write(function(){r=e,s=e.parentNode,e.parentNode.replaceChild(t,e)})])}),e.define("restoreLastMediaInterstitial",function(){var e;return r&&s?(e=s.firstElementChild,f.remove(e),u.write(function(){s.replaceChild(r,e)})):m.resolve()}),e.define("playWebVideoPlayerMediaAsset",function(e,t){var i,n=l.closest(this.selectors.sourceIdInfo,t,this.el),r=n.getAttribute("data-tweet-id"),s=f.insertForTweet;return r||(r=n.getAttribute("data-event-id"),s=f.insertForEvent),r?(e.preventDefault(),i=this.selectOne(n,this.selectors.wvpInterstitial),this.getConsent(n,i).then(function(){this.displayWebVideoPlayerMediaAsset(n,r,s)}.bind(this))):m.reject(new Error("No source id found for player"))}),e.define("displayWebVideoPlayerMediaAsset",function(e,i,n){var r=this.selectOne(e,this.selectors.mediaAsset),s=(this.scribeNamespace()||{}).page,o=(this.scribeData()||{}).widget_origin,a=this.params.lang,d=t(this.sandbox),l=this.sandbox.createElement("div"),c={addBranding:!0,widgetOrigin:o};return"function"==typeof this.getTweetPlayerBorderRadius&&(c.borderRadius=this.getTweetPlayerBorderRadius()),l.className="wvp-player-container",d.appendChild(l),this.replaceInterstitialWithMedia(r,d).then(function(){return n.call(this,d,i,s,a,c)}).then(function(e){e&&e.on("ready",e.play)})}),e.define("displayIframeMediaAsset",function(e,n){var r,s,d=l.closest(this.selectors.mediaAsset,n,this.el),c=l.closest(this.selectors.cardInterstitial,n,this.el),h=c.getAttribute("data-player-src"),f=c.getAttribute("data-player-width"),p=c.getAttribute("data-player-height"),v=c.getAttribute("data-player-title");return h?(e.preventDefault(),h=i(h),r=t(this.sandbox),s=a({src:h,allowfullscreen:"true",width:f,height:p,title:v||""}),s.className="FilledIframe",r.appendChild(s),this.replaceInterstitialWithMedia(d,r).then(function(){s.focus(),u.write(function(){o.add(r,g),o.add(s,g)})})):m.reject(new Error("No Player frame source"))}),e.after("render",function(){var e=this.selectOne(this.selectors.wvpInterstitial);e&&o.remove(e,"u-hidden"),this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})}var r,s,o=i(20),a=i(54),d=i(91),l=i(21),c=i(97),u=i(46),h=i(24),f=i(151),m=i(2),p={autoplay:"1"},g="js-forceRedraw";e.exports=d.couple(i(214),n)},214:function(e,t,i){function n(e){e.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),e.define("getConsent",function(e,t){var i=this.selectOne(e,this.selectors.interstitial);return i?u.shouldObtainCookieConsent().catch(function(){return c.resolve(!0)}).then(function(e){var n,r;return e?(n=new o,r=function(){this.handleCookieConsentClick(t,i),n.resolve()}.bind(this),d.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(i,t),this.attachConsentListener(i,r)},this),n.promise):c.resolve()}.bind(this)):c.resolve()}),e.define("attachConsentListener",function(e,t){var i=this.selectOne(e,this.selectors.cookieConsentButton);i&&i.addEventListener("click",t,{once:!0})}),e.define("showConsentInterstitial",function(e,t){r.remove(e,"u-hidden"),t&&r.add(t,"is-backgrounded")}),e.define("hideConsentInterstitial",function(e,t){r.add(e,"u-hidden"),t&&r.remove(t,"is-backgrounded")}),e.define("setCookieConsentCookie",function(){return s.request(a.cookieConsent()).catch(function(e){throw new Error("CORS request failed: "+e)})}),e.define("handleCookieConsentClick",function(e,t){return l.allSettled([d.write(this.hideConsentInterstitial.bind(this,t,e)),this.setCookieConsentCookie()])})}var r=i(20),s=i(77),o=i(1),a=i(43),d=i(46),l=i(42),c=i(2),u=i(75);e.exports=n},215:function(e,t,i){function n(e){e.override("resizeSandboxDueToCardChange",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():r.resolve()})}var r=i(2),s=i(91);e.exports=s.couple(i(216),n)},216:function(e,t,i){function n(e){var t,i="",n=Math.floor(e/h);for(t=n;t>0;t--)i+="w"+t*h+" ";return i}function r(e){e.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),e.define("scribeCardShown",function(e){var t=2;this.scribe({component:"card",action:"shown"},{items:[{card_name:e.getAttribute("data-card-name")}]},t)}),e.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),e.define("markCardElAsLoaded",function(e){function t(){n&&i.resizeSandboxDueToCardChange()}var i=this,n=!1;return this.select(e,"img").forEach(function(e){e.addEventListener("load",t,!1)}),this.scribeCardShown(e),o.write(function(){s.add(e,p)}).then(function(){n=!0,i.resizeSandboxDueToCardChange()})}),e.define("updateCardWidthConstraints",function(){var e=this;return l.all(this.select("prerenderedCard").map(function(t){var i=e.selectOne(t,"rootCardEl");return o.defer(function(){var e,r=0;d.ios()?(s.remove(t,g),r=a(t.parentElement).width,t.style.maxWidth=r+"px"):r=a(t.parentElement).width,e=n(r),i.setAttribute(f,e),s.add(t,g)}).then(function(){return e.resizeSandboxDueToCardChange()})}))}),e.define("setCardTheme",function(e){var t=this.selectOne(e,"rootCardEl");this.params.theme&&t.setAttribute(m,this.params.theme)}),e.after("prepForInsertion",function(e){var t=this,i=this.select(e,"prerenderedCard").reduce(function(e,t){var i=t.getAttribute("data-css");return i&&(e[i]=e[i]||[],e[i].push(t)),e},{});c.forIn(i,function(e,i){t.sandbox.prependStyleSheet(e).then(function(){i.forEach(function(e){t.setCardTheme(e),t.markCardElAsLoaded(e)})})})}),e.after("show",function(){var e;return d.anyIE()&&(e=this.selectOne("periscopeVideo"),e&&(e.style.display="none")),this.updateCardWidthConstraints()}),e.after("resize",function(){return this.updateCardWidthConstraints()})}var s=i(20),o=i(46),a=i(71),d=i(8),l=i(2),c=i(11),u=i(91),h=50,f="data-card-breakpoints",m="data-theme",p="is-loaded",g="is-constrainedByMaxWidth";e.exports=u.couple(i(105),r)},217:function(e,t,i){function n(e,t,i){var n={};return e=e||{},i&&e.max?n.minPosition=e.max:!i&&e.min?n.maxPosition=e.min:i?n.sinceId=t:n.maxId=t,n}function r(e){e.params({dataSource:{required:!0},isPreviewTimeline:{required:!1,fallback:!1}}),e.selectors({timelineTweet:".timeline-Tweet",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet",newTweetsNotifier:".new-tweets-bar",loadMore:".timeline-LoadMore",loadMoreButton:".timeline-LoadMore-prompt"}),e.define("gcTweetsSync",function(){var e="custom"===this.el.getAttribute("data-timeline-type"),t=this.selectOne("tweetList");return e?o.resolve():void m(t,w)}),e.define("scribeImpressionsForDynamicTweetSet",function(e,t){var i=u.toRealArray(e.querySelectorAll(this.selectors.timelineTweet)),n=f(i),r=Object.keys(n),s=t?"newer":"older",o=t?v.CLIENT_SIDE_APP:v.CLIENT_SIDE_USER;this.scribe({component:"timeline",element:s,action:"results"},{item_ids:r,item_details:n,event_initiator:o})}),e.define("fetchTweets",function(e,t){function i(e){return"404"===e?s.pollInterval=null:"503"===e&&(s.pollInterval*=1.5),o.reject(e)}function r(i){var n,r,o=s.sandbox.createFragment(),a=s.sandbox.createElement("ol"),d=t?b.NEWER:b.OLDER;return p(s,i,d),a.innerHTML=i.html,n=a.firstElementChild,n&&(r=s.selectOne(n,"timelineTweet")),r&&"LI"===n.tagName?(r.getAttribute("data-tweet-id")===e&&a.removeChild(n),s.scribeImpressionsForDynamicTweetSet(a,t),s.prepForInsertion(a),u.toRealArray(a.children).forEach(function(e){o.appendChild(e)}),o):o}var s=this,a=n(this.cursors,e,t);return this.params.dataSource.poll(a,t).then(r,i)}),e.define("loadOldTweets",function(){var e=this,t=this.selectLast("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!1).then(function(t){var i=e.selectOne("tweetList"),n=e.selectOne("loadMore");return d.write(function(){t.childNodes.length>0?i.appendChild(t):a.add(n,x)})}):o.reject(new Error("unable to load more"))}),e.after("loadOldTweets",function(){return g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"older"}),this.resize()}),e.define("loadNewTweets",function(){var e=this,t=this.selectOne("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!0).then(function(t){var i,n,r=e.selectOne("viewport"),s=e.selectOne("tweetList");if(0!==t.childNodes.length)return d.read(function(){i=r.scrollTop,n=r.scrollHeight}),d.defer(function(){var o;s.insertBefore(t,s.firstElementChild),o=i+r.scrollHeight-n,i>40||e.mouseIsOverWidget?(r.scrollTop=o,e.showNewTweetsNotifier()):(r.scrollTop=0,e.gcTweetsSync())})}):o.reject(new Error("unable to load new tweets"))}),e.after("loadNewTweets",function(){return g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"newer"}),this.resize()}),e.define("showNewTweetsNotifier",function(){var e=this,t=this.selectOne("newTweetsNotifier"),i=t&&t.firstElementChild;return l.setTimeout(function(){e.hideNewTweetsNotifier()},C),d.write(function(){t.removeChild(i),t.appendChild(i),a.add(t,"is-displayed")}),d.defer(function(){a.add(t,"is-opaque")})}),e.define("hideNewTweetsNotifier",function(e){var t=new s,i=this.selectOne("newTweetsNotifier");return e=e||{},!e.force&&this.mouseIsOverNewTweetsNotifier?(t.resolve(),t.promise):(d.write(function(){a.remove(i,"is-opaque")}),l.setTimeout(function(){d.write(function(){a.remove(i,"is-displayed")}).then(t.resolve,t.reject)},T),t.promise)}),e.define("scrollToTopOfViewport",function(){var e=this.selectOne("viewport");return d.write(function(){e.scrollTop=0,e.focus()})}),e.define("schedulePolling",function(){function e(){i.isPollInProgress=!1}function t(){var r=n||i.pollInterval;r&&l.setTimeout(function(){i.isPollInProgress||(i.isPollInProgress=!0,i.loadNewTweets(i.sandbox).then(e,e)),t()},r)}var i=this,n=c.get("timeline.pollInterval");t()}),e.after("initialize",function(){this.isPollInProgress=!1,this.mouseIsOverWidget=!1,this.mouseIsOverNewTweetsNotifier=!1,this.cursors={},this.pollInterval=1e4}),e.after("render",function(){this.isStaticTimeline||this.params.isPreviewTimeline||(this.select("timelineTweet").length>0&&this.schedulePolling(),this.on("mouseover",function(){this.mouseIsOverWidget=!0}),this.on("mouseout",function(){this.mouseIsOverWidget=!1}),this.on("mouseover","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!0}),this.on("mouseout","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!1}),this.on("click","newTweetsNotifier",function(){this.scrollToTopOfViewport(),this.hideNewTweetsNotifier({force:!0})}),this.on("click","loadMoreButton",function(){this.loadOldTweets()}))})}var s=i(1),o=i(2),a=i(20),d=i(46),l=i(7),c=i(16),u=i(11),h=i(91),f=i(108),m=i(218),p=i(201),g=i(29),v=i(219),b=i(202),w=50,C=5e3,T=500,x="is-atEndOfTimeline";e.exports=h.couple(i(105),r)},218:function(e,t){function i(e,t){if(e)for(;e.children[t];)e.removeChild(e.children[t])}e.exports=i},219:function(e,t){e.exports={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2}},220:function(e,t,i){function n(e){return d+"{border-color:"+e+";}"}function r(e){e.params({borderColor:{fallback:[a(s.val,s,"widgets:border-color")],validate:o}}),e.after("render",function(){var e=this.params.borderColor;e&&this.sandbox.appendCss(n(e))})}var s=i(37),o=i(221),a=i(13),d=".customisable-border";e.exports=r},221:function(e,t){function i(e){return n.test(e)}var n=/^#(?:[a-f\d]{3}){1,2}$/i;e.exports=i},222:function(e,t,i){function n(e){return e.join(",")}function r(e){var t=n(c),i=n(u);return[t+"{color:"+e+";}",i+"{color:"+a.lighten(e,.2)+";}"].join("")}function s(e){e.params({linkColor:{fallback:l(o.val,o,"widgets:link-color"),validate:d}}),e.after("render",function(){var e=this.params.linkColor;e&&this.sandbox.appendCss(r(e))})}var o=i(37),a=i(223),d=i(221),l=i(13),c=[".customisable",".customisable:link",".customisable:visited"],u=[".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"];e.exports=s},223:function(e,t,i){function n(e){return d.parseInt(e,16)}function r(e){return l.isType("string",e)?(e=e.replace(c,""),e+=3===e.length?e:""):null}function s(e,t){var i,s,o,a;if(e=r(e),t=t||0,e)return i=t<0?0:255,t=t<0?-Math.max(t,-1):Math.min(t,1),s=n(e.substring(0,2)),o=n(e.substring(2,4)),a=n(e.substring(4,6)),"#"+(16777216+65536*(Math.round((i-s)*t)+s)+256*(Math.round((i-o)*t)+o)+(Math.round((i-a)*t)+a)).toString(16).slice(1)}function o(e,t){return s(e,-t)}function a(e,t){return s(e,t)}var d=i(7),l=i(11),c=/^#/;e.exports={darken:o,lighten:a}},224:function(e,t,i){function n(e){e.after("render",function(){var e,t=this.sandbox.sandboxEl,i=t.tagName;if(s(t,"td "+i))return e=r.closest("td",t),this.sandbox.styleSelf({maxWidth:e.clientWidth+"px"})})}var r=i(21),s=i(86);e.exports=n}});