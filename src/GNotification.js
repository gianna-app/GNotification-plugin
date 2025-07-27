/**
 * Plugin: GNotification
 * Version: 1.0
 * Author: Artem Dainov
 * E-mail: support@gianna-app.com
 * Date: 04.07.2025
 * Repository: github.com/gianna-app/gnotification-plugin
 */
function GNotification(g) { // g - gfw object
let methods = {
    selector: null, // selector in the DOM where the notification will be sent
filejson: null, // JSON object of the file

/**
 * Method that allows you to set the selector and path to the JSON segment.
 * @param selector - element selector in the DOM
 * @param filejson - path to the JSON template
 * @return void
 */
async set(selector, filejson) {
    try {
this.filejson = await g.loadResource(filejson); // Load the JSON segment
    } catch(error) {
        throw new Error("GNotification.show: " + error.message);
    }
this.selector = selector;
},
/**
 * Method sends a notification into the DOM.
 * @param obj - data object for the notification
 * @return void
 */
async show(obj) {

// Build the object for the template
let objectData = {
short: obj.message.substr(0, 29), // Trimmed short message
message: obj.message, // Full message
statusText: obj?.response?.message, // Server message, e.g. internal server error
status: obj?.response?.status, // Server status code
object: obj?.response === null || obj?.response === undefined ? "null" : "object", // Used in the template to determine if it's a server notification
more: obj.type, // Additional message
result: obj?.response?.body?.message // Server message in JSON format
};
try {
let replacekeysindata = await g.replaceKeysInData(this.filejson, objectData); // Replace @{key=*} in the template

let parseData = await g.replaceTemplates(JSON.stringify(replacekeysindata)); // Replace all @{*=*} codes in the template
let html = await g.parseJsonElements(JSON.parse(parseData)); // Create DOM from template
let dom = g.dom(this.selector); // Get the DOM element where to inject the notification
dom.innerHTML = ""; // Clear the notification area
dom.appendChild(html); // Inject the notification DOM
g.focusAndRun(); // Trigger the run function

} catch(error) {
    console.log(error);
}
}
};
// Register click handlers for notification
g.addEvent("click", "notificationInfo", (e) => {
e.preventDefault();
g.dom("#notificationDialog").showModal();
});
g.addEvent("click", "notificationClose", (e) => {
g.dom("#notificationDialog").close();
});
g.addEvent("click", "notificationHide", (e) => {
g.dom(methods.selector).innerHTML = "";
});
return methods;
}
$g.addPlugin("GNotification", GNotification);
window.$gn = $g.getPlugin("GNotification");
$g.notification = $gn.show.bind($gn);
