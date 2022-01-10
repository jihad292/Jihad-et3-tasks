import {LanguageStore} from '../../../mobxStore/language-store';

const i18n = {
  LG: {
    comment: {
      ARABIC: 'تعليق',
      ENGLISH: 'Comment',
    },
    link: {
      ARABIC: 'حلقة الوصل',
      ENGLISH: 'Link',
    },
    se: {
      ARABIC: 'المبرمج',
      ENGLISH: 'SE',
    },
    difficulty: {
      ARABIC: 'صعوبة',
      ENGLISH: 'Difficulty',
    },
    platform: {
      ARABIC: 'برنامج',
      ENGLISH: 'Platform',
    },
    status: {
      ARABIC: 'الحالة',
      ENGLISH: 'Status',
    },
    version: {
      ARABIC: 'الإصدار',
      ENGLISH: 'Version',
    },
    size: {
      ARABIC: 'حجم',
      ENGLISH: 'Size',
    },
    by: {
      ARABIC: 'مراجعة  BY',
      ENGLISH: 'Review by BY',
    },
    ah: {
      ARABIC: 'مراجعة  AH',
      ENGLISH: 'Review by AH',
    },
    ht: {
      ARABIC: 'مراجعة  HT',
      ENGLISH: 'Review by HT',
    },
    date: {
      ARABIC: 'تاريخ',
      ENGLISH: 'Date',
    },
    id: {
      ARABIC: 'بطاقة تعريف',
      ENGLISH: 'ID',
    },
    drawer_Home: {
      ARABIC: 'الصفحة الرئيسية',
      ENGLISH: 'Home',
    },
    drawer_Prs: {
      ARABIC: 'عرض المشاكل',
      ENGLISH: 'Prs',
    },
    drawer_Add_Pr: {
      ARABIC: 'اضافة مشكلة',
      ENGLISH: 'Add Pr',
    },
    drawer_Language: {
      ARABIC: 'لغة',
      ENGLISH: 'Language',
    },
  },
  get(message: string) {
    return this.LG[message] === undefined || this.LG[message] === undefined
      ? message
      : this.LG[message][LanguageStore().languageText.get()];
  },
};

export default i18n;
