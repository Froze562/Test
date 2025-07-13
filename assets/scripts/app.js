// Handle file processing and filename display in one place
fileInput.addEventListener("change", function () {
  if (this.files && this.files.length > 0) {
    const file = this.files[0];
    // Show filename
    document.getElementById("fileName").textContent = file.name;

    // Process Excel files
    const fileName = file.name.toLowerCase();
    if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert first sheet to HTML table
        const htmlTable = XLSX.utils.sheet_to_html(worksheet);

        // Insert the table into the viewer
        document.getElementById("fileViewer").innerHTML = htmlTable;
      };
      reader.readAsArrayBuffer(file);
    } else {
      // Not an Excel file
      document.getElementById("fileViewer").textContent = file.name;
    }
  } else {
    document.getElementById("fileViewer").textContent = "No file selected";
    document.getElementById("fileName").textContent = "";
  }
});