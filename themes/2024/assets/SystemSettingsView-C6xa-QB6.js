import{d as B,r as m,u as M,a as p,b,e,n as t,g as s,l as n,v as d,m as x,F as f,p as w,k as _,t as v,x as F,y as k,L as A}from"./index-EADe6V-l.js";const z={class:"p-6 h-screen overflow-y-auto custom-scrollbar"},E={class:"space-y-4"},T={class:"grid grid-cols-1 gap-6"},W={class:"space-y-2"},K={class:"space-y-2"},I={class:"space-y-2"},j={class:"relative"},G={class:"space-y-2"},L={class:"space-y-2"},N=["value"],R={class:"space-y-2"},P={class:"grid grid-cols-1 gap-6 mt-8"},$={class:"space-y-2"},H={class:"space-y-2"},q={class:"space-y-4"},J={class:"space-y-2"},O={class:"space-y-4"},Q={class:"space-y-2"},X={key:0,class:"space-y-4"},Y={class:"space-y-2"},Z={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ee={class:"space-y-2"},oe={class:"space-y-2"},re={key:1,class:"space-y-4"},te={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ae={class:"space-y-2"},se={class:"space-y-2"},le={class:"space-y-2"},ne={class:"space-y-2"},de={class:"space-y-2"},ie={class:"space-y-2"},ue={class:"space-y-2"},ge={class:"space-y-2"},ce={class:"flex items-center"},ye=["aria-checked"],pe={class:"mt-8"},be={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ve={class:"space-y-2"},me={class:"flex items-center space-x-2"},xe={class:"space-y-2"},he={class:"flex items-center space-x-2"},fe={class:"space-y-2"},we={class:"flex items-center space-x-2"},_e={class:"space-y-2"},ke={class:"flex flex-wrap gap-3"},Ue=["value"],Se={class:"space-y-2"},Ve={class:"flex items-center space-x-2"},De={class:"space-y-2"},Ce={class:"flex items-center"},Be=["aria-checked"],Me={class:"mt-8"},Fe={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Ae={class:"space-y-2"},ze={class:"flex items-center space-x-2"},Ee={class:"space-y-2"},Te={class:"flex items-center space-x-2"},Ie=B({__name:"SystemSettingsView",setup(We){const a=F("isDarkMode"),l=m({name:"",description:"",file_storage:"",webdav_url:"",webdav_username:"",webdav_password:"",themesChoices:[],expireStyle:[],admin_token:"",robotsText:"",keywords:"",notify_title:"",storage_path:"",notify_content:"",openUpload:1,uploadSize:1,uploadMinute:1,max_save_seconds:0,opacity:.9,s3_access_key_id:"",background:"",showAdminAddr:0,page_explain:"",s3_secret_access_key:"",aws_session_token:"",s3_signature_version:"",s3_region_name:"",s3_bucket_name:"",s3_endpoint_url:"",s3_hostname:"",uploadCount:1,errorMinute:1,errorCount:1,s3_proxy:0,themesSelect:""}),c=m(1),y=m("MB"),u=m(1),g=m("天"),U=(i,o)=>i*{秒:1,分:60,时:3600,天:86400}[o],S=()=>{k({url:"/admin/config/get",method:"get"}).then(i=>{l.value=i.detail;let o=l.value.uploadSize;o>=1024*1024*1024?(c.value=Math.round(o/(1024*1024*1024)),y.value="GB"):o>=1024*1024?(c.value=Math.round(o/(1024*1024)),y.value="MB"):(c.value=Math.round(o/1024),y.value="KB");let r=l.value.max_save_seconds;r===0?(u.value=7,g.value="天"):r%86400===0&&r>=86400?(u.value=r/86400,g.value="天"):r%3600===0&&r>=3600?(u.value=r/3600,g.value="时"):r%60===0&&r>=60?(u.value=r/60,g.value="分"):(u.value=r,g.value="秒")})},h=M(),V=(i,o)=>i*{KB:1024,MB:1048576,GB:1073741824}[o],D=()=>{const i={...l.value};i.uploadSize=V(c.value,y.value),u.value===0?i.max_save_seconds=7*86400:i.max_save_seconds=U(u.value,g.value),k({url:"/admin/config/update",method:"patch",data:i}).then(o=>{o.code==200?h.showAlert("保存成功","success"):h.showAlert(o.message,"error")})};return S(),(i,o)=>(p(),b("div",z,[e("h2",{class:t(["text-2xl font-bold mb-6",[s(a)?"text-white":"text-gray-800"]])}," 系统设置 ",2),e("div",{class:t(["space-y-6 rounded-lg shadow-md p-6",[s(a)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[e("section",E,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 基本设置 ",2),e("div",T,[e("div",W,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 网站名称 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>l.value.name=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.name]])]),e("div",K,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 网站描述 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=r=>l.value.description=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.description]])]),e("div",I,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 管理员密码 ",2),e("div",j,[n(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=r=>l.value.admin_token=r),placeholder:"留空则不修改密码",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.admin_token]]),e("div",{class:t(["absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-400",[s(a)?"text-gray-500":"text-gray-400"]])},o[31]||(o[31]=[e("span",{class:"text-xs"},"留空则不修改",-1)]),2)])]),e("div",G,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 关键词 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=r=>l.value.keywords=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.keywords]])]),e("div",L,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 主题选择 ",2),n(e("select",{"onUpdate:modelValue":o[4]||(o[4]=r=>l.value.themesSelect=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border appearance-none bg-no-repeat bg-right focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]]),style:{"background-image":"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')"}},[(p(!0),b(f,null,w(l.value.themesChoices,r=>(p(),b("option",{value:r.key,key:r.key},v(r.name)+" (by "+v(r.author)+" V"+v(r.version)+") ",9,N))),128))],2),[[x,l.value.themesSelect]])]),e("div",R,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," Robots.txt ",2),n(e("textarea",{"onUpdate:modelValue":o[5]||(o[5]=r=>l.value.robotsText=r),rows:"3",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.robotsText]])])]),e("div",P,[e("div",$,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 通知标题 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=r=>l.value.notify_title=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.notify_title]])]),e("div",H,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 通知内容 ",2),n(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=r=>l.value.notify_content=r),rows:"3",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.notify_content]])])]),e("div",q,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 存储设置 ",2),e("div",J,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 存储路径 ",2),n(e("input",{type:"text",placeholder:"留空则使用默认路径，可不填写","onUpdate:modelValue":o[8]||(o[8]=r=>l.value.storage_path=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.storage_path]])]),e("div",O,[e("div",Q,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 存储方式 ",2),n(e("select",{"onUpdate:modelValue":o[9]||(o[9]=r=>l.value.file_storage=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border appearance-none bg-no-repeat bg-right focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]]),style:{"background-image":"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')"}},o[32]||(o[32]=[e("option",{value:"local"},"本地存储",-1),e("option",{value:"s3"},"S3 存储",-1),e("option",{value:"webdav"},"Webdav 存储",-1)]),2),[[x,l.value.file_storage]])]),l.value.file_storage==="webdav"?(p(),b("div",X,[e("div",Y,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," Webdav URL ",2),n(e("input",{type:"text",placeholder:"请输入 Webdav URL","onUpdate:modelValue":o[10]||(o[10]=r=>l.value.webdav_url=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.webdav_url]])]),e("div",Z,[e("div",ee,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," Webdav Username ",2),n(e("input",{type:"text",placeholder:"请输入 Webdav Username","onUpdate:modelValue":o[11]||(o[11]=r=>l.value.webdav_username=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.webdav_username]])]),e("div",oe,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," Webdav Password ",2),n(e("input",{type:"password",placeholder:"请输入 Webdav Password","onUpdate:modelValue":o[12]||(o[12]=r=>l.value.webdav_password=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.webdav_password]])])])])):_("",!0),l.value.file_storage==="s3"?(p(),b("div",re,[e("div",te,[e("div",ae,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 AccessKeyId ",2),n(e("input",{type:"text","onUpdate:modelValue":o[13]||(o[13]=r=>l.value.s3_access_key_id=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.s3_access_key_id]])]),e("div",se,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 SecretAccessKey ",2),n(e("input",{type:"password","onUpdate:modelValue":o[14]||(o[14]=r=>l.value.s3_secret_access_key=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.s3_secret_access_key]])]),e("div",le,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 BucketName ",2),n(e("input",{type:"text","onUpdate:modelValue":o[15]||(o[15]=r=>l.value.s3_bucket_name=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.s3_bucket_name]])]),e("div",ne,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 EndpointUrl ",2),n(e("input",{type:"text","onUpdate:modelValue":o[16]||(o[16]=r=>l.value.s3_endpoint_url=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.s3_endpoint_url]])]),e("div",de,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 Region Name ",2),n(e("input",{type:"text","onUpdate:modelValue":o[17]||(o[17]=r=>l.value.s3_region_name=r),placeholder:"auto",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.s3_region_name]])]),e("div",ie,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 Signature Version ",2),n(e("select",{"onUpdate:modelValue":o[18]||(o[18]=r=>l.value.s3_signature_version=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[33]||(o[33]=[e("option",{value:"s3v2"},"S3v2",-1),e("option",{value:"s3v4"},"S3v4",-1)]),2),[[x,l.value.s3_signature_version]])]),e("div",ue,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 Hostname ",2),n(e("input",{type:"text","onUpdate:modelValue":o[19]||(o[19]=r=>l.value.s3_hostname=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.s3_hostname]])]),e("div",ge,[e("label",{class:t(["block text-sm font-medium mb-2",[s(a)?"text-gray-300":"text-gray-700"]])}," 启用代理 ",2),e("div",ce,[e("button",{type:"button",onClick:o[20]||(o[20]=r=>l.value.s3_proxy=l.value.s3_proxy===1?0:1),class:t(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[l.value.s3_proxy===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":l.value.s3_proxy===1},[e("span",{class:t(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[l.value.s3_proxy===1?"translate-x-5":"translate-x-0",s(a)&&l.value.s3_proxy!==1?"bg-gray-100":"bg-white"]])},null,2)],10,ye),e("span",{class:t(["ml-3 text-sm",[s(a)?"text-gray-300":"text-gray-700"]])},v(l.value.s3_proxy===1?"已开启":"已关闭"),3)])])])])):_("",!0)])]),e("div",pe,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 上传限制 ",2),e("div",be,[e("div",ve,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 每分钟上传限制 ",2),e("div",me,[n(e("input",{type:"number","onUpdate:modelValue":o[21]||(o[21]=r=>l.value.uploadMinute=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.uploadMinute]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"分钟",2)])]),e("div",xe,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 上传数量限制 ",2),e("div",he,[n(e("input",{type:"number","onUpdate:modelValue":o[22]||(o[22]=r=>l.value.uploadCount=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.uploadCount]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"个文件",2)])]),e("div",fe,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 文件大小限制 ",2),e("div",we,[n(e("input",{type:"number","onUpdate:modelValue":o[23]||(o[23]=r=>c.value=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,c.value]]),n(e("select",{"onUpdate:modelValue":o[24]||(o[24]=r=>y.value=r),class:t(["rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[34]||(o[34]=[e("option",{value:"KB"},"KB",-1),e("option",{value:"MB"},"MB",-1),e("option",{value:"GB"},"GB",-1)]),2),[[x,y.value]])])]),e("div",_e,[e("label",{class:t(["block text-sm font-medium mb-2",[s(a)?"text-gray-300":"text-gray-700"]])}," 过期方式 ",2),e("div",ke,[(p(),b(f,null,w(["day","hour","minute","forever","count"],r=>e("label",{key:r,class:"relative inline-flex items-center group cursor-pointer"},[n(e("input",{type:"checkbox",value:r,"onUpdate:modelValue":o[25]||(o[25]=C=>l.value.expireStyle=C),class:"peer sr-only"},null,8,Ue),[[A,l.value.expireStyle]]),e("div",{class:t(["px-4 py-2 rounded-full border-2 transition-all duration-200 select-none",[l.value.expireStyle.includes(r)?(s(a),"bg-indigo-600 border-indigo-600 text-white"):s(a)?"bg-gray-700 border-gray-600 text-gray-300 hover:border-indigo-500":"bg-white border-gray-300 text-gray-700 hover:border-indigo-500"]])},v({day:"按天",hour:"按小时",minute:"按分钟",forever:"永久",count:"按次数"}[r]),3)])),64))])]),e("div",Se,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 最长保存时间 ",2),e("div",Ve,[n(e("input",{type:"number","onUpdate:modelValue":o[26]||(o[26]=r=>u.value=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,u.value]]),n(e("select",{"onUpdate:modelValue":o[27]||(o[27]=r=>g.value=r),class:t(["rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[35]||(o[35]=[e("option",{value:"秒"},"秒",-1),e("option",{value:"分"},"分",-1),e("option",{value:"时"},"时",-1),e("option",{value:"天"},"天",-1)]),2),[[x,g.value]])])]),e("div",De,[e("label",{class:t(["block text-sm font-medium mb-2",[s(a)?"text-gray-300":"text-gray-700"]])}," 游客上传 ",2),e("div",Ce,[e("button",{type:"button",onClick:o[28]||(o[28]=r=>l.value.openUpload=l.value.openUpload===1?0:1),class:t(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[l.value.openUpload===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":l.value.openUpload===1},[e("span",{class:t(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[l.value.openUpload===1?"translate-x-5":"translate-x-0",s(a)&&l.value.openUpload!==1?"bg-gray-100":"bg-white"]])},null,2)],10,Be),e("span",{class:t(["ml-3 text-sm",[s(a)?"text-gray-300":"text-gray-700"]])},v(l.value.openUpload===1?"已开启":"已关闭"),3)])])])]),e("div",Me,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 错误限制 ",2),e("div",Fe,[e("div",Ae,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 每分钟错误限制 ",2),e("div",ze,[n(e("input",{type:"number","onUpdate:modelValue":o[29]||(o[29]=r=>l.value.errorMinute=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.errorMinute]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"分钟",2)])]),e("div",Ee,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 错误次数限制 ",2),e("div",Te,[n(e("input",{type:"number","onUpdate:modelValue":o[30]||(o[30]=r=>l.value.errorCount=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,l.value.errorCount]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"次",2)])])])]),e("div",{class:"flex justify-end mt-8"},[e("button",{onClick:D,class:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"}," 保存设置 ")])])],2)]))}});export{Ie as default};
