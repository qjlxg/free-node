const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://github.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://github.com/qjlxg/YBSub/raw/master/sub/share/available
//https://github.com/qjlxg/YBSub/raw/master/sub/share/v2
//https://shadowmere.akiel.dev/api/b64sub
//https://github.com/qjlxg/airport/raw/refs/heads/main/subs/mahdibland.yaml
//https://git.codeproxy.net/9Knight9n/v2ray-aggregator/raw/refs/heads/main/merged_24h.txt
// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSub/raw/refs/heads/master/sub/share/tr'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSub/raw/refs/heads/master/sub/share/ss'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSub/raw/refs/heads/master/sub/share/sr'
  },
  {
    name: '100',
    homepage: '',
    url: 'https://ghp.ci/https://raw.githubusercontent.com/qjlxg/v2ray-worker-sub/refs/heads/master/spd/sub_merge_yaml.yml'
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '102',
    homepage: '',
    url: ''
  },
   {
    name: '100',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '102',
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
