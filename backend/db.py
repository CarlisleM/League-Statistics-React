from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, Model
import os

def get_db():
    if 'db' not in g:
        g.db = PostgresqlDatabase(
          os.environ['POSTGRES_DB'],
          user=os.environ['POSTGRES_USER'],
          host=os.environ['POSTGRES_HOST'],
          password=os.environ['POSTGRES_PASS'],
        )
        g.db.connect()
    return g.db

_connection = None

def get_connection():
    global _connection
    if not _connection:
        db = PostgresqlDatabase(
                # os.environ['POSTGRES_DB'],
                'league_statistics_tracker',
                user='postgres',
                # host=os.environ['POSTGRES_HOST'],
                host='localhost',
                password='c04dcfbaceKAMI'
                # sslmode=os.environ['SSLMODE']
                )
        db.connect()
        _connection = db
    return _connection