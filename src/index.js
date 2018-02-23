import jslib from './lib';
import rslib from '../Cargo.toml';


console.time("rs");
console.log(rslib.make_person("greg", 32));
console.timeEnd("rs");

console.time("js");
console.log(jslib.make_person("greg", 32));
console.timeEnd("js");
