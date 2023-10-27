-- create table

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
uuid VARCHAR(255) UNIQUE KEY NOT NULL,
email VARCHAR(255) NOT NULL,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
contact VARCHAR(255),
waitingNo INT NOT NULL,
googleId VARCHAR(255),
microsoftId VARCHAR(255),
facebookId VARCHAR(255),
password VARCHAR(100) NULL,
status VARCHAR(100) NOT NULL,
otp INT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE userpreferences (
id INT AUTO_INCREMENT PRIMARY KEY,
investmentDate VARCHAR(255),
estimatedInvestment VARCHAR(255) ,
investmentType VARCHAR(255),
visitingDay VARCHAR(255) ,
visitorNumber VARCHAR(255),
accommodationPreference VARCHAR(255) ,
investPreference VARCHAR(255) ,
investPreferenceReturn VARCHAR(255) ,
investType VARCHAR(255) ,
investAmountType VARCHAR(255) ,
preferencePeriod VARCHAR(255) ,
investTenure VARCHAR(255) ,
investAmount INT,
comments VARCHAR(255),
userId INT UNIQUE KEY,
FOREIGN KEY (userId) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

//updated one

CREATE TABLE userpreferences (
id INT AUTO_INCREMENT PRIMARY KEY,
visitingDay VARCHAR(255) NOT NULL,
visitorNumber INT,
accommodationPreference VARCHAR(255) ,
investPreference VARCHAR(255) ,
investPreferenceReturn VARCHAR(255) ,
investType VARCHAR(255) ,
investAmountType VARCHAR(255) ,
investAmount INT,
userId INT UNIQUE KEY,
FOREIGN KEY (userId) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
