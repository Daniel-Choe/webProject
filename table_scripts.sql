CREATE DATABASE GKBoats_DB;

USE GKBoats_DB;

CREATE TABLE boatDetails(
boatId INT(4) PRIMARY KEY AUTO_INCREMENT,
discount FLOAT(5,2) NOT NULL,
bookingStart DATE,
location VARCHAR(20) NOT NULL,
boatType VARCHAR(20) NOT NULL,
description VARCHAR(200) NOT NULL,
baseprice FLOAT(6,2) NOT NULL,
allowedDays INT
);

insert into boatDetails(boatId,discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(1001,0,'2017-11-05','Alappuzha','Houseboat','These boats offer the luxury of living on water and provide reacreational and holiday accomodation facilities.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Kochi','Houseboat','These boats offer the luxury of living on water and provide reacreational and holiday accomodation facilities.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Kollam','Houseboat','These boats offer the luxury of living on water and provide reacreational and holiday accomodation facilities.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Akkulam','Houseboat','These boats offer the luxury of living on water and provide reacreational and holiday accomodation facilities.',500.00,15);

insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Nethajipuram','Cruiser','These boats are apt for relaxed sailing and include a gallery and a bath. All modern comforts like heaters, air conditioners and power generators are enclosed in the arrangement.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Puthukurichy','Cruiser','These boats are apt for relaxed sailing and include a gallery and a bath. All modern comforts like heaters, air conditioners and power generators are enclosed in the arrangement.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Puthupally','Cruiser','These boats are apt for relaxed sailing and include a gallery and a bath. All modern comforts like heaters, air conditioners and power generators are enclosed in the arrangement.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Thiruvananthapuram','Cruiser','These boats are apt for relaxed sailing and include a gallery and a bath. All modern comforts like heaters, air conditioners and power generators are enclosed in the arrangement.',500.00,15);

insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Kazhakkoottam','Bassboat','Bass boats are generally 14 to 23 feet, and typically used for freshwater fishing.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Vattappara','Bassboat','Bass boats are generally 14 to 23 feet, and typically used for freshwater fishing.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Veeranakavu','Bassboat','Bass boats are generally 14 to 23 feet, and typically used for freshwater fishing.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Kattakkada','Bassboat','Bass boats are generally 14 to 23 feet, and typically used for freshwater fishing.',500.00,15);

insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Thrissur','Speedboat','Performance power boats, built for speed.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Ottapalam','Speedboat','Performance power boats, built for speed.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Guruvayur','Speedboat','Performance power boats, built for speed.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Edappal','Speedboat','Performance power boats, built for speed.',500.00,15);

insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Chalakudy','PowerCatamaran','The Power or Sailing style catamarans comprise of multiple hulls and are excellent for fishing purposes and even for leisurely cruising abilities.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Palakkad','PowerCatamaran','The Power or Sailing style catamarans comprise of multiple hulls and are excellent for fishing purposes and even for leisurely cruising abilities.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Kunnamkulam','PowerCatamaran','The Power or Sailing style catamarans comprise of multiple hulls and are excellent for fishing purposes and even for leisurely cruising abilities.',500.00,15);
insert into boatDetails(discount,bookingStart,location,boatType,description,baseprice,allowedDays) values(0,'2017-11-05','Ponnani','PowerCatamaran','The Power or Sailing style catamarans comprise of multiple hulls and are excellent for fishing purposes and even for leisurely cruising abilities.',500.00,15);


CREATE TABLE boatBookingDetails(
txnId INT PRIMARY KEY AUTO_INCREMENT,
userId INT(4) REFERENCES gingerKingUsers(userId),
totalCost FLOAT(15,2),
endDate DATE,
startDate DATE,
mobileNo VARCHAR(10) NOT NULL,
boatId INT(4) REFERENCES gingerKingUsers(boatId)
);

INSERT INTO boatBookingDetails values(5000, 1001, 1500.00, '2017-11-19', '2017-11-12', '6789998212', 1001);


CREATE TABLE gingerKingUsers(
userId INT(4) ZEROFILL PRIMARY KEY AUTO_INCREMENT,
userName VARCHAR(25),
userStatus BIT NOT NULL,
mobileNo VARCHAR(10) NOT NULL,
email VARCHAR(25),
userType VARCHAR(15) NOT NULL,
password VARCHAR(50)
);

INSERT INTO gingerKingUsers values(1001,'Faheem Syed',1,'6789998212','faham@gkb.com','admin','scrumMaster69');
INSERT INTO gingerKingUsers values(1002,'Jaskaranpreet Singh',1,'5558675370','jas@gkb.com','admin','password');
INSERT INTO gingerKingUsers values(1003,'Arka Ghose',1,'555867371','arka@gkb.com','admin','ArkaGhoseToSleep');
INSERT INTO gingerKingUsers values(1004,'Marwin Mathew',1,'5558675372','marwin@gkb.com','admin','WhateverYouWantItToBe');
INSERT INTO gingerKingUsers values(1005,'Daniel Choe',0,'5558675309','daniel@gkb.com','user','CatchMeOutsideHowBowDa');

COMMIT;



select * from boatDetails;
select location from boatDetails where boatType='Houseboat';


select * from gingerKingUsers;
select * from gingerKingUsers where userType='user';


select * from boatBookingDetails;




select boatType from boatDetails where location='Kollam';
