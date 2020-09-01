import json
from flask import Blueprint
from backend.Models.GameModel import Game

bp = Blueprint('games', __name__)

@bp.route('/api/games', methods=['GET'])
def games():
    return json.dumps([x.to_json() for x in Game.select()])