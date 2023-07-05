
module.exports={ 
    getAllUser:()=>'select * from [dbo].[user]',
    getUser:(userId)=>`SELECT * FROM [dbo].[user] WHERE U_ID = ${userId}`,
    updateUser:(pass,userId)=>`UPDATE [dbo].[user] SET PASS = '${pass}' WHERE U_ID = ${userId}`,
    createuser:(username,email,pass)=>`INSERT INTO [dbo].[user] (USER_NAME, EMAIL, PASS,USER_STATE_BAN) VALUES ('${username}', '${email}', '${pass}',0)`,
    updateBan:(USER_STATE_BAN,userId)=>`UPDATE [dbo].[user] SET USER_STATE_BAN = '${USER_STATE_BAN}' WHERE U_ID = ${userId}`,
    deleteUser:(userId)=>`DELETE FROM [dbo].[user] WHERE U_ID='${userId}'`,
    getAllManga:()=>`SELECT * from [dbo].[MANGA]`,
    getMangaByName:(MANGA_NAME)=>`select * from [dbo].[MANGA] WHERE MANGA_NAME=${MANGA_NAME}`,
    creatManga:(MANGA_NAME,AUTHER,MANGA_DESCRIPTION)=>`INSERT INTO [dbo].[MANGA] (MANGA_NAME,AUTHOR,MANGA_VIEW,MANGA_DESCRIPTION) VALUES (${MANGA_NAME},${AUTHER},0,${MANGA_DESCRIPTION})`,

}