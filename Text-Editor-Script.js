function save() {
  fileN = document.getElementById("file-name").value;
	if (fileN !== "") {
		var textBlob = new Blob([document.getElementById("text-area").value], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = fileN;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = window.URL.createObjectURL(textBlob);
		downloadLink.click();
		delete downloadLink;
		delete textBlob;
	}
}
