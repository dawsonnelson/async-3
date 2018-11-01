-- SELECT user_id , id
-- from helo_users
--     Join friends
--         on helo_users.user_id = friends.id

INSERT INTO friends (user_id, friend_id) VALUES ($1,$2);