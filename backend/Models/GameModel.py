from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, IntegerField, Model
from .BaseModel import BaseModel

class Game(BaseModel):
    league_id = IntegerField()
    id = PrimaryKeyField()
    date = TextField() # Date format
    team_one_id = TextField()
    team_two_id = TextField()

    def to_json(self):
        return {
            'league_id': self.league_id,
            'game_id': self.id,
            'game_date': self.date,
            'game_team_one': self.team_one_id,
            'game_team_two': self.team_two_id
        }

    class Meta:
        table_name = 'games'
