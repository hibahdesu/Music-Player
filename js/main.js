let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right'); 
let left_two = document.getElementById('left_two');
let right_two = document.getElementById('right_two');
let left_three = document.getElementById('left_three');
let right_three = document.getElementById('right_three');
let left_four = document.getElementById('left_four');
let right_four = document.getElementById('right_four');
let pop__song = document.getElementsByClassName('pop__song')[0];
let pop__song_two = document.getElementsByClassName('pop__song')[1];
let pop__song_three = document.getElementsByClassName('pop__song')[2];
let pop__song_four = document.getElementsByClassName('pop__song')[3];
let play = document.getElementById('play');
let waves = document.getElementById('waves');
let play_icon = document.querySelector('.play_icon i');
let songaudio = document.getElementById('songaudio');
let up_side = document.querySelector('.up_side i');
let close = document.getElementById('close');
let music_list = document.querySelector('.music_list');
let listaudio = document.getElementById('listaudio');
let playLists = document.getElementById('playLists'); 
let title = document.querySelector('#title');
let subtitle = document.querySelector('.songsubtitle')
let player = document.querySelector('.player');
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let vol__icon = document.getElementById('vol__icon');
let vol = document.getElementById('vol');
let vol__bar = document.getElementsByClassName('vol__bar')[0];
let vol__dot = document.getElementById('vol__dot');
let back = document.getElementById('back');
let next = document.getElementById('next');

up_side.addEventListener('click', () => {
    music_list.classList.remove('hide');
})
close.addEventListener('click', () => {
    music_list.classList.add('hide');
})
pop_song_right.addEventListener('click', () => {
    pop__song.scrollLeft += 330;  
})
pop_song_left.addEventListener('click', () => {
    pop__song.scrollLeft -= 330;
})
right_two.addEventListener('click', () => {
    pop__song_two.scrollLeft += 330;
})
left_two.addEventListener('click', () => {
    pop__song_two.scrollLeft -= 330;
})
right_three.addEventListener('click', () => {
    pop__song_three.scrollLeft += 330;
})
left_three.addEventListener('click', () => {
    pop__song_three.scrollLeft -= 330;
})

right_four.addEventListener('click', () => {
    pop__song_four.scrollLeft += 330;
});
left_four.addEventListener('click', () => {
    pop__song_four.scrollLeft -= 330;
});


let index = 0;
function musics() {
let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let musicTObj = JSON.parse(this.responseText);
            let musicQue = musicTObj.length;
            addSongs(musicTObj, musicQue);
            search(musicTObj,musicQue)
            addSongsTwo(musicTObj, musicQue);
            addSongsThree(musicTObj, musicQue);
            addSongsFour(musicTObj, musicQue)
            listLoad(musicTObj, musicQue);
        }
    }
    request.open("GET", "music.json", true);
    request.send();
}
musics();

