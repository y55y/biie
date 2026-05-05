const header = document.querySelector("[data-site-header]");
const nav = document.querySelector("[data-site-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");

const translations = {
  ar: {
    title: "BIEE New York | الشريك الخليجي",
    description: "صفحة BIEE New York للشريك الخليجي. تسوقي مكياج BIEE للشفاه والوجه والعيون والأظافر عبر ذا أورا بيوتي في السعودية.",
    selectors: [
      [".skip-link", "تخطي إلى المحتوى"],
      [".site-nav a:nth-child(1)", "المجموعة"],
      [".site-nav a:nth-child(2)", "الأكثر طلبا"],
      [".site-nav a:nth-child(3)", "للخليج"],
      [".site-nav a:nth-child(4)", "الإطلالات"],
      [".site-nav a:nth-child(5)", "تواصل"],
      [".header-cta", "تسوقي من ذا أورا"],
      [".hero-copy .eyebrow", "الشريك الرسمي في الخليج"],
      [".hero-line", "ألوان نيويورك بثبات يناسب الخليج."],
      [".hero-text", "شفاه معبرة، بشرة مصقولة، عيون محددة، ولمعة أظافر أنيقة، متاحة للمتسوقات في الخليج عبر ذا أورا بيوتي."],
      [".hero-actions .primary", "تسوقي BIEE من ذا أورا بيوتي"],
      [".hero-actions .secondary", "واتساب الشريك الخليجي"],
      [".hero-note span:first-child", "لأنك تهميننا"],
      [".hero-note span:last-child", "وجه · شفاه · عيون · أظافر"],
      [".trust-bar div:nth-child(1) strong", "دعم السعودية"],
      [".trust-bar div:nth-child(2) strong", "مسار المتجر الرسمي"],
      [".trust-bar div:nth-child(2) span", "ذا أورا بيوتي"],
      [".trust-bar div:nth-child(3) strong", "أصل العلامة"],
      [".trust-bar div:nth-child(4) strong", "بريد الشريك الخليجي"],
      [".intro-kicker", "ألوان عالمية عبر مسار محلي"],
      [".intro-grid h2", "مصممة للمرأة التي تريد الإطلالة أولا، ثم الشراء بسهولة."],
      [".intro-grid p", "هذه الصفحة الخليجية تقرب BIEE من المنتج: الدرجة، اللمسة النهائية، الملمس، ومكان الشراء. ليست بديلا للكتالوج، بل مساحة العلامة قبل المتجر الرسمي."],
      [".collection .section-lead .eyebrow", "المجموعة"],
      [".collection .section-lead p:last-child", "ابدئي من اللمسة النهائية: بشرة منتعشة، لون مصقول، تحديد للرموش، ولمعة أظافر في اختيار واحد من BIEE."],
      ["#collection-title", "خمس طقوس جمال، ولمسة BIEE واحدة."],
      [".category-card.feature:not(.feature-secondary) span", "بوتوكس"],
      [".category-card.feature:not(.feature-secondary) h3", "انتعاش بوتوكس ولمسة مصقولة"],
      [".category-card.feature:not(.feature-secondary) p", "مظهر أنعم وأكثر راحة مع لمعان نظيف يظهر جميلا في ضوء النهار أو المساء."],
      [".feature-secondary span", "شفاه"],
      [".feature-secondary h3", "لون يحمل الإطلالة"],
      [".feature-secondary p", "نتيجة دافئة وواضحة تناسب الأناقة اليومية ولحظات المكياج المسائية."],
      [".category-card.face span", "وجه"],
      [".category-card.face h3", "فاونديشن وبرايمر"],
      [".category-card.face p", "ملمس بشرة مصقول ودرجات تناسب روتين المكياج اليومي في الخليج."],
      [".category-card.eyes span", "عيون"],
      [".category-card.eyes h3", "ماسكارا وتحديد"],
      [".category-card.eyes p", "صبغة سوداء، رموش مرفوعة، وتحديد نظيف ينتقل من النهار إلى الليل."],
      [".category-card.nails span", "أظافر"],
      [".category-card.nails h3", "ألوان أظافر Color Expert"],
      [".category-card.nails p", "ألوان لامعة تمنح اليدين لمسة تكمل الإطلالة بالكامل."],
      [".bestseller-copy .eyebrow", "تركيز على الأكثر طلبا"],
      ["#bestseller-title", "Matte Kiss Proof، منتج اللون اللافت."],
      [".bestseller-copy p", "قصة الشفاه لدى BIEE مباشرة: لون واضح، لمسة نظيفة، وخزانة درجات تنتقل من الوردي اليومي الدافئ إلى التوتي العميق للمساء."],
      [".text-link", "شاهدي منتجات BIEE لدى ذا أورا بيوتي"],
      [".gulf-copy .eyebrow", "لروتين الجمال الخليجي"],
      ["#gulf-title", "مصممة لتمنحك مظهرا مصقولا في الأيام الساطعة، العشاءات المتأخرة، وإضاءة المناسبات."],
      [".gulf-copy p", "تتوقع المتسوقة الخليجية مكياجا يظهر جميلا في الصور، يحمل اللون بوضوح، ويبقى أنيقا عن قرب. تمنح مجموعة BIEE موقع الشريك وعدا بسيطا: اختاري اللمسة النهائية، ثم اشتري عبر المسار المحلي."],
      [".gulf-points div:nth-child(1) h3", "مسار شراء مباشر"],
      [".gulf-points div:nth-child(1) p", "كل قسم رئيسي يقود إلى صفحة BIEE الرسمية لدى ذا أورا بيوتي."],
      [".gulf-points div:nth-child(2) h3", "تواصل محلي"],
      [".gulf-points div:nth-child(2) p", "الواتساب والبريد الإلكتروني واضحان دون مقاطعة قصة العلامة."],
      [".gulf-points div:nth-child(3) h3", "دليل بصري من المنتج"],
      [".gulf-points div:nth-child(3) p", "صور بطابع BIEE الحقيقي تحمل الصفحة بدلا من زخارف جمال عامة."],
      [".looks .section-heading .eyebrow", "دليل الإطلالات"],
      ["#looks-title", "اختاري المزاج قبل الدرجة."],
      [".look-card:nth-child(1) span", "سوفت غلام"],
      [".look-card:nth-child(1) p", "شفاه وردية، رموش محددة، وبشرة مضيئة."],
      [".look-card:nth-child(2) span", "توتي مسائي"],
      [".look-card:nth-child(2) p", "لون شفاه عميق مع إضاءة ذهبية دافئة."],
      [".look-card:nth-child(3) span", "اختيار يومي"],
      [".look-card:nth-child(3) p", "بشرة موحدة، رموش محددة، قلوس، وطلاء أظافر."],
      [".store-panel .eyebrow", "تسوقي في السعودية"],
      ["#store-title", "من اكتشاف BIEE إلى الدفع عبر ذا أورا بيوتي."],
      [".store-panel p", "لتوفر المنتجات، تصفح الدرجات، والشراء أونلاين، استخدمي صفحة BIEE New York الرسمية لدى ذا أورا بيوتي."],
      [".store-actions .primary", "افتحي متجر BIEE"],
      [".store-actions .secondary", "راسلينا info@biiesa.com"],
      [".mobile-shop-bar a:nth-child(1)", "تسوقي BIEE"],
      [".mobile-shop-bar a:nth-child(2)", "واتساب"],
      [".site-footer div:first-child p", "لأنك تهميننا."],
      [".site-footer div:nth-child(2) a:nth-child(1)", "متجر ذا أورا بيوتي"],
      [".site-footer div:nth-child(2) a:nth-child(2)", "موقع BIEE الأصلي"],
      [".footer-note", "هذه الصفحة الخليجية توجه الشراء إلى ذا أورا بيوتي."]
    ],
    attrs: [
      [".nav-toggle", "aria-label", "فتح القائمة"],
      ["[data-site-nav]", "aria-label", "التنقل الرئيسي"],
      [".hero-note", "aria-label", "وعد العلامة"],
      [".trust-bar", "aria-label", "تفاصيل شريك BIEE"],
      [".mobile-shop-bar", "aria-label", "روابط شراء سريعة"]
    ]
  }
};

