const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

process.on('uncaughtException', (err) => {
    if (err.code === 'EIO' && err.syscall === 'write') {
        // ignore EIO write errors
        // neither process.stdout.isTTY nor process.stdout.writable helped
        // so just ignore them
        return;
    }

    throw err;
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    });

    win.webContents.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.3"
    );
    win.loadURL("https://web.snapchat.com");

    return win;
};

app.whenReady().then(() => {
    const win = createWindow();

    // inject css
    win.webContents.on("dom-ready", () => {
        console.log("Injecting CSS...");
        const cssPath = path.join(__dirname, "inject", "styles.css");
        const css = fs.readFileSync(cssPath, "utf8");
        win.webContents.insertCSS(css);
    });

    // never lose focus
    win.on("blur", () => {
        console.log("Window blurred, refocusing...");
        win.focusOnWebView();
    });
});
