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
INSERT INTO categories (name) VALUES('front end'),('back end'),('fullstack');
INSERT INTO projects (name, description, link, categoryId) VALUES('alhabil project', 'todo app', 'link project' ,1),('helles project', 'portfolio app', 'link project' ,2), ('mostafa project', 'calculator app', 'link project' ,3);

COMMIT;