translations.ar = {
  title: "BIEE New York | الشريك الخليجي",
  description: "صفحة BIEE New York للشريك الخليجي. تسوقي مكياج BIEE للشفاه والوجه والعيون والأظافر عبر ذا أورا بيوتي في السعودية.",
  selectors: [
    [".skip-link", "تخطي إلى المحتوى"],
    [".site-nav a:nth-child(1)", "المجموعة"],
    [".site-nav a:nth-child(2)", "الأكثر طلبا"],
    [".site-nav a:nth-child(3)", "للخليج"],
    [".site-nav a:nth-child(4)", "الإطلالات"],
    [".site-nav a:nth-child(5)", "تواصل معنا"],
    [".header-cta", "تسوقي من ذا أورا"],
    [".hero-copy .eyebrow", "الشريك الرسمي في الخليج"],
    [".hero-line", "ألوان نيويورك، بثبات يناسب أجواء الخليج."],
    [".hero-text", "مكياج BIEE يمنحك لونا واضحا، بشرة مرتبة، عيونا محددة، ولمسة أظافر أنيقة. متوفر في السعودية والخليج عبر ذا أورا بيوتي."],
    [".hero-actions .primary", "تسوقي BIEE من ذا أورا بيوتي"],
    [".hero-actions .secondary", "تواصلي عبر واتساب"],
    [".hero-note span:first-child", "لأنك تهميننا"],
    [".hero-note span:last-child", "وجه · شفاه · عيون · أظافر"],
    [".trust-bar div:nth-child(1) strong", "دعم داخل السعودية"],
    [".trust-bar div:nth-child(2) strong", "المتجر الرسمي"],
    [".trust-bar div:nth-child(2) span", "ذا أورا بيوتي"],
    [".trust-bar div:nth-child(3) strong", "أصل العلامة"],
    [".trust-bar div:nth-child(4) strong", "بريد الشريك الخليجي"],
    [".intro-kicker", "جمال عالمي بطريق شراء محلي"],
    [".intro-grid h2", "للمرأة التي تريد إطلالة جميلة أولا، ثم شراء واضح وسهل."],
    [".intro-grid p", "هذه الصفحة تعرفك على منتجات BIEE بطريقة مباشرة: اللون، اللمسة، الاستخدام، ومكان الشراء. اختاري ما يناسبك ثم انتقلي للمتجر الرسمي لدى ذا أورا بيوتي."],
    [".collection .section-lead .eyebrow", "المجموعة"],
    [".collection .section-lead p:last-child", "ابدئي من النتيجة التي تحبينها: بشرة ناعمة، لون شفاه واضح، عيون محددة، وأظافر لامعة في مجموعة واحدة من BIEE."],
    ["#collection-title", "خمس لمسات جمال، ونتيجة واحدة أنيقة من BIEE."],
    [".category-card.feature:not(.feature-secondary) span", "بوتوكس"],
    [".category-card.feature:not(.feature-secondary) h3", "مظهر منتعش ولمسة مصقولة"],
    [".category-card.feature:not(.feature-secondary) p", "إطلالة أنعم وأكثر راحة، بلمعان خفيف يظهر جميلا في النهار والمساء."],
    [".feature-secondary span", "شفاه"],
    [".feature-secondary h3", "لون يبرز الإطلالة"],
    [".feature-secondary p", "درجات واضحة ودافئة تناسب الاستخدام اليومي والمناسبات."],
    [".category-card.face span", "وجه"],
    [".category-card.face h3", "فاونديشن وبرايمر"],
    [".category-card.face p", "تغطية مرتبة وملمس ناعم يناسب روتين المكياج اليومي في الخليج."],
    [".category-card.eyes span", "عيون"],
    [".category-card.eyes h3", "ماسكارا وتحديد"],
    [".category-card.eyes p", "لون أسود واضح، رموش مرفوعة، وتحديد نظيف يناسب النهار والليل."],
    [".category-card.nails span", "أظافر"],
    [".category-card.nails h3", "ألوان أظافر Color Expert"],
    [".category-card.nails p", "ألوان لامعة تضيف لمسة نهائية مرتبة لإطلالتك."],
    [".bestseller-copy .eyebrow", "الأكثر طلبا"],
    ["#bestseller-title", "Matte Kiss Proof، لون شفاه ثابت ولافت."],
    [".bestseller-copy p", "منتجات الشفاه من BIEE تمنحك لونا واضحا ولمسة نظيفة، بدرجات تناسب الإطلالة اليومية والمساء."],
    [".text-link", "شاهدي منتجات BIEE لدى ذا أورا بيوتي"],
    [".gulf-copy .eyebrow", "لروتين الجمال الخليجي"],
    ["#gulf-title", "إطلالة مرتبة تناسب الأيام الساطعة، العزائم، وإضاءة المناسبات."],
    [".gulf-copy p", "في الخليج نحتاج مكياجا يظهر جميلا في الصور، يحمل اللون بوضوح، ويبقى أنيقا عن قرب. BIEE تسهل عليك الاختيار: حددي اللمسة التي تريدينها، ثم اشتري عبر المتجر المحلي."],
    [".gulf-points div:nth-child(1) h3", "شراء واضح ومباشر"],
    [".gulf-points div:nth-child(1) p", "كل قسم رئيسي يوصلك إلى صفحة BIEE الرسمية لدى ذا أورا بيوتي."],
    [".gulf-points div:nth-child(2) h3", "تواصل محلي"],
    [".gulf-points div:nth-child(2) p", "رقم الواتساب والبريد الإلكتروني متاحان للاستفسار بدون تعقيد."],
    [".gulf-points div:nth-child(3) h3", "المنتج هو الأساس"],
    [".gulf-points div:nth-child(3) p", "الصور تركز على ألوان BIEE وملمسها، بعيدا عن الصور العامة والمبالغ فيها."],
    [".looks .section-heading .eyebrow", "دليل الإطلالات"],
    ["#looks-title", "اختاري الإحساس أولا، ثم الدرجة."],
    [".look-card:nth-child(1) span", "إطلالة ناعمة"],
    [".look-card:nth-child(1) p", "شفاه وردية، رموش محددة، وبشرة مضيئة."],
    [".look-card:nth-child(2) span", "توتي مسائي"],
    [".look-card:nth-child(2) p", "لون شفاه عميق مع إضاءة دافئة."],
    [".look-card:nth-child(3) span", "اختيار يومي"],
    [".look-card:nth-child(3) p", "بشرة موحدة، رموش محددة، قلوس، وطلاء أظافر."],
    [".store-panel .eyebrow", "تسوقي في السعودية"],
    ["#store-title", "من التعرف على BIEE إلى الشراء من ذا أورا بيوتي."],
    [".store-panel p", "للتأكد من توفر المنتجات وتصفح الدرجات والشراء أونلاين، استخدمي صفحة BIEE New York الرسمية لدى ذا أورا بيوتي."],
    [".store-actions .primary", "افتحي متجر BIEE"],
    [".store-actions .secondary", "راسلينا info@biiesa.com"],
    [".mobile-shop-bar a:nth-child(1)", "تسوقي BIEE"],
    [".mobile-shop-bar a:nth-child(2)", "واتساب"],
    [".site-footer div:first-child p", "لأنك تهميننا."],
    [".site-footer div:nth-child(2) a:nth-child(1)", "متجر ذا أورا بيوتي"],
    [".site-footer div:nth-child(2) a:nth-child(2)", "موقع BIEE الأصلي"],
    [".footer-note", "هذه الصفحة الخليجية توجهك للشراء من ذا أورا بيوتي."]
  ],
  attrs: [
    [".nav-toggle", "aria-label", "فتح القائمة"],
    ["[data-site-nav]", "aria-label", "التنقل الرئيسي"],
    [".hero-note", "aria-label", "وعد العلامة"],
    [".trust-bar", "aria-label", "تفاصيل شريك BIEE"],
    [".mobile-shop-bar", "aria-label", "روابط شراء سريعة"]
  ]
};

