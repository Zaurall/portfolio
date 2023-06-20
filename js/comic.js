const email = "n.zinnatullin@innopolis.university";
const getComicTranscriptionBtn = document.getElementById('get-comic-transcription');
const comicTranscription = document.getElementById('comic-transcription');
const comicImg = document.getElementById('comic');
const comicDescription = document.getElementById('comic-description');

function fetchComicId(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append("email", email);
    }
    return fetch("https://fwd.innopolis.university/api/hw2?" + params.toString())
        .then(r => r.json());
}

function handleImg(comicObj) {
    const { alt, day, img, month, safe_title, title, transcript, year } = comicObj;

    comicImg.alt = alt;
    comicImg.src = img.toString();
    const date = new Date(Date.UTC(year, month, day));
    comicDescription.innerText = safe_title + "\n" + date.toLocaleDateString();
}

async function fetchComicImg() {
    const id = await fetchComicId(email);
    const comicJson = await fetch("https://fwd.innopolis.university/api/comic?id=" + id).then(r => r.json());
    console.log(comicJson, id);
    handleImg(comicJson);
}

fetchComicImg();
