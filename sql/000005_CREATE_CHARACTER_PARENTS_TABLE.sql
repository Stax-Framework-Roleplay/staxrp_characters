CREATE TABLE IF NOT EXISTS `character_parents` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `father` INT NOT NULL,
  `mother` INT NOT NULL,
  `shape` FLOAT NOT NULL,
  `skin` FLOAT NOT NULL,
  `mix` FLOAT NOT NULL,
  `character_id` INT NOT NULL,
  FOREIGN KEY (`character_id`) REFERENCES characters(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);