# Onsnap

## Description

Onsnap is a simple Electron-based application designed to load Snapchat's web interface (`https://web.snapchat.com`) in a custom browser window. The application ensures that the window never loses focus, even when you click on another window. Additionally, it injects custom CSS to hide scrollbars for a cleaner interface.

## Features

- Loads Snapchat's web interface in a frameless Electron window.
- Prevents the window from losing focus when clicking on other windows.
- Injects custom CSS to hide scrollbars for a cleaner look.

## Requirements

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Onsnap.git
   cd Onsnap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the application:
   ```bash
   npm start
   ```

2. The application will open a frameless window displaying Snapchat's web interface.

## Notes

- The application uses Electron and injects custom CSS to hide scrollbars.
- The `main.js` file ensures the window never loses focus by refocusing it when blurred.
- If you prefer using ES modules, you can use `main.mjs` instead of `main.js`.