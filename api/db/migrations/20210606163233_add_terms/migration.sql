/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the `_CategoryToTerm` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mileage` to the `Term` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Term` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToTerm" DROP CONSTRAINT "_CategoryToTerm_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToTerm" DROP CONSTRAINT "_CategoryToTerm_B_fkey";

-- AlterTable
ALTER TABLE "Term" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "mileage" INTEGER NOT NULL,
ADD COLUMN     "companyId" INTEGER NOT NULL,
ADD COLUMN     "categoryId" INTEGER;

-- DropTable
DROP TABLE "_CategoryToTerm";

-- CreateTable
CREATE TABLE "_SourceToTerm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SourceToTerm_AB_unique" ON "_SourceToTerm"("A", "B");

-- CreateIndex
CREATE INDEX "_SourceToTerm_B_index" ON "_SourceToTerm"("B");

-- AddForeignKey
ALTER TABLE "_SourceToTerm" ADD FOREIGN KEY ("A") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SourceToTerm" ADD FOREIGN KEY ("B") REFERENCES "Term"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Term" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Term" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
