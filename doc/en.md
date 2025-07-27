
# 📦 GNotification — Notification Plugin

**GNotification** is a plugin designed to display notifications to users on a web application page.

---

## 📥 How to Connect

To connect the plugin, use one of the following methods:

### 1. Through a Template:
```json
{
  "container": "div",
  "config": {
    "js": [
      { "path": "/GNotification.js", "async": true, "cache": false }
    ]
  }
}
```

### 2. As a regular `<script>` in an HTML file:
```html
<script src="/GNotification.js"></script>
```

Once the plugin is connected, a `$gn` object becomes available — this is the **Gianna Notification** instance.

---

## ⚙️ Configuration

To configure the plugin, follow these steps:

### 1. Add the following element to your template:
```json
{
  "container": "div",
  "attributes": { "id": "gnotification_plugin" }
}
```

### 2. At the beginning of the app initialization (e.g., in `main.js`), configure the plugin:
```js
$gn.set("#gnotification_plugin", "/notification.json");
```

The `.set()` method takes two parameters:
- `selector` — the HTML identifier where the notification template will be inserted;
- `filepath` — the path to the JSON template file.

---

## 🚀 Sending Notifications

To send a notification, use the following code:
```js
$gn.show({
  message: "Hello, world!",   // The message the user should see
  response: null,             // An error object from try-catch, if available
  type: ""                    // An optional label, e.g., the module name
});
```

If the `response` object is passed, it may contain:
- `status` — HTTP status from the server;
- `message` — general error message like "Internal Server Error";
- `body.message` — a specific message from the backend. Expected format: `{"message": "..."}`.

---

## 🧩 Additional Information

Gianna Framework already has a built-in `notification` method, but it's only meant for brief text display.

The **GNotification** plugin automatically overrides this method with its own implementation, providing a reliable notification system at the core of your project.

---
