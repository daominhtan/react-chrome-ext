// contentScript.js
console.log("Content script loaded!");

// Function to change the text of an element
function changeElementText() {
    const element = document.getElementsByClassName("gNO89b"); // Change this to the actual ID of the element you want to modify
    if (element) {
        element.textContent = "Element changed by extension!";
    } else {
        console.error("Element not found on the page.");
    }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "change_element") {
        changeElementText();
    }
});
