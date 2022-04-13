import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getusuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json({
        usuarios
    })
}

export const getusuario = async (req: Request, res: Response) => {
    const { idUsuario } = req.params;
    const usuario = await Usuario.findByPk(idUsuario)
    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${idUsuario}`
        })
    }
}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })
        if (existeEmail) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${body.email}`
            })
        }
        // const usuario = await Usuario.create(body);
        const usuario = new Usuario(body);
        await usuario.save();
        res.json(usuario)


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putUsuario = async (req: Request, res: Response) => {
    const { idUsuario } = req.params;
    const { body } = req;
    try {
        const usuario = await Usuario.findByPk(idUsuario);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe el usuario con id ${idUsuario}`
            })
        }
        if (body.email) {
            const existeEmail = await Usuario.findOne({
                where: {
                    email: body.email
                }
            })
            if (existeEmail) {
                return res.status(400).json({
                    msg: `Ya existe un usuario con el email ${body.email}`
                })
            }
        }
        await usuario.update(body)
        res.json(usuario)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { idUsuario } = req.params;
    try {
        const usuario = await Usuario.findByPk(idUsuario);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe el usuario con id ${idUsuario}`
            })
        }
        //eliminacion fisica
        //  await usuario.destroy();
        //elimicacion logica
        await usuario.update({estado: false});
        res.json(usuario)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}