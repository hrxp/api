// const db = require("../index");

module.exports = {
  example: async () => {
    try {
      // const result = await db.query(`select * from test.user ${id ? `where id = ${id}` : ''}`);
      const result = 'hello world';
      return result;
    } catch (err) {
      return err;
    }
  },
};
