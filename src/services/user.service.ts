import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  matricula: string;
  tipoUser: 'ALUNO' | 'PROFESSOR';
}
interface DeletUser {
  id: string;
}
const listUsers = async () => { 
   return await prisma.user.findMany();

};
const createUser = async (data: CreateUserDTO) => {
  const emailExistente = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (emailExistente) {
    throw new Error('Email já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

const deleteUser = async (data: DeletUser) => {
  const user = await prisma.user.findUnique({
    where: {
      id: data.id,
    }
  })

  if(!user){
    throw new Error('Usuário não encontrado')
  }
  
  await prisma.user.delete({
    where: {
      id: data.id,
    }
  }) 
} 

const updateUser = async (id:string, data: Partial<CreateUserDTO>) => {
try {

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  
  if (!user) {
    throw new Error('Usuário não encontrado');
  }
  
  const updateUser = await prisma.user.update({
    where: { id },
    data: {
      ...data,
      password: data.password ? await bcrypt.hash(data.password, 10) : user.password,
    },
    omit: {
      password: true, // Exclui o campo de senha do retorno
    }
  });
  
  return updateUser;
  
} catch (error: any) {
  return error.message;
}

};

export default {
  listUsers,
  createUser,
  deleteUser,
  updateUser,
};