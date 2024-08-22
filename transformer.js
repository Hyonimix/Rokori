let transformDB = [];

// JSON 데이터 불러오기
fetch('type0.json')
    .then(response => response.json())
    .then(data => transformDB = data)
    .catch(error => console.error(error));

// 로마지 문자열을 한글로 변환하는 함수
function transformRomajiToHangul(romaji) {
    for (let item of transformDB) {
        if (item.romaji === romaji) {
            return item.hangul;
        }
    }
    return null; // 변환 불가 시 null 반환
}