CREATE KEYSPACE cotb
WITH durable_writes = true
AND replication = {
	'class' : 'SimpleStrategy',
	'replication_factor' : 1
};

CREATE TABLE cotb.attendees (
	id uuid,
	first_name text,
	last_name text,
	email text,

	PRIMARY KEY (id)
);
