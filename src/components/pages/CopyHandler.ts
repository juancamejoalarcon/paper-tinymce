import type { Editor } from "tinymce";

export const copyEventListener = (editor: Editor) => {
  editor.contentWindow.addEventListener("copy", (event) => {
    // Remove all the unnecesary html tags (pages) from the copied text
    let text = event.clipboardData.getData("text/html");
    let newText = "";
    text.replace(/<article(.*?)>([\s\S]*?)<\/article>/g, (match, $1) => {
      let extractedText = match.replace(/<article(.*?)>/g, "");
      extractedText = extractedText.replace(/<\/article>/g, "");
      extractedText = extractedText.replace(/<section(.*?)>/g, "");
      extractedText = extractedText.replace(/<\/section>/g, "");
      newText += extractedText;
      return match;
    });
    event.clipboardData.setData("text/html", newText);
  });
};
