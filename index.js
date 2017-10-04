const {app, BrowserWindow, remote} = require('electron');
const path = require('path');
const url = require('url');
let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 500,
        height: 150,
        title: "Count Down",
        resizable: false,
        transparent: true
    });

    win.setAlwaysOnTop(true, "floating");
    win.setVisibleOnAllWorkspaces(true);
    win.setFullScreenable(false);

    win.setMenu(null);

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    });
}

app.on('ready', createWindow);
