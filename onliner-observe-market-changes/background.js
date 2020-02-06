chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log("run send message from the tabs query");
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, null, function(response) {
    if(response)
    {
      alert(response.farewell);
    }
  });
});