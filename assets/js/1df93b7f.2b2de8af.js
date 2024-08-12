"use strict";(self.webpackChunksummary_of_technical_books=self.webpackChunksummary_of_technical_books||[]).push([[3237],{1038:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(2263),r=a(7372),l=a(3692),c=a(512);const m="heroBanner_O2Nl",i="buttons_uVDL";var d=a(5893);const h=function(){var e=(0,n.Z)().siteConfig;return(0,d.jsx)("header",{className:(0,c.Z)("hero hero--primary",m),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:"hero__title",children:e.title}),(0,d.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,d.jsx)("div",{className:i,children:(0,d.jsx)(l.Z,{className:"button button--secondary button--lg",to:"/docs/intro",children:"\ud83d\udc49 \uc694\uc57d\ud55c \ucc45 \ub0b4\uc6a9\uc744 \ubcf4\ub7ec\uac00\uae30 \ud83d\udc48"})})]})})};const o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var s,f=new Uint8Array(16);function g(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(f)}for(var p=[],E=0;E<256;++E)p.push((E+256).toString(16).slice(1));function u(e,t=0){return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}const x=function(e,t,a){if(o.randomUUID&&!t&&!e)return o.randomUUID();var n=(e=e||{}).random||(e.rng||g)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var r=0;r<16;++r)t[a+r]=n[r];return t}return u(n)};var w="https://saseungmin.github.io/summary_of_technical_books/docs",v="https://github.com/saseungmin/summary_of_technical_books/tree/main/summarize_books_in_markdown";const R=[[{link:v+"/%ED%95%A8%EC%88%98%ED%98%95%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8",bookName:"\ud568\uc218\ud615 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",imgName:"functional-javascript.jpeg"},{link:w+"/agile/nature-of-software-development/table-of-contents",bookName:"The Nature of Software Development",imgName:"the-nature-of-software-development.jpeg"},{link:w+"/agile/clean-agile/table-of-contents",bookName:"\ud074\ub9b0 \uc560\uc790\uc77c: \uc0c8\ub85c\uc6b4 \uc138\ub300\ub97c \uc704\ud55c \uc560\uc790\uc77c \uac00\uce58\uc640 \uc2e4\ucc9c",imgName:"Clean-Agile.jpeg"}],[{link:w+"/object-oriented/facts-and-misunderstandings/table-of-contents",bookName:"\uac1d\uccb4\uc9c0\ud5a5\uc758 \uc0ac\uc2e4\uacfc \uc624\ud574: \uc5ed\ud560, \ucc45\uc784, \ud611\ub825 \uad00\uc810\uc5d0\uc11c \ubcf8 \uac1d\uccb4\uc9c0\ud5a5",imgName:"essence-of-object-orientation.jpeg"},{link:w+"/object-oriented/design-in-ruby/table-of-contents",bookName:"\ub8e8\ube44\ub85c \ubc30\uc6b0\ub294 \uac1d\uccb4\uc9c0\ud5a5 \ub514\uc790\uc778",imgName:"practical-object-oriented-design-in-ruby.jpeg"},{link:w+"/object-oriented/elegant-object/table-of-contents",bookName:"\uc5d8\ub9ac\uac15\ud2b8 \uc624\ube0c\uc81d\ud2b8",imgName:"elegant-object.jpeg"}],[{link:w+"/object-oriented/object/table-of-contents",bookName:"\uc624\ube0c\uc81d\ud2b8",imgName:"objects.jpeg"},{link:w+"/test/growing-object-oriented-software-guided-by-tests/table-of-contents",bookName:"\ud14c\uc2a4\ud2b8 \uc8fc\ub3c4 \uac1c\ubc1c\ub85c \ubc30\uc6b0\ub294 \uac1d\uccb4 \uc9c0\ud5a5 \uc124\uacc4\uc640 \uc2e4\ucc9c",imgName:"growing-object-oriented-software-guided-by-tests.jpeg"},{link:w+"/agile/lean-ux/table-of-contents",bookName:"\ub9b0 UX(LEAN UX)",imgName:"Lean-UX.jpeg"}],[{link:w+"/javascript/javascript-pattern-and-test/table-of-contents",bookName:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud328\ud134\uacfc \ud14c\uc2a4\ud2b8",imgName:"javascript-pattern-and-test.jpeg"},{link:w+"/javascript/modern-javascript/table-of-contents",bookName:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub529\uc758 \uae30\uc220",imgName:"modern-javascript.jpeg"},{link:"https://github.com/saseungmin/Node.js-tutorial",bookName:"Node.js \uad50\uacfc\uc11c",imgName:"node-js-textbook.jpeg"}],[{link:"https://github.com/saseungmin/react-tutorial",bookName:"\ub9ac\uc561\ud2b8\ub97c \ub2e4\ub8e8\ub294 \uae30\uc220",imgName:"react-book.jpeg"},{link:w+"/javascript/you-dont-know-js/table-of-contents",bookName:"You Don\u2019t Know JS \ud0c0\uc785\uacfc \ubb38\ubc95, \uc2a4\ucf54\ud504\uc640 \ud074\ub85c\uc800",imgName:"you-dont-know-js-1.jpeg"},{link:w+"/typescript/do-it-typescript/table-of-contents",bookName:"Do it! \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud504\ub85c\uadf8\ub798\ubc0d",imgName:"do-it-typescript.jpeg"}],[{link:w+"/etc/pro-git-2/table-of-contents",bookName:"\ud504\ub85c Git 2\ud310: \uadf8\ub9bc\uc73c\ub85c \uc774\ud574\ud558\ub294 Git\uc758 \uc791\ub3d9 \uc6d0\ub9ac\uc640 \uc0ac\uc6a9\ubc95",imgName:"pro-git-2e.jpeg"},{link:w+"/javascript/core-javascript/table-of-contents",bookName:"\ucf54\uc5b4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",imgName:"core-javascript.jpeg"},{link:v+"/%EC%89%BD%EA%B2%8C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",bookName:"\uc27d\uac8c \ubc30\uc6b0\ub294 \uc54c\uace0\ub9ac\uc998",imgName:"algorism-book.jpeg"}],[{link:w+"/agile/growing-up-together/table-of-contents",bookName:"\ud568\uaed8 \uc790\ub77c\uae30",imgName:"thinking-together.jpeg"},{link:v+"/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81%202%ED%8C%90",bookName:"\ub9ac\ud329\ud130\ub9c1 2\ud310",imgName:"refactoring.jpeg"},{link:w+"/functional/in-scala/table-of-contents",bookName:"\uc2a4\uce7c\ub77c\ub85c \ubc30\uc6b0\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d",imgName:"functional-programming-in-scala.jpeg"}],[{link:w+"/clean/clean-code/table-of-contents",bookName:"\ud074\ub9b0 \ucf54\ub4dc",imgName:"clean-code.jpeg"},{link:w+"/etc/pragmatic-programmer/table-of-contents",bookName:"\uc2e4\uc6a9\uc8fc\uc758 \ud504\ub85c\uadf8\ub798\uba38 20\uc8fc\ub144 \uae30\ub150\ud310",imgName:"pragmatic-programmer.jpeg"},{link:w+"/etc/inspired/table-of-contents",bookName:"\uc778\uc2a4\ud30c\uc774\uc5b4\ub4dc",imgName:"inspired.jpeg"}],[{link:w+"/test/test-driven-development/table-of-contents",bookName:"\ud14c\uc2a4\ud2b8 \uc8fc\ub3c4 \uac1c\ubc1c",imgName:"tdd.jpeg"},{link:w+"/test/unit-test/table-of-contents",bookName:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8",imgName:"unit-test.jpeg"},{link:w+"/typescript/effective-typescript/table-of-contents",bookName:"\uc774\ud399\ud2f0\ube0c \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8",imgName:"effective-typescript.jpeg"},{link:"https://github.com/saseungmin/learning_rust",bookName:"\ub7ec\uc2a4\ud2b8 \ud504\ub85c\uadf8\ub798\ubc0d",imgName:"rust-programming.jpeg"}]];var b=a(4996);const j="bookInfoWrapper_aB1X";const k=function(e){var t=e.link,a=e.bookName,n=e.imgName,r=(0,b.ZP)("/img/books/"+n);return(0,d.jsxs)("div",{className:(0,c.Z)("col col--4",j),children:[(0,d.jsx)("div",{children:(0,d.jsx)("h4",{children:(0,d.jsx)("a",{href:t,children:a})})}),(0,d.jsx)("div",{children:(0,d.jsx)("a",{href:t,children:(0,d.jsx)("img",{src:r,width:"300px",height:"300px",alt:a})})})]})},N="rowSummaryBooksWrapper_tMYF";const y=function(e){var t=e.rowBooks;return(0,d.jsx)("div",{className:(0,c.Z)("row",N),children:t.map((function(e){var t=e.link,a=e.bookName,n=e.imgName;return(0,d.jsx)(k,{link:t,bookName:a,imgName:n},x())}))})};var P,M=a(7294),A=["title","titleId"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Z.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const B=function(e){var t=e.title,a=e.titleId,n=_(e,A);return M.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:1088,height:687.962,viewBox:"0 0 1088 687.962","aria-labelledby":a},n),t?M.createElement("title",{id:a},t):null,P||(P=M.createElement("g",{"data-name":"Group 12"},M.createElement("g",{"data-name":"Group 11"},M.createElement("path",{fill:"#3f3d56",d:"M961.81 454.442c-5.27 45.15-16.22 81.4-31.25 110.31-20 38.52-54.21 54.04-84.77 70.28a193 193 0 0 1-27.46 11.94c-55.61 19.3-117.85 14.18-166.74 3.99a657 657 0 0 0-104.09-13.16q-14.97-.675-29.97-.67c-15.42.02-293.07 5.29-360.67-131.57-16.69-33.76-28.13-75-32.24-125.27-11.63-142.12 52.29-235.46 134.74-296.47 155.97-115.41 369.76-110.57 523.43 7.88 102.36 78.9 198.2 198.31 179.02 362.74","data-name":"Path 83"}),M.createElement("path",{fill:"#f2f2f2",d:"M930.56 564.752c-20 38.52-47.21 64.04-77.77 80.28a193 193 0 0 1-27.46 11.94c-55.61 19.3-117.85 14.18-166.74 3.99a657 657 0 0 0-104.09-13.16q-14.97-.675-29.97-.67-23.13.03-46.25 1.72c-100.17 7.36-253.82-6.43-321.42-143.29L326 177.962l62.95 161.619 20.09 51.59 55.37-75.98L493 275.962l130.2 149.27 36.8-81.27 254.78 207.919 14.21 11.59Z","data-name":"Path 84"}),M.createElement("path",{d:"m302 282.962 26-57 36 83-31-60Z","data-name":"Path 85",opacity:.1}),M.createElement("path",{d:"M554.5 647.802q-14.97-.675-29.97-.67l-115.49-255.96Z","data-name":"Path 86",opacity:.1}),M.createElement("path",{d:"M464.411 315.191 493 292.962l130 150-132-128Z","data-name":"Path 87",opacity:.1}),M.createElement("path",{d:"M852.79 645.032a193 193 0 0 1-27.46 11.94L623.2 425.232Z","data-name":"Path 88",opacity:.1}),M.createElement("circle",{cx:3,cy:3,r:3,fill:"#f2f2f2","data-name":"Ellipse 11",transform:"translate(479 98.962)"}),M.createElement("circle",{cx:3,cy:3,r:3,fill:"#f2f2f2","data-name":"Ellipse 12",transform:"translate(396 201.962)"}),M.createElement("circle",{cx:2,cy:2,r:2,fill:"#f2f2f2","data-name":"Ellipse 13",transform:"translate(600 220.962)"}),M.createElement("circle",{cx:2,cy:2,r:2,fill:"#f2f2f2","data-name":"Ellipse 14",transform:"translate(180 265.962)"}),M.createElement("circle",{cx:2,cy:2,r:2,fill:"#f2f2f2","data-name":"Ellipse 15",transform:"translate(612 96.962)"}),M.createElement("circle",{cx:2,cy:2,r:2,fill:"#f2f2f2","data-name":"Ellipse 16",transform:"translate(736 192.962)"}),M.createElement("circle",{cx:2,cy:2,r:2,fill:"#f2f2f2","data-name":"Ellipse 17",transform:"translate(858 344.962)"}),M.createElement("path",{fill:"#f2f2f2",d:"M306 121.222h-2.76v-2.76h-1.48v2.76H299v1.478h2.76v2.759h1.48V122.7H306Z","data-name":"Path 89"}),M.createElement("path",{fill:"#f2f2f2",d:"M848 424.222h-2.76v-2.76h-1.48v2.76H841v1.478h2.76v2.759h1.48V425.7H848Z","data-name":"Path 90"}),M.createElement("path",{fill:"#3f3d56",d:"M1088 613.962c0 16.569-243.557 74-544 74s-544-57.431-544-74 243.557 14 544 14 544-30.568 544-14","data-name":"Path 91"}),M.createElement("path",{d:"M1088 613.962c0 16.569-243.557 74-544 74s-544-57.431-544-74 243.557 14 544 14 544-30.568 544-14","data-name":"Path 92",opacity:.1}),M.createElement("ellipse",{cx:544,cy:30,fill:"#3f3d56","data-name":"Ellipse 18",rx:544,ry:30,transform:"translate(0 583.962)"}),M.createElement("path",{fill:"#ff6584",d:"M568 571.962c0 33.137-14.775 24-33 24s-33 9.137-33-24 33-96 33-96 33 62.863 33 96","data-name":"Path 93"}),M.createElement("path",{d:"M550 584.641c0 15.062-6.716 10.909-15 10.909s-15 4.153-15-10.909 15-43.636 15-43.636 15 28.576 15 43.636","data-name":"Path 94",opacity:.1}),M.createElement("rect",{width:92,height:18,fill:"#2f2e41","data-name":"Rectangle 97",rx:9,transform:"translate(489 604.962)"}),M.createElement("rect",{width:92,height:18,fill:"#2f2e41","data-name":"Rectangle 98",rx:9,transform:"translate(489 586.962)"}),M.createElement("path",{fill:"#3f3d56",d:"M137 490.528c0 55.343 34.719 100.126 77.626 100.126","data-name":"Path 95"}),M.createElement("path",{fill:"#6c63ff",d:"M214.626 590.654c0-55.965 38.745-101.251 86.626-101.251","data-name":"Path 96"}),M.createElement("path",{fill:"#6c63ff",d:"M165.125 495.545c0 52.57 22.14 95.109 49.5 95.109","data-name":"Path 97"}),M.createElement("path",{fill:"#3f3d56",d:"M214.626 590.654c0-71.511 44.783-129.377 100.126-129.377","data-name":"Path 98"}),M.createElement("path",{fill:"#a8a8a8",d:"M198.3 591.36s11.009-.339 14.326-2.7 16.934-5.183 17.757-1.395 16.544 18.844 4.115 18.945-28.879-1.936-32.19-3.953-4.008-10.897-4.008-10.897","data-name":"Path 99"}),M.createElement("path",{d:"M234.716 604.89c-12.429.1-28.879-1.936-32.19-3.953-2.522-1.536-3.527-7.048-3.863-9.591l-.368.014s.7 8.879 4.009 10.9 19.761 4.053 32.19 3.953c3.588-.029 4.827-1.305 4.759-3.2-.498 1.142-1.867 1.855-4.537 1.877","data-name":"Path 100",opacity:.2}),M.createElement("path",{fill:"#3f3d56",d:"M721.429 527.062c0 38.029 23.857 68.8 53.341 68.8","data-name":"Path 101"}),M.createElement("path",{fill:"#6c63ff",d:"M774.769 595.863c0-38.456 26.623-69.575 59.525-69.575","data-name":"Path 102"}),M.createElement("path",{fill:"#6c63ff",d:"M740.755 530.509c0 36.124 15.213 65.354 34.014 65.354","data-name":"Path 103"}),M.createElement("path",{fill:"#3f3d56",d:"M774.769 595.863c0-49.139 30.773-88.9 68.8-88.9","data-name":"Path 104"}),M.createElement("path",{fill:"#a8a8a8",d:"M763.548 596.348s7.565-.233 9.844-1.856 11.636-3.562 12.2-.958 11.368 12.949 2.828 13.018-19.844-1.33-22.119-2.716-2.753-7.488-2.753-7.488","data-name":"Path 105"}),M.createElement("path",{d:"M788.574 605.645c-8.54.069-19.844-1.33-22.119-2.716-1.733-1.056-2.423-4.843-2.654-6.59l-.253.01s.479 6.1 2.755 7.487 13.579 2.785 22.119 2.716c2.465-.02 3.317-.9 3.27-2.2-.343.788-1.283 1.278-3.118 1.293","data-name":"Path 106",opacity:.2}),M.createElement("path",{fill:"#a8a8a8",d:"M893.813 618.699s11.36-1.729 14.5-4.591 16.89-7.488 18.217-3.667 19.494 17.447 6.633 19.107-30.153 1.609-33.835-.065-5.515-10.784-5.515-10.784","data-name":"Path 107"}),M.createElement("path",{d:"M933.228 628.154c-12.86 1.659-30.153 1.609-33.835-.065-2.8-1.275-4.535-6.858-5.2-9.45l-.379.061s1.833 9.109 5.516 10.783 20.975 1.725 33.835.065c3.712-.479 4.836-1.956 4.529-3.906-.375 1.246-1.703 2.156-4.466 2.512","data-name":"Path 108",opacity:.2}),M.createElement("path",{fill:"#a8a8a8",d:"M614.26 617.881s9.587-1.459 12.237-3.875 14.255-6.32 15.374-3.095 16.452 14.725 5.6 16.125-25.448 1.358-28.555-.055-4.656-9.1-4.656-9.1","data-name":"Path 109"}),M.createElement("path",{d:"M647.524 625.856c-10.853 1.4-25.448 1.358-28.555-.055-2.367-1.076-3.827-5.788-4.39-7.976l-.32.051s1.547 7.687 4.655 9.1 17.7 1.456 28.555.055c3.133-.4 4.081-1.651 3.822-3.3-.314 1.057-1.435 1.825-3.767 2.125","data-name":"Path 110",opacity:.2}),M.createElement("path",{fill:"#a8a8a8",d:"M122.389 613.09s7.463-1.136 9.527-3.016 11.1-4.92 11.969-2.409 12.808 11.463 4.358 12.553-19.811 1.057-22.23-.043-3.624-7.085-3.624-7.085","data-name":"Path 111"}),M.createElement("path",{d:"M148.285 619.302c-8.449 1.09-19.811 1.057-22.23-.043-1.842-.838-2.979-4.506-3.417-6.209l-.249.04s1.2 5.984 3.624 7.085 13.781 1.133 22.23.043c2.439-.315 3.177-1.285 2.976-2.566-.246.818-1.119 1.416-2.934 1.65","data-name":"Path 112",opacity:.2}),M.createElement("path",{d:"M383.7 601.318c0 30.22-42.124 20.873-93.7 20.873s-93.074 9.347-93.074-20.873 42.118-36.793 93.694-36.793 93.08 6.573 93.08 36.793","data-name":"Path 113",opacity:.1}),M.createElement("path",{fill:"#3f3d56",d:"M383.7 593.881c0 30.22-42.124 20.873-93.7 20.873s-93.074 9.347-93.074-20.873 42.114-36.8 93.69-36.8 93.084 6.576 93.084 36.8","data-name":"Path 114"})),M.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M360.175 475.732h91.791v37.153h-91.791Z","data-name":"Path 40"}),M.createElement("path",{fill:"#3ecc5f",fillRule:"evenodd",d:"M277.126 597.026a21.83 21.83 0 0 1-18.908-10.927 21.829 21.829 0 0 0 18.908 32.782h21.855v-21.855Z","data-name":"Path 41"}),M.createElement("path",{fill:"#3ecc5f",fillRule:"evenodd",d:"m375.451 481.607 76.514-4.782v-10.928a21.854 21.854 0 0 0-21.855-21.855h-98.347l-2.732-4.735a3.154 3.154 0 0 0-5.464 0l-2.732 4.732-2.732-4.732a3.154 3.154 0 0 0-5.464 0l-2.732 4.732-2.731-4.732a3.154 3.154 0 0 0-5.464 0l-2.732 4.735h-.071l-4.526-4.525a3.153 3.153 0 0 0-5.276 1.414l-1.5 5.577-5.674-1.521a3.154 3.154 0 0 0-3.863 3.864l1.52 5.679-5.575 1.494a3.155 3.155 0 0 0-1.416 5.278l4.526 4.526v.07l-4.735 2.731a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.732a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.731a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.727a3.154 3.154 0 0 0 0 5.464l4.735 2.736-4.735 2.732a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.732a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.731a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.732a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.731a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.731a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.735a3.154 3.154 0 0 0 0 5.464l4.732 2.732-4.732 2.728a3.154 3.154 0 0 0 0 5.464l4.732 2.732a21.854 21.854 0 0 0 21.858 21.855h131.13a21.854 21.854 0 0 0 21.855-21.855v-87.42l-76.514-4.782a11.632 11.632 0 0 1 0-23.219","data-name":"Path 42"}),M.createElement("path",{fill:"#3ecc5f",fillRule:"evenodd",d:"M408.255 618.882h32.782v-43.71h-32.782Z","data-name":"Path 43"}),M.createElement("path",{fill:"#44d860",fillRule:"evenodd",d:"M462.893 591.563a5 5 0 0 0-.7.07c-.042-.164-.081-.329-.127-.493a5.457 5.457 0 1 0-5.4-9.372q-.181-.185-.366-.367a5.454 5.454 0 1 0-9.384-5.4c-.162-.046-.325-.084-.486-.126a5.467 5.467 0 1 0-10.788 0c-.162.042-.325.08-.486.126a5.457 5.457 0 1 0-9.384 5.4 21.843 21.843 0 1 0 36.421 21.02 5.452 5.452 0 1 0 .7-10.858","data-name":"Path 44"}),M.createElement("path",{fill:"#3ecc5f",fillRule:"evenodd",d:"M419.183 553.317h32.782v-21.855h-32.782Z","data-name":"Path 45"}),M.createElement("path",{fill:"#44d860",fillRule:"evenodd",d:"M462.893 545.121a2.732 2.732 0 1 0 0-5.464 3 3 0 0 0-.349.035c-.022-.082-.04-.164-.063-.246a2.733 2.733 0 0 0-1.052-5.253 2.7 2.7 0 0 0-1.648.566q-.09-.093-.184-.184a2.7 2.7 0 0 0 .553-1.633 2.732 2.732 0 0 0-5.245-1.07 10.928 10.928 0 1 0 0 21.031 2.732 2.732 0 0 0 5.245-1.07 2.7 2.7 0 0 0-.553-1.633q.093-.09.184-.184a2.7 2.7 0 0 0 1.648.566 2.732 2.732 0 0 0 1.052-5.253q.033-.122.063-.246a3 3 0 0 0 .349.035","data-name":"Path 46"}),M.createElement("path",{fillRule:"evenodd",d:"M320.836 479.556a2.73 2.73 0 0 1-2.732-2.732 8.2 8.2 0 0 0-16.391 0 2.732 2.732 0 0 1-5.464 0 13.66 13.66 0 0 1 27.319 0 2.73 2.73 0 0 1-2.732 2.732","data-name":"Path 47"}),M.createElement("path",{fill:"#ffff50",fillRule:"evenodd",d:"M364.546 618.881h65.565a21.854 21.854 0 0 0 21.855-21.855v-76.492h-65.565a21.854 21.854 0 0 0-21.855 21.855Z","data-name":"Path 48"}),M.createElement("path",{fillRule:"evenodd",d:"M435.596 554.41h-54.681a1.093 1.093 0 1 1 0-2.185h54.681a1.093 1.093 0 0 1 0 2.185m0 21.855h-54.681a1.093 1.093 0 1 1 0-2.186h54.681a1.093 1.093 0 0 1 0 2.186m0 21.855h-54.681a1.093 1.093 0 1 1 0-2.185h54.681a1.093 1.093 0 0 1 0 2.185m0-54.434h-54.681a1.093 1.093 0 1 1 0-2.185h54.681a1.093 1.093 0 0 1 0 2.185m0 21.652h-54.681a1.093 1.093 0 1 1 0-2.186h54.681a1.093 1.093 0 0 1 0 2.186m0 21.855h-54.681a1.093 1.093 0 1 1 0-2.186h54.681a1.093 1.093 0 0 1 0 2.186m16.369-100.959c-.013 0-.024-.007-.037-.005-3.377.115-4.974 3.492-6.384 6.472-1.471 3.114-2.608 5.139-4.473 5.078-2.064-.074-3.244-2.406-4.494-4.874-1.436-2.835-3.075-6.049-6.516-5.929-3.329.114-4.932 3.053-6.346 5.646-1.5 2.762-2.529 4.442-4.5 4.364-2.106-.076-3.225-1.972-4.52-4.167-1.444-2.443-3.112-5.191-6.487-5.1-3.272.113-4.879 2.606-6.3 4.808-1.5 2.328-2.552 3.746-4.551 3.662-2.156-.076-3.27-1.65-4.558-3.472-1.447-2.047-3.077-4.363-6.442-4.251-3.2.109-4.807 2.153-6.224 3.954-1.346 1.709-2.4 3.062-4.621 2.977a1.094 1.094 0 0 0-.079 2.186c3.3.11 4.967-1.967 6.417-3.81 1.286-1.635 2.4-3.045 4.582-3.12 2.1-.09 3.091 1.218 4.584 3.327 1.417 2 3.026 4.277 6.263 4.394 3.391.114 5.022-2.42 6.467-4.663 1.292-2 2.406-3.734 4.535-3.807 1.959-.073 3.026 1.475 4.529 4.022 1.417 2.4 3.023 5.121 6.324 5.241 3.415.118 5.064-2.863 6.5-5.5 1.245-2.282 2.419-4.437 4.5-4.509 1.959-.046 2.981 1.743 4.492 4.732 1.412 2.79 3.013 5.95 6.365 6.071h.185c3.348 0 4.937-3.36 6.343-6.331 1.245-2.634 2.423-5.114 4.444-5.216Z","data-name":"Path 49"}),M.createElement("path",{fill:"#3ecc5f",fillRule:"evenodd",d:"M342.691 618.882h43.71v-43.71h-43.71Z","data-name":"Path 50"}),M.createElement("g",{"data-name":"Group 8",transform:"rotate(-14.98 2188.845 -1120.376)"},M.createElement("rect",{width:92.361,height:36.462,fill:"#d8d8d8","data-name":"Rectangle 3",rx:2}),M.createElement("g",{fill:"#4a4a4a","data-name":"Group 2",transform:"translate(1.531 23.03)"},M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 4",rx:1,transform:"translate(16.797)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 5",rx:1,transform:"translate(23.12)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 6",rx:1,transform:"translate(29.444)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 7",rx:1,transform:"translate(35.768)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 8",rx:1,transform:"translate(42.091)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 9",rx:1,transform:"translate(48.415)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 10",rx:1,transform:"translate(54.739)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 11",rx:1,transform:"translate(61.063)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 12",rx:1,transform:"translate(67.386)"}),M.createElement("path",{fillRule:"evenodd",d:"M1.093 0h13.425a1.093 1.093 0 0 1 1.093 1.093v3.15a1.093 1.093 0 0 1-1.093 1.093H1.093A1.093 1.093 0 0 1 0 4.243v-3.15A1.093 1.093 0 0 1 1.093 0M75 0h13.426a1.093 1.093 0 0 1 1.093 1.093v3.15a1.093 1.093 0 0 1-1.093 1.093H75a1.093 1.093 0 0 1-1.093-1.093v-3.15A1.093 1.093 0 0 1 75 0","data-name":"Path 51"})),M.createElement("g",{fill:"#4a4a4a","data-name":"Group 3",transform:"translate(1.531 10.261)"},M.createElement("path",{fillRule:"evenodd",d:"M1.093 0h5.125A1.093 1.093 0 0 1 7.31 1.093v3.149a1.093 1.093 0 0 1-1.092 1.093H1.093A1.093 1.093 0 0 1 0 4.242V1.093A1.093 1.093 0 0 1 1.093 0","data-name":"Path 52"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 13",rx:1,transform:"translate(8.299)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 14",rx:1,transform:"translate(14.623)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 15",rx:1,transform:"translate(20.947)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 16",rx:1,transform:"translate(27.271)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 17",rx:1,transform:"translate(33.594)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 18",rx:1,transform:"translate(39.918)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 19",rx:1,transform:"translate(46.242)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 20",rx:1,transform:"translate(52.565)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 21",rx:1,transform:"translate(58.888)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 22",rx:1,transform:"translate(65.212)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 23",rx:1,transform:"translate(71.536)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 24",rx:1,transform:"translate(77.859)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 25",rx:1,transform:"translate(84.183)"})),M.createElement("g",{fill:"#4a4a4a","data-name":"Group 4",transform:"rotate(180 45.525 4.773)"},M.createElement("path",{fillRule:"evenodd",d:"M1.093 0h5.126a1.093 1.093 0 0 1 1.093 1.093v3.15a1.093 1.093 0 0 1-1.093 1.093H1.093A1.093 1.093 0 0 1 0 4.243v-3.15A1.093 1.093 0 0 1 1.093 0","data-name":"Path 53"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 26",rx:1,transform:"translate(8.299)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 27",rx:1,transform:"translate(14.623)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 28",rx:1,transform:"translate(20.947)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 29",rx:1,transform:"translate(27.271)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 30",rx:1,transform:"translate(33.594)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 31",rx:1,transform:"translate(39.918)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 32",rx:1,transform:"translate(46.242)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 33",rx:1,transform:"translate(52.565)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 34",rx:1,transform:"translate(58.889)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 35",rx:1,transform:"translate(65.213)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 36",rx:1,transform:"translate(71.537)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 37",rx:1,transform:"translate(77.86)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 38",rx:1,transform:"translate(84.183)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 39",rx:1,transform:"translate(8.299)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 40",rx:1,transform:"translate(14.623)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 41",rx:1,transform:"translate(20.947)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 42",rx:1,transform:"translate(27.271)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 43",rx:1,transform:"translate(33.594)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 44",rx:1,transform:"translate(39.918)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 45",rx:1,transform:"translate(46.242)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 46",rx:1,transform:"translate(52.565)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 47",rx:1,transform:"translate(58.889)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 48",rx:1,transform:"translate(65.213)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 49",rx:1,transform:"translate(71.537)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 50",rx:1,transform:"translate(77.86)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 51",rx:1,transform:"translate(84.183)"})),M.createElement("g",{fill:"#4a4a4a","data-name":"Group 6"},M.createElement("path",{fillRule:"evenodd",d:"M2.624 16.584h7.3a1.093 1.093 0 0 1 1.092 1.093v3.15a1.093 1.093 0 0 1-1.093 1.093h-7.3a1.093 1.093 0 0 1-1.092-1.093v-3.149a1.093 1.093 0 0 1 1.093-1.094","data-name":"Path 54"}),M.createElement("g",{"data-name":"Group 5",transform:"translate(12.202 16.584)"},M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 52",rx:1}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 53",rx:1,transform:"translate(6.324)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 54",rx:1,transform:"translate(12.647)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 55",rx:1,transform:"translate(18.971)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 56",rx:1,transform:"translate(25.295)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 57",rx:1,transform:"translate(31.619)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 58",rx:1,transform:"translate(37.942)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 59",rx:1,transform:"translate(44.265)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 60",rx:1,transform:"translate(50.589)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 61",rx:1,transform:"translate(56.912)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 62",rx:1,transform:"translate(63.236)"})),M.createElement("path",{fillRule:"evenodd",d:"M83.053 16.584h6.906a1.093 1.093 0 0 1 1.091 1.093v3.15a1.093 1.093 0 0 1-1.091 1.093h-6.907a1.093 1.093 0 0 1-1.093-1.093v-3.149a1.093 1.093 0 0 1 1.093-1.094Z","data-name":"Path 55"})),M.createElement("g",{fill:"#4a4a4a","data-name":"Group 7",transform:"translate(1.531 29.627)"},M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 63",rx:1}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 64",rx:1,transform:"translate(6.324)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 65",rx:1,transform:"translate(12.647)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 66",rx:1,transform:"translate(18.971)"}),M.createElement("path",{fillRule:"evenodd",d:"M26.387 0h30.422a1.093 1.093 0 0 1 1.093 1.093v3.151a1.093 1.093 0 0 1-1.093 1.093H26.387a1.093 1.093 0 0 1-1.093-1.093V1.093A1.093 1.093 0 0 1 26.387 0m33.594 0h3.942a1.093 1.093 0 0 1 1.093 1.093v3.151a1.093 1.093 0 0 1-1.093 1.093h-3.942a1.093 1.093 0 0 1-1.093-1.093V1.093A1.093 1.093 0 0 1 59.981 0","data-name":"Path 56"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 67",rx:1,transform:"translate(66.003)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 68",rx:1,transform:"translate(72.327)"}),M.createElement("rect",{width:5.336,height:5.336,"data-name":"Rectangle 69",rx:1,transform:"translate(84.183)"}),M.createElement("path",{d:"M78.254 2.273v-1.18A1.093 1.093 0 0 1 79.347 0h3.15a1.093 1.093 0 0 1 1.093 1.093v1.18Z","data-name":"Path 57"}),M.createElement("path",{d:"M83.591 3.063v1.18a1.093 1.093 0 0 1-1.093 1.093h-3.15a1.093 1.093 0 0 1-1.093-1.093v-1.18Z","data-name":"Path 58"})),M.createElement("rect",{width:88.927,height:2.371,fill:"#4a4a4a","data-name":"Rectangle 70",rx:1.085,transform:"translate(1.925 1.17)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 71",opacity:.136,rx:.723,transform:"translate(4.1 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 72",opacity:.136,rx:.723,transform:"translate(10.923 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 73",opacity:.136,rx:.723,transform:"translate(16.173 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 74",opacity:.136,rx:.723,transform:"translate(21.421 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 75",opacity:.136,rx:.723,transform:"translate(26.671 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 76",opacity:.136,rx:.723,transform:"translate(33.232 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 77",opacity:.136,rx:.723,transform:"translate(38.48 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 78",opacity:.136,rx:.723,transform:"translate(43.73 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 79",opacity:.136,rx:.723,transform:"translate(48.978 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 80",opacity:.136,rx:.723,transform:"translate(55.54 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 81",opacity:.136,rx:.723,transform:"translate(60.788 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 82",opacity:.136,rx:.723,transform:"translate(66.038 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 83",opacity:.136,rx:.723,transform:"translate(72.599 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 84",opacity:.136,rx:.723,transform:"translate(77.847 1.566)"}),M.createElement("rect",{width:4.986,height:1.581,fill:"#d8d8d8","data-name":"Rectangle 85",opacity:.136,rx:.723,transform:"translate(83.097 1.566)"})),M.createElement("path",{fill:"#44d860",fillRule:"evenodd",d:"M408.256 591.563a5.4 5.4 0 0 0-.7.07c-.042-.164-.081-.329-.127-.493a5.457 5.457 0 1 0-5.4-9.372q-.181-.185-.366-.367a5.454 5.454 0 1 0-9.384-5.4c-.162-.046-.325-.084-.486-.126a5.467 5.467 0 1 0-10.788 0c-.162.042-.325.08-.486.126a5.457 5.457 0 1 0-9.384 5.4 21.843 21.843 0 1 0 36.421 21.02 5.452 5.452 0 1 0 .7-10.858","data-name":"Path 59"}),M.createElement("path",{fill:"#3ecc5f",fillRule:"evenodd",d:"M342.691 553.317h43.71v-21.855h-43.71Z","data-name":"Path 60"}),M.createElement("path",{fill:"#44d860",fillRule:"evenodd",d:"M397.328 545.121a2.732 2.732 0 1 0 0-5.464 3 3 0 0 0-.349.035c-.022-.082-.04-.164-.063-.246a2.733 2.733 0 0 0-1.052-5.253 2.7 2.7 0 0 0-1.648.566q-.09-.093-.184-.184a2.7 2.7 0 0 0 .553-1.633 2.732 2.732 0 0 0-5.245-1.07 10.928 10.928 0 1 0 0 21.031 2.732 2.732 0 0 0 5.245-1.07 2.7 2.7 0 0 0-.553-1.633q.093-.09.184-.184a2.7 2.7 0 0 0 1.648.566 2.732 2.732 0 0 0 1.052-5.253q.033-.122.063-.246a3 3 0 0 0 .349.035","data-name":"Path 61"}),M.createElement("path",{fillRule:"evenodd",d:"M408.256 464.531a3 3 0 0 1-.535-.055 2.8 2.8 0 0 1-.514-.153 3 3 0 0 1-.471-.251 4 4 0 0 1-.415-.339 3 3 0 0 1-.338-.415 2.7 2.7 0 0 1-.459-1.517 3 3 0 0 1 .055-.535 3 3 0 0 1 .152-.514 3 3 0 0 1 .252-.47 2.6 2.6 0 0 1 .753-.754 3 3 0 0 1 .471-.251 2.8 2.8 0 0 1 .514-.153 2.5 2.5 0 0 1 1.071 0 2.7 2.7 0 0 1 .983.4 4 4 0 0 1 .415.339 4 4 0 0 1 .339.415 3 3 0 0 1 .251.47 2.9 2.9 0 0 1 .208 1.049 2.77 2.77 0 0 1-.8 1.934 4 4 0 0 1-.415.339 2.72 2.72 0 0 1-1.519.459m21.855-1.366a2.8 2.8 0 0 1-1.935-.8 4 4 0 0 1-.338-.415 2.7 2.7 0 0 1-.459-1.519 2.8 2.8 0 0 1 .8-1.934 4 4 0 0 1 .415-.339 3 3 0 0 1 .471-.251 2.8 2.8 0 0 1 .514-.153 2.5 2.5 0 0 1 1.071 0 2.7 2.7 0 0 1 .983.4 4 4 0 0 1 .415.339 2.8 2.8 0 0 1 .8 1.934 3 3 0 0 1-.055.535 3 3 0 0 1-.153.514 4 4 0 0 1-.251.47 4 4 0 0 1-.339.415 4 4 0 0 1-.415.339 2.72 2.72 0 0 1-1.519.459","data-name":"Path 62"}))))},C="mountainImg_J3aV";const D=function(e){var t=e.title;return(0,d.jsxs)("div",{className:(0,c.Z)("col"),children:[(0,d.jsx)("div",{className:"text--center",children:(0,d.jsx)(B,{className:C})}),(0,d.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,d.jsx)("h2",{children:t}),(0,d.jsx)("div",{children:R.map((function(e){return(0,d.jsx)(y,{rowBooks:e},x())}))})]})]})},O="booksInfoSection_zHpl";const U=function(){return(0,d.jsx)("section",{className:O,children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(D,{title:"\uc694\uc57d\ud55c \ucc45 \ubaa9\ub85d\uc785\ub2c8\ub2e4!"})})})})};const q=function(){var e=(0,n.Z)().siteConfig;return(0,d.jsxs)(r.Z,{title:"Hello from "+e.title,description:e.tagline,children:[(0,d.jsx)(h,{}),(0,d.jsx)("main",{children:(0,d.jsx)(U,{})})]})}}}]);