# 09 클로저 (Closures)
> Translator : inureyes (inureyes@gmail.com)

클로저는 사용자의 코드 안에서 전달되거나 사용할 수 있는 기능을 포함한 독립적인 블록(block)입니다. Swift에서의 클로저는 C 및 Objective-C 의 blocks와 유사하며, 다른 언어의 람다(lambda)와도 유사합니다.
클로저는 자신이 정의된 컨텍스트 (context) 로부터 임의의 상수 및 변수의 참조(reference) 를 획득 (capture)하고 저장할 수 있습니다. _(주: 클로저의 경우 클로저 바로 밖의 scope 의 상수 및 변수에 접근할 수 있다는 이야기입니다)_ 이렇게 상수 및 변수를 제약하는 특징때문에 클로저라는 이름이 되었습니다. Swift는 획득 과정의 메모리 관리를 모두 제어해줍니다.

> NOTE
> "획득" 개념에 대해서 익숙하지 않아도 걱정하지 마세요. 아래의 [값 획득하기]() 항목에서 자세히 다룰 것입니다.

함수 에서 소개된 전역 및 중첩 함수들은 사실 클로저의 특수한 경우들입니다. 클로저는 아래의 세가지 중 하나의 형태입니다.

- 전역 함수는 이름이 있지만 아무 값도 획득하지 않는 클로저입니다.
- 중첩 함수들은 이름이 있고, 내부의 함수의 값을 획득할 수 있는 클로저입니다.
- 클로저 표현식은 자신을 둘러싼 컨텍스트에서 값을 획득할 수 있는 가벼운 문법으로 작성된 클로저입니다.

Swift의 클로저 표현식은 일반적인 경우에 대한 간략하고 명확한 구문을 깨끗하고 명확한 스타일로 최적화와 함께 제공합니다. 이러한 최적화는 아래의 항목을 포함합니다.

- 컨텍스트로부터 인자 및 반환 값을 유추
- 단일 표현식 클로저로부터 명확한 반환값
- 단축 인자 이름
- 클로저 문법 추적

### 클로저 표현식 (Closure expressions)
중첩 함수에서 소개된 중첩 함수들은 더 큰 함수의 일부로서 동작하는 자체 포함된 코드 블럭을 명명하거나 정의하는 편리한 방법입니다. 그러나, 종종 완전한 선언이나 이름이 없는 더 짧은 버전의 함수같은 구조를 만드는 것이 유용할 때가 있습니다. 이는 다른 함수들을 하나 또는 그 이상의 인자로 받는 함수를 만들때 특히 그렇습니다.

클로저 표현식들은 인라인 클로저를 간단명료하고 집중적인 문법으로 작성하는 방법입니다. 클로저 표현식은 명확성과 의도를 잃지 않는 선에서 가장 간결한 형태로 클로저를 작성하기 위한 몇가지 문법 최적화를 제공합니다. 아래의 클로저 표현식 예에서 sort 함수를 각 단계마다 동일한 기능을 표현하지만 더 간결해지도록 몇가지 단계를 거쳐 개량하는 최적화를 소개합니다.

### 정렬 함수
Swift 의 표준 라이브러리는 당신에 제공한 정렬 클로저(sorting closure)의 결과값에 기반하여 알려진 값들의 배열을 정렬하는 `sort` 라는 함수를 제공합니다. 정렬 과정이 끝나면, sort 함수는 원래와 동일한 타입(type) 및 크기를 갖지만 그 요소들은 올바르게 정렬된 새로운 배열을 반환합니다.

아래의 클로저 표현식 예는 `string` 값으로 구성된 배열을 알파벳 역순으로 정렬합니다.

이 배열이 정렬될 배열입니다:
```
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
```
`sort` 함수는 두 매개변수를 받습니다.

- 알려진 타입(type)의 값들로 된 배열
- 동일한 타입의 두 인자를 받아 첫번째 값이 두번째 값보다 앞에 나와야 할 지의 여부를 알려주는 `Bool` 값을 돌려주는 클로저. 정렬 클로저는 만약 첫 값이 두번째 값보다 앞에 나와야 할 경우 `true`를, 나머지 경우에는 `false`를 반환합니다.

