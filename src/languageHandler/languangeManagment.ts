import AsyncStorage from '@react-native-async-storage/async-storage';

//Arabic Part
export const saveArLanguage = async () => {
  const saveCommentAr = AsyncStorage.setItem('commentAr', 'تعليق');
  const saveLinkAr = AsyncStorage.setItem('linkAr', 'حلقة الوصل');
  const saveSeAr = AsyncStorage.setItem('seAr', 'المبرمج');
  const saveDifficultyAr = AsyncStorage.setItem('difficultyAr', 'صعوبة');
  const savePlatformAr = AsyncStorage.setItem('platformAr', 'برنامج');
  const saveStatusAr = AsyncStorage.setItem('statusAr', 'الحالة');
  const saveVersionAr = AsyncStorage.setItem('versionAr', 'الإصدار');
  const saveSizeAr = AsyncStorage.setItem('sizeAr', 'حجم');
  const saveByAr = AsyncStorage.setItem('byAr', 'مراجعة بواسطة BY'); // I don't know BY AH HT in arabic
  const saveAhBy = AsyncStorage.setItem('ahAr', 'مراجعة بواسطة AH');
  const saveHtBy = AsyncStorage.setItem('htAr', 'مراجعة بواسطة HT');
  const saveDateAr = AsyncStorage.setItem('dateAr', 'تاريخ');
  const saveAll = async () => {
    await Promise.all([
      saveCommentAr,
      saveLinkAr,
      saveSeAr,
      saveDifficultyAr,
      savePlatformAr,
      saveStatusAr,
      saveVersionAr,
      saveSizeAr,
      saveByAr,
      saveAhBy,
      saveHtBy,
      saveDateAr,
    ]);
  };
  saveAll();
};

export const retrieveArLanguage = async () => {
  const commentAr = AsyncStorage.getItem('commentAr');
  const linkAr = AsyncStorage.getItem('linkAr');
  const seAr = AsyncStorage.getItem('seAr');
  const difficultyAr = AsyncStorage.getItem('difficultyAr');
  const platformAr = AsyncStorage.getItem('platformAr');
  const statusAr = AsyncStorage.getItem('statusAr');
  const versionAr = AsyncStorage.getItem('versionAr');
  const sizeAr = AsyncStorage.getItem('sizeAr');
  const ByAr = AsyncStorage.getItem('byAr');
  const AhAr = AsyncStorage.getItem('ahAr');
  const HtAr = AsyncStorage.getItem('htAr');
  const dateAr = AsyncStorage.getItem('dateAr');

  const retrieveAll = async () => {
     let results = await Promise.all([
      commentAr,
      linkAr,
      seAr,
      difficultyAr,
      platformAr,
      statusAr,
      versionAr,
      sizeAr,
      ByAr,
      AhAr,
      HtAr,
      dateAr,
    ]);
    return results;
  };
  retrieveAll();
};

// English Part
export const saveEngLanguage = async () => {
  const saveCommentEng = AsyncStorage.setItem('commentEng', 'Comment');
  const saveLinkEng = AsyncStorage.setItem('linkEng', 'Link');
  const saveSeEng = AsyncStorage.setItem('seEng', 'SE');
  const saveDifficultyEng = AsyncStorage.setItem('difficultyEng', 'Diffculty');
  const savePlatformEng = AsyncStorage.setItem('platformEng', 'Platform');
  const saveStatusEng = AsyncStorage.setItem('statusEng', 'Status');
  const saveVersionEng = AsyncStorage.setItem('versionEng', 'Version');
  const saveSizeEng = AsyncStorage.setItem('sizeEng', 'Size');
  const saveByEng = AsyncStorage.setItem('byEng', 'Review by BY');
  const saveAhEng = AsyncStorage.setItem('ahEng', 'Review by AH');
  const saveHtEng = AsyncStorage.setItem('htEng', 'Review by HT');
  const saveDateEng = AsyncStorage.setItem('dateEng', 'Date');

  const saveAll = async () => {
    await Promise.all([
      saveCommentEng,
      saveLinkEng,
      saveSeEng,
      saveDifficultyEng,
      savePlatformEng,
      saveStatusEng,
      saveVersionEng,
      saveSizeEng,
      saveByEng,
      saveAhEng,
      saveHtEng,
      saveDateEng,
    ]);
  };
  saveAll();
};

export const retrieveEngLanguage = async () => {
  const commentEng = AsyncStorage.getItem('commentEng');
  const linkEng = AsyncStorage.getItem('linkEng');
  const seEng = AsyncStorage.getItem('seEng');
  const difficultyEng = AsyncStorage.getItem('difficultyEng');
  const platformEng = AsyncStorage.getItem('platformEng');
  const statusEng = AsyncStorage.getItem('statusEng');
  const versionEng = AsyncStorage.getItem('versionEng');
  const sizeEng = AsyncStorage.getItem('sizeEng');
  const ByEng = AsyncStorage.getItem('byEng');
  const AhEng = AsyncStorage.getItem('ahEng');
  const HtEng = AsyncStorage.getItem('htEng');
  const dateEng = AsyncStorage.getItem('dateEng');

  const retrieveAll = async () => {
      let results = await Promise.all([
      commentEng,
      linkEng,
      seEng,
      difficultyEng,
      platformEng,
      statusEng,
      versionEng,
      sizeEng,
      ByEng,
      AhEng,
      HtEng,
      dateEng,
    ]);
    return results
  };
  retrieveAll();
  
};
