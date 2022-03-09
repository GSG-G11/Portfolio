BEGIN;

DROP TABLE IF EXISTS projects, categories CASCADE;

CREATE TABLE categories(
  categoryId SERIAL PRIMARY KEY ,
  name VARCHAR(225) NOT NULL
);

CREATE TABLE projects(
  id SERIAL PRIMARY KEY ,
  name VARCHAR(225) NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  categoryId INT,
  FOREIGN KEY(categoryId) REFERENCES categories(categoryId)
);
INSERT INTO categories (name) VALUES('Front end'),('Back end'),('FullStack');
INSERT INTO projects (name, description, link, categoryId) VALUES('TODO EXPRESS', 'simple todo app using node js express', 'https://taskat.herokuapp.com/' ,1),('STARBUCKS CLONE', 'Starbucks home page from scratch nice and beuatifull styls', 'https://mo7amedehab97.github.io/starbucks-clone/' ,2), ('MY PORTFOLIO', 'Landing page contains my profile', 'https://mohammadalhabil.github.io/MyPortfolio/' ,3),('ToDoApp-MohammadAlHabil', ' ToDo list is a simple website to save Your daily tasks in order not to miss anything ', 'https://gsg-g11.github.io/ToDoApp-MohammadAlHabil/' ,3);

COMMIT;