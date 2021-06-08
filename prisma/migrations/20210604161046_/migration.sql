/*
  Warnings:

  - A unique constraint covering the columns `[projectName]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Project.projectName_unique" ON "Project"("projectName");
