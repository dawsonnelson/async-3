CREATE TABLE helo_users (
	user_id SERIAL PRIMARY KEY,
	auth0_id VARCHAR(200),
	user_image VARCHAR(200),
	first_name VARCHAR(200),
	last_name VARCHAR(200),
	gender VARCHAR(200),
	hair_color VARCHAR(200),
	eye_color VARCHAR(200),
	hobby VARCHAR(200),
	birth_day VARCHAR(200),
	birth_month VARCHAR(200),
	birth_year VARCHAR(200)
);
