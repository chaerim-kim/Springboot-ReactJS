CREATE TABLE vcdb_database.user
(
    id  bigserial not null,
    firstName   varchar(255),
    surName   varchar(255),
    createdAt   timestamp,
    updatedAt   timestamp
)