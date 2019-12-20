
var showcase = document.getElementById('showcase');
var key = 'YOUR KEY HERE';

showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, '{YOUR SDK KEY}', '3.2');
  }
  catch(e) {
    console.error(e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');

});
