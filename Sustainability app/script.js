const reveals = document.querySelectorAll(".reveal");
const form = document.querySelector("#communityForm");
const feedList = document.querySelector("#feedList");
const postTemplate = document.querySelector("#postTemplate");
const langButtons = document.querySelectorAll(".lang-button");
const formStatus = document.querySelector("#formStatus");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselDotsContainer = document.querySelector("#carouselDots");
const carouselPrevious = document.querySelector("#carouselPrevious");
const carouselNext = document.querySelector("#carouselNext");
let carouselIndex = 0;

if (carouselDotsContainer) {
  carouselSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show photo ${index + 1}`);
    dot.addEventListener("click", () => showCarouselSlide(index));
    carouselDotsContainer.append(dot);
  });
}

const carouselDots = document.querySelectorAll(".carousel-dot");

const languageKey = "clean-shores-uae-language";

function showCarouselSlide(index) {
  carouselIndex = (index + carouselSlides.length) % carouselSlides.length;
  carouselSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === carouselIndex;
    slide.classList.toggle("is-active", isActive);
    if (!isActive && slide instanceof HTMLVideoElement) {
      slide.pause();
    }
  });
  carouselDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === carouselIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", String(isActive));
  });
}

carouselPrevious?.addEventListener("click", () => showCarouselSlide(carouselIndex - 1));
carouselNext?.addEventListener("click", () => showCarouselSlide(carouselIndex + 1));
if (carouselSlides.length > 1) {
  window.setInterval(() => {
    if (!(carouselSlides[carouselIndex] instanceof HTMLVideoElement)) {
      showCarouselSlide(carouselIndex + 1);
    }
  }, 5500);
}

const translations = {
  en: {
    documentTitle: "Clean Shores UAE | Protect Beaches Together",
    metaDescription: "Public platform for cleaner beaches in the UAE with coastal campaigns, community posts, cleanup spot directory, and open volunteer participation.",
    brandTitle: "Clean Shores UAE",
    brandSubtitle: "For beaches, community and action",
    navMission: "Mission",
    navMedia: "Media",
    navSpots: "Spots",
    navCommunity: "Community",
    heroEyebrow: "UAE Environmental Initiative",
    heroTitle: "Bringing people across the UAE together for cleaner beaches and a healthier environment.",
    heroText: "This website helps popularize litter cleanups, coastal protection and public participation by giving people one place to share stories, publish media and suggest beach areas that need attention.",
    heroPrimaryCta: "Publish a post",
    heroSecondaryCta: "Find a cleanup spot",
    heroImageAlt: "UAE shoreline and nature",
    heroCardLabel: "Main Goal",
    heroCardTitle: "Our mission is to protect UAE beaches",
    heroCardText: "by turning cleanup ideas into shared community action.",
    missionEyebrow: "Why This Matters",
    missionTitle: "A public platform that turns environmental care into shared action.",
    stat1Label: "Photos and videos",
    stat1Title: "Media Hub",
    stat1Text: "Explore and share visuals from cleanup events, eco campaigns and field activities across the country.",
    stat2Label: "Suggested places",
    stat2Title: "Cleanup Spots",
    stat2Text: "Locate and recommend beaches and coastal areas in the UAE that need urgent cleanup attention.",
    stat3Label: "Conversation",
    stat3Title: "Open Discussion",
    stat3Text: "People can share thoughts, ideas, experiences and discuss local environmental initiatives.",
    mediaEyebrow: "Conservation in Action",
    mediaTitle: "Documenting our coastal conservation efforts across the Emirates.",
    mediaImageAlt: "Green natural coastal area",
    mediaFeatureTitle: "Active Shoreline Restoration",
    mediaFeatureText: "Our volunteer teams regularly survey, clean, and protect UAE shorelines, safeguarding sensitive marine ecosystems for future generations.",
    mediaListTitle: "Our Key Programs",
    mediaList1: "Community weekend coastal cleanups",
    mediaList2: "Marine debris auditing & sorting",
    mediaList3: "Youth & school conservation workshops",
    mediaList4: "Pollution hotspot documentation & advocacy",
    uploadTitle: "Share Your Action Media",
    uploadText: "Participated in a recent coastal cleanup? Submit your photos and video clips to be highlighted on our community wall.",
    uploadCta: "Contribute to Community Wall",
    uploadPhotoLabel: "Upload photo",
    uploadVideoLabel: "Upload video",
    spotsEyebrow: "Coastal Directory",
    spotsTitle: "Priority UAE beach areas highlighted for community cleanup action.",
    spotStatSpots: "Monitored Locations",
    spotStatEmirates: "Emirates Covered",
    spotStatVolunteer: "Community Driven",
    filterAll: "All Emirates",
    filterDubai: "Dubai",
    filterAbuDhabi: "Abu Dhabi",
    filterSharjah: "Sharjah",
    filterAjman: "Ajman",
    filterNorthern: "Northern Emirates",
    spotsSearchPlaceholder: "Search by beach name, emirate, or keyword...",
    spotsEmptyState: "No cleanup spots match your search. Try another keyword or filter.",
    spotDirections: "Get Directions",
    spotNominate: "Nominate for Cleanup",
    spotDebrisLabel: "Target Debris:",
    spotAmenitiesLabel: "Facilities:",
    spot1Badge: "High Priority",
    spot1Title: "Jumeirah Open Beach",
    spot1Text: "A high-footfall public stretch where morning volunteer sweeps remove tidal debris and tourist litter before it washes out into Gulf waters.",
    spot1Debris: "Single-use plastics, bottle caps, food wrappers",
    spot1Amenities: "Public parking, recycling bins, family walking paths",
    spot2Badge: "Active Monitoring",
    spot2Title: "Kite Beach & Canal Edge",
    spot2Text: "A lively water-sports hub with extensive shoreline. Ideal for targeted microplastic collection and community education along the dunes.",
    spot2Debris: "Microplastics, beverage cups, straws, bottle caps",
    spot2Amenities: "Paved promenade, washrooms, shade areas",
    spot3Badge: "Family Friendly",
    spot3Title: "Abu Dhabi Corniche Beach",
    spot3Text: "An expansive urban shoreline perfect for large school and corporate eco-days, volunteer orientations, and organized debris audits.",
    spot3Debris: "Snack wrappers, beverage cans, plastic bottles",
    spot3Amenities: "Multiple parking plazas, shaded lawns, accessible pathways",
    spot4Badge: "Protected Reserve",
    spot4Title: "Saadiyat Marine & Coastal Reserve",
    spot4Text: "A critical nesting ground for endangered Hawksbill turtles. Cleanups focus on clearing discarded marine ropes and tangled plastic flotsam.",
    spot4Debris: "Abandoned fishing lines, ropes, floating plastics",
    spot4Amenities: "Designated eco-boardwalks, restricted dunes",
    spot5Badge: "Community Hub",
    spot5Title: "Al Heera Beach",
    spot5Text: "A major gathering hub along the Sharjah coastline where active youth volunteer squads coordinate weekend cleanups and promote waste separation.",
    spot5Debris: "Beverage cans, takeaway containers, plastic bags",
    spot5Amenities: "Wide parking bays, seaside promenade, waste bins",
    spot6Badge: "High Priority",
    spot6Title: "Al Khan Beach & Lagoon",
    spot6Text: "Adjoining the historical lagoon and maritime heritage area, tidal shifts deposit concentrated marine debris that requires urgent attention.",
    spot6Debris: "Fishing gear remnants, polystyrene foam, bottles",
    spot6Amenities: "Museum parking, maritime center, public access",
    spot7Badge: "Active Monitoring",
    spot7Title: "Ajman Public Beachfront",
    spot7Text: "A central coastal stretch heavily visited by families. Routine volunteer patrols help prevent windblown debris from entering the water.",
    spot7Debris: "Fast-food packaging, plastic bottles, straws",
    spot7Amenities: "Corniche parking, solar lighting, waste bins",
    spot8Badge: "Ecology Hotspot",
    spot8Title: "Al Zorah Mangrove Coast",
    spot8Text: "A precious wetland and coastal mangrove forest sheltering migratory flamingos and coastal birds. Requires gentle, non-intrusive perimeter sweeps.",
    spot8Debris: "Entangled plastic bags, styrofoam foam, drift bottles",
    spot8Amenities: "Nature reserve boundary, kayak launch, eco-trails",
    spotSuggestTitle: "Know another shoreline that needs urgent attention?",
    spotSuggestText: "Help us expand our coastal map. Recommend a polluted beach or mangrove inlet on our Community Wall so local volunteers can take action.",
    spotSuggestBtn: "Nominate a New Spot",
    communityEyebrow: "Community Wall",
    communityTitle: "A collaborative platform to share field reports, propose cleanups, and exchange ideas.",
    formTitle: "Publish a message",
    formIntro: "Submit a cleanup report, suggest a polluted beach, or share your environmental story with volunteers across the UAE.",
    authorLabel: "Your name",
    authorPlaceholder: "For example, Amina",
    typeLabel: "Post type",
    typeThought: "Thought",
    typeCleanup: "Cleanup recommendation",
    typePhoto: "Photo report",
    typeDiscussion: "Discussion",
    locationLabel: "Location in the UAE",
    locationPlaceholder: "For example, Jumeirah Beach, Dubai",
    mediaLabel: "Photo or video link",
    mediaPlaceholder: "https://example.com/photo.jpg",
    mediaFileLabel: "Upload photo or video",
    messageLabel: "Your message",
    messagePlaceholder: "Share an idea, a beach area, a concern or a story from a cleanup.",
    submitButton: "Publish",
    feedTitle: "Community feed",
    feedIntro: "Real-time reports, recommendations, and field updates shared by active volunteers across the Emirates.",
    ctaEyebrow: "Join the Movement",
    ctaTitle: "Ready to make a tangible impact on UAE coastlines?",
    ctaText: "Every plastic bottle removed, every shoreline surveyed, and every volunteer trained brings us closer to pristine waters and thriving marine habitats.",
    ctaButton: "Get Involved Today",
    footerBrandTitle: "Clean Shores UAE",
    footerBrandSubtitle: "For beaches, community and action",
    footerDesc: "An independent environmental initiative championing pristine coastlines, marine biodiversity conservation, and public participation across the United Arab Emirates.",
    footerNavTitle: "Quick Navigation",
    footerNavMission: "Mission",
    footerNavMedia: "Media Gallery",
    footerNavSpots: "Cleanup Spots",
    footerNavCommunity: "Community Wall",
    footerEmiratesTitle: "Emirates Monitored",
    footerCopyright: "© 2026 Clean Shores UAE. Dedicated to clean coasts and marine preservation.",
    footerTagline: "Protecting our oceans, one shore at a time.",
    postMediaText: "Open photo / video",
    defaultAuthor: "Community member",
    defaultType: "Post",
    emptyFeed: "No posts yet. Be the first person to share a cleanup idea.",
    loadingFeed: "Loading community posts...",
    invalidForm: "Please add your name and message before publishing.",
    formSuccess: "Post published successfully.",
    formError: "Unable to save your post right now. Please check your connection and try again.",
    formLoading: "Publishing..."
  },
  ru: {
    documentTitle: "Clean Shores UAE | Чистые пляжи вместе",
    metaDescription: "Публичный портал о чистоте пляжей в ОАЭ: экологические акции, публикации сообщества, каталог мест для уборки и участие волонтёров.",
    brandTitle: "Clean Shores UAE",
    brandSubtitle: "Для пляжей, сообщества и действий",
    navMission: "Миссия",
    navMedia: "Медиа",
    navSpots: "Места",
    navCommunity: "Сообщество",
    heroEyebrow: "Экологическая инициатива ОАЭ",
    heroTitle: "Объединяем людей по всему ОАЭ ради чистых пляжей и здоровой окружающей среды.",
    heroText: "Этот сайт помогает популяризировать уборку мусора, защиту побережья и участие общества, собирая в одном месте истории, медиа и рекомендации пляжных зон, которым нужна помощь.",
    heroPrimaryCta: "Опубликовать пост",
    heroSecondaryCta: "Найти место для уборки",
    heroImageAlt: "Побережье ОАЭ и природа",
    heroCardLabel: "Главная цель",
    heroCardTitle: "Наша миссия — защищать пляжи ОАЭ",
    heroCardText: "превращая идеи уборок в совместные действия сообщества.",
    missionEyebrow: "Почему это важно",
    missionTitle: "Публичный портал, который превращает заботу о природе в совместное действие.",
    stat1Label: "Фото и видео",
    stat1Title: "Медиа-хаб",
    stat1Text: "Смотрите и делитесь материалами с уборок, акций и экологических выездов по всей стране.",
    stat2Label: "Рекомендуемые места",
    stat2Title: "Точки уборки",
    stat2Text: "Находите и советуйте пляжи и прибрежные зоны в ОАЭ, которым срочно требуется уборка.",
    stat3Label: "Общение",
    stat3Title: "Открытое обсуждение",
    stat3Text: "Люди могут делиться мыслями, идеями, опытом и обсуждать локальные экологические инициативы.",
    mediaEyebrow: "Инициатива в действии",
    mediaTitle: "Хроника наших экологических акций на побережье ОАЭ.",
    mediaImageAlt: "Зелёная прибрежная зона",
    mediaFeatureTitle: "Реальное восстановление берегов",
    mediaFeatureText: "Команды волонтёров регулярно обследуют, очищают и защищают пляжи ОАЭ, сохраняя уникальные морские экосистемы для будущих поколений.",
    mediaListTitle: "Ключевые направления",
    mediaList1: "Организованные прибрежные субботники",
    mediaList2: "Сортировка и учёт собранного пластика",
    mediaList3: "Экологические воркшопы для школ и молодёжи",
    mediaList4: "Мониторинг загрязнений и гражданские отчёты",
    uploadTitle: "Поделитесь материалами с акций",
    uploadText: "Участвовали в уборке берега? Опубликуйте свои фото или видео на нашей стене сообщества.",
    uploadCta: "Добавить на стену сообщества",
    uploadPhotoLabel: "Загрузить фото",
    uploadVideoLabel: "Загрузить видео",
    spotsEyebrow: "Каталог побережья",
    spotsTitle: "Прибрежные зоны ОАЭ, требующие внимания и проведения экологических уборок.",
    spotStatSpots: "Точек на контроле",
    spotStatEmirates: "Эмиратов охвачено",
    spotStatVolunteer: "Участие сообщества",
    filterAll: "Все эмираты",
    filterDubai: "Дубай",
    filterAbuDhabi: "Абу-Даби",
    filterSharjah: "Шарджа",
    filterAjman: "Аджман",
    filterNorthern: "Северные эмираты",
    spotsSearchPlaceholder: "Поиск по названию пляжа, эмирату или ключевому слову...",
    spotsEmptyState: "Места не найдены. Попробуйте изменить поисковый запрос или фильтр.",
    spotDirections: "Маршрут на карте",
    spotNominate: "Выбрать для уборки",
    spotDebrisLabel: "Основной мусор:",
    spotAmenitiesLabel: "Инфраструктура:",
    spot1Badge: "Высокий приоритет",
    spot1Title: "Jumeirah Open Beach",
    spot1Text: "Популярный общественный пляж, где утренние рейды волонтёров удаляют приливной мусор и пластик до того, как он попадёт в залив.",
    spot1Debris: "Пластиковые бутылки, крышки, упаковка от еды",
    spot1Amenities: "Общественная парковка, урны для раздельного сбора, дорожки",
    spot2Badge: "Постоянный мониторинг",
    spot2Title: "Kite Beach и канал",
    spot2Text: "Оживлённая зона водных видов спорта с протяжённым берегом. Идеальна для сбора микропластика и экопросвещения вдоль дюн.",
    spot2Debris: "Микропластик, стаканчики, трубочки, крышки",
    spot2Amenities: "Пешеходная набережная, санузлы, теневые навесы",
    spot3Badge: "Для всей семьи",
    spot3Title: "Abu Dhabi Corniche Beach",
    spot3Text: "Просторная городская набережная, прекрасно подходящая для школьных и корпоративных эко-дней, инструктажей и аудита отходов.",
    spot3Debris: "Упаковки от снеков, жестяные банки, бутылки",
    spot3Amenities: "Парковочные зоны, тенистые газоны, удобный спуск к воде",
    spot4Badge: "Заповедная зона",
    spot4Title: "Морской заповедник Saadiyat",
    spot4Text: "Критически важное место гнездования морских черепах бисса. Акцент на очистку от старых рыболовных канатов и плавающего мусора.",
    spot4Debris: "Остатки рыболовных снастей, верёвки, пластиковый мусор",
    spot4Amenities: "Оборудованные эко-настилы, охраняемые дюны",
    spot5Badge: "Молодёжный центр",
    spot5Title: "Al Heera Beach",
    spot5Text: "Популярное место отдыха в Шардже, где молодёжные команды волонтёров проводят регулярные субботники и разделяют отходы.",
    spot5Debris: "Алюминиевые банки, контейнеры для еды, пакеты",
    spot5Amenities: "Широкая парковка, прогулочная зона, контейнеры для мусора",
    spot6Badge: "Высокий приоритет",
    spot6Title: "Пляж и лагуна Al Khan",
    spot6Text: "Прилегает к исторической лагуне и морскому музею. Приливы приносят плотный слой морского мусора, требующего оперативной уборки.",
    spot6Debris: "Обрывки сетей, пенопласт, бутылки",
    spot6Amenities: "Парковка у музея, морской центр, свободный доступ",
    spot7Badge: "Постоянный мониторинг",
    spot7Title: "Городской пляж Аджмана",
    spot7Text: "Центральная прибрежная линия, популярная среди семей. Регулярные патрули помогают предотвратить унос мусора ветром в море.",
    spot7Debris: "Пакеты от фастфуда, пластиковые бутылки, трубочки",
    spot7Amenities: "Парковка вдоль набережной, освещение, урны",
    spot8Badge: "Эко-жемчужина",
    spot8Title: "Мангровый берег Al Zorah",
    spot8Text: "Ценные водно-болотные угодья и мангровые заросли с фламинго и редкими птицами. Требует бережной точечной очистки по периметру.",
    spot8Debris: "Застрявшие в корнях пакеты, пенопласт, пластиковая тара",
    spot8Amenities: "Граница природного резервата, прокат каяков, эко-тропы",
    spotSuggestTitle: "Знаете пляж, которому срочно требуется уборка?",
    spotSuggestText: "Помогите расширить нашу карту. Предложите загрязнённый участок на Стене сообщества, чтобы волонтёры могли объединиться для акции.",
    spotSuggestBtn: "Предложить новую точку",
    communityEyebrow: "Стена сообщества",
    communityTitle: "Открытая площадка для отчётов с акций, предложений локаций и обмена идеями.",
    formTitle: "Опубликовать сообщение",
    formIntro: "Отправьте отчёт об уборке, порекомендуйте пляж или поделитесь экологической историей с волонтёрами по всему ОАЭ.",
    authorLabel: "Ваше имя",
    authorPlaceholder: "Например, Amina",
    typeLabel: "Тип публикации",
    typeThought: "Мысль",
    typeCleanup: "Рекомендация места",
    typePhoto: "Фотоотчёт",
    typeDiscussion: "Обсуждение",
    locationLabel: "Локация в ОАЭ",
    locationPlaceholder: "Например, Jumeirah Beach, Dubai",
    mediaLabel: "Ссылка на фото или видео",
    mediaPlaceholder: "https://example.com/photo.jpg",
    mediaFileLabel: "Загрузить фото или видео",
    messageLabel: "Ваш текст",
    messagePlaceholder: "Поделитесь идеей, местом, проблемой или историей с уборки.",
    submitButton: "Опубликовать",
    feedTitle: "Лента сообщества",
    feedIntro: "Актуальные отчёты, рекомендации и полевые новости от волонтёров со всего ОАЭ.",
    ctaEyebrow: "Присоединяйтесь к движению",
    ctaTitle: "Готовы внести свой вклад в чистоту побережий ОАЭ?",
    ctaText: "Каждая убранная пластиковая бутылка, каждый исследованный берег и каждый новый участник приближают нас к чистому морю и сохранению морской фауны.",
    ctaButton: "Участвовать",
    footerBrandTitle: "Clean Shores UAE",
    footerBrandSubtitle: "Для пляжей, сообщества и действий",
    footerDesc: "Независимая экологическая инициатива за сохранение чистоты побережий, защиту морского биоразнообразия и общественное участие в ОАЭ.",
    footerNavTitle: "Навигация",
    footerNavMission: "Миссия",
    footerNavMedia: "Медиа-галерея",
    footerNavSpots: "Точки уборки",
    footerNavCommunity: "Сообщество",
    footerEmiratesTitle: "Охваченные эмираты",
    footerCopyright: "© 2026 Clean Shores UAE. Посвящено защите берегов и морской жизни.",
    footerTagline: "Защищаем океан берег за берегом.",
    postMediaText: "Открыть фото / видео",
    defaultAuthor: "Участник сообщества",
    defaultType: "Публикация",
    emptyFeed: "Пока нет публикаций. Станьте первым, кто поделится идеей уборки.",
    loadingFeed: "Загружаем публикации сообщества...",
    invalidForm: "Добавьте имя и текст сообщения перед публикацией.",
    formSuccess: "Пост успешно опубликован.",
    formError: "Не удалось сохранить публикацию. Пожалуйста, проверьте подключение и повторите попытку.",
    formLoading: "Публикация..."
  },
  ar: {
    documentTitle: "Clean Shores UAE | شواطئ أنظف معاً",
    metaDescription: "منصة مجتمعية لنظافة الشواطئ في الإمارات مع حملات بيئية ودليل لمواقع التنظيف ومشاركة تطوعية مفتوحة.",
    brandTitle: "Clean Shores UAE",
    brandSubtitle: "للشواطئ والمجتمع والعمل",
    navMission: "المهمة",
    navMedia: "الوسائط",
    navSpots: "المواقع",
    navCommunity: "المجتمع",
    heroEyebrow: "مبادرة بيئية في الإمارات",
    heroTitle: "نجمع الناس في أنحاء الإمارات من أجل شواطئ أنظف وبيئة أكثر صحة.",
    heroText: "يساعد هذا الموقع على نشر ثقافة تنظيف النفايات وحماية السواحل والمشاركة المجتمعية عبر مساحة واحدة لمشاركة القصص ونشر الوسائط واقتراح الشواطئ التي تحتاج إلى اهتمام.",
    heroPrimaryCta: "انشر مشاركة",
    heroSecondaryCta: "اعثر على موقع تنظيف",
    heroImageAlt: "ساحل الإمارات والطبيعة",
    heroCardLabel: "الهدف الرئيسي",
    heroCardTitle: "مهمتنا حماية شواطئ الإمارات",
    heroCardText: "من خلال تحويل أفكار التنظيف إلى عمل مجتمعي مشترك.",
    missionEyebrow: "لماذا هذا مهم",
    missionTitle: "منصة عامة تحوّل العناية بالبيئة إلى عمل جماعي.",
    stat1Label: "الصور والفيديو",
    stat1Title: "مركز الوسائط",
    stat1Text: "استكشف وشارك المواد المصورة من فعاليات التنظيف والحملات البيئية في كافة أرجاء الدولة.",
    stat2Label: "الأماكن المقترحة",
    stat2Title: "مواقع التنظيف",
    stat2Text: "اكتشف واقترح الشواطئ والمناطق الساحلية في الإمارات التي تحتاج إلى تنظيف عاجل.",
    stat3Label: "النقاش",
    stat3Title: "حوار مفتوح",
    stat3Text: "يمكن للناس مشاركة الأفكار والتجارب ومناقشة المبادرات البيئية المحلية.",
    mediaEyebrow: "المبادرة في الميدان",
    mediaTitle: "توثيق جهودنا لحماية السواحل في مختلف أنحاء الإمارات.",
    mediaImageAlt: "منطقة ساحلية طبيعية خضراء",
    mediaFeatureTitle: "إعادة تأهيل الشواطئ",
    mediaFeatureText: "تعمل فرق المتطوعين بانتظام على فحص الشواطئ وتنظيفها وحمايتها في دولة الإمارات للحفاظ على النظم البيئية البحرية للأجيال القادمة.",
    mediaListTitle: "برامجنا الأساسية",
    mediaList1: "حملات تنظيف مجتمعية في عطلة نهاية الأسبوع",
    mediaList2: "فرز النفايات البحرية وإحصاؤها",
    mediaList3: "ورش عمل بيئية للمدارس والشباب",
    mediaList4: "توثيق المناطق المتضررة والدعوة لحمايتها",
    uploadTitle: "شارك صور وفيديوهات الفعاليات",
    uploadText: "هل شاركت في حملة تنظيف شاطئية مؤخراً؟ شارك صورك ومقاطع الفيديو على جدار المجتمع لنشرها في حملتنا الوطنية.",
    uploadCta: "أضف إلى جدار المجتمع",
    uploadPhotoLabel: "رفع صورة",
    uploadVideoLabel: "رفع فيديو",
    spotsEyebrow: "دليل السواحل",
    spotsTitle: "شواطئ ذات أولوية في الإمارات تحتاج إلى حملات تنظيف مجتمعية.",
    spotStatSpots: "موقع تحت المراقبة",
    spotStatEmirates: "إمارات مغطاة",
    spotStatVolunteer: "مبادرة مجتمعية",
    filterAll: "جميع الإمارات",
    filterDubai: "دبي",
    filterAbuDhabi: "أبوظبي",
    filterSharjah: "الشارقة",
    filterAjman: "عجمان",
    filterNorthern: "الإمارات الشمالية",
    spotsSearchPlaceholder: "ابحث باسم الشاطئ أو الإمارة أو كلمة مفتاحية...",
    spotsEmptyState: "لم يتم العثور على مواقع مطابقة. جرب كلمة بحث أو تصنيفاً آخر.",
    spotDirections: "عرض على الخريطة",
    spotNominate: "ترشيح للتنظيف",
    spotDebrisLabel: "النفايات الشائعة:",
    spotAmenitiesLabel: "المرافق:",
    spot1Badge: "أولوية قصوى",
    spot1Title: "شاطئ جميرا المفتوح",
    spot1Text: "شاطئ عام حيوي تتطلب حمايته حملات صباحية لإزالة النفايات ومخلفات الزوار قبل جرفها إلى مياه الخليج.",
    spot1Debris: "بلاستيك أحادي الاستخدام، أغطية قوارير، أغلفة طعام",
    spot1Amenities: "مواقف عامة، حاويات فرز، مسارات مشي",
    spot2Badge: "مراقبة مستمرة",
    spot2Title: "كايت بيتش وأطراف القناة",
    spot2Text: "مركز للرياضات الشاطئية؛ مثالي لجمع جزيئات البلاستيك الدقيقة والتوعية البيئية بجوار الكثبان الرملية.",
    spot2Debris: "بلاستيك دقيق، أكواب مشروبات، قشات، أغطية",
    spot2Amenities: "ممشى معبد، دورات مياه، مناطق مظللة",
    spot3Badge: "مناسب للعائلات",
    spot3Title: "شاطئ كورنيش أبوظبي",
    spot3Text: "واجهة شاطئية عائلية فسيحة مثالية للفعاليات المدرسية والمؤسسية وحملات التدقيق البيئي.",
    spot3Debris: "أغلفة وجبات، علب مشروبات، عبوات بلاستيكية",
    spot3Amenities: "مواقف متعددة، مسطحات خضراء، وصول ميسر",
    spot4Badge: "محمية طبيعية",
    spot4Title: "محمية السعديات البحرية",
    spot4Text: "موطن هام لتعشيش سلاحف منقار الصقر. تركز الحملات على إزالة حبال الصيد والشباك العالقة.",
    spot4Debris: "شباك صيد مهملة، حبال، بلاستيك طافٍ",
    spot4Amenities: "ممرات خشبية بيئية، كثبان رملية محمية",
    spot5Badge: "ملتقى مجتمعي",
    spot5Title: "شاطئ الحيرة",
    spot5Text: "وجهة ساحلية بارزة في الشارقة تنشط فيها المجموعات الشبابية لتنظيم حملات نهاية الأسبوع وفرز النفايات.",
    spot5Debris: "علب مشروبات، عبوات طعام سريعة، أكياس بلاستيكية",
    spot5Amenities: "مواقف سيارات واسعة، ممشى ساحلي، حاويات نفايات",
    spot6Badge: "أولوية قصوى",
    spot6Title: "شاطئ الخان والبحيرة",
    spot6Text: "محاذٍ للمنطقة التراثية والبحرية، حيث تتجمع بفعل التيارات مخلفات بحرية تحتاج لتدخل دوري سريع.",
    spot6Debris: "مخلفات شباك الصيد، بوليسترين، عبوات بلاستيكية",
    spot6Amenities: "مواقف متحف التراث، مركز بحري، وصول عام",
    spot7Badge: "مراقبة مستمرة",
    spot7Title: "واجهة عجمان الشاطئية",
    spot7Text: "امتداد شاطئي رئيسي للعائلات، وتساعد الدوريات التطوعية على منع تطاير النفايات إلى مياه البحر.",
    spot7Debris: "أغلفة وجبات سريعة، عبوات بلاستيكية، قشات",
    spot7Amenities: "مواقف على الكورنيش، إنارة بالطاقة الشمسية، حاويات",
    spot8Badge: "بقعة بيئية هامة",
    spot8Title: "ساحل أشجار القرم بالزوراء",
    spot8Text: "أراضٍ رطبة وغابات قرم ساحلية فريدة تأوي طيور الفلامنجو. يتطلب حملات تنظيف حذرة غير مزعجة للبيئة.",
    spot8Debris: "أكياس بلاستيكية عالقة، فلين صناعي، عبوات منجرفة",
    spot8Amenities: "حدود المحمية الطبيعية، منصة قوارب كاياك، مسارات بيئية",
    spotSuggestTitle: "هل تعرف شاطئاً يحتاج إلى تنظيف عاجل؟",
    spotSuggestText: "ساعدنا في توسيع خريطتنا الساحلية. اقترح شاطئاً متضرراً على جدار المجتمع ليتعاون المتطوعون في تنظيفه.",
    spotSuggestBtn: "اقترح موقعاً جديداً",
    communityEyebrow: "جدار المجتمع",
    communityTitle: "منصة تفاعلية لمشاركة التقارير الميدانية واقتراح الحملات وتبادل الأفكار.",
    formTitle: "انشر رسالة",
    formIntro: "أرسل تقريراً عن تنظيف، أو اقترح شاطئاً بحاجة لعناية، أو شارك تجربتك البيئية مع المتطوعين في الإمارات.",
    authorLabel: "اسمك",
    authorPlaceholder: "على سبيل المثال Amina",
    typeLabel: "نوع المشاركة",
    typeThought: "فكرة",
    typeCleanup: "اقتراح موقع تنظيف",
    typePhoto: "تقرير صور",
    typeDiscussion: "نقاش",
    locationLabel: "الموقع في الإمارات",
    locationPlaceholder: "على سبيل المثال Jumeirah Beach, Dubai",
    mediaLabel: "رابط صورة أو فيديو",
    mediaPlaceholder: "https://example.com/photo.jpg",
    mediaFileLabel: "ارفع صورة أو فيديو",
    messageLabel: "رسالتك",
    messagePlaceholder: "شارك فكرة أو موقعاً أو مشكلة أو قصة من حملة تنظيف.",
    submitButton: "نشر",
    feedTitle: "منشورات المجتمع",
    feedIntro: "تقارير وتوصيات وتحديثات ميدانية من المتطوعين في جميع أنحاء الإمارات.",
    ctaEyebrow: "انضم إلى المبادرة",
    ctaTitle: "هل أنت مستعد لإحداث أثر حقيقي في شواطئ الإمارات؟",
    ctaText: "كل عبوة بلاستيكية تُزال، وكل شاطئ يُحمى، يقرّبنا خطوة نحو بحار نقية وحياة فطرية مزدهرة.",
    ctaButton: "شارك معنا اليوم",
    footerBrandTitle: "Clean Shores UAE",
    footerBrandSubtitle: "للشواطئ والمجتمع والعمل",
    footerDesc: "مبادرة بيئية مجتمعية مستقلة تهدف للحفاظ على نظافة السواحل وحماية التنوع الحيوي البحري وتعزيز المشاركة العامة في دولة الإمارات.",
    footerNavTitle: "روابط سريعة",
    footerNavMission: "المهمة",
    footerNavMedia: "معرض الوسائط",
    footerNavSpots: "مواقع التنظيف",
    footerNavCommunity: "جدار المجتمع",
    footerEmiratesTitle: "الإمارات المشمولة",
    footerCopyright: "© 2026 Clean Shores UAE. مكرس لحماية الشواطئ والحياة البحرية.",
    footerTagline: "نحمي محيطاتنا، شاطئاً تلو الآخر.",
    postMediaText: "افتح الصورة / الفيديو",
    defaultAuthor: "عضو في المجتمع",
    defaultType: "منشور",
    emptyFeed: "لا توجد منشورات بعد. كن أول من يشارك فكرة تنظيف.",
    loadingFeed: "جارٍ تحميل منشورات المجتمع...",
    invalidForm: "أضف اسمك ورسالتك قبل النشر.",
    formSuccess: "تم نشر المشاركة بنجاح.",
    formError: "تعذر حفظ المشاركة حالياً. يرجى التحقق من الاتصال والمحاولة مجدداً.",
    formLoading: "جارٍ النشر..."
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.18 });

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
  observer.observe(item);
});

function getCurrentLanguage() {
  const saved = window.localStorage.getItem(languageKey);
  return translations[saved] ? saved : "en";
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function setPlaceholder(id, value) {
  const node = document.getElementById(id);
  if (node) node.placeholder = value;
}

function setStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.style.color = isError ? "#b42318" : "";
}

function renderFeedState(message) {
  feedList.innerHTML = "";

  const state = document.createElement("p");
  state.className = "feed-state";
  state.textContent = message;
  feedList.append(state);
}

function getMediaKind(post) {
  if (post.mediaType) return post.mediaType;
  if (/\.(mp4|webm|mov)(\?.*)?$/i.test(post.media || "")) return "video";
  if (/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(post.media || "")) return "image";
  return "link";
}

function formatPostDate(value, lang) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(lang, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function renderMediaPreview(container, post) {
  if (!post.media) {
    container.remove();
    return;
  }

  const mediaKind = getMediaKind(post);

  if (mediaKind === "image") {
    const image = document.createElement("img");
    image.src = post.media;
    image.alt = post.message || post.location || "Community media";
    image.loading = "lazy";
    container.append(image);
    return;
  }

  if (mediaKind === "video") {
    const video = document.createElement("video");
    video.src = post.media;
    video.controls = true;
    video.preload = "metadata";
    container.append(video);
    return;
  }

  container.remove();
}

function applyLanguage(lang) {
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.documentTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", t.metaDescription);

  [
    "brandTitle", "brandSubtitle", "navMission", "navMedia", "navSpots", "navCommunity",
    "heroEyebrow", "heroTitle", "heroText", "heroPrimaryCta", "heroSecondaryCta",
    "heroCardLabel", "heroCardTitle", "heroCardText", "missionEyebrow", "missionTitle",
    "stat1Label", "stat1Title", "stat1Text", "stat2Label", "stat2Title", "stat2Text",
    "stat3Label", "stat3Title", "stat3Text", "mediaEyebrow", "mediaTitle",
    "mediaFeatureTitle", "mediaFeatureText", "mediaListTitle", "mediaList1", "mediaList2",
    "mediaList3", "mediaList4", "uploadTitle", "uploadText", "uploadCta",
    "spotsEyebrow", "spotsTitle", "spotStatSpots", "spotStatEmirates",
    "spotStatVolunteer", "filterAll", "filterDubai", "filterAbuDhabi", "filterSharjah",
    "filterAjman", "filterNorthern", "spotsEmptyState",
    "spot1Badge", "spot1Title", "spot1Text", "spot1Debris", "spot1Amenities",
    "spot2Badge", "spot2Title", "spot2Text", "spot2Debris", "spot2Amenities",
    "spot3Badge", "spot3Title", "spot3Text", "spot3Debris", "spot3Amenities",
    "spot4Badge", "spot4Title", "spot4Text", "spot4Debris", "spot4Amenities",
    "spot5Badge", "spot5Title", "spot5Text", "spot5Debris", "spot5Amenities",
    "spot6Badge", "spot6Title", "spot6Text", "spot6Debris", "spot6Amenities",
    "spot7Badge", "spot7Title", "spot7Text", "spot7Debris", "spot7Amenities",
    "spot8Badge", "spot8Title", "spot8Text", "spot8Debris", "spot8Amenities",
    "spotSuggestTitle", "spotSuggestText", "spotSuggestBtn",
    "communityEyebrow", "communityTitle", "formTitle", "formIntro",
    "authorLabel", "typeLabel", "typeThought", "typeCleanup", "typePhoto",
    "typeDiscussion", "locationLabel", "mediaLabel", "mediaFileLabel", "messageLabel",
    "submitButton", "feedTitle", "feedIntro", "ctaEyebrow", "ctaTitle", "ctaText", "ctaButton",
    "footerBrandTitle", "footerBrandSubtitle", "footerDesc", "footerNavTitle",
    "footerNavMission", "footerNavMedia", "footerNavSpots", "footerNavCommunity",
    "footerEmiratesTitle", "footerCopyright", "footerTagline"
  ].forEach((key) => setText(key, t[key]));

  setPlaceholder("authorInput", t.authorPlaceholder);
  setPlaceholder("locationInput", t.locationPlaceholder);
  setPlaceholder("mediaInput", t.mediaPlaceholder);
  setPlaceholder("messageInput", t.messagePlaceholder);
  setPlaceholder("spotsSearchInput", t.spotsSearchPlaceholder);

  document.querySelectorAll(".spot-directions-text").forEach((el) => {
    el.textContent = t.spotDirections;
  });
  document.querySelectorAll(".spot-nominate-text").forEach((el) => {
    el.textContent = t.spotNominate;
  });
  document.querySelectorAll(".spot-debris-label").forEach((el) => {
    el.textContent = t.spotDebrisLabel;
  });
  document.querySelectorAll(".spot-amenities-label").forEach((el) => {
    el.textContent = t.spotAmenitiesLabel;
  });

  document.getElementById("heroVideo").setAttribute("aria-label", t.heroImageAlt);
  document.getElementById("mediaImage").alt = t.mediaImageAlt;

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  loadPosts(lang);
}

function renderPost(post, lang) {
  const t = translations[lang];
  const fragment = postTemplate.content.cloneNode(true);
  const typeNode = fragment.querySelector(".post-type");
  const locationNode = fragment.querySelector(".post-location");
  const authorNode = fragment.querySelector(".post-author");
  const dateNode = fragment.querySelector(".post-date");
  const messageNode = fragment.querySelector(".post-message");
  const previewNode = fragment.querySelector(".post-preview");
  const mediaNode = fragment.querySelector(".post-media");

  typeNode.textContent = post.type || t.defaultType;
  locationNode.textContent = post.location || "UAE";
  authorNode.textContent = post.author || t.defaultAuthor;
  dateNode.textContent = formatPostDate(post.createdAt, lang);
  dateNode.dateTime = post.createdAt || "";
  messageNode.textContent = post.message || "";
  mediaNode.textContent = t.postMediaText;
  renderMediaPreview(previewNode, post);

  if (post.media) {
    mediaNode.href = post.media;
  } else {
    mediaNode.removeAttribute("href");
    mediaNode.classList.add("is-hidden");
  }

  feedList.append(fragment);
}

const localPostsKey = "clean-shores-uae-local-posts";

const fallbackSeedPosts = {
  en: [
    {
      id: "seed-en-1",
      author: "Sara",
      type: "Cleanup recommendation",
      location: "Jumeirah Beach, Dubai",
      message: "This area would benefit from a morning cleanup event on the weekend. It is popular, so the impact would be visible immediately.",
      media: "",
      createdAt: "2026-04-04T09:00:00.000Z"
    },
    {
      id: "seed-en-2",
      author: "Omar",
      type: "Thought",
      location: "Abu Dhabi Corniche",
      message: "I would love to see more schools and families joining beach cleanups. Regular events can really change habits over time.",
      media: "",
      createdAt: "2026-04-04T10:00:00.000Z"
    },
    {
      id: "seed-en-3",
      author: "Lina",
      type: "Photo report",
      location: "Al Heera Beach, Sharjah",
      message: "After a local cleanup, the shoreline looked much better. More waste collection points would make the result last longer.",
      media: "assets/20260301_110910.jpg",
      createdAt: "2026-04-04T11:00:00.000Z"
    }
  ],
  ru: [
    {
      id: "seed-ru-1",
      author: "Sara",
      type: "Рекомендация места",
      location: "Jumeirah Beach, Dubai",
      message: "На этом участке стоит провести утреннюю уборку в выходной день. Пляж популярный, поэтому результат будет заметен сразу.",
      media: "",
      createdAt: "2026-04-04T09:00:00.000Z"
    },
    {
      id: "seed-ru-2",
      author: "Omar",
      type: "Мысль",
      location: "Abu Dhabi Corniche",
      message: "Хочется, чтобы больше школ и семей присоединялись к уборкам пляжей. Регулярные мероприятия реально меняют привычки.",
      media: "",
      createdAt: "2026-04-04T10:00:00.000Z"
    },
    {
      id: "seed-ru-3",
      author: "Lina",
      type: "Фотоотчёт",
      location: "Al Heera Beach, Sharjah",
      message: "После локальной уборки берег стал заметно чище. Если добавить больше точек сбора отходов, эффект сохранится дольше.",
      media: "assets/20260301_110910.jpg",
      createdAt: "2026-04-04T11:00:00.000Z"
    }
  ],
  ar: [
    {
      id: "seed-ar-1",
      author: "Sara",
      type: "اقتراح موقع تنظيف",
      location: "Jumeirah Beach, Dubai",
      message: "هذه المنطقة مناسبة لفعالية تنظيف صباحية في عطلة نهاية الأسبوع. المكان مشهور، لذلك سيكون الأثر واضحاً بسرعة.",
      media: "",
      createdAt: "2026-04-04T09:00:00.000Z"
    },
    {
      id: "seed-ar-2",
      author: "Omar",
      type: "فكرة",
      location: "Abu Dhabi Corniche",
      message: "أتمنى أن تنضم مدارس وعائلات أكثر إلى حملات تنظيف الشواطئ. الفعاليات المنتظمة يمكن أن تغيّر العادات فعلاً.",
      media: "",
      createdAt: "2026-04-04T10:00:00.000Z"
    },
    {
      id: "seed-ar-3",
      author: "Lina",
      type: "تقرير صور",
      location: "Al Heera Beach, Sharjah",
      message: "بعد حملة تنظيف محلية أصبح الشاطئ أفضل بكثير. إضافة نقاط جمع نفايات أكثر ستساعد في استمرار النتيجة.",
      media: "assets/20260301_110910.jpg",
      createdAt: "2026-04-04T11:00:00.000Z"
    }
  ]
};

function getLocalPosts(lang) {
  try {
    const raw = window.localStorage.getItem(localPostsKey);
    if (!raw) return [];
    const all = JSON.parse(raw);
    return Array.isArray(all[lang]) ? all[lang] : [];
  } catch {
    return [];
  }
}

function saveLocalPost(lang, post) {
  try {
    const raw = window.localStorage.getItem(localPostsKey);
    const all = raw ? JSON.parse(raw) : { en: [], ru: [], ar: [] };
    if (!Array.isArray(all[lang])) all[lang] = [];
    all[lang].unshift(post);
    window.localStorage.setItem(localPostsKey, JSON.stringify(all));
  } catch (err) {
    console.warn("Could not save to localStorage", err);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function getMediaTypeFromUrl(url) {
  if (/\.(mp4|webm|mov)(\?.*)?$/i.test(url)) return "video";
  if (/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(url)) return "image";
  return "link";
}

async function loadPosts(lang) {
  renderFeedState(translations[lang].loadingFeed);

  try {
    let posts = [];
    let fetched = false;

    try {
      const response = await fetch(`/api/posts?lang=${encodeURIComponent(lang)}`);
      if (response.ok) {
        posts = await response.json();
        fetched = true;
      }
    } catch {
      // Backend not running / static hosting (GitHub Pages)
    }

    if (!fetched) {
      try {
        const jsonRes = await fetch("data/posts.json");
        if (jsonRes.ok) {
          const jsonPosts = await jsonRes.json();
          posts = jsonPosts[lang] || [];
        } else {
          posts = fallbackSeedPosts[lang] || [];
        }
      } catch {
        posts = fallbackSeedPosts[lang] || [];
      }

      const localPosts = getLocalPosts(lang);
      posts = [...localPosts, ...posts];
    }

    feedList.innerHTML = "";

    if (!posts.length) {
      renderFeedState(translations[lang].emptyFeed);
      return;
    }

    posts.forEach((post) => renderPost(post, lang));
  } catch {
    renderFeedState(translations[lang].formError);
  }
}

function mapType(value, lang) {
  const t = translations[lang];
  const typeMap = {
    thought: t.typeThought,
    cleanup: t.typeCleanup,
    photo: t.typePhoto,
    discussion: t.typeDiscussion
  };

  return typeMap[value] || t.defaultType;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const lang = getCurrentLanguage();
  const t = translations[lang];
  const author = document.querySelector("#authorInput").value.trim();
  const type = mapType(document.querySelector("#typeInput").value, lang);
  const location = document.querySelector("#locationInput").value.trim();
  const mediaLink = document.querySelector("#mediaInput").value.trim();
  const message = document.querySelector("#messageInput").value.trim();
  const mediaFileInput = document.querySelector("#mediaFileInput");
  const mediaFile = mediaFileInput?.files?.[0];

  if (!author || !message) {
    setStatus(t.invalidForm, true);
    return;
  }

  setStatus(t.formLoading);

  let postedToServer = false;

  try {
    const payload = new FormData();
    payload.append("lang", lang);
    payload.append("author", author);
    payload.append("type", type);
    payload.append("location", location);
    payload.append("mediaLink", mediaLink);
    payload.append("message", message);

    if (mediaFile) {
      payload.append("mediaFile", mediaFile);
    }

    const response = await fetch("/api/posts", {
      method: "POST",
      body: payload
    });

    if (response.ok) {
      postedToServer = true;
    }
  } catch {
    // Backend unavailable or static hosting
  }

  if (postedToServer) {
    form.reset();
    setStatus(t.formSuccess);
    await loadPosts(lang);
    return;
  }

  // Fallback for static hosting (GitHub Pages, etc.)
  try {
    let localMediaUrl = mediaLink;
    let localMediaType = "";

    if (mediaFile) {
      localMediaUrl = await readFileAsDataUrl(mediaFile);
      localMediaType = mediaFile.type.startsWith("video/") ? "video" : "image";
    } else if (mediaLink) {
      localMediaType = getMediaTypeFromUrl(mediaLink);
    }

    const newPost = {
      id: "local-" + Date.now(),
      author,
      type,
      location,
      message,
      media: localMediaUrl || "",
      mediaType: localMediaType || "",
      createdAt: new Date().toISOString()
    };

    saveLocalPost(lang, newPost);
    form.reset();
    setStatus(t.formSuccess);
    await loadPosts(lang);
  } catch {
    setStatus(t.formError, true);
  }
});

// Cleanup Spots Filtering and Search
const spotFilterChips = document.querySelectorAll(".spot-chip");
const spotsSearchInput = document.getElementById("spotsSearchInput");
const spotsEmptyState = document.getElementById("spotsEmptyState");
const spotCards = document.querySelectorAll(".spot-card");

function updateSpotsFilter() {
  const activeChip = document.querySelector(".spot-chip.is-active");
  const filterVal = activeChip?.dataset.filter || "all";
  const query = (spotsSearchInput?.value || "").toLowerCase().trim();
  let visibleCount = 0;

  spotCards.forEach((card) => {
    const cardEmirate = card.dataset.emirate || "";
    const cardSearchData = (card.dataset.search || card.textContent).toLowerCase();

    const matchesFilter = filterVal === "all" || cardEmirate.split(" ").includes(filterVal);
    const matchesSearch = !query || cardSearchData.includes(query);

    if (matchesFilter && matchesSearch) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (spotsEmptyState) {
    spotsEmptyState.style.display = visibleCount === 0 ? "block" : "none";
  }
}

spotFilterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    spotFilterChips.forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    updateSpotsFilter();
  });
});

spotsSearchInput?.addEventListener("input", updateSpotsFilter);

// Spot Nomination Action: smooth-scrolls and prefills the community form
document.querySelectorAll(".nominate-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const spotName = btn.dataset.spot || "";
    const locInput = document.getElementById("locationInput");
    const typeInput = document.getElementById("typeInput");

    if (locInput) {
      locInput.value = spotName;
    }
    if (typeInput) {
      typeInput.value = "cleanup";
    }

    const formSection = document.getElementById("community");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      locInput?.focus();
    }
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    window.localStorage.setItem(languageKey, lang);
    setStatus("");
    applyLanguage(lang);
    updateSpotsFilter();
  });
});

applyLanguage(getCurrentLanguage());
updateSpotsFilter();