function addSongs(obj, coun) {
    for (let i = 0; i < 9; i++) {
        let mainli = document.createElement('li');
        mainli.className = 'songItem';
        mainli.id = obj[i]['num'];
        let mainDiv = document.createElement('div');
        mainDiv.className = 'img__play';
        let image = document.createElement('img')
        image.src = `.${obj[i]['img']}`;
        mainDiv.appendChild(image)
        let iDivi = document.createElement('i')
        iDivi.className = 'bi playListPlay bi-play-circle-fill';
        mainDiv.appendChild(iDivi)
        let h5 = document.createElement('h5');
        let h5Text = document.createTextNode(obj[i]['songName']);
        h5.appendChild(h5Text);
        let h5div = document.createElement('div');
        let h5DivText = document.createTextNode(obj[i]['singer']);
        h5div.appendChild(h5DivText);
        let maudio = document.createElement('audio');
        maudio.id = 'songaudio';
        maudio.src = `.${obj[i]['song']}`;
        mainli.appendChild(mainDiv);
        mainli.appendChild(h5);
        mainli.appendChild(h5div);
        mainli.appendChild(maudio);
        pop__song.appendChild(mainli);
        music.src = maudio.src;
        let src = `.${obj[i]['img']}`
        iDivi.addEventListener('click', () => {
            player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
            if (music.paused || music.currentTime <= 0) {
                music.src = maudio.src;
                music.play();
                iDivi.classList.remove('bi-play-circle-fill');
                iDivi.classList.add('bi-pause-circle-fill');
                waves.classList.add('active1');

                play_icon.classList.remove('bi-play-circle-fill');
                play_icon.classList.add('bi-pause-circle-fill');
                title.innerHTML = h5.innerHTML;
                subtitle.innerHTML = h5div.innerHTML;
            } else {
                music.pause();
                waves.classList.remove('active1');
                iDivi.classList.remove('bi-pause-circle-fill');
                iDivi.classList.add('bi-play-circle-fill');
                play_icon.classList.remove('bi-pause-circle-fill');
                play_icon.classList.add('bi-play-circle-fill');
            }
            play_icon.addEventListener('click', () => {
                
                if (music.paused || music.currentTime <= 0) {

                    iDivi.classList.remove('bi-play-circle-fill');
                    iDivi.classList.add('bi-pause-circle-fill');
                } else {
                    iDivi.classList.remove('bi-pause-circle-fill');
                    iDivi.classList.add('bi-play-circle-fill');
                }
            })
        }); 
    }
}

function addSongsTwo(obj, coun) {
    for (let i = 10; i < 19; i++) {
        let mainli = document.createElement('li');
        mainli.className = 'songItem';
        mainli.id = obj[i]['num'];
        let mainDiv = document.createElement('div');
        mainDiv.className = 'img__play';
        let image = document.createElement('img')
        image.src = `.${obj[i]['img']}`;
        mainDiv.appendChild(image)
        let iDivi = document.createElement('i')
        iDivi.className = 'bi playListPlay bi-play-circle-fill';
        mainDiv.appendChild(iDivi)
        let h5 = document.createElement('h5');
        let h5Text = document.createTextNode(obj[i]['songName']);
        h5.appendChild(h5Text);
        let h5div = document.createElement('div');
        let h5DivText = document.createTextNode(obj[i]['singer']);
        h5div.appendChild(h5DivText);
        let maudio = document.createElement('audio');
        maudio.id = 'songaudio';
        maudio.src = `.${obj[i]['song']}`;
        mainli.appendChild(mainDiv);
        mainli.appendChild(h5);
        mainli.appendChild(h5div);
        mainli.appendChild(maudio);
        pop__song_two.appendChild(mainli);
        console.log(pop__song_two)
        music.src = maudio.src;
        let src = `.${obj[i]['img']}`
        iDivi.addEventListener('click', () => {
            player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
            if (music.paused || music.currentTime <= 0) {
                music.src = maudio.src;
                music.play();
                iDivi.classList.remove('bi-play-circle-fill');
                iDivi.classList.add('bi-pause-circle-fill');
                waves.classList.add('active1');
                play_icon.classList.remove('bi-play-circle-fill');
                play_icon.classList.add('bi-pause-circle-fill');
                title.innerHTML = h5.innerHTML;
                subtitle.innerHTML = h5div.innerHTML;
            } else {
                music.pause();
                waves.classList.remove('active1');
                iDivi.classList.remove('bi-pause-circle-fill');
                iDivi.classList.add('bi-play-circle-fill');
                play_icon.classList.remove('bi-pause-circle-fill');
                play_icon.classList.add('bi-play-circle-fill');
            }
            play_icon.addEventListener('click', () => {
                if (music.paused || music.currentTime <= 0) {
                    iDivi.classList.remove('bi-play-circle-fill');
                    iDivi.classList.add('bi-pause-circle-fill');
                } else {
                    iDivi.classList.remove('bi-pause-circle-fill');
                    iDivi.classList.add('bi-play-circle-fill');
                }
            })
        }); 
    }
}


