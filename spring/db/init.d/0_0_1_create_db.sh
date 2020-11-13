#!/bin/bash
set -e

#    CREATE USER vcdb-data;
#    CREATE DATABASE vcdb_database;
#    GRANT ALL PRIVILEGES ON DATABASE vcdb_database TO vcdb_database;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE SCHEMA vcdb_database AUTHORIZATION vcdb-data;
EOSQL