
module.exports={ 
    getAllUser:()=>'select * from [dbo].[user]',
    getUser:(userId)=>`SELECT * FROM [dbo].[user] WHERE U_ID = ${userId}`,
    updateUser:(pass,userId)=>`UPDATE [dbo].[user] SET PASS = '${pass}' WHERE U_ID = ${userId}`,
    createuser:(username,email,pass)=>`INSERT INTO [dbo].[user] (USER_NAME, EMAIL, PASS,USER_STATE_BAN) VALUES ('${username}', '${email}', '${pass}',0)`,
    updateBan:(USER_STATE_BAN,userId)=>`UPDATE [dbo].[user] SET USER_STATE_BAN = '${USER_STATE_BAN}' WHERE U_ID = ${userId}`,
    deleteUser:(userId)=>`DELETE FROM [dbo].[user] WHERE U_ID='${userId}'`
}