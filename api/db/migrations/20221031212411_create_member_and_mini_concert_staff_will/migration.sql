-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MiniConcertStaffWill" (
    "id" SERIAL NOT NULL,
    "StaffWantToDo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "MiniConcertStaffWill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_sub_key" ON "Member"("sub");

-- CreateIndex
CREATE UNIQUE INDEX "MiniConcertStaffWill_memberId_key" ON "MiniConcertStaffWill"("memberId");

-- AddForeignKey
ALTER TABLE "MiniConcertStaffWill" ADD CONSTRAINT "MiniConcertStaffWill_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
