// 배열

const planet = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
const transport = new Array("자전거", "자동차", "버스", "기차", "트럭", "오토바이", "비행기");

array.forEach(element => {

});

//push(뒤에 추가), unshift(앞에 추가), 인덱스(해당 값 변경)
//splice(위치, 삭제 개수, item) : 해당 위치부터 삭제 개수만큼 지우고 추가
//pop(뒤에 제거), shift(앞에 제거)

//join(사이 문자) : string으로 반환, toString()은 사이 문자가 ", "
//concat() : 배열 연결, slice(m, n) : m부터 n까지 분할, sort() : 문자만 정렬
//sort((a,b)=> a - b): 오름차순, sort((a,b)=> b - a): 내림차순
//reverse(): 거꾸로 출력, indexof(item): item의 인덱스 찾기

//얕은복사(주소 복사), 깊은복사(값 복사[다른 주소])
let planet2 = planet;
let swallowCopy = [...planet]; // ... : spread

//fill(n): n으로 채우기 ex)new Array(N).fill(n); = N개의 공간에 n으로 채우기
//flat(n): 해당 배열을 n차원으로

//find(Lambda) : Lambda식에 맞는 새로운 배열 요소 찾기
//findIndex(Lambda) : Lambda식에 맞는 새로운 배열 요소의 인덱스 찾기

//map(Lambda) : Lambda식에 맞게 새로운 배열 생성