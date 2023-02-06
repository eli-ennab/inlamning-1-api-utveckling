/*
  Warnings:

  - You are about to alter the column `customer_postcode` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(6)`.
  - The primary key for the `orderitems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `order_id` to the `OrderItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `customer_postcode` VARCHAR(6) NOT NULL;

-- AlterTable
ALTER TABLE `orderitems` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `order_id` INTEGER UNSIGNED NOT NULL,
    MODIFY `product_id` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
