"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controller/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.getusuarios);
router.get('/:idUsuario', usuario_controller_1.getusuario);
router.post('/', usuario_controller_1.postUsuario);
router.put('/:idUsuario', usuario_controller_1.putUsuario);
router.delete('/:idUsuario', usuario_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map