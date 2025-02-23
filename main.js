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
  // let { city, ...rest } = obj.address2;
  // 전역변수를 직접참조하지 않도록 구조할당을 잘해야한다
  //   원칙상으로는, 모범답안처럼
  // 함수내부에서 name 변수를 다시 선언해서 값을 받아야 되는 것은 알고 계세요.
  // 이렇게 하는 이유는
  // 우리가 알지 못하게 전역변수로(함수외부에 선언한 변수로) 인해서,
  // 내부 함수로직이 잘못되는 것을 방지하기 위해
  // 함수가 어떤 값을 받고, 그것을 처리하려면, 함수내부에 다시 변수를 만들어서 사용하는 것이 좋습니다.
  // 이렇게 함수내부에서 name이라는 변수를 선언하면,
  // 자바스크립트는 외부에 있는 동일이름 name이랑 비교해서, 내부에 있는 name 변수를 위주로 사용합니다.
  // 그래서 코딩에서 전역변수를 너무 많이 만들지 말고, 꼭 필요한 것만 만들라고 하더라구요.
  // 편리하게 하려면 전역변수 만들어서, 모든 함수에도 침투해서 이리저리 마음대로 움직이게 하면 좋을 것 같지만,
  // 그렇게 하면, 나중에 엉망이 되기 쉬워요.
  // 그냥 함수 안에서 사용되고, 나중에는 사라지게 하는 함수내부의 변수를 만들어 사용하는 것이 좋다고 합니다.

  let {
    name2,
    address2: { city },
  } = obj;
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
