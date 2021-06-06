/*
  Warnings:

  - You are about to drop the `Models` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_makeId_fkey";

-- DropTable
DROP TABLE "Models";

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "makeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Model.companyId_makeId_name_unique" ON "Model"("companyId", "makeId", "name");

-- AddForeignKey
ALTER TABLE "Model" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD FOREIGN KEY ("makeId") REFERENCES "Make"("id") ON DELETE CASCADE ON UPDATE CASCADE;
