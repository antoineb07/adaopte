CREATE TABLE `pets`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `shelter_id` INT NOT NULL,
    `pet_type_id` INT NOT NULL,
    `pet_picture_id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `age` INT NULL,
    `zipcode` INT NOT NULL,
    `status` ENUM('DEAD', 'AVAILABLE', 'ADOPTED') NOT NULL,
    `arrived_date` DATETIME NOT NULL,
    `adopted_date` DATETIME NOT NULL
);
CREATE TABLE `pet_types`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pet_breeds_id` INT NOT NULL,
    `animal_type` VARCHAR(255) NOT NULL
);
CREATE TABLE `shelters`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `city` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL
);
CREATE TABLE `pet_pictures`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `url_picture` VARCHAR(255) NOT NULL,
    `alt_picture` VARCHAR(255) NOT NULL,
    `description_picture` VARCHAR(255) NOT NULL
);
CREATE TABLE `adopters`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pet_id` INT NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `adopters` ADD UNIQUE `adopters_email_unique`(`email`);
CREATE TABLE `volunteers`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `shelter_id` INT NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `motivation` VARCHAR(255) NOT NULL,
    `avaibality` ENUM(
        'WEEK',
        'WEEKEND',
        'ALL_WEEK',
        'OCCASIONALLYYY'
    ) NOT NULL
);
ALTER TABLE
    `volunteers` ADD UNIQUE `volunteers_email_unique`(`email`);
CREATE TABLE `pet_breeds`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `breed` VARCHAR(255) NOT NULL
);
CREATE TABLE `adoption_status`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `adopter_id` INT NOT NULL,
    `pet_id` INT NOT NULL,
    `status` ENUM('ACCEPTED', 'DECLINED', 'WAITING') NOT NULL
);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_pet_picture_id_foreign` FOREIGN KEY(`pet_picture_id`) REFERENCES `pet_pictures`(`id`);
ALTER TABLE
    `adoption_status` ADD CONSTRAINT `adoption_status_adopter_id_foreign` FOREIGN KEY(`adopter_id`) REFERENCES `adopters`(`id`);
ALTER TABLE
    `pet_types` ADD CONSTRAINT `pet_types_pet_breeds_id_foreign` FOREIGN KEY(`pet_breeds_id`) REFERENCES `pet_breeds`(`id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_shelter_id_foreign` FOREIGN KEY(`shelter_id`) REFERENCES `shelters`(`id`);
ALTER TABLE
    `adoption_status` ADD CONSTRAINT `adoption_status_pet_id_foreign` FOREIGN KEY(`pet_id`) REFERENCES `pets`(`id`);
ALTER TABLE
    `volunteers` ADD CONSTRAINT `volunteers_shelter_id_foreign` FOREIGN KEY(`shelter_id`) REFERENCES `shelters`(`id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_pet_type_id_foreign` FOREIGN KEY(`pet_type_id`) REFERENCES `pet_types`(`id`);