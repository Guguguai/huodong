import qs from 'qs'
const mockdata = {
  winw: 556,
  winh: 741,
  appid: '37h5',
  game_id: 2,
  uid: 1146371576,
  is_adult: -1,
  referer: '',
  nickname: '╰☆古古怪☆╮',
  time: 1545289831,
  shared_switch: 'wx',
  subscribe_switch: 'wx',
  wx_is_subscribe: -1,
  app_ext: '',
  guid: 'GUID5c1b4067c1a6a248630631471692',
  is_tg: 0,
  app_domain: '37.com',
  id_verify_switch: 1,
  id_verify: 1,
  sign: '0d4295b2031a423ab693e6bdb9456e0a',
  sid: 1199,
  fxparam: 'appid|game_id|uid|is_adult|referer|nickname|time|shared_switch|subscribe_switch|wx_is_subscribe|app_ext|guid|is_tg|app_domain|id_verify_switch|id_verify|sign|sid',
  zt_domain: '37.com',
  clientid: undefined
}

module.exports = {
  'url': `https://huodong.37.com/dist/h5game/20181212-dts/dist/?${qs.stringify(mockdata)}`
}