#!/bin/sh

aws --profile code.cdn.mozilla.net s3 cp --acl public-read --cache-control max-age=86400 --content-type application/json devices.json s3://code-origin-cdn-mozilla-net/devices/devices.json
