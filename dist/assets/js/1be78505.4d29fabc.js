"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[9514,2659,8610,3089,6103],{8704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),l=a(3905),r=a(6291),o=a(4260),c=a(6010),i=a(941),m=a(3783),d=a(7898),s=a(8030),C=a(7462),v=function(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},L=a(4973),b=a(3366),f=a(6742),u=a(3919),h=a(8617),p="menuLinkText_1J2g",E=["items"],_=["item"],k=["item","onItemClick","activePath"],w=["item","onItemClick","activePath"],N=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},Z=(0,n.memo)((function(e){var t=e.items,a=(0,b.Z)(e,E);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(g,(0,C.Z)({key:t,item:e},a))})))}));function g(e){var t=e.item,a=(0,b.Z)(e,_);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(M,(0,C.Z)({item:t},a));case"link":default:return n.createElement(y,(0,C.Z)({item:t},a))}}function M(e){var t,a=e.item,l=e.onItemClick,r=e.activePath,o=(0,b.Z)(e,k),m=a.items,d=a.label,s=a.collapsible,v=N(a,r),L=(0,i.uR)({initialState:function(){return!!s&&(!v&&a.collapsed)}}),f=L.collapsed,u=L.setCollapsed,h=L.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a])}({isActive:v,collapsed:f,setCollapsed:u}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":f})},n.createElement("a",(0,C.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":s,"menu__link--active":s&&v},t[p]=!s,t)),onClick:s?function(e){e.preventDefault(),h()}:void 0,href:s?"#":void 0},o),d),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.createElement(Z,{items:m,tabIndex:f?-1:0,onItemClick:l,activePath:r})))}function y(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=(0,b.Z)(e,w),o=t.href,m=t.label,d=N(t,l);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:m},n.createElement(f.Z,(0,C.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:o},(0,u.Z)(o)&&{onClick:a},r),(0,u.Z)(o)?m:n.createElement("span",null,m,n.createElement(h.Z,null))))}var S="sidebar_15mo",T="sidebarWithHideableNavbar_267A",I="sidebarHidden_2kNb",x="sidebarLogo_3h0W",A="menu_Bmed",B="menuWithAnnouncementBar_2WvA",H="collapseSidebarButton_1CGd",P="collapseSidebarButtonIcon_3E-R";function V(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,L.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,L.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",H),onClick:t},n.createElement(v,{className:P}))}function R(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,m=e.isHidden,C=function(){var e=(0,i.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],l=t[1];return(0,d.Z)((function(t){var a=t.scrollY;e||l(0===a)})),a}(),v=(0,i.LU)(),L=v.navbar.hideOnScroll,b=v.hideableSidebar,f=(0,i.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(S,(t={},t[T]=L,t[I]=m,t))},L&&n.createElement(s.Z,{tabIndex:-1,className:x}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",A,(a={},a[B]=!f&&C,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:r,activePath:l}))),b&&n.createElement(V,{onClick:o}))}var D=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:l,onItemClick:function(){return t()}}))};function F(e){return n.createElement(i.Cv,{component:D,props:e})}var W=n.memo(R),z=n.memo(F);function U(e){var t=(0,m.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),l&&n.createElement(z,e))}var j=a(434),q=a(4608),Y=a(5977),G="backToTopButton_35hR",J="backToTopButtonShow_18ls";function K(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var O=function(){var e,t=(0,Y.TH)(),a=K(),l=a.smoothScrollTop,r=a.cancelScrollToTop,o=(0,n.useState)(!1),i=o[0],m=o[1];return(0,d.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||r(),a<300)m(!1);else if(n){var l=document.documentElement.scrollHeight;a+window.innerHeight<l&&m(!0)}else m(!1)}}),[t]),n.createElement("button",{className:(0,c.Z)("clean-btn",G,(e={},e[J]=i,e)),type:"button",onClick:function(){return l()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},X=a(9105);function $(e){var t,a,r,m=e.currentDocRoute,d=e.versionMetadata,s=e.children,C=d.pluginId,b=d.version,f=m.sidebar,u=f?d.docsSidebars[f]:void 0,h=(0,n.useState)(!1),p=h[0],E=h[1],_=(0,n.useState)(!1),k=_[0],w=_[1],N=(0,n.useCallback)((function(){k&&w(!1),E(!p)}),[k]);return n.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,i.os)(C,b)}},n.createElement("div",{className:Q.docPage},n.createElement(O,null),u&&n.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=p,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&p&&w(!0)}},n.createElement(U,{key:f,sidebar:u,path:m.path,onCollapse:N,isHidden:k}),k&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,L.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,L.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(v,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(a={},a[Q.docMainContainerEnhanced]=p||!u,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(r={},r[Q.docItemWrapperEnhanced]=p,r))},n.createElement(l.Zo,{components:j.Z},s)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,Y.LX)(l.pathname,e)}));return o?n.createElement(n.Fragment,null,n.createElement(X.Z,null,n.createElement("html",{className:a.className})),n.createElement($,{currentDocRoute:o,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a}))):n.createElement(q.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),l=a(4260),r=a(4973);t.default=function(){return n.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6463:function(e,t,a){var n=a(7294),l=a(941),r=a(5350);t.Z=function(){var e=(0,l.LU)().footer,t=(0,r.Z)().isDarkTheme;return e?n.createElement("footer",{className:"footer","data-v-26b507a6":!0},n.createElement("div",{className:"bg-dark tm-text","data-v-26b507a6":!0},n.createElement("div",{className:"footer-top tm-container","data-v-26b507a6":!0},n.createElement("div",{className:"footer-top__container","data-v-26b507a6":!0},n.createElement("div",{className:"tm-rf7 tm-lh-title","data-v-26b507a6":!0},"Arch into Cosmos"),n.createElement("div",{className:"mt-7","data-v-26b507a6":!0},n.createElement("a",{href:"/updates",className:"ft-link tm-rf1 tm-button tm-button__size__m tm-button__variant__underlined tm-lh-title tm-medium  tm-rf0","data-v-49eff159":!0,"data-v-26b507a6":!0},n.createElement("span",{className:"tm-button__content","data-v-49eff159":!0},"SIGN UP FOR UPDATES"))),n.createElement("div",{className:"footer-top__row tm-rf2 tm-rf1-m-up","data-v-26b507a6":!0},n.createElement("div",{className:"footer-top__col","data-v-26b507a6":!0},n.createElement("ul",{className:"footer-top__list","data-v-26b507a6":!0},n.createElement("li",{className:"tm-rf2 tm-rf1-m-up tm-overline tm-medium","data-v-26b507a6":!0},n.createElement("span",{className:"footer-top__list-title","data-v-26b507a6":!0},"Archway")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"https://docs.archway.io/docs/overview/about",target:"_blank",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"About")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"https://docs.archway.io/docs/overview/faq",target:"_blank",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Support")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"/brand-kit.zip",download:"true",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Brand Kit")))),n.createElement("div",{className:"footer-top__col","data-v-26b507a6":!0},n.createElement("ul",{className:"footer-top__list","data-v-26b507a6":!0},n.createElement("li",{className:"tm-rf2 tm-rf1-m-up tm-overline tm-medium","data-v-26b507a6":!0},n.createElement("span",{className:"footer-top__list-title","data-v-26b507a6":!0},"Community")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"https://blog.archway.io",target:"_blank",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Blog")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"https://discord.gg/archwayhq",target:"_blank",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Discord")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"https://twitter.com/archwayhq",target:"_blank",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Twitter")))),n.createElement("div",{className:"footer-top__col","data-v-26b507a6":!0},n.createElement("ul",{className:"footer-top__list","data-v-26b507a6":!0},n.createElement("li",{className:"tm-rf2 tm-rf1-m-up tm-overline tm-medium","data-v-26b507a6":!0},n.createElement("span",{className:"footer-top__list-title","data-v-26b507a6":!0},"Developers")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"/docs/overview/about",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Introduction")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"/docs/overview/about",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Documentation")),n.createElement("li",{"data-v-26b507a6":!0},n.createElement("a",{href:"https://github.com/archway-network",target:"_blank",rel:"noopener noreferrer",className:"ft-link footer-top__link tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Github")))))),n.createElement("div",{className:"mt-9 back-to-top","data-v-26b507a6":!0},n.createElement("a",{id:"sctoparw",href:"#",className:"tm-rf0 tm-rf-1-m tm-muted scrolltop tm-link","data-v-78aa3c22":!0,"data-v-26b507a6":!0},n.createElement("span",{className:"sr-only","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Backed by the team at Tendermint"),n.createElement("div",{className:"canvas back-to-top__icon","data-v-5a3cc64a":!0,"data-v-26b507a6":!0,"data-v-78aa3c22":!0},n.createElement("svg",{width:204,height:257,viewBox:"0 0 204 257",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-v-5a3cc64a":!0},n.createElement("path",{d:"M175.57 130.879L175.026 138.665C174.696 143.386 176.898 145.683 180.013 145.901C183.157 146.121 185.087 144.043 185.336 142.037L185.535 142.05C185.881 143.949 187.041 145.595 189.581 145.772C192.586 145.982 195.063 144.062 195.365 139.737L195.884 132.298L175.57 130.879ZM177.985 134.127L184.492 134.582L184.175 139.115C184.003 141.575 182.309 143.001 180.374 142.866C178.668 142.747 177.47 141.497 177.676 138.551L177.985 134.127ZM186.882 134.749L193.062 135.181L192.769 139.366C192.599 141.797 191.239 142.868 189.553 142.75C187.589 142.613 186.451 140.918 186.595 138.855L186.882 134.749Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M172.545 154.59C172.025 157.061 172.987 158.717 173.989 159.507L173.965 159.624L171.922 159.194L171.323 162.035L181.248 164.125C185.597 165.04 187.184 161.798 187.684 159.424C188.254 156.719 187.688 153.999 185.169 152.452L183.97 155.055C184.941 155.706 185.733 157.011 185.321 158.967C184.926 160.845 183.74 161.601 182.047 161.245L181.979 161.23C180.919 161.007 181.167 159.921 181.422 157.17C181.687 154.269 181.558 151.214 178.162 150.499C175.224 149.88 173.144 151.749 172.545 154.59ZM174.747 155.714C175.094 154.07 176.083 153.038 177.523 153.342C179.08 153.67 179.344 155.168 179.213 156.898C179.141 157.869 178.922 160.16 179.253 160.666L177.326 160.261C175.555 159.888 174.237 158.137 174.747 155.714Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M167.675 172.339C166.469 175.741 167.732 178.667 170.424 179.97L171.391 177.242C169.961 176.335 169.471 174.8 170.039 173.198C170.879 170.827 173.398 170 176.538 171.112C179.621 172.205 181.01 174.448 180.18 176.791C179.549 178.572 178.039 179.26 176.583 179.082L175.616 181.809C178.628 182.539 181.399 180.852 182.558 177.581C183.996 173.523 181.871 169.816 177.475 168.259C173.136 166.721 169.156 168.159 167.675 172.339Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M164.208 182.025L162.808 184.648L167.589 187.2L168.198 189.204L159.667 190.534L157.949 193.754L168.75 192.035L171.619 200.576L173.295 197.436L170.458 189.024L170.58 188.796L180.773 194.236L182.173 191.613L164.208 182.025Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M151.67 201.642C149.608 204.258 149.437 207.124 150.971 209.194L153.111 207.299C152.311 205.984 152.534 204.514 153.58 203.186C155.156 201.187 157.511 200.866 159.872 202.626L153.149 211.153L153.977 211.805C158.31 215.222 162.049 213.966 164.191 211.248C166.826 207.906 166.017 203.698 162.331 200.792C158.607 197.855 154.459 198.105 151.67 201.642ZM161.615 204.013C163.243 205.449 163.746 207.846 162.25 209.743C160.822 211.555 158.543 211.683 156.702 210.244L161.615 204.013Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M139.698 213.924C137.513 215.651 137.709 217.663 137.892 218.76L137.697 218.914L136.224 217.05L133.946 218.85L146.573 234.827L148.905 232.983L144.213 227.047L144.354 226.936C145.361 227.344 147.229 228.072 149.46 226.309C152.354 224.022 152.678 220.053 149.607 216.168C146.543 212.291 142.607 211.625 139.698 213.924ZM140.755 216.321C142.838 214.674 145.371 215.651 147.27 218.053C149.15 220.433 149.501 223.057 147.395 224.722C145.359 226.331 142.954 225.533 140.975 223.029C138.983 220.509 138.742 217.911 140.755 216.321Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M114.22 227.441L111.332 227.734L111.572 230.098L111.325 230.124C110.692 229.208 109.432 227.627 106.662 227.909C102.982 228.283 100.611 231.502 101.11 236.419C101.611 241.345 104.616 243.968 108.286 243.595C111.105 243.308 111.949 241.484 112.378 240.491L112.556 240.472L113.321 248L116.279 247.7L114.22 227.441ZM112.094 235.332C112.417 238.508 111.246 240.756 108.664 241.018C105.983 241.29 104.408 239.162 104.101 236.145C103.791 233.098 104.94 230.632 107.581 230.364C110.123 230.106 111.769 232.137 112.094 235.332Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M94.223 222.216C91.836 221.638 90.0266 222.52 88.6003 224.65L78.3973 239.961L81.5117 240.745L88.0599 230.136L88.2146 230.173L89.1849 242.603L92.2774 243.352L90.4868 227L91.083 226.1C92.2948 224.307 93.3686 224.393 94.8482 225.212L96.1173 223.012C95.8068 222.773 95.0928 222.427 94.223 222.216Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M50.2949 222.45L52.6786 224.482L50.305 227.266L52.5677 229.195L54.9413 226.41L56.6439 227.861L58.1919 226.045L56.4893 224.594L62.3393 217.73C64.1464 215.626 63.4053 213.23 61.5872 211.746C60.8618 211.141 60.2614 210.864 59.9127 210.737L58.7282 212.954C58.9054 213.053 59.2434 213.223 59.6066 213.533C60.3407 214.159 60.7926 214.962 59.6768 216.271L54.2266 222.666L51.8429 220.634L50.2949 222.45Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M47.8683 211.035C45.977 212.57 43.9249 212.251 42.59 210.607C41.299 209.016 41.5394 207.246 43.2763 205.836L50.5405 199.939L48.6666 197.63L41.1246 203.753C38.168 206.154 37.971 209.003 39.9514 211.442C41.4492 213.287 43.1545 213.747 44.8872 213.263L45.0062 213.409L39.1239 218.185L40.9727 220.462L56.7824 207.627L54.9085 205.319L47.8683 211.035Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M43.0967 187.564C41.5097 184.635 38.9446 183.345 36.4369 183.935L37.3317 186.651C38.8551 186.436 40.1178 187.222 40.9232 188.708C42.1359 190.946 41.4995 193.236 38.9497 194.708L33.7767 185.162L32.85 185.664C27.9981 188.293 27.6738 192.223 29.3223 195.266C31.3499 199.007 35.5357 199.928 39.662 197.692C43.832 195.433 45.2426 191.524 43.0967 187.564ZM36.9867 195.76C35.0241 196.688 32.6233 196.202 31.4722 194.078C30.3731 192.05 31.1567 189.906 33.2064 188.784L36.9867 195.76Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M16.79 160.904L17.5486 163.943L13.9984 164.829L14.7185 167.714L18.2686 166.828L18.8105 168.998L21.1258 168.42L20.5839 166.25L29.3339 164.066C32.0279 163.403 32.8173 161.023 32.2007 158.759C31.9623 157.845 31.6345 157.27 31.4248 156.964L29.172 158.08C29.2588 158.263 29.4347 158.598 29.5503 159.062C29.7839 159.997 29.6847 160.914 28.0157 161.33L19.8639 163.365L19.1053 160.326L16.79 160.904Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M30.1022 146.561C29.6567 143.26 27.7156 141.144 25.1617 140.807L25.0355 143.663C26.5361 144.003 27.4382 145.185 27.6643 146.86C28.0047 149.383 26.5977 151.299 23.6916 151.771L22.2394 141.011L21.1949 141.152C15.726 141.89 14.0292 145.45 14.492 148.879C15.0611 153.096 18.6485 155.441 23.2995 154.814C27.9998 154.18 30.7045 151.025 30.1022 146.561ZM21.483 152.059C19.3189 152.231 17.2464 150.925 16.9232 148.531C16.6147 146.244 18.1075 144.518 20.4218 144.196L21.483 152.059Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M28.955 131.216C28.9339 128.69 27.6394 127.279 26.4912 126.722L26.4902 126.603L28.5782 126.585L28.5539 123.682L18.4122 123.767C13.9678 123.804 13.1122 127.311 13.1325 129.737C13.1556 132.501 14.2905 135.037 17.0828 136.008L17.6958 133.209C16.6083 132.781 15.555 131.676 15.5383 129.677C15.5222 127.758 16.5182 126.765 18.2483 126.751L18.3179 126.75C19.4016 126.741 19.3911 127.855 19.7322 130.597C20.0945 133.487 20.8749 136.444 24.345 136.415C27.3477 136.39 28.9793 134.119 28.955 131.216ZM26.5634 130.589C26.5774 132.27 25.8319 133.489 24.3604 133.501C22.7695 133.515 22.191 132.107 21.9479 130.389C21.8106 129.426 21.5329 127.141 21.1018 126.717L23.0705 126.701C24.8801 126.686 26.5426 128.113 26.5634 130.589Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M28.547 118.467L28.9942 115.528L19.6852 114.112C17.6503 113.802 16.4517 112.161 16.706 110.49C16.9543 108.858 18.2076 107.892 19.8492 108.142L29.8857 109.669L30.3314 106.74L20.7078 105.276C18.8892 104.999 17.741 103.688 18.0327 101.771C18.269 100.218 19.3285 99.0715 21.3732 99.3826L31.2229 100.881L31.6701 97.9422L21.5452 96.4016C18.0948 95.8765 16.0814 97.5415 15.6656 100.274C15.335 102.447 16.1287 104.237 17.6302 105.21L17.6062 105.367C15.8546 105.774 14.641 107.008 14.3344 109.023C14.0307 111.018 14.7977 112.654 16.3632 113.536L16.3348 113.723L13.8773 113.349L13.448 116.17L28.547 118.467Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M40.0581 75.5603C41.1483 73.2821 40.605 71.4459 39.8182 70.441L39.8697 70.3334L41.7532 71.2348L43.0065 68.6158L33.858 64.2378C29.8489 62.3193 27.5398 65.0944 26.4925 67.2829C25.2993 69.7763 25.2051 72.5531 27.2872 74.6518L29.0673 72.4061C28.2785 71.5437 27.8175 70.0885 28.6802 68.2857C29.5086 66.5546 30.8394 66.1002 32.4 66.847L32.4628 66.8771C33.4404 67.3449 32.9418 68.3409 32.0441 70.9537C31.1001 73.7096 30.5027 76.7086 33.6329 78.2065C36.3416 79.5028 38.8048 78.1793 40.0581 75.5603ZM38.1845 73.9472C37.4591 75.463 36.2538 76.231 34.9264 75.5958C33.4913 74.909 33.5896 73.3908 34.1258 71.7404C34.4255 70.8146 35.1795 68.6401 34.9784 68.0699L36.7543 68.9197C38.3867 69.7009 39.2532 71.7139 38.1845 73.9472Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M36.6858 50.1548L34.9567 52.7663L31.9058 50.7463L30.2645 53.2252L33.3154 55.2452L32.0804 57.1106L34.0701 58.4281L35.3052 56.5627L42.8248 61.5414C45.1324 63.0812 47.4209 62.0563 48.6749 60.0723C49.1881 59.2792 49.3902 58.6498 49.4745 58.2882L47.1303 57.3801C47.0537 57.5679 46.9252 57.924 46.6617 58.322C46.1292 59.1262 45.3864 59.6718 43.9521 58.7222L36.9465 54.0838L38.6756 51.4722L36.6858 50.1548Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M51.4255 29.8449L56.6274 26.2139L66.7691 40.7431L69.2803 38.9902L59.1386 24.461L64.3486 20.8243L62.8347 18.6555L49.9117 27.6761L51.4255 29.8449Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M86.0892 31.2614C89.2775 30.2968 91.058 28.0441 90.9853 25.469L88.1451 25.7985C88.0487 27.3339 87.0245 28.4125 85.4066 28.902C82.9702 29.6391 80.8553 28.5544 79.9269 25.7604L90.3197 22.6163L90.0145 21.6074C88.4165 16.3254 84.632 15.2161 81.32 16.2181C77.2467 17.4504 75.5014 21.3649 76.8604 25.857C78.2338 30.3967 81.7779 32.5657 86.0892 31.2614ZM79.2915 23.6257C78.778 21.5164 79.7375 19.2627 82.0502 18.563C84.2582 17.8951 86.2 19.0944 86.8862 21.328L79.2915 23.6257Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M101.136 19.4345C101.24 17.0006 102.79 15.6736 104.856 15.7619C106.873 15.8481 108.038 17.2216 107.943 19.4369L107.544 28.7849L110.514 28.9119L110.929 19.2062C111.09 15.4313 109.099 13.3656 105.979 13.2323C103.684 13.1342 102.139 14.133 101.364 15.7221L101.176 15.714L101.282 13.2305L98.4307 13.1086L97.7784 28.3674L100.749 28.4944L101.136 19.4345Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M121.252 32.3511C123.839 33.38 125.484 32.2042 126.343 31.4972L126.574 31.589L125.696 33.7972L128.394 34.8702L135.919 15.948L133.156 14.8493L130.36 21.8805L130.194 21.8143C130.044 20.7382 129.741 18.7557 127.099 17.7049C123.671 16.3417 120.072 18.0457 118.242 22.6469C116.416 27.2388 117.806 30.9806 121.252 32.3511ZM122.799 30.2376C120.332 29.2565 119.912 26.5745 121.043 23.7288C122.164 20.9108 124.262 19.2947 126.757 20.2868C129.168 21.2458 129.679 23.7282 128.499 26.6941C127.313 29.6784 125.183 31.1856 122.799 30.2376Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M138.663 42.2678C141.276 44.3332 144.143 44.5072 146.214 42.9763L144.321 40.8336C143.006 41.6318 141.536 41.4076 140.209 40.3594C138.212 38.7811 137.894 36.4257 139.657 34.0673L148.175 40.7999L148.829 39.973C152.251 35.6435 150.999 31.9038 148.284 29.7582C144.945 27.1194 140.735 27.9239 137.825 31.6059C134.884 35.327 135.129 39.4748 138.663 42.2678ZM141.045 32.326C142.483 30.6994 144.881 30.1992 146.777 31.6974C148.586 33.1278 148.712 35.4067 147.271 37.2461L141.045 32.326Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M147.363 49.7704L149.303 52.0234L156.371 45.9378C157.886 44.6338 159.984 44.861 161.359 46.4584C161.761 46.9256 162.133 47.5244 162.236 47.7506L164.391 45.8951C164.226 45.6431 163.866 45.1791 163.619 44.8928C162.452 43.5365 160.684 43.0379 159.077 43.6864L158.974 43.5658L160.812 41.9828L158.937 39.8052L147.363 49.7704Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M155.089 58.4444L156.547 61.0354L164.754 56.4174C166.547 55.408 168.502 55.9622 169.331 57.4353C170.141 58.8738 169.748 60.4067 168.301 61.221L159.454 66.1999L160.907 68.7821L169.39 64.0081C170.993 63.106 172.706 63.4317 173.656 65.1214C174.427 66.4906 174.298 68.0462 172.496 69.0605L163.813 73.9466L165.271 76.5376L174.197 71.5149C177.238 69.8032 177.799 67.2515 176.443 64.8425C175.365 62.9275 173.637 62.0059 171.856 62.1644L171.777 62.0258C172.907 60.626 173.103 58.9068 172.103 57.1304C171.113 55.3713 169.502 54.5554 167.725 54.8249L167.633 54.6603L169.799 53.4412L168.399 50.9542L155.089 58.4444Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M166.724 81.2303L167.775 84.0113L182.062 78.6122L181.011 75.8312L166.724 81.2303ZM183.746 76.4026C184.108 77.3606 185.155 77.8793 186.066 77.5348C186.978 77.1904 187.429 76.1057 187.067 75.1477C186.701 74.1804 185.649 73.6745 184.737 74.019C183.826 74.3635 183.381 75.4353 183.746 76.4026Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M179.019 89.1086C181.375 88.4915 183.1 89.5817 183.624 91.5824C184.135 93.5351 183.166 95.0532 181.021 95.6149L171.969 97.985L172.722 100.861L182.12 98.4002C185.775 97.4431 187.163 94.9315 186.372 91.9112C185.79 89.6892 184.381 88.5063 182.634 88.2339L182.586 88.0511L184.991 87.4215L184.268 84.6608L169.493 88.5297L170.246 91.4057L179.019 89.1086Z",fill:t?"black":"white","data-v-5a3cc64a":!0}),n.createElement("path",{d:"M189.607 110.122L189.153 107.023L192.774 106.493L192.343 103.551L188.723 104.081L188.399 101.868L186.038 102.213L186.362 104.427L177.438 105.733C174.692 106.125 173.671 108.415 174.06 110.73C174.206 111.663 174.476 112.267 174.654 112.593L177.006 111.706C176.938 111.515 176.796 111.163 176.727 110.691C176.587 109.737 176.777 108.835 178.479 108.586L186.792 107.369L187.246 110.468L189.607 110.122Z",fill:t?"black":"white","data-v-5a3cc64a":!0})),n.createElement("svg",{width:48,height:54,viewBox:"0 0 48 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"arrow","data-v-5a3cc64a":!0},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.8627 0L47.1907 23.897L41.4661 29.4853L27.8284 15.515V53.1911H19.8284V15.348L5.65685 29.5196L0 23.8627L23.8627 0Z",fill:t?"black":"#EAE5E1","data-v-5a3cc64a":!0}))))))),n.createElement("div",{className:"footer-bottom tm-rf-1 tm-lh-copy tm-text tm-inter","data-v-26b507a6":!0},n.createElement("div",{className:"footer-bottom__line","data-v-26b507a6":!0},n.createElement("div",{className:"tm-container","data-v-26b507a6":!0},n.createElement("div",{className:"footer-bottom__row","data-v-26b507a6":!0},n.createElement("div",{className:"footer-bottom__item footer-bottom__item--first","data-v-26b507a6":!0},"2021 Archway Network"),n.createElement("div",{className:"footer-bottom__list","data-v-26b507a6":!0},n.createElement("div",{className:"footer-bottom__item","data-v-26b507a6":!0},"All Rights Reserved"),n.createElement("div",{className:"footer-bottom__item footer-bottom__item--small","data-v-26b507a6":!0},n.createElement("a",{href:"mailto:hello@archway.io",className:"no-bd tm-link tm-link-dark","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"hello@archway.io")),n.createElement("div",{className:"footer-bottom__item footer-bottom__item--small","data-v-26b507a6":!0},n.createElement("a",{target:"_blank",href:"https://www.archway.io/privacy",className:"no-bd tm-link tm-link-dark","data-v-78aa3c22":!0,"data-v-26b507a6":!0},"Privacy Policy")))))),n.createElement("div",{className:"footer-bottom__line","data-v-26b507a6":!0},n.createElement("div",{className:"tm-container","data-v-26b507a6":!0},n.createElement("div",{className:"footer-bottom__row","data-v-26b507a6":!0},n.createElement("div",{className:"footer-bottom__item footer-bottom__item--first tm-rf-1","data-v-26b507a6":!0},n.createElement("svg",{width:467,height:537,viewBox:"0 0 467 537",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo","data-v-143d3aea":!0,"data-v-26b507a6":!0},n.createElement("path",{d:"M432.536 383.128C411.493 350.994 382.034 325.252 347.37 308.707V231.8C347.37 201.699 335.412 172.831 314.128 151.547C292.843 130.262 263.975 118.304 233.874 118.304C203.773 118.304 174.905 130.262 153.62 151.547C132.336 172.831 120.378 201.699 120.378 231.8V308.441C85.307 325.101 55.525 351.133 34.324 383.661V258.798V224.518C34.324 94.2377 137.696 34.87 233.652 34.87C291.377 34.87 345.505 55.6509 381.605 91.8399C415.263 125.587 432.269 170.168 432.181 224.429V258.798L432.536 383.128ZM432.536 501.464H347.547V339.834C361.836 347.904 374.99 357.833 386.667 369.363C409.132 392.125 424.987 420.565 432.536 451.643V501.464ZM313.179 295.031C261.637 278.957 206.422 278.957 154.88 295.031V231.8C154.63 221.248 156.493 210.753 160.358 200.932C164.223 191.11 170.013 182.161 177.388 174.609C184.762 167.058 193.572 161.058 203.299 156.961C213.026 152.864 223.475 150.754 234.029 150.754C244.584 150.754 255.032 152.864 264.76 156.961C274.487 161.058 283.297 167.058 290.671 174.609C298.046 182.161 303.836 191.11 307.701 200.932C311.566 210.753 313.429 221.248 313.179 231.8V295.031ZM313.179 415.498C303.232 404.34 291.038 395.412 277.397 389.298C263.757 383.185 248.977 380.024 234.029 380.024C219.081 380.024 204.302 383.185 190.662 389.298C177.021 395.412 164.827 404.34 154.88 415.498V323.893C206.092 305.778 261.967 305.778 313.179 323.893V415.498ZM120.556 501.641H34.324V452.797C40.1356 429.03 50.7951 406.72 65.6339 387.266C80.4728 367.812 99.1708 351.634 120.556 339.745V501.641ZM466.904 224.474C467.215 75.1441 350.7 0.54599 234.052 0.54599C117.403 0.54599 0.44394 75.2773 0.399536 224.474V522.333C0.399536 525.972 1.8452 529.462 4.41833 532.035C6.99147 534.608 10.4814 536.054 14.1204 536.054H141.559C145.198 536.054 148.688 534.608 151.261 532.035C153.834 529.462 155.279 525.972 155.279 522.333V489.963C155.279 446.625 188.671 408.838 232.009 407.55C242.571 407.277 253.08 409.122 262.917 412.977C272.755 416.831 281.72 422.616 289.286 429.991C296.851 437.366 302.863 446.181 306.966 455.917C311.07 465.653 313.182 476.112 313.179 486.677V522.2C313.179 524.006 313.535 525.793 314.228 527.461C314.92 529.129 315.934 530.643 317.213 531.918C318.492 533.192 320.01 534.202 321.68 534.889C323.349 535.576 325.139 535.927 326.944 535.921H453.139C456.778 535.921 460.268 534.475 462.841 531.902C465.414 529.329 466.86 525.839 466.86 522.2V224.474H466.904Z",fill:t?"rgba(234, 229, 225, 0.5)":"rgba(0, 0, 0, 0.1)","data-v-143d3aea":!0}))),n.createElement("div",{className:"footer-bottom__item tm-rf-1","data-v-26b507a6":!0},n.createElement("p",{"data-v-26b507a6":!0},"The ARCH tokens will not be offered in the United States or to U.S. persons or to residents of certain other prohibited jurisdictions. ",n.createElement("a",{href:"/docs/overview/faq#arch-tokens-will-not-be-offered-in-the-following-prohibited-jurisdictions",className:"tm-link tm-link-external"},"Learn more here")),n.createElement("p",{"data-v-26b507a6":!0},"The information provided in this website is for general informational purposes only. It does not constitute, and should not be considered, a formal offer to sell or a solicitation of an offer to buy any security in any jurisdiction, legal advice, investment advice, or tax advice. If you are in need of legal advice, investment advice or tax advice, please consult with a professional adviser."),n.createElement("p",{"data-v-26b507a6":!0},"The Archway protocol is under development and is subject to change.  As such, the protocol documentation and contents of this website may not reflect the current state of the protocol at any given time.  The protocol documentation and website content are not final and are subject to change."))))))):null}}}]);