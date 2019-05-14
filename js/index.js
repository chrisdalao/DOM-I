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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//navbar
let navBar = document.querySelector("nav");

let appendAnchorTag = document.createElement("a");
navBar.appendChild(appendAnchorTag);

let prependAnchorTag = document.createElement("a");
navBar.prepend(prependAnchorTag);

let navAnchorTag = navBar.querySelectorAll("a");

for (let i = 0; i < navAnchorTag.length; i++) {

  navAnchorTag[i].textContent = siteContent["nav"]["nav-item-" + [i]];
  navAnchorTag[i].style.color = "green";

}

appendAnchorTag.textContent = "Resources";
prependAnchorTag.textContent = "Account";

//top section
let ctaH1 = document.querySelector(".cta-text>h1");
let ctaH1Elements = siteContent.cta.h1;
let ctaH1ElementsArr = ctaH1Elements.split(" ");
let breakTag = "<br>";
ctaH1ElementsArr.splice(1, 0, breakTag);
ctaH1ElementsArr.splice(3, 0, breakTag);

for (let a = 0; a < ctaH1ElementsArr.length; a++) {

  ctaH1.innerHTML += ctaH1ElementsArr[a];

}


let ctaBtn = document.querySelector(".cta-text>button");
ctaBtn.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//top content

let featuresH4 = document.querySelector(".top-content>div:nth-child(1)>h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector(".top-content>div:nth-child(1)>p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content>div:nth-child(2)>h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector(".top-content>div:nth-child(2)>p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content

let servicesH4 = document.querySelector(".bottom-content>div:nth-child(1)>h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelector(".bottom-content>div:nth-child(1)>p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content>div:nth-child(2)>h4");
productH4.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelector(".bottom-content>div:nth-child(2)>p");
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content>div:nth-child(3)>h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelector(".bottom-content>div:nth-child(3)>p");
visionContent.textContent = siteContent["main-content"]["vision-content"];

//contact

let contH4 = document.querySelector(".contact>h4");
contH4.textContent = siteContent["contact"]["contact-h4"];

let contactPtags = document.querySelectorAll(".contact>p");
contactPtags[0].textContent = siteContent["contact"]["address"];
contactPtags[1].textContent = siteContent["contact"]["phone"];
contactPtags[2].textContent = siteContent["contact"]["email"];

//footer

let footer = document.querySelector("footer>p");
footer.textContent = siteContent["footer"]["copyright"];

