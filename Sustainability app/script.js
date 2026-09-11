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
    metaDescription: "Public website for cleaner beaches in the UAE with eco campaigns, community posts, photos, videos, cleanup spot recommendations and open discussion.",
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
    missionTitle: "A public website that turns environmental care into shared action.",
    stat1Label: "Photos and videos",
    stat1Title: "Media Hub",
    stat1Text: "You can upload your own visuals from cleanup events, eco campaigns and field activities.",
    stat2Label: "Suggested places",
    stat2Title: "Cleanup Spots",
    stat2Text: "Users can recommend beaches and coastal areas in the UAE that need urgent cleanup attention.",
    stat3Label: "Conversation",
    stat3Title: "Open Discussion",
    stat3Text: "People can share thoughts, ideas, experiences and discuss local environmental initiatives.",
    mediaEyebrow: "Owner Media Block",
    mediaTitle: "A dedicated space for your photos and videos from environmental events.",
    mediaImageAlt: "Green natural area",
    mediaFeatureTitle: "Main campaign story",
    mediaFeatureText: "Use this block as a showcase for your strongest photos, videos and reports from beach cleanup actions.",
    mediaListTitle: "What you can place here",
    mediaList1: "before-and-after cleanup photos",
    mediaList2: "videos from beach cleanup days",
    mediaList3: "short interviews with volunteers",
    mediaList4: "posters for upcoming events",
    uploadTitle: "Media upload area",
    uploadText: "This is a ready interface for future integration with backend services or cloud storage.",
    uploadPhotoLabel: "Upload photo",
    uploadVideoLabel: "Upload video",
    spotsEyebrow: "Recommended Spots",
    spotsTitle: "Beach areas across the UAE that can be highlighted for future cleanup actions.",
    spot1Text: "A strong candidate for regular community cleanup sessions and visual progress reports.",
    spot2Text: "Suitable for family events, volunteer activities and public environmental education.",
    spot3Text: "A practical location for local recommendations and youth involvement in cleanup work.",
    spot4Text: "Useful for documenting problem zones and tracking improvement after each cleanup effort.",
    communityEyebrow: "Community Wall",
    communityTitle: "A place where people can share photos, thoughts and recommend new cleanup locations.",
    formTitle: "Publish a message",
    formIntro: "Posts are now loaded from the backend API and can be shared across users when the site is deployed.",
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
    feedIntro: "Below are posts loaded from the backend and everything submitted through the form.",
    ctaEyebrow: "Next Step",
    ctaTitle: "To make this site fully public on the internet, the next step is live hosting, a domain and production storage.",
    ctaButton: "Continue building the project",
    postMediaText: "Open photo / video",
    defaultAuthor: "Community member",
    defaultType: "Post",
    emptyFeed: "No posts yet. Be the first person to share a cleanup idea.",
    loadingFeed: "Loading community posts...",
    invalidForm: "Please add your name and message before publishing.",
    formSuccess: "Post published successfully.",
    formError: "The server could not save the post. Check that the backend is running.",
    formLoading: "Publishing..."
  },
  ru: {
    documentTitle: "Clean Shores UAE | Чистые пляжи вместе",
    metaDescription: "Публичный сайт о чистоте пляжей в ОАЭ: экологические акции, публикации сообщества, фото, видео, рекомендации мест для уборки и обсуждения.",
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
    missionTitle: "Публичный сайт, который превращает заботу о природе в совместное действие.",
    stat1Label: "Фото и видео",
    stat1Title: "Медиа-хаб",
    stat1Text: "Вы сможете добавлять собственные материалы с уборок, акций и экологических выездов.",
    stat2Label: "Рекомендуемые места",
    stat2Title: "Точки уборки",
    stat2Text: "Пользователи смогут советовать пляжи и прибрежные зоны в ОАЭ, которым срочно нужна уборка.",
    stat3Label: "Общение",
    stat3Title: "Открытое обсуждение",
    stat3Text: "Люди смогут делиться мыслями, идеями, опытом и обсуждать локальные экологические инициативы.",
    mediaEyebrow: "Блок ваших медиа",
    mediaTitle: "Отдельное пространство для ваших фото и видео с экологических мероприятий.",
    mediaImageAlt: "Зелёная природная зона",
    mediaFeatureTitle: "Главная история кампании",
    mediaFeatureText: "Используйте этот блок как витрину для лучших фото, видео и отчётов о пляжных уборках.",
    mediaListTitle: "Что можно разместить здесь",
    mediaList1: "фотографии до и после уборки",
    mediaList2: "видео с дней уборки пляжей",
    mediaList3: "короткие интервью с волонтёрами",
    mediaList4: "афиши будущих мероприятий",
    uploadTitle: "Зона загрузки медиа",
    uploadText: "Это готовый интерфейс для будущей интеграции с backend-сервисами или облачным хранилищем.",
    uploadPhotoLabel: "Загрузить фото",
    uploadVideoLabel: "Загрузить видео",
    spotsEyebrow: "Рекомендуемые места",
    spotsTitle: "Пляжные зоны по всему ОАЭ, которые можно выделить для будущих уборок.",
    spot1Text: "Хороший кандидат для регулярных уборок сообщества и визуальных отчётов о прогрессе.",
    spot2Text: "Подходит для семейных мероприятий, волонтёрских активностей и экологического просвещения.",
    spot3Text: "Практичная локация для локальных рекомендаций и вовлечения молодёжи в уборки.",
    spot4Text: "Удобна для фиксации проблемных зон и отслеживания улучшений после каждой уборки.",
    communityEyebrow: "Стена сообщества",
    communityTitle: "Место, где люди могут делиться фото, мыслями и рекомендовать новые точки для уборки.",
    formTitle: "Опубликовать сообщение",
    formIntro: "Посты теперь загружаются из backend API и смогут быть общими для всех пользователей после публикации сайта.",
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
    feedIntro: "Ниже посты из backend и всё, что будет отправлено через форму.",
    ctaEyebrow: "Следующий шаг",
    ctaTitle: "Чтобы сайт полноценно работал для всех в интернете, дальше нужны хостинг, домен и production-хранилище.",
    ctaButton: "Продолжить развитие проекта",
    postMediaText: "Открыть фото / видео",
    defaultAuthor: "Участник сообщества",
    defaultType: "Публикация",
    emptyFeed: "Пока нет публикаций. Станьте первым, кто поделится идеей уборки.",
    loadingFeed: "Загружаем публикации сообщества...",
    invalidForm: "Добавьте имя и текст сообщения перед публикацией.",
    formSuccess: "Пост успешно опубликован.",
    formError: "Сервер не смог сохранить пост. Проверьте, что backend запущен.",
    formLoading: "Публикация..."
  },
  ar: {
    documentTitle: "Clean Shores UAE | شواطئ أنظف معاً",
    metaDescription: "موقع عام لنظافة الشواطئ في الإمارات مع حملات بيئية ومنشورات المجتمع وصور وفيديوهات واقتراحات لأماكن التنظيف ونقاشات مفتوحة.",
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
    missionTitle: "موقع عام يحوّل العناية بالبيئة إلى عمل جماعي.",
    stat1Label: "الصور والفيديو",
    stat1Title: "مركز الوسائط",
    stat1Text: "يمكنك إضافة موادك الخاصة من فعاليات التنظيف والحملات البيئية والأنشطة الميدانية.",
    stat2Label: "الأماكن المقترحة",
    stat2Title: "مواقع التنظيف",
    stat2Text: "يمكن للمستخدمين اقتراح الشواطئ والمناطق الساحلية في الإمارات التي تحتاج إلى تنظيف عاجل.",
    stat3Label: "النقاش",
    stat3Title: "حوار مفتوح",
    stat3Text: "يمكن للناس مشاركة الأفكار والتجارب ومناقشة المبادرات البيئية المحلية.",
    mediaEyebrow: "قسم الوسائط الخاص بك",
    mediaTitle: "مساحة مخصصة لصورك وفيديوهاتك من الفعاليات البيئية.",
    mediaImageAlt: "منطقة طبيعية خضراء",
    mediaFeatureTitle: "القصة الرئيسية للحملة",
    mediaFeatureText: "استخدم هذا القسم كواجهة لأفضل الصور والفيديوهات والتقارير من حملات تنظيف الشواطئ.",
    mediaListTitle: "ما الذي يمكنك وضعه هنا",
    mediaList1: "صور قبل وبعد التنظيف",
    mediaList2: "فيديوهات من أيام تنظيف الشواطئ",
    mediaList3: "مقابلات قصيرة مع المتطوعين",
    mediaList4: "ملصقات للفعاليات القادمة",
    uploadTitle: "منطقة رفع الوسائط",
    uploadText: "هذه واجهة جاهزة للربط مستقبلاً مع خدمات الخلفية أو التخزين السحابي.",
    uploadPhotoLabel: "رفع صورة",
    uploadVideoLabel: "رفع فيديو",
    spotsEyebrow: "مواقع مقترحة",
    spotsTitle: "مناطق شاطئية في أنحاء الإمارات يمكن إبرازها لحملات التنظيف القادمة.",
    spot1Text: "مكان قوي لتنظيم حملات تنظيف مجتمعية منتظمة وتقارير بصرية عن التقدم.",
    spot2Text: "مناسب للفعاليات العائلية والأنشطة التطوعية والتوعية البيئية العامة.",
    spot3Text: "موقع عملي للتوصيات المحلية وإشراك الشباب في أعمال التنظيف.",
    spot4Text: "مفيد لتوثيق المناطق المتضررة ومتابعة التحسن بعد كل حملة تنظيف.",
    communityEyebrow: "جدار المجتمع",
    communityTitle: "مساحة يمكن للناس فيها مشاركة الصور والأفكار واقتراح مواقع جديدة للتنظيف.",
    formTitle: "انشر رسالة",
    formIntro: "يتم الآن تحميل المشاركات من واجهة backend ويمكن أن تصبح مشتركة بين جميع المستخدمين بعد نشر الموقع.",
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
    feedIntro: "فيما يلي المنشورات المحمّلة من backend وكل ما يتم إرساله عبر النموذج.",
    ctaEyebrow: "الخطوة التالية",
    ctaTitle: "لكي يعمل هذا الموقع بشكل عام على الإنترنت، فالخطوة التالية هي الاستضافة والنطاق وتخزين production.",
    ctaButton: "تابع تطوير المشروع",
    postMediaText: "افتح الصورة / الفيديو",
    defaultAuthor: "عضو في المجتمع",
    defaultType: "منشور",
    emptyFeed: "لا توجد منشورات بعد. كن أول من يشارك فكرة تنظيف.",
    loadingFeed: "جارٍ تحميل منشورات المجتمع...",
    invalidForm: "أضف اسمك ورسالتك قبل النشر.",
    formSuccess: "تم نشر المشاركة بنجاح.",
    formError: "تعذر على الخادم حفظ المشاركة. تأكد من تشغيل backend.",
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
    "mediaList3", "mediaList4", "uploadTitle", "uploadText", "uploadPhotoLabel",
    "uploadVideoLabel", "spotsEyebrow", "spotsTitle", "spot1Text", "spot2Text",
    "spot3Text", "spot4Text", "communityEyebrow", "communityTitle", "formTitle",
    "formIntro", "authorLabel", "typeLabel", "typeThought", "typeCleanup", "typePhoto",
    "typeDiscussion", "locationLabel", "mediaLabel", "mediaFileLabel", "messageLabel",
    "submitButton", "feedTitle", "feedIntro", "ctaEyebrow", "ctaTitle", "ctaButton"
  ].forEach((key) => setText(key, t[key]));

  setPlaceholder("authorInput", t.authorPlaceholder);
  setPlaceholder("locationInput", t.locationPlaceholder);
  setPlaceholder("mediaInput", t.mediaPlaceholder);
  setPlaceholder("messageInput", t.messagePlaceholder);

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
      media: "https://example.com",
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
      media: "https://example.com",
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
      media: "https://example.com",
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

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    window.localStorage.setItem(languageKey, lang);
    setStatus("");
    applyLanguage(lang);
  });
});

applyLanguage(getCurrentLanguage());
