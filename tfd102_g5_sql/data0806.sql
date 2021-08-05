-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: JUMPER
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `member_ID` int NOT NULL,
  `product_ID` int NOT NULL,
  `star` int NOT NULL,
  `content` varchar(1025) NOT NULL COMMENT '評價內容',
  `create_at` varchar(25) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_PRODUCT_APPRAISE_MEMBER_ID_idx` (`member_ID`),
  KEY `FK_PRODUCT_APPRAISE_PRODUCT_ID_idx` (`product_ID`),
  CONSTRAINT `FK_COMMENT_MEMBER_ID` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`),
  CONSTRAINT `FK_COMMENT_PRODUCT_ID` FOREIGN KEY (`product_ID`) REFERENCES `product_info` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3 COMMENT='產品評價';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,3,'行程安排非常充實！','1630375200'),(2,2,1,4,'很適合一家大小的虛擬旅行～','1630375200'),(3,3,1,5,'導遊很漂釀！','1630375200'),(4,4,1,5,'是一位非凡的主持人｡擅長指導,更擅長講故事','1630375200'),(5,5,1,5,'很棒的旅程～','1630375200'),(6,6,2,5,'這是一個非常美好､有趣和開心的夜晚～','1630375200'),(7,7,2,5,'這是一次非凡的體驗! 導遊非常和藹可親,讓我們開懷大笑','1630375200'),(9,1,1,3,'行程安排非常充實！','1630375200'),(10,2,1,4,'很適合一家大小的虛擬旅行～','1630375200'),(11,3,1,5,'導遊很漂釀！','1630375200'),(12,4,1,5,'是一位非凡的主持人｡擅長指導,更擅長講故事','1630375200'),(13,5,1,5,'很棒的旅程～','1630375200'),(14,6,2,5,'這是一個非常美好､有趣和開心的夜晚～','1630375200'),(15,7,2,5,'這是一次非凡的體驗! 導遊非常和藹可親,讓我們開懷大笑','1630375200'),(16,8,2,5,'我學到了很多,也很享受這次的旅程','1630375200'),(17,9,2,5,'有機會近距離看到長頸鹿､羚羊和斑馬,並欣賞風景｡感覺就像我們在南非呆了一個小時而不必離開我們的沙發','1630375200'),(18,10,2,5,'很有趣!我喜歡它是互動的,而且(在我們的私人小組中)我們可以選擇我們想去的地方','1630375200'),(19,11,3,5,'令人愉快的主人','1630375200'),(20,12,3,5,'內容非常豐富,也很有趣｡一切都很完美!','1630375200'),(21,13,3,5,'等不及參加下一場旅程了！','1630375200'),(22,14,3,5,'這是一次令人難以置信的體驗,100% 推薦!!如此有意義和周到','1630375200'),(23,15,3,5,'我喜歡這種經歷,我遇到了獨特而美妙的地方,我想有一天親自去參觀｡我強烈推薦!','1630375200');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `source` int NOT NULL COMMENT '優惠券來源',
  `code` varchar(45) NOT NULL COMMENT '優惠碼',
  `content` varchar(45) NOT NULL COMMENT '優惠碼內容',
  `off_percent` int NOT NULL COMMENT '折扣比例',
  `expired_at` varchar(25) NOT NULL COMMENT '使用期限',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COMMENT='優惠券';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
