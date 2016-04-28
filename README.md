# canary-build
A service used for canary testing container builds.

## Overview

- Simple [Hapi](https://github.com/hapijs/hapi) HTTP Server
- Listens on port defined by `process.env.PORT`
- `GET /` - The only route, returns the number of times the route has been
  requested.
- Server start and each request is logged via [bunyan](https://github.com/trentm/node-bunyan)

## Container Details

- Stack Type / Version: Node.js `>= 4`
- Packages: *none*
- Build Commands: `npm install`
- Container CMD: `npm start`

## License
MIT