function addSongsThree(obj, coun) {
    for (let i = 18; i < 23; i++) {
        let mainli = document.createElement('li');
        mainli.className = 'songItem';
        mainli.id = obj[i]['num'];
        let mainDiv = document.createElement('div');
        mainDiv.className = 'img__play';
        let image = document.createElement('img')
        image.src = `.${obj[i]['img']}`;
        mainDiv.appendChild(image)
        let iDivi = document.createElement('i')
        iDivi.className = 'bi playListPlay bi-play-circle-fill';
        mainDiv.appendChild(iDivi)
        let h5 = document.createElement('h5');
        let h5Text = document.createTextNode(obj[i]['songName']);
        h5.appendChild(h5Text);
        let h5div = document.createElement('div');
        let h5DivText = document.createTextNode(obj[i]['singer']);
        h5div.appendChild(h5DivText);
        let maudio = document.createElement('audio');
        maudio.id = 'songaudio';
        maudio.src = `.${obj[i]['song']}`;
        mainli.appendChild(mainDiv);
        mainli.appendChild(h5);
        mainli.appendChild(h5div);
        mainli.appendChild(maudio);
        pop__song_three.appendChild(mainli);
        console.log(pop__song_two)
        music.src = maudio.src;
        let src = `.${obj[i]['img']}`
        iDivi.addEventListener('click', () => {
            player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
            if (music.paused || music.currentTime <= 0) {
                music.src = maudio.src;
                music.play();
                iDivi.classList.remove('bi-play-circle-fill');
                iDivi.classList.add('bi-pause-circle-fill');
                waves.classList.add('active1');
                play_icon.classList.remove('bi-play-circle-fill');
                play_icon.classList.add('bi-pause-circle-fill');
                title.innerHTML = h5.innerHTML;
            subtitle.innerHTML = h5div.innerHTML;
            } else {
                music.pause();
                waves.classList.remove('active1');
                iDivi.classList.remove('bi-pause-circle-fill');
                iDivi.classList.add('bi-play-circle-fill');
                play_icon.classList.remove('bi-pause-circle-fill');
                play_icon.classList.add('bi-play-circle-fill');
            }
            play_icon.addEventListener('click', () => {
                if (music.paused || music.currentTime <= 0) {
                    iDivi.classList.remove('bi-play-circle-fill');
                    iDivi.classList.add('bi-pause-circle-fill');
                } else {
                    iDivi.classList.remove('bi-pause-circle-fill');
                    iDivi.classList.add('bi-play-circle-fill');
                }
            })
        }); 
    }
}


