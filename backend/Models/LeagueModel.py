from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, Model
from .BaseModel import BaseModel

class League(BaseModel):
    id = PrimaryKeyField()
    name = TextField()
    description = TextField()
    logo = TextField()

    def to_json(self):
        return {
            'league_id': self.id,
            'league_name': self.name,
            'league_desc': self.description,
            'league_logo': self.logo
        }

    class Meta:
        table_name = 'leagues'
