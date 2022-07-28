import {compose, pipe} from "lodash/fp"

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`
const wrapInSpan = str => `<span>${str}</span>`
const wrap = (type, str) => `<${type}>${str}</${type}>`
const curryingWrap = (type) => (str) =>`<${type}>${str}</${type}>`

const transform = pipe(trim, toLowerCase, curryingWrap("span"));

let message = transform("   java   ");
console.log(message);