이 예제는 `String` 값들의 배열을 정렬하므로, 정렬 클로저는 타입 `(String, String) -> Bool` 타입의 함수가 되어야 합니다.

정렬 클로저를 제공하는 한가지 방법은 정확한 타입과 함께 일반적인 함수를 작성하고, 이 함수를 `sort` 함수의 두번째 인자로 사용하는 방법입니다.
```
func backwards(s1: String, s2: String) -> Bool {
	return s1 > s2
}
var reversed = sort(names, backwards)
// reversed i s equal to ["Ewa", "Daniell a", "Chris", "Barry", "Alex"]
```
첫 번째 문자열 (S1)이 두 번째 문자열 (S2)보다 큰 경우, `backwards` 함수는 정렬된 배열에서 `s1`이 `s2`보다 먼저 나와야 함을 의미하는 `true`  를 반환합니다. `string` 안의 `character`들의 경우, "더 크다"는 의미는 "알파벳에서 나중에 등장하는" 것을 의미합니다. 이는 글자 "B"가 글자 "A"보다 "더 크다"는 의미이며, 문자열 "Tom" 이 문자열 "Tim" 보다 크다는 의미입니다. 따라서 이 함수는 "Barry"가 "Alex"보다 앞에 오게 되는 알파벳 역순 정렬 결과를 주게 됩니다. 

그러나, 이것은 본질적으로 하나의 표현 함수 `(a > b)` 인 기능을 작성하기엔 다소 장황한 방법입니다. 이 예제의 경우 클로저 표현식 문법을 사용하여 인라인 정렬 클로저를 작성하는 것이 더 바람직할 것입니다.

### 클로저 표현식 문법  (Closure Expression Syntax)
클로저 표현식 문법은 아래의 일반 형식을 따릅니다:
```
{ ( parameters ) -> return type in 
	statements
}
```
클로저 표현식 문법은  상수 인자, 변수 인자 및 `inout` 인자를 사용할 수 있습니다. 기본 값은 주어지지 않습니다. 만약 당신이 가변 인자에 이름을 주고 마지막 매개 변수에 위치할 경우 가변 인자도 사용할 수 있습니다. 튜플 또한 인자 타입 및 반환 타입으로 사용할 수 있습니다.

아래의 예는 앞에서 소개한 `backwards` 함수의 클로저 표현 판입니다.
```
reversed = sort(names, { (s1: String, s2: String) -> Bool in
	return s1 > s2
})
```
이 인라인 클로저에 대한 인자의 및 리턴 타입의 정의는 `backwards` 함수의 정의와 동일합니다. 두 경우 모두, `(s1: String, s2: String) -> Bool` 로 쓸 수 있습니다. 그러나, 인라인 클로저 표현식의 경우, 인자와 리턴 타입은 중괄호 안에 쓰여야 하며, 밖에 쓰일 수는 없습니다.

클로저의 내용은 `in` 키워드로 시작합니다. 이 키워드는 클로저의 인자 및 반환 타입 정의가 끝났으며, 클로저의 내용이 시작됨을 지시합니다.

클로저의 내용이 매우 짧기 때문에, 심지어 한 줄에도 쓸 수 있습니다.
```
reversed = sort(names, { (s1: String, s2: String) - > Bool in return s1 > s2 } )
```
이 구문은 `sort` 함수의 전체적인 호출이 똑같이 유지됨을 보여줍니다. 괄호쌍은 여전히 함수의 전체 인자를 감싸고 있습니다. 그러나 그 중 하나의 인자는 이제 인라인 클로저입니다.

### 컨텍스트로부터 타입 유추하기 (Inferring Type From Context)

정렬 클로저가 함수의 인자로 전달되기 때문에, Swift는 클로저의 인자 타입과 `sort` 함수의 두번째 인자의 타입으로부터 반환되는 값의 타입을 유추할 수 있습니다. 이 인자는 `(String, String) -> Bool` 타입의 함수를 기대합니다. 이는 `String, String` 및 `Bool` 타입이 클로저 표현형의 정의의 일부로 쓰일 필요가 없음을 의미합니다. 모든 타입이 유추 가능하기 때문에, 반환 화살표 (->) 와 인자 이름을 감싼 괄호 또한 제외할 수 있습니다.
```
reversed = sort(names, { s1, s2 in return s1 > s2 } )
```
인라인 클로저 표현 형태로 클로저를 함수에 전달할 경우 인자와 반환 값의 타입을 유추하는 것이 언제나 가능합니다. 결과적으로, 인라인 클로저를 최대한의 형태로 명시적으로 기술할 일은 거의 없을 것입니다.

