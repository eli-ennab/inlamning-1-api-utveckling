/*
  Warnings:

  - The primary key for the `orderitems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `orderitems` table. All the data in the column will be lost.
  - Added the required column `id` to the `OrderItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `OrderItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orderitems` DROP PRIMARY KEY,
    DROP COLUMN `product_id`,
    ADD COLUMN `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD COLUMN `orderId` INTEGER UNSIGNED NULL,
    ADD COLUMN `productId` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
