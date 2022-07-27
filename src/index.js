import {compose, pipe} from "lodash/fp"

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`

const transform = pipe(trim, toLowerCase, wrapInDiv);

let message = transform("   java   ");
console.log(message);