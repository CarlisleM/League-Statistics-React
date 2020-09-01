import json
from flask import Blueprint
from backend.Models.TeamModel import Team

bp = Blueprint('teams', __name__)

@bp.route('/api/teams', methods=['GET'])
def teams():
    return json.dumps([x.to_json() for x in Team.select()])