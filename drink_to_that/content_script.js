var beerURL = chrome.extension.getURL("/images/drink_to_that.png");

var styleTag = document.createElement("style");
styleTag.type = "text/css";
styleTag.appendChild(document.createTextNode("div.HeartAnimation { background-image: url(" + beerURL + ") }\n"));
styleTag.appendChild(document.createTextNode("span.Icon--heartBadge:before { content: \"\\1f37a\" }\n"));

document.head.appendChild(styleTag);
