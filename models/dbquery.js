// src/usingDB/models/index.
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = {
  /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object 
   */
  query(text, params){
    return new Promise((resolve, reject) => {
      pool.query(text, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}