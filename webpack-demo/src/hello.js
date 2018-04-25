import san from 'san';

export default san.defineComponent({
  template: `
  <div>
    <h1>{{ msg }}</h1>
    <ul>
        <li s-for="item in list">{{ item }}</li>
    </ul>
    <div class="warning">
        <div class="sector sector-1"></div>
        <div class="sector sector-2"></div>
        <div class="sector sector-3"></div>
    </div>
  </div>
  `,
  initData() {
    return {
      msg: 'hello, san!',
      list: ['js', 'css', 'html', 'node'],
    };
  },
});

