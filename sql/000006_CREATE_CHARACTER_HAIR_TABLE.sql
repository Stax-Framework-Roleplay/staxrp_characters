CREATE TABLE IF NOT EXISTS `character_hair` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `style` INT NOT NULL,
  `color` INT NOT NULL,
  `highlight` INT NOT NULL,
  `character_id` INT NOT NULL,
  FOREIGN KEY (`character_id`) REFERENCES characters(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)