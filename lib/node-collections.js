const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/free-node/raw/main/67755.txt
//https://github.com/qjlxg/free-node/raw/main/22365.txt
//https://github.com/qjlxg/free-node/raw/main/52234.txt
//https://github.com/qjlxg/ss/raw/master/list.txt
//https://github.com/qjlxg/free-node/raw/main/380.txt
//https://github.com/qjlxg/free-node/raw/main/mmd.txt
//https://github.com/qjlxg/free-node/raw/main/AzadNet_iOS.txt
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
    homepage: 'https://github.com/freefq/free',
    url: getGithubRawContentUrl(
     'https://chromego-sub.netlify.app/sub/merged_proxies_new.yaml'
    )
 },
  {
    name: '1808.ga',
    homepage: 'https://1808.ga/',
    url: 'http://brovee.myds.me:12580/clash/proxies'
  },
  {
    name: 'butnono',
    homepage: 'https://www.butnono.com/daily-vmess.html',
    url: 'https://sub.pmsub.me/base64'
  },
  {
    name: 'NodeFree',
    homepage: 'https://nodefree.org/',
    url:'https://www.xrayvip.com/free.txt'
  },
  {
    name: 'pojiezhiyuanjun/freev2',
    homepage: 'https://github.com/pojiezhiyuanjun/freev2',
    url: getGithubRawContentUrl(
      'https://toshare.tosslk.xyz/DqcnyvC'
    )
  },
  {
    name: 'xiyaowong/freeFQ',
    homepage: 'https://github.com/xiyaowong/freeFQ',
    url: getGithubRawContentUrl(
      'https://sub.cf6.rr.nu/lucky'
    )
  },
  {
    name: 'ClashNode',
    homepage: 'https://clashnode.com/f/freenode',
    url: 'https://dy.twittei.link/auto'
  },
  {
    name: 'kxswa/k',
    homepage: 'https://github.com/kxswa/k',
    url: getGithubRawContentUrl(
      'http://8.134.56.10'
    )
  },
  {
    name: 'vpei/Free-Node-Merge',
    homepage: 'https://github.com/vpei/Free-Node-Merge/',
    url: getGithubRawContentUrl(
      'https://mukids.ir/goldv2ray/profiles.txt'
    )
  },
  {
    name: 'Jsnzkpg',
    homepage: 'https://github.com/Jsnzkpg/Jsnzkpg',
    url: getGithubRawContentUrl(
      ''
    )
  },
  {
    name: 'peasoft/NoMoreWalls',
    homepage: 'https://github.com/peasoft/NoMoreWalls',
    url: getGithubRawContentUrl(
      'https://links.bocchi2b.top/clash'
    )
  },
  {
    name: 'mianfeifq/share',
    homepage: 'https://github.com/mianfeifq/share',
    url: getGithubRawContentUrl(
      'https://dub.sh/kkovokkk'
    )
  },
  {
    name: 'Rawdroid/Free-servers',
    homepage: 'https://github.com/Pawdroid/Free-servers',
    url: getGithubRawContentUrl(
      'https://clash.qqqqqq.cf/'
    )
  },
  {
    name: 'aiboboxx/v2rayfree',
    homepage: 'https://github.com/aiboboxx/v2rayfree',
    url: getGithubRawContentUrl(
      'https://fast.yt/sub/353bfbe55b9e9b33/clash'
    )
  },
  {
    name: 'adiwzx/freenode',
    homepage: 'https://github.com/adiwzx/freenode',
    url: getGithubRawContentUrl(
      'https://sub.xn--9sw509f.eu.org/auto'
    )
  },
  {
    name: 'ermaozi/get_subscribe',
    homepage: 'https://github.com/ermaozi/get_subscribe',
    url: getGithubRawContentUrl(
      'https://github.com/qjlxg/free-node/raw/main/AzadNet_iOS.txt'
    )
  },
  {
    name: 'xrayfree',
    homepage: 'https://github.com/xrayfree/free-ssr-ss-v2ray-vpn-clash',
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
