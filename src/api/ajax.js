/**
 * Created by Administrator on 2018/8/29 0029.
 */

import axios from 'axios'

export default function ajax(url,data={},type='GET') {
//这个使用promise和axios封装的ajax方法 暴露的是个函数对象
  return new promise(
    function (resolve,reject) {
      //定义一个新的变量名来接收数据
      let promise
       //发送请求 get方法
      if (type==='GET'){
        //定义一个空的字符串来接收当时候变化的数据
        let paramStr = ''
        //取出所有数据 进行遍历
        Object.keys(data).forEach(key=>{
          paramStr = key +"="+data[key]+'&'//不应该加在中间么
        })
        //下面是进行判断 当有paramStr的时候进行进行字符串截取
        if(paramStr){
         paramStr =paramStr.substring(0,paramStr.length-1)
        }
        //下面进行发送axios请求用get方法 一种是post方法
        axios.get(
          promise=axios.get(url + '?'+ paramStr)//形成一个地址动态的
        )
      }else {
        //进行post方法请求
          pomise=axios.post(url,data)
      }
      //接下来返回成功的回调与失败的回调
     pomise.then(
       response =>{
         resolve(response.data)
       }
     ).catch(
      reject(error)
     )

    }
  )


}

