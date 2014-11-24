DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages(
	text VARCHAR(180),
	id int(11) NOT NULL AUTO_INCREMENT,
	user_id int(11) NOT NULL REFERENCES users(id),
	PRIMARY KEY(id)
);

CREATE TABLE users(
	username VARCHAR(50),
	id int(11) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(id)
);

INSERT INTO users (username) VALUE ('snarf');
INSERT INTO users (username) VALUE ('barf');
INSERT INTO messages (text, user_id) VALUES ('sniff', 1);
INSERT INTO messages (text, user_id) VALUES ('cough', 1);