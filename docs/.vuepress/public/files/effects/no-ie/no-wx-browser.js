$(function(){
  // 检测微信浏览器，并要求在外部浏览器打开
  var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAAD9CAMAAADUKH8VAAAAqFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f38a+qtAAAANnRSTlMAd0S7Ee4iM8yZZt1ViKoDB/MK9zr74hTAKRkO1JaBHue4LqNs69fFs0utfGN1nY9xWV1QhYzatzoZAAANzElEQVR42uzc2ZKaUBAG4N8d48ImIKAI7lucmTjTvP+bJZNUUqWyOFV9kYv/e4SuA/R2AH1NuABpG/VByuKd2wXpmrjyAtI1EklDkKZglufyAdJ08PI893lUVV0kz3NJQHoiP//kMwFQdPbynEdV2Vjy31IeVTWhn/8h7yAla/kbVL5VtTj7z3j+wreqnl5HJJ37s5eBx6Oq5SRpfwljh+jHOB2BFLRb8x4Aw8AvvStIQRzi09QwQcpaMwvEoP7/+PhD384AaTMYVH2zHUiZOZuClDnbDKQsGIxByhb+HKQsZCtF32TzHaTsYJ9ByobeAaTsm0xAyr7LEqTspcNVanXjQQzS5bR27FFrC4wje9Tauj6309X1XBZU6prCgb+6s/RAykYdLlFpM49GANLlbMfMqLQtbGZU6prCbqq6b3YTpKzPDWp9sx2/U9oim/NpdVf7B0hZYnOWos3Mtg5I12JwASk7eG8gZSOXk1RtsdHi0K+S03bwRT3hKKVc+PYxbu2m46Rp4QsaNrv+JYJzK/XcwTSbDjx7N/zStj8TqkLdZOP68+HCskzTCRsDubSff/oboEeLpOPt32L8E3xIK8BzXjYspx6Z562MJ+b9eHTv4BntQcYO1YNl5hkHC/deJcEz3pj5PzDX7qZhFQ5IvR7qmfuU6353rJFkJbEL7ZWJWhP7BLo1kr6DEvNn8s8+tyjuNaRvokwo76gTepxN3xnKMUYpK5u1UaPP9vSdMDUiVHiVCaotXQ6nbjmZ20OVSe3S6crmj2hvrWWNStF2hUpNjxdSb0VpK0YlK5tZqOBMfe763Rp5TdSY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';

  function isWeixinBrowser(){
    return /micromessenger/.test(navigator.userAgent.toLowerCase());
  }
  if (isWeixinBrowser()) {
    $('body').append(' <div class="wx-openbrowser-wrap"></div>');
    $('.wx-openbrowser-wrap').css({
      'position': 'fixed',
      'z-index': '999',
      'top': '0',
      'left': '0',
      'right': '0',
      'bottom': '0',
      'background-color': 'rgba(0, 0, 0, 0.5)',
      'background-image': 'url('+img+')',
      'background-repeat': 'no-repeat',
      'background-position': 'top right',
      'background-size': '260px'
    });
  }

});