translations.ar = {
  title: "BIEE New York | الشريك الخليجي",
  description: "صفحة BIEE New York الرسمية للشريك الخليجي. اكتشفي منتجات BIEE للشفاه والوجه والعيون والأظافر، وتسوقيها عبر ذا أورا بيوتي في السعودية.",
  selectors: [
    [".skip-link", "تخطي إلى المحتوى"],
    [".site-nav a:nth-child(1)", "المجموعة"],
    [".site-nav a:nth-child(2)", "الأكثر طلبا"],
    [".site-nav a:nth-child(3)", "للخليج"],
    [".site-nav a:nth-child(4)", "الإطلالات"],
    [".site-nav a:nth-child(5)", "تواصل معنا"],
    [".header-cta", "تسوقي من ذا أورا"],
    [".hero-copy .eyebrow", "الشريك الرسمي في الخليج"],
    [".hero-line", "ألوان نيويورك بثبات يناسب أجواء الخليج."],
    [".hero-text", "اكتشفي منتجات BIEE للشفاه والوجه والعيون والأظافر: ألوان واضحة، تغطية ناعمة، تحديد مرتب، ولمسات نهائية تناسب يومك ومناسباتك."],
    [".hero-actions .primary", "تسوقي BIEE من ذا أورا بيوتي"],
    [".hero-actions .secondary", "تواصلي عبر واتساب"],
    [".hero-note span:first-child", "لأنك تهميننا"],
    [".hero-note span:last-child", "وجه · شفاه · عيون · أظافر"],
    [".trust-bar div:nth-child(1) strong", "دعم داخل السعودية"],
    [".trust-bar div:nth-child(2) strong", "المتجر الرسمي"],
    [".trust-bar div:nth-child(2) span", "ذا أورا بيوتي"],
    [".trust-bar div:nth-child(3) strong", "أصل العلامة"],
    [".trust-bar div:nth-child(4) strong", "بريد الشريك الخليجي"],
    [".intro-kicker", "جمال عالمي بطريق شراء محلي"],
    [".intro-grid h2", "لمن تبحث عن الإطلالة أولا، ثم شراء واضح وسهل."],
    [".intro-grid p", "هذه الصفحة تعرفك على منتجات BIEE بطريقة مباشرة: الدرجات، التغطية، اللمسة النهائية، ومكان الشراء. اختاري ما يناسب إطلالتك، ثم انتقلي إلى المتجر الرسمي لدى ذا أورا بيوتي."],
    [".collection .section-lead .eyebrow", "المجموعة"],
    [".collection .section-lead p:last-child", "ابدئي من النتيجة التي تحبينها: بشرة موحدة، لون شفاه واضح، عيون محددة، وأظافر لامعة ضمن مجموعة واحدة من BIEE."],
    ["#collection-title", "خمس لمسات مكياج، ونتيجة أنيقة من BIEE."],
    [".category-card.feature:not(.feature-secondary) span", "بوتوكس"],
    [".category-card.feature:not(.feature-secondary) h3", "مظهر منتعش ولمسة مصقولة"],
    [".category-card.feature:not(.feature-secondary) p", "إطلالة ناعمة ومرتبة، مع لمسة صحية تظهر جميلة في النهار والمساء."],
    [".feature-secondary span", "شفاه"],
    [".feature-secondary h3", "أحمر شفاه يبرز الإطلالة"],
    [".feature-secondary p", "درجات واضحة ودافئة، بلمسة مريحة تناسب الاستخدام اليومي والمناسبات."],
    [".category-card.face span", "وجه"],
    [".category-card.face h3", "فاونديشن وبرايمر"],
    [".category-card.face p", "كريم أساس وبودرة وبرايمر لملمس ناعم وتغطية مرتبة تناسب مكياجك اليومي في أجواء الخليج."],
    [".category-card.eyes span", "عيون"],
    [".category-card.eyes h3", "ماسكارا وتحديد"],
    [".category-card.eyes p", "لون أسود واضح، رموش مرفوعة، وتحديد نظيف يناسب النهار والمساء."],
    [".category-card.nails span", "أظافر"],
    [".category-card.nails h3", "طلاء أظافر Color Expert"],
    [".category-card.nails p", "درجات لامعة تضيف لمسة نهائية مرتبة لإطلالتك."],
    [".bestseller-copy .eyebrow", "الأكثر طلبا"],
    ["#bestseller-title", "Matte Kiss Proof، أحمر شفاه ثابت ولافت."],
    [".bestseller-copy p", "منتجات الشفاه من BIEE تمنحك لونا واضحا ولمسة نهائية أنيقة، بدرجات تناسب إطلالات النهار والمساء."],
    [".text-link", "شاهدي منتجات BIEE لدى ذا أورا بيوتي"],
    [".gulf-copy .eyebrow", "لروتين الجمال الخليجي"],
    ["#gulf-title", "إطلالة مرتبة تناسب الأيام الساطعة، العزائم، وإضاءة المناسبات."],
    [".gulf-copy p", "في الخليج نحتاج مكياجا يظهر جميلا في الصور، يثبت لونه بوضوح، ويبقى أنيقا عن قرب. مع BIEE اختاري اللمسة التي تريدينها، ثم اشتري بسهولة عبر المتجر المحلي."],
    [".gulf-points div:nth-child(1) h3", "شراء واضح ومباشر"],
    [".gulf-points div:nth-child(1) p", "كل قسم رئيسي يوصلك إلى صفحة BIEE الرسمية لدى ذا أورا بيوتي."],
    [".gulf-points div:nth-child(2) h3", "تواصل محلي"],
    [".gulf-points div:nth-child(2) p", "رقم الواتساب والبريد الإلكتروني متاحان للاستفسار بسهولة."],
    [".gulf-points div:nth-child(3) h3", "المنتج في الواجهة"],
    [".gulf-points div:nth-child(3) p", "الصور تركز على ألوان BIEE وملمسها، بعيدا عن الصور العامة والمبالغ فيها."],
    [".looks .section-heading .eyebrow", "دليل الإطلالات"],
    ["#looks-title", "اختاري الإحساس أولا، ثم الدرجة."],
    [".look-card:nth-child(1) span", "إطلالة ناعمة"],
    [".look-card:nth-child(1) p", "شفاه وردية، رموش محددة، وبشرة مضيئة."],
    [".look-card:nth-child(2) span", "توتي مسائي"],
    [".look-card:nth-child(2) p", "لون شفاه عميق مع إضاءة دافئة."],
    [".look-card:nth-child(3) span", "اختيار يومي"],
    [".look-card:nth-child(3) p", "بشرة موحدة، رموش محددة، قلوس، وطلاء أظافر."],
    [".store-panel .eyebrow", "تسوقي في السعودية"],
    ["#store-title", "من التعرف على BIEE إلى الشراء من ذا أورا بيوتي."],
    [".store-panel p", "للتأكد من توفر المنتجات، وتصفح الدرجات، والشراء أونلاين، استخدمي صفحة BIEE New York الرسمية لدى ذا أورا بيوتي."],
    [".store-actions .primary", "افتحي متجر BIEE"],
    [".store-actions .secondary", "راسلينا info@biiesa.com"],
    [".mobile-shop-bar a:nth-child(1)", "تسوقي BIEE"],
    [".mobile-shop-bar a:nth-child(2)", "واتساب"],
    [".site-footer div:first-child p", "لأنك تهميننا."],
    [".site-footer div:nth-child(2) a:nth-child(1)", "متجر ذا أورا بيوتي"],
    [".site-footer div:nth-child(2) a:nth-child(2)", "موقع BIEE الأصلي"],
    [".footer-note", "هذه الصفحة الخليجية توجهك للشراء من ذا أورا بيوتي."]
  ],
  attrs: [
    [".nav-toggle", "aria-label", "فتح القائمة"],
    ["[data-site-nav]", "aria-label", "التنقل الرئيسي"],
    [".hero-note", "aria-label", "وعد العلامة"],
    [".trust-bar", "aria-label", "تفاصيل شريك BIEE"],
    [".mobile-shop-bar", "aria-label", "روابط شراء سريعة"]
  ]
};

