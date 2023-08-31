create database dbApiLivros;

use dbApiLivros;

create table livros (
codigo int primary key auto_increment,
nome varchar(50),
autor varchar(50),
ano varchar (4)
);

DELETE FROM livros WHERE codigo ='3';
insert into livros (nome,autor,ano) values ('O sol é para todos', 'Harper Lee', '1960' );

select * from livros

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'





