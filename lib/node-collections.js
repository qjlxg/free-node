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
    url: ''
  },
  {
    name: '103',
    homepage: '',
    url: ''
  },
  {
    name: '103',
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
