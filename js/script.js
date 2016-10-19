$(document).ready(function () {

  setTimeout(function () {
    $('.searching-layer').addClass('hide');
    $('.search-layer').removeClass('hide');
  }, 3000);

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

  $('.media-plus').on('click', function (e) {
    e.preventDefault();
  });

  $(document).on('mouseover','.dropdown',function () {
    if($(window).width() > 768 ){
      $(this).addClass('open');
    }
  });
  $(document).on('mouseout','.dropdown',function () {
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
      $('.custom-search input[type=text]').attr('placeholder', "Enter Pinyin, 汉子, or English").css('font-style','normal');
    } else{
      $('.custom-search input[type=text]').attr('placeholder', "Enter keywords of posts").css('font-style','italic');
    }
  });

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

    if($(this).children('span').length == 0){
    } else if($(this).children('span').length == 1){
      $(this).parents('tr').find('a.arrow-link').parent('li').addClass('hide').removeClass('visible-xs');
    } else if($(this).children('span').length == 2){
      $(this).addClass('clkbl');
    } else{
      $(this).parents('tr').find('a.arrow-link').parent('li').addClass('hide').removeClass('visible-xs');
      $(this).parents('tr').find('a.learn-more').parent('li').addClass('hide').removeClass('visible-xs');
      $(this).addClass('clkbl');
    }
  });
  $('.table-inner .symbol-list').each(function () {

    if($(this).children('li').length == 0){
    } else if($(this).children('li').length == 1){
      $(this).parents('tr').find('a.arrow-link').parent('li').addClass('hide');
    } else if($(this).children('li').length == 2){
      console.log($(this).children('li').length);
      $(this).addClass('clkbl');
    } else{
      $(this).parents('tr').find('.learn-link-wrap .learn-more-link').addClass('hide');
      // $(this).parents('tr').find('.arrow-wrap').addClass('hide');
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

  $('.tbl-wrap .arrow-link, .tbl-wrap .symbol-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).parents('tr.line-wrap').next('.detail-block').toggleClass('hide');
  });

  $('.dictionary-wrap .close').on('click', function (e) {
    e.preventDefault();
    var parent = $(this).parent();
    $('.button-wrap').find('.current').removeClass('current');
    parent.hide();
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
    if($(this).hasClass('on')){
      $(this).html('<span><i class="icon-icon9"></i></span>');
    } else{
      $(this).html('<span><i class="icon-icon8"></i></span>');
    }
  });


});
