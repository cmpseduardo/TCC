/*
  Warnings:

  - Added the required column `acessoid` to the `cadastro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cadastro` ADD COLUMN `acessoid` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `nivelAcesso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cadastro` ADD CONSTRAINT `cadastro_acessoid_fkey` FOREIGN KEY (`acessoid`) REFERENCES `nivelAcesso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
