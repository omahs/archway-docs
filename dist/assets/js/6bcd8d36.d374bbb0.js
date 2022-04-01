"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[261],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=p?p:f.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),k=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,r.useState)(h),N=w[0],v=w[1],b=[];if(null!=u){var T=k[u];null!=T&&T!==N&&m.some((function(e){return e.value===T}))&&v(T)}var x=function(e){var t=e.currentTarget,n=b.indexOf(t),r=m[n].value;v(r),null!=u&&(y(u,r),setTimeout((function(){var e,n,r,a,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case"ArrowLeft":var a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),s=n(8215),l=["components"],c={sidebar_position:4,title:"Building the NFT dApp"},p=void 0,u={unversionedId:"create/guides/nft-project/dapp",id:"create/guides/nft-project/dapp",isDocsHomePage:!1,title:"Building the NFT dApp",description:"If it's is your first time building an Archway dApp frontend, head over to the Creating Your First dApp guide to learn how to setup your basic project scaffolding. Once you're serving a web page that connects to Keplr, you'll be ready to follow the next steps.",source:"@site/docs/create/guides/nft-project/dapp.mdx",sourceDirName:"create/guides/nft-project",slug:"/create/guides/nft-project/dapp",permalink:"/docs/create/guides/nft-project/dapp",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/nft-project/dapp.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Building the NFT dApp"},sidebar:"mainSidebar",previous:{title:"Minting and sending tokens",permalink:"/docs/create/guides/nft-project/interact"},next:{title:"Node Installation",permalink:"/docs/node/install"}},d=[{value:"Loading NFT the collection",id:"loading-nft-the-collection",children:[]},{value:"Minting from the dApp",id:"minting-from-the-dapp",children:[]},{value:"Transferring NFTs",id:"transferring-nfts",children:[]},{value:"Displaying NFTs",id:"displaying-nfts",children:[]},{value:"Clone it and try yourself",id:"clone-it-and-try-yourself",children:[]}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If it's is your first time building an Archway dApp frontend, head over to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/create/guides/my-first-dapp/dapp"},"Creating Your First dApp")," guide to learn how to setup your basic project scaffolding. Once you're serving a web page that connects to ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/"},"Keplr"),", you'll be ready to follow the next steps."),(0,o.kt)("h2",{id:"loading-nft-the-collection"},"Loading NFT the collection"),(0,o.kt)("p",null,"As we saw in the previous guide, to query a contract we need to know its address on chain. We also need an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SigningCosmWasmClient")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/cosmwasm-stargate")," that's been connected to an Archway network such as ",(0,o.kt)("a",{parentName:"p",href:"https://rpc.constantine-1.archway.tech/"},"Constantine testnet"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// For more on setting up this handler see the "Creating Your First dApp" guide (linked to above):\nconst queryHandler = CosmWasmClient.queryClient.wasm.queryContractSmart;\n// Replace this empty string with your deployed contract address\nconst contract = "";\n')),(0,o.kt)("p",null,"Using the above two variables we can write JavaScript to query the NFT collection for its token ids like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function getNfts () {\n  let entrypoint = {\n    all_tokens: {}\n  };\n  let query = await queryHandler(contract, entrypoint);\n  console.log('All NFTs of contract ' + contract + ':', query);\n  return query;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getNfts")," function returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," object containing an array of all tokens minted by the contract. "),(0,o.kt)("p",null,"Here's an example of calling it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let nfts;\nasync function doGetNfts() {\n  nfts = await getNfts();\n  console.log('All NFT ids', nfts);\n}\ndoGetNfts();\n")),(0,o.kt)("h2",{id:"minting-from-the-dapp"},"Minting from the dApp"),(0,o.kt)("p",null,"To mint from our dApp, we need to assemble the metadata fields for the NFT. We can achieve this by making a web UI with form fields where the NFT creator can add custom traits to their NFT."),(0,o.kt)("p",null,"We also need the ",(0,o.kt)("inlineCode",{parentName:"p"},"calculateFee")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GasPrice")," functions from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cosmjs/stargate"},"@cosmjs/stargate")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const gasPrice = GasPrice.fromString('0.002uconst');\nconst txFee = calculateFee(300000, this.gas.price);\n")),(0,o.kt)("p",null,"We can simplify our remaining task by writing a function which takes the required NFT metadata as parameters. With that in mind, here's what a minting function looks like in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function mintNft (owner = null, tokenId = null, imageUrl = null, name = null, description = null, attributes = []) {\n  // Ensure we collected the required arguments\n  if (!owner || !tokenId || !imageUrl || !name || !description) {\n    console.warn('Error parsing mint arguments', {owner: owner, tokenId: tokenId, imageUrl: imageUrl, name: name, description: description});\n    return;\n  }\n\n  // Prepare Tx\n  let entrypoint = {\n    mint: {\n      token_id: String(nfts.tokens.length),\n      owner: owner,\n      extension: {\n        name: name,\n        description: description,\n        image: imageUrl\n      }\n    }\n  };\n\n  // If the creator used any arbitrary custom attributes, add them to the entrypoint\n  if (attributes.length) {\n    entrypoint.mint.extension.attributes = attributes;\n  }\n\n  try {\n    // Send Tx\n    let tx = await CosmWasmClient.execute(owner, contract, entrypoint, txFee);\n    console.log('Mint Tx', tx);\n    // Refresh the NFT collection to resolve the new token\n    await getNfts();\n  } catch (e) {\n    console.warn('Error executing mint tx', e);\n  }\n}\n")),(0,o.kt)("p",null,"Here's an example of what it might be like to call our ",(0,o.kt)("inlineCode",{parentName:"p"},"mintNft")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Example call:\nasync function doMintNft() {\n  let mintTx = await mintNft(\n    owner = \'archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq\', \n    tokenId = \'2\', \n    imageUrl = "ipfs://QmY8Ei2NQkMg8rCFiUkcXH2NPWPNKMoWLBYDwBeMNsP5sr", \n    name = "Archway NFT #2", \n    description = "Building With NFTs (and dApps)", \n    attributes = [{"trait_type": "tutorial","value": "https://docs.archway.io/docs/create/guides/nft-project/deploy"}]\n  );\n  console.log(\'Mint tx\', mintTx);\n}\ndoMintNft();\n')),(0,o.kt)("h2",{id:"transferring-nfts"},"Transferring NFTs"),(0,o.kt)("p",null,"Now that we can mint from our dApp, the form and entrypoint parameters for transferring NFTs are much simpler. Just like transfers initiated from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@archwayhq/cli"},"Developer CLI"),", we need the recipient's Archway address and the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," we are sending to them. We also need to know the address of the current owner, and the references to the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," address and ",(0,o.kt)("inlineCode",{parentName:"p"},"txFee")," that we set up earlier."),(0,o.kt)("p",null,"Here's what a JavaScript function to transfer an Archway NFT looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function transferNft (owner = null, recipient = null, tokenId = null) {\n  if (!owner || !recipient || !tokenId) {\n    console.warn('Error parsing transfer_nft arguments', {owner: owner, recipient: recipient, tokenId: tokenId});\n    return;\n  }\n  // Prepare Tx\n  let entrypoint = {\n    transfer_nft: {\n      recipient: recipient,\n      token_id: tokenId\n    }\n  };\n  // Send Tx\n  try {\n    let tx = await CosmWasmClient.execute(owner, contract, entrypoint, txFee);\n    console.log('Transfer Tx', tx);\n    // Refresh the NFT collection\n    await getNfts();\n  } catch (e) {\n    console.warn(\"Error executing NFT transfer\", e);\n  }\n}\n")),(0,o.kt)("p",null,"Calling the above function might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Example call:\nasync function doTransferNft() {\n  let transferTx = await transferNft(\n    owner = 'archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq', \n    recipient = 'archway1y00hm50lffnxt5m0kuy9afk83gyuye684zwcr5', \n    tokenId = '2'\n  );\n  console.log('Transfer tx', transferTx);\n}\ndoTransferNft();\n")),(0,o.kt)("h2",{id:"displaying-nfts"},"Displaying NFTs"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getNfts")," function we created returns all token ids minted by the contract, but one more step is needed before we can display NFTs from our collection in our dApp. To read an NFT's metadata we call the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/v0.9.3/contracts/cw721-base/src/query.rs#L33-L39"},"nft_info")," entrypoint we executed from CLI in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/create/guides/nft-project/interact"},"previous lesson"),"."),(0,o.kt)("p",null,"Here's what loading token metadata looks like using JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function getTokenMeta (tokenId = false) {\n  if (!tokenId || typeof tokenId !== 'string') {\n    console.warn('Invalid token ID. Token ID must be a string, but got ' + typeof tokenId);\n    return;\n  }\n  let entrypoint = {\n    nft_info: {\n      token_id: tokenId\n    }\n  };\n  let query = await this.handlers.query(contract, entrypoint);\n  console.log('NFT contract succesfully  queried for token ID ' + tokenId, query);\n  return query;\n}\n")),(0,o.kt)("p",null,"An example of calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"getTokenMeta")," function might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Example call:\nasync function doGetTokenMeta() {\n  let token2 = await getTokenMeta('2');\n  console.log('Metadata for token_id: \"2\"', token2);\n}\ndoGetTokenMeta();\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If your NFT image was uploaded to IPFS, using an IPFS url like ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs://...")," your web application will need to resolve the image source from an IPFS gateway (",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/ipfs-gateway/"},"read more about IPFS gateways and providers"),")."))),(0,o.kt)("h2",{id:"clone-it-and-try-yourself"},"Clone it and try yourself"),(0,o.kt)("p",null,"This guide focused on core features of Archway NFTs, some basic aspects of web development haven't been looked at in detail, but you'll find working example frontends for this project in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/dApp-examples"},"dApp examples repository"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"vue",label:"Vue.js",default:!0,mdxType:"TabItem"},(0,o.kt)("a",{href:"https://github.com/archway-network/dApp-examples/tree/main/vuejs/nft-basic",target:"_blank"},"Vue Basic NFT")),(0,o.kt)(s.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,o.kt)("p",null,"React version coming soon..."))))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);