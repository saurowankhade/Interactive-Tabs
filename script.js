const data =  {
        'Html' : ['Learn HTML',`HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications. Let's see what is meant by Hypertext Markup Language, and Web page.
        </br>
        Hyper Text: HyperText simply means "Text within Text." A text has a link within it, is a hypertext. Whenever you click on a link which brings you to a new webpage, you have clicked on a hypertext. HyperText is a way to link two or more web pages (HTML documents) with each other.`,'https://youtu.be/kUMe1FH4CHE?si=YaIEldC03vY4zrsg','Media/html.jpg'],
        'Css' :  ['Learn Css',`Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</br>CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations.`,'https://youtu.be/OXGznpKZ_sA?si=UmoXdry9cTYFGPuO','Media/css.jpg'],
        'Js' :  ['Learn Js','JavaScript is a programming language that allows you to implement complex functionalities on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.','https://www.youtube.com/watch?v=PkZNo7MFNFg&t=9s','Media/js.jpg'],
        'React Js' :  ['Learn React Js',`eact is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.</br>React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.`,'https://www.youtube.com/watch?v=DLX62G4lc44','Media/reactjs.jpg'],
        'Node Js' :  ['Learn Node Js',`Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.</br>It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. Sounds a bit complicated, right?`,'https://youtu.be/Oe421EPjeBE?si=43dZRLYSRtc6dbRW','Media/nodejs.png']
    };


let list = document.querySelectorAll('li');

const content = document.querySelector('.contents');
list.forEach((a)=>{
    a.addEventListener('click',()=>{
        for(let i=0;i<list.length;i++){
            list[i].classList.remove('tabClick');
        }
        a.classList.add('tabClick');
        content.classList.add('opacity');
        dataChange(data[a.innerText]);
        
        content.addEventListener('animationend',()=>{
            content.classList.remove('opacity'); 
        });
    });
});

function dataChange(data){
    content.innerHTML = `
    <div class="data-text">
    <h2 class="headingLine">${data[0]}</h2>

    <p class="para">${data[1]}</p>
    
    <a href=${data[2]} target="_blank"><button class="btn">WATCH VIDEO</button></a>
  </div>
  <div class="data-img">
    <img src=${data[3]} alt=${data[0]}" Image" >
  </div>
    `
}

list[0].click();