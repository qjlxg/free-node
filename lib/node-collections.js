 const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;

// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);

function getGithubRawContentUrl(url) {
  return useFastGitMirror
    ? url.replace(
        /^https:\/\/raw\.githubusercontent\.com\//,
        'https://raw.fastgit.org/'
      )
    : url;
}

export const publicCollections = [
  {
    name: 'freefq',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: '1808.ga',
    homepage: '',
    url: 'https://github.com/mfbpn/nodelist/raw/main/sub/sub_merge.txt'
  },
  {
    name: 'butnono',
    homepage: '',
    url: 'https://github.com/qjlxg/aggregator/raw/main/data/clash.yaml'
  },
  {
    name: 'NodeFree',
    homepage: '',
    url: 'https://git.codeproxy.net/qjlxg/ss/raw/master/list_raw.txt'
  },
  {
    name: 'pojiezhiyuanjun/freev2',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/youtube/raw/main/sub/youtube/clash-meta.yaml'
    )
  },
  {
    name: 'xiyaowong/freeFQ',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/imyaoxp/clashnode/raw/main/sub/sub_merge.txt'
    )
  },
  {
    name: 'ClashNode',
    homepage: '',
    url: 'https://github.com/qjlxg/py/raw/main/data/clash.yaml'
  },
  {
    name: 'kxswa/k',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://git.codeproxy.net/awuaaaaa/vless-py/raw/2804df251b92c48028648ccb77706b607a1b772a/data/clash.yaml'
    )
  },
  {
    name: 'vpei/Free-Node-Merge',
    homepage: 'https://github.com/vpei/Free-Node-Merge/',
    url: getGithubRawContentUrl(
      'https://github.com/mfbpn/nodelist/raw/bf1d2006c304726a7827fbd7ddd5aab2e94f672e/sub/sub_merge_yaml.yml'
    )
  },
  {
    name: 'Jsnzkpg',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/imyaoxp/clashnode/raw/a482368ee1284bc7169a4ab5112701c85166a161/sub/sub_merge_yaml.yml'
    )
  },
  {
    name: 'peasoft/NoMoreWalls',
    homepage: 'https://github.com/peasoft/NoMoreWalls',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.txt'
    )
  },
  {
    name: 'mianfeifq/share',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://raw.githubusercontent.com/qjlxg/-SubCrawler/main/sub/share/available'
    )
  },
  {
    name: 'Rawdroid/Free-servers',
    homepage: 'https://github.com/Pawdroid/Free-servers',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-SubCrawler/raw/main/sub/share/ss'
    )
  },
  {
    name: 'aiboboxx/v2rayfree',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-SubCrawler/raw/main/sub/share/ssr'
    )
  },
  {
    name: 'adiwzx/freenode',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-SubCrawler/raw/main/sub/share/tr'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://git.codeproxy.net/qjlxg/ss2/raw/master/list_raw.txt'
    )
  },
   {
    name: 'ermaozi/get_subcribe',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/hy2/raw/main/splitted/trojan'
    )
  },
   {
    name: 'ermaozi/get_sbscribe',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/hy2/raw/main/splitted/vless'
    )
  },
   {
    name: 'ermaozi/get_subsribe',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/hy2/raw/main/splitted/vmess'
    )
  },
  {
    name: 'xrayfree',
    homepage: '',
    url: 'https://github.com/qjlxg/hy2/raw/main/splitted/ss'
  }
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
