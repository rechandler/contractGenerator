/*
  Warnings:

  - You are about to drop the column `description` on the `Models` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Models" DROP COLUMN "description",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Models" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
