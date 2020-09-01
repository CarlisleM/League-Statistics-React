import json
from flask import Blueprint
from backend.Models.LeagueModel import League

bp = Blueprint('leagues', __name__)

@bp.route('/api/leagues', methods=['GET'])
def leagues():
    return json.dumps([x.to_json() for x in League.select()])