그럼에도 불구하고, 당신이 필요로 하거나, 또한 코드를 읽는 사람들에게 모호함을 주고 싶지 않을 경우 타입을 명시적으로 기술할 수 있습니다. `sort` 함수의 경우, 클로저의 목적은 정렬이 일어난다는 사실로부터 명확하게 보이며, 독자들은 문자열들의 배열을 정렬하는 것을 돕기 떄문에 이 클로저가 `String` 값과 함께 돌아간다고 가정하는 것이 안전합니다. 

### 단일 표현식 클로저로부터의 암시적 반환 ( Implicit Returns from Single-Expression Closures)

단일 표현식 클로저는 앞의 예에서 정의할 때 `return` 키워드를 생략하여 단일 표현식의 결과를 암시적으로 반환할 수 있습니다. 
```
reversed = sort(names, { s1, s2 in s1 > s2 } )
```
sort 함수의 두번째 인자의 함수 형은 클로저가 `Bool` 값을 반드시 반환해야 함을 명확하게 해 줍니다. 클로저의 내용이 `Bool` 값을 반환하는 단일 표현식 `(s1 > s2)` 이기 때문에, 이 경우 애매모호함이 발생하지 않으며, `return` 키워드는 생략이 가능합니다.

### 단축 인자 이름들 ( Shorthand Argument Names)
Swift는 자동으로 단축 인자 이름을 인라인 클로저에 제공하며, 클로저의 인자들을 `$0`, `$1`, `$2` 등등의 방식으로 참조할 수 있습니다. 

만약 이러한 단축 인자 이름들을 클로저 표현식에서 사용할 경우, 클로저 인자 리스트를 클로저의 정의에서 생략할 수 있으며, 단축 인자들의 번호 및 타입은 기대되는 함수 타입으로부터 추정될 것입니다. 클로저 표현식이 클로저 내용에 완전히 표현될 수 있으므로 `in` 키워드 또한 생략할 수 있습니다:
```
reversed = sort(names, { $0 > $1 } )
```
여기서 `$0` 와 `$1` 은 클로저의 첫번째와 두번째 `String` 매개변수를 가리킵니다.

### 연산자 함수들 ( Operator Functions )
사실 위의 클로저 표현식은 _더 짧아질 수도_ 있습니다. Swift 의 `String` 타입은 `String`에 특화된 크기 비교 연산자 (>) 를 두 `String` 인자를 갖는 함수로 정의하고 있으며, `Bool` 타입을 반환합니다. 이 연산자는 `sort` 함수의 두번째 인자를 위해 필요한 함수형과 정확히 일치합니다. 그러므로, 이 크기 비교 연산자를 바로 전달하면 Swift 는 사용자가 `String` 전용의 구현체를 사용하려고 한다고 유추합니다.
```
reversed = sort(names, > )
```
연산자 함수에 대해 더 많은 내용은 [연산자 함수]() 항목을 참조하시기 바랍니다.

## 후행 클로저 ( Trailing Closures )

만약 클로저 표현식을 함수에 함수의 마지막 인자로 전달할 때 클로저 표현식이 긴 경우, 대신에 후행 클로저 (Trailing closure) 를 작성하는 것이 유용할 수 있습니다. 후행 클로저는 함수 호출 괄호의 밖 (또는 뒤) 에 쓰여져서 함수를 지원하는 클로저 표현식입니다.
```
func someFunctionThatTakesAClosure(closure: () -> ()) {
	// function body goes here
}
// here's how you call this function without using a trailing closure:

someFunctionThatTakesAClosure({
	// closure's body goes here
})

// here's how you call this function with a trailing closure instead:

someFunctionThatTakesAClosure() {
	// trailing closure's body goes here
}
```
> NOTE
클로저 표현식이 함수의 하나뿐인 인자이며 이 표현식을 후행 클로저로 작성할 경우, 함수를 호출할때 함수 이름의 뒤에 괄호쌍 () 을 쓸 필요는 없습니다.

