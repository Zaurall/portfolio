import moment from 'moment';

interface Comic {
    alt: string;
    day: string;
    img: string; 
    link: string;
    month: string;
    news: string;
    num: number;
    safe_title: string;
    title: string;
    transcript: string;
    year: string;
}

const email: string = "n.zinnatullin@innopolis.university";
const comicImg = document.getElementById('comic') as HTMLImageElement;
const comicDescription = document.getElementById('comic-description') as HTMLParagraphElement;
const comicFromNowTime = document.getElementById('comic-from-now-time') as HTMLParagraphElement;

function fetchComicId(email: string): Promise<Comic> {
    const params = new URLSearchParams();
    if (email) {
        params.append("email", email);
    }
    return fetch("https://fwd.innopolis.university/api/hw2?" + params.toString())
        .then(r => r.json());
}

function handleImg(comicObj: Comic) {
    comicImg.alt = comicObj.alt;
    comicImg.src = comicObj.img.toString();
    const date = new Date(Date.UTC(Number(comicObj.year), Number(comicObj.month), Number(comicObj.day)));
    comicDescription.innerText = `${comicObj.safe_title} \n ${date.toLocaleDateString()}`;
    comicFromNowTime.innerText = `Published is ${moment(date).fromNow()}`;
}

async function fetchComicImg() {
    const id = await fetchComicId(email);
    const comicJson: Comic = await fetch("https://fwd.innopolis.university/api/comic?id=" + id).then(r => r.json());
    handleImg(comicJson);
}

fetchComicImg();
