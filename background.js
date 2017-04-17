/*
 * HighLightDOM
 * Version : v0.1
 * Author : Jacob Lo
 * Date : April 17, 2017
 * Lisence : Apache License Version 2.0, January 2004 http://www.apache.org/licenses/
 */

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.insertCSS(tab.id, {
    file: 'box.css'
  });
  chrome.tabs.executeScript({
    file: 'jQuery.min.js'
  });
  chrome.tabs.executeScript({
    file: 'executeHighlight.js'
  });
});