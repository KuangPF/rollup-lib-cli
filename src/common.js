const add = (...rest) => {
  return rest.reduce((preVale, currentValue) => preVale + currentValue, 0)
}