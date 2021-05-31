//Importing DB
import db from "../config/database";

exports.allDomains = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM t_domain");
  res.status(200).send({
    body: rows,
  });
};
