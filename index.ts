
interface Window {
  MP_SDK: any;
}

const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'YOUR KEY HERE';

showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.2');
  }
  catch(e) {
    console.error(e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
});
