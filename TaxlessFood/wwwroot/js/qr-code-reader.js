import QrScanner from './nimiq/qr-scanner.min.js';

export function createScanner(dotnetHelper) {
    let videoElem = document.getElementById('qr-code-reader');

    console.log('scanner created');
    return new QrScanner(
        videoElem,
        result => {
            console.log('decoded qr code:', result);
            dotnetHelper.invokeMethodAsync('GetResult', result.data);
        },
        {
            preferredCamera: 'environment',
            highlightScanRegion: true,
        }
    );
}

export function alert(message) {
    window.alert(message);
}


export function startScan(qrScanner) {
    qrScanner.start();
    console.log('scanner started');
}

export function stopScan(qrScanner) {
    qrScanner.stop();
    console.log('scanner stopped');
}

export function destroyScanner(qrScanner) {
    qrScanner.destroy();
    qrScanner = null;
    console.log('scanner destroyed');
}

export function hasFlashlight(qrScanner) {
    return qrScanner.hasFlash();
}

export function toggleFlashlight(qrScanner) {
    qrScanner.toggleFlash();
    console.log('scanner flashlight toggled');
}