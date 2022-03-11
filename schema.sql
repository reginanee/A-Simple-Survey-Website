drop table survey;

create table survey(
  survey_id SERIAL    PRIMARY KEY,
  time_stamp          TIMESTAMP NOT NULL DEFAULT(NOW()),
  usr_name            varchar(124),
  usr_pet             varchar(124),
  usr_year            varchar(124),
  usr_suggestions     varchar(1024)
);