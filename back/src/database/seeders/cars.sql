CREATE TABLE IF NOT EXISTS cars
(
    id          serial primary key,
    name        varchar(255),
    description varchar(255),
    img         varchar(255),
    price       double precision,
    is_active   boolean,
    "createdAt" timestamp with time zone not null
);


INSERT INTO cars (id, name, description, img, price, is_active, "createdAt")
VALUES (1, 'Porsche 911', ' La Porsche 911 est une voiture de sport haut de gamme fabriquée par le constructeur automobile allemand Porsche. La première génération est commercialisée en 1964, intégralement conçue par la firme de Stuttgart.', '/assets/img/porsche.jpg', 180000, true, now());


INSERT INTO cars (id, name, description, img, price, is_active, "createdAt")
VALUES (2, 'Ferrari', '', '/assets/img/ferrari.jpg', 180000, true, now());
