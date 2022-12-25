-- CreateTable
CREATE TABLE `TeaParty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scheduledAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeaPartyStaff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teaPartyId` INTEGER NOT NULL,
    `mcStaffId` INTEGER NOT NULL,
    `mcSubStaffId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TeaPartyStaff_teaPartyId_key`(`teaPartyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConfirmedSub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ConfirmedSub_sub_key`(`sub`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Member_sub_key`(`sub`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiniConcertStaffWork` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `management` ENUM('CanDo', 'TeachMe', 'NotNow') NOT NULL DEFAULT 'NotNow',
    `mc` ENUM('CanDo', 'TeachMe', 'NotNow') NOT NULL DEFAULT 'NotNow',
    `visitorGuide` ENUM('CanDo', 'TeachMe', 'NotNow') NOT NULL DEFAULT 'NotNow',
    `photography` ENUM('CanDo', 'TeachMe', 'NotNow') NOT NULL DEFAULT 'NotNow',
    `memberId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `MiniConcertStaffWork_memberId_key`(`memberId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeaPartyStaff` ADD CONSTRAINT `TeaPartyStaff_teaPartyId_fkey` FOREIGN KEY (`teaPartyId`) REFERENCES `TeaParty`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeaPartyStaff` ADD CONSTRAINT `TeaPartyStaff_mcStaffId_fkey` FOREIGN KEY (`mcStaffId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeaPartyStaff` ADD CONSTRAINT `TeaPartyStaff_mcSubStaffId_fkey` FOREIGN KEY (`mcSubStaffId`) REFERENCES `Member`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniConcertStaffWork` ADD CONSTRAINT `MiniConcertStaffWork_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
