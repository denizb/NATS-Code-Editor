function injectAceEditor() {
  // Ensure that Ace Editor is loaded
  if (window.ace) {
    document
      .querySelectorAll('textarea[name="skin[body]"]')
      .forEach((textarea) => {
        let editorDiv = document.createElement("div");
        editorDiv.style.height = textarea.offsetHeight + "px";
        editorDiv.style.width = textarea.offsetWidth + "px";

        // Replace the textarea with the editorDiv
        textarea.parentNode.replaceChild(editorDiv, textarea);

        let editor = window.ace.edit(editorDiv);
        editor.setTheme("ace/theme/cobalt");
        editor.session.setMode("ace/mode/smarty");
        editor.setValue(textarea.value);
      });
  }
}

// Now, just call the function
injectAceEditor();
