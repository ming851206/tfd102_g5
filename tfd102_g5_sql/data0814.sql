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
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,3,'行程安排非常充實！','1630375200'),(2,2,1,4,'很適合一家大小的虛擬旅行～','1630375200'),(3,3,1,5,'導遊很漂釀！','1630375200'),(4,4,1,5,'是一位非凡的主持人｡擅長指導,更擅長講故事','1630375200'),(5,5,1,5,'很棒的旅程～','1630375200'),(6,6,2,5,'這是一個非常美好､有趣和開心的夜晚～','1630375200'),(7,7,2,5,'這是一次非凡的體驗! 導遊非常和藹可親,讓我們開懷大笑','1630375200'),(8,8,2,5,'我學到了很多,也很享受這次的旅程','1630375200'),(9,9,2,5,'有機會近距離看到長頸鹿､羚羊和斑馬,並欣賞風景｡感覺就像我們在南非呆了一個小時而不必離開我們的沙發','1630375200'),(10,10,2,5,'很有趣!我喜歡它是互動的,而且(在我們的私人小組中)我們可以選擇我們想去的地方','1630375200'),(11,11,3,5,'令人愉快的主人','1630375200'),(12,12,3,5,'內容非常豐富,也很有趣｡一切都很完美!','1630375200'),(13,13,3,5,'等不及參加下一場旅程了！','1630375200'),(14,14,3,5,'這是一次令人難以置信的體驗,100% 推薦!!如此有意義和周到','1630375200'),(43,15,3,5,'我喜歡這種經歷,我遇到了獨特而美妙的地方,我想有一天親自去參觀｡我強烈推薦!','1630375200'),(44,1,4,5,'很棒！','1630375200'),(45,1,5,5,'很棒！','1630375200'),(46,2,5,3,'讚讚！','1630375200'),(47,2,4,4,'讚讚！','1630375200'),(48,3,5,2,'普通！','1630375200'),(49,3,4,1,'普通！','1630375200'),(50,1,7,5,'很棒！','1630375200'),(51,1,8,5,'很棒！','1630375200'),(52,2,9,3,'讚讚！','1630375200'),(53,2,10,4,'讚讚！','1630375200'),(54,3,11,2,'普通！','1630375200'),(55,3,6,4,'普通！','1630375200');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
INSERT INTO `coupon` VALUES (1,1,'summerlove','這夏有禮了',9,'1640966399',_binary '\0',''),(2,2,'jumper','跳轉世界玩翻天 75 折優惠',75,'1640966399',_binary '\0',''),(6,1,'lovego','旅遊 5 折優惠',5,'1640966399',_binary '\0','');
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `coupon_record`
--

