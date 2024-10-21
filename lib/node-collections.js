const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://github.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://github.com/qjlxg/YBSub/raw/master/sub/share/available
//https://github.com/qjlxg/YBSub/raw/master/sub/share/v2
//https://shadowmere.akiel.dev/api/b64sub
//https://git.codeproxy.net/9Knight9n/v2ray-aggregator/raw/refs/heads/main/merged_24h.txt
// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
 {
    name: '100',
    homepage: '',
    url: 'https://git.codeproxy.net/9Knight9n/v2ray-aggregator/raw/refs/heads/main/merged_24h.txt'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://shadowmere.akiel.dev/api/b64sub'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/Surfboardv2ray/v2ray-worker-sub/raw/refs/heads/master/EternityBase'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/Ray/raw/main/config.txt'
  },
   {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/EternityBase'
  },
   {
    name: '100',
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
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub106.txt'
  },
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub1.txt'
  },
  {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub2.txt'
  },
  {
    name: '104',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub3.txt'
  },
  {
    name: '105',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub4.txt'
  },
  {
    name: '106',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub5.txt'
  },
  {
    name: '107',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub6.txt'
  },
  {
    name: '108',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub7.txt'
  },
  {
    name: '109',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub8.txt'
  },
  {
    name: '110',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub9.txt'
  },
  {
    name: '111',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub10.txt'
  },
  {
    name: '112',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub11.txt'
  },
  {
    name: '113',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub12.txt'
  },
  {
    name: '114',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub13.txt'
  },
  {
    name: '115',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub14.txt'
  },
  {
    name: '116',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub15.txt'
  },
  {
    name: '117',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub16.txt'
  },
{
    name: '118',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub17.txt'
  },
{
    name: '119',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub18.txt'
  },
{
    name: '120',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub19.txt'
  },
{
    name: '121',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub20.txt'
  },
{
    name: '122',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub21.txt'
  },
{
    name: '123',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub22.txt'
  },
{
    name: '124',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub23.txt'
  },
{
    name: '125',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub24.txt'
  },
{
    name: '126',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub25.txt'
  },
{
    name: '127',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub26.txt'
  },
{
    name: '128',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub27.txt'
  },
{
    name: '129',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub28.txt'
  },
{
    name: '130',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub29.txt'
  },
{
    name: '131',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub30.txt'
  },
{
    name: '132',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub31.txt'
  },
{
    name: '133',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub32.txt'
  },
{
    name: '134',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub33.txt'
  },
{
    name: '135',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub34.txt'
  },
{
    name: '136',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub35.txt'
  },
{
    name: '137',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub36.txt'
  },
{
    name: '138',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub37.txt'
  },
{
    name: '139',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub38.txt'
  },
{
    name: '140',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub39.txt'
  },
{
    name: '141',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub40.txt'
  },
{
    name: '142',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub41.txt'
  },
{
    name: '143',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub42.txt'
  },
{
    name: '144',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub43.txt'
  },
{
    name: '145',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub44.txt'
  },
{
    name: '146',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub45.txt'
  },
{
    name: '147',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub46.txt'
  },
{
    name: '148',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub47.txt'
  },
{
    name: '149',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub48.txt'
  },
{
    name: '150',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub49.txt'
  },
{
    name: '151',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub50.txt'
  },
{
    name: '152',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub51.txt'
  },
{
    name: '153',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub52.txt'
  },
{
    name: '154',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub53.txt'
  },
{
    name: '155',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub54.txt'
  },
{
    name: '156',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub55.txt'
  },
{
    name: '157',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub56.txt'
  },
{
    name: '158',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub57.txt'
  },
{
    name: '159',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub58.txt'
  },
{
    name: '160',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub59.txt'
  },
{
    name: '161',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub60.txt'
  },
{
    name: '162',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub61.txt'
  },
{
    name: '163',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub62.txt'
  },
{
    name: '164',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub63.txt'
  },
{
    name: '165',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub64.txt'
  },
{
    name: '166',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub65.txt'
  },
{
    name: '167',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub66.txt'
  },
{
    name: '168',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub67.txt'
  },
{
    name: '169',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub68.txt'
  },
{
    name: '170',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub69.txt'
  },
{
    name: '171',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub70.txt'
  },
{
    name: '172',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub71.txt'
  },
{
    name: '173',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub72.txt'
  },
{
    name: '174',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub73.txt'
  },
{
    name: '175',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub74.txt'
  },
{
    name: '176',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub75.txt'
  },
{
    name: '177',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub76.txt'
  },
{
    name: '178',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub77.txt'
  },
{
    name: '179',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub78.txt'
  },
{
    name: '180',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub79.txt'
  },
{
    name: '181',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub80.txt'
  },
{
    name: '182',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub81.txt'
  },
{
    name: '183',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub82.txt'
  },
{
    name: '184',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub83.txt'
  },
{
    name: '185',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub84.txt'
  },
{
    name: '186',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub85.txt'
  },
{
    name: '187',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub86.txt'
  },
{
    name: '188',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub87.txt'
  },
{
    name: '189',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub88.txt'
  },
{
    name: '190',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub89.txt'
  },
{
    name: '191',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub90.txt'
  },
{
    name: '192',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub91.txt'
  },
{
    name: '193',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub92.txt'
  },
{
    name: '194',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub93.txt'
  },
{
    name: '195',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub94.txt'
  },
{
    name: '196',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub95.txt'
  },
{
    name: '197',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub96.txt'
  },
{
    name: '198',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub97.txt'
  },
{
    name: '199',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub98.txt'
  },
{
    name: '200',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub99.txt'
  },
{
    name: '201',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub100.txt'
  },
{
    name: '202',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub101.txt'
  },
{
    name: '203',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub102.txt'
  },
{
    name: '204',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub103.txt'
  },
{
    name: '205',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub104.txt'
  },
{
    name: '206',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub105.txt'
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
