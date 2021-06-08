/*
  Warnings:

  - A unique constraint covering the columns `[teamName]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Team.teamName_unique" ON "Team"("teamName");
