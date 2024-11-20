const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://github.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://github.com/qjlxg/YBSub/raw/master/sub/share/available
//https://github.com/qjlxg/YBSub/raw/master/sub/share/v2
//https://shadowmere.akiel.dev/api/b64sub
//https://github.com/qjlxg/airport/raw/refs/heads/main/subs/mahdibland.yaml
//https://git.codeproxy.net/9Knight9n/v2ray-aggregator/raw/refs/heads/main/merged_24h.txt
//https://github.com/qjlxg/V2RayAggregator/raw/refs/heads/master/sub/splitted/ss.txt
//https://ghp.ci/https://github.com/qjlxg/V2RayAggregator/raw/refs/heads/master/sub/splitted/ssr.txt
//https://github.com/qjlxg/V2RayAggregator/raw/refs/heads/master/sub/splitted/trojan.txt
//https://github.com/qjlxg/free-node/raw/refs/heads/main/QTz
//https://github.com/qjlxg/free-node/raw/refs/heads/main/public20240928
//https://github.com/qjlxg/free-node/raw/refs/heads/main/public20241009
//https://github.com/qjlxg/free-node/raw/refs/heads/main/public20241019
//https://github.com/qjlxg/YBSub/raw/refs/heads/master/sub/share/available
//https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/EternityBase
//https://github.com/qjlxg/ss2/raw/refs/heads/main/freevm/list_raw.txt
//https://github.com/qjlxg/ss3/raw/refs/heads/main/list_raw.txt
//https://github.com/qjlxg/ss/raw/refs/heads/master/list_raw.txt
// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/2023-4825.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/AzadNet_iOS.txt'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/16266'
  },
  {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/PB.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/hy2.txt'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/nodes7799.txt'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/oss'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/public0611.txt'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/public0613.txt'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/public0614.txt'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/cc/cc2719'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/615'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/mheidari98.txt'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/aa1/26.txt'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/aa1/27.txt'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/proxies.txt'
  },
  
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Wa/raw/refs/heads/main/%E4%B8%B9%E9%BA%A6.txt'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/free-node/raw/refs/heads/main/QTz'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/configs/raw/refs/heads/master/Eternity.txt'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/Eternity.txt'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/Huibq/TrojanLinks/raw/refs/heads/master/links/vmess'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/Huibq/TrojanLinks/raw/refs/heads/master/links/ssr'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/configs/raw/refs/heads/master/sub/list/43.txt'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://sub.fqzsnai.ggff.net/auto'
   },
  {
    name: '103',
    homepage: '',
    url: 'https://shadowmere.akiel.dev/api/b64sub'
   },
  {
    name: '103',
    homepage: '',
    url: 'https://clash.qqqqqq.cf/'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://sourl.cn/pss3ET'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://subs.zeabur.app/clash'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://shadowmere.xyz/api/b64sub/'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://links.bocchi2b.top/clash'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://wy-paste.lly.cz/u8bOP-qpvbe/raw'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://cf-workers-sub-691.pages.dev/r7td8tt88yy8gi'
  },
 {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSub-3/raw/refs/heads/main/sub/share/available'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSub-2/raw/refs/heads/main/sub/share/available'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSub-1/raw/refs/heads/master/sub/share/available'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://chromego-sub.netlify.app/sub/merged_proxies_new.yaml'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://ghostcc.cc/ss.cn/ovs7.net'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://api.liltjay.ip-ddns.com/TQWMYCWH2D'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://clash.llleman.com/clach.yml'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://gcore.jsdelivr.net/gh/anaer/Sub@main/clash.yaml'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://dy.twittei.link/auto'
  },
  {
    name: '103',
    homepage: '',
    url: 'http://199.245.100.6:8080/s/mkum29'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://owo.o00o.ooo/ooo'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://clash.shinvck.com/clash.yml'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://nekocandy.pages.dev/sub'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://rentry.co/mzivuina/raw'
  },
 
  
];

export const privateCollections = [
  {
    name: 'bulink',
    url: `https://bulink.me/${process.env.BULINK_SUB_URL}`
  },
  {
    name: 'getafreenode',
    url: `https://getafreenode.com/subscribe/?uuid=${process.env.GETAFREENODE_UUID}`
  }
];

export const nodeNameFormatter = (raw = '', collection = {}) => {
  const replacements = [
    ['github.com/freefq - ', ''],
    ['二爷翻墙网 https://1808.ga', ''],
    [/-付费推荐(?:.*)$/, ''],
    ['(油管:破解资源君)', ''],
    ['(TG频道@kxswa)', ''],
    ['_油管：全网最强白嫖', ''],
    ['_来源：kkzui.com', ''],
    ['(TG频道@kxswa)', ''],
    ['(youtube阿伟科技)', ''],
    ['v2rayfree.eu.org - ', ''],
    [/^adi\|/, ''],
    [/【付费推荐：(.*?)】/, '']
  ];

  let name = raw;

  for (const [searchValue, replaceValue] of replacements) {
    name = name.replace(searchValue, replaceValue);
  }

  if (!collection?.name) {
    return name.trim();
  }

  return `[${collection.name}]${name.trim()}`;
};
