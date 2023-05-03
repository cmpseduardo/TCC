-- CreateTable
CREATE TABLE `cadastro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cadastro_cpf_key`(`cpf`),
    UNIQUE INDEX `cadastro_cnpj_key`(`cnpj`),
    UNIQUE INDEX `cadastro_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campanha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `foto` LONGBLOB NOT NULL,
    `objetivo` VARCHAR(191) NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `prazo` VARCHAR(191) NOT NULL,
    `contato` VARCHAR(191) NOT NULL,
    `valor_meta` DOUBLE NOT NULL,
    `valor_arrecadado` DOUBLE NOT NULL,
    `atualizacoes` DATETIME(3) NOT NULL,
    `chave_pix` VARCHAR(191) NOT NULL,
    `organizadorid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `campanha` ADD CONSTRAINT `campanha_organizadorid_fkey` FOREIGN KEY (`organizadorid`) REFERENCES `cadastro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
