-- CreateEnum
CREATE TYPE "MiniConcertStaffWorkEnergy" AS ENUM ('CanDo', 'TeachMe', 'NotNow');

-- CreateTable
CREATE TABLE "TeaParty" (
    "id" SERIAL NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeaParty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeaPartyStaff" (
    "id" SERIAL NOT NULL,
    "teaPartyId" INTEGER NOT NULL,
    "mcStaffId" INTEGER NOT NULL,
    "mcSubStaffId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeaPartyStaff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfirmedSub" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConfirmedSub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RW_DataMigration_pkey" PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeaPartyStaff_teaPartyId_key" ON "TeaPartyStaff"("teaPartyId");

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmedSub_sub_key" ON "ConfirmedSub"("sub");

-- CreateIndex
CREATE UNIQUE INDEX "Member_sub_key" ON "Member"("sub");

-- CreateIndex
CREATE UNIQUE INDEX "MiniConcertStaffWork_memberId_key" ON "MiniConcertStaffWork"("memberId");

-- AddForeignKey
ALTER TABLE "TeaPartyStaff" ADD CONSTRAINT "TeaPartyStaff_teaPartyId_fkey" FOREIGN KEY ("teaPartyId") REFERENCES "TeaParty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeaPartyStaff" ADD CONSTRAINT "TeaPartyStaff_mcStaffId_fkey" FOREIGN KEY ("mcStaffId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeaPartyStaff" ADD CONSTRAINT "TeaPartyStaff_mcSubStaffId_fkey" FOREIGN KEY ("mcSubStaffId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiniConcertStaffWork" ADD CONSTRAINT "MiniConcertStaffWork_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
