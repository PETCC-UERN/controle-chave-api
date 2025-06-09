-- CreateTable
CREATE TABLE "Emprestimo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataEmprestimo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataDevolucaoPrevista" DATETIME NOT NULL,
    "dataDevolucaoReal" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'EM_ANDAMENTO',
    "userId" TEXT NOT NULL,
    "tecnicoAprovadorId" TEXT NOT NULL,
    "tecnicoRecebedorId" TEXT,
    "objetoId" TEXT NOT NULL,
    CONSTRAINT "Emprestimo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Emprestimo_tecnicoAprovadorId_fkey" FOREIGN KEY ("tecnicoAprovadorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Emprestimo_tecnicoRecebedorId_fkey" FOREIGN KEY ("tecnicoRecebedorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Emprestimo_objetoId_fkey" FOREIGN KEY ("objetoId") REFERENCES "Objeto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataReserva" DATETIME NOT NULL,
    "confirmado" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "objetoId" TEXT NOT NULL,
    CONSTRAINT "Reserva_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserva_objetoId_fkey" FOREIGN KEY ("objetoId") REFERENCES "Objeto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