INSERT INTO `coupon` VALUES (1,1,'summerlove','這夏有禮了',9,'1640966399'),(2,2,'jumper','跳轉世界玩翻天 5 折優惠',5,'1640966399'),(3,1,'lovego','旅遊 5 折優惠',5,'1640966399');
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_record`
--

DROP TABLE IF EXISTS `coupon_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon_record` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `member_ID` int NOT NULL COMMENT '會員ID',
  `coupon_record_ID` int NOT NULL COMMENT '優惠券ID\n',
  `is_used` int NOT NULL COMMENT '使用狀態',
  PRIMARY KEY (`ID`),
  KEY `FK_DISCOUNT_LOG_DISCOUNT_ID_idx` (`coupon_record_ID`),
  KEY `FK_COUNPON_RECORD_MEMBER_ID_idx` (`member_ID`),
  CONSTRAINT `FK_COUNPON_RECORD_MEMBER_ID` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`),
  CONSTRAINT `FK_COUPON_RECORD_COUPON_ID` FOREIGN KEY (`coupon_record_ID`) REFERENCES `coupon` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3 COMMENT='優惠券紀錄';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_record`
--

LOCK TABLES `coupon_record` WRITE;
/*!40000 ALTER TABLE `coupon_record` DISABLE KEYS */;
INSERT INTO `coupon_record` VALUES (24,1,1,0),(25,2,1,0),(26,3,2,0),(27,4,2,1),(28,5,2,1),(29,6,2,1),(30,7,2,1);
/*!40000 ALTER TABLE `coupon_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `content` varchar(45) NOT NULL,
  `is_replied` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='訪客問題';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fav`
--

DROP TABLE IF EXISTS `fav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fav` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `member_ID` int NOT NULL,
  `product_ID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_LOVE_MEMBER_ID_idx` (`member_ID`),
  KEY `FK_LOVE_PRODUCT_ID_idx` (`product_ID`),
  CONSTRAINT `FK_FAV_MEMBER_ID` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`),
  CONSTRAINT `FK_FAV_PRODUCT_ID` FOREIGN KEY (`product_ID`) REFERENCES `product_info` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COMMENT='我的最愛';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fav`
--

LOCK TABLES `fav` WRITE;
/*!40000 ALTER TABLE `fav` DISABLE KEYS */;
INSERT INTO `fav` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,1),(6,6,1),(7,7,1),(8,8,1),(9,9,1),(10,10,1),(11,11,1),(12,12,1),(13,13,1),(14,14,1),(15,15,1);
/*!40000 ALTER TABLE `fav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `birthday` date DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `level` int NOT NULL,
  `account_status` int NOT NULL COMMENT '會員狀態',
  `created_at` varchar(45) NOT NULL,
  `gender` int DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb3 COMMENT='會員';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'阿土伯','abei','1111','1988-01-01','0917479111','1',1,1,'19990101',0,'abei@hotmail.com'),(2,'孫小美','mei','1111','1988-01-01','0917479112','2',2,1,'19990101',1,'mei@hotmail.com'),(3,'宮本寶藏','jp123','1111','1988-01-01','0917479113','3',1,1,'19990101',0,'jp123@hotmail.com'),(4,'莎拉公主','sala','1111','1988-01-01','0917479114','4',1,1,'19990101',0,'sala@hotmail.com'),(5,'錢夫人','madam','1111','1988-01-01','0917479115','5',1,1,'19990101',0,'madamhotmail.com'),(6,'嗚咪','wumi','1111','1988-01-01','0917479116','6',1,1,'19990101',0,'wumi@hotmail.com'),(7,'小丹尼','danny','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'james@hotmail.com'),(8,'詹姆士','james','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'candy@hotmail.com'),(9,'糖糖','candy','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'nijia@hotmail.com'),(10,'忍太郎','nijia','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'kai@hotmail.com'),(11,'金凱子','kai','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'alice@hotmail.com'),(12,'愛麗絲','alice','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'ddr@hotmail.com'),(13,'DDR','ddr','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'kiki@hotmail.com'),(14,'奇奇','kiki','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'smith@hotmail.com'),(15,'史密斯','smith','1111','1988-01-01','0917479117','7',1,1,'19990101',0,'wed@hotmail.com');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_info`
--

DROP TABLE IF EXISTS `product_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_info` (
  `ID` int NOT NULL,
  `category` int NOT NULL COMMENT '分類\n',
  `place` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL COMMENT '主題',
  `content` varchar(255) NOT NULL COMMENT '\n內容 ',
  `intro_pics` varchar(255) NOT NULL,
  `total_people` int NOT NULL,
  `fav_count` int NOT NULL COMMENT '收藏人數\n',
  `comment_count` int NOT NULL COMMENT '評價人數',
  `intro_video` varchar(255) NOT NULL,
  `is_checked` int NOT NULL,
  `reject_reason` varchar(45) DEFAULT NULL COMMENT '退件原因',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='旅程資訊';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_info`
--

