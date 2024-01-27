function preloader(){
	$(()=>{
		setInterval(()=>{

			let p = $('.preloader');

			p.css('opacity',0);
			setInterval(
				()=> p.remove(),
				parseInt(p.css('--duration')) * 1000

			);
		},4900);
	});
}
preloader();

const t = [
'Занимаюсь адаптивной версткой сайтов на HTML и CSS.\n',
'Делаю верстку на Visual Studio Code, пользуясь \n',
'препроцессором Less.Имею навык в использовании\n',
'Parallax, Animation, вставки видео, слайдеров,\n',
'всплывающих окон и интеграции геокарт. Также в\n',
'создании многостраничных сайтов и размещении\n',
'их на хостинге. Есть желание поработать?\n',
'Ссылки на соцсети выше)\n',
'Спасибо за внимание!'

];

function typeText(){
	let line = 0;
	let count = 0;
	let out = '';
	let htmlOut = document.querySelector('.out');
	function typeLine(){
		let interval = setTimeout(function(){
			out+=t[line][count];
			htmlOut.innerHTML = out + '|';
			count++;
			if(count>=t[line].length){
				count = 0;
				line++;
				if(line==t.length){
					clearTimeout(interval);
					htmlOut.innerHTML = out;
					return true;
				}
			}
			typeLine();
		},30);
	}
	typeLine();
}
typeText();

$(document).ready(function(){
$('.header_burger').click(function(event) {
	$('.header_burger,.menu_buttons').toggleClass('active');
});
});
$(document).ready(function(){
$('.zayava').click(function(event) {
	$('.back').toggleClass('active');
});
});