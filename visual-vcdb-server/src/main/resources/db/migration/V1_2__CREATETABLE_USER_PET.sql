CREATE TABLE vcdb_database.pet
(
    id  bigserial not null,
    name   varchar(255),
    breed   varchar(255),
    createdAt   timestamp,
    updatedAt   timestamp
)