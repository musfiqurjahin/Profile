//Created_by_JaHIN
function blockDeveloperTools() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        //alert("Right-click is disabled for this website.");
        window.location.reload();
    });

    document.addEventListener('keydown', function(e) {
        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
            //alert("Developer tools are disabled on this website.");
            window.location.reload();
        }
    });
}
blockDeveloperTools();