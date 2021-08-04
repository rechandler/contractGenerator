/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Source` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Source" DROP CONSTRAINT "Source_categoryId_fkey";

-- AlterTable
ALTER TABLE "Source" DROP COLUMN "categoryId",
ADD COLUMN     "states" TEXT[];

-- CreateTable
CREATE TABLE "_CategoryToSource" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToSource_AB_unique" ON "_CategoryToSource"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToSource_B_index" ON "_CategoryToSource"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToSource" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSource" ADD FOREIGN KEY ("B") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;
