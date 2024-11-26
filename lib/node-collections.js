

 const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://github.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://github.com/qjlxg/porxy/raw/refs/heads/main/combine.txt
//

// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
  
{
    name: '97',
    homepage: '',
    url: 'https://github.com/qjlxg/porxy/raw/refs/heads/main/combine.txt'
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
