CREATE TABLE IF NOT EXISTS `character_clothing` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `type` ENUM("Clothing", "Prop") NOT NULL DEFAULT "Clothing",
  `key` VARCHAR(32) NOT NULL,
  `drawable` INT NOT NULL,
  `texture` INT NOT NULL,
  `character_id` INT NOT NULL,
  FOREIGN KEY (`character_id`) REFERENCES characters(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);