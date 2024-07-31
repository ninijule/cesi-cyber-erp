CREATE TABLE users
(
    id        SERIAL PRIMARY KEY,
    firstName VARCHAR(50)  NOT NULL,
    lastName  VARCHAR(50)  NOT NULL,
    email     VARCHAR(100) NOT NULL,
    password  VARCHAR(100) NOT NULL,
    is_admin  BOOLEAN      NOT NULL DEFAULT FALSE,
    createdAt TIMESTAMPTZ,
    updatedAt TIMESTAMPTZ,
    salary    NUMERIC
);


INSERT INTO users (id, firstName, lastName, email, password, is_admin, createdAt, updatedAt, salary)
VALUES (1, 'Bob', ' Page', 'admin@cesi.fr', '5e761456804e455ece24468b010043d8', true, now(), now(), 55000);

INSERT INTO users (id, firstName, lastName, email, password, is_admin, createdAt, updatedAt, salary)
VALUES (2, 'Mohamad', ' Elfalou', 'melfalou@cesi.fr', '5e761456804e455ece24468b010043d8', false, now(), now(), 65000);