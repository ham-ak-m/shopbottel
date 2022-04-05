const {
  productListButton,
} = require("../utils/ButtonManager");
const { PRODUCT_LIST_MESSAGE } = require("../utils/MessageHandler");
const productList = require("../data/product.json");

const ActionMap = {
  CAT: /^CAT_\w+/,
  PRODUCT: /^PRODUCT_\w+/
}

module.exports = (ctx, next) => {
  if (!ctx.update.callback_query) return next();
  const callback_data = ctx.update.callback_query.data;
  if (callback_data) {
    const actionValues = Object.values(ActionMap)
    for (let i = 0; i < actionValues.length; i++) {
      const isMatch = callback_data.match(actionValues[i])
      if (isMatch && EventListener[Object.keys(ActionMap)[i]])
        EventListener[Object.keys(ActionMap)[i]](ctx, isMatch);


    }
  }
  next();
};

const EventListener = {
  CAT: (ctx, matches) => {
    const cat = matches[0].split("_")[1];
    productList.filter(item => item.cat == cat)
    ctx.reply(PRODUCT_LIST_MESSAGE, productListButton(productList.filter(item => item.cat == cat)));

  },
  PRODUCT: (ctx) => {

  }
};
