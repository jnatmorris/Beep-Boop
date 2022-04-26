# Beep-Boop

## Information

Leaning by doing, this is my first chrome extension. A simplistic extension that pings all other users who have the extension initialized when you click the button. This extension too works on chromium based browsers. For example, [Brave](https://brave.com/).

<strong>Note:</strong>
As stated [here](https://developer.chrome.com/docs/apps/contentSecurityPolicy/#resourceLoading), using CDNs is not best practice for including scripts. As such, a minified version of [socket.io](https://socket.io/) and [tailwindcss'](https://tailwindcss.com/) playground script have been added within the project. Due to this project being a proof of concept, and not intended for production, I have included the tailwindcss script rather than building the CSS.

## Installation

Broken into two sections, the extension and the backend server.

### To Run the Server:

1. Download packages

```
yarn install
```

2. Run the server

```
yarn dev
```

### To Install the Extension

Note: To receive notifications that someone has booped you, you must have notifications enabled in your browser and computer settings. This includes not having a variation of silent mode enabled.

1. Navigate to the extension settings. This may vary based on which chromium based browser being used.
2. Enable the developer mode toggle
3. Click on the Load Unpacked button and select the Extensions folder
4. The extension is now installed