LOCK TABLES `product_info` WRITE;
/*!40000 ALTER TABLE `product_info` DISABLE KEYS */;
INSERT INTO `product_info` VALUES (1,1,'美國','自由女神朝聖之旅','紐約最美麗的地標，一起來一睹她美麗的風采','[0,1,2,3,4,5,6,7]',10,89,15,'https://www.youtube.com/watch?v=z1HxBn01oXk',1,''),(2,2,'紐西蘭','紐西蘭自然體驗','該體驗從農場現場直播，並將首先介紹新西蘭。由於它是一個生活方式農場，動物在不同的圍場（田地）周圍輪換，但您很有可能會看到母羊（綿羊）、奶牛和雞','[0,1,2,3,4,5,6,7]',6,120,2,'https://www.youtube.com/watch?v=z1HxBn01oXk',1,''),(3,3,'日本','京都森林浴','大多數遊客為了千鳥居而造訪伏見稻荷神社，但很少深入了解這座神社的歷史和傳統。了解神道教儀式以及如何在京都最古老的神社之一（建於 1300 年前！）進行森林沐浴\n','[0,1,2,3,4,5,6,7]',15,38,3,'https://www.youtube.com/watch?v=z1HxBn01oXk',1,''),(4,4,'非洲','非洲\n神奇夢幻的野性美','無數生命在非洲的原野上生生不息，為了追尋嫩草，每年百萬牛羚及斑馬在大平原上大遷徙，構成幕幕萬馬奔騰的自然奇觀，宏偉地展現大自然的魔力，懾人心魄','[0,1,2,3,4,5,6,7]',15,38,3,'https://www.youtube.com/watch?v=z1HxBn01oXk',1,''),(5,5,'澳洲','雪梨歌劇院','縱使沒來過雪梨，都肯定聽說過「雪梨歌劇院（Sydney Opera House）」，這可是來雪梨絕不可錯過的地標等級景點，於1973年落成的帆船形建物，可是20世紀少數列入世界文化遺產的建築呢！一整個就很重量級。\n','[0,1,2,3,4,5,6,7]',15,38,3,'https://www.youtube.com/watch?v=z1HxBn01oXk',1,''),(6,1,'美國','怔怔地望著尼加拉大瀑布那滂薄的氣勢','見過紐約氣派的高樓大廈和繁華的城市魅力後，啟程往北，一睹大自然最美產物之一的尼亞加拉大瀑布。尼亞加拉大瀑布以每秒150,000加侖的流水量傾瀉而下，氣勢滂礡的絕世景觀被譽為世界上最美的天然奇景之一。行程沿路帶你欣賞阿帕拉契山脈和上紐約州的美麗風景、遠觀北美廣闊無邊的平地和東岸沿海平原之間天然的群山屏障。緊接著抵達本行程的目的地──尼亞加拉大瀑布，重頭戲帶你搭乘直升機，從空中俯瞰瀑布，水流奔騰而下的臨場震撼感一生一定要體會一次。之後到山羊島，換個角度欣賞瀑布宏偉壯觀的全貌。','[0,1,2,3,4,5,6,7]',10,112,5,'',1,''),(7,4,'埃及','埃及金字塔，世界上最神祕的三角形','歷代王朝中，以吉薩三大金字塔最經典，亦是世界上唯一僅存的七大奇景。坐臥在吉薩的卡夫拉金字塔旁，考古發現約在西元前2500年完成。接著帶您體驗騎駱駝的樂趣，信步在埃及黃土天地的蒼穹感。','[0,1,2,3,4,5,6,7]',15,45,5,'',1,''),(8,3,'印尼','馬辰水上市場藝術節，體驗當地水上文化之旅','馬辰(Banjarmasin)是印尼南加里曼丹的首府，錯綜複雜的水道使得這城市有「千河之城」之稱。水道夾雜的城市少不了水上交易，天未亮，河道上便開始出現載滿蔬果的彩色扁舟，戴著斗笠的婦女們划著船兒整齊的排列在岸邊，等待生意上門。小船兒搖又晃的直到傍晚下班時刻，等待著又一批人潮聚集岸邊。','[0,1,2,3,4,5,6,7]',15,45,5,'',1,''),(9,3,'泰國','泰國黃金海岸，欣賞Pattaya的海岸風光','泰國PATTAYA PARK海灘，是目前少有的安靜海灘。中天海灣長約 1.5 公里的海 岸上，被泰國政府列為全Pattaya最安靜也是最優美的生態環境保護區，是老外集中最多的度假勝地。此處經常是泰國舉辦國際性沙灘排球比賽的首選場地，沿岸區域設有游泳保護區及 1.2 公里的自行車專用車道，由泰國海岸巡邏人員看管，可提供遊客欣賞Pattaya的海岸風光。','[0,1,2,3,4,5,6,7]',15,45,5,'',1,''),(10,2,'英國','Big Ben 大笨鐘，倫敦最具指標性的景觀','「Big Ben 大笨鐘」是英國倫敦最具指標性和最熱門的景觀，聳立在倫敦泰晤士河畔最精華的地段，直到今年2021年剛好歷經也見證了162年的各種風風雨雨，如今不僅是英國尤其倫敦人心中的精神指標，更是到訪倫敦的觀光客最愛拍照打卡的背景之一！','[0,1,2,3,4,5,6,7]',15,45,5,'',1,''),(11,5,'澳大利亞','勒格蘭德角國家公園，探索野生動物','澳大利亞能看到袋鼠在沙灘上曬太陽的地方並不多，但在勒格蘭德角國家公園 (Cape Le Grand National Park) ，這只是眾多天然樂趣之一。','[0,1,2,3,4,5,6,7]',15,45,5,'',1,'');
/*!40000 ALTER TABLE `product_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qa_list`
--

DROP TABLE IF EXISTS `qa_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qa_list` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `task_ID` int NOT NULL,
  `question` varchar(45) NOT NULL,
  `option1` varchar(45) NOT NULL,
  `option2` varchar(45) NOT NULL,
  `option3` varchar(45) NOT NULL,
  `answer` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_QA_LIST_TASK_ID_idx` (`task_ID`),
  CONSTRAINT `FK_QA_LIST_TASK_ID` FOREIGN KEY (`task_ID`) REFERENCES `task` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb3 COMMENT='任務題目';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qa_list`
--

LOCK TABLES `qa_list` WRITE;
/*!40000 ALTER TABLE `qa_list` DISABLE KEYS */;
INSERT INTO `qa_list` VALUES (32,1,'自由女神像是哪個國家送給美國的禮物?\n','法國','德國','英國',1),(33,1,'請問夏威夷是屬於哪一洲？\n','美洲','大洋洲','澳洲',2),(34,1,'美國國旗共有幾個星星？\n','50','51','52',1),(35,1,'哪一個國家四季都要喝冰水？','墨西哥','美國','希臘',2),(36,1,'請問在美國哪一個食物，一年所消耗的雞肉佔了80億隻雞？\n\n','炸雞','漢堡','雞塊',3),(37,1,'華盛頓和中國哪一任皇帝是同一年去世的?\n','康熙','乾隆','雍正',1),(38,2,'請問哪個國家是世界上肥胖率最高的國家？\n','美國','英國','德國',2),(39,2,'請問哪一個國家光溜溜走在路上是合法的，不需要忌諱做自己?','法國','西班牙 ','葡萄牙',2),(40,2,'下列何者景點不是在歐洲境內?\n','羅浮宮','凱旋門','自由女神像',3),(41,2,'擁有全世界最多的諾貝爾文學獎得主的國家是？\n','義大利','法國','英國',2),(42,2,'在哪個國家說早安，會被認為是很煩的行爲?\n','德國','英國','比利時',2),(43,2,'在法國大革命之後歷經了數任國王，\n在位期間都很短，請問最短在位時間為？\n','20 分鐘','1 天','3 小時',1),(44,3,'日本哪個地方是連小強都『強』不起來的地方？','京都','北海道','函館',2),(45,3,'韓國人的幸運數字是？\n','一','二','三',3),(46,3,'在韓國，祝賀搬新家的禮物是？\n','碗筷','毛巾','捲筒衛生紙',3),(47,3,'在印度，有哪項行為不適合公共場合做，嚴重可能會判公共猥褻罪？\n','親吻','比 ok','剔牙',1),(48,3,'下列城市何者不是在馬來西亞內?\n','東京','吉隆坡','檳城',1),(49,3,'下列何者為印度的世界遺產?','吳哥窟','大堡礁','泰姬瑪哈陵',3),(50,4,'在非洲，吃的人最多的動物是什麼？\n','河馬','獅子','鱷魚',1),(51,4,'世界上雙胞胎最多的地方在哪裡？\n','印度','奈及利亞','美國',2),(52,4,'誰說企鵝只生活在南極，請問下列哪個地方也有企鵝？\n','南非','俄羅斯','南亞',1),(53,4,'下列何者不是在非洲內?\n','埃及','日本','衣索比亞',2),(54,4,'下列何者景點不在非洲境內?\n','艾菲爾鐵塔','埃及金字塔','爾塔阿雷火山',1),(55,4,'電影『獅子王』中，彭彭與丁滿唱的「Hakuna Matata」，他是非洲語的什麼意思呢？\n','不用擔心','明天會更好','活在當下',1),(56,5,'請問澳洲屬於哪一洲？\n','澳洲','大洋洲','亞洲',2),(57,5,'請問澳洲首都是？\n','坎培拉','雪梨','墨爾本',1),(58,5,'下列哪個不在大洋洲內?\n','澳洲','台灣','紐西蘭',2),(59,5,'下列何者不是帛琉的著名景點之一?\n','牛奶湖','水母湖','玫瑰湖',3),(60,5,'在紐西蘭，以下哪一個話題千萬不要拿來開玩笑？\n','電影魔戒','足球','首相',1),(61,5,'在以下哪個國家，牛奶比水還要便宜？\n','紐西蘭','澳洲','印尼',2);
/*!40000 ALTER TABLE `qa_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `product_info_ID` int NOT NULL,
  `is_group` int NOT NULL COMMENT '包場狀態\n',
  `attendence` int NOT NULL COMMENT '參加人數',
  `vedio_link` varchar(255) NOT NULL,
  `started_at` varchar(25) NOT NULL,
  `ended_at` varchar(25) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_PRODUCT_SESSION_PRODUCT_INFO_ID_idx` (`product_info_ID`),
  CONSTRAINT `FK_SESSION_PRODUCT_INFO_ID` FOREIGN KEY (`product_info_ID`) REFERENCES `product_info` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COMMENT='旅程場次';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (1,1,0,20,'https://meet.google.com/fxm-isqs-umy','1630375200','1630389600'),(2,2,0,15,'https://meet.google.com/fxm-isqs-umy','1630375200','1630389600'),(3,3,0,10,'https://meet.google.com/fxm-isqs-umy','1630375200','1630389600'),(4,4,0,10,'https://meet.google.com/fxm-isqs-umy','1630375200','1630389600'),(11,5,0,10,'https://meet.google.com/fxm-isqs-umy','1630375200','1630389600');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT '任務名稱',
  `pass_text` varchar(45) NOT NULL COMMENT '達成文字',
  `fall_text` varchar(45) NOT NULL COMMENT '失敗文字',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'美洲旅遊達人','恭喜你成為美洲旅遊達人！','再接再厲'),(2,'歐洲旅遊達人','恭喜你成為歐洲旅遊達人！','再接再厲'),(3,'亞洲旅遊達人','恭喜你成為亞洲旅遊達人！','再接再厲'),(4,'非洲旅遊達人','恭喜你成為非洲旅遊達人！','再接再厲'),(5,'大洋洲旅遊達人','恭喜你成為大洋洲旅遊達人！','再接再厲');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_record`
--

DROP TABLE IF EXISTS `task_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_record` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `member_ID` int NOT NULL COMMENT '會員ID',
  `task_ID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_TASK_RECORD_MEMBER_ID_idx` (`member_ID`),
  KEY `FK_TASK_RECORD_TASK_ID_idx` (`task_ID`),
  CONSTRAINT `FK_TASK_RECORD_MEMBER_ID` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`),
  CONSTRAINT `FK_TASK_RECORD_TASK_ID` FOREIGN KEY (`task_ID`) REFERENCES `task` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3 COMMENT='任務進度';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_record`
--

LOCK TABLES `task_record` WRITE;
/*!40000 ALTER TABLE `task_record` DISABLE KEYS */;
INSERT INTO `task_record` VALUES (17,1,1),(18,1,2),(19,1,3),(20,1,4),(21,1,5),(22,2,1),(23,3,2),(24,2,3),(25,4,1);
/*!40000 ALTER TABLE `task_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip_order`
--

DROP TABLE IF EXISTS `trip_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trip_order` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `member_ID` int NOT NULL,
  `session_ID` int NOT NULL,
  `status` int NOT NULL,
  `created_at` varchar(25) NOT NULL,
  `is_mailed` int NOT NULL COMMENT '發信狀態\n',
  `price` int NOT NULL,
  `people` int NOT NULL,
  `is_alerted` bit(1) NOT NULL COMMENT '紅點通知',
  `is_clicked` bit(1) NOT NULL,
  `is_commented` bit(1) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_ORDER_MEMBER_ID_idx` (`member_ID`),
  KEY `FK_ORDER_SESSION_ID_idx` (`session_ID`),
  CONSTRAINT `FK_ORDER_MEMBER_ID` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`),
  CONSTRAINT `FK_ORDER_SESSION_ID` FOREIGN KEY (`session_ID`) REFERENCES `session` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COMMENT='旅程訂單';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip_order`
--

LOCK TABLES `trip_order` WRITE;
/*!40000 ALTER TABLE `trip_order` DISABLE KEYS */;
INSERT INTO `trip_order` VALUES (5,1,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(6,2,1,1,'1627660800',0,299,1,_binary '\0',_binary '\0',_binary '\0'),(7,3,1,1,'1627660800',0,599,2,_binary '\0',_binary '\0',_binary '\0'),(8,4,1,1,'1627660800',0,600,1,_binary '\0',_binary '\0',_binary '\0'),(9,5,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(10,6,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(11,7,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0');
/*!40000 ALTER TABLE `trip_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-06  0:30:04
