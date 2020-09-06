import json
from flask import Blueprint
from backend.Models.GameDataModel import Gamedata

bp = Blueprint('gamedata', __name__)

@bp.route('/api/gamedata', methods=['GET'])
def gamedata():
    return json.dumps([x.to_json() for x in Gamedata.select()])