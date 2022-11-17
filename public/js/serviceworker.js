self.addEventListener('install', function (event) {
    console.log('sw:install');
});

self.addEventListener('fetch', e => {
    console.log('Loading ' + e.request.url);
});
