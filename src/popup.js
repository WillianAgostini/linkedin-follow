// popup.js
document.getElementById('followAll').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "followAll" }, response => {
      console.log(response.status);
    });
  });
});
