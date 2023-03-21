-- CreateTable
CREATE TABLE "TeaParty" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "hostId" INTEGER NOT NULL,
    "cohostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeaParty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RW_DataMigration_pkey" PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeaParty_date_key" ON "TeaParty"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Member_sub_key" ON "Member"("sub");

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmedSub_sub_key" ON "ConfirmedSub"("sub");

-- AddForeignKey
ALTER TABLE "TeaParty" ADD CONSTRAINT "TeaParty_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeaParty" ADD CONSTRAINT "TeaParty_cohostId_fkey" FOREIGN KEY ("cohostId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
