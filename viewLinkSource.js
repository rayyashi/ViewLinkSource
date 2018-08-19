// View links source code
var contextMenuItem ={
  "id": "viewLinkSourceCode",
  "title": "View Link Source Code",
  "contexts": ["link"]
}


chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(getLinkSource){
  if(getLinkSource.menuItemId == "viewLinkSourceCode" && getLinkSource.linkUrl)
  {
    chrome.tabs.create({"url": 'view-source:' +getLinkSource.linkUrl});
  }
});