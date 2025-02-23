// 1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오

let name1 = "noona's fruit store";
let fruits1 = ["banana", "apple", "mango"];
let address1 = "Seoul";

let store = { name1, fruits1, address1 };
console.log(store);

// 2. es6문법을 이용하여 다음과 같이 출력하시오.
console.log(
  `제 가게 이름은 ${store.name1} 입니다. 위치는 ${store.address1}에 있습니다.`
);

// 3. 다음코드를 Destructoring을 이용하여 해결하시오.
function calculate(obj) {
  let { a, b, c } = obj;
  return console.log(a + b + c);
}
calculate({ a: 1, b: 2, c: 3 });

// 4. 다음 문제에 정답이 true가 나오게 하시오.

let name2 = "noona store";
let fruits2 = ["banana", "apple", "mango"];
let address2 = {
  country: "Korea",
  city: "Seoul",
};
function findStore(obj) {
  let { city, ...rest } = obj.address2;
  return name2 === "noona store" && city === "Seoul";
}
console.log(findStore({ name2, fruits2, address2 }));

// 5. 다음과 같이 프린트되게 코드를 바꾸시오
function getNumber() {
  let array = [1, 2, 3, 4, 5, 6];
  let [first, second, third, fourth, fifth, sixth] = array;
  return { first, third, fourth };
}
console.log(getNumber());

// 6. 다음의 결과가 true가 되게 하시오.
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "February" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar("January", "February", "March"));

// 7. 두어레이들 중 최솟값을 찾는 함수를 완성하시오
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  return Math.min(...a, ...b);
}
console.log(getMinimum());

// 8. 다음의 함수를 화살표 함수로 바꾸시오
function sumNumber() {
  const sum = (a, b) => a + b;
  return sum(40, 10);
}
console.log(sumNumber());

// 9. 다음함수를 화살표 함수로 바꾸시오
function sumNumber2() {
  let addNumber = (a) => (b) => (c) => a + b + c;
  return addNumber(1)(2)(3);
}
console.log(sumNumber2());