위의 [클로저 표현식 문법]()의 문자열 정렬 클로저는 `sort` 함수의 괄호 밖에 후행 클로저로 작성될 수도 있습니다.
```
reversed = sort(names) { $0 > $1 }
```
후행 클로저는 클로저가 충분히 길어서 줄 안이나 한 줄 정도로 기술할 수 없는 경우에 아주 유용합니다. 예를 들어, Swift의 `Array` 타입은 클로저 표현식을 하나의 인자로 받는 `map` 메소드를 제공합니다. 클로저는 행렬 안의 각 아이템마다 한 번씩 호출되고, 그 아이템의 (다른 타입일 수도 있는) 새롭게 매핑된 값을 반환합니다. 매핑의 동작과 반환값의 타입은 클로저에 의하여 지정됩니다.

`map` 메소드는 제공된 클로저를 각 행렬 항목마다 적용한 후, 새롭게 매핑된 값들이 원래 행렬의 해당 값들의 순서와 같도록 배치된 새 행렬을 반환합니다.

`Int` 값들로 구성된 행렬을 `String` 값들로 구성된 행렬로 변환하는 map 메소드를 후행 클로저와 함께 사용하는 예를 보겠습니다. 행렬 `[16,58,510]` 이 새로운 행렬인 `["OneSix", "FiveEight", "FiveOneZero"]` 를 생성하기 위해 사용되었습니다.
```
let digitNames = [
	0: "Zero", 1: "One", 2: "Two",   3: "Three", 4: "Four",
	5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
]
let numbers = [16, 58, 510]
```
위의 코드는 정수와 그 수들의 영어 표현사이의 매핑 사전을 생성합니다. 또한 문자열로 변환될 정수 행렬도 정의합니다.

이제 `numbers` 행렬을 `map` 메소드에 후행 클로저를 클로저 표현식으로 전달하는 방법으로 `String` 값의 행렬을 생성하기 위해 사용할 수 있습니다. `map` 메소드가 단 하나의 인자만을 받으므로 `numbers.map` 을 호출할 때 `map` 뒤에 어떤 괄호도 필요하지 않음을 기억하세요. 후행 클로저가 이 인자로 제공됩니다.
```
let strings = numbers.map {
	(var number) -> String in
	var output = ""
	while number > 0 {
		output = digitNames[number % 10]! + output
		number /= 10
	}
	return output
}
// strings is inferred to be of type String[]
// its value is ["OneSix", "FiveEight", "FiveOneZero"]
```

`map` 함수는 클로저 표현식을 각 행렬의 항목마다 호출합니다. 클로저의 입력 인자, `number`, 의 타입을 지정할 필요는 없는데, 이는 타입을 매핑될 배열의 값으로부터 추측할 수 있기 때문입니다.

이 예제에서, 클로저의 `number` 인자는 [상수 및 변수 파라미터]() 에서 설명한 변수 인자 (variable parameter) 로 정의되었으므로, 인자의 값이 새로운 지역 변수를 정의하고 `number` 값을 그 변수에 할당하는 방법 대신 클로저 본문에서 변경될 수 있습니다. 또한 클로저 표현식은 매핑된 결과 배열의 타입을 지시하기 위해 `String` 의 반환 타입을 지정합니다.

클로저 표현 식은 호출될 때 마다 `output` 이라는 문자열을 생성합니다. `number` 의 마지막 숫자를 나머지 연산자 `(number % 10)` 를 사용하여  알아낸 후, 이 숫자에 해당되는 문자열을 `digitNames` 사전에서 찾습니다.

