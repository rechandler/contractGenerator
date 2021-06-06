/*
  Warnings:

  - A unique constraint covering the columns `[companyId,isDefault]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Category.companyId_isDefault_unique" ON "Category"("companyId", "isDefault");
