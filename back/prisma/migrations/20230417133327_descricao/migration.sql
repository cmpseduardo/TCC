/*
  Warnings:

  - You are about to drop the column `caminho_imagem` on the `campanha` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `campanha` DROP COLUMN `caminho_imagem`,
    MODIFY `valor_arrecadado` DOUBLE NULL;

-- CreateTable
CREATE TABLE `imagemCampanha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caminho_imagem` VARCHAR(191) NOT NULL,
    `campanhaid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `imagemCampanha` ADD CONSTRAINT `imagemCampanha_campanhaid_fkey` FOREIGN KEY (`campanhaid`) REFERENCES `campanha`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
