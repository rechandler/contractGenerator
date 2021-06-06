/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Term` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Term" DROP CONSTRAINT "Term_categoryId_fkey";

-- AlterTable
ALTER TABLE "Term" DROP COLUMN "categoryId";
