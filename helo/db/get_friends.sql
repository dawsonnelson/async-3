-- select helo_users.user_id, friends.user_id
-- from helo_users
-- inner join friends ON helo_users.user_id = friends.user_id

-- select * from friends


select *
from helo_users
inner join friends ON helo_users.user_id = friends.friend_id
where friends.user_id = $1