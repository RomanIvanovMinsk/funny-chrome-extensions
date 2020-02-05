var node = document.querySelector(".news-container");
var news_popular = document.querySelector(".news-popular");
var title = document.querySelector(".news-header__title h1");
title.style.cssText = "margin-bottom: 20px";
var onliner_commentor = document.createTextNode("Чтобы комментировать, статью на onliner читать не обязательно!");
var parent = node.parentNode;
if(node && news_popular)
{
  parent.removeChild(node);
  news_popular.parentNode.removeChild(news_popular);
  parent.appendChild(title);
  parent.appendChild(onliner_commentor);
  parent.style.cssText = "padding: 30px;"
}