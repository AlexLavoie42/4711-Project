create schema projectdb collate utf8mb4_0900_ai_ci;

use projectdb;

create table topics
(
	id int auto_increment
		primary key,
	topic text null
);

create table users
(
	id int auto_increment
		primary key,
	email text null,
	first_name text null,
	last_name text null,
	password text null,
	image_url text null,
	`desc` text null,
	country text null,
	birthdate date null,
	post_count int default 0 null,
	message_count int default 0 null,
	like_count int default 0 null
);

create table conversations
(
	id int auto_increment
		primary key,
	subject text null,
	constraint user1__fk
		foreign key (id) references users (id),
	constraint user2__fk
		foreign key (id) references users (id)
);

create table likes
(
	id int auto_increment
		primary key,
	constraint liked_user__fk
		foreign key (id) references users (id),
	constraint user__fk
		foreign key (id) references users (id)
);

create table messages
(
	id int auto_increment
		primary key,
	message text null,
	timestamp datetime null,
	constraint conversation_id_fk
		foreign key (id) references conversations (id)
);

create table posts
(
	id int auto_increment
		primary key,
	subject text null,
	body text null,
	post_date date null,
	reply_count int default 0 null,
	constraint topic_id_fk
		foreign key (id) references topics (id),
	constraint user_id
		foreign key (id) references users (id)
);

create table reply
(
	id int null,
	body text null,
	constraint post_id_fk
		foreign key (id) references posts (id),
	constraint user_id_fk
		foreign key (id) references users (id)
);


