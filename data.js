const CATS = [
  { id: "web", icon: "globe", name: { bg: "Уеб разработка", en: "Web Development" }, items: [
    ["Изработка на фирмен сайт", "Модерен сайт с всички основни страници, готов да представя бизнеса ви онлайн.", "Business Website Development", "A modern site with all core pages, ready to represent your business online."],
    ["Лендинг страници", "Отделна страница, фокусирана върху едно предложение или кампания, за максимална конверсия.", "Landing Pages", "A dedicated page focused on one offer or campaign, built for maximum conversion."],
    ["Онлайн магазини (e-commerce)", "Пълноценен магазин с каталог, количка и разплащане за продажба онлайн.", "Online Stores (E-commerce)", "A full store with catalog, cart and checkout for selling online."],
    ["WordPress разработка", "Изграждане на сайт върху WordPress — гъвкав и лесен за самостоятелна поддръжка.", "WordPress Development", "Building a site on WordPress — flexible and easy to maintain yourself."]
  ]},
  { id: "seo", icon: "trending-up", name: { bg: "SEO услуги", en: "SEO Services" }, items: [
    ["SEO одит", "Пълен преглед на сайта, за да откриете какво пречи на класирането му.", "SEO Audit", "A full review of the site to find what's holding back its ranking."],
    ["On-page SEO", "Оптимизация на съдържанието и структурата на самите страници за търсачките.", "On-page SEO", "Optimizing content and structure of pages for search engines."]
  ]},
  { id: "marketing", icon: "megaphone", name: { bg: "Дигитален маркетинг", en: "Digital Marketing" }, items: [
    ["PPC реклами (Google Ads)", "Платени реклами в Google, които се появяват точно при търсене на вашата услуга.", "PPC Ads (Google Ads)", "Paid ads that appear exactly when people search for your service."],
    ["Facebook/Instagram реклами", "Таргетирани реклами към точната аудитория в Meta платформите.", "Facebook/Instagram Ads", "Targeted ads reaching the right audience on Meta platforms."]
  ]}
];

const SERVICES = [];
CATS.forEach((c) => {
  c.items.forEach((it, i) => {
    SERVICES.push({
      id: `${c.id}-${i}`, cat: c.id,
      name: { bg: it[0], en: it[2] },
      desc: { bg: it[1], en: it[3] },
    });
  });
});