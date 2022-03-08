BEGIN;

DROP TABLE IF EXISTS projects, categories CASCADE;

CREATE TABLE categories(
  categoryId SERIAL PRIMARY KEY ,
  name VARCHAR(225) NOT NULL,
);

CREATE TABLE projects(
  id SERIAL PRIMARY KEY ,
  name VARCHAR(225) NOT NULL,
  description TEXT NOT NULL,
  categoryId INT FOREIGN KEY REFERENCES categories(categoryId)
);
INSERT INTO categories (name) VALUES('front end'),('back end'),('fullstack');
INSERT INTO projects (name, description, categoryId) VALUES('alhabil project', 'todo app',1),('helles project', 'portfolio app',2), ('mostafa project', 'calculator app',3);

COMMIT;