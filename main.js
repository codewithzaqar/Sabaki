var {app, BrowserWindow} = require('electron')

var window = null

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit()
})

app.on('ready', function() {
    window = new BrowserWindow({
        'width': 608,
        'height': 608,
        'resizable': false,
        'use-content-size': true,
        'show': false
    })

    window.webContents.on('did-finish-load', function() {
        window.show()
    })

    window.loadURL('file://' + __dirname + '/index.html')

    window.on('closed', function() {
        window = null
    })
})