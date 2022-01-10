import memoize from "lodash/memoize";
import round from "lodash/round";
import { Dimensions } from "react-native";
import { computed } from "mobx";

class Et3Theme {
  getAppUnits = computed(() => {
    const initialHeight = Dimensions.get("screen").height;
    const initialWidth = Dimensions.get("screen").width;
    const width = initialHeight > initialWidth ? initialWidth : initialHeight;
    const height = initialHeight > initialWidth ? initialHeight : initialWidth;
    const resolutionHeight = 192;
    const resolutionWidth = 108;
    const oldRation = 192 / 108;
    const unitX = round(width / resolutionWidth, 5);
    const unitY = round(height / resolutionHeight, 5);
    let subRectWidth = width;
    let subRectHeight = width * oldRation;
    if (unitY < unitX) {
      subRectWidth = height / oldRation;
      subRectHeight = height;
    }
    const childX = round(subRectWidth / resolutionWidth, 5);
    const childY = round(subRectHeight / resolutionHeight, 5);
    return { unitX, unitY, childX, childY,initialHeight,initialWidth };
  });
}

export const getTheme = memoize(() => {
  return new Et3Theme();
});

export default getTheme;
