/**
 * Created by Administrator on 2018/8/29 0029.
 */
//包含n个接口请求函数的模块
import ajax from './ajax'
const BEAS='/api'
/*、根据经纬度获取位置详情

### 请求URL：
http://localhost:3000/position/:geohash*/
export  const getAddes=(geohash)=>ajax(`${BEAS}/position/${geohash}}`)
// http://localhost:3000/index_category
export const reqCategorys=()=>ajax(BEAS+index_category)
// http://localhost:3000/shops
// [http://localhost:3000/shops?latitude=40.10038&longitude=116.36867](http://localhost:3000/shops?latitude=40.10038&longitude=116.36867)
// uery
// |参数          |是否必选  |类型     |说明|
// |latitude      |Y        |string   |纬度|
// |longitude     |Y       |string    |经度|
export const getshop=(longitude,latitude)=>ajax(BESA+'/shop',{latitude,longitude})

