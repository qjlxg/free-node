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
      'https://github.com/qjlxg/free-node/raw/main/20240713-74907.txt'
    )
  },
  {
    name: '1808.ga',
    homepage: '',
    url: ''
  },
  {
    name: 'butnono',
    homepage: '',
    url: ''
  },
  {
    name: 'NodeFree',
    homepage: '',
    url: ''
  },
  {
    name: 'pojiezhiyuanjun/freev2',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'xiyaowong/freeFQ',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'ClashNode',
    homepage: '',
    url: ''
  },
  {
    name: 'kxswa/k',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'vpei/Free-Node-Merge',
    homepage: 'https://github.com/vpei/Free-Node-Merge/',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'Jsnzkpg',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'peasoft/NoMoreWalls',
    homepage: 'https://github.com/peasoft/NoMoreWalls',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'mianfeifq/share',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'Rawdroid/Free-servers',
    homepage: 'https://github.com/Pawdroid/Free-servers',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'aiboboxx/v2rayfree',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'adiwzx/freenode',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: '',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'xrayfree',
    homepage: '',
    url: ''
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
