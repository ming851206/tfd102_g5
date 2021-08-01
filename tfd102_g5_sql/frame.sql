-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema JUMPER
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema JUMPER
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `JUMPER` DEFAULT CHARACTER SET utf8 ;
USE `JUMPER` ;

-- -----------------------------------------------------
-- Table `JUMPER`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`member` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `birthday` DATE NULL,
  `phone` CHAR(10) NULL,
  `avatar` VARCHAR(45) NULL,
  `level` INT NOT NULL,
  `account_status` INT NOT NULL COMMENT '會員狀態',
  `created_at` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
COMMENT = '會員';


-- -----------------------------------------------------
-- Table `JUMPER`.`product_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`product_info` (
  `ID` INT NOT NULL,
  `category` INT NOT NULL COMMENT '分類\n',
  `title` VARCHAR(45) NOT NULL COMMENT '主題',
  `content` VARCHAR(255) NOT NULL COMMENT '\n內容 ',
  `intro_pics` VARCHAR(255) NOT NULL,
  `total_people` INT NOT NULL,
  `fav_count` INT NOT NULL COMMENT '收藏人數\n',
  `comment_count` INT NOT NULL COMMENT '評價人數',
  `intro_video` VARCHAR(255) NOT NULL,
  `is_checked` INT NOT NULL,
  `reject_reason` VARCHAR(45) NULL COMMENT '退件原因',
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
COMMENT = '旅程資訊';


-- -----------------------------------------------------
-- Table `JUMPER`.`session`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`session` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `product_info_ID` INT NOT NULL,
  `is_group` INT NOT NULL COMMENT '包場狀態\n',
  `attendence` INT NOT NULL COMMENT '參加人數',
  `vedio_link` VARCHAR(255) NOT NULL,
  `started_at` VARCHAR(25) NOT NULL,
  `ended_at` VARCHAR(25) NOT NULL,
  INDEX `FK_PRODUCT_SESSION_PRODUCT_INFO_ID_idx` (`product_info_ID` ASC) VISIBLE,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_SESSION_PRODUCT_INFO_ID`
    FOREIGN KEY (`product_info_ID`)
    REFERENCES `JUMPER`.`product_info` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '旅程場次';


-- -----------------------------------------------------
-- Table `JUMPER`.`trip_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`trip_order` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `member_ID` INT NOT NULL,
  `session_ID` INT NOT NULL,
  `status` INT NOT NULL,
  `created_at` VARCHAR(25) NOT NULL,
  `is_mailed` INT NOT NULL COMMENT '發信狀態\n',
  `price` INT NOT NULL,
  `people` INT NOT NULL,
  `is_alerted` BIT(1) NOT NULL COMMENT '紅點通知',
  `is_clicked` BIT(1) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_ORDER_MEMBER_ID_idx` (`member_ID` ASC) VISIBLE,
  INDEX `FK_ORDER_SESSION_ID_idx` (`session_ID` ASC) VISIBLE,
  CONSTRAINT `FK_ORDER_MEMBER_ID`
    FOREIGN KEY (`member_ID`)
    REFERENCES `JUMPER`.`member` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_ORDER_SESSION_ID`
    FOREIGN KEY (`session_ID`)
    REFERENCES `JUMPER`.`session` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '旅程訂單';


-- -----------------------------------------------------
-- Table `JUMPER`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`comment` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `member_ID` INT NOT NULL,
  `product_ID` INT NOT NULL,
  `star` INT NOT NULL,
  `content` VARCHAR(1025) NOT NULL COMMENT '評價內容',
  `create_at` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_PRODUCT_APPRAISE_MEMBER_ID_idx` (`member_ID` ASC) VISIBLE,
  INDEX `FK_PRODUCT_APPRAISE_PRODUCT_ID_idx` (`product_ID` ASC) VISIBLE,
  CONSTRAINT `FK_COMMENT_MEMBER_ID`
    FOREIGN KEY (`member_ID`)
    REFERENCES `JUMPER`.`member` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_COMMENT_PRODUCT_ID`
    FOREIGN KEY (`product_ID`)
    REFERENCES `JUMPER`.`product_info` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '產品評價';


-- -----------------------------------------------------
-- Table `JUMPER`.`fav`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`fav` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `member_ID` INT NOT NULL,
  `product_info_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_LOVE_MEMBER_ID_idx` (`member_ID` ASC) VISIBLE,
  INDEX `FK_LOVE_PRODUCT_ID_idx` (`product_info_ID` ASC) VISIBLE,
  CONSTRAINT `FK_FAV_MEMBER_ID`
    FOREIGN KEY (`member_ID`)
    REFERENCES `JUMPER`.`member` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_FAV_PRODUCT_ID`
    FOREIGN KEY (`product_info_ID`)
    REFERENCES `JUMPER`.`product_info` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '我的最愛';


