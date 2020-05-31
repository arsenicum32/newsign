import sql from './sql'

export default async function (req, res, next) {
  try {
    const [_res] = await sql.query(`select * from videos limit 10000;`)
    res.writeHead(201, {'Content-type':'application/json'})
    res.end(
      JSON.stringify(_res.map(({url,word, name}) => ({
        id: url,
        word,
        name: name==="Ann Evtodieva"? "admin":name,
        image: `https://i.ytimg.com/vi/${url}/hqdefault.jpg`
      })))
    )
  } catch (e) {
    console.log(
      e
    )
    res.writeHead(500, {'Content-type':'application/json'})
    res.end(JSON.stringify({
      error: e.message
    }))
  }

}
