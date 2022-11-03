-- CreateEnum
CREATE TYPE "MiniConcertStaffWorkEnergy" AS ENUM ('CanDo', 'TeachMe', 'NotNow');

-- CreateTable
CREATE TABLE "MiniConcertStaffWork" (
    "id" SERIAL NOT NULL,
    "management" "MiniConcertStaffWorkEnergy" NOT NULL DEFAULT 'NotNow',
    "mc" "MiniConcertStaffWorkEnergy" NOT NULL DEFAULT 'NotNow',
    "visitorGuide" "MiniConcertStaffWorkEnergy" NOT NULL DEFAULT 'NotNow',
    "photography" "MiniConcertStaffWorkEnergy" NOT NULL DEFAULT 'NotNow',
    "memberId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MiniConcertStaffWork_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MiniConcertStaffWork_memberId_key" ON "MiniConcertStaffWork"("memberId");

-- AddForeignKey
ALTER TABLE "MiniConcertStaffWork" ADD CONSTRAINT "MiniConcertStaffWork_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
