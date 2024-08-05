CREATE TABLE IF NOT EXISTS users
(
    id          SERIAL PRIMARY KEY,
    "firstName" VARCHAR(50)  NOT NULL,
    "lastName"  VARCHAR(50)  NOT NULL,
    email       VARCHAR(100) NOT NULL,
    password    VARCHAR(100) NOT NULL,
    is_admin    BOOLEAN      NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMPTZ,
    "updatedAt" TIMESTAMPTZ,
    salary      NUMERIC
);


INSERT INTO users (id, "firstName", "lastName", email, password, is_admin, "createdAt", "updatedAt", salary)
VALUES (1, 'Bob', ' Page', 'admin@cesi.fr', '5e761456804e455ece24468b010043d8', true, now(), now(), 85000);

INSERT INTO users (id, "firstName", "lastName", email, password, is_admin, "createdAt", "updatedAt", salary)
VALUES (2, 'Mohamad', ' Elfalou', 'melfalou@cesi.fr', 'b9af3ef4bb0c7a00e943d08aed90e176', false, now(), now(), 65000);

INSERT INTO users (id, "firstName", "lastName", email, password, is_admin, "createdAt", "updatedAt", salary)
VALUES (3, 'Julian', ' Beutin', 'julian.beutin@viacesi.fr', 'b9859e5a2332ad1cc6296f7b2e81f36e', false, now(), now(), 65000);