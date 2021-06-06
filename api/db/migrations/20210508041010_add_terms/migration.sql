-- CreateTable
CREATE TABLE "Term" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "months" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToTerm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToTerm_AB_unique" ON "_CategoryToTerm"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToTerm_B_index" ON "_CategoryToTerm"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToTerm" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTerm" ADD FOREIGN KEY ("B") REFERENCES "Term"("id") ON DELETE CASCADE ON UPDATE CASCADE;
