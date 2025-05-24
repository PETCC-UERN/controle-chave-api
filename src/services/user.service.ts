import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface DeletUser {
  id: string;
}

interface UpdateUser {
  id: string;
  name?: string;
  email?: string;
}

const createUser = async (data: CreateUserDTO) => {
    const emailExistente = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    }) 

  if(emailExistente){
    throw new Error('Email já cadastrado');
  } 

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await prisma.user.create({
    data:{
        email: data.email,
        name: data.name,
        password: hashedPassword,
    }
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

const updateNameEmail = async (data: UpdateUser) => {
  const user = await prisma.user.findUnique({
    where: {
      id: data.id,
    },
  });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const updateData: { name?: string; email?: string } = {};
  if (data.name) updateData.name = data.name;
  if (data.email) updateData.email = data.email;

  const updateUser = await prisma.user.update({
    where: { id: data.id },
    data: updateData,
  });

  return updateUser;
};


export default {
  createUser,
  deleteUser,
  updateNameEmail,
};