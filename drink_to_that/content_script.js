var beerURL = chrome.extension.getURL("/images/drink_to_that.png");

var styleTag = document.createElement("style");
styleTag.type = "text/css";
styleTag.appendChild(document.createTextNode("div.HeartAnimation { background-image: url(" + beerURL + ") }"));

document.head.appendChild(styleTag);
