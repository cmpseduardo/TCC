/*
  Warnings:

  - You are about to drop the column `foto` on the `campanha` table. All the data in the column will be lost.
  - Added the required column `caminho_imagem` to the `campanha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `campanha` DROP COLUMN `foto`,
    ADD COLUMN `caminho_imagem` VARCHAR(191) NOT NULL;
