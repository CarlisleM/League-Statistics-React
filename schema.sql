
drop table teams;
drop table games;
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
    date timestamp with time zone,
    team_one_id integer not null,
    team_two_id integer not null    
);

alter table games add foreign key (team_one_id) references teams(id);
alter table games add foreign key (team_two_id) references teams(id);
alter table teams add foreign key (league_id) references leagues(id);

INSERT INTO leagues(id, name, description, logo) values (1, 'LCS', 'North American League played in the staples center', 'https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltf13665b20f0246fc/5e704ff93ed79e6484b30d66/LCSxGPxMC_Announcement_MediaKeyArt_1600x900.jpg?width=3200&height=1800');
INSERT INTO leagues(id, name, description, logo) values (2, 'LCK', 'Korean League', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/League_of_Legends_Champions_Korea_logo.svg/1200px-League_of_Legends_Champions_Korea_logo.svg.png');
INSERT INTO leagues(id, name, description, logo) values (3, 'LEC', 'European League', 'https://toppng.com/uploads/preview/lec-logo-league-of-legends-lec-logo-11563335137pu09vlug7t.png');

INSERT INTO teams(id, league_id, name, sname, logo) values (1, 1, 'Team Solomid', 'TSM', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/1200px-TSM_Logo.svg.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (2, 1, 'Cloud9', 'C9', 'https://ggscore.com/media/logo/t4639.png');
INSERT INTO teams(id, league_id, name, sname, logo) values (3, 2, 'DragonX', 'DRX', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d3/DRXlogo_square.png/revision/latest/scale-to-width-down/1200?cb=20200630122625');
INSERT INTO teams(id, league_id, name, sname, logo) values (4, 2, 'Telecom T1', 'T1', 'https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a2/T1logo_square.png/1200px-T1logo_square.png');

INSERT INTO games(id, date, team_one_id, team_two_id) values (1, now(), 1, 2);
INSERT INTO games(id, date, team_one_id, team_two_id) values (2, now(), 1, 2);