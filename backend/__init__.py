from flask import Flask, g
from flask_cors import CORS
from peewee import PostgresqlDatabase, PrimaryKeyField, TextField, Model
import os
from .Models.TeamModel import Team
from .Models.LeagueModel import League
from . import team_endpoint
from . import league_endpoint
from . import game_endpoint
from . import gamedata_endpoint

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def hello():
    return 'hello'

app.register_blueprint(team_endpoint.bp)
app.register_blueprint(league_endpoint.bp)
app.register_blueprint(game_endpoint.bp)
app.register_blueprint(gamedata_endpoint.bp)

# import code; code.interact(local=dict(globals(), **locals()))