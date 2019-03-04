#!/bin/sh

# This script is run as the docker CMD. It launches ts-watch in the background for incremental compilation,
# then launches the app using nodemon.

set -x
nohup sh -c "npm run ts-watch &"
npm run dev
