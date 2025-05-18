import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
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

export default {
  createUser,
};