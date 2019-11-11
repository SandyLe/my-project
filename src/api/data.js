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
const getProductTypeList = function () {
  return axios.request({
    url: '/fc/productType/getList',
    dataType: 'jsonp',
    crossDomain: true,
    method: 'get'
  })
}
const getPageData = function (pageData) {
  return axios.request({
    url: '/fc/' + pageData.identity + '/getPage',
    method: 'get',
    params: pageData
  })
}
const getOneData = function (identity, id) {
  return axios.request({
    url: '/fc/' + identity + '/getOne?id=' + id,
    method: 'get'
  })
}
const getPath = function (newsType) {
  return axios.request({
    url: '/fc/menuNewsType/getPath?newsType=' + newsType,
    method: 'get'
  })
}
export { getTestData, getMenuLevelFirst, getSlidePics, getHotProductList, getBrandList, getPageData, getOneData, getPath, getProductTypeList }
