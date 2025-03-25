const Application = require('@waline/vercel');

module.exports = Application({
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
  async avatarUrl(comment) {
    const reg = new RegExp('(\\d+)@qq\\.com$', 'i');
    const mail = comment.mail;
    if (reg.test(mail)) {
      const q = mail.replace(/@qq\.com/i, '').toLowerCase();
      return 'https://q1.qlogo.cn/headimg_dl?dst_uin=' + q + '&spec=4';
    }
  },
});
