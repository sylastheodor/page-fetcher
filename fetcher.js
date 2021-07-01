const request = require('request')
const fs = require('fs')

//fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written succesfully
// })
//
//so make it 
//
const n = process.argv[2]
const m = process.argv[3]

const fetcher = function (url, filePath) {
  request(url, (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode);
    fs.writeFile(filePath, body, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(` Downloaded and saved ${body.length} bytes to ${filePath}.`)
    })
  })
}


fetcher(n, m)