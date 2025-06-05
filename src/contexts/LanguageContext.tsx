
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
      'services.productionContent5': 'We manufacture and turn difficult mechanical parts with high precision, cutting and drilling machines for iron and concrete, and design and produce hydraulic control circuits and systems. Manufacture of mobile platforms, winches, winches and open lifts.',
      
      // Training
      'training.title': 'Training Programs',
      'training.subtitle': 'Comprehensive training in solar energy and production line technologies',
      
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
      'careers.form.emailPlaceholder': 'example@email.com',
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
      'contact.email': 'Email Us',
      'contact.phone': 'Call Us',
      'contact.callQuote': 'Call for Free Quote',
      'contact.emailConsultation': 'Email Consultation',
      
      // Common
      'common.customers': 'Our Customers',
      'common.ambitions': 'Our Ambitions',
      'common.reviews': 'Customer Reviews',
      'common.message': 'Our Message',
      'common.vision': 'Our Vision',
      'common.objectives': 'Objectives',
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
      'careers.form.emailPlaceholder': 'example@email.com',
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
      'contact.email': 'راسلنا',
      'contact.phone': 'اتصل بنا',
      'contact.callQuote': 'اتصل للحصول على عرض سعر مجاني',
      'contact.emailConsultation': 'استشارة عبر البريد الإلكتروني',
      
      // Common
      'common.customers': 'عملاؤنا',
      'common.ambitions': 'طموحاتنا',
      'common.reviews': 'آراء العملاء',
      'common.message': 'رسالتنا',
      'common.vision': 'رؤيتنا',
      'common.objectives': 'الأهداف',
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
