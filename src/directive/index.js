// 自定义指令

export const imgError = {
  inserted: (el, { value }) => {
    el.onerror = function () {
      el.src = value;
    };
  },
};