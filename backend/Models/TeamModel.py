from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, Model
from .BaseModel import BaseModel

class Team(BaseModel):
    id = PrimaryKeyField()
    name = TextField()
    sname = TextField()

    def to_json(self):
        return {
            'team_id': self.id,
            'team_name': self.name,
            'team_sname': self.sname
        }

    class Meta:
        table_name = 'teams'