-- -----------------------------------------------------
-- Table `JUMPER`.`coupon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`coupon` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `source` INT NOT NULL COMMENT '優惠券來源',
  `code` VARCHAR(45) NOT NULL COMMENT '優惠碼',
  `content` VARCHAR(45) NOT NULL COMMENT '優惠碼內容',
  `off_percent` INT NOT NULL COMMENT '折扣比例',
  `expired_at` VARCHAR(25) NOT NULL COMMENT '使用期限',
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
COMMENT = '優惠券';


-- -----------------------------------------------------
-- Table `JUMPER`.`coupon_record`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`coupon_record` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `member_ID` INT NOT NULL COMMENT '會員ID',
  `coupon_record_ID` INT NOT NULL COMMENT '優惠券ID\n',
  `is_used` INT NOT NULL COMMENT '使用狀態',
  PRIMARY KEY (`ID`),
  INDEX `FK_DISCOUNT_LOG_DISCOUNT_ID_idx` (`coupon_record_ID` ASC) VISIBLE,
  INDEX `FK_COUNPON_RECORD_MEMBER_ID_idx` (`member_ID` ASC) VISIBLE,
  CONSTRAINT `FK_COUPON_RECORD_COUPON_ID`
    FOREIGN KEY (`coupon_record_ID`)
    REFERENCES `JUMPER`.`coupon` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_COUNPON_RECORD_MEMBER_ID`
    FOREIGN KEY (`member_ID`)
    REFERENCES `JUMPER`.`member` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '優惠券紀錄';


-- -----------------------------------------------------
-- Table `JUMPER`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`task` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL COMMENT '任務名稱',
  `pass_text` VARCHAR(45) NOT NULL COMMENT '達成文字',
  `fall_text` VARCHAR(45) NOT NULL COMMENT '失敗文字',
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `JUMPER`.`task_record`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`task_record` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `member_ID` INT NOT NULL COMMENT '會員ID',
  `task_ID` INT NOT NULL,
  `is_pass` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_TASK_RECORD_MEMBER_ID_idx` (`member_ID` ASC) VISIBLE,
  INDEX `FK_TASK_RECORD_TASK_ID_idx` (`task_ID` ASC) VISIBLE,
  CONSTRAINT `FK_TASK_RECORD_MEMBER_ID`
    FOREIGN KEY (`member_ID`)
    REFERENCES `JUMPER`.`member` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_TASK_RECORD_TASK_ID`
    FOREIGN KEY (`task_ID`)
    REFERENCES `JUMPER`.`task` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '任務進度';


-- -----------------------------------------------------
-- Table `JUMPER`.`qa_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`qa_list` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `task_ID` INT NOT NULL,
  `question` VARCHAR(45) NOT NULL,
  `option1` VARCHAR(45) NOT NULL,
  `option2` VARCHAR(45) NOT NULL,
  `option3` VARCHAR(45) NOT NULL,
  `answer` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_QA_LIST_TASK_ID_idx` (`task_ID` ASC) VISIBLE,
  CONSTRAINT `FK_QA_LIST_TASK_ID`
    FOREIGN KEY (`task_ID`)
    REFERENCES `JUMPER`.`task` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '任務題目';


-- -----------------------------------------------------
-- Table `JUMPER`.`faq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JUMPER`.`faq` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `content` VARCHAR(45) NOT NULL,
  `is_replied` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
COMMENT = '訪客問題';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
