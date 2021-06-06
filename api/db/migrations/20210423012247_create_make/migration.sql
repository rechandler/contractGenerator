-- CreateTable
CREATE TABLE "Make" (
    "id" SERIAL NOT NULL,
    "makeName" TEXT NOT NULL,
    "display" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Make.makeName_unique" ON "Make"("makeName");