> NOTE
`digitNames` 사전의 첨자 (subscript) (주: 적당한 표현이 없어서 의미적으로 가까운 '첨자'로 번역)에 접근할 때 느낌표 (!) 가 붙는데, 이 이유는 사전의 첨자 반환값은 사전 안에 해당되는 키값이 없어서 열람이 실패했을 경우 반환하는 선택적인 값이 있기 때문입니다. 위의 예에서, `number % 10` 은 `digitNames` 사전을 위해 언제나 유효한 첨자 키값을 제공하는 것이 보장되어 있으므로, 느낌표는 첨자의 선택적인 반환 값에 보관된 값을 강제로 풀어 `String` 값을 알기 위해 사용합니다.

`digitNames` 사전으로부터 가져온 문자열은 `output`의 앞부분에 추가되며, 숫자의 역순으로 해당되는 문자열이 효율적으로 만들어집니다. ( `number % 10` 표현식은 16의 경우 6, 58의 경우 8, 510일 경우 0을 돌려줍니다.)

`number` 변수는 이후 10으로 나눠집니다. 이 변수가 정수이기 때문에, 나누기 과정에서 소숫점 아랫 값이 버려집니다. 따라서 16은 1이, 58은 5가, 510은 51이 됩니다.

이 과정은 `number /=10` 이 0이 될 때까지 반복되며, 이때 `output` 문자열이 클로저로부터 반환되고, `map` 함수에 의하여 출력 행렬에 더해집니다.

이 예제에서 사용한 후행 클로저 구문은 전체 클로저를 `map` 함수의 외부 괄호로 전체 클로저를 감쌀 필요 없이, 클로저의 기능을 클로저가 지원하는 함수의 바로 뒤에서 깔끔하게 캡슐화합니다.

## 값 획득하기 (Capturing Values)
클로저는 자신이 정의된 주변 컨텍스트로부터 상수 및 변수의 값을 획득할 수 있습니다. 클로저는 이러한 상수와 변수들을 원래 상수와 변수들이 정의된 범위 (scope) 가 더이상 존재하지 않는 경우에조차도 값을 참조하거나 수정할 수 있습니다.

Swift에서 클로저의 가장 간단한 형태는 다른 함수의 본문 안에 작성된 중첩 함수입니다. 중첩 함수는 바깥 함수의 모든 인자를 획득할 수 있으며, 또한 바깥 함수 내에서 정의된 모든 상수 및 변수를 획득할 수 있습니다.

아래는 `Incrementor`라는 중첩 함수를 포함한 `makeIncrementor` 예입니다. 중첩된 `incrementor` 함수는 `runningTotal` 및 `amount` 의 두 값을 자신을 둘러싼 컨텍스트로부터 획득합니다. 이 두 값을 획득한 후, `incrementor`는 호출될 때 마다 `runningTotal` 을 `mount` 만큼 증가시키는 클로저로써 `makeIncrementor` 로부터 반환됩니다.
```
func makeIncrementor(forIncrement amount: Int) -> () -> Int {
	var runningTotal = 0
	func incrementor() -> Int {
		runningTotal += amount
		return runningTotal
	}
	return incrementor
}
```
`makeIncrementor` 의 반환 타입은 `() -> Int` 입니다. 이는 간단한 값 대신 함수를 반환함을 의미합니다. 반환되는 함수는 인자가 하나도 없으며, 호출될 때 마다 `Int` 값을 반환합니다. 어떻게 함수가 다른 함수를 반환할 수 있는가에 대해서는 [반환 타입으로서의 함수 타입]() 을 참조하시기 바랍니다.

`makeIncrementor` 함수는 `runningTotal` 정수 변수를 정의하며, 이 변수는 현재 실행중인 `incrementor` 의 총합을 보관하고 반환될 변수입니다. 이 변수는 0으로 초기화됩니다.

`makeIncrementor` 함수는 `Int` 인자를 외부 이름인 `forIncrement` 와 지역 이름인  `amount` 로 받습니다. 이 인자로 전달된 인수는 `runningTotal` 이 `incrementor` 함수가 호출될 때 마다 얼마만큼씩 증가해야 할 지 지정합니다.

`makeIncrementor` 는 `incrementor`라는 실제 증가를 수행하는 중첩 함수를 정의합니다. 이 함수는 간단하게 amount 를 runningTotal 에 더하고, 결과값을 반환합니다.

