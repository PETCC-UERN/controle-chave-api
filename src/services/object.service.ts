import prisma from '../config/prisma';

const listObject = async () => { 
   return await prisma.objeto.findMany();

};


export default {
  listObject,
  
};