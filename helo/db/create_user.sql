INSERT INTO helo_users ( 
    auth0_id, 
    user_image
    -- first_name,
    -- last_name,
    -- gender,
    -- hair_color,
    -- eye_color,
    -- hobby,
    -- birth_day,
    -- birth_month,
    -- birth_year

      )

VALUES ($1, $2)

returning *;