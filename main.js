const { app, BrowserWindow } = require('electron')
const path = require('path')
const env = process.env.APP_ENV === "PRODUCTION" || "DEV"

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false 
        }
    })

    if (env === "DEV"){
        mainWindow.webContents.openDevTools()
    }
    mainWindow.loadFile('./src/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})