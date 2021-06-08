/*
  Warnings:

  - You are about to drop the column `scale` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `projectStatus` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectType` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `securityLevel` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumbewr` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "scale",
DROP COLUMN "teamName",
ADD COLUMN     "projectStatus" TEXT NOT NULL,
ADD COLUMN     "projectType" TEXT NOT NULL,
ADD COLUMN     "effectDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "securityLevel" TEXT NOT NULL,
ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "phoneNumbewr" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeamToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeamToUser_AB_unique" ON "_TeamToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamToUser_B_index" ON "_TeamToUser"("B");

-- AddForeignKey
ALTER TABLE "_TeamToUser" ADD FOREIGN KEY ("A") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
