/*
  Warnings:

  - You are about to drop the column `isDefault` on the `Category` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Category.companyId_isDefault_unique";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "isDefault";
