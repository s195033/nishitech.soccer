$(function(){	
    $('.movieshow').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		autoplaySpeed: 3000,//スライドのスピード。初期値は300。
        speed: 600,
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		centerMode: true,//要素を中央ぞろえにする
		variableWidth: true,//幅の違う画像の高さを揃えて表示
		dots: true,//下部ドットナビゲーションの表示
        arrows: false,
        pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
	});
});