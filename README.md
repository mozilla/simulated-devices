# devices.json

A catalog of common web-enabled devices and their properties.

    {
      TYPES: [ "phones", … ],
      phones: [
        { name: "Le Phone", … }
      ]
    }

## Device

- `name` Brand and model(s).
- `width` Viewport width.
- `height` Viewport height.
- `pixelRatio` Ratio from viewport to physical screen pixels.
- `userAgent` UserAgent string of the device's browser.
- `touch` Whether the device has a touch screen.
- `firefoxOS` Whether the device supports Firefox OS.

## Types

- `phones` Smart phones.
- `tablets` Tablets.
- `laptops` Laptops.
- `televisions` TVs.
- `consoles` Gaming consoles.
- `watches` Smart watches.

## Contribute

- Use the `check.html` helper.
- Submit [pull requests](https://github.com/jankeromnes/devices.json/pulls).

## Sources

- Chrome DevTools: [OverridesUI.js](https://code.google.com/p/chromium/codesearch#chromium/src/third_party/WebKit/Source/devtools/front_end/toolbox/OverridesUI.js&l=251).
- Wikipedia: [Comparison of Firefox OS devices](https://en.wikipedia.org/wiki/Comparison_of_Firefox_OS_devices).
- MDN: [Firefox OS compatible devices](https://developer.mozilla.org/en-US/Firefox_OS/Firefox_OS_build_prerequisites).
- My Tesla Motors: [Model S Web Browser Capabilities](http://my.teslamotors.com/fr_CA/forum/forums/tesla-model-s-web-browser-capabilities).
- Various other online sources.
