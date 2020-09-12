let contentsBox = document.querySelector('.contents'); // 그냥 html에 있는 class contents div
const key = "?key=c9b76986468427bb85c2e8928316a530"; // api key를 가져왔습니다.
let date = "&targetDt=20200908"; // 검색형식이에요
const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
+ key
+ date; // 검색할 json파일 url 입니다

const giveRankObject = async() => {
    const response = await fetch(url);
    return await response.json(); // text, arrayBuffer, blob, json, formData 종류가 있어요
}

giveRankObject()
    .then((data) => {
        for (let i = 0; i < 10; i++) {
        let movieRankJson = data.boxOfficeResult.dailyBoxOfficeList[i].movieNm; 
        let text = document.createTextNode(movieRankJson);
        contentsBox.appendChild(text);
    }
    })
    .catch(error => console.log(`에러 발생 ${error.name}:${error.message}`));

function clickedSearchBtn(){
    let date = document.todayDateForm.todayDateInput.value;
    let targetDate = date.replaceAll("-", "");
}