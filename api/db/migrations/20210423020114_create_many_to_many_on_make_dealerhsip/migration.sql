/*
  Warnings:

  - You are about to drop the column `dealershipId` on the `Make` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Make" DROP CONSTRAINT "Make_dealershipId_fkey";

-- AlterTable
ALTER TABLE "Make" DROP COLUMN "dealershipId";

-- CreateTable
CREATE TABLE "_DealershipToMake" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DealershipToMake_AB_unique" ON "_DealershipToMake"("A", "B");

-- CreateIndex
CREATE INDEX "_DealershipToMake_B_index" ON "_DealershipToMake"("B");

-- AddForeignKey
ALTER TABLE "_DealershipToMake" ADD FOREIGN KEY ("A") REFERENCES "Dealership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DealershipToMake" ADD FOREIGN KEY ("B") REFERENCES "Make"("id") ON DELETE CASCADE ON UPDATE CASCADE;
