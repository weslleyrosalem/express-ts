# Express-TS Template

Docker and Kube-ready, Microclimate-compatible Express application in TypeScript.


## Iterative Development Support
### With Docker
To use with Docker, import this project as a Microclimate template. Microclimate's iterative dev support for Docker projects will take care of the rest.

### Without Docker
Run:

`npm run ts-watch`

In a separate terminal:

`npm run dev`

The project's TypeScript will be compiled incrementally, and static files will be copied into the dist/ folder on change. The app is restarted after any static file change or TypeScript compile.
