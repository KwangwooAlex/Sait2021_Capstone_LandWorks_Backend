/*
  Warnings:

  - You are about to drop the column `name` on the `Team` table. All the data in the column will be lost.
  - Added the required column `teamName` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "name",
ADD COLUMN     "teamName" TEXT NOT NULL;
