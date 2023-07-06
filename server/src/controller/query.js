
module.exports = {
    getAllUser: () => 'select * from [dbo].[user]',
    getUser: (userId) => `SELECT * FROM [dbo].[user] WHERE U_ID = ${userId}`,
    updateUser: (pass, userId) => `UPDATE [dbo].[user] SET PASS = '${pass}' WHERE U_ID = ${userId}`,
    createuser: (username, email, pass) => `INSERT INTO [dbo].[user] (USER_NAME, EMAIL, PASS,USER_STATE_BAN) VALUES ('${username}', '${email}', '${pass}',0)`,
    updateBan: (USER_STATE_BAN, userId) => `UPDATE [dbo].[user] SET USER_STATE_BAN = '${USER_STATE_BAN}' WHERE U_ID = ${userId}`,
    deleteUser: (userId) => `DELETE FROM [dbo].[user] WHERE U_ID='${userId}'`,
    getAllManga: () => `SELECT  ROW_NUMBER() OVER (ORDER BY MANGA_VIEW DESC) AS top_manga, M_ID,MANGA_NAME,AUTHOR,MANGA_VIEW,MANGA_DESCRIPTION, IMAGE,NHOM_DICH
    FROM dbo.MANGA
    ORDER BY MANGA_VIEW DESC
    `,
    getAllMangaByID: (id) => `select * from dbo.MANGA where M_ID=${id}`,
    getMangaByName: (MANGA_NAME) => `select * from [dbo].[MANGA] WHERE MANGA_NAME=${MANGA_NAME}`,
    creatManga: (MANGA_NAME, AUTHER, MANGA_DESCRIPTION, IMAGE) => `INSERT INTO [dbo].[MANGA] (MANGA_NAME,AUTHOR,MANGA_VIEW,MANGA_DESCRIPTION,IMAGE) VALUES (${MANGA_NAME},${AUTHER},0,${MANGA_DESCRIPTION},${IMAGE})`,
    getAllCate: () => `select * from dbo.CATEGORY`,
    getCateByIDManga: (id) => `select c.CATEGORY_NAME ,c.C_ID from MANGA m
    join MANGA_CATEGORY  mc on mc.M_ID=m.M_ID
    join CATEGORY c on c.C_ID=mc.C_ID
    where m.M_ID=${id}`
}