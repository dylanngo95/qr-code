function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    $("#qr-code").val(decodedText);
}

function onScanFailure(errorMessage) {
    // handle on error condition, with error message
    console.log(`Scan result: ${errorMessage}`);
    $("#qr-code").val(errorMessage);
}

// Note: If you change the DOM element id here (example: "html5_qrcode_reader")
// Also, change this in ../html5-qrcode-wp.php.
let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader",
    // TODO(mebjas): Load all these values using data arguments in DOM element.
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
