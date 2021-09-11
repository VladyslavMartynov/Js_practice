const URL_ADRESS: string = 'https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6';
const wrapper = document.getElementById('wrapper')!;

interface Beer{
    image_url: string,
    description: string,
    id: number,
}

const cardForBeer = (arr: Beer []) => {
    arr.forEach((el) => {
        const div: HTMLElement = document.createElement('div');
        const img: HTMLElement = document.createElement('img');
        const span: HTMLElement = document.createElement('span');

        img.setAttribute('src',el.image_url);
        img.setAttribute('class','img');

        img.addEventListener('click', () => {
            localStorage.setItem('img', `${el.id}`);
        });

        div.setAttribute('class', 'beerItem');
        div.append(img);
        div.append(span);

        span.innerText = el.description;

        wrapper.append(div);
    });
}

const fetchDataFromServer = async (): Promise<void> => {

    try{
        const json = await fetch(`${URL_ADRESS}`);
        const resultData: Beer [] = await json.json();
        cardForBeer(resultData);
    }
    catch (e) {
        throw new Error(`Error data is incorrect!`);
    }

}

fetchDataFromServer();

