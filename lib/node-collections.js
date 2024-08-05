const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list.yml
//https://github.com/qjlxg/cross/raw/master/EternityBase
//https://github.com/qjlxg/SubCrawler/raw/main/sub/share/all
//https://github.com/qjlxg/SubCrawler/raw/main/sub/share/vless
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
    url: 'https://git.codeproxy.net/mahdibland/V2RayAggregator/raw/master/EternityBase'
  },
  {
    name: 'butnono',
    homepage: '',
    url: 'https://github.com/qjlxg/cross/raw/master/EternityBase'
  },
  {
    name: 'xrayfree',
    homepage: '',
    url: 'https://git.codeproxy.net/Airuop/cross/raw/ecea10bbf8cc3bb282dee14aefe05c4c49122fa6/EternityBase'
  }
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
