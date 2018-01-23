export default function (bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) {
    return '0 B'
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  const value = (bytes / (1024 ** i))
  const usedDigits = String(Math.floor(value)).length
  return `${(bytes / (1024 ** i)).toFixed(4 - usedDigits)} ${sizes[i]}`
}
