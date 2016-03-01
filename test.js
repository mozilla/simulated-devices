var fs = require("fs");

// The types of each required device property.
var deviceProperties = {
  name: "string",
  width: "number",
  height: "number",
  pixelRatio: "number",
  userAgent: "string",
  touch: "boolean",
  firefoxOS: "boolean",
  os: "string"
};

function test() {

  // Check that the JSON file can be parsed.
  var devices = JSON.parse(fs.readFileSync("./devices.json", "utf8"));

  // Take a look at the whole catalog.
  devices.TYPES.forEach(function(type) {
    var list = devices[type];

    // Check that there are devices for that list.
    if (!Array.isArray(list) || list.length < 1) {
      throw new Error("No devices of type: " + type);
    }

    // Take a look at all the devices.
    list.forEach(function(device) {
      // Verify that the device has all the right properties.
      for (var property in deviceProperties) {
        if (typeof device[property] !== deviceProperties[property]) {
          throw new Error("Bad property " + property + " in device " +
            JSON.stringify(device, null, 2));
        }
      }
    });
  });
}

test();

console.log("All tests passed.");