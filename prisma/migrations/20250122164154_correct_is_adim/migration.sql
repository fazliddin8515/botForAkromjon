/*
  Warnings:

  - You are about to drop the column `is_adim` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `is_adim`,
    ADD COLUMN `is_admin` BOOLEAN NOT NULL DEFAULT false;
