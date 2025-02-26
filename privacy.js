// Array of script URLs
const scripts = ['../Block-DevTools/index.js', '../Clipboard-Blocker/index.js', '../Disable-Image-Dragging/index.js'];

// Load all scripts
Promise.all(scripts.map(loadScript))
    .then(messages => {
        messages.forEach(message => console.log(message));
        console.log("All scripts loaded successfully!");
    })
    .catch(error => console.error(error));