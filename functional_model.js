// the implementatio describes a "99 bottle of beer "

// first we can see the Imperative programming version 
var i_lyrics = [];

for(var bottles = 99; bottles > 0; bottles--){
	i_lyrics.push(bottles + ' bottles of beer on the wall,');
	i_lyrics.push(bottles + ' bottles of beer, Take one down and, pass it around, ');

	if(bottles > 1){
		i_lyrics.push((bottles -1) + ' bootle of beer on the wall ! ');
	}else{
		i_lyrics.push('No more bottles of beer on the Wall !!!')
	}
} 

console.log(i_lyrics);
