const hotels = [
  // {
  //   id: "pek1",
  //   area: "北京",
  //   name: "北京金海湖壹号酒店",
  //   intro_text: "于2012年夏天开业的上海浦东四季酒店，将以其璀璨亮丽的潮流魅力，个性特制的身临体验，让您激情感 受大上海的从容自信和蓬勃脉动。座落于上海金融贸易区陆家嘴的心脏地段。酒店提供豪华雅致的客房，其中15间为设有落地大窗的宽敞明亮套房，繁华上海风光一览无遗。只需5分钟路程，即可到达上海环球金融中心，国金中心商场，东方明珠广播电视塔，上海海洋水族馆及外滩。往返浦东国际机场及上海虹桥机场轻松便捷。专享餐饮美食包括：尚席-环境优雅的高级中餐厅，提供本帮菜和经典粤菜，并备有多间环境私密的贵宾包房，供客人享用。全天候供应富欧亚风味的东方佳肴，设有户外用餐区，酒廊，酒吧及日式寿司吧，客人可以尽情享用琳琅满目的环球美食。位于酒店41楼的“The Spa”水疗中心，专门为住店客人及本地尊贵宾客而设。居高临下，上海美轮美奂的迷人景致尽收眼底。",
  //   link: "http://www.fourseasons.com/zh/pudong/accommodations/",
  //   gallery: [
  //     require("@/assets/hotel_imgs/beijing_jinghai_lake_no1_hotel_0.jpg"),
  //     require("@/assets/hotel_imgs/beijing_jinghai_lake_no1_hotel_3.jpg"),
  //     require("@/assets/hotel_imgs/beijing_jinghai_lake_no1_hotel_1.jpg"),
  //     require("@/assets/hotel_imgs/beijing_jinghai_lake_no1_hotel_5.jpg"),
  //     require("@/assets/hotel_imgs/beijing_jinghai_lake_no1_hotel_2.jpg"),
  //     // require("@/assets/hotel_imgs/beijing_jinghai_lake_no1_hotel_6.jpg"),
  //   ]
  // },
  {
    id: "pek2",
    area: "北京",
    name: "北京金融街丽思卡尔顿酒店",
    hotel_url_name: "丽思卡尔顿酒店",
    title: "HeySuite - 北京金融街丽思卡尔顿酒店",
    intro_text: `
      <p>北京金融街丽思卡尔顿酒店矗立于充满传奇色彩的金融街核心区，优雅而富于格调，堪称北京众多豪华五星级酒店的典范。酒店将传统中国建筑设计艺术与卓越的舒适感巧妙融合，为追求极致品味的旅行人士奉上独特旅居体验。</p>
      <p>继丽思卡尔顿酒店集团公司获得“怡安翰威特2013年中国区酒店行业最佳雇主”称号之后，北京金融街丽思卡尔顿酒店荣膺太和顾问2013中国好雇主大奖。</p>
    `,
    link: "http://www.ritzcarlton.com/zh-cn/hotels/china/beijing-financial-street/rooms-suites",
    logo: require("@/assets/hotel_logos/RitzCarlton.svg"),
    gallery: [
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_0.jpg"),
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_1.jpg"),
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_2.jpg"),
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_3.jpg"),
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_4.jpg"),
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_5.jpg"),
      require("@/assets/hotel_imgs/beijing_financial_street_ritzcarlton_hotel_6.jpg"),
    ]
  },
  // {
  //   id: "pek3",
  //   area: "北京",
  //   name: "北京爱舍 The House Of I",
  //   intro_text: "酒店介绍文字2",
  //   link: "http://www.fourseasons.com/zh/pudong/accommodations/",
  //   gallery: [
  //     require("@/assets/hotel_imgs/beijing_the_house_of_ i_0.jpg",
  //   ]
  // },
  {
    id: "pek4",
    area: "北京",
    name: "北京瑰丽酒店",
    hotel_url_name: "北京瑰丽酒店",
    title: "HeySuite - 北京瑰丽酒店",
    logo: require("@/assets/hotel_logos/RosewoodBeijing.png"),
    intro_text: `
      <p>北京瑰丽酒店坐落于中国繁华首都的中心地带，古老的传统特色与及飞速发展的现代文明在此完美交融。北京瑰丽酒店细致地诠释了中国文化中关于旅程和待客风尚的悠久传统：长途跋涉后，旅者来到气派非凡的门庭，穿越葱郁秀美的花园，与热情迎宾的主人亲切交流；那豪华的环境让旅者赞叹不已，他沉醉于充满惊喜的体验中；最后，仿佛尽情欣赏了沿途风景的登山者一般，旅者终于抵达了山巅 - 那只属于他自己的舒适私享天地。</p>
      <p>北京瑰丽酒店拥有设计巧妙的建筑结构、宽阔的户外庭院和精致的艺术佳作，并为客人提供健康与休闲的丰富选择，以及风味地道的美食佳馔和格调优雅的餐厅与酒廊，让客人们畅享一个个充满惊喜发现、富有浓郁地方风情的独特感官之旅。</p>
      <p>酒店精心甄选的各款艺术作品，以全新形式诠释中国古老的艺术遗产及文化信仰，将酒店的公共区域及私享空间装点得熠熠生辉。通过这些作品，人们还可以了解到中国久远的历史，并发掘古老的风俗和悠久的艺术形式，深刻领略为现代繁荣奠定基础的中国文化之精髓。</p>
      <p>北京瑰丽酒店宛如一幅富有活力的巨型画布，每一处都弥漫着浓郁的艺术气息，包括客人最私密幽雅的居停空间 – 酒店的客房 。客房既精美无比，又有居家的温馨感觉，装饰和设备豪华而简约，从现代艺术品、书籍到完美的配饰，均淋漓尽致地体现了A Sense of Place®的理念，让人备感身心舒泰。</p>
      <p>在北京瑰丽酒店，丰富的文化风情、建筑传统和现代品位相映生辉，体现了北京丰厚的历史底蕴和繁荣的现代发展，更是京城绚烂艺术风景线的缩影。优越的地理位置，令客人们轻松踏上属于自己的个性旅途，体验地道的本地风情，探索北京这座全球最引人入胜的大都会的无限魅力。</p>
    `,
    link: "https://www.rosewoodhotels.com/sc/beijing/accommodation",
    gallery: [
      require("@/assets/hotel_imgs/beijing_rosewood_hotel_0.jpg"),
      require("@/assets/hotel_imgs/beijing_rosewood_hotel_1.jpg"),
      require("@/assets/hotel_imgs/beijing_rosewood_hotel_2.jpg"),
      require("@/assets/hotel_imgs/beijing_rosewood_hotel_3.jpg"),
    ]
  },
  {
    id: "pek5",
    area: "北京",
    name: "北京柏悦酒店",
    hotel_url_name: "北京柏悦酒店",
    title: "HeySuite - 北京柏悦酒店",
    logo: require("@/assets/hotel_logos/ParkHyatt.png"),
    intro_text: `
      <p>雄踞北京CBD中央商务区核心地带的北京柏悦酒店，座落于朝阳区长安街沿线高厦北京银泰中心中央主楼，是凯悦酒店集团旗下极致尊贵的精品型酒店。卓越的建筑设计融合高品位的艺术精髓，考究而细腻的装饰和设施，以低调奢华又具个性化的方式关注每一个细微之处，为客人提供高雅的私人氛围以及超凡的个人体验。</p>
      <p>北京柏悦酒店提供现代化的豪华设施以及细致入微的专属服务，可享受集商业、休闲、健身、美食、娱乐于一身的高品位生活。酒店所在的北京银泰中心主楼顶部为 “中国灯笼” 造型，入夜后灯光璀璨，如灯塔般光芒四射。北京柏悦酒店的内部设计灵感来源于经典的水上花园，融合了东方美学观念和时尚雅致的现代理念。</p>
      <p>俯瞰京城壮丽景致的客房拥有开放式的浴室备有特大淋浴雨洒和水疗式浸浴浴缸，热能地板与豪华浴室备品。</p>
      <p>位于北京柏悦酒店59层的「天池水疗中心」不仅可以众览北京的迷人景观，还拥有25米的云端游泳池和设施完备的健身房。</p>
      <p>酒店还拥有屡获殊荣的餐饮场所，其中包括以360度视角而闻名的顶层北京亮餐厅，65层的北京亮酒吧，63层的大堂酒廊，6层引领京城夜生活花园式酒吧——秀酒吧及地下一层的悦食悦香餐厅。</p>
      <p>从楼高67层的北京柏悦酒店可直接通往地铁，步行即可前往中国国际贸易中心，距离一些著名的旅游景点诸如王府井、天安门广场和故宫等约十分钟车程，距离北京首都国际机场仅30分钟车程。</p>
    `,
    link: "https://beijing.park.hyatt.com/zh-Hans/hotel/rooms/suite.html",
    gallery: [
      require("@/assets/hotel_imgs/beijing_park_hyatt_0.jpg"),
      require("@/assets/hotel_imgs/beijing_park_hyatt_1.jpg"),
      require("@/assets/hotel_imgs/beijing_park_hyatt_2.jpg"),
      require("@/assets/hotel_imgs/beijing_park_hyatt_3.jpg"),
      require("@/assets/hotel_imgs/beijing_park_hyatt_4.jpg"),
      require("@/assets/hotel_imgs/beijing_park_hyatt_5.jpg"),
    ]
  },
  // {
  //   id: "pek6",
  //   area: "北京",
  //   name: "北京钓鱼台国宾馆",
  //   intro_text: "酒店介绍文字5",
  //   link: "http://www.fourseasons.com/zh/pudong/accommodations/"
  // },
  {
    id: "sha1",
    area: "上海",
    name: "上海思南公馆酒店",
    hotel_url_name: "上海思南公馆酒店",
    title: "HeySuite - 上海思南公馆酒店",
    logo: require("@/assets/hotel_logos/HotelMassenet.png"),
    intro_text: `
      <p>思南公馆酒店坐落于幽静的思南路上，是思南公馆的重要组成部分，也是上海市中心独一无二的花园洋房式精品酒店。酒店区域共有21幢建于上世纪二三十年代的花园洋房和历史建筑，是当时法租界的一部分。</p>
      <p>酒店地处上海浦西市中心核心区域，北临环境优雅的复兴中路和复兴公园，东靠交通便捷的重庆南路，静谧的思南路贯穿其中。淮海中路及新天地商圈咫尺可达。项目北临孙中山故居，中国共产党上海办事处“周公馆”设立于此，近代历史名人柳亚子、梅兰芳先后在此居住。</p>
      <p>花园洋房酒店，配套设施十分齐全，宴会厅、酒吧、中西式餐厅、健身会所、室内恒温游泳池、水疗等设施一应俱全，贴心的贵宾用车服务为您的出行提供便捷，周到的全天候管家和厨师服务为您提供与众不同的舒适生活“家”体验。经验丰富的服务团队为每一位客人提供最贴心周到的服务。</p>
      <p>思南公馆的各式名店，特色餐厅也是酒店的重要组成部分，满足客户个性化需求。</p>
    `,
    link: "http://www.hotelmassenet.com.cn/cn/Accommodation.html",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_sinan_mansions_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_sinan_mansions_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_sinan_mansions_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_sinan_mansions_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_sinan_mansions_4.jpg"),
    ]
  },
  {
    id: "sha2",
    area: "上海",
    name: "上海外滩华尔道夫酒店",
    hotel_url_name: "上海外滩华尔道夫酒店",
    title: "HeySuite - 上海外滩华尔道夫酒店",
    logo: require("@/assets/hotel_logos/Waldorf.svg"),
    intro_text: "上海外滩华尔道夫酒店是一座拥有丰富文化内涵、传奇色彩、恒久建筑与深厚历史的奢华酒店，为您创造真实、难忘、独特的体验。它完美结合了上海外滩闻名遐迩的历史与文化及二十一世纪的繁华。在两幢综合大楼里，设置了260间高端配置的客房和套房，环境现代时尚的餐厅和酒吧，可俯瞰上海城市美景的精美华贵的宴会厅，豪华的水疗中心，设施完备的健身房，免费无线网络服务等，各功能设置精致巧妙，构成一幅完美的图画，展示出只属于上海外滩华尔道夫酒店的独一无二的宏伟和精致。这里极享盛名的风格，周到的服务，引人注目的周边环境，必将给尊贵的您带来一场休闲度假或商务旅行的独特体验。",
    link: "http://www.waldorfastoriahotels.com.cn/zh-CN/hotel/Shanghai/waldorf-astoria-shanghai-SHAWAWA/rooms.html?WT.mc_id=zELWAAA0AP1WW2PSH3Nano4DGBrandx&WT.srch=1&utm_source=AdWords&utm_medium=ppc&utm_campaign=paidsearch&source=search&campaignid=322678356&adgroupid=22187604156&targetid=kwd-48061729836",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_waldorf_astoria_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_waldorf_astoria_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_waldorf_astoria_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_waldorf_astoria_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_waldorf_astoria_4.jpg"),
      require("@/assets/hotel_imgs/shanghai_waldorf_astoria_5.jpg"),
    ]
  },
  {
    id: "sha3",
    area: "上海",
    name: "上海外滩悦榕庄",
    hotel_url_name: "上海外滩悦榕庄",
    title: "HeySuite - 上海外滩悦榕庄",
    logo: require("@/assets/hotel_logos/BanyanTree.svg"),
    intro_text: "沿着令人心动外滩悠然漫步，饱览黄浦江畔闪闪发光的城市风光，感受都市绿洲的迷人风情，准备好享受上海这座大都市的绝佳体验。 上海外滩悦榕庄承诺提供集团的经典招牌服务、富有创意的特色和优越的中心位置，适合精明的商务旅客和休闲旅客。 走进上海悦榕庄，迎接您的是无与伦比的景致和最先进的现代设施。",
    link: "http://www.banyantree.com/zh/cn-china-shanghai-on-the-bund/riverside-retreat-twin",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_banyan_tree_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_banyan_tree_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_banyan_tree_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_banyan_tree_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_banyan_tree_4.jpg"),
      require("@/assets/hotel_imgs/shanghai_banyan_tree_5.jpg"),
    ]
  },
  {
    id: "sha4",
    area: "上海",
    name: "上海浦东四季酒店",
    hotel_url_name: "上海浦东四季酒店",
    title: "HeySuite - 上海浦东四季酒店",
    logo: require("@/assets/hotel_logos/FourSeasons.svg"),
    intro_text: `
      <p>浦江东岸繁华如梦，这里是大上海蓬勃的城市核心，鳞次栉比的摩天建筑群在此林立。上海浦东四季酒店就坐落在陆家嘴金融中心区，见证了黄浦江蜿蜒的风景和城市的变迁。</p>
      <p>沿摩登十足的浦东世纪大道信步而行，感受都市生机勃勃的律动。华彩的夜生活、丰富地道的环球美食、充满本地文化的市集与奢华的国际金融购物中心在此集聚。</p>
      <p>精致华贵的中餐厅尚席，仅提供 22 席餐位，奉献尊贵粤式及本地美馔，环境优雅静谧。五间包房私密典雅，每个房间分别采用一种珍贵的宝石作为装饰元素，散发着一股难以抗拒的魅力。</p>
      <p>位于酒店顶层的无边际泳池是观赏上海璀璨天际线不容错过的地点之一。霓虹闪烁的夜晚，在池中畅泳，与陆家嘴融为一体。</p>
      <p>FLARE 水疗中心私密雅致，是放松身心的伊甸园。不论是个人理疗放松、美肌按摩，还是与亲密好友共享欢乐自在的水疗时光，都让人心旷神怡。</p>
    `,
    link: "http://www.fourseasons.com/zh/pudong/accommodations/",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_pudong_fourseasons_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_fourseasons_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_fourseasons_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_fourseasons_5.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_fourseasons_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_fourseasons_4.jpg"),
    ]
  },
  {
    id: "sha5",
    area: "上海",
    logo: require("@/assets/hotel_logos/MandarinOriental.svg"),
    name: "上海浦东文华东方酒店",
    hotel_url_name: "上海浦东文华东方酒店",
    title: "HeySuite - 上海浦东文华东方酒店",
    intro_text: "上海浦东文华东方酒店是一家豪华酒店，坐落在黄浦江堤之上，地理位置得天独厚。 酒店位于浦东金融区中心，将时尚风范、舒适和一流服务完美集于一身。",
    link: "http://cn.mandarinoriental.com/shanghai/accommodation/",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_4.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_5.jpg"),
      require("@/assets/hotel_imgs/shanghai_pudong_mandarin_oriental_6.jpg"),
    ]
  },
  {
    id: "sha6",
    area: "上海",
    logo: require("@/assets/hotel_logos/PeninsulaHotels.png"),
    name: "上海半岛酒店",
    hotel_url_name: "上海半岛酒店",
    title: "HeySuite - 上海半岛酒店",
    intro_text: "上海半岛酒店于2009年开业，是香港上海大酒店集团在中国大陆的旗舰酒店。 上海半岛酒店雄踞历史悠久的外滩，直面黄浦江的潮起潮涌，是近几十年来外滩上第一座新落成的建筑物。上海半岛酒店2015-2016连续二年荣膺美国《Travel + Leisure》（悦旅）杂志读者投票评选的“亚洲最佳酒店”。在《上海米其林指南2017》中，逸龙阁荣获米其林二星餐厅，而艾利爵士餐厅亦被评为米其林一星餐厅，上海半岛酒店是中国内地唯一一家同时拥有两家米其林餐厅的酒店。",
    link: "http://www.peninsulashotel.com/Accommodation/",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_peninsula_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_peninsula_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_peninsula_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_peninsula_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_peninsula_4.jpg"),
      require("@/assets/hotel_imgs/shanghai_peninsula_5.jpg"),
    ]
  },
  {
    id: "sha7",
    area: "上海",
    logo: require("@/assets/hotel_logos/ParkHyatt.png"),
    name: "上海柏悦酒店",
    hotel_url_name: "上海柏悦酒店",
    title: "HeySuite - 上海柏悦酒店",
    intro_text: `
      <p>上海柏悦酒店是一家五星级豪华酒店，位于素有「垂直型综合城区」之称的上海环球金融中心的79至93楼。上海环球金融中心座落在上海浦东陆家嘴商业区的中心，楼高492米（101层），是目前世界上最高的建筑之一。</p>
      <p>这座上海五星级酒店拥有多家餐厅和酒吧，如可以俯瞰上海的餐厅及酒吧——世纪100，位于酒店91楼，供应包括中餐、西餐和日餐的国际化精致美食；位于酒店87楼的大堂餐厅，提供经典欧陆佳肴，用餐环境优雅且具私密性，可在尽享美食的同时欣赏上海的迷人城市景观；更有位于酒店92楼的西式酒吧，各种主题活动带动现场气氛，将上海夜生活推向新高度。</p>
      <p>位于上海柏悦酒店85楼的「水境」水疗是一家豪华spa。这里不仅可以众览上海城的迷人景观，还拥有20米的超大游泳池和太极庭院，并提供多种让你放松身心、恢复活力的spa疗程。</p>
    `,
    link: "https://shanghai.park.hyatt.com/zh-Hans/hotel/rooms/suite.html",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_park_hyatt_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_park_hyatt_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_park_hyatt_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_park_hyatt_3.jpg"),
    ]
  },
  {
    id: "sha8",
    area: "上海",
    logo: require("@/assets/hotel_logos/PuLi.png"),
    name: "上海璞丽酒店",
    hotel_url_name: "上海璞丽酒店",
    title: "HeySuite - 上海璞丽酒店",
    intro_text: "中国首家定位“都会桃源”的奢华酒店，风格独特，时尚雅致，坐落在上海静安区的中心位置，是体验风土人情、获得宁静享受的理想去处。客房内饰美轮美奂，瓷砖地面光彩亮泽，丝绸覆盖的墙壁雍容华贵，精致的现代家具采用中国仿古家居摆件装点。酒店水疗中心独创的以茶为主题的茶叶护理，精选绿茶、白茶、玫瑰花茶和菊花茶，为您奉上独具特色的理疗服务。客房中弥漫着浓郁的禅宗气息；多数客房都可以俯瞰枝繁叶茂的静安公园，那里堪称上海市内的一片静谧绿洲。这座魅力无穷的大都市兼收并蓄，欧洲与亚洲风情、历史余韵与时尚潮流在此碰撞出绚丽的火花。",
    link: "http://www.lhw.cn/hotel/China-The-PuLi-Hotel-and-Spa/LW2812",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_puli_0.jpg"),
      require("@/assets/hotel_imgs/shanghai_puli_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_puli_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_puli_4.jpg"),
      require("@/assets/hotel_imgs/shanghai_puli_5.jpg"),
      require("@/assets/hotel_imgs/shanghai_puli_6.jpg"),
    ]
  },
  {
    id: "sha9",
    area: "上海",
    logo: require("@/assets/hotel_logos/RitzCarlton.svg"),
    name: "上海浦东丽思卡尔顿酒店",
    hotel_url_name: "上海浦东丽思卡尔顿酒店",
    title: "HeySuite - 上海浦东丽思卡尔顿酒店",
    intro_text: "作为上海奢华酒店之一的上海浦东丽思卡尔顿酒店，坐拥陆家嘴金融中心，可俯瞰外滩浦江美景，环抱东方明珠 。舒适豪华的客房与套房，为宾客带来个性化入住体验 。位于顶层的FLAIR是上海地标性户外露天餐厅酒吧。",
    link: "http://www.ritzcarlton.com/zh-cn/hotels/china/shanghai-pudong/rooms-suites",
    gallery: [
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_0.jpg"),
      // require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_1.jpg"),
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_3.jpg"),
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_2.jpg"),
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_8.jpg"),
      // require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_4.jpg"),
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_5.jpg"),
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_6.jpg"),
      require("@/assets/hotel_imgs/shanghai_street_ritzcarlton_7.jpg"),
    ]
  },
  {
    id: "can1",
    area: "广州",
    logo: require("@/assets/hotel_logos/FourSeasons.svg"),
    name: "广州四季酒店",
    hotel_url_name: "广州四季酒店",
    title: "HeySuite - 广州四季酒店",
    intro_text: `
      <p>103层的广州国际金融中心已经跻身全球十大地标建筑大厦之列，而四季酒店傲居大厦上层，奢阔景观于脚下蔓延开来。在珠江新城体验这个未来感十足的奢华酒店。</p>
      <p>酒店与广州大剧院和世界购物中心比邻而居，在这里能捕捉到城市美景。或奢享舌尖上的本地饕餮美食，或方便地购买电子产品、时装、刺绣和玉器等商品。</p>
      <p>酒店餐厅提供本地上乘的餐饮享受，满足任何苛刻的味蕾。您可随心选择意大利美食、日本料理、粤菜，或在位于 100 层的佰鲜汇餐厅品尝超级鲜美的海鲜佳肴，来一场舌尖上的旅行。<p/>
    `,
    link: "http://www.fourseasons.com/zh/guangzhou/accommodations/",
    gallery: [
      require("@/assets/hotel_imgs/guangzhou_four_seasons_0.jpg"),
      require("@/assets/hotel_imgs/guangzhou_four_seasons_5.jpg"),
      require("@/assets/hotel_imgs/guangzhou_four_seasons_7.jpg"),
      require("@/assets/hotel_imgs/guangzhou_four_seasons_3.jpg"),
      require("@/assets/hotel_imgs/guangzhou_four_seasons_6.jpg"),
      // require("@/assets/hotel_imgs/guangzhou_four_seasons_2.jpg"),
      require("@/assets/hotel_imgs/guangzhou_four_seasons_4.jpg"),
      // require("@/assets/hotel_imgs/shanghai_four_seasons_1.jpg"),
    ]
  },
  {
    id: "can2",
    area: "广州",
    logo: require("@/assets/hotel_logos/MandarinOriental.svg"),
    name: "广州文华东方酒店",
    hotel_url_name: "广州文华东方酒店",
    title: "HeySuite - 广州文华东方酒店",
    intro_text: "广州文华东方酒店地处中国令人兴奋的新兴城市之一，是一家屡获殊荣的豪华酒店，将时尚、舒适与服务恰如其分地融于一身。酒店位于摩登时尚的天河区，距离城内诸多主要商业场所及旅游景点仅举步之遥。233 间客房和 30 间套房将现代设计与奢华舒适融合，是广州宽敞的住宿地之一。餐厅融合了经典美馔和现代佳肴，令您在这座华南美食之城中获得全新的饕餮体验。环境静谧优雅的水疗中心提供一系列的护理疗程和高端水疗设施，令您尽情舒展身心。",
    link: "http://cn.mandarinoriental.com/guangzhou/accommodation/",
    gallery: [
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_0.jpg"),
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_1.jpg"),
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_2.jpg"),
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_3.jpg"),
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_4.jpg"),
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_5.jpg"),
      require("@/assets/hotel_imgs/guangzhou_mandarin_oriental_6.jpg"),
    ]
  },
  {
    id: "can3",
    area: "广州",
    logo: require("@/assets/hotel_logos/ParkHyatt.png"),
    name: "广州柏悦酒店",
    hotel_url_name: "广州柏悦酒店",
    title: "HeySuite - 广州柏悦酒店",
    intro_text: `
      <p>广州柏悦酒店演绎了柏悦品牌无与伦比的优雅魅力，致力为每位商务及休闲旅者提供精致多样的入住体验。<p>
      <p>坐落于鸟瞰城市新核心及中央商务区的富力盈凯广场53层之上，广州柏悦酒店尽揽羊城醉人美景，为城市的风景线徒添华丽之魅。毗邻历史悠久的珠江河畔，酒店置于珠江新城中优越地段，与广州塔、广州歌剧院及独具魅力的花城广场并美为邻。酒店交通便利，与白云国际机场距离40公里，与广州东站相距不过3公里。专为品味不凡的旅者而设，广州柏悦酒店将会成为受欢迎的私人府邸。</p>
      <p>酒店拥有208间宽敞奢适的现代化客房，包括36间套房，将在日新月异的城市中为您营造温暖如初的惬意居所。顶层各种卓越精美的饮食静候您的光临，包括一间位于70层的露天屋顶酒吧，其180度观景视角可尽享城市和珠江壮丽景色。 别具匠心的菜肴采用新鲜的当季食材，以国际和中国南方菜系为主，细心呵护客人的百变味蕾。享受身心放松的专属水疗、畅游于25米室内泳池、体验先进的健身设施，是您全方位领略健康惬意的休闲之选。</p>
      <p>广州柏悦酒店以别致多样的私人府邸设计，让住店宾客享有私人会客室或用餐区域。酒店会议室位于66层，个性化的开放式厨房、休闲区域及全景落地窗带来360度城市环绕美景。</p>
    `,
    link: "https://guangzhou.park.hyatt.com/zh-Hans/hotel/rooms/suites.html",
    gallery: [
      require("@/assets/hotel_imgs/guangzhou_park_hyatt_1.jpg"),
      require("@/assets/hotel_imgs/guangzhou_park_hyatt_2.jpg"),
      require("@/assets/hotel_imgs/guangzhou_park_hyatt_3.jpg"),
      require("@/assets/hotel_imgs/guangzhou_park_hyatt_4.jpg"),
      require("@/assets/hotel_imgs/guangzhou_park_hyatt_5.jpg"),
    ]
  },
  {
    id: "can4",
    area: "广州",
    logo: require("@/assets/hotel_logos/W_Hotels.svg"),
    name: "广州W酒店",
    hotel_url_name: "广州W酒店",
    title: "HeySuite - 广州W酒店",
    intro_text: `
      <p>广州W酒店(W Hotel Guangzhou)位于广州市中心地带的珠江新城，这里进驻了众多全球500强企业，是繁华的商务活动中心，同时坐拥国际顶尖时尚奢侈品专卖店并汇聚了世界一流美食餐厅与娱乐设施。 </p>
      <p>广州W酒店，作为中国内地首家W酒店炫丽亮相。酒店拥有前卫的建筑外观配以充满时尚活力的室内设计。进门处19米高的LED水幕瀑布，让客人从走进酒店开始便可感受到W酒店的时尚无处不在。在此，不难找到适合每位客人尽情享受的地方。</p>
      <p>充满设计元素的酒吧与餐厅呈献各国料理，美酒佳肴，充分演绎了广州多元化的城市魅力。体验中国内地首家AWAY水疗中心，在城市中心享受舒适静谧。</p>
      <p>设计新颖的客房，全城首个客房内运动传感器与各种高科技配套设备为客人带来的全新入住感受。逾2,000平方米的会议空间包括一个拥有户外场地的开放式会议室辉?多功能厅，配备先进高科技设施的宴会厅，设有便携式会议系统及同声传译系统，让客户的会议与活动打破传统，充满创意。 无论什么时候，无论客人需要什么，广州W酒店的24小时随时/随需服务都尽可能让客人如愿以偿。W风尚内幕达人为客人带来广州最新/最尚资讯。</p>
      <p>广州 W 酒店的客房及套房均采用充满活力的装饰设计，并配有先进一流的技术设施，必将提升您的每一次住宿体验。 馋猫宝罐中的诱人小吃可让您一饱口福！ 您还可通过客房内的娱乐设施尽情放松身心。 或利用高速上网接入随时与外界保持联系。 Bliss® 六件套卫浴用品将为您带来极致的呵护体验，而配有 W 枕头菜单的特色 W 睡床则将令您尽享一夜酣眠。 您大可安心享受这一切！我们将随时待命，以满足您的任何其他需求。</p>
    `,
    link: "http://www.starwoodhotels.com/whotels/property/rooms/index.html?propertyID=3126",
    gallery: [
      require("@/assets/hotel_imgs/guangzhou_w_hotel_0.jpg"),
      require("@/assets/hotel_imgs/guangzhou_w_hotel_1.jpg"),
      // require("@/assets/hotel_imgs/guangzhou_w_hotel_2.jpg"),
      require("@/assets/hotel_imgs/guangzhou_w_hotel_3.jpg"),
      // require("@/assets/hotel_imgs/guangzhou_w_hotel_4.jpg"),
      require("@/assets/hotel_imgs/guangzhou_w_hotel_5.jpg"),
      require("@/assets/hotel_imgs/guangzhou_w_hotel_6.jpg"),
      require("@/assets/hotel_imgs/guangzhou_w_hotel_7.jpg"),
      require("@/assets/hotel_imgs/guangzhou_w_hotel_8.jpg"),
    ]
  },
  {
    id: "can5",
    area: "广州",
    logo: require("@/assets/hotel_logos/RitzCarlton.svg"),
    name: "广州丽思卡尔顿酒店",
    hotel_url_name: "广州富力丽思卡尔顿酒店",
    title: "HeySuite - 广州富力丽思卡尔顿酒店",
    intro_text: `
      <p>东方与西方给人的第一印象就是截然不同的文化，语言、审美，甚至美食口味等都有着明显的差异。然而，富有经验的旅游者能发现更多其中奥妙。他们在感受文化差异的同时，有着更多美好而又奇妙的体验与您分享：以爱为名的甜蜜旅程；对细节魅力的鉴赏；甚至尽情享用一杯香茶的滋味，也值得与您分享。</p>
      <p>广州富力丽思卡尔顿酒店将中西文化和谐融合，致力于为宾客提供体贴入微的个性化服务，让宾客充分体验典雅奢华。我们以传统的欢迎仪式，为来自全球各地的宾 客们递上一杯热茶。宾客在优雅的洛可可风格大堂里品尝着中国茶，欣赏着极富禅意的流动喷泉，尽享诗意。入住酒店客房后，五星享受无处不在。提花窗帘缓缓升 起，新广州景观一览无遗。无论是休闲旅游还是从事商务，如广交会的客人都将十分享受眼前这一新城市景象。酒店毗邻广州歌剧院、广东博物馆等地标建筑，紧靠 交通枢纽，与广州国际会议及展览中心隔江相望。酒店设计独显经典欧陆风情，是珠江边上一颗璀璨的明珠。</p>
    `,
    link: "http://www.ritzcarlton.com/zh-cn/hotels/china/guangzhou/rooms-suites",
    gallery: [
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_0.jpg"),
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_1.jpg"),
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_2.jpg"),
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_3.jpg"),
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_4.jpg"),
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_5.jpg"),
      require("@/assets/hotel_imgs/guangzhou_ritzcarlton_6.jpg"),

    ]
  },
  // {
  //   id: "can6",
  //   area: "广州",
  //   logo: "",
  //   name: "广州铂晶保利世贸国际酒店公寓",
  //   intro_text: `
  //   `,
  //   link: "",
  //   gallery: [
  //   ]
  // },
  {
    id: "can7",
    area: "广州",
    logo: require("@/assets/hotel_logos/GrandHyatt.png"),
    name: "广州富力君悦大酒店",
    hotel_url_name: "广州君悦大酒店",
    title: "HeySuite - 广州富力君悦大酒店",
    intro_text: "广州富力君悦大酒店是凯悦酒店集团继北京、上海后，在中国大陆的第四间君悦品牌酒店。酒店坐落于广州市天河区的新中心商务区-珠江新城内，毗邻广州大剧院、广东省博物馆、亚运会开幕场馆海心沙、花城广场及广州新电视塔，距中国进出口商品交易会琶洲展馆和广州火车东站仅10分钟车程。结合了出色的建筑和四通八达的特性，让客人更能体验广州的魅力。",
    link: "https://guangzhou.grand.hyatt.com/zh-Hans/hotel/rooms/suite.html",
    gallery: [
      require("@/assets/hotel_imgs/guangzhou_grand_hyatt_0.jpg"),
      require("@/assets/hotel_imgs/guangzhou_grand_hyatt_1.jpg"),
      require("@/assets/hotel_imgs/guangzhou_grand_hyatt_2.jpg"),
      require("@/assets/hotel_imgs/guangzhou_grand_hyatt_3.jpg"),
      require("@/assets/hotel_imgs/guangzhou_grand_hyatt_4.jpg"),

    ]
  },
  {
    id: "szx1",
    area: "深圳",
    logo: require("@/assets/hotel_logos/Sheraton.svg"),
    name: "深圳大梅沙京基喜来登度假酒店",
    hotel_url_name: "深圳喜来登酒店",
    title: "HeySuite - 深圳大梅沙京基喜来登度假酒店",
    intro_text: `
      <p>深圳大梅沙京基喜来登度假酒店位于深圳东海岸大梅沙海滨浴场，占据绝佳的地理位置，整个酒店就建在一片沙滩之上，外型如一条翘首东方之龙，挺立在中国的南海边、世界的东方，线条简洁流畅，起伏变化，给人强有力的视觉感。从酒店大堂可以直接步入沙滩，进入海滨，到大海的距离不超过二十米，这在中国的海滨酒店中绝无仅有。</p>
      <p>餐饮设施：6间风格迥异的餐厅及酒吧可供选择，并配24小时客房送餐服务。</p>
      <p>卡普里意大利餐厅：供应日式风味的经典及现代意大利美食。菜单包括海鲜、意大利面、精选肉类和新鲜果蔬，由我们的主厨精心烹饪。您可一边在户外享用美食，一边欣赏迷人的海景。</p>
      <p>粤菜王府：在优雅的环境中，为您呈上地道的广东美食。在装饰精美的主餐区或 11 个私人包间中的任意一间，您都可一边大快朵颐，一边欣赏窗外令人沉醉的海洋景观或大梅沙四周的缭绕群山。</p>
      <p>娱乐设施：五星级国际性商务度假酒店—深圳大梅沙京基喜来登度假酒店，是深圳市东部旅游开发的重点建设项目，将成为深圳东部生态旅游开发的标志性建筑。</p>
      <p>会议设施：整个酒店配有完善的会议系统、成熟的别墅区域、现代化的娱乐餐饮设施，以及国内首批澳洲天然有机水疗区，从多个角度满足游客更多层面、更高品位的需求。特别是多功能的宴会厅，最大的一间能容纳近千人，是深圳酒店中目前最大的宴会厅之一。</p>
    `,
    link: "http://www.starwoodhotels.com/sheraton/property/rooms/index.html?propertyID=1968",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_dameisha_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_4.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_5.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_3.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_7.jpg"),
      require("@/assets/hotel_imgs/shenzhen_dameisha_8.jpg"),
    ]
  },
  {
    id: "szx2",
    area: "深圳",
    logo: require("@/assets/hotel_logos/InterContinental.svg"),
    name: "深圳华侨城洲际大酒店",
    hotel_url_name: "深圳洲际酒店",
    title: "HeySuite - 深圳华侨城洲际大酒店",
    intro_text: "斑斓梦幻的西班牙国度、愉悦奔放的西班牙民族、目不暇接的西班牙小吃……这一切都足以让您爱上西班牙！在华侨城洲际大酒店，设计师透过建筑风格和装饰细节精心打造一个纯粹的西班牙主题风情酒店，从门童制服、斗牛场到马德里著名的市长广场都被演绎得维俏维妙。酒店位于集文化、艺术、金融于一体的南山中心片区，优越的地理位置和便利的交通，众多知名景点、美术馆、购物商场步行即达，离各个主要交通枢纽最多半小时车程。一座具有城市绿洲美誉的西班牙主题酒店，为您繁忙的商旅增添度假休闲的乐趣。",
    link: "https://www.ihg.com/intercontinental/hotels/cn/zh/shenzhen/szxha/hoteldetail",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_intercontinental_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_intercontinental_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_intercontinental_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_intercontinental_3.jpg"),
      require("@/assets/hotel_imgs/shenzhen_intercontinental_4.jpg"),

    ]
  },
  {
    id: "szx3",
    area: "深圳",
    logo: require("@/assets/hotel_logos/StRegis.svg"),
    name: "深圳瑞吉酒店",
    hotel_url_name: "深圳瑞吉酒店",
    title: "HeySuite - 深圳瑞吉酒店",
    intro_text: "深圳瑞吉酒店坐落于蔡屋围金融中心内，深圳瑞吉酒店是深圳这个成功且充满活力的经济特区中独一无二的城市酒店。位于高档商业购物中心之上，距时尚奢侈品店及国际知名企业仅数步之遥。这座非凡的建筑高 100 层，宾客可在 95 层的大堂俯瞰深圳壮观迷人的城市全景。深圳瑞吉酒店将奉上一系列量身定制的体验。传奇的瑞吉管家服务无处不在，个性化地满足每个细节要求，让宾客享受极致奢华的生活方式。您可以尽享多种内部设施，度过轻松悠闲的时光。",
    link: "http://www.starwoodhotels.com/stregis/property/rooms/index.html?propertyID=3651",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_stregis_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_3.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_4.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_5.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_6.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_7.jpg"),
      require("@/assets/hotel_imgs/shenzhen_stregis_8.jpg"),

    ]
  },
  {
    id: "szx4",
    area: "深圳",
    logo: require("@/assets/hotel_logos/RitzCarlton.svg"),
    name: "深圳星河丽思卡尔顿酒店",
    hotel_url_name: "深圳丽思卡尔顿酒店",
    title: "HeySuite - 深圳星河丽思卡尔顿酒店",
    intro_text: "深圳星河丽思卡尔顿酒店地处福田商业区，毗邻深圳国际会展中心，交通便捷，距离深圳宝安国际机场40分钟车程，香港国际机场仅1小时车程。得天独厚的地理位置以及先进的会议设施，使其成为鹏城中首屈一指的商务场所。酒店设有七种餐饮选择，提供多元化的国际餐饮体验，无论何时，都能让您找到心头所好。屡获殊荣的水疗中心更是您处理繁琐的业务后，放松身心的优雅去处。",
    link: "http://www.ritzcarlton.com/zh-cn/hotels/china/shenzhen/rooms-suites",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_6.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_7.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_3.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_4.jpg"),
      require("@/assets/hotel_imgs/shenzhen_ritz_carlton_5.jpg"),
    ]
  },
  {
    id: "szx5",
    area: "深圳",
    logo: require("@/assets/hotel_logos/octHotel.png"),
    name: "深圳茵特拉根华侨城酒店",
    hotel_url_name: "深圳华侨城酒店",
    title: "HeySuite - 深圳茵特拉根华侨城酒店",
    intro_text: "茵特拉根华侨城酒店，坐落在深圳东部华侨城茵特拉根山地小镇内，依山傍水而筑，既有自然天成的山水，也有欧洲典雅的小镇风光。茵特拉根华侨城酒店，是一间超豪华五星级酒店。酒店主楼、联排别墅、公寓、池畔别墅、茵特拉根城堡等各类建筑交相辉映。酒店的建筑设计独具匠心，将艺术元素渗透到每个细节的设计当中。",
    link: "http://www.octhotels.com/booking/hotels.html?pid=11&arrival=2014-09-15&departure=2014-09-16&roomnum=1",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_octeast_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_octeast_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_octeast_2.jpg"),
    ]
  },
  {
    id: "szx6",
    area: "深圳",
    logo: require("@/assets/hotel_logos/GrandHyatt.png"),
    name: "深圳君悦酒店",
    hotel_url_name: "深圳君悦酒店",
    title: "HeySuite - 深圳君悦酒店",
    intro_text: "深圳君悦酒店是深圳享有盛名的商业发展项目，华润中心的重要组成部分。酒店毗邻城市最主要的交通干道，占尽地利之便。气派非凡，雍容华贵，都市风景一览无余。从辉煌富丽的大堂，气势宏伟的建筑，到先进的商务科技，宽敞的客房，创新的餐饮，完善的回忆宴会设施及豪华的水疗SPA等设施和服务，随时满足商务、会议、美食、休闲及娱乐等全方位都市需求。",
    link: "https://shenzhen.grand.hyatt.com/zh-Hans/hotel/rooms/suite.html",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_grand_hyatt_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_grand_hyatt_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_grand_hyatt_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_grand_hyatt_3.jpg"),
      require("@/assets/hotel_imgs/shenzhen_grand_hyatt_4.jpg"),
    ]
  },
  {
    id: "szx7",
    area: "深圳",
    logo: require("@/assets/hotel_logos/FourSeasons.svg"),
    name: "深圳四季酒店",
    hotel_url_name: "深圳四季酒店",
    title: "HeySuite - 深圳四季酒店",
    intro_text: "奢居深圳繁华烂漫的核心地段，深圳四季酒店打造出风华绝代的浪漫室内环境，并将美如画卷的室外风景引入室内，不论是午后一杯清茶，还是窗前阅读一本诗集，都成为城市风景。",
    link: "http://www.fourseasons.com/zh/shenzhen/accommodations/room_comparison/",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_four_seasons_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_four_seasons_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_four_seasons_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_four_seasons_3.jpg"),
      require("@/assets/hotel_imgs/shenzhen_four_seasons_4.jpg"),
      require("@/assets/hotel_imgs/shenzhen_four_seasons_5.jpg"),
    ]
  },
  {
    id: "szx8",
    area: "深圳",
    logo: require("@/assets/hotel_logos/Marriott.svg"),
    name: "深圳中洲万豪酒店",
    hotel_url_name: "深圳万豪酒店",
    title: "HeySuite - 深圳中洲万豪酒店",
    intro_text: "深圳中洲万豪酒店，地处南山商务核心区，置身于深圳湾地标性建筑-高达300.8米的中洲控股中心。酒店拥有340间豪华现代化设计客房，坐拥无敌海景和璀璨城市景致。南山尚膳全日制餐厅、万豪中餐厅、植藤日本餐厅（自主经营）、大堂酒廊、咖啡廊和行政酒廊等高端食肆提供丰富膳食选择。宴会厅及会议场地面积达2,000平米，满足不同的会议及社交活动需求。深圳中洲万豪酒店传承万豪国际酒店卓越的管理文化及服务理念，凭借精良完善的设施和享誉全球的万豪服务，为每位宾客奉献超群绝伦的品质体验。",
    link: "http://www.marriott.com.cn/hotels/hotel-rooms/szxwt-shenzhen-marriott-hotel-nanshan/",
    gallery: [
      require("@/assets/hotel_imgs/shenzhen_marriott_0.jpg"),
      require("@/assets/hotel_imgs/shenzhen_marriott_1.jpg"),
      require("@/assets/hotel_imgs/shenzhen_marriott_2.jpg"),
      require("@/assets/hotel_imgs/shenzhen_marriott_3.jpg"),
    ]
  },
  {
    id: "ckg1",
    area: "重庆",
    logo: require("@/assets/hotel_logos/BanyanTree.svg"),
    name: "重庆北碚悦榕庄",
    hotel_url_name: "重庆悦榕庄酒店",
    title: "HeySuite - 重庆北碚悦榕庄",
    intro_text: "重庆北培悦榕庄坐落于缙云山自然保护区山脚下，是悦榕集团旗下首家温泉度假村。 您可沉浸于度假村茫茫的苍翠群山、蜿蜒的溪流及优美的山景怀抱中，在现代环境中享受重拾活力的生活。",
    link: "http://www.banyantree.com/zh/cn-china-chongqing-beibei/hot-spring-retreat-king",
    gallery: [
      require("@/assets/hotel_imgs/chongqing_banyan_tree_3.jpg"),
      require("@/assets/hotel_imgs/chongqing_banyan_tree_0.jpg"),
      require("@/assets/hotel_imgs/chongqing_banyan_tree_1.jpg"),
      require("@/assets/hotel_imgs/chongqing_banyan_tree_2.jpg"),
      require("@/assets/hotel_imgs/chongqing_banyan_tree_4.jpg"),
      require("@/assets/hotel_imgs/chongqing_banyan_tree_5.jpg"),
    ]
  },
  {
    id: "ckg2",
    area: "重庆",
    logo: require("@/assets/hotel_logos/Kempinski.png"),
    name: "重庆凯宾斯基酒店",
    hotel_url_name: "重庆凯宾斯基酒店",
    title: "HeySuite - 重庆凯宾斯基酒店",
    intro_text: "徜徉于重庆凯宾斯基酒店典雅现代的室内，您尽可感受到纯正奢华舒适的入住体验。我们将竭诚为各界来宾提供舒适便利的酒店之旅；百年传承的精致服务及经典欧式奢华享受。",
    link: "https://www.kempinski.com/zh-cn/chongqing/hotel-chongqing/rooms-and-suites/",
    gallery: [
      require("@/assets/hotel_imgs/chongqing_kempinski_0.jpg"),
      require("@/assets/hotel_imgs/chongqing_kempinski_1.jpg"),
      require("@/assets/hotel_imgs/chongqing_kempinski_2.jpg"),
      require("@/assets/hotel_imgs/chongqing_kempinski_3.jpg"),
      require("@/assets/hotel_imgs/chongqing_kempinski_4.jpg"),
    ]
  },
  {
    id: "ckg3",
    area: "重庆",
    logo: require("@/assets/hotel_logos/Kempinski.png"),
    name: "重庆JW万豪酒店",
    hotel_url_name: "重庆万豪酒店",
    title: "HeySuite - 重庆JW万豪酒店",
    intro_text: "作为中国直辖市之一，重庆市堪称西部地区的经济中心，而重庆 JW 万豪酒店正坐落于该市最高的摩天大厦之一重庆保利国际广场。酒店装潢考究高雅而又不乏时尚现代气息，拥有 454 间宽敞的客房，房内装潢精致典雅，并配备完备的现代化设施。酒店内设焰吧、万豪中餐厅、庆厨房、行政酒廊和大堂酒廊等五家特色餐厅，可缔造独一无二的美食盛宴。酒店逾 2,200 平方米多功能宴会活动空间提供先进的技术设备和设施。酒店专业的活动组可为宾客精心规划、协调并执行定制活动，不论是盛大的婚礼和商务会议，还是私密社交聚会，都能满足宾客的各种要求。重庆 JW 万豪酒店设有室内泳池、水疗中心及设施完备的健身中心，即使身处旅途之中，也可助您实现完美平衡。",
    link: "http://www.marriott.com.cn/hotels/hotel-rooms/ckgjw-jw-marriott-hotel-chongqing/",
    gallery: [
      require("@/assets/hotel_imgs/chongqing_marriott_0.jpg"),
      require("@/assets/hotel_imgs/chongqing_marriott_1.jpg"),
      require("@/assets/hotel_imgs/chongqing_marriott_4.jpg"),
      require("@/assets/hotel_imgs/chongqing_marriott_2.jpg"),
      require("@/assets/hotel_imgs/chongqing_marriott_3.jpg"),
    ]
  },
  {
    id: "ckg4",
    area: "重庆",
    logo: require("@/assets/hotel_logos/HyattRegency.png"),
    name: "重庆富力凯悦酒店",
    hotel_url_name: "重庆凯悦酒店",
    title: "HeySuite - 重庆富力凯悦酒店",
    intro_text: "重庆富力凯悦酒店地处江北区繁华的商业购物中心北城天街，毗邻城中新建立的商务区。酒店位于一个综合商业发展体，与购物、写字楼及多种饮食娱乐配套设施组合而成。重庆凯悦酒店交通方便，距江北国际机场30分钟车程，前往解放碑需 15 分钟；10 分钟即达重庆保税港区，20 分钟至寸滩港及重庆 3 个新型工业园。此外，由富力凯悦酒店向北15分钟车程即达两江新区及重庆新国际博览中心。",
    link: "https://chongqing.regency.hyatt.com/zh-Hans/hotel/rooms/suite.html",
    gallery: [
      require("@/assets/hotel_imgs/chongqing_hyatt_regency_0.jpg"),
      require("@/assets/hotel_imgs/chongqing_hyatt_regency_1.jpg"),
      require("@/assets/hotel_imgs/chongqing_hyatt_regency_2.jpg"),
      require("@/assets/hotel_imgs/chongqing_hyatt_regency_3.jpg"),
    ]
  },
  {
    id: "ctu1",
    area: "成都",
    logo: require("@/assets/hotel_logos/TheTempleHouse.png"),
    name: "成都博舍",
    hotel_url_name: "成都博舍酒店",
    title: "HeySuite - 成都博舍",
    intro_text: `
      <p>博舍是第三家 The House Collective 品牌酒店，灵感源自成都的传统文化和山川地貌。</p>
      <p>每一间 The House Collective 品牌酒店都经过精心设计，别具一格，充分展现出酒店所在地的本土特色。博舍是我们的第三家酒店，英文名称“The Temple House” ，以毗邻的大慈寺命名。酒店虽然采用当代建筑风格，但同样尊重成都的历史建筑物并得到启发，重新修葺笔帖式街老宅院，并在设计之中融入清代庭院元素。</p>
    `,
    link: "http://www.thetemplehousehotel.com/sc/rooms",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_the_temple_house_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_3.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_4.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_5.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_6.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_7.jpg"),
      require("@/assets/hotel_imgs/chengdu_the_temple_house_8.jpg"),
    ]
  },
  {
    id: "ctu2",
    area: "成都",
    logo: require("@/assets/hotel_logos/GrandHyatt.png"),
    name: "成都群光君悦大酒店",
    hotel_url_name: "成都君悦酒店",
    title: "HeySuite - 成都群光君悦大酒店",
    intro_text: `
      <p>地处充满历史格调且时尚风情的春熙南路，成都群光君悦酒店坐落于高达166米的群光广场大厦的10楼至39楼。</p>
      <p>深受法式官邸及豪宅的影响，绝对堪称得上是美食殿堂，“8号”中餐厅提供地道的四川火锅及当地美食，特有的“集市”概念营造新鲜独特的餐饮体验；全天候开放式餐厅“凯菲厅” 为您现场烹饪当地及国际的饕餮美食，体验观赏厨师精彩的技艺的现场互动乐趣；经典欧式餐厅 “牛排坊”供应现场烹制的上等牛排及令人垂涎的海鲜、季节性欧式美飨。最后，独特的露天花园式自助野外烧烤“BBQ”，必定是您款待客人及品味亚洲及当地美食的最佳选择。 </p>
      <p>同时兼具多种风格的“戏 · 迷”是您精彩夜生活的理想场所，拥有现场乐队的“戏”与直通迷宫花园的“迷”共同构筑气氛独特的悦享酒吧区域，四周围绕着四米高的青翠绿植，营造午夜无限的浪漫氛围。</p>
      <p>除去非凡的美食体验，客人还可在酒店中的几个花园里放松身心，享受闲致。穿过酒店入口，就来到无比宁谧的花园。园中精心挑选的各种植被展示着四季变幻的风采。位于15层的“蒲桃”是一座开放式花园，是都市中心难得享受清幽雅致的不二选择。 </p>
      <p>酒店提供390间豪华舒适的典雅客房。每个房间的全景落地玻璃窗可饱览城市美景，为宾客的每次入住留下独一无二的难忘回忆。酒店拥有总面积超过3000平方米的宴会及会议场地，包括层高8 米的宴会厅配备宽敞舒适的前厅，以及面积达1,000平方米的法式户外花园。9间功能多样的会议厅，及其独立的配餐区域，定会让您和与会宾客亲身领略厨艺大师的精湛制作过程。</p>
      <p>酒店还拥有完善的现代化健身中心，为客人提供一系列完善的健身器材及室内恒温游泳池(即将开始营业)。同时客人也可前往休闲中心感受我们为您提供的悉心服务，这里为宾客们准备了五间私密水疗套房及12个独一无二的足部按摩区域，让您忘却繁喧之疲，重获身心焕发。</p>
    `,
    link: "https://chengdu.grand.hyatt.com/zh-Hans/hotel/rooms/suite.html",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_grand_hyatt_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_grand_hyatt_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_grand_hyatt_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_grand_hyatt_3.jpg"),
    ]
  },
  {
    id: "ctu3",
    area: "成都",
    logo: require("@/assets/hotel_logos/diaoyutai_boutique.png"),
    name: "成都钓鱼台精品酒店",
    hotel_url_name: "成都钓鱼台酒店",
    title: "HeySuite - 成都钓鱼台精品酒店",
    intro_text: "成都钓鱼台精品酒店坐落于有300年历史的都市风情街区——宽窄巷子，是钓鱼台美高梅酒店集团旗下全球首家“钓鱼台”品牌精品酒店。传承御苑行宫800年历史基因，融会当今国宾馆雍容气度，成都钓鱼台精品酒店为全球政商人士、各界精英提供尊贵独有的国宾体验。酒店设施由法国殿堂级大师Bruno Moinard主持设计，于16000平米的两座中式庭院，布置出45间外交级客房，2间品位级餐厅和酒廊、专属尊享的俱乐部空间，曾经服务于上千位各国贵宾的钓鱼台厨师团队，驻店推出钓鱼台盛筵。",
    link: "http://dytchengdu.com/guest_rooms.html",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_diaoyutai_boutique_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_diaoyutai_boutique_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_diaoyutai_boutique_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_diaoyutai_boutique_3.jpg"),
      require("@/assets/hotel_imgs/chengdu_diaoyutai_boutique_4.jpg"),
    ]
  },
  {
    id: "ctu4",
    area: "成都",
    logo: require("@/assets/hotel_logos/StRegis.svg"),
    name: "成都瑞吉酒店",
    hotel_url_name: "成都瑞吉酒店",
    title: "HeySuite - 成都瑞吉酒店",
    intro_text: "成都最新的地标性酒店紧邻天府广场和春熙路，将定制服务与私人公寓的独特氛围巧妙融合，为您带来完美住宿体验。",
    link: "http://www.starwoodhotels.com/stregis/property/rooms/room_class_detail.html?propertyID=3473&roomClassId=1024323083",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_st_regis_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_st_regis_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_st_regis_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_st_regis_3.jpg"),
      require("@/assets/hotel_imgs/chengdu_st_regis_4.jpg"),
      require("@/assets/hotel_imgs/chengdu_st_regis_5.jpg"),
      require("@/assets/hotel_imgs/chengdu_st_regis_6.jpg"),
    ]
  },
  {
    id: "ctu5",
    area: "成都",
    logo: require("@/assets/hotel_logos/RitzCarlton.svg"),
    name: "成都富力丽思卡尔顿酒店",
    hotel_url_name: "成都丽思卡尔顿酒店",
    title: "HeySuite - 成都富力丽思卡尔顿酒店",
    intro_text: "成都富力丽思卡尔顿酒店风格时尚简约，设计灵感源于成都两千多年的厚重历史文化，古典美和现代感在细节间自然展现。度假酒店将成都的茶文化融入客人体验当中，从您抵达开始，游走于餐厅、水疗或是舒适的客房内，您皆可体会现代摩登方式演绎的丽思卡尔顿特色个性化服务体验。",
    link: "http://www.ritzcarlton.com/zh-cn/hotels/china/chengdu/rooms-suites",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_ritzcarlton_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_ritzcarlton_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_ritzcarlton_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_ritzcarlton_3.jpg"),
      require("@/assets/hotel_imgs/chengdu_ritzcarlton_4.jpg"),
      require("@/assets/hotel_imgs/chengdu_ritzcarlton_5.jpg"),
    ]
  },
  {
    id: "ctu6",
    area: "成都",
    logo: require("@/assets/hotel_logos/ShangriLa.svg"),
    name: "成都香格里拉大酒店",
    hotel_url_name: "成都香格里拉酒店",
    title: "HeySuite - 成都香格里拉大酒店",
    intro_text: `
      <p>机场沿途的明媚风光最教人难忘。成都丰富的流域，小桥流水，树木花草本身就是一场视觉盛宴。这个位于南方丝绸之路开端的文明古都，诉说着华夏文化的源远流长。</p>
      <p>步入成都香格里拉大酒店富丽堂皇的酒店大堂，迎面而来的是亲切的问候和款待。酒店收藏有周春芽、何多苓等多位川籍著名当代艺术家的杰作，予人愉悦的艺术之旅，充分感受成都的当代艺术精华。</p>
      <p>推开房间大门，首先进入眼帘的是时尚现代的设计，以及强调空间感的布局。诚然，您眼前的房间正是市区内最大的酒店客房，豪华舒适自然不在话下。</p>
      <p>外出观光时，何不泡上一壶热茶，与当地人闲话家常？他们也许会自豪地提起，这片土地曾是茶文化和茶叶贸易的发源地。兴尽归来，重拾一片宁静。静下心来享受CHI水疗护理疗程，身心宛若新生。</p>
      <p>夜幕降临，何不穿上一套富有成都传统特色的蜀锦西服，到香格里拉招牌中餐厅香宫享用晚餐。川菜浓烈的口感把一天推向高潮，与粤式名菜搭配相得益彰。眺望窗外锦江的迷人夜色， 更是赏心乐事。</p>
    `,
    link: "http://www.shangri-la.com/cn/chengdu/shangrila/rooms-suites/suites/executive-suite/",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_shangrila_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_shangrila_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_shangrila_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_shangrila_3.jpg"),
      require("@/assets/hotel_imgs/chengdu_shangrila_4.jpg"),
      require("@/assets/hotel_imgs/chengdu_shangrila_5.jpg"),
      require("@/assets/hotel_imgs/chengdu_shangrila_6.jpg"),
    ]
  },
  {
    id: "ctu7",
    area: "成都",
    logo: require("@/assets/hotel_logos/InterContinental.svg"),
    name: "成都环球中心天堂洲际大饭店",
    hotel_url_name: "成都洲际酒店",
    title: "HeySuite - 成都环球中心天堂洲际大饭店",
    intro_text: "成都环球中心天堂洲际大饭店坐落于全球最大单体建筑新世纪环球中心内，这座以“飞行之海鸥、漂浮之鲸、起伏之海浪”的建筑形态，融合成都休闲旅游城市的概念，成为成都的新名片。酒店拥有990间豪华客房及套房，每间客房皆有独特的海景观景阳台，将细砂海岸线及室内沙滩的天堂岛海洋乐园揽入怀中，沿海岸风情小镇，栈桥码头，无边界汤池，及150米室内LED屏等，壮丽的海天景象一览无余。迷人的地中海风情建筑与别具一格的海洋主题浑然一体，更有世界一流美食，为您倾力打造美轮美奂的入住体验。",
    link: "https://www.ihg.com/intercontinental/hotels/cn/zh/chengdu/ctuic/hoteldetail",
    gallery: [
      require("@/assets/hotel_imgs/chengdu_inter_continental_0.jpg"),
      require("@/assets/hotel_imgs/chengdu_inter_continental_1.jpg"),
      require("@/assets/hotel_imgs/chengdu_inter_continental_2.jpg"),
      require("@/assets/hotel_imgs/chengdu_inter_continental_3.jpg"),
    ]
  },
  {
    id: "hgh1",
    area: "杭州",
    logo: require("@/assets/hotel_logos/Aman.png"),
    name: "杭州法云安缦酒店",
    hotel_url_name: "杭州安缦酒店",
    title: "HeySuite - 杭州法云安缦酒店",
    intro_text: `
      <p>掩映于青嫩茶园与茂林修竹之中的法云安缦，是中国传统与佛教文化交相孕育下的精神栖息之所。整座村落建筑在百年时光中静默矗立，如今则以传统工艺重新修缮一新，于时光婵娟中独享自我时空。</p>
      <p>石径通幽，取潺潺溪流百折千绕；土木建构，择原生石材层层叠荡，法云安缦于建筑间完好封存再现婉约的江南气质。墙壁上游龙走凤的书法作品，也反映出杭州自古名士风流的底蕴与传承。</p>
      <p>西湖美景闻名于世，其间秀桥、宝塔、岛屿、园林交织出这一联合国教科文组织的世界文化遗产。闲情漫游，或泛舟湖上，各有趣味。市区之中，新华路并健康路两条丝绸街盛名远传，更添一抹江南秀美。</p>
      <p>日出清晨，可于附近佛寺参与早课，在僧侣诵经的低吟梵语声中唤醒自我。七座庄严古刹散落于法云安缦四周，步行可至，其中最广为人所知者当属始建于东晋（公元四世纪）的灵隐寺。</p>
    `,
    link: "https://www.aman.com/zh-cn/resorts/amanfayun/rooms-suites/deluxe-village-suite",
    gallery: [
      require("@/assets/hotel_imgs/hangzhou_amanfayun_0.jpg"),
      require("@/assets/hotel_imgs/hangzhou_amanfayun_1.jpg"),
      require("@/assets/hotel_imgs/hangzhou_amanfayun_2.jpg"),
      require("@/assets/hotel_imgs/hangzhou_amanfayun_3.jpg"),
      require("@/assets/hotel_imgs/hangzhou_amanfayun_4.jpg"),
      require("@/assets/hotel_imgs/hangzhou_amanfayun_5.jpg"),
    ]
  },
  {
    id: "hgh2",
    area: "杭州",
    logo: require("@/assets/hotel_logos/FourSeasons.svg"),
    name: "杭州西子湖四季酒店",
    hotel_url_name: "杭州四季酒店",
    title: "HeySuite - 杭州西子湖四季酒店",
    intro_text: "在美丽的西子湖畔，西子湖四季酒店将自然的静谧安详与 21 世纪的时尚设计完美融合，诗意地阐释了水波潋滟、惊鸿之舞的建筑语言。其优越的位置紧邻商务、娱乐及购物中心，仅 10 分钟车程即可到达市中心。",
    link: "http://www.fourseasons.com/zh/hangzhou/accommodations/",
    gallery: [
      require("@/assets/hotel_imgs/hangzhou_four_seaseons_0.jpg"),
      require("@/assets/hotel_imgs/hangzhou_four_seaseons_1.jpg"),
      require("@/assets/hotel_imgs/hangzhou_four_seaseons_2.jpg"),
      require("@/assets/hotel_imgs/hangzhou_four_seaseons_3.jpg"),
    ]
  },
  {
    id: "hgh3",
    area: "杭州",
    logo: require("@/assets/hotel_logos/fuchun.png"),
    name: "杭州富春山居度假村",
    hotel_url_name: "杭州富春山居度假村",
    title: "HeySuite - 杭州富春山居度假村",
    intro_text: "富阳富春山居度假村位于杭州山水秀丽的富阳市富春江畔，其包括富春别墅，度假酒店及SPA，高尔夫球场，富春阁和上海T8餐厅，以中国历史文化为元素，用西方现代设计观念呈现出中国建筑艺术的精美风格。",
    link: "https://www.yourreservation.net/tb3/index.cfm?bf=HLLW2821&lng=TW&plprun=1&_=1335692047043",
    gallery: [
      require("@/assets/hotel_imgs/hangzhou_fuchun_resort_0.jpg"),
      require("@/assets/hotel_imgs/hangzhou_fuchun_resort_1.jpg"),
      require("@/assets/hotel_imgs/hangzhou_fuchun_resort_2.jpg"),
      require("@/assets/hotel_imgs/hangzhou_fuchun_resort_3.jpg"),
      require("@/assets/hotel_imgs/hangzhou_fuchun_resort_4.jpg"),
    ]
  },
]



hotels.normal = hotels.reduce( (prev, next) => {
  prev[next.id] = next
  return prev
}, {})

module.exports = hotels
