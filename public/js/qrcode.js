function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    $('#qr-code').val(decodedText);
    $('#exampleModal').modal('show');
}

function onScanFailure(errorMessage) {
    // handle on error condition, with error message
    console.log(`Scan result: ${errorMessage}`);
    $('#qr-code').val(errorMessage);
}

$('#exampleModal').on('show.bs.modal', function (event) {
    var qrcode = $('#qr-code').val();

    var modal = $(this);
    modal.find('.modal-title').text('Confirm Form');
    modal.find('.modal-body .text').text('Order Number: ' + qrcode);
});

$('#push-order-to-detrack').click(() => {
    console.log('hi');
    $('#exampleModal').modal('toggle');
});

let html5QrcodeScanner = new Html5QrcodeScanner(
    'qr-reader',
    {
        fps: 10,
        qrbox: {width: 250, height: 250}
    },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
