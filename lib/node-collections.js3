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
    name: '68',
    homepage: '',
    url: 'https://github.com/qjlxg/hy2/raw/refs/heads/main/splitted/vmess'
  },
   {
    name: '69',
    homepage: '',
    url: 'https://github.com/qjlxg/hy2/raw/refs/heads/main/splitted/vless'
  },
  {
    name: '70',
    homepage: '',
    url: 'https://github.com/qjlxg/hy2/raw/refs/heads/main/splitted/trojan'
  },
   {
    name: '71',
    homepage: '',
    url: 'https://github.com/qjlxg/hy2/raw/refs/heads/main/splitted/ss'
  },
   {
    name: '72',
    homepage: '',
    url: 'https://github.com/qjlxg/genode/raw/refs/heads/main/public/ss.txt'
  },
  {
    name: '73',
    homepage: '',
    url: 'https://github.com/qjlxg/genode/raw/refs/heads/main/public/ssr.txt'
  },
   {
    name: '74',
    homepage: '',
    url: 'https://github.com/qjlxg/ss/raw/master/list_raw.txt'
  },
   {
    name: '75',
    homepage: '',
    url: 'https://git.homegu.com/qjlxg/Ray/raw/main/config.txt'
  },
  {
    name: '76',
    homepage: '',
    url: ''
  },
   {
    name: '77',
    homepage: '',
    url: ''
  },
   {
    name: '78',
    homepage: '',
    url: ''
  },
  {
    name: '79',
    homepage: '',
    url: ''
  },
  {
    name: '80',
    homepage: '',
    url: ''
  },
  {
    name: '81',
    homepage: '',
    url: ''
  },
   {
    name: '82',
    homepage: '',
    url: ''
  },
   {
    name: '83',
    homepage: '',
    url: ''
  },
  {
    name: '100',
    homepage: '',
    url: ''
  },
    {
    name: '109',
    homepage: '',
    url: ''
  },
   {
    name: '110',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
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
