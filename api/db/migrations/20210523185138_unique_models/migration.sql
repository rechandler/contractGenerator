/*
  Warnings:

  - A unique constraint covering the columns `[companyId,makeId,name]` on the table `Models` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `makeId` to the `Models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Models" ADD COLUMN     "makeId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Models.companyId_makeId_name_unique" ON "Models"("companyId", "makeId", "name");

-- AddForeignKey
ALTER TABLE "Models" ADD FOREIGN KEY ("makeId") REFERENCES "Make"("id") ON DELETE CASCADE ON UPDATE CASCADE;
