const singleSellingProperty = {
  "id": "5945030094",
  "name": "德興藥局",
  "phone": "03-8889408",
  "address": "花蓮縣玉里鎮國武里中山路２段５８號",
  "mask_adult": 3657,
  "mask_child": 0,
  "updated": "2020\/05\/01 17:59:29",
  "available": "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午看診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上看診",
  "note": "口罩販售，平常日下午一點開始，周日下午三點開始，成人口罩200份，兒童口罩50份，售完為止。",
  "custom_note": "",
  "website": "",
  "county": "花蓮縣",
  "town": "玉里鎮",
  "cunli": "國武里",
  "service_periods": "NNNNNNNNNNNNNNNNNNNNN"
}

const sellingProperties = [
  singleSellingProperty,
]

const singleSelling = {
  "type": "Feature",
  "properties": singleSellingProperty,
  "geometry": {
      "type": "Point",
      "coordinates": [
          121.315149,
          23.333096
      ]
  }
}

module.exports = {
  sellingProperties
}