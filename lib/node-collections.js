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
    name: '1808.ga',
    homepage: '',
    url: 'https://github.com/qjlxg/ss/raw/master/list_raw.txt'
  },
   {
    name: '1806.ga',
    homepage: '',
    url: ''
  },
 
  {
    name: 'Rawdroid/Free-servers',
    homepage: 'https://github.com/Pawdroid/Free-servers',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-su/raw/main/sub/share/ss'
    )
  },
  {
    name: 'aiboboxx/v2rayfree',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-su/raw/main/sub/share/ssr'
    )
  },
  {
    name: 'adiwzx/freenode',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-su/raw/main/sub/share/tr'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: '',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/-su/raw/main/sub/share/v2'
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
