// contentScript.js
console.log("Content script loaded!");
let cnt = 0;
// Function to change the text of an element
function changeElementText() {
    const element = document.getElementById("SIvCob"); // Change this to the actual ID of the element you want to modify
    console.log("On click Element = ", element)
    if (element) {
        element.textContent = `Element changed by extension! count ${cnt}`;
        console.log("[OKOKOKOKKOK]: ", cnt)
        cnt = cnt + 1
    } else {
        console.error("Element not found on the page.");
    }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("[onMessage.addListener]")
    if (request.message === "change_element") {
        changeElementText();
    }
});
