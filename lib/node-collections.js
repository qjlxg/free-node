
 const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://github.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://github.com/qjlxg/YBSub/raw/master/sub/share/available
//https://github.com/qjlxg/YBSub/raw/master/sub/share/v2

// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
  
{
    name: '97',
    homepage: '',
    url: 'brovee.myds.me:12580/clash/proxies'
  },
  {
    name: '98',
    homepage: '',
    url: 'carterzheng.synology.me:8008/clash/proxies'
  },
   {
    name: '99',
    homepage: '',
    url: 'haohaoxiong.myqnapcloud.com:12580/clash/proxies'
  },
  {
    name: '100',
    homepage: '',
    url: 'https://bpb-worker-panel-a5s.pages.dev/sub/89b3cbba-e6ac-485a-9481-976a0415eab9#BPB-Normal'
  },
   {
    name: '101',
    homepage: '',
    url: 'https://github.com/ArianHgv/V2ray/raw/bd6412388c4afdc03386783767bb0de79f7beb52/vless'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://proxy.crazygeeky.com/clash/proxies'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://sub.fqzsnai.ggff.net/auto'
  },
  {
    name: '104',
    homepage: '',
    url: 'https://proxy.fldhhhhhh.top/clash/proxies'
  },
   {
    name: '105',
    homepage: '',
    url: 'https://proxypool.link/clash/proxies'
  },
  
   {
    name: '106',
    homepage: '',
    url: 'https://proxypool1999.banyunxiaoxi.icu/clash/proxies'
  },
  {
    name: '107',
    homepage: '',
    url: 'rot.9o9.top:880/clash/proxies'
  },
  {
    name: '109',
    homepage: '',
    url: 'https://free.iam8.shop/clash/proxies'
  },
   {
    name: '110',
    homepage: '',
    url: 'https://chromego-sub.netlify.app/sub/merged_proxies_new.yaml'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/free-node/raw/refs/heads/main/%E4%B8%B9%E9%BA%A6'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/Eternity.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/configs/raw/refs/heads/master/Eternity.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://bpb-worker-panel-a5s.pages.dev/sub/89b3cbba-e6ac-485a-9481-976a0415eab9#BPB-Normal'
  },
   {
    name: '111',
    homepage: '',
    url: ''
  },
   {
    name: '112',
    homepage: '',
    url: ''
  },
  {
    name: '113',
    homepage: '',
    url: ''
  },
   {
    name: '114',
    homepage: '',
    url: ''
  },
   {
    name: '115',
    homepage: '',
    url: ''
  },
   {
    name: '116',
    homepage: '',
    url: ''
  },
  
  
   {
    name: '1113',
    homepage: '',
    url: ''
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
