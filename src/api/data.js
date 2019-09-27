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

const getSlidePics = function (albumCode) {
  return axios.request({
    // url: 'http://www.noohle.com/api/cloud/fc/basic/platformMaterial/getPage',
    url: '/fc/pic/getList',
    params: {
      albumCode: albumCode
    },
    method: 'get'
  })
}

const getMenuLevelFirst = function () {
  return axios.request({
    // url: 'http://www.noohle.com/api/cloud/fc/basic/platformMaterial/getPage',
    url: '/fc/menu/getList?level=1',
    dataType: 'jsonp',
    crossDomain: true,
    method: 'get'
  })
}

export { getTestData, getMenuLevelFirst, getSlidePics }
