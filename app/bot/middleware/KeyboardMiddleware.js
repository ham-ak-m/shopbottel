const {
  MAIN_BUTTON_TEXT,
  categoryListButton,
} = require("../utils/ButtonManager");
const { CATEGORY_LIST } = require("../utils/MessageHandler");
const categoryList = require("../data/category.json");

module.exports = (ctx, next) => {
  if (!ctx.message) return next();
  const text = ctx.message.text;
  if (text)
    if (Object.values(MAIN_BUTTON_TEXT).includes(text) && EventListener[text])
      return EventListener[text](ctx);
  next();
};

const EventListener = {
  [MAIN_BUTTON_TEXT.ONLINE_BUY]: (ctx) => {
    ctx.reply(CATEGORY_LIST, categoryListButton(categoryList));
  },
  [MAIN_BUTTON_TEXT.COMMENT]: (ctx) => {
    ctx.reply("voordon da! 1");
  },
  [MAIN_BUTTON_TEXT.CATALOG]: (ctx) => {
    ctx.reply("voordon da! 2");
  },
  [MAIN_BUTTON_TEXT.FAVS]: (ctx) => {
    ctx.reply("voordon da! 3");
  },
  [MAIN_BUTTON_TEXT.CART]: (ctx) => {
    ctx.reply("voordon da! 4");
  },
  [MAIN_BUTTON_TEXT.MY_BUYS]: (ctx) => {
    ctx.reply("voordon da! 5");
  },
};
