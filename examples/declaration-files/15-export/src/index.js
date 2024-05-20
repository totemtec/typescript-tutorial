"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var foo_1 = require("foo");
console.log(foo_1.name);
var myName = (0, foo_1.getName)();
var cat = new foo_1.Animal('Tom');
var directions = [foo_1.Directions.Up, foo_1.Directions.Down, foo_1.Directions.Left, foo_1.Directions.Right];
var options = {
    data: {
        name: 'foo'
    }
};
