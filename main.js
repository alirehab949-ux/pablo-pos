const { app, BrowserWindow } = require('electron');
const path = require('path');

app.commandLine.appendSwitch('enable-web-bluetooth');
app.commandLine.appendSwitch('enable-experimental-web-platform-features');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Pablo Escobare Dashboard",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.webContents.on('select-bluetooth-device', (event, deviceList, callback) => {
    event.preventDefault();
    if (deviceList && deviceList.length > 0) {
      callback(deviceList[0].deviceId);
    } else {
      callback('');
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
