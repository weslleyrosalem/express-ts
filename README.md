# Express-TS Template

Docker and Kube-ready, Microclimate-compatible Express application in TypeScript.

## Add the template to your Microclimate instance
See [the documentation](https://microclimate-dev2ops.github.io/addingdevelopmentlanguages) for more information.

### Locally
1. `git clone https://github.com/tetchel/express-ts.git && cd express-ts`
2. Copy the `express-ts` subdirectory (containing only `microclimate.yaml`) into your workspace:

`cp -r express-ts ~/microclimate-workspace/.extensions`

You must **omit** the trailing slash from `express-ts` so `cp` will perform a recursive directory copy.

3. Restart Microclimate. This template can then be found in the Microclimate *Templates* view.

### On ICP
1. `git clone https://github.com/tetchel/express-ts.git && cd express-ts`
2. `cp` the `express-ts` subdirectory (containing only `microclimate.yaml`) to the main Microclimate pod:

`kubectl cp -n <namespace> express-ts/ microclimate-ibm-microclimate-<suffix>:microclimate-workspace/<icp-user>/.extensions/`

You must **include** the trailing slash in `express-ts/` so `kubectl` will perform a recursive directory copy.

3. Restart the pod from the above command

`kubectl delete po -n <namespace> microclimate-ibm-microclimate-<suffix>`

4. Once the pod restarts, this template can be found in the Microclimate *Templates* view.

## Iterative Development Support
### With Docker
To use with Docker, import this project as a Microclimate template. Microclimate's iterative dev support for Docker projects will take care of the rest.

Without Microclimate, you can also change the Dockerfile `CMD` to call `dev.sh`, which will do the steps below.

### Without Docker
Run:

`npm run ts-watch`

In a separate terminal:

`npm run dev`

The project's TypeScript will be compiled incrementally, and static files will be copied into the dist/ folder on change. The app is restarted after any static file change or TypeScript compile.
