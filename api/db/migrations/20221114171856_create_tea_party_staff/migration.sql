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

-- CreateIndex
CREATE UNIQUE INDEX "TeaPartyStaff_teaPartyId_key" ON "TeaPartyStaff"("teaPartyId");

-- AddForeignKey
ALTER TABLE "TeaPartyStaff" ADD CONSTRAINT "TeaPartyStaff_teaPartyId_fkey" FOREIGN KEY ("teaPartyId") REFERENCES "TeaParty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeaPartyStaff" ADD CONSTRAINT "TeaPartyStaff_mcStaffId_fkey" FOREIGN KEY ("mcStaffId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeaPartyStaff" ADD CONSTRAINT "TeaPartyStaff_mcSubStaffId_fkey" FOREIGN KEY ("mcSubStaffId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
