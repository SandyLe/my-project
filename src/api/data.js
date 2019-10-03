import axios from '../lib/api.request'
//
// export default function getMenuLevelFirst () {
//   return axios.request({
//     // url: 'http://www.noohle.com/api/cloud/fc/basic/platformMaterial/getPage',
//     url: '/fc/menu/getList?level=1',
//     method: 'get'
//   })
// }

const getTestData = function () {
  return axios.request({
    // url: 'http://www.noohle.com/api/cloud/fc/basic/platformMaterial/getPage',
    url: '/test/test',
    method: 'get'
  })
}

const getSlidePics = function (albumCode, limit) {
  return axios.request({
    url: '/fc/pic/getList',
    params: {
      albumCode: albumCode,
      limit: limit
    },
    method: 'get'
  })
}

const getMenuLevelFirst = function () {
  return axios.request({
    url: '/fc/menu/getList?level=1',
    dataType: 'jsonp',
    crossDomain: true,
    method: 'get'
  })
}

const getHotProductList = function () {
  return axios.request({
    url: '/fc/hotProduct/getList?top=6',
    dataType: 'jsonp',
    crossDomain: true,
    method: 'get'
  })
}

const getBrandList = function () {
  return axios.request({
    url: '/fc/brand/getList',
    dataType: 'jsonp',
    crossDomain: true,
    method: 'get'
  })
}
export { getTestData, getMenuLevelFirst, getSlidePics, getHotProductList, getBrandList }
