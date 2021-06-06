-- AlterTable
ALTER TABLE "Make" ADD COLUMN     "dealershipId" INTEGER;

-- AddForeignKey
ALTER TABLE "Make" ADD FOREIGN KEY ("dealershipId") REFERENCES "Dealership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