function addSongsFour(obj, coun) {
    for (let i = 23; i < 30; i++) {
        let mainli = document.createElement('li');
        mainli.className = 'songItem';
        mainli.id = obj[i]['num'];
        let mainDiv = document.createElement('div');
        mainDiv.className = 'img__play';
        let image = document.createElement('img')
        image.src = `.${obj[i]['img']}`;
        mainDiv.appendChild(image)
        let iDivi = document.createElement('i')
        iDivi.className = 'bi playListPlay bi-play-circle-fill';
        mainDiv.appendChild(iDivi)
        let h5 = document.createElement('h5');
        let h5Text = document.createTextNode(obj[i]['songName']);
        h5.appendChild(h5Text);
        let h5div = document.createElement('div');
        let h5DivText = document.createTextNode(obj[i]['singer']);
        h5div.appendChild(h5DivText);
        let maudio = document.createElement('audio');
        maudio.id = 'songaudio';
        maudio.src = `.${obj[i]['song']}`;
        mainli.appendChild(mainDiv);
        mainli.appendChild(h5);
        mainli.appendChild(h5div);
        mainli.appendChild(maudio);
        pop__song_four.appendChild(mainli);
        console.log(pop__song_two)
        music.src = maudio.src;
        let src = `.${obj[i]['img']}`
        iDivi.addEventListener('click', () => {
        player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
            if (music.paused || music.currentTime <= 0) {
                music.src = maudio.src;
                music.play();
                iDivi.classList.remove('bi-play-circle-fill');
                iDivi.classList.add('bi-pause-circle-fill');
                waves.classList.add('active1');
                play_icon.classList.remove('bi-play-circle-fill');
                play_icon.classList.add('bi-pause-circle-fill');
                title.innerHTML = h5.innerHTML;
                subtitle.innerHTML = h5div.innerHTML;
                
            } else {
                music.pause();
                waves.classList.remove('active1');
                iDivi.classList.remove('bi-pause-circle-fill');
                iDivi.classList.add('bi-play-circle-fill');
                play_icon.classList.remove('bi-pause-circle-fill');
                play_icon.classList.add('bi-play-circle-fill');
            }
            play_icon.addEventListener('click', () => {
                if (music.paused || music.currentTime <= 0) {
                    iDivi.classList.remove('bi-play-circle-fill');
                    iDivi.classList.add('bi-pause-circle-fill');
                } else {
                    iDivi.classList.remove('bi-pause-circle-fill');
                    iDivi.classList.add('bi-play-circle-fill');
                }
            })
        }); 
    }
}
const music = new Audio('../audio/David tavare Oh la la.mp3');
function playMusic() {
    play_icon.classList.remove('bi-play-circle-fill');
    play_icon.classList.add('bi-pause-circle-fill');
    waves.classList.add('active1');
    music.play();
}
function pauseMusic() {
    waves.classList.remove('active1');
    play_icon.classList.remove('bi-pause-circle-fill');
    play_icon.classList.add('bi-play-circle-fill');
    music.pause();
}

//Search 
let search_results = document.querySelector('.search_results');
let input = document.getElementsByTagName('input')[0];
function search(obj, coun) {
    obj.forEach(element => {
        const {num, songName, singer, img} = element;
        console.log(num);
        console.log(img);
        let card = document.createElement('a');
        card.className = 'card';
        card.href = `#${num}`
        let imgCard = document.createElement('img')
        imgCard.src = `.${img}`;
        console.log(imgCard)
        card.appendChild(imgCard);
        let content = document.createElement('div')
        content.className = 'content';
        let h5Con = document.createElement('h5')
        h5Con.innerText = songName;
        let spanCon = document.createElement('span')
        spanCon.innerText = singer;
        content.appendChild(h5Con);
        content.appendChild(spanCon);
        console.log(content);
        card.appendChild(content)
        console.log(card);
        search_results.appendChild(card);
        console.log(search_results)
    })

}
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = 'flex';
                    } else {
                        items[i].style.display = 'none';
                    }
        if (input.value == 0) {
            search_results.style.display = 'none';
        } else {
            search_results.style.display = '';
        }
    }
});

