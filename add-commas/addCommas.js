function addCommas(number) {
  return number.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = addCommas;
