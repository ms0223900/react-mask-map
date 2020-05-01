function getSellingListByAddress(address, sellingList) {
  if(!address) {
    return []
  }
  
  const res = sellingList.filter(s => {
    return s.address.includes(address)
  })

  return res
}

module.exports = getSellingListByAddress