
const { app, BrowserWindow } = require('electron');

// إجبار الويندوز على الحفاظ على الدقة الأصلية ومنع الضبابية
app.commandLine.appendSwitch('high-dpi-support', '1');
app.commandLine.appendSwitch('force-device-scale-factor', '1');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200, // يمكنك تعديل العرض
    height: 800, // يمكنك تعديل الطول
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      zoomFactor: 1.0 // منع تكبير العناصر داخلياً
    }
  });

  win.loadFile('index.html');
  win.maximize(); // لفتح البرنامج بكامل الشاشة فور تشغيله
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
