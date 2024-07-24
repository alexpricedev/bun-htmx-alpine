htmx.defineExtension("event-tracker", {
  onEvent: function (name, evt) {
    console.log("Fired event: " + name, evt);
  },
});
