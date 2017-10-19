const fs = require('fs')
const path = require('path')

module.exports = function (name, data, pathF) {
  pathF = pathF || ''
  fs.writeFileSync(path.resolve(__dirname, `../dist${pathF}/${name}.json`), JSON.stringify(data))
}
