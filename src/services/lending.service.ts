import prisma from '../config/prisma';

interface UpdateEmprestimoDTO {
  dataDevolucaoEmprestimo?: Date;
  status?: "PENDENTE" | "REPROVADO" | "EM_USO" | "DEVOLVIDO" | "ATRASADO";
  tecnicoRecebedorId?: string;
}

const updateEmprestimo = async (id: string, data: UpdateEmprestimoDTO) => {
  try {
    const emprestimoExistente = await prisma.emprestimo.findUnique({
      where: { id },
    });

    if (!emprestimoExistente) {
      throw new Error('Empréstimo não encontrado');
    }

    const emprestimoAtualizado = await prisma.emprestimo.update({
      where: { id },
      data: {
        dataDevolucaoEmprestimo: data.dataDevolucaoEmprestimo,
        status: data.status,
        tecnicoRecebedorId: data.tecnicoRecebedorId,
      },
    });

    return emprestimoAtualizado;
  } catch (error: any) {
    throw new Error(error.message || 'Erro ao atualizar o empréstimo');
  }
};


export default {
  updateEmprestimo,
};
