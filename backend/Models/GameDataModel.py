from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, IntegerField, Model
from .BaseModel import BaseModel

class Gamedata(BaseModel):
    id = IntegerField()
    first_blood = TextField() 
    first_tower = TextField()
    first_dragon = TextField()
    first_riftherald = TextField()
    first_inhibitor = TextField()
    first_baron = TextField()
    team_one_total_kills = TextField()
    team_two_total_kills = TextField()
    winner = TextField()
    loser = TextField()

    def to_json(self):
        return {
            'game_id': self.id,
            'fblood': self.first_blood,
            'ftower': self.first_tower,
            'fdragon': self.first_dragon,
            'friftherald': self.first_riftherald,
            'finhibitor': self.first_inhibitor,
            'fbaron': self.first_baron,
            'team_one_kills': self.team_one_total_kills,
            'team_two_kills': self.team_two_total_kills,
            'winner': self.winner,
            'loser': self.loser
        }

    class Meta:
        table_name = 'gamedata'
