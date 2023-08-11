chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "activateEditor") {
    const textarea = document.querySelector('textarea[name="skin[body]"]'); // Replace with your textarea ID
    if (textarea) {
      // Create a new div element to hold the Ace Editor
      const editorDiv = document.createElement("div");
      editorDiv.style.width = "100%";
      editorDiv.style.height = "300px"; // Set the desired height
      textarea.parentNode.insertBefore(editorDiv, textarea);

      // Create the Ace Editor instance
      const editor = ace.edit(editorDiv);

      // Load the Smarty mode and Cobalt theme
      ace.config.set(
        "basePath",
        "https://cdnjs.cloudflare.com/ajax/libs/ace/1.24.0"
      );
      editor.setTheme("ace/theme/cobalt");
      editor.session.setMode("ace/mode/smarty");

      // Copy the content from the textarea to the editor
      editor.setValue(textarea.value, -1);

      // Hide the original textarea
      textarea.style.display = "none";
    }
  }
});
