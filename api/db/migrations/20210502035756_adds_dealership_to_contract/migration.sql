/*
  Warnings:

  - Added the required column `dealershipId` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "dealershipId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Contract" ADD FOREIGN KEY ("dealershipId") REFERENCES "Dealership"("id") ON DELETE CASCADE ON UPDATE CASCADE;
