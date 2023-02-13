CREATE TABLE IF NOT EXISTS `characters` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstname` VARCHAR(20) NOT NULL,
  `lastname` VARCHAR(20) NOT NULL,
  `dob` VARCHAR(20) NOT NULL,
  `gender` ENUM("Male", "Female") NOT NULL DEFAULT "Male",
  `model` VARCHAR(20) NOT NULL DEFAULT "mp_m_freemode_01",
  `user_id` INT NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES users(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);