play.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        playMusic();
    } else {
        pauseMusic();
    }
    
});
music.addEventListener('timeupdate', () => {
    let currentMu = music.currentTime;
    let muDur = music.duration;
    let minute = Math.floor(muDur / 60);
    let seconde = Math.floor(muDur % 60);
    if (seconde < 10) {
        seconde = `0${seconde}`
    }
    currentEnd.innerText = `${minute}:${seconde}`;

    let minute2 = Math.floor(currentMu / 60);
    let seconde2 = Math.floor(currentMu % 60);

    if (seconde2 < 10) {
        seconde2 = `0${seconde2}`
    }

    currentStart.innerText = `${minute2}:${seconde2}`;

    let progressBar = parseInt((currentMu / muDur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`
})
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})
vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol__icon.classList.remove('bi-volume-up-fill');
        vol__icon.classList.remove('bi-volume-down-fill');
        vol__icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol__icon.classList.remove('bi-volume-up-fill');
        vol__icon.classList.add('bi-volume-down-fill');
        vol__icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol__icon.classList.add('bi-volume-up-fill');
        vol__icon.classList.remove('bi-volume-down-fill');
        vol__icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol__bar.style.width = `${vol_a}%`;
    vol__dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let listIndex = 0;
let inindex = 0;
function listLoad(obj, coun) {
    for (let i = 0; i < coun; i++) {
        let mainli = document.createElement('li');
        mainli.className = 'songItem'
        mainli.id = i;
        let div = document.createElement('div');
        div.className = 'row';
        let spanOne = document.createElement('span');
        let spanOneText = document.createTextNode(obj[i]['songName']);
        spanOne.appendChild(spanOneText);
        let h6 = document.createElement('h6');
        let h6Text = document.createTextNode(obj[i]['singer']);
        h6.appendChild(h6Text);
        div.appendChild(spanOne);
        div.appendChild(h6);
        let mainDiv = document.createElement('div');
        mainDiv.className= 'audioDiv';

        mainli.appendChild(div)
        let iDivi = document.createElement('i')
        iDivi.className = `bi playListPlay bi-play-circle-fill`;
        let mainAudio = document.createElement('audio');
        mainAudio.className = ('audioSrc');
        mainAudio.src = `.${obj[i]['song']}`;
        iDivi.appendChild(mainAudio)
        mainli.appendChild(iDivi);
        music.src = mainAudio.src;
        playLists.appendChild(mainli);
        let src = `.${obj[i]['img']}`
            iDivi.addEventListener('click', () => {
            player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
            if (music.paused || music.currentTime <= 0) {
                mainli.classList.add('active')
                music.src = mainAudio.src;
                music.play()
                iDivi.classList.remove('bi-play-circle-fill');
                iDivi.classList.add('bi-pause-circle-fill');
                waves.classList.add('active1');
                play_icon.classList.remove('bi-play-circle-fill');
                play_icon.classList.add('bi-pause-circle-fill');
                title.innerHTML = spanOne.innerHTML;
                subtitle.innerHTML = h6.innerHTML;
                
            } else {
                music.pause();
                mainli.classList.remove('active')
                waves.classList.remove('active1');
                iDivi.classList.remove('bi-pause-circle-fill');
                iDivi.classList.add('bi-play-circle-fill');
                play_icon.classList.remove('bi-pause-circle-fill');
                play_icon.classList.add('bi-play-circle-fill');
            }
            play_icon.addEventListener('click', () => {
                if (music.paused || music.currentTime <= 0) {
                    iDivi.classList.remove('bi-play-circle-fill');
                    iDivi.classList.add('bi-pause-circle-fill');
                } else {
                    iDivi.classList.remove('bi-pause-circle-fill');
                    iDivi.classList.add('bi-play-circle-fill');
                }
            })
            const allmainli = playLists.querySelectorAll('li');
            allmainli.forEach((e) => {
                console.log(e);
            })
            back.addEventListener('click', () => {

                i -= 1;
                mainli.classList.add('active')
                mainAudio.src = `.${obj[i]['song']}`;
                title.innerHTML = obj[i]['songName'];
                h6.innerHTML = obj[i]['singer'];
                subtitle.innerHTML = h6.innerHTML;
                src = `.${obj[i]['img']}`
                player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
                if (i < 1) {
                    i = 1;
                }
                music.src = mainAudio.src;
                playMusic(); 
            })


            next.addEventListener('click', () => {

                i += 1;
                mainli.classList.add('active')
                mainAudio.src = `.${obj[i]['song']}`;
                title.innerHTML = obj[i]['songName'];
                h6.innerHTML = obj[i]['singer'];
                subtitle.innerHTML = h6.innerHTML;
                src = `.${obj[i]['img']}`
                player.style.cssText = `background: url(${src}); background-size: cover; background-repeat: no-repeat;`
                if (i > coun) {
                    i = coun;
                }
                music.src = mainAudio.src;
                playMusic();
            })
        });  
    }
}
