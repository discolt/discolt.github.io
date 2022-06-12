(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1442:function(a,n){a.exports={content:["article",["p","可以使用Kibana的便捷的查询和分析存储在云端 Elastisearch 中的数据。除了柱状图、线状图、饼图、环形图等经典可视化功能外，还拥有地理位置分析、数据图谱分析、时序数据分析等高级功能。"],["div",{style:"text-align: center;"},["img",{width:"45%",src:"https://gw.alipayobjects.com/mdn/rms_efc0e3/afts/img/A*EdoTTJlQDmIAAAAAAAAAAABjARQnAQ"}]],["h2","接入方法"],["p","除了使用 ZSearch 自带的 Kibana 中文版外， 您也可以下载官方 Kibana 到本地连接云端 ZSearch。"],["ol",["li",["p","进入 ",["a",{title:null,href:"https://www.elastic.co/downloads/past-releases"},"Kibana 官网"]," 下载 Kibana OSS 6.6.2 版本。\n",["img",{title:null,src:"https://cdn.nlark.com/yuque/0/2019/png/163907/1557059974394-d92b9e83-6c15-4297-a7ba-e5efdb736782.png",alt:"image.png"}]]],["li",["p","将下载的安装压缩包解压后，进入 Kibana 目录。"]],["li",["p","打开配置文件 ",["code","config/kibana.yaml"],"， 对照控制台的应用信息修改配置文件。\n",["img",{title:null,src:"https://intranetproxy.alipay.com/skylark/lark/0/2019/png/136570/1550660489669-dd5cd6a3-6ae4-4065-9a18-3d57d6478dc0.png#align=left&display=inline&height=115&name=1.png&originHeight=476&originWidth=2878&size=78636&width=698",alt:"1.png"}]]]],["pre",{lang:null,highlighted:'# 示例配置\nelasticsearch<span class="token punctuation">.</span>url<span class="token punctuation">:</span> <span class="token string">"http://zsearch.cloud.alipay.com:9999"</span>\nelasticsearch<span class="token punctuation">.</span>customHeaders<span class="token punctuation">:</span> {<span class="token string">"kibana-version"</span><span class="token punctuation">:</span><span class="token string">"6.6.2"</span><span class="token punctuation">,</span> <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string">"Basic xxxxxxx"</span>}'},["code",'# 示例配置\nelasticsearch.url: "http://zsearch.cloud.alipay.com:9999"\nelasticsearch.customHeaders: {"kibana-version":"6.6.2", "Authorization": "Basic xxxxxxx"}']],["ul",["li",["p","elasticsearch.url 对应 API Server地址."]],["li",["p","Authorization 是用户名和密码组合的Base64值。\n  "]]],["p","Base64值的获取可以前往 ",["a",{title:null,href:"http://tool.chinaz.com/Tools/Base64.aspx"},"Base64 加密工具网站"],"。"],["ol",["li",["p","在左侧框中以 ",["strong",'用户名+":"+密码']," 的格式输入待加密信息。"]],["li",["p","点击 ",["strong","Base64 加密"],"，即可获得一个加密值。",["img",{title:null,src:"https://intranetproxy.alipay.com/skylark/lark/0/2019/png/136570/1550660563957-789cb1fc-901c-4051-a105-1b06fbce7a7b.png#align=left&display=inline&height=178&name=2.png&originHeight=732&originWidth=2878&size=77006&width=698",alt:"2.png"}]]],["li",["p","返回配置文件，修改 ",["code","elasticsearch.customHeaders"]," 参数里的 ",["code","Authorization"]," 值为该加密值。"]]],["h2","启动"],["p","使用 ",["code","bin/kibana"]," 命令启动 Kibana，访问 ",["a",{title:null,href:"http://127.0.0.1:5601"},"http://127.0.0.1:5601"],"，即可进入 Kibana 界面。"]],meta:{category:"生态",order:1,title:{"zh-CN":"Kibana","en-US":"Kibana"},subtitle:"可视化分析",filename:"docs/usage/kibana.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#接入方法",title:"接入方法"},"接入方法"]],["li",["a",{className:"bisheng-toc-h2",href:"#启动",title:"启动"},"启动"]]]}}}]);