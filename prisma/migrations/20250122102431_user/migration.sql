-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL,
    `is_bot` BOOLEAN NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `language_code` VARCHAR(191) NOT NULL,
    `is_adim` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
