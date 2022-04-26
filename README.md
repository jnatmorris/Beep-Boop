# Beep-Boop

## Information

Leaning by doing, this is my first chrome extension. A simplistic extension pings all other users who have the extension initialized when the button is clicked. This extension too works on chromium based browsers. For example, [Brave](https://brave.com/).

<strong>Notes:</strong>
As stated [here](https://developer.chrome.com/docs/apps/contentSecurityPolicy/#resourceLoading), using CDNs is best practice for including scripts. As such, a minified version of [socket.io](https://socket.io/) and [tailwindcss](https://tailwindcss.com/docs/installation/play-cdn) have been added within the project. As this project is a proof of concept, and not intended for production I have included the tailwindcss script rather than building the css.

## Installation

Broken into two sections, the extension and the backend server.

### To run the server:

1. Download packages

```
yarn install
```

2. Run the server

```
yarn dev
```

### Install the extension

1. Navigate to the extension settings. This may vary based on which chromium based browser being used.
2. Enable the developer mode toggle
3. Click on the Load Unpacked button and select the Extensions folder
4. The extension is now installed
