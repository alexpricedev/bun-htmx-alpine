// From https://unpkg.com/htmx.org@1.9.12/dist/ext/json-enc.js
htmx.defineExtension("json-enc", {
  onEvent: function (name, evt) {
    if (name === "htmx:configRequest") {
      evt.detail.headers["Content-Type"] = "application/json";
    }
  },
  encodeParameters: function (xhr, parameters) {
    xhr.overrideMimeType("text/json");
    return JSON.stringify(parameters);
  },
});
