import requests from "@/api/request";
export const reqWeather =()=>requests({url:'https://api.vvhan.com/api/weather?city=邢台',method:'get'})
//本地数据json-server
export const reqJson = ()=>requests({url:'/fruits',method:'get'})

// export const reqHerolist = ()=>requests({url:'/heroList',method:'get'})
