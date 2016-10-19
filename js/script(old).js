$(document).ready(function () {

  (function() {
    // Add 'has_children' class to menus
    jQuery.each($('.menu-item').has('ul.sub-menu'), function() {
      $(this).addClass('dropdown');
      $(this).find('>a').addClass('dropdown-toggle');
      $(this).find('>ul.sub-menu').addClass('dropdown-menu');
      var aLink = $(this).find('>a');
      var spanIcon = ' <span class="fa fa-chevron-down"></span>';
      aLink.append(spanIcon);
    });

  })();

  $('.tone-check td label').on('click', function () {
    if($(this).text() == "off"){
      $('body').addClass('mono');
    } else{
      $('body').removeClass('mono');
    }
  });

  if($('.button-wrap .cstm-button').is(':visible')){
    $('.search-wrap').addClass('js-page');
  } else{
    $('.search-wrap').removeClass('js-page');
  }

  setTimeout(function () {
    $('.searching-layer').addClass('hide');
    $('.search-layer').removeClass('hide');
  }, 3000);

  $('.media-plus').on('click', function (e) {
    e.preventDefault();
  });
  $('.flex-wrap .tbl-pls-btn.cstm').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('smpl');
  });
  $('.dropdown-toggle .tbl-pls-btn.cstm').on('click', function () {
    $(this).toggleClass('smpl');
  });
  $('.flex-wrap .dropdown-toggle .tbl-pls-btn').on('click', function () {
    $(this).toggleClass('smpl');
  });

  $('.dropdown').on('mouseover',function () {
    if($(window).width() > 768 ){
      $(this).addClass('open');
    }
  });
  $('.dropdown').on('mouseout',function () {
    if($(window).width() > 768 ){
      $(this).removeClass('open');
    }
  });
  $('.main-content .dropdown .dropdown-toggle').on('click',function (e) {
    e.preventDefault();
  });

  $(window).on('resize', function () {
    dropdownMainMenu();
  });
  function dropdownMainMenu() {
    if($(window).width() < 768 ){
      $('.nav.navbar-nav .dropdown').addClass('open');
    } else{
      $('.nav.navbar-nav .dropdown').removeClass('open');
    }
  };
  dropdownMainMenu();

  $('.cstm-drop .dropdown-toggle').on('click',function () {
    $(this).parent('.dropdown').toggleClass('open');
  });

  $('.custom-search input[type=text]').on('input', function () {
    if($(this).val().length > 1){
      $('.custom-search .cstm-close').removeClass('hide');
    } else{
      $('.custom-search .cstm-close').addClass('hide');
    }
  });

  $('.custom-search .cstm-close').on('click', function () {
    $(this).addClass('hide');
    $(this).prev('input[type=text]').val('');
  });

  $('.custom-check input').on('click', function () {
    if($(this).attr('id') == 'dictionary'){
      $('.custom-search input[type=text]').attr('placeholder', "Enter Pinyin, 汉子, or English");
    } else{
      $('.custom-search input[type=text]').attr('placeholder', "Enter keywords of posts");
    }
  });

  $('.custom-search > input[type=text]');

  $('.button-wrap button').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('current');
    var openBlock = $(this).data('link-open');
    if($(this).hasClass('current')){
      $(openBlock).show();
      customScrollbar();
    } else{
      $(openBlock).hide();
    }
    $(function() {
      $('#pinyinEditor').draggable();
    });
  });

  $('#togglePronunciation').on('click', function (e) {
    e.preventDefault();
    var text = $(this).text();
    var thisEl = $(this).find('span');
    var canTxt = $(this).data('cantonese');
    var manTxt = $(this).data('mandarin');
    if(text == canTxt){
      thisEl.text(manTxt);
      $('.mandarin-blk').addClass("hide");
      $('.cantonese-blk').removeClass('hide');
      $('.table.cstm-table .detail-block > td').attr('colspan','5');
    } else{
      thisEl.text(canTxt);
      $('.mandarin-blk').removeClass("hide");
      $('.cantonese-blk').addClass('hide');
      $('.table.cstm-table .detail-block > td').attr('colspan','4');
    }
  });

  if($('.banner-wrap img').attr('src') == ''){
    $('.banner-wrap').addClass('hide');
  } else{
    $('.banner-wrap').removeClass('hide');
  }

  $('.dtl-blk-btn').each(function () {

    if($(this).children('span, a').length == 0){
    } else if($(this).children('span, a').length == 1){
      $(this).parents('tr').find('a.arrow-link').parent('li').addClass('hide').removeClass('visible-xs');
    } else if($(this).children('span, a').length == 2){
      $(this).addClass('clkbl');
    } else{
      $(this).parents('tr').find('a.arrow-link').parent('li').addClass('hide').removeClass('visible-xs');
      $(this).parents('tr').find('a.learn-more').parent('li').addClass('hide').removeClass('visible-xs');
      $(this).addClass('clkbl');
    }
  });

  $('.tbl-wrap .inside-list .arrow-link, .tbl-wrap .inside-list .dtl-blk-btn.clkbl').on('click', function (e) {
    e.preventDefault();
    $(this).parents('tr').next('.detail-block').toggleClass('hide');
  });
  $('.detail-block .tbl-close').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.detail-block').toggleClass('hide');
  });

  $('.dictionary-wrap .close').on('click', function (e) {
    e.preventDefault();
    var parent = $(this).parent();
    $('.button-wrap').find('.current').removeClass('current');
    parent.hide();
  });
  $('.dictionary-wrap .mark-list li input[type=button]').on('click', function () {
    var listVal = $(this).val();
    var textareaInner = $('#pinyinEditor .dictionary-txt textarea').html();
    $('#pinyinEditor .dictionary-txt textarea').html(textareaInner + listVal);
  });

  function customScrollbar() {
    $(".symbol-wrap").mCustomScrollbar();
  };

  $('.symbol-media').each(function () {
    var layerCount = $(this).children('div.symbol-layer-wrap').length;
    if(layerCount > 1){
      $(this).find('.symbol-layer-wrap').addClass('several');
    }
  });

  $('.controls .play-stop').on('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
    var imgPlay = $(this).parents('.symbol-layer-wrap').find('.symbol-layer img.play');
    var imgStop = $(this).parents('.symbol-layer-wrap').find('.symbol-layer img.stop');
    if($(this).hasClass('on')){
      $(this).html('<span><i class="icon-icon9"></i></span>');
      imgStop.addClass('hidden');
      imgPlay.removeClass('hidden');
    } else{
      $(this).html('<span><i class="icon-icon8"></i></span>');
      imgPlay.addClass('hidden');
      imgStop.removeClass('hidden');
    }
  });


});