LOCK TABLES `coupon_record` WRITE;
/*!40000 ALTER TABLE `coupon_record` DISABLE KEYS */;
INSERT INTO `coupon_record` VALUES (1,1,1,0),(2,2,1,0),(3,3,2,0),(4,4,2,1),(5,5,2,1),(6,6,2,1),(15,7,2,1);
/*!40000 ALTER TABLE `coupon_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `fav`
--

LOCK TABLES `fav` WRITE;
/*!40000 ALTER TABLE `fav` DISABLE KEYS */;
INSERT INTO `fav` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,7),(7,1,8),(8,1,9),(9,1,10),(10,10,1),(11,1,11),(12,12,1),(13,13,1),(46,14,1),(48,4,2),(50,4,4),(51,4,5);
/*!40000 ALTER TABLE `fav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'阿土伯','abei','1111','1988-01-01','0917479111','1',1,1,'1631116800000',_binary '\0','abei@hotmail.com'),(2,'孫小美','mei','1111','1988-01-01','0917479112','2',2,1,'1631116800000',_binary '','mei@hotmail.com'),(3,'宮本寶藏','jp123','1111','1988-01-01','0917479113','3',1,1,'1631116800000',_binary '\0','jp123@hotmail.com'),(4,'莎拉公主','sala','1111','1988-01-01','0917479114','4',1,1,'1631116800000',_binary '\0','sala@hotmail.com'),(5,'錢夫人','madam','1111','1988-01-01','0917479115','5',1,1,'1631116800000',_binary '\0','madam@hotmail.com'),(6,'嗚咪','wumi','1111','1988-01-01','0917479116','6',1,1,'1631116800000',_binary '\0','wumi@hotmail.com'),(7,'詹姆士','james','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','james@hotmail.com'),(8,'糖糖','candy','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','candy@hotmail.com'),(9,'忍太郎','nijia','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','nijia@hotmail.com'),(10,'金凱子','kai','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','kai@hotmail.com'),(11,'愛麗絲','alice','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','alice@hotmail.com'),(12,'DDR','ddr','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','ddr@hotmail.com'),(13,'奇奇','kiki','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','kiki@hotmail.com'),(14,'史密斯','smith','1111','1988-01-01','0917479117','7',1,1,'1631116800000',_binary '\0','smith@hotmail.com'),(15,'星期三','wed','1111','1988-01-01','0917479117','7',9,1,'1631116800000',_binary '\0','wed@hotmail.com');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_info`
--

LOCK TABLES `product_info` WRITE;
/*!40000 ALTER TABLE `product_info` DISABLE KEYS */;
INSERT INTO `product_info` VALUES (1,1,1,'美國','自由女神朝聖之旅','自由女神，法國送給美國的大禮物，為慶賀美國獨立100周年，1886年正式坐落在紐約港。對美國人而言，她不單單只是一座雕像，一個世界遺產，更是這塊土地的精神領袖，亦是紐約最美麗的地標，一起來一睹她美麗的風采。1886年矗立在此的紐約自由女神，曾是世界最高的雕像。雕像下方的基座設有瞭望台，遊客可以搭乘電梯眺望曼哈頓的景色，和自由女神的內部結構。握著的是美國獨立宣言的自由女神溫柔又剛毅，她是我看過最耐看的雕像，讓人捨不得把眼神移開。','./images/travel_list/250/libertystatue.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,499,4,89,'https://www.youtube.com/watch?v=z1HxBn01oXk',0,'',''),(2,1,1,'美國','飛越世界奇景 尼加拉大瀑布','此生必須一睹大自然最美產物之一：尼加拉大瀑布。尼加拉大瀑布以每秒150,000加侖的流水量傾瀉而下，氣勢滂礡，被譽為世界上最美的天然奇景之一。此行程將帶你欣賞阿帕拉契山脈和上紐約州的美麗風景，並且遠觀北美廣闊無邊的平地和東岸沿海平原之間的天然群山屏障。緊接著抵達本行程的目的地──尼加拉大瀑布，重頭戲將帶你搭乘直升機，從空中俯瞰瀑布，水流奔騰而下的臨場震撼感，一生一定要體會一次。之後將來到山羊島，換個角度欣賞瀑布宏偉壯觀的全貌。','./images/travel_list/1/2/0.jpg','./images/travel_list/1/2/1.jpg','./images/travel_list/1/2/2.jpg','./images/travel_list/1/2/3.jpg','./images/travel_list/1/2/4.jpg','./images/travel_list/1/2/5.jpg','./travel_info.html',10,499,5,112,'',0,'',''),(3,2,2,'英國','Big Ben 大笨鐘，倫敦最具指標性的景觀','「Big Ben 大笨鐘」是英國倫敦最具指標性和最熱門的景觀，聳立在倫敦泰晤士河畔最精華的地段，直到今年2021年剛好歷經也見證了162年的各種風風雨雨，如今不僅是英國尤其倫敦人心中的精神指標，更是到訪倫敦的觀光客最愛拍照打卡的背景之一！','./images/travel_list/250/bigben.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,499,5,45,'',0,'',''),(4,3,3,'日本','京都森林浴','大多數遊客為了千鳥居而造訪伏見稻荷神社，但很少深入了解這座神社的歷史和傳統。了解神道教儀式以及如何在京都最古老的神社之一（建於 1300 年前！）進行森林沐浴','./images/travel_list/250/kyoto.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,499,3,38,'https://www.youtube.com/watch?v=z1HxBn01oXk',0,'',''),(5,3,3,'泰國','泰國黃金海岸，欣賞Pattaya的海岸風光','泰國PATTAYA PARK海灘，是目前少有的安靜海灘。中天海灣長約 1.5 公里的海 岸上，被泰國政府列為全Pattaya最安靜也是最優美的生態環境保護區，是老外集中最多的度假勝地。此處經常是泰國舉辦國際性沙灘排球比賽的首選場地，沿岸區域設有游泳保護區及 1.2 公里的自行車專用車道，由泰國海岸巡邏人員看管，可提供遊客欣賞Pattaya的海岸風光。','./images/travel_list/250/pataya.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,499,5,45,'',0,'',''),(6,3,3,'印尼','馬辰水上市場藝術節，體驗當地水上文化之旅','馬辰(Banjarmasin)是印尼南加里曼丹的首府，錯綜複雜的水道使得這城市有「千河之城」之稱。水道夾雜的城市少不了水上交易，天未亮，河道上便開始出現載滿蔬果的彩色扁舟，戴著斗笠的婦女們划著船兒整齊的排列在岸邊，等待生意上門。小船兒搖又晃的直到傍晚下班時刻，等待著又一批人潮聚集岸邊。','./images/travel_list/250/watermarket.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,599,5,45,'',0,'',''),(7,4,4,'非洲','非洲神奇夢幻的野性美','無數生命在非洲的原野上生生不息，為了追尋嫩草，每年百萬牛羚及斑馬在大平原上大遷徙，構成幕幕萬馬奔騰的自然奇觀，宏偉地展現大自然的魔力，懾人心魄','./images/travel_list/250/africa_elephant.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,599,3,38,'https://www.youtube.com/watch?v=z1HxBn01oXk',0,'',''),(8,4,4,'埃及','埃及金字塔，世界上最神祕的三角形','歷代王朝中，以吉薩三大金字塔最經典，亦是世界上唯一僅存的七大奇景。坐臥在吉薩的卡夫拉金字塔旁，考古發現約在西元前2500年完成。接著帶您體驗騎駱駝的樂趣，信步在埃及黃土天地的蒼穹感。','./images/travel_list/250/egypt.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,699,5,45,'',0,'',''),(9,5,5,'澳洲','雪梨歌劇院','縱使沒來過雪梨，都肯定聽說過「雪梨歌劇院（Sydney Opera House）」，這可是來雪梨絕不可錯過的地標等級景點，於1973年落成的帆船形建物，可是20世紀少數列入世界文化遺產的建築呢！一整個就很重量級。','./images/travel_list/250/sydney.jpg','img1','img2','img3','img4','img5','./travel_info.html',10,699,3,38,'https://www.youtube.com/watch?v=z1HxBn01oXk',0,'',''),(10,5,5,'澳大利亞','勒格蘭德角國家公園，探索野生動物','澳大利亞能看到袋鼠在沙灘上曬太陽的地方並不多，但在勒格蘭德角國家公園 (Cape Le Grand National Park) ，這只是眾多天然樂趣之一。','./images/travel_list/250/legrand.jpg','小圖1','小圖2','小圖3','小圖4','小圖5','./travel_info.html',10,699,5,45,'',0,'',''),(11,5,5,'紐西蘭','紐西蘭自然體驗','該體驗從農場現場直播，並將首先介紹新西蘭。由於它是一個生活方式農場，動物在不同的圍場（田地）周圍輪換，但您很有可能會看到母羊（綿羊）、奶牛和雞','./images/travel_list/250/newzland.jpg','小圖1','小圖2','小圖3','小圖4','小圖5','./travel_info.html',10,999,2,120,'https://www.youtube.com/watch?v=z1HxBn01oXk',0,'','');
/*!40000 ALTER TABLE `product_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `qa_list`
--

LOCK TABLES `qa_list` WRITE;
/*!40000 ALTER TABLE `qa_list` DISABLE KEYS */;
INSERT INTO `qa_list` VALUES (1,1,'自由女神像是哪個國家送給美國的禮物?\n','法國','德國','英國',1),(2,1,'請問夏威夷是屬於哪一洲？\n','美洲','大洋洲','澳洲',2),(3,1,'美國國旗共有幾個星星？\n','50','51','52',1),(4,1,'哪一個國家四季都要喝冰水？','墨西哥','美國','希臘',2),(5,1,'請問在美國哪一個食物，一年所消耗的雞肉佔了80億隻雞？\n\n','炸雞','漢堡','雞塊',3),(6,1,'華盛頓和中國哪一任皇帝是同一年去世的?\n','康熙','乾隆','雍正',1),(7,2,'請問哪個國家是世界上肥胖率最高的國家？\n','美國','英國','德國',2),(8,2,'請問哪一個國家光溜溜走在路上是合法的，不需要忌諱做自己?','法國','西班牙 ','葡萄牙',2),(9,2,'下列何者景點不是在歐洲境內?\n','羅浮宮','凱旋門','自由女神像',3),(10,2,'擁有全世界最多的諾貝爾文學獎得主的國家是？\n','義大利','法國','英國',2),(11,2,'在哪個國家說早安，會被認為是很煩的行爲?\n','德國','英國','比利時',2),(12,2,'在法國大革命之後歷經了數任國王，\n在位期間都很短，請問最短在位時間為？\n','20 分鐘','1 天','3 小時',1),(13,3,'日本哪個地方是連小強都『強』不起來的地方？','京都','北海道','函館',2),(14,3,'韓國人的幸運數字是？\n','一','二','三',3),(15,3,'在韓國，祝賀搬新家的禮物是？\n','碗筷','毛巾','捲筒衛生紙',3),(16,3,'在印度，有哪項行為不適合公共場合做，嚴重可能會判公共猥褻罪？\n','親吻','比 ok','剔牙',1),(17,3,'下列城市何者不是在馬來西亞內?\n','東京','吉隆坡','檳城',1),(18,3,'下列何者為印度的世界遺產?','吳哥窟','大堡礁','泰姬瑪哈陵',3),(19,4,'在非洲，吃的人最多的動物是什麼？\n','河馬','獅子','鱷魚',1),(20,4,'世界上雙胞胎最多的地方在哪裡？\n','印度','奈及利亞','美國',2),(21,4,'誰說企鵝只生活在南極，請問下列哪個地方也有企鵝？\n','南非','俄羅斯','南亞',1),(22,4,'下列何者不是在非洲內?\n','埃及','日本','衣索比亞',2),(23,4,'下列何者景點不在非洲境內?\n','艾菲爾鐵塔','埃及金字塔','爾塔阿雷火山',1),(24,4,'電影『獅子王』中，彭彭與丁滿唱的「Hakuna Matata」，他是非洲語的什麼意思呢？\n','不用擔心','明天會更好','活在當下',1),(25,5,'請問澳洲屬於哪一洲？\n','澳洲','大洋洲','亞洲',2),(26,5,'請問澳洲首都是？\n','坎培拉','雪梨','墨爾本',1),(27,5,'下列哪個不在大洋洲內?\n','澳洲','台灣','紐西蘭',2),(28,5,'下列何者不是帛琉的著名景點之一?\n','牛奶湖','水母湖','玫瑰湖',3),(29,5,'在紐西蘭，以下哪一個話題千萬不要拿來開玩笑？\n','電影魔戒','足球','首相',1),(60,5,'在以下哪個國家，牛奶比水還要便宜？\n','紐西蘭','澳洲','印尼',2);
/*!40000 ALTER TABLE `qa_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (1,1,0,10,'https://meet.google.com/fxm-isqs-umy','1610375200000','1610389600000'),(2,1,0,10,'https://meet.google.com/fxm-isqs-umy','1610375200000','1610389600000'),(3,2,0,10,'https://meet.google.com/fxm-isqs-umy','1630375200000','1610389600000'),(4,3,0,10,'https://meet.google.com/fxm-isqs-umy','1610375200000','1610389600000'),(5,4,0,10,'https://meet.google.com/fxm-isqs-umy','1610375200000','1610389600000'),(6,5,0,10,'https://meet.google.com/fxm-isqs-umy','1610375200000','1610389600000'),(7,6,0,10,'https://meet.google.com/fxm-isqs-umy','1629331200000','1629334800000'),(8,1,0,10,'https://meet.google.com/fxm-isqs-umy','1629421200000','1629424800000'),(9,10,0,10,'https://meet.google.com/fxm-isqs-umy','1628598600000','1628602200000'),(10,10,0,10,'https://meet.google.com/fxm-isqs-umy','1628587818872','1628416800000'),(11,2,0,10,'https://meet.google.com/fxm-isqs-umy','1630483200000','1630486800000'),(20,2,0,10,'https://meet.google.com/fxm-isqs-umy','1630562400000','1630566000000'),(21,2,0,10,'https://meet.google.com/fxm-isqs-umy','1630634400000','1630638000000');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'美洲旅遊達人','恭喜你成為美洲旅遊達人！','再接再厲'),(2,'歐洲旅遊達人','恭喜你成為歐洲旅遊達人！','再接再厲'),(3,'亞洲旅遊達人','恭喜你成為亞洲旅遊達人！','再接再厲'),(4,'非洲旅遊達人','恭喜你成為非洲旅遊達人！','再接再厲'),(5,'大洋洲旅遊達人','恭喜你成為大洋洲旅遊達人！','再接再厲');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `task_record`
--

LOCK TABLES `task_record` WRITE;
/*!40000 ALTER TABLE `task_record` DISABLE KEYS */;
INSERT INTO `task_record` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,1),(6,1,2),(7,1,3),(8,1,4),(9,1,5),(10,2,1),(11,3,2),(12,2,3),(13,4,1);
/*!40000 ALTER TABLE `task_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `trip_order`
--

LOCK TABLES `trip_order` WRITE;
/*!40000 ALTER TABLE `trip_order` DISABLE KEYS */;
INSERT INTO `trip_order` VALUES (1,1,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(2,2,1,1,'1627660800',0,299,1,_binary '\0',_binary '\0',_binary '\0'),(3,3,1,1,'1627660800',0,599,2,_binary '\0',_binary '\0',_binary '\0'),(4,4,1,1,'1627660800',0,600,1,_binary '\0',_binary '\0',_binary '\0'),(5,5,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(6,6,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(7,7,1,1,'1627660800',0,499,1,_binary '\0',_binary '\0',_binary '\0'),(8,1,7,1,'1627660800',0,500,1,_binary '\0',_binary '\0',_binary '\0'),(9,1,6,3,'1627660800',0,500,1,_binary '\0',_binary '\0',_binary '\0'),(27,1,9,1,'1627660800',0,500,1,_binary '\0',_binary '\0',_binary '\0');
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

-- Dump completed on 2021-08-14  0:21:00
