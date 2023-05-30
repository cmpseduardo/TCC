-- CreateTable
CREATE TABLE `nivelAcesso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cadastro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `site` VARCHAR(191) NULL,
    `acessoid` INTEGER NOT NULL,

    UNIQUE INDEX `cadastro_cpf_key`(`cpf`),
    UNIQUE INDEX `cadastro_cnpj_key`(`cnpj`),
    UNIQUE INDEX `cadastro_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campanha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoria` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `objetivo` VARCHAR(191) NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `prazo` VARCHAR(191) NOT NULL,
    `contato` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `valor_meta` DOUBLE NOT NULL,
    `valor_arrecadado` DOUBLE NULL,
    `atualizacoes` DATETIME(3) NOT NULL,
    `chave_pix` VARCHAR(191) NOT NULL,
    `organizadorid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagemCampanha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caminho_imagem` VARCHAR(191) NOT NULL,
    `campanhaid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagemOrganizador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caminho_imagem` VARCHAR(191) NOT NULL,
    `organizadorid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cadastro` ADD CONSTRAINT `cadastro_acessoid_fkey` FOREIGN KEY (`acessoid`) REFERENCES `nivelAcesso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `campanha` ADD CONSTRAINT `campanha_organizadorid_fkey` FOREIGN KEY (`organizadorid`) REFERENCES `cadastro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagemCampanha` ADD CONSTRAINT `imagemCampanha_campanhaid_fkey` FOREIGN KEY (`campanhaid`) REFERENCES `campanha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagemOrganizador` ADD CONSTRAINT `imagemOrganizador_organizadorid_fkey` FOREIGN KEY (`organizadorid`) REFERENCES `cadastro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
