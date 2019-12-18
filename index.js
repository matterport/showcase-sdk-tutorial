
var showcase = document.getElementById('showcase');
var key = 'YOUR KEY HERE';

showcase.addEventListener('load', function() {
  showcase.contentWindow.MP_SDK.connect(showcase, key, '3.2')
    .then(onConnect, onError);
});

async function onConnect(sdk) {
  console.log('Hello Bundle SDK', sdk);
  // ready to access the sdk!
}

function onError(error) {
  console.error(error);
}
