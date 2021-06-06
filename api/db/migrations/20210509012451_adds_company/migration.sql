/*
  Warnings:

  - You are about to drop the column `dealershipId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_dealershipId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "dealershipId",
ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Dealership" ADD COLUMN     "companyId" INTEGER;

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dealership" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
