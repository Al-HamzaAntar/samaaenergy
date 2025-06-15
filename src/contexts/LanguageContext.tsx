import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Our Services',
      'nav.training': 'Training',
      'nav.careers': 'Careers',
      'nav.sectors': 'Sectors',
      
      // Hero Section
      'hero.title': 'Powering Your Future with',
      'hero.subtitle': 'Clean Solar Energy',
      'hero.description': 'Transform your home or business with cutting-edge solar technology. Save money, reduce your carbon footprint, and achieve energy independence.',
      'hero.watchDemo': 'Watch Demo',
      'hero.projectsCompleted': 'Projects Completed',
      'hero.energySaved': 'kWh Energy Saved',
      'hero.teamMembers': 'Team Members',
      'hero.solarIrradiance': 'Solar Irradiance',
      'hero.powerOutput': 'Power Output',
      'hero.cleanEnergy': '100% Clean Energy',
      
      // About Us
      'about.title': 'About Us',
      'about.para1': 'Sama Energy is made up of a group of professionals with experience in the energy sector working to assist businesses and businesses across the region to secure the most cost-efficient use of their facilities.',
      'about.para2': 'Since its establishment, Sama Energy has helped many companies develop their energy strategy and make better use of the complex demand and consumption of buildings. With clients as diverse as airports, commercial and residential buildings, labor camps and engineering projects, we are proud of our track record of delivering and delivering the best energy conservation projects and consistently reliable advice.',
      'about.para3': 'Thanks to our extensive experience and basic expertise, Sama Energy can obtain the largest range of customized solutions for your business and facilities, and we have a range of services for clients that help them grow.',
      
      // Solar Solutions
      'solutions.title': 'Our Solar Solutions',
      'solutions.subtitle': 'Comprehensive energy and production line services tailored to your specific needs',
      'solutions.renewableTitle': 'Renewable Energy Services',
      'solutions.productionTitle': 'Production Line Services',
      'solutions.learnMore': 'Learn More',
      
      // Achievements
      'achievements.title': 'Our Achievements',
      'achievements.subtitle': 'Delivering excellence in solar energy solutions',
      'achievements.energySaving': 'Energy Saving (kWh)',
      'achievements.productionLines': 'Operating Production Lines',
      'achievements.successfulProjects': 'Successful Projects',
      'achievements.workingHands': 'Working Hands',
      
      // Services Page
      'services.title': 'Our Solar Solutions',
      'services.subtitle': 'Comprehensive energy and production line services tailored to your specific needs',
      'services.renewableContent1': 'Sama Energy offers energy solutions to serve you through its extensive experience in the fields of engineering, procurement, construction (EPC), and operation and maintenance in relation to solar energy, wind energy and water pumps.',
      'services.renewableContent2': 'Sama Energy produces integrated solutions for high quality solar and wind energy plants that are ready to run for end investors at the local and international levels, and are heading towards the future with the confidence of engineering and an environmentally friendly service concept that focuses on energy efficiency.',
      'services.renewableContent3': 'Sama Energy focuses on systems that maximize life cycle performance and returns for investors.',
      'services.renewableContent4': 'Sama Energy provides investors around the world with solutions in the design, construction and production phases of plant construction projects to generate energy from natural sources with an environmentally friendly approach. Sama Energy provides investors and business developers with full services related to project management and solutions in the field of engineering, procurement and construction through its specialized staff in these fields, using its long experience in the field of ground and roof installations (ground solar panels and rooftop solar panels).',
      'services.renewableContent5': 'Sama Energy produces system solutions that protect the global balance by reducing environmental damage to a minimum and providing great benefits to investors at the same time. Intek offers its services as a professional engineering, supply and construction company with a focus on customer satisfaction.',
      'services.productionContent1': 'Sama Energy offers you a professional production line installation service thanks to our dedicated team in the sale, maintenance and installation of all used and new production lines.',
      'services.productionContent2': 'We excel at Sama Energy in providing electronic and electrical services, including electrical services, electrical installations for all production lines, designing and maintaining control panels for all production lines, in addition to operating, adjusting and maintaining packaging machines.',
      'services.productionContent3': 'We offer a distinctive, high-performance range of reliable engines, couplings and gearboxes for every industry and application that meets the highest standards of performance and quality requirements.',
      'services.productionContent4': 'Mechanical services include providing and installing all spare parts required for production lines and factory supplies, and increasing the efficiency of production lines.',
      'services.productionContent5': 'We manufacture and turn difficult mechanical parts with high precision, وآلات القطع والحفر للحديد والخرسانة, and design and produce hydraulic control circuits and systems. Manufacture of mobile platforms, winches, winches and open lifts.',
      
      // Training
      'training.title': 'Training Programs',
      'training.subtitle': 'Comprehensive training in solar energy and production line technologies',
      'training.form.title': 'Training Application Form',
      'training.form.subtitle': 'You can apply for one of the available courses and we will contact you',
      'training.form.name': 'Name',
      'training.form.email': 'Email',
      'training.form.phone': 'Phone Number',
      'training.form.course': 'Course Selection',
      'training.form.additionalInfo': 'Additional Information',
      'training.form.submit': 'Send',
      'training.form.submitting': 'Sending...',
      'training.form.namePlaceholder': 'Enter your full name',
      'training.form.emailPlaceholder': 'example@email.com',
      'training.form.phonePlaceholder': '9xxxxxxxx',
      'training.form.coursePlaceholder': 'Choose Course',
      'training.form.additionalInfoPlaceholder': 'Add any additional information you would like to share...',
      'training.form.nameRequired': 'Name is required',
      'training.form.emailRequired': 'Email is required',
      'training.form.emailInvalid': 'Please enter a valid email',
      'training.form.phoneRequired': 'Phone number is required',
      'training.form.courseRequired': 'Please select a course',
      'training.success.title': 'Application Submitted Successfully',
      'training.success.description': 'We will review your application and contact you soon',
      'training.error.title': 'Error Occurred',
      'training.error.description': 'Please try again',
      'training.courses.solarEnergy': 'Solar Energy Training',
      'training.courses.productionLine': 'Production Line Training',
      'training.courses.certification': 'Certification Programs',
      'training.courses.maintenance': 'Maintenance Training',
      
      // Sectors
      'sectors.trade': 'Trade Sector',
      'sectors.consulting': 'Consulting and Services Sector',
      'sectors.factory': 'Factory Installation Sector',
      'sectors.training': 'Training and Employment Sector',
      
      // Careers
      'careers.title': 'Job Application',
      'careers.subtitle': 'You can apply for a job and we will contact you',
      'careers.form.name': 'Name',
      'careers.form.email': 'Email',
      'careers.form.phone': 'Phone Number',
      'careers.form.specialization': 'Specialization',
      'careers.form.cv': 'Upload CV/Resume',
      'careers.form.additional': 'Additional Information You Want to Mention',
      'careers.form.submit': 'Submit',
      'careers.form.submitting': 'Submitting...',
      'careers.form.namePlaceholder': 'Enter your full name',
      'training.form.emailPlaceholder': 'example@email.com',
      'careers.form.phonePlaceholder': '9xxxxxxxx',
      'careers.form.cvPlaceholder': 'Choose your CV file',
      'careers.form.additionalPlaceholder': 'Add any additional information you would like to share...',
      'careers.success.title': 'Application Submitted Successfully',
      'careers.success.description': 'We will review your application and contact you soon',
      'careers.error.title': 'Error Occurred',
      'careers.error.description': 'Please try again',
      'careers.whyWorkWithUs': 'Why Work With Us?',
      'careers.growthOpportunities': 'Growth Opportunities',
      'careers.growthDesc': 'Join a growing company in the renewable energy sector',
      'careers.sustainableImpact': 'Sustainable Impact',
      'careers.sustainableDesc': 'Make a positive impact on the environment and society',
      'careers.teamEnvironment': 'Team Environment',
      'careers.teamDesc': 'Work with a passionate and dedicated team',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.subtitle': "Let's stay in touch",
      'contact.location': 'Our Location',
      'contact.address': 'Yemen - Sana\'a - Al-Asbahi City - Forty Street\nIn front of the Royal Brewster Restaurant',
      'contact.email': 'Email Us',
      'contact.phone': 'Call Us',
      'contact.callQuote': 'Call for Free Quote',
      'contact.emailConsultation': 'Email Consultation',
      
      // Common - Our Customers, Our Ambitions, Customer Reviews sections
      'common.customers': 'Our Customers',
      'common.customersSubtitle': 'Trusted by leading organizations worldwide',
      'common.ambitions': 'Our Ambitions',
      'common.ambitionsSubtitle': 'Leading the way towards a sustainable and energy-efficient future',
      'common.reviews': 'Customer Reviews',
      'common.reviewsSubtitle': 'What our clients say about our solar energy solutions',
      'common.message': 'Our Message',
      'common.messageDescription': 'To make the built environment a leading example of energy efficiency in the region and the world.',
      'common.vision': 'Our Vision',
      'common.visionDescription': 'To make Yemen one of the most sustainable cities in the world',
      'common.objectives': 'Objectives',
      'common.objectivesDescription': 'Establishment of a contracting market for the implementation of energy works, services and production lines in Yemen',
      
      // Customer Reviews
      'reviews.testimonial1': 'Here the opinion is placed',
      'reviews.customer1Name': 'Mohammed',
      'reviews.customer1Company': 'UNICEF',
      'reviews.testimonial2': 'Here the opinion is placed',
      'reviews.customer2Name': 'Ahmed',
      'reviews.customer2Company': 'Al Rabi Energy Systems',
      'reviews.testimonial3': 'Here the opinion is placed',
      'reviews.customer3Name': 'Ali',
      'reviews.customer3Company': 'FAO',

      // Customer Organizations
      'customers.wfp': 'World Food Programme',
      'customers.unicef': 'United Nations Children\'s Fund',
      'customers.who': 'World Health Organization',
      'customers.saveTheChildren': 'International Organization',
      'customers.icrc': 'International Committee of the Red Cross',
      'customers.unops': 'United Nations Office for Project Services',
      'customers.undp': 'United Nations Development Programme',
      'customers.nrc': 'Norwegian Refugee Council',
    },
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.services': 'خدماتنا',
      'nav.training': 'التدريب',
      'nav.careers': 'الوظائف',
      'nav.sectors': 'القطاعات',
      
      // Hero Section
      'hero.title': 'نقود مستقبلك بـ',
      'hero.subtitle': 'الطاقة الشمسية النظيفة',
      'hero.description': 'حول منزلك أو عملك بتقنية الطاقة الشمسية المتطورة. وفر المال، قلل من بصمتك الكربونية، واحصل على استقلالية الطاقة.',
      'hero.watchDemo': 'مشاهدة العرض التوضيحي',
      'hero.projectsCompleted': 'المشاريع المكتملة',
      'hero.energySaved': 'كيلو واط ساعة موفرة',
      'hero.teamMembers': 'أعضاء الفريق',
      'hero.solarIrradiance': 'الإشعاع الشمسي',
      'hero.powerOutput': 'الطاقة المنتجة',
      'hero.cleanEnergy': '100% طاقة نظيفة',
      
      // About Us
      'about.title': 'من نحن',
      'about.para1': 'تتكون سما إنرجي من مجموعة من المهنيين ذوي الخبرة في قطاع الطاقة الذين يعملون لمساعدة الشركات والمؤسسات في جميع أنحاء المنطقة لتأمين الاستخدام الأكثر فعالية من حيث التكلفة لمرافقهم.',
      'about.para2': 'منذ تأسيسها، ساعدت سما إنرجي العديد من الشركات على تطوير استراتيجية الطاقة الخاصة بهم وتحسين استخدام الطلب والاستهلاك المعقد للمباني. مع عملاء متنوعين مثل المطارات والمباني التجارية والسكنية ومعسكرات العمال والمشاريع الهندسية، نحن فخورون بسجلنا الحافل في تقديم أفضل مشاريع توفير الطاقة والمشورة الموثوقة باستمرار.',
      'about.para3': 'بفضل خبرتنا الواسعة وخبرتنا الأساسية، يمكن لسما إنرجي الحصول على أكبر مجموعة من الحلول المخصصة لعملك ومرافقك، ولدينا مجموعة من الخدمات للعملاء التي تساعدهم على النمو.',
      
      // Solar Solutions
      'solutions.title': 'حلولنا للطاقة الشمسية',
      'solutions.subtitle': 'خدمات شاملة للطاقة وخطوط الإنتاج مصممة خصيصاً لاحتياجاتك',
      'solutions.renewableTitle': 'خدمات الطاقة المتجددة',
      'solutions.productionTitle': 'خدمات خطوط الإنتاج',
      'solutions.learnMore': 'اعرف المزيد',
      
      // Achievements
      'achievements.title': 'إنجازاتنا',
      'achievements.subtitle': 'تقديم التميز في حلول الطاقة الشمسية',
      'achievements.energySaving': 'توفير الطاقة (كيلو واط ساعة)',
      'achievements.productionLines': 'خطوط الإنتاج العاملة',
      'achievements.successfulProjects': 'المشاريع الناجحة',
      'achievements.workingHands': 'الأيدي العاملة',
      
      // Services Page
      'services.title': 'حلولنا للطاقة الشمسية',
      'services.subtitle': 'خدمات شاملة للطاقة وخطوط الإنتاج مصممة خصيصاً لاحتياجاتك',
      'services.renewableContent1': 'تقدم سما إنرجي حلول الطاقة لخدمتك من خلال خبرتها الواسعة في مجالات الهندسة والمشتريات والبناء (EPC) والتشغيل والصيانة فيما يتعلق بالطاقة الشمسية وطاقة الرياح ومضخات المياه.',
      'services.renewableContent2': 'تنتج سما إنرجي حلولاً متكاملة لمحطات الطاقة الشمسية وطاقة الرياح عالية الجودة التي تكون جاهزة للعمل للمستثمرين النهائيين على المستويين المحلي والدولي، وتتجه نحو المستقبل بثقة الهندسة ومفهوم الخدمة الصديق للبيئة الذي يركز على كفاءة الطاقة.',
      'services.renewableContent3': 'تركز سما إنرجي على الأنظمة التي تزيد من أداء دورة الحياة والعوائد للمستثمرين.',
      'services.renewableContent4': 'تقدم سما إنرجي للمستثمرين حول العالم حلولاً في مراحل التصميم والبناء والإنتاج لمشاريع بناء المحطات لتوليد الطاقة من المصادر الطبيعية بنهج صديق للبيئة. تقدم سما إنرجي للمستثمرين ومطوري الأعمال خدمات كاملة متعلقة بإدارة المشاريع والحلول في مجال الهندسة والمشتريات والبناء من خلال كادرها المتخصص في هذه المجالات، باستخدام خبرتها الطويلة في مجال التركيبات الأرضية والسطحية (الألواح الشمسية الأرضية وألواح الطاقة الشمسية على الأسطح).',
      'services.renewableContent5': 'تنتج سما إنرجي حلول الأنظمة التي تحمي التوازن العالمي من خلال تقليل الأضرار البيئية إلى الحد الأدنى وتوفير فوائد كبيرة للمستثمرين في نفس الوقت. تقدم إنتك خدماتها كشركة هندسة وتوريد وبناء مهنية مع التركيز على رضا العملاء.',
      'services.productionContent1': 'تقدم لك سما إنرجي خدمة تركيب خطوط الإنتاج المهنية بفضل فريقنا المتخصص في بيع وصيانة وتركيب جميع خطوط الإنتاج المستعملة والجديدة.',
      'services.productionContent2': 'نتميز في سما إنرجي في تقديم الخدمات الإلكترونية والكهربائية، بما في ذلك الخدمات الكهربائية والتركيبات الكهربائية لجميع خطوط الإنتاج وتصميم وصيانة لوحات التحكم لجميع خطوط الإنتاج، بالإضافة إلى تشغيل وضبط وصيانة آلات التعبئة والتغليف.',
      'services.productionContent3': 'نقدم مجموعة مميزة وعالية الأداء من المحركات والوصلات وعلب التروس الموثوقة لكل صناعة وتطبيق يلبي أعلى معايير الأداء ومتطلبات الجودة.',
      'services.productionContent4': 'تشمل الخدمات الميكانيكية توفير وتركيب جميع قطع الغيار المطلوبة لخطوط الإنتاج ومستلزمات المصانع، وزيادة كفاءة خطوط الإنتاج.',
      'services.productionContent5': 'نصنع ونخرط القطع الميكانيكية الصعبة بدقة عالية، وآلات القطع والحفر للحديد والخرسانة، ونصمم وننتج دوائر وأنظمة التحكم الهيدروليكية. تصنيع المنصات المتحركة والونشات والرافعات المفتوحة.',
      
      // Training
      'training.title': 'برامج التدريب',
      'training.subtitle': 'تدريب شامل في تقنيات الطاقة الشمسية وخطوط الإنتاج',
      'training.form.title': 'استمارة التدريب',
      'training.form.subtitle': 'يمكنك التقدم في إحدى الدورات المتاحة عبر ملئ الاستمارة وسيتم التواصل معك',
      'training.form.name': 'اسمك',
      'training.form.email': 'بريدك الإلكتروني',
      'training.form.phone': 'رقم الجوال',
      'training.form.course': 'اختيار الدورة',
      'training.form.additionalInfo': 'معلومات أخرى',
      'training.form.submit': 'إرسال',
      'training.form.submitting': 'جاري الإرسال...',
      'training.form.namePlaceholder': 'أدخل اسمك الكامل',
      'training.form.emailPlaceholder': 'example@email.com',
      'training.form.phonePlaceholder': '9xxxxxxxx',
      'training.form.coursePlaceholder': 'اختر الدورة',
      'training.form.additionalInfoPlaceholder': 'أضف أي معلومات إضافية تود مشاركتها...',
      'training.form.nameRequired': 'الاسم مطلوب',
      'training.form.emailRequired': 'البريد الإلكتروني مطلوب',
      'training.form.emailInvalid': 'يرجى إدخال بريد إلكتروني صحيح',
      'training.form.phoneRequired': 'رقم الهاتف مطلوب',
      'training.form.courseRequired': 'يرجى اختيار دورة',
      'training.success.title': 'تم إرسال الطلب بنجاح',
      'training.success.description': 'سنراجع طلبك ونتواصل معك قريباً',
      'training.error.title': 'حدث خطأ',
      'training.error.description': 'يرجى المحاولة مرة أخرى',
      'training.courses.solarEnergy': 'تدريب الطاقة الشمسية',
      'training.courses.productionLine': 'تدريب خطوط الإنتاج',
      'training.courses.certification': 'برامج الشهادات',
      'training.courses.maintenance': 'تدريب الصيانة',
      
      // Sectors
      'sectors.trade': 'القطاع التجاري',
      'sectors.consulting': 'قطاع الاستشارات والخدمات',
      'sectors.factory': 'قطاع تركيب المصانع',
      'sectors.training': 'قطاع التدريب والتوظيف',
      
      // Careers
      'careers.title': 'طلب وظيفة',
      'careers.subtitle': 'يمكنك التقدم للوظيفة وسنتواصل معك',
      'careers.form.name': 'الاسم',
      'careers.form.email': 'البريد الإلكتروني',
      'careers.form.phone': 'رقم الهاتف',
      'careers.form.specialization': 'التخصص',
      'careers.form.cv': 'رفع السيرة الذاتية',
      'careers.form.additional': 'معلومات إضافية تريد ذكرها',
      'careers.form.submit': 'إرسال',
      'careers.form.submitting': 'جاري الإرسال...',
      'careers.form.namePlaceholder': 'أدخل اسمك الكامل',
      'training.form.emailPlaceholder': 'example@email.com',
      'careers.form.phonePlaceholder': '9xxxxxxxx',
      'careers.form.cvPlaceholder': 'اختر ملف السيرة الذاتية',
      'careers.form.additionalPlaceholder': 'أضف أي معلومات إضافية تود مشاركتها...',
      'careers.success.title': 'تم إرسال الطلب بنجاح',
      'careers.success.description': 'سنراجع طلبك ونتواصل معك قريباً',
      'careers.error.title': 'حدث خطأ',
      'careers.error.description': 'يرجى المحاولة مرة أخرى',
      'careers.whyWorkWithUs': 'لماذا تعمل معنا؟',
      'careers.growthOpportunities': 'فرص النمو',
      'careers.growthDesc': 'انضم إلى شركة متنامية في قطاع الطاقة المتجددة',
      'careers.sustainableImpact': 'التأثير المستدام',
      'careers.sustainableDesc': 'احدث تأثيراً إيجابياً على البيئة والمجتمع',
      'careers.teamEnvironment': 'بيئة الفريق',
      'careers.teamDesc': 'اعمل مع فريق متحمس ومتفانٍ',
      
      // Contact
      'contact.title': 'اتصل بنا',
      'contact.subtitle': 'دعنا نبقى على تواصل',
      'contact.location': 'موقعنا',
      'contact.address': 'اليمن - صنعاء - مدينة الأصبحي - شارع الأربعين\nأمام مطعم رويال بروستر',
      'contact.email': 'راسلنا',
      'contact.phone': 'اتصل بنا',
      'contact.callQuote': 'اتصل للحصول على عرض سعر مجاني',
      'contact.emailConsultation': 'استشارة عبر البريد الإلكتروني',
      
      // Common - Our Customers, Our Ambitions, Customer Reviews sections
      'common.customers': 'عملاؤنا',
      'common.customersSubtitle': 'موثوق بنا من قبل المنظمات الرائدة في جميع أنحاء العالم',
      'common.ambitions': 'طموحاتنا',
      'common.ambitionsSubtitle': 'نقود الطريق نحو مستقبل مستدام وفعال في الطاقة',
      'common.reviews': 'آراء العملاء',
      'common.reviewsSubtitle': 'ما يقوله عملاؤنا عن حلول الطاقة الشمسية لدينا',
      'common.message': 'رسالتنا',
      'common.messageDescription': 'جعل البيئة المبنية مثالاً رائداً لكفاءة الطاقة في المنطقة والعالم.',
      'common.vision': 'رؤيتنا',
      'common.visionDescription': 'جعل اليمن واحدة من أكثر المدن استدامة في العالم',
      'common.objectives': 'الأهداف',
      'common.objectivesDescription': 'إنشاء سوق المقاولات لتنفيذ أعمال الطاقة والخدمات وخطوط الإنتاج في اليمن',
      
      // Customer Reviews
      'reviews.testimonial1': 'هنا يوضع الرأي',
      'reviews.customer1Name': 'محمد',
      'reviews.customer1Company': 'اليونيسف',
      'reviews.testimonial2': 'هنا يوضع الرأي',
      'reviews.customer2Name': 'أحمد',
      'reviews.customer2Company': 'الربيع لأنظمة الطاقة',
      'reviews.testimonial3': 'هنا يوضع الرأي',
      'reviews.customer3Name': 'علي',
      'reviews.customer3Company': 'منظمة الأغذية والزراعة',

      // Customer Organizations
      'customers.wfp': 'برنامج الأغذية العالمي',
      'customers.unicef': 'صندوق الأمم المتحدة للطفولة',
      'customers.who': 'منظمة الصحة العالمية',
      'customers.saveTheChildren': 'منظمة دولية',
      'customers.icrc': 'اللجنة الدولية للصليب الأحمر',
      'customers.unops': 'مكتب الأمم المتحدة لخدمات المشاريع',
      'customers.undp': 'برنامج الأمم المتحدة الإنمائي',
      'customers.nrc': 'المجلس النرويجي للاجئين',
    }
  };

  const t = (key: string): string => {
    // Always fall back to the key if translation is missing:
    return (translations[language][key] !== undefined && translations[language][key] !== null)
      ? translations[language][key]
      : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