const englishSnapshot = {
  title: document.title,
  description: document.querySelector("meta[name='description']")?.getAttribute("content") ?? "",
  selectors: translations.ar.selectors.map(([selector]) => [selector, document.querySelector(selector)?.textContent ?? ""]),
  attrs: translations.ar.attrs.map(([selector, attribute]) => [
    selector,
    attribute,
    document.querySelector(selector)?.getAttribute(attribute) ?? ""
  ])
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const setLanguage = (lang) => {
  const isArabic = lang === "ar";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  localStorage.setItem("biie-lang", isArabic ? "ar" : "en");

  if (!isArabic) {
    document.title = englishSnapshot.title;
    document.querySelector("meta[name='description']")?.setAttribute("content", englishSnapshot.description);
    englishSnapshot.selectors.forEach(([selector, value]) => setText(selector, value));
    englishSnapshot.attrs.forEach(([selector, attribute, value]) => {
      document.querySelector(selector)?.setAttribute(attribute, value);
    });
    langToggle.textContent = "AR";
    langToggle.setAttribute("aria-label", "Switch language");
    return;
  }

  document.title = translations.ar.title;
  document.querySelector("meta[name='description']")?.setAttribute("content", translations.ar.description);
  translations.ar.selectors.forEach(([selector, value]) => setText(selector, value));
  translations.ar.attrs.forEach(([selector, attribute, value]) => {
    document.querySelector(selector)?.setAttribute(attribute, value);
  });
  langToggle.textContent = "EN";
  langToggle.setAttribute("aria-label", "Switch to English");
};

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  const isArabic = document.documentElement.lang === "ar";
  navToggle.setAttribute("aria-label", isOpen ? (isArabic ? "إغلاق القائمة" : "Close navigation") : (isArabic ? "فتح القائمة" : "Open navigation"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", document.documentElement.lang === "ar" ? "فتح القائمة" : "Open navigation");
  }
});

langToggle?.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  if (!element.closest(".hero")) {
    observer.observe(element);
  }
});

const params = new URLSearchParams(window.location.search);
setLanguage(params.get("lang") === "ar" || localStorage.getItem("biie-lang") === "ar" ? "ar" : "en");
