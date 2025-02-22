const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://github.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://github.com/qjlxg/YBSub-2/raw/refs/heads/main/sub/share/available
//https://github.com/qjlxg/YBSub-3/raw/refs/heads/main/sub/share/available
//https://github.com/qjlxg/porxy/raw/refs/heads/main/combine.txt
//https://github.com/qjlxg/ssr-scraper/raw/refs/heads/master/nodes.txt
//https://github.com/qjlxg/sulinkcloud/raw/refs/heads/main/site
//https://github.com/qjlxg/free-node/raw/refs/heads/main/%E5%93%A5%E6%9C%AC/%E4%B8%B9%E9%BA%A6
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
  
{
    name: '97',
    homepage: '',
    url: 'https://github.com/qjlxg/YBSubCrawler/raw/refs/heads/main/sub/share/available'
  },
   
   {
    name: '111',
    homepage: '',
    url: 'https://github.com/qjlxg/porxy/raw/refs/heads/main/combine.txt'
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
    ['github.com/freefq - ', '']
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
