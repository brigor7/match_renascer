"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(routes_1["default"]);
app.listen(3333, function () { return console.log('Server Match_Renascer Started!'); });
