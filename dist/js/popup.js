
console.log("Popup script loaded!");

// popup.js
document.getElementById("changeElementButton").addEventListener("click", () => {
    console.log(">>>>>>on click")

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log(">>>>> HERE, tabs = ", tabs)
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "change_element" });
    });
});
