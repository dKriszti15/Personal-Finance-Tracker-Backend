CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  username TEXT UNIQUE,
  password_hash TEXT NOT NULL
);

INSERT INTO users (firstname, lastname, username, password_hash) 
VALUES 
  ('Alice', 'Smith', 'odi','dummyhash1'),
  ('Bob', 'Johnson', 'asdr','dummyhash2');
