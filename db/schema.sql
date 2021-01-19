DROP database if exists burgers_booklist_db;
CREATE database burgers_booklist_db;

USE burgers_booklist_db; 
CREATE table burgers_books(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    book_name varchar (250),
    book_read BOOLEAN,
    primary key (id)
)





