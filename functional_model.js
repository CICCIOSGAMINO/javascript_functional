// the implementatio describes a "99 bottle of beer "

var _ = require('underscore');

// Imperative Programming  ------------------------------------  Imperative Programming  -------------------------------------

/* 
	This imperative version, is emblematic of an imperative programming style. That is, the implementation
	describes a “99 Bottles of Beer” pro‐gram and exactly a “99 Bottles of Beer” program. Because imperative
	code operates at such a precise level of detail, they are often one-shot implementations or at best, difficult
	to reuse. Further, imperative languages are often restricted to a level of detail
*/ 
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


// Functional Programming  ------------------------------------  Functiona Programming  ------------------------------------------

// bottle on the wall n-esima abstraction song slice 
function lyricSegment(n){
	return _.chain([])
		.push(n + 'Bottles of beer on the Wall ' + n + ' bottles of beer, Take one down pass it around !! ')
		.tap(function(lyric){
			if(n > 1){
				lyric.push((n -1) + ' bottles of beer on the wall. ');
			}else{
				lyric.push('no more bottles of beer on the wall ! ');
			}
		})
		.value()
};

function song(start, end, lyricGen) {
	return _.reduce(_.range(start,end,-1),
		function(acc,n) {
			return acc.concat(lyricGen(n));
		}, []);
	}

console.log(song(99, 0, lyricSegment));
