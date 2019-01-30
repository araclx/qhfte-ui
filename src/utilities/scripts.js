// load a script into the document
// using promise

export const loadScript = (src, onload) => {
    // return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.type = 'text/javascript';
        script.onload = onload;
        // script.crossOrigin = "anonymous";
        // script.onload= resolve('success');
        // script.onerror= reject('failure')

        document.getElementsByTagName('head')[0].appendChild(script);
    // })
}
