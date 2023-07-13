
module.exports = {
    getAllUser: () => 'select * from [dbo].[user]',
    getUser: (userId) => `SELECT * FROM [dbo].[user] WHERE U_ID = ${userId}`,
    updateUser: (pass, userId) => `UPDATE [dbo].[user] SET PASS = '${pass}' WHERE U_ID = ${userId}`,
    createuser: (username, email, pass) => `INSERT INTO [dbo].[user] (USER_NAME, EMAIL, PASS,USER_STATE_BAN) VALUES ('${username}', '${email}', '${pass}',0)`,
    updateBan: (USER_STATE_BAN, userId) => `UPDATE [dbo].[user] SET USER_STATE_BAN = '${USER_STATE_BAN}' WHERE U_ID = ${userId}`,
    deleteUser: (userId) => `DELETE FROM [dbo].[user] WHERE U_ID='${userId}'`,
    getTopManga: () => `SELECT  ROW_NUMBER() OVER (ORDER BY MANGA_VIEW DESC) AS top_manga, M_ID,MANGA_NAME,AUTHOR,MANGA_VIEW,MANGA_DESCRIPTION, IMAGE,NHOM_DICH,MANGA_UPLOAD_TIME
    FROM dbo.MANGA
    ORDER BY MANGA_VIEW DESC
    `,
    getAllManga: () => `select * from MANGA`,
    getAllMangaByCateID: (id) => `select ROW_NUMBER() OVER (ORDER BY m.MANGA_VIEW DESC) AS top_manga,m.*, c.CATEGORY_NAME from MANGA m
    join MANGA_CATEGORY  mc on mc.M_ID=m.M_ID
    join CATEGORY c on c.C_ID=mc.C_ID
    where c.C_ID=${id}
	ORDER BY m.MANGA_VIEW DESC`,
    getAllMangaByID: (id) => `select * from dbo.MANGA where M_ID=${id}`,
    getMangaByName: (MANGA_NAME) => `select * from [dbo].[MANGA] WHERE MANGA_NAME=${MANGA_NAME}`,
    creatManga: (MANGA_NAME, AUTHOR, MANGA_DESCRIPTION, IMAGE, NHOM_DICH) => `INSERT INTO [dbo].[MANGA] (MANGA_NAME, AUTHOR, MANGA_VIEW, MANGA_DESCRIPTION, IMAGE, NHOM_DICH) VALUES ('${MANGA_NAME}', '${AUTHOR}', 0, '${MANGA_DESCRIPTION}', '${IMAGE}', '${NHOM_DICH}')`
    ,
    getAllCate: () => `select * from dbo.CATEGORY`,
    getCateByIDManga: (id) => `select c.CATEGORY_NAME ,c.C_ID from MANGA m
    join MANGA_CATEGORY  mc on mc.M_ID=m.M_ID
    join CATEGORY c on c.C_ID=mc.C_ID
    where m.M_ID=${id}`,
    getConten: (id) => `select c.CHAP_NUM,c.title, i.IMAGE from  content c
    join manga_images mi on mi.id_content=c.IMAGE
    join images i on i.id=mi.id_image
    where c.M_ID=${id}`,
    getChapter: (id) => `select distinct c.CHAP_NUM,c.title, i.IMAGE from  content c
    join manga_images mi on mi.id_content=c.IMAGE
    join images i on i.id=mi.id_image
    where c.M_ID=${id}`,
    deleteMangaByID: (id) => ` BEGIN TRANSACTION;
    DELETE FROM [dbo].[content] WHERE M_ID = ${id};
    DELETE FROM [dbo].[manga_images] WHERE id_content IN (SELECT IMAGE FROM [dbo].[content] WHERE M_ID = ${id});
    DELETE FROM [dbo].[MANGA] WHERE M_ID = ${id};
    COMMIT;`,
    updateManga: (MANGA_NAME, AUTHOR, MANGA_DESCRIPTION, IMAGE, NHOM_DICH, id) => 
    `UPDATE [dbo].[MANGA] SET MANGA_NAME = '${MANGA_NAME}',
                               AUTHOR = '${AUTHOR}',
                               MANGA_DESCRIPTION = '${MANGA_DESCRIPTION}',  
                               IMAGE = '${IMAGE}',   
                               NHOM_DICH = '${NHOM_DICH}'
                          WHERE M_ID = ${id}`,
    updateContentImage:(id_image,id_content,m_id,image)=>`insert into images (id,IMAGE) values(${id_image},${image})
                                                insert into manga_images (id_image,id_content) VALUEs( ${id_image},${id_content});
                                                INSERT INTO content (CHAP_NUM,[IMAGE],M_ID) VALUES(${id_image},${id_content},${m_id})`
}