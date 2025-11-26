# Onsnap

## what it is

Onsnap is a simple Electron-based application designed to load Snapchat's web interface (`https://web.snapchat.com`) in a custom browser window. The application ensures that the window never loses focus, even when you click on another window. Also injects custom CSS to hide scrollbars.

## what it does

- Loads Snapchat's web interface in a frameless Electron window.
- Prevents the window from losing focus when clicking on other windows.
- Injects custom CSS to hide scrollbars for a cleaner look.


## what you need

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)


## installing

1. Clone the repository:

```bash
git clone https://github.com/fyiel/Onsnap.git
cd Onsnap
```

2. Install dependencies:

```bash
npm install
```

## using it

To run a command in the terminal, then send it to the background, disown it, and close the terminal, follow these steps:

1. Start the application:
```
npm start
```
2. Pause the command with `Ctrl+Z`.

3. Send the command to the background:
```
bg
```
4. Disown the process so it won't be terminated when the terminal is closed:
```
disown
```
5. Close the terminal.
### use it like intended (linux)
1. Create a desktop entry in `~/.local/share/applications/snapchat.desktop`:
```
[Desktop Entry]
Type=Application
Name=Snapchat
Exec=/usr/bin/env bash -lc '~/.local/bin/onsnap'
Terminal=false
Categories=Utility;
Icon=utilities-terminal
DBusActivatable=false
```
2. Create the launcher script in `~/.local/bin/onsnap` and make it executable:
```bash
\#! /usr/bin/env bash
set -euo pipefail
cd <this folder location>
npm start </dev/null >/dev/null 2>\&1 \& disown
```
