
# 📦 GNotification — Benachrichtigungs-Plugin

**GNotification** ist ein Plugin, das dazu dient, Benachrichtigungen für Benutzer auf der Seite einer Webanwendung anzuzeigen.

---

## 📥 Einbindung

Sie können das Plugin auf eine der folgenden Arten einbinden:

### 1. Über eine Vorlage (Template):
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

### 2. Direkt über ein `<script>`-Tag in einer HTML-Datei:
```html
<script src="/GNotification.js"></script>
```

Nach dem Einbinden steht das Objekt `$gn` zur Verfügung — das ist die Instanz von **Gianna Notification**.

---

## ⚙️ Konfiguration

Führen Sie die folgenden Schritte zur Konfiguration des Plugins aus:

### 1. Fügen Sie folgendes Element in Ihre Vorlage ein:
```json
{
  "container": "div",
  "attributes": { "id": "gnotification_plugin" }
}
```

### 2. Konfigurieren Sie das Plugin am Anfang Ihrer App-Initialisierung (z. B. in `main.js`):
```js
$gn.set("#gnotification_plugin", "/notification.json");
```

Die Methode `.set()` akzeptiert zwei Parameter:
- `selector` — die HTML-ID, in die die Benachrichtigungsvorlage eingefügt wird;
- `filepath` — der Pfad zur JSON-Vorlagendatei.

---

## 🚀 Benachrichtigung senden

Zum Senden einer Benachrichtigung verwenden Sie folgenden Code:
```js
$gn.show({
  message: "Hallo Welt!",     // Die Nachricht, die dem Benutzer angezeigt wird
  response: null,             // Ein Error-Objekt aus try-catch (falls vorhanden)
  type: ""                    // Optionales Label, z. B. der Modulname
});
```

Wenn ein `response`-Objekt übergeben wird, kann es folgende Felder enthalten:
- `status` — HTTP-Status vom Server;
- `message` — Allgemeine Fehlermeldung wie "Internal Server Error";
- `body.message` — Detaillierte Nachricht vom Backend. Erwartetes Format: `{"message": "..."}`.

---

## 🧩 Zusätzliche Informationen

Im Gianna Framework existiert bereits eine `notification`-Methode, die jedoch nur für kurze Textausgaben gedacht ist.

Das **GNotification**-Plugin überschreibt diese Methode automatisch mit seiner eigenen Implementierung und bietet somit eine zuverlässige Benachrichtigungsfunktion im Kern Ihres Projekts.

---
