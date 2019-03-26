const promisify = (fn) => {
  return (obj = {}) => {
    return new Promise((resolve, reject) => {
      obj.success = (res) => {
        resolve(res)
      }

      obj.fail = (res) => {
        reject(res)
      }

      fn(obj)
    })
  }
}

module.exports = promisify