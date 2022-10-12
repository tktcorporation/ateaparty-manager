-- CreateTable
CREATE TABLE "ConfirmedSub" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,

    CONSTRAINT "ConfirmedSub_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmedSub_sub_key" ON "ConfirmedSub"("sub");
