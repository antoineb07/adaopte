CREATE TABLE `pets`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `location_id` BIGINT NOT NULL,
    `information_id` BIGINT NOT NULL,
    `description_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `information`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL,
    `breed` VARCHAR(255) NOT NULL
);
CREATE TABLE `location`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `city` VARCHAR(255) NOT NULL,
    `zipcode` BIGINT NOT NULL
);
CREATE TABLE `description`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `description` VARCHAR(255) NOT NULL,
    `age` VARCHAR(255) NOT NULL,
    `descrition_picture` VARCHAR(255) NOT NULL
);
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `information-adopting_id` BIGINT NOT NULL,
    `information-volunteer_id` BIGINT NOT NULL,
    `admin_id` BIGINT NOT NULL
);
CREATE TABLE `information-adopting`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `form_id` BIGINT NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL
);
CREATE TABLE `form`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pets_id` BIGINT NOT NULL,
    `mail` VARCHAR(255) NOT NULL,
    `adress` VARCHAR(255) NOT NULL
);
CREATE TABLE `information-volunteer`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `form-volunteer_id` BIGINT NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL
);
CREATE TABLE `form-volunteer`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pets_id` BIGINT NOT NULL,
    `mail` VARCHAR(255) NOT NULL,
    `zipcode` INT NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `motivation` VARCHAR(255) NOT NULL,
    `availability` VARCHAR(255) NOT NULL
);
CREATE TABLE `admin`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `information-admin_id` BIGINT NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL
);
CREATE TABLE `information-admin`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `mail` VARCHAR(255) NOT NULL,
    `job` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_description_id_foreign` FOREIGN KEY(`description_id`) REFERENCES `description`(`id`);
ALTER TABLE
    `users` ADD CONSTRAINT `users_admin_id_foreign` FOREIGN KEY(`admin_id`) REFERENCES `admin`(`id`);
ALTER TABLE
    `form` ADD CONSTRAINT `form_pets_id_foreign` FOREIGN KEY(`pets_id`) REFERENCES `pets`(`id`);
ALTER TABLE
    `users` ADD CONSTRAINT `users_information_volunteer_id_foreign` FOREIGN KEY(`information-volunteer_id`) REFERENCES `information-volunteer`(`id`);
ALTER TABLE
    `information-adopting` ADD CONSTRAINT `information_adopting_form_id_foreign` FOREIGN KEY(`form_id`) REFERENCES `form`(`id`);
ALTER TABLE
    `admin` ADD CONSTRAINT `admin_information_admin_id_foreign` FOREIGN KEY(`information-admin_id`) REFERENCES `information-admin`(`id`);
ALTER TABLE
    `form-volunteer` ADD CONSTRAINT `form_volunteer_pets_id_foreign` FOREIGN KEY(`pets_id`) REFERENCES `pets`(`id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_location_id_foreign` FOREIGN KEY(`location_id`) REFERENCES `location`(`id`);
ALTER TABLE
    `users` ADD CONSTRAINT `users_information_adopting_id_foreign` FOREIGN KEY(`information-adopting_id`) REFERENCES `information-adopting`(`id`);
ALTER TABLE
    `pets` ADD CONSTRAINT `pets_information_id_foreign` FOREIGN KEY(`information_id`) REFERENCES `information`(`id`);
ALTER TABLE
    `information-volunteer` ADD CONSTRAINT `information_volunteer_form_volunteer_id_foreign` FOREIGN KEY(`form-volunteer_id`) REFERENCES `form-volunteer`(`id`);