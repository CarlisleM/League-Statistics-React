from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, IntegerField, Model
from .BaseModel import BaseModel

class Team(BaseModel):
    league_id = IntegerField()
    id = PrimaryKeyField()
    name = TextField()
    sname = TextField()
    logo = TextField()

    def to_json(self):
        return {
            'league_id': self.league_id,
            'team_id': self.id,
            'team_name': self.name,
            'team_sname': self.sname,
            'team_logo': self.logo
        }

    class Meta:
        table_name = 'teams'
