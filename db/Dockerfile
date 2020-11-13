FROM postgres

# See https://hub.docker.com/_/postgres

COPY ./init.d/* /docker-entrypoint-initdb.d/
COPY postgres.conf /etc/postgresql/postgresql.conf
