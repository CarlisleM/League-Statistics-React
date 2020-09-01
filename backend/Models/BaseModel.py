from backend.db import get_connection
from peewee import Model

class BaseModel(Model):
    class Meta:
        database = get_connection()