고립된 상황을 생각해보면, 중첩함수 `incrementor`는 독특하게 보입니다.
```
func incrementor() -> Int {
	runningTotal += amount
	return runningTotal
}
```
`incrementor` 함수는 아무 인자도 갖고 있지 않으며, `runningTotal` 및 `amount` 를 함수 내에서 참조합니다. 이 함수는 자신을 둘러싼 함수로부터 `runningTotal` 및 `amount`를 획득하고 함수 안에서 그 값들을 사용합니다.

이 함수는 `amount` 값을 수정하지 않기 때문에, `incrementor`는 `amount` 안에 보관된 값을 획득하고 그 복사판을 보관합니다. 이 값은 새로운 `incrementor` 함수에서도 계속 이어져 보관됩니다.

그러나, 이 함수가 `runningTotal` 변수를 호출시마다 변경하기 때문에, `incrementor`는 현재 `runningTotal`의 복사본 대신 값의 참조를 획득합니다. 참조 획득은 `runningTota`l 이 `makeIncrementor` 가 끝난 이후에도 사라지지 않음을 보증하며, `incrementor` 함수가 이후 호출될 때도 연속적으로 사용될 수 있음을 보증합니다.

> NOTE
Swift는 어떤 변수가 참조 로 획득되고 어떤 변수가 복사값으로 획득될지 판단합니다. 사용자는 `amount` 및 `runningTotal` 이 `incrementor` 중첩 함수에서 쓰일지의 여부를 명기할 필요가 없습니다. Swift는 또한 `runningTotal` 이 더이상 `incrementor` 함수로부터 필요로하지 않을 때 폐기하는 모든 메모리 관리 과정을 담당합니다.

`makeIncrementor` 의 사용 예입니다.
```
let incrementByTen = makeIncrementor(forIncrement: 10)
```
이 예제는 호출될 때 마다  `runningTotal`에 10씩을 더하는 증가 함수를 참조하는 `incrementByTen` 을 정의합니다. 이 함수를 여러번 부르면 동작을 볼 수 있습니다.
```
incrementByTen()
// returns a value of 10
incrementByTen()
// returns a value of 20
incrementByTen()
// returns a value of 30
```
만약 새로운 `incrementor` 를 생성할 경우, 그 `incrementor`는 새롭고 독립적인 `runningTotal` 변수로의 참조를 갖게 됩니다. 아래의 예제에서, `incrementBySeven`은 새로운 `runningTotal` 변수의 참조를 획득하며, 이 변수는 `incrementByTen`에서 획득한 변수와 연결되지 않습니다.
```
let incrementBySeven = makeIncrementor(forIncrement: 7)
incrementBySeven()
// returns a value of 7
incrementByTen()
// returns a value of 40
```
> NOTE
만약 클로저를 클래스 인스턴스의 프로퍼티로 지정하고, 클로저가 인스턴스 또는 인스턴스의 멤버를 참조하여 인스턴스를 획득할 경우, 클로저와 인스턴스의 강력한 참조 순환을 만들게 됩니다. Swift는 이러한 강력한 참조 순환을 깨기 위하여 캡처 리스트 (capture list) 를 사용합니다. 더 많은 정보는 [클로저의 강력한 참조 순환]() 을 참조하시기 바랍니다.

## 클로저는 참조 타입 (Closures Are Reference Types)
위의 예에서, `incrementBySeven` 및 `incrementByTen`은 상수입니다. 그러나 클로저로써 이러한 상수들은 여전히 그들이 획득한 `runningTotal` 변수를 증가시킬 수 있습니다. 이는 함수와 클로저가 참조 타입이기 때문입니다.

함수나 클로저를 상수에 할당하는 것은, 실제로는 그 상수에 함수나 클로저를 가리키는 참조를 할당하는 것입니다. 위의 예에서, `incrementByTen`이 참조하는 것은 클로저를 가리키는 상수이며, 클로저 그 자체의 내용은 아닙니다.

이는 또한 클로저를 두 개의 다른 상수나 변수에 할당하면, 두 상수나 변수들이 동일한 클로저를 참조하게 되는 것을 의미합니다.
```
let alsoIncrementByTen = incrementByTen
alsoIncrementByTen()
// returns a value of 50
```

	
