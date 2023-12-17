chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'google',
    title: 'Search Google for \'%s\'',
    type: 'normal',
    contexts: ['selection']
  });
  chrome.contextMenus.create({
    id: 'amazon',
    title: 'Search Amazon for \'%s\'',
    type: 'normal',
    contexts: ['selection']
  });
  chrome.contextMenus.create({
    id: 'bestbuy',
    title: 'Search Best Buy for \'%s\'',
    type: 'normal',
    contexts: ['selection']
  });
  chrome.contextMenus.create({
    id: 'target',
    title: 'Search Target for \'%s\'',
    type: 'normal',
    contexts: ['selection']
  });
});
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'google') {
    chrome.tabs.create({
      url: 'https://www.google.com/search?q='+encodeURIComponent(info.selectionText)
    });
  }else if (info.menuItemId === 'amazon') {
    chrome.tabs.create({
      url: 'https://www.amazon.com/s?k='+encodeURIComponent(info.selectionText)
    });
  }else if (info.menuItemId === 'bestbuy') {
    chrome.tabs.create({
      url: 'https://www.bestbuy.com/site/searchpage.jsp?st='+encodeURIComponent(info.selectionText)
    });
  }else if (info.menuItemId === 'target') {
    chrome.tabs.create({
      url: 'https://www.target.com/s?searchTerm='+encodeURIComponent(info.selectionText)
    });
  }
 
});