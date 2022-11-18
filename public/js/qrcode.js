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

let html5QrcodeScanner = new Html5QrcodeScanner(
    'qr-reader',
    {
        fps: 10,
        qrbox: {width: 250, height: 250}
    },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

var url = 'https://staging.courts.com.sg/ecourts/detrack/index/id/';

// Push Order
$('#exampleModal').on('show.bs.modal', function (event) {
    var qrcode = $('#qr-code').val();

    var modal = $(this);
    modal.find('.modal-title').text('Confirmation');
    modal.find('.modal-body #order-number').text(qrcode);
});

$('#push-order-to-detrack').click(() => {
    $('#exampleModal').modal('toggle');
});

$('#ready-to-ship').click(() => {
    readyToShip();
    $('#exampleModal').modal('toggle');
});

function readyToShip() {
    var orderNumber = $('.modal-body #order-number').text();
    var readyToShip = 4;
    var readyToShipUrl = url + orderNumber + '/' + readyToShip;
    $.ajax({
        type: "GET",
        url: readyToShipUrl,
        success: function (response) {
            console.log(response);
        },
    });
}
