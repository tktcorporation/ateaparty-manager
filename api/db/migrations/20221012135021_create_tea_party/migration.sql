-- CreateTable
CREATE TABLE "TeaParty" (
    "id" SERIAL NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeaParty_pkey" PRIMARY KEY ("id")
);
