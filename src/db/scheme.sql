-- Active: 1674087741358@@127.0.0.1@3306
SELECT * FROM users WHERE email="luposki@mail.com"; 

SELECT * FROM profiles;

SELECT * FROM profiles WHERE "userId"="166a4472-8957-4e14-adb7-9dd2347d1a87";

SELECT 
u.name, 
u.nickname,
p."messagemStatus",
p.status,
p."imgProfile",
p."imgFrontCover",
p.bio,
p.telephone,
p."birthDate",
p.localization,
u.create_at
FROM profiles AS p
INNER JOIN users AS u ON p."userId" = u.id WHERE u.id = "166a4472-8957-4e14-adb7-9dd2347d1a87";  

UPDATE profiles
SET messagemStatus=?,
    status=?,
    imgProfile=?,
    imgFrontCover=?,
    bio=?,
    telephone=?,
    birthDate=?,
    localization=?,
WHERE id="166a4472-8957-4e14-adb7-9dd2347d1a87" 
