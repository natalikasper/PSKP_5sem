module.exports = {
  user          : "SYSTEM",
  password      : "Pa55word",
  connectString : "localhost/orcl",
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
