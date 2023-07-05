#!/bin/bash
set -e
/opt/mssql/bin/sqlservr & sleep 20s
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Quyet_11_02  -i /docker-entrypoint-initdb.d/db.sql
sleep infinity
