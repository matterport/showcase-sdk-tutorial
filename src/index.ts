
const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'YOUR KEY HERE';

// declare this file is a module
export {};

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}

const loadBundle = async function() {
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
};

if (showcase.contentDocument.readyState === 'complete') {
  loadBundle();
}
else {
  showcase.addEventListener('load', loadBundle);
}
