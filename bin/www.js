#!/usr/bin/env node

const app = require('../src/index');

const port = 443;

app.listen(port, () => console.log(`Listening on port ${port}`));