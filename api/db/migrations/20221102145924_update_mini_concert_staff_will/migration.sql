/*
  Warnings:

  - You are about to drop the column `StaffWantToDo` on the `MiniConcertStaffWill` table. All the data in the column will be lost.
  - Added the required column `staffWantToDo` to the `MiniConcertStaffWill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffWill` to the `MiniConcertStaffWill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MiniConcertStaffWill" DROP COLUMN "StaffWantToDo",
ADD COLUMN     "staffWantToDo" TEXT NOT NULL,
ADD COLUMN     "staffWill" BOOLEAN NOT NULL;
