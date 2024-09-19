 const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://git.homegu.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://git.homegu.com/qjlxg/YBSub/raw/master/sub/share/available
//https://git.homegu.com/qjlxg/YBSub/raw/master/sub/share/v2

// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
  
  {
    name: '98',
    homepage: '',
    url: 'https://github.com/qjlxg/ss/raw/master/list_raw.txt'
  },
   {
    name: '99',
    homepage: '',
    url: 'https://git.homegu.com/qjlxg/Ray/raw/main/config.txt'
  },
  {
    name: '100',
    homepage: '',
    url: 'https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes'
  },
    {
    name: '109',
    homepage: '',
    url: 'https://git.homegu.com/qjlxg/genode/raw/main/public/ssr.txt'
  },
   {
    name: '110',
    homepage: '',
    url: 'https://git.homegu.com/raw/vpnmarket/sub/main/hiddify2.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://git.homegu.com/qjlxg/YBSub/raw/master/sub/share/ss'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://clash.llleman.com/clach.yml'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://raw.githubusercontent.com/itsyebekhe/HiN/main/Miner/base64'
  },
   {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/spd/splitted/trojan.txt'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/spd/splitted/vmess.txt'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/spd/splitted/ss.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://git.homegu.com/qjlxg/YBSub/raw/master/sub/share/ssr'
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
