var copyButton = document.getElementById("copy-button");

copyButton.onclick = function(){
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("email-signature"));
    range.select().createTextRange();
    document.execCommand("copy");

  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("email-signature"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
};
