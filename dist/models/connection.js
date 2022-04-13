"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const db = new types_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false;
});
exports.default = db;
//# sourceMappingURL=connection.js.map