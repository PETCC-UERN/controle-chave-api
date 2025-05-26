import prisma from '../config/prisma';

interface CreateObjectDTO{
    id: string;
    name: string;
    disponivel: boolean;
}

const createObject = async (data: CreateObjectDTO)=>{
    const object = await prisma.objeto.create({data:{
        name: data.name,
        disponivel: data.disponivel,
    }})

    return object;
}

export default{
    createObject
}