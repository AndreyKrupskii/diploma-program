const url = require('url');
const path = require('path');
const { app, BrowserWindow } = require('electron');
const config = require('./configs/main');
const env = require('./entities/env');
const platforms = require('./entities/platforms');

// define window initializers
let mainWindow;
const createMainWindow = () => {
  // init window
  mainWindow = new BrowserWindow({
    width: config.mainWindow.width,
    height: config.mainWindow.height
  });

  // load template
  if (process.env !== env.PRODUCTION) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadURL(url.format({
      protocol: 'file',
      slashes: true,
      pathname: path.join(__dirname, './../public/index.html')
    }));
  }

  // open dev tools
  if (process.env.NODE_ENV !== env.PRODUCTION) {
    mainWindow.webContents.openDevTools();
  }

  // handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null
  });
};

// handle app ready event
app.on('ready', createMainWindow);

// handle app quit event
app.on('window-all-closed', () => {
  if (process.platform !== platforms.DARWIN) {
    app.quit()
  }
});

// handle app activate event
app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
