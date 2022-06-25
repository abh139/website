"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,608],{9960:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7462),r=n(3366),l=n(7294),i=n(3727),o=n(2263),c=n(3919),s=n(412),u=l.createContext({collectLink:function(){}});var d=n(4996),m=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];function h(e,t){var n,h,v=e.isNavLink,b=e.to,p=e.href,g=e.activeClassName,E=e.isActive,k=e["data-noBrokenLinkCheck"],_=e.autoAddBaseUrl,C=void 0===_||_,I=(0,r.Z)(e,f),Z=(0,o.Z)().siteConfig,N=Z.trailingSlash,S=Z.baseUrl,T=(0,d.C)().withBaseUrl,M=(0,l.useContext)(u),w=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,(function(){return w.current}));var L=b||p;var y,x=(0,c.Z)(L),A=null==L?void 0:L.replace("pathname://",""),P=void 0!==A?(y=A,C&&function(e){return e.startsWith("/")}(y)?T(y):y):void 0;P&&x&&(P=(0,m.applyTrailingSlash)(P,{trailingSlash:N,baseUrl:S}));var B=(0,l.useRef)(!1),R=v?i.OL:i.rU,D=s.Z.canUseIntersectionObserver,F=(0,l.useRef)();(0,l.useEffect)((function(){return!D&&x&&null!=P&&window.docusaurus.prefetch(P),function(){D&&F.current&&F.current.disconnect()}}),[F,P,D,x]);var W=null!=(n=null==(h=P)?void 0:h.startsWith("#"))&&n,H=!P||!x||W;return P&&x&&!W&&!k&&M.collectLink(P),H?l.createElement("a",(0,a.Z)({ref:w,href:P},L&&!x&&{target:"_blank",rel:"noopener noreferrer"},I)):l.createElement(R,(0,a.Z)({},I,{onMouseEnter:function(){B.current||null==P||(window.docusaurus.preload(P),B.current=!0)},innerRef:function(e){var t,n;w.current=e,D&&e&&x&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},F.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(F.current.unobserve(t),F.current.disconnect(),n())}))})),F.current.observe(t))},to:P},v&&{isActive:E,activeClassName:g}))}var v=l.forwardRef(h)},376:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var a=n(7294),r=n(8790),l=n(201),i=n(5226),o=n(6010),c=n(7462),s=n(3366),u=n(9960),d=n(2389),m={themedImage:"themedImage_W2Cr","themedImage--light":"themedImage--light_TfLj","themedImage--dark":"themedImage--dark_oUvU"},f=["sources","className","alt"];function h(e){var t=(0,d.Z)(),n=(0,i.If)().colorMode,r=e.sources,l=e.className,u=e.alt,h=(0,s.Z)(e,f),v=t?"dark"===n?["dark"]:["light"]:["light","dark"];return a.createElement(a.Fragment,null,v.map((function(e){return a.createElement("img",(0,c.Z)({key:e,src:r[e],alt:u,className:(0,o.Z)(m.themedImage,m["themedImage--"+e],l)},h))})))}var v=n(4996),b=n(2263),p=["imageClassName","titleClassName"];function g(e){var t=(0,b.Z)().siteConfig.title,n=(0,i.LU)().navbar,r=n.title,l=n.logo,o=void 0===l?{src:""}:l,d=e.imageClassName,m=e.titleClassName,f=(0,s.Z)(e,p),g=(0,v.Z)(o.href||"/"),E={light:(0,v.Z)(o.src),dark:(0,v.Z)(o.srcDark||o.src)},k=a.createElement(h,{sources:E,height:o.height,width:o.width,alt:o.alt||r||t});return a.createElement(u.Z,(0,c.Z)({to:g},f,o.target&&{target:o.target}),o.src&&(d?a.createElement("div",{className:d},k):k),null!=r&&a.createElement("b",{className:m},r))}function E(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var k=n(5999),_="collapseSidebarButton_FykI",C="collapseSidebarButtonIcon_DTRl";function I(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",_),onClick:t},a.createElement(E,{className:C}))}var Z=n(3919),N="iconExternalLink_I5OW";function S(e){var t=e.width,n=void 0===t?13.5:t,r=e.height,l=void 0===r?13.5:r;return a.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:N},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}var T="menuHtmlItem_fVIQ",M="menuExternalLink_tcZa",w=["item"],L=["item","onItemClick","activePath","level","index"],y=["item","onItemClick","activePath","level","index"];function x(e){var t=e.item,n=(0,s.Z)(e,w);switch(t.type){case"category":return a.createElement(A,(0,c.Z)({item:t},n));case"html":return a.createElement(P,(0,c.Z)({item:t},n));default:return a.createElement(B,(0,c.Z)({item:t},n))}}function A(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,m=e.index,f=(0,s.Z)(e,L),h=t.items,v=t.label,b=t.collapsible,p=t.className,g=t.href,E=function(e){var t=(0,d.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(t),_=(0,i._F)(t,r),C=(0,i.Mg)(g,r),I=(0,i.uR)({initialState:function(){return!!b&&(!_&&t.collapsed)}}),Z=I.collapsed,N=I.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:_,collapsed:Z,setCollapsed:N});var S=(0,i.fP)(),T=S.expandedItem,M=S.setExpandedItem;function w(e){void 0===e&&(e=!Z),M(e?null:m),N(e)}var y=(0,i.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){b&&T&&T!==m&&y&&N(!0)}),[b,T,m,N,y]),a.createElement("li",{className:(0,o.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":Z},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},a.createElement(u.Z,(0,c.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!g,"menu__link--active":_}),onClick:b?function(e){null==n||n(t),g?w(!1):(e.preventDefault(),w())}:function(){null==n||n(t)},"aria-current":C?"page":void 0,"aria-expanded":b?!Z:void 0,href:b?null!=E?E:"#":E},f),v),g&&b&&a.createElement("button",{"aria-label":(0,k.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:v}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),w()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},a.createElement(F,{items:h,tabIndex:Z?-1:0,onItemClick:n,activePath:r,level:l+1})))}function P(e){var t=e.item,n=e.level,r=e.index,l=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,o.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(n),c&&T+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:l}})}function B(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,d=(e.index,(0,s.Z)(e,y)),m=t.href,f=t.label,h=t.className,v=(0,i._F)(t,r),b=(0,Z.Z)(m);return a.createElement("li",{className:(0,o.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",h),key:f},a.createElement(u.Z,(0,c.Z)({className:(0,o.Z)("menu__link",!b&&M,{"menu__link--active":v}),"aria-current":v?"page":void 0,to:m},b&&{onClick:n?function(){return n(t)}:void 0},d),f,!b&&a.createElement(S,null)))}var R=["items"];function D(e){var t=e.items,n=(0,s.Z)(e,R);return a.createElement(i.D_,null,t.map((function(e,t){return a.createElement(x,(0,c.Z)({key:t,item:e,index:t},n))})))}var F=(0,a.memo)(D),W="menu_izAj",H="menuWithAnnouncementBar_l2a_";function U(e){var t=e.path,n=e.sidebar,r=e.className,l=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",W,l&&H,r)},a.createElement("ul",{className:(0,o.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(F,{items:n,activePath:t,level:1})))}var z="sidebar_RiAD",O="sidebarWithHideableNavbar_d0QC",j="sidebarHidden_Lg_2",Y="sidebarLogo_YUvz";function q(e){var t=e.path,n=e.sidebar,r=e.onCollapse,l=e.isHidden,c=(0,i.LU)(),s=c.navbar.hideOnScroll,u=c.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(z,s&&O,l&&j)},s&&a.createElement(g,{tabIndex:-1,className:Y}),a.createElement(U,{path:t,sidebar:n}),u&&a.createElement(I,{onClick:r}))}var V=a.memo(q),G=function(e){var t=e.sidebar,n=e.path,r=(0,i.el)();return a.createElement("ul",{className:(0,o.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(F,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function K(e){return a.createElement(i.Zo,{component:G,props:e})}var Q=a.memo(K);function X(e){var t=(0,i.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(V,e),r&&a.createElement(Q,e))}var J=n(4608),$="backToTopButton_RiI4",ee="backToTopButtonShow_ssHd";function te(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function ne(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(!1),l=te(),c=l.smoothScrollTop,s=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,l=null==t?void 0:t.scrollY;if(l)if(r.current)r.current=!1;else{var i=a<l;if(i||s(),a<300)n(!1);else if(i){var o=document.documentElement.scrollHeight;a+window.innerHeight<o&&n(!0)}else n(!1)}})),(0,i.SL)((function(e){e.location.hash&&(r.current=!0,n(!1))})),a.createElement("button",{"aria-label":(0,k.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",i.kM.common.backToTopButton,$,t&&ee),type:"button",onClick:function(){return c()}})}var ae=n(6775),re={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},le=n(4739);function ie(e){var t=e.currentDocRoute,n=e.versionMetadata,r=e.children,c=e.sidebarName,s=(0,i.Vq)(),u=n.pluginId,d=n.version,m=(0,a.useState)(!1),f=m[0],h=m[1],v=(0,a.useState)(!1),b=v[0],p=v[1],g=(0,a.useCallback)((function(){b&&p(!1),h((function(e){return!e}))}),[b]);return a.createElement(a.Fragment,null,a.createElement(le.Z,{version:d,tag:(0,i.os)(u,d)}),a.createElement(l.Z,null,a.createElement("div",{className:re.docPage},a.createElement(ne,null),s&&a.createElement("aside",{className:(0,o.Z)(i.kM.docs.docSidebarContainer,re.docSidebarContainer,f&&re.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(re.docSidebarContainer)&&f&&p(!0)}},a.createElement(X,{key:c,sidebar:s,path:t.path,onCollapse:g,isHidden:b}),b&&a.createElement("div",{className:re.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:g,onClick:g},a.createElement(E,{className:re.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(re.docMainContainer,(f||!s)&&re.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,f&&re.docItemWrapperEnhanced)},r)))))}function oe(e){var t=e.route.routes,n=e.versionMetadata,l=e.location,c=t.find((function(e){return(0,ae.LX)(l.pathname,e)}));if(!c)return a.createElement(J.default,null);var s=c.sidebar,u=s?n.docsSidebars[s]:null;return a.createElement(i.FG,{className:(0,o.Z)(i.kM.wrapper.docsPages,i.kM.page.docsDocPage,n.className)},a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:null!=u?u:null},a.createElement(ie,{currentDocRoute:c,versionMetadata:n,sidebarName:s},(0,r.H)(t,{versionMetadata:n})))))}},4608:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(201),l=n(5999),i=n(5226);function o(){return a.createElement(a.Fragment,null,a.createElement(i.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,l=e.split(/[#?]/)[0],i="/"===l||l===a?l:(r=l,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(l,i)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}})}}]);