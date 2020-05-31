import url from 'url'
import sql from './sql'

export default async function (req, res, next) {
  const qs = url.parse(req.url,true).query

  let Location = ''

  try {
    // const [_res] = await sql.query(`select * from videos limit 1000;`)
    if ( !qs.url || !qs.word )
      throw new Error('has no args')

    const { query, host, pathname } = url.parse( qs.url , true )

    if ( !['www.youtube.com','youtu.be'].includes(host) )
      throw new Error('invalid link')

    const __url = host === 'youtu.be' ? pathname.replace('/','') : query.v
    const word = qs.word.trim().toLowerCase()

    if ( !__url || !word )
      throw new Error('wrong convert')

    const [__check] = await sql.query(`select * from videos where word='${word}';`)

    if ( __check.length > 0 )
      throw new Error('already has word')

    const [ __res ] = await sql.query(`insert into videos (url,word,name,email) value ('${__url}','${word}', '${qs.name}', '${qs.email}');`)

    Location = '/success'

  } catch (e) {
    Location = '/cant?message='+e.message
    // res.writeHead(500, {'Content-type':'application/json'})
    // res.end(JSON.stringify({
    //   error: e.message
    // }))
  }

  res.writeHead(302, {
    Location
  })
  res.end()
}
