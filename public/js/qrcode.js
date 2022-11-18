function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    $("#qrcode").val(decodedText);
}

function onScanError(errorMessage) {
    // handle on error condition, with error message
    console.log(`Scan result: ${errorMessage}`);
    $("#qrcode").val("error");
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 400 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
