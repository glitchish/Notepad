function save() {
	if (promptFilename = prompt("Save file as", "*.txt")) {
		var textBlob = new Blob([document.getElementById("canvas-textarea").value], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = promptFilename;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = window.URL.createObjectURL(textBlob);
		downloadLink.click();
    delete downloadLink;
    delete textBlob;
	}
}