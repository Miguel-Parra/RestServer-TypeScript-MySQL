import { Router } from 'express';
import { deleteUsuario, getusuario, getusuarios, postUsuario, putUsuario } from '../controller/usuario.controller';

const router = Router();

router.get('/', getusuarios);
router.get('/:idUsuario', getusuario);
router.post('/', postUsuario);
router.put('/:idUsuario', putUsuario);
router.delete('/:idUsuario', deleteUsuario);

export default router;