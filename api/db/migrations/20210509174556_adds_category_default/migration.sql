/*
  Warnings:

  - Made the column `companyId` on table `Dealership` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Dealership" ALTER COLUMN "companyId" SET NOT NULL;
