const mysql = require('mysql')

const collections = {
  'videos' : {
    'id': 'int NOT NULL AUTO_INCREMENT',
    'url' : 'VARCHAR(255)',
    'word' : 'VARCHAR(255)',
    'time': 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP'
    //'UNIQUE': ['gmail','nickname','facebook']
  }
}

class SQL {
  constructor() {
    this.connection = mysql.createPool({
      host     : '127.0.0.1',
      user     : 'root',
      password : 'newsign',
      database : 'newsign'
    })

    for ( const tableName of Object.keys( collections ) ) {
      const ob = collections[ tableName ]
      const qs = `create table if not exists ${ tableName } (
        ${ Object.keys(ob).map( key => key + ' ' + ob[key]).join(', ') },
        PRIMARY KEY (id) ) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`
      this.query( qs )
    }
  }

  query(_str){
    return new Promise( ( res, rej ) => {
      this.connection.query( _str , (error, results, fields) => {
        if (error)
          rej(error)
        else
          res([
            Array.isArray(results) ? results.map( o => ({...o})) : Object.assign({}, results)
          , fields ])
      })
    })
  }
}

const sql = new SQL()
export default sql
