drop table gamedata;
drop table games;
drop table teams;
drop table leagues;

CREATE TABLE leagues(
    id serial primary key,
    name text,
    description text,
    logo text
);

CREATE TABLE teams(
    id serial primary key,
    league_id integer not null,
    name text,
    sname text,
    logo text
);

CREATE TABLE games(
    id serial primary key,
    league_id integer not null,
    date timestamp with time zone,
    team_one_id integer not null,
    team_two_id integer not null    
);

CREATE TABLE gamedata(
    -- game_id serial primary key,
    id integer not null,
    first_blood text,
    first_tower text,
    first_dragon text,
    first_riftherald text,
    first_inhibitor text,
    first_baron text,
    team_one_total_kills text,
    team_two_total_kills text,
    winner text,
    loser text
);

alter table games add foreign key (team_one_id) references teams(id);
alter table games add foreign key (team_two_id) references teams(id);
alter table teams add foreign key (league_id) references leagues(id);
alter table games add foreign key (league_id) references leagues(id);
alter table gamedata add foreign key (id) references games(id);

INSERT INTO leagues(id, name, description, logo) values (1, 'LCS', 'North American League played in the staples center', 'https://ggscore.com/media/logo/t12921.png?90');
INSERT INTO leagues(id, name, description, logo) values (2, 'LCK', 'Korean League', 'https://ggscore.com/media/tournament/e3248.png');
INSERT INTO leagues(id, name, description, logo) values (3, 'LEC', 'European League', 'https://www.pngkit.com/png/full/768-7688994_lec-logo-league-of-legends-lec-logo.png');
INSERT INTO leagues(id, name, description, logo) values (4, 'LJL', 'Japanese League', 'https://ggscore.com/media/logo/t12916.png');

/* LCS */
INSERT INTO teams(id, league_id, name, sname, logo) values (1, 1, 'Team SoloMid', 'tsm', 'https://ggscore.com/media/logo/t8675.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (2, 1, 'Cloud9', 'c9', 'https://ggscore.com/media/logo/t4639.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (3, 1, 'Team Liquid', 'tl', 'https://ggscore.com/media/logo/t14.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (4, 1, 'FlyQuest', 'fly', 'https://ggscore.com/media/logo/t13036.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (5, 1, 'Golden Guardians', 'gg', 'https://ggscore.com/media/logo/t22861.png?74');
INSERT INTO teams(id, league_id, name, sname, logo) values (6, 1, 'Evil Geniuses', 'eg', 'https://ggscore.com/media/logo/t49.png?81');
INSERT INTO teams(id, league_id, name, sname, logo) values (7, 1, '100 Thieves', '100', 'https://ggscore.com/media/logo/t22904.png?47');
INSERT INTO teams(id, league_id, name, sname, logo) values (8, 1, 'Dignitas', 'dig', 'https://ggscore.com/media/logo/t14872.png?69');
INSERT INTO teams(id, league_id, name, sname, logo) values (9, 1, 'Counter Logic Gaming', 'clg', 'https://ggscore.com/media/logo/t8602.png?15');
INSERT INTO teams(id, league_id, name, sname, logo) values (10, 1, 'Immortals', 'imt', 'https://ggscore.com/media/logo/t8671.png?22');

/* LCK */
INSERT INTO teams(id, league_id, name, sname, logo) values (11, 2, 'Afreeca Freecs', 'af', 'https://ggscore.com/media/logo/t8709.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (12, 2, 'DAMWON', 'dwg', 'https://ggscore.com/media/logo/t15159.png?96');
INSERT INTO teams(id, league_id, name, sname, logo) values (13, 2, 'DRX', 'drx', 'https://ggscore.com/media/logo/t41907.png?1');
INSERT INTO teams(id, league_id, name, sname, logo) values (14, 2, 'Gen.G', 'gen', 'https://ggscore.com/media/logo/t23434.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (15, 2, 'Hanwha Life', 'hle', 'https://ggscore.com/media/logo/t23435.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (16, 2, 'KT Rolster', 'kt', 'https://ggscore.com/media/logo/t3946.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (17, 2, 'SANDBOX Gaming', 'sb', 'https://ggscore.com/media/logo/t30425.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (18, 2, 'SeolHaeOne Prince', 'sp', 'https://ggscore.com/media/logo/t8724.png?99');
INSERT INTO teams(id, league_id, name, sname, logo) values (19, 2, 'T1', 't1', 'https://ggscore.com/media/logo/t39928.png?25');
INSERT INTO teams(id, league_id, name, sname, logo) values (20, 2, 'Team Dynamics', 'dyn', 'https://ggscore.com/media/logo/t36220.png');

/* LEC */
INSERT INTO teams(id, league_id, name, sname, logo) values (21, 3, 'Excel Esports', 'xl', 'https://ggscore.com/media/logo/t30836.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (22, 3, 'FC Schalke 04', 's04', 'https://ggscore.com/media/logo/t8621.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (23, 3, 'Fnatic', 'fnc', 'https://cdn.pandascore.co/images/team/image/394/220px_fnaticlogo_square.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (24, 3, 'G2 Esports', 'g2', 'https://ggscore.com/media/logo/t4643.png?63');
INSERT INTO teams(id, league_id, name, sname, logo) values (25, 3, 'MAD Lions', 'mad', 'https://ggscore.com/media/logo/t44320.png?53');
INSERT INTO teams(id, league_id, name, sname, logo) values (26, 3, 'Misfits Gaming', 'msf', 'https://ggscore.com/media/logo/t8702.png?15');
INSERT INTO teams(id, league_id, name, sname, logo) values (27, 3, 'Origen', 'og', 'https://ggscore.com/media/logo/t8625.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (28, 3, 'Rogue', 'rge', 'https://ggscore.com/media/logo/t30837.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (29, 3, 'SK Gaming', 'sk', 'https://ggscore.com/media/logo/t3923.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (30, 3, 'Team Vitality', 'vit', 'https://ggscore.com/media/logo/t8628.png?30');

INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (1, 1, now(), 1, 2);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (2, 1, now(), 2, 4);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (3, 1, now(), 2, 3);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (4, 1, now(), 1, 5);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (5, 1, now(), 1, 6);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (6, 1, now(), 3, 2);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (7, 1, now(), 4, 3);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (8, 1, now(), 8, 9);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (9, 1, now(), 7, 10);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (10, 1, now(), 5, 8);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (11, 1, now(), 5, 10);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (12, 1, now(), 9, 8);

INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (13, 2, now(), 12, 14);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (14, 2, now(), 13, 19);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (15, 2, now(), 14, 17);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (16, 2, now(), 13, 11);

INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (17, 3, now(), 27, 22);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (18, 3, now(), 23, 21);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (19, 3, now(), 24, 25);
INSERT INTO games(id, league_id, date, team_one_id, team_two_id) values (20, 3, now(), 26, 27);

INSERT INTO gamedata(id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (1, 'tsm', 'tsm', 'c9', 'tsm', 'c9', 'c9', 9, 14, 'tsm', 'c9');


-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (2, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (3, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (4, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (5, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (6, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (7, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (8, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (9, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (10, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (11, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (12, '', '', '', '', '', '', 2, 2, '', '');

-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (13, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (14, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (15, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (16, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (17, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (18, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (19, '', '', '', '', '', '', 2, 2, '', '');
-- INSERT INTO gamedata(game_id, first_blood, first_tower, first_dragon, first_riftherald, first_inhibitor, first_baron, team_one_total_kills, team_two_total_kills, winner, loser) values (20, '', '', '', '', '', '', 2, 2, '', '');
