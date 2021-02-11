const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Header navs
let navsCollections = document.getElementsByTagName('a');
let navs = Array.from(document.getElementsByTagName('a'));
// console.log(navsCollections)
// console.log(navs)
// navs[0].textContent = siteContent["nav"]["nav-item-1"];


navs.forEach((element, index) => {
  // console.log(`Current index: ${index}`);
  // console.log(element);
  element.textContent = siteContent["nav"][`nav-item-${index}`]
  element.style.color = "green";
});

//H1 DOM IS AWESOME
let domIsAwesome = document.querySelector('h1');
domIsAwesome.textContent = siteContent["cta"]["h1"];
// console.log(domIsAwesome);


//Button
let getStartedButton = document.querySelector('button');
getStartedButton.textContent = siteContent["cta"]["button"];
// console.log(getStartedButton);

//Pic of code
let picOfCode = document.getElementById('cta-img');
picOfCode.src = siteContent["cta"]["img-src"];//or use the bottom code the work the same.
// picOfCode.setAttribute('src', siteContent["cta"]["img-src"])
// console.log(picOfCode);

//top content
let topContent = document.querySelector(".top-content")
// console.log(topContent)//top content
// console.log(topContent.children[0])//textcontent
// console.log(topContent.children[0].children[0])//tags inside the textcontent. h4
// console.log(topContent.children[0].children[1])//tags inside the textcontent. p

topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];


let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelector(".bottom-content")
// console.log(bottomContent)//top content
// console.log(bottomContent.children[0])//textcontent
// console.log(bottomContent.children[0].children[0])//tags inside the textcontent. h4
// console.log(bottomContent.children[0].children[1])//tags inside the textcontent. p

bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];

bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];

bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];


let contact = document.querySelector(".contact")

contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];


let footer = document.getElementsByTagName("footer")[0]
// console.log(footer.children[0])
footer.children[0].textContent = siteContent["footer"]["copyright"];

//appending and prepending two new navs

let parentNav = document.querySelector("nav");
let test0 = document.createElement("a")
// console.log(parentNav)
// console.log(test0)
test0.setAttribute('href', "#")
// console.log(test0)
test0.textContent = "Test0";
console.log(test0)
parentNav.prepend(test0);


let test1 = document.createElement("a")
// console.log(parentNav)
// console.log(test0)
test1.setAttribute('href', "#")
// console.log(test0)
test1.textContent = "Test1";
console.log(test1)
parentNav.appendChild(test1);




