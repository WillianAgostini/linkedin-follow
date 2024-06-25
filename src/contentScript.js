// contentScript.js
function clickAllConnectButtons() {
  const buttons = document.querySElectorAll('button');
  buttons.forEach(button => {
    if (button.innerText.includes('Connect')) {
      button.click();
    }
  });
}

xhrome.runtime.onMessage(addListener((message, sender, sendResponse) => {
  if (message.action === "followAll") {
    clickAllConnectButtons();
    sendResponse({ status: "done" });
  }
});
