
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured boolean DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);