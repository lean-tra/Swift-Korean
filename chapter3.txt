# 03 기초 다지기 (The Basics)
> Translator : FlashMaestro (masterofflash@nate.com)
> Translator : Snowcat8436 (snowcat8436@gmail.com)

Swift는 iOS와 OS X 앱을 개발하기 위한 새로운 프로그래밍 언어 입니다. 그러나 C나 Objective-C로 개발하면서 얻었던 경험들과 많은 부분이 유사할 것입니다.

Swift는 정수형을 위한 `Int`, 부동소숫점 값을 위한 `Double`과 `Float`, 불리언값을 위한 `Bool`, 문자열 데이터를 위한 `String`을 포함해 C와 Objective-C의 기본적인 데이터 타입에서 약간 변형된 형태로 제공합니다. 또한 `컬랙션 타입`으로 통칭되는 `Array`와 `Dictionary` 이 두가지 주요한 컬랙션 타입 또한 강력한 형태로 제공합니다.

Swift도 C처럼 식별 가능한 이름을 가지고 값을 참조하거나 저장하기 위한 변수를 사용합니다. 또한 변경 불가능한 값들 또한 폭넓게 사용되도록 했습니다. 보통 상수라고 알려져 있는데, 이것은 C에서의 상수보다 훨씬 강력합니다. 상수는 변경될 필요가 없는 값을 가지고 작업하려고 할 때 코드를 조금 더 안전하고 깔끔하게 만들 수 있도록 Swift 전반에 걸쳐 쓰이게 됩니다.

Swift는 잘 알려진 타입들 뿐 아니라 Objective-C에는 없었던 고급 타입들도 선보이고 있습니다. 값들의 묶음을 만들고 전달할 수 있도록 하는 튜플도 이 고급 타입들 중에 하나입니다. 튜플은 함수의 반환값으로 여러개의 값을 하나로 결합해 돌려줄 수 있도록 합니다.

Swift는 어떤 값의 부재를 다룰 수 있는 선택형 타입도 제공 합니다. 이 선택형은 "값이 존재하고, 그 값은 x입니다." 혹은 "값이 존재 하지 않습니다."라고 할 수 있습니다. 선택형은 Objective-C의 포인터에서 `nil`을 사용하는 것과 비슷합니다. 하지만 클래스 뿐만 아니라 어떤 타입에도 사용할 수 있습니다. 선택형은 Objective-C의 `nil` 포인터보다 훨씬 안전하고 쓰임새 있습니다.  또 Swift의 강력한 기능들중 핵심적인 기능입니다.

선택형은 Swift가 `type safe`하다는 예시 입니다. Swift는 당신이 코드를 통해 다루는 값들의 타입을 확실히 하는 것을 돕습니다. 당신이 만든 코드중에 일부가 `String` 타입을 사용해야 할 때 타입 세이프는 `Int`같은 값을 전달하는 실수를 막아줍니다. 이를 통해 개발하는 동안 가능한한 빨리 에러는 인지하고 고치는 것이 가능합니다.

## 상수(Constants)와 변수(Variables)
상수와 변수는 어떤 이름(`maximumNumberOfLoginAttempts`나 `welcomeMessage`)과 특정한 형태의 값(숫자 `10`이나 문자열 `Hello`)의 결합으로 구성됩니다. 상수의 값은 한번 지정되고 난 후에는 변경될 수 없고 변수는 값이 지정되고 난 이후에도 변경될 수 있습니다.


### 상수와 변수의 선언
상수와 변수는 사용되기 전에 선언되어야 합니다. 상수는 let키워드, 변수는 var 키워드를 가지고 정의할 수 있습니다. 여기 사용자가 로그인을 시도한 횟수를 추적하는데 사용되는 변수와 상수를 만드는 예제가 있습니다.

```
let maximumNumberOfLoginAttempts = 10
var currentLoginAttempt = 0
```

이 코드는 다음과 같이 해석할 수 있습니다.

"`maxiumNumberOfLoginAttempts`라는 새로운 상수를 선언하고 값은 10으로 할당한다. 그리고 `currentLoginAttemp`라는 변수를 선언하고 0이라는 초기값을 할당한다."

예제에서 보면 최대값은 변하지 않기 때문에 로그인을 시도할 수 있는 최대 횟수가 상수에 정의되어 있습니다.  그리고 매번 로그인을 실패할 때마다 숫자가 증가해야 하기 때문에 현재 로그인 시도 횟수는 변수로 정의되어 있습니다.

콤마로 구분해서 한줄에 여러개의 상수나 변수를 선언하는 것도 가능합니다.
```
var x = 0.0, y = 0.0, z = 0.0
```   
 
>노트
코드를 작성할 때 변경할 필요가 없는 값을 저장하는 경우 항상 `let` 키워드를 사용해 상수로 선언하라. 그리고 변경할 필요가 있을 경우에만 변수로 선언하라.

### 타입 명시(Type Annotations)
상수나 변수를 만들 때 어떤 형태의 값이 저장될 지 명확하게 하기 위해 타입을 명시할 수 있습니다. 상수나 변수의 이름뒤에 콜론을 쓰고 한칸을 띄우고 사용하고 싶은 타입의 이름을 써서 타입을 명시할 수 있습니다.

다음 예시는 `welcomeMessage`라는 변수에 `String`값이 저장될 수 잇다는 것을 표시하기 위해 타입 명시를 하는 것입니다.
	
    var welcomeMessage: String
    
콜론은 "~타입 의"라는 의미를 가집니다. 따라서 위의 코드는 다음과 같이 해석할 수 있습니다.

"`String`타입의 변수 `welcomeMessage`를 선언한다."

"`String`타입의" 라는 말은 "어떤 `String`값이든 저장할 수 있다."라는 의미 입니다. "어떤타입의"(혹은 "어떤 종류의") 라는 것은 그것이 저장될 수 있다 라는 의미로 생각하면 됩니다.

이제 `welcomeMessage`변수에는 오류없이 어떤 문자열 값이든 저장할 수 있습니다.

	welcomeMessage = "Hello"
    
>노트
연습중에 타입 명시를 해야하는 경우는 드물다. 만약 상수나 변수를 정의하는 지점에 초기값을 지정한다면, Swift는 그 상수나 변수를 위해 사용할 타입을 추측한다. 이것이 바로 `타입 세이프`와 `타입 추정`이다. 위의 예제에서 `welcomeMessage`에 초기값을 지정하지 않았다. 그래서 초기값으로 부터 타입을 추정하기 힘들기 때문에 타입을 명시해준 것이다.

### 상수와 변수 이름 짓기
상수와 변수의 이름을 지정하기 위해서 유니코드를 포함한 어떤 문자든지 사용할 수 있습니다.

```
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "dogcow"
```

상수와 변수의 이름에는 수학기호, 화살표, 개인용(혹은 유효하지 않은) 유니코드, -선, 상자 그리기용 문자 등을 사용할 수 없다. 또 숫자로 시작해서도 안되고 이름 중간에 숫자가 들어가서도 안됩니다.

특정 타입의 상수나 변수를 한번 선언 했다면, 같은 이름으로 다시 선언하는 것이나 다른 형태의 값을을 저장하도록 하는 것은 불가능 합니다. 또 변수에 상수를 저장하거나 상수에 변수를 저장하는 것 또한 불가능 합니다.

>노트
만약 Swift 예약어로 상수나 변수명을 만들고 싶다면 변수명을 ```표시로 묶어서 쓸 수 있다. 그러나 정말 다른 대안이 없는 경우가 아니면 사용하지 않는 것이 좋다.

기존 변수의 값을 호환 가능한 다른 값으로 변경할 수 있습니다. 예를 들면 `friendlyWelcome`의 값은 `"Hello!"`에서 `"Bonjour!"`로 변경됩니다.

```
var friendlyWelcome = "Hello!"
friendlyWelcome = "Bonjour!"
// friendlyWelcome is now "Bonjour!
```

변수와는 다르게 상수는 한번 값이 정해지면 변경할 수 없습니다. 컴파일할 때 에러가 발생하도록 시도해 봅시다.

```
let languageName = "Swift"
languageName = "Swift++"
// this is a compile-time error - languageName cannot be changed
```


### 상수와 변수의 출력
`println` 함수를 사용하면 상수와 변수의 현재 값을 출력할 수 있습니다.

```
println(friendlyWelcome)
// prints "Bonjour!
```

`println`은 출력하기 적절하게 줄단위로 끊어서 값을 출력해주는 전역 함수 입니다. Xcode에서 작업을 하고 있다면 `println`을 사용하면 Xcode의 "console"창에  결과가 나옵니다. (다음으로 `print` 함수는 `println`함수와 동일한 기능을 수행하지만 값을 출력하기 위해 한줄의 끝을 표시해줄 필요가 없습니다.)

`println`함수는 전달된 어떤 `String`값이든 출력해줍니다.

```
println("This is a string")
// prints "This is a string
```

`println`함수는 코코아의 `NSLog`함수와 비슷한 방식으로 복잡한 로그 메시지를 출력하는 것도 가능합니다. 메시지에는 상수와 변수의 현재값을 포함할 수 있습니다.

Swift는 긴 문자열에서 상수나 변수명을 대체문자로 사용해 Swift가 상수나 변수의 현재 값으로 즉시 대체할 수 있도록 문자열 해석 방식을 사용합니다. 다음과 같이 이름을 괄호로 감싸고 이스케이프 시키기 위해 여는 괄호 앞에 백슬래시를 써주면 됩니다.

```
println("The current value of friendlyWelcome is \(friendlyWelcome)")
// prints "The current value of friendlyWelcome is Bonjour!
```

>노트
문자열 해석에 관한 모든 옵션은 `문자열 해석` 부분에 설명되어 있습니다.

## 주석(Comments)

스스로 상기하기 위해서 혹은 메모하기 위해 코드내에 실행되지 않는 글을 쓰려고 할 때 주석을 사용할 수 있습니다. 작성한 코드를 컴파일 할 때 Swift의 컴파일러는 주석을 무시합니다.

Swift의 주석은 C의 주석과 흡사합니다. 한줄 주석은 `/`(슬래시)를 두번 연속해서 쓰면 시작됩니다.
```
// this is a comment
```
또 여러줄 주석도 쓸 수 있습니다. 여러줄 주석은 슬래시와 별표를 쓰고(`/*`) 끝에는 별표와 슬래시(`*/`)를 순서대로 써주면 됩니다.

```
/* this is also a comment,
but written over multiple lines */
```

C의 여러줄 주석과는 다르게 Swift에서는 여러줄 주석 안에 다른 여러줄 주석을 쓸 수 있습니다.  내부 여러줄 주석을 쓰려면 첫번째 여러줄 주석 부분을 시작하고 두번째 여러줄 주석을 첫번째 주석 안에서 시작합니다. 그리고 두번째 주석을 닫아준 후 첫번째 주석을 닫아주면 됩니다.

```
/* this is the start of the first multiline comment
/* this is the second, nested multiline comment */
this is the end of the first multiline comment */
```

내부 여러줄 주석은 이미 코드에 여러줄 주석을 포함하고 있더라도 넓은 범위의 코드를 빠르고 쉽게 주석처리 할 수 있게해줍니다.

## 세미콜론(Semicolons)
많은 다른 언어들과는 다르게 Swift는 코드의 각 문장 끝마다 세미콜론(`;`)이 꼭 필요하지는 않습니다. 하지만 쓰고 싶다면 써도 됩니다. 하지만 한줄에 여러 문장을 처리하려고 한다면 세미콜론이 꼭 필요 합니다.

```
let cat = "🐱"; println(cat)
// prints "🐱"
```

## 정수(Integers)
정수는 `42`나 `-23`같이 소수점 단위가 없는 숫자들 전체 입니다. 정수는 부호가 있는 것(양수,0, 음수)와 부호가 없는 것(양수, 0) 모두를 포함합니다.

Swift는 8, 16, 32, 64 비트 형태로 부호있는 정수와 부호없는 정수를 지원합니다. 정수형은 부호 없는 8비트 정수형 `UInt8`, 부호있는 32비트 정수형 `Int32` 처럼 C와 비슷한 관습을 따른 이름을 갖고 있습니다.  Swift의 다른 모든 타입과 마찬가지고 정수형 타입명 역시 대문자로 시작합니다.

### 정수범위
각 정수형 타입에 최대값과 최소값은 `min`과 `max` 속성을 가지고 접근할 수 있습니다.

```
let minValue = UInt8.min  // minValue is equal to 0, and is of type UInt8
let maxValue = UInt8.max  // maxValue is equal to 255, and is of type UInt8
```

이런 속성값들은 예제에서 볼 수 있는 `Uint8`과 같은 타입들의 적정 범위를 나타내는 값이기 때문에 다른 타입들에도 동일 표현으로 사용할 수 있습니다.

### Int
대부분의 경우 코드 내에서 사용하기 위해 특정 크기를 지정할 필요가 없습니다. Swift가 현재의 플랫폼에 해당하는 워드(word) 크기를 갖는 `Int`라는 추가 타입을 지원하기 때문입니다.

- 32비트 플랫폼에서 `Int`는 `Int32`와 동일한 크기를 갖습니다.
- 64비트 플랫폼에서 `Int`는 `Int64`와 동일한 크기를 갖습니다.

정수형의 특정 크기가 필요한 것이 아니라면 코드 내에서 항상 `Int`를 사용하면 됩니다. 이것은 코드가 일관성을 갖고 상호처리가 가능하도록 합니다. 32비트 플랫폼에서 조차 `Int`는 넓은 범위의 정수를 포함하기에 충분할 만한 `-2,147,483,648` ~ `2,147,483,647`의 범위를 갖습니다.

### UInt
Swift는 `UInt`라는 부호없는 정수 타입도 지원합니다. 이것 또한 현재 플랫폼에 해당하는 워드 크기를 갖습니다.

- 32비트 플랫폼에서 `UInt`는 `UInt32`와 동일한 크기를 갖습니다.
- 64비트 플랫폼에서 `UInt`는 `UInt64`와 동일한 크기를 갖습니다.

>노트
특별히 현재 플랫폼 해당 워드 크기의 부호없는 정수형이 필요할 때만 `UInt`를 사용하라. 그런 경우가 아니라면 양수만 저장하는 경우일지라도 `Int`가 더 적절하다. 정수형을 위한 `Int`의 일관성이 코드가 `타입 세이프`와 `타입 추정`으로 묘사되는 다른 숫자 형태로의 변환또는 정수의 추정 타입일치가 필요한 경우를 피해 상호처리가 가능하도록 합니다.

## 부동 소수점 수
부동 소수점 수란 `3.14159`, `0.1`, `-273.15` 처럼 소수 부분을 갖는 숫자를 말합니다.

부동 소수점 타입은 `Int` 타입에 저장될 수 있는 것보다 훨씬 크거나 작은 숫자를 저장하거나 더 넓은 범위의 숫자를 표현할 수 있습니다. Swift는 두가지의 부동 소수점 타입을 제공합니다.

- `Double`은 64비트 부동 소수점 수를 표현합니다. 매우 크거나 특별히 정밀한 부동 소수점 값을 원할 경우 사용합니다.
- `Float`은 32비트 부동 소수점 수를 표현합니다. 64비트의 정밀함이 필요하지 않은 경우 사용합시다.

>노트
`Float`이 6자리의 소수를 표현할 수 있는 것에 비해 `Double`은 최소 15자리의 소수를 표현할 수 있는 정도의 정밀도를 갖습니다. 코드에서 다루는데 필요한 속성이나 값의 범위에 따라 적절히 부동 소수점 타입을 골라서 사용합니다.

## 타입 세이프와 타입 추정(Type Safty and Type Inference)
Swift는 타입 세이프 언어입니다. 타입 세이프 언어들은 코드 내에서 다루는 값들의 타입이 명확하도록 만듭니다. 코드의 어떤 부분에서 `String`타입이 기대된다면 실수로 `Int`타입을 전달하는 것은 불가능합니다.

Swift가 타입 세이프이기 때문에 컴파일을 할 때 타입 검사를 수행하고 일치하지 않는 타입들에 대해서 에러로 표시합니다. 이를 통해 개발을 진행하면서 가능한 일찍 오류를 인지하고 고칠 수 있도록 합니다.

타입 검사는 다른 형태의 값들을 가지고 일을할 때 에러를 피할 수 있도록 해줍니다. 그러나 이것이 항상 상수나 변수를 선언할 때 타입을 명시해줘야 한다는 것을 의미하지는 않습니다. 필요로 하는 값의 타입을 명시해야 하지 않는 경우 Swift는 적절한 타입을 찾기 위해 타입 추정을 수행합니다. 타입 추정은 코드를 컴파일할 때 프로그래머가 공급한 값을 가지고 컴파일러가 자동적으로 특정 표현식의 타입을 알아내도록 합니다.

Swift는 타입 추정 때문에 C나 Objective-C에 비해 타입을 지정해줘야 하는 경우가 적습니다. 상수나 변수는 여전히 명시적으로 타입이 지정되지만 그 타입을 특정하는 많은 일들이 대신 수행됩니다.(\*역자주: 상수나 변수는 타입 추정을 통해 타입을 확실하게 가지게 되기 때문에 타입을 지정해주기 위해 프로그래머가 해야할 일들이 줄었다는 것입니다.)

타입 추정은 상수나 변수를 초기값과 함께 선언할 때 특히 유용합니다. 종종 타입 추정은 상수나 변수가 선언되는 지점에서 문자 그대로의 값을 할당하는 것을 통해 이뤄집니다.(문자 그대로의 값이란 아래쪽 예시에서 볼 수 있는 `42`나 `3.14159`와 같은 소스코드에 직접적으로 쓰여져 있는 값을 말합니다.)

예를 들면, 타입을 명시하지 않고 새로운 상수를 선언할 때 `42`라는 문자그대로의 값을 할당하면 Swift는 정수형처럼 보이는 숫자를 가지고 초기화를 했기 때문에 상수가 `Int`값을 갖기를 원한다고 추정합니다. 

```
let meaningOfLife = 42
// meaningOfLife is inferred to be of type Int
```

이와 비슷하게 부동 소수점 수를 위한 타입을 특정하지 않으면 Swift는 `Double`형 타입을 생성하길 원하다고 추정합니다.

```
let pi = 3.14159
// pi is inferred to be of type Double
```

Swift는 부동 소수점 수를 위한 타입을 추정할 때 `Float`보다는 항상 `Double`을 선택합니다.

만약 한 표현식 안에 정수와 부동 소수점 수를 결합해서 사용하면 문맥으로부터 `Double` 타입이라고 추정될 것입니다.

```
let anotherPi = 3 + 0.14159
// anotherPi is also inferred to be of type Double
```

문자 그대로의 `3`은 스스로 어떤 타입인지 명시되어 있지 않습니다. 또 덧셈 부분에 부동 소수점 수가 존재하기 때문에 `Double`이 출력 지정 타입으로 추정됩니다.

## 숫자의 문자표현
정수 문자표현은 다음과 같이 쓸 수 있습니다.
- 10진수는 아무런 접두어 없이
- 2진수는 접두어 `0b`를 붙여서
- 8진수는 접두어 `0o`를 붙여서
- 16진수는 접두어 `0x`를 붙여서

다음 정수 문자 표현들은 모두 십진수 `17`을 나타냅니다.

```
let decimalInteger = 17
let binaryInteger = 0b10001       // 17 in binary notation
let octalInteger = 0o21           // 17 in octal notation
let hexadecimalInteger = 0x11     // 17 in hexadecimal notation
```

부동 소수점 수의 문자 표현은 10진수(접두어 없이) 혹은 16진수(접두어 `0x`를 붙여서)가 될 수 있습니다. 이런 문자표현은 소수점 앞뒤로 항상 숫자(혹은 16진수 숫자)를 갖습니다. 또 이것은 10진수의 소수점을 나타내기 위한 대소문자 `e` 혹은  16진수의 소수점을 나타내기 위한 `p`로 표현되는 *지수*를 가지고 있을 수도 있습니다. 

`exp` 지수를 가지고 있는 10진수는 기수에 10의 exp승을 곱해 얻을 수 있습니다.

- `1.25e2` 는 1.25 × 10^2, 나 `125.0`을 뜻합니다.
- `1.25e-2` 는 1.25 × 10^-2, 나 `0.0125`를 뜻합니다.

`exp` 지수를 가지고 있는 16진수는 기수에 2의 exp승을 곱해 얻을 수 있습니다.

- `0xFp2` 는 15 × 2^2, 나 `60.0`을 뜻합니다.
-` 0xFp-2` 는 15 × 2^-2, 나 `3.75`를 뜻합니다.

다음 부동 소수점 수의 문자표현은 모두 10진수 `12.1875`의 값을 갖습니다.

```
let decimalDouble = 12.1875
let exponentDouble = 1.21875e1
let hexadecimalDouble = 0xC.3p0
```

숫자의 문자표현은 좀 더 쉽게 읽을 수 있도록 추가 형식을 포함하기도 합니다. 정수나 소수 모두 좀 더 읽기 쉽도록 여분의 0이나 \_(underscores)를 포함할 수 있습니다. 두 양식 모두 문자표현의 실제 값에는 영향을 주지 않습니다.

```
let paddedDouble = 000123.456
let oneMillion = 1_000_000
let justOverOneMillion = 1_000_000.000_000_1
```

## 숫자의 타입 변환(Numeric Type Conversion)

당신의 코드에서 모든 일반적인 목적으로 사용되는 정수형 상수나 변수가 모두 양수임을 알고 있더라도, 이를 위해 `int`타입을 사용 할 수 있다. 하지만 위와 같은 모든 상황에서 기본적인 정수형 타입을 사용하는 것은 당신의 코드에서  정수형 상수들이나 변수들이 당신에 코드내에서 즉시 서로 정보를 교환한다는 것을 의미한다. 그리고 이는 문자 그대로의 정수형을 의미하는데 적절하다.

다른 정수형 타입들은 오직 외부의 소스로 부터오거나, 성능혹은 메모리와 같은 최적화가 필요하여 명확한 크기의 데이터를사용하는 작업이 필요한 경우에만 사용한다. 
이런 상황에서 명확한 크기의 타입들을 사용하는 것은 어떠한 돌발적인 오버플로우나 사용되는 데이터의 종류를 기록하는데 도움이 된다.

### 정수형 변환(Integer Conversion)

정수형의 상수나 변수에 저장 가능한 숫자의 범위는 각 숫자의 타입에 따라 다르다. `Int8`타입의 상수나 변수의 경우 `-128`~`127`의 값을 저장할 수 있으며, 반면 `UInt8`타입의 상수나 변수는 `0`~`255`의 값을 저장할 수있다.  지정된 크기의 정수형 타입에 맞지않는 숫자는 컴파일시 에러를 출력한다:
```
let cannotBeNegative: UInt8 = -1
// UInt8 cannot store negative numbers, and so this will report an error
let tooBig: Int8 = Int8.max + 1
// Int8 cannot store a number larger than its maximum value,
// and so this will also report an error
```
각 숫자 타입은 각각 저장할 수있는 값의 범위가 다르기 때문에, 숫자의 형 변환은 경우에 따라 맞는 경우로 선택하여야 한다. 이러한 접근은 숨겨진 변환 에러들을 방지해주고  코드에서 타입을 변환하고 있다고 명시적으로 이야기하는것을 도와준다.

특별한 숫자 타입에서 다른 타입으로 변환하기 위해서, 존재하는 값을 원하는 타입의 숫자를 초기화 한다. 아래의 예시에서,  상수 `twoThousand`는 `UInt16`이고, 반면에 상수 `one`은 `UInt8`이다.  이 두값은 서로 같은 타입이 아니기 때문에 이대로 서로 더하는 것은 불가능 하다. 대신에 이 예제에서 처럼 `UInt16(one)`를 이용하여  `one`의 값을 가진 `UInt16`타입을 새로 만들 수 있다. 그리고 이는 원래 값이 있었던 것처럼 사용할 수있다.
```
let twoThousand: UInt16 = 2_000
let one: UInt8 = 1
let twoThousandAndOne = twoThousand + UInt16(one)
```
이제는 덧셈의 양쪽 값이 `UInt16`이기 때문에, 덧셈이 가능하다. 그 결과값(`twoThousandAndOne`)는 두 `UInt16`의 덧셈이기 때문에 `Uint16`타입을 가진다.

`SomeType(fInitialValue)`는 Swift타입의 기본적인 초기화 방법이자 초기화 값을 전달하는 방법입니다. 보이지 않는 곳에서, `UInt16`은 `UInt8`값을 변화하는 initializer를 가지고 있고, 이 initializer는 존재하는 `UInt8`에서 새로운  `UInt16`를 만드는데 사용된다. 하지만 어느 타입이나 넘길 수 있는 것은 아닙니다. 이는 `UInt16`만을 initializer는 받아들이게 되어있습니다. 존재하는 타입을 확장하여 initializer에게 자신만이 정의한 타입을 포함해서 새 타입을 받아들이게 하고 싶다면 [Extensions]()를 보세요.

### 정수와 실수 변환(Integer and Floating-Point Conversion)

실수와 정수사이의 변환은 분명하게 만들어야 한다:
```
let three = 3
let pointOneFourOneFiveNine = 0.14159
let pi = Double(three) + pointOneFourOneFiveNine
// pi equals 3.14159, and is inferred to be of type Double
```
위 예제에서 덧셈을 위해서 양쪽의 타입이 동일하도록 상수값 3을 `Double`타입의 값으로 바꾸는 것을 볼 수있다. 만일 이러한 변환이 없다면, 덧셈은 가능하지 않을 것이다.

또한 반대로 실수를 정수로 바꾸어 계사나는 것도 가능하다, 다만 이 경우 `Double`이나 `Float`값을 정수로 초기화하는 과정이 필요하다.
```
let integerPi = Int(pi)
// integerPi equals 3, and is inferred to be of type Int
```
실수형 값은 위와 같은 방식으로 새로운 정수형 값으로 변환시에 항상 소숫점 이하의 값을 버림한다. 예를들면 4.75는 4가되고 -3.9는 -3이 된다.

>NOTE
숫자 상수나 변수를 결합하기위한 규칙은 numeric literals의 규칙과는 다릅니다. numeric literals는 그 스스로가 명시적인 타입을 가지고 있지 않기 때문에 literal value 3은 literal value `0.14159`와 바로 더할 수 있습니다. 이는 그들의 타입은 오직 컴파일로 체크한다는 것을 의미합니다.

## 타입 알리아스(Type Aliases)

_타입알리아스_는 이미 존재하는 타입을 또다른 이름으로 정의하는것을 이야기합니다. `typealias`라는 키워드로 타입 알리아스를 정의할 수 있습니다.

타입 알리아스는 외부의 소스에서온 특정한 사이즈를 가진 데이터로 작업하는 경우 처럼 이미 존재하는 타입을 보다 문맥에 맞는 이름으로 알아보고 싶을때 유용하다:
```
typealias AudioSample = UInt16
```
당신이 타입알리아스를 정의하는 즉시, 당신은 그 타입알리아스를 원래의 이름대신 사용할 수있습니다:
```
var maxAmplitudeFound = AudioSample.min
// maxAmplitudeFound is now 0
```
위에서 `UInt16`을 위한 `AudioSample`알리아스를 볼 수 있다. 이것이 알리아스이기 때문에 `maxAmplitudeFound`를 위한 변수인 `AudioSample.min`은 실제로는 `UInt16.min`의 값인 `0`을 의미한다.

## 이진형(Booleans)

Swift는 `Bool`이라는 기본적인 이진형 타입을 가진다. 이진형 값은 논리적으로 취급되며, 그때문에 그들은 오직 참과 거짓의 두가지 값을 가진다. Swift는 이를 위해 `true`와 `false`라는 두가지의 상수값을 제공한다:
```
let orangesAreOrange = true
let turnipsAreDelicious = false
```
`orangesAreOrange`와 `turnipsAreDelicious`의 타입은 이진형의 문자 그대로의 값으로 초기화가 가능한  `Bool`타입을 가지고 있습니다. 위에서의 `Int`와 `Double`처럼, 만일 당신이 `true`나 `false`로 값을 설정한다면 자동으로 형태가 결정될 것이기 때문에 `Bool`로서 상수나 변수를 선언할 필요가 없다.
타입 추론(Type inference)은 상수나 Swift의 코드를 더욱 간결하고 읽기 쉽게 하는데 도움을 준다.

이진형 값은 다음과 같은 if문처럼 조건문으로 작업하는 경우에 특히 유용하다:
```
if turnipsAreDelicious {
    println("Mmm, tasty turnips!")
} else {
    println("Eww, turnips are horrible.")
}
// prints "Eww, turnips are horrible."
```
위의 if문과 같은 조건문에 대한 것은 [Control Flow]()에서 조금 더 자세히 다룰것이다.

다음 예제는 컴파일 타임의 에러를 보여준다:
```
let i = 1
if i {
    // this example will not compile, and will report an error
}
```
그러나 다음의 예제는 올바르게 처리되는 것을 보여준다:
```
let i = 1
if i == 1 {
    // this example will compile successfully
}
```
`i == 1`의 비교 결과는 `Bool`타입이고, 그때문에 두번째 예제는 타입 체크를 통과할수 있다. `i == 1`과 같은 비교구문은 [기본연산자]()에서 다룰 것입니다.

다른 Swift의 타입 세이프예제와 마찬가지로, 이러한 접근은 돌발적인 에러를 피할 수 있게 해주고, 을 코드의 특정한 부분에서의 의도를 항상 분명하게 하는 것을 보장한다.

## 튜플(Tuples)

튜플은 여러 값들을 하나의 값으로 묶어준다. 튜플안의 여러 값들은  어느 타입도 가능하고, 각각 동일한 타입일 필요도 없다.

아래의 예시에서 `(404, "Not Found")`는 HTTP의 상태코드를 묘사하는 튜플이다. HTTP상태 코드는 당신이 웹페이지에 요청을 할때 웹서버의 상태를 알려주는 특별한 코드이다. 요청한 페이지가 존재하지 않는다면 404 Not Found라는 상태 코드가 반환된다. 
```
let http404Error = (404, "Not Found")
// http404Error is of type (Int, String), and equals (404, "Not Found")
```
(404, "Not Found") 튜플은 HTTP 상태코드를 두개의 나누어진 값으로 표현하기 위한 `Int`값 하나와`String`값 하나를 서로 묶은 것이다. 이것은 " `(Int, String)`타입의 튜플"이라고 말할 수있다.

당신은 어떠한 순서를 가진타입들로부터도 튜블들을 만들 수 있습니다. 그리고 그 튜블들은 당신이 원하는 만큼 서로 다른 타입들을 가질 수 있습니다. 튜플 (Int, Int, Int)나 튜플(String, Bool) 혹은 당신이 필요한 어떠한 순서를 가진 튜플이라면 어떠한 것도 당신을 막을 수 없습니다. (모두 생성 가능하단의미)

당신은 튜플의 각 내용들을 분리된 상수나 변수로 분해할수 있고 이는 평상시처럼 접근도 가능합니다.
```
let (statusCode, statusMessage) = http404Error
println("The status code is \(statusCode)")
// prints "The status code is 404"
println("The status message is \(statusMessage)")
// prints "The status message is Not Found"
```
만일 당신이 튜플의 값들중 오직 몇몇개만 필요하다면, 튜플을 분리할때 튜플에서 무시할 부분을 언더바 "\_" 로 처리하면 된다:
```
let (justTheStatusCode, _) = http404Error
println("The status code is \(justTheStatusCode)")
// prints "The status code is 404"
```
또다른 방식으로는 0부터 시작하는 index number를 통하여 각각의 element value에 접근합니다:
```
println("The status code is \(http404Error.0)")
// prints "The status code is 404"
println("The status message is \(http404Error.1)")
// prints "The status message is Not Found"
```
튜플을 정의할때 튜플의 각 element들에 이름을 지어줄 수도 있습니다:
```
let http200Status = (statusCode: 200, description: "OK")
```
만일 튜플의 각 element에 이름을 지어줬다면, 각 element에 값에 접근하기 위해서 element의 이름을 사용할 수 있습니다:
```
println("The status code is \(http200Status.statusCode)")
// prints "The status code is 200"
println("The status message is \(http200Status.description)")
// prints "The status message is OK"
```
튜플들은 함수들의 리턴값으로써 특히 유용합니다. 
웹페이지를 검색하기위한 함수는 보통 페이지 검색을 성공여부를 표현하기 위해서 `(Int, String)` 튜플을 리턴합니다.두 개의 서로 다른 타입의 구분되는 값을 가진 튜플을 리턴하는 것으로 그 함수는 단순히 오직 하나의 타입을 가진 하나의 값을 리턴하는 것보다 결과에 대한 보다 유용한 정보를 제공할 수 있습니다.
보다 자세한 정보는 [Functions with Multiple Return Values]()를 참고하기 바란다.

>NOTE
튜플은 연관성있는 값들을 임시로 묶는데도 유용하다. 그들은 복잡한 자료구조를 생성하기에는 알맞지 않다. 만일 당신의 자료구조가 임시적이지 않고 계속해서 사용될 것으로 생각된다면, 튜플보다는 클래스나 자료구조로 만드는 것이 나을 것이다. 보다 많은 정보가 필요하다면 [Classes and Structures]()를 참조하기 바란다.

## 옵셔널(Optionals)

옵셔널은 어떠한 값이 부재인지를 체크할때 사용한다.
옵셔널이란 다음을 이야기한다:

- 그곳에는 값이 "있다", 그리고 그것은 x와 동일하다.
혹은
- 그곳에는 값이 전혀 "없다"

>NOTE
옵셔널에 대한 개념은 C나 Objective-C에는 존재하지 않는다. Objective-C에서 그나마 가장 가까운 개념은 메서드에서 object값을 리턴하는 대신 올바른 오브젝트가 존재하지 않는다 라는 의미로 `nil`을 리턴하는 것이다. 그러나 이는 오직 오브젝트에만 적용할 수있고 구조체, 기본적인 C언어 타입들, 열거형에 대해서는 적용할 수 없다. 이런 타입들을 위해서 Objective-C 메서들은 보통 값의 부재를 의미하는 `NSNotFound`와 같은 특수한 값을 리턴합니다. 이러한 접근은 메서드를 부르는 쪽에서 체크나 테스트를 위한 특수한 값을 잘 알고 있다고 가정하고 있습니다. Swift의 옵셔널은 특별한 용도의 상수가 필요 없이 어떠한 타입의 값의 부재를 바로 알아낼수 있도록 만들어줍니다.

이곳에 한가지 예제가 있다. Swift의 `String`타입은 `String`타입을 `Int`타입으로 변환하기 위한 `toInt`라는 메서드를 가집니다. 그러나 모든 문자형이 정수형으로 변환 가능한것은 아닙니다. "123"이라는 문자형은 123이라는 숫자값으로 변환이 가능하지만, `"hellow, world"`라는 값은 분명한 숫자값으로 변환할 수 없습니다.

아래의 예제는 `String`을 `Int`로 변환하기 위해 `toInt`메서드를 사용하고 있다:
```
let possibleNumber = "123"
let convertedNumber = possibleNumber.toInt()
// convertedNumber is inferred to be of type "Int?", or "optional Int"
```
Because the `toInt`메서드가 실패하는 것으로 보아, 이는 `int`가 아닌 optional Int값을 리턴하고있다. optional Int는 `Int`가 아닌 `Int?`로 쓴다. 물음표는 그 값이 optional하다는 것을 의미한다. 이는 그 값이 어떠한 `Int`값을 가지거나 아예 전혀 값을 가지지 않는다는 것을 의미한다. (이는 `Bool`이나 `String`과 같은 다른 값은 가질 수 없다. 이는 오직 `Int`값을 가지거나 아무값도 없을 뿐이다.)

### If문과 강제 언랩핑(If Statements and Forced Unwrapping)

어떠한 옵셔널이 값을 가지고있나 찾기위해서 `if`문을 사용할 수 있다. 이 경우 만일 옵셔널이 값을 가지고 있다면 그 결과는 `true`일 것이고 전혀 값을 가지지 않는다면 `false`일 것이다.

옵셔널이 값을 가진다는 것을 확실히 알때, 옵셔널의 이름의 맨 마지막에 느낌표를 붙이는 것으로 그 근원 값에 접근할 수 있다. 여기서 물음표는 "내가 이 옵셔널은 확실히 값을 가지고 있고 이를 사용하라"라는 효과적인 말이다. 이것을 옵셔널 값의 강제 언랩핑이라고 한다:
```
if convertedNumber {
    println("\(possibleNumber) has an integer value of \(convertedNumber!)")
} else {
    println("\(possibleNumber) could not be converted to an integer")
}
// prints "123 has an integer value of 123"
```
`if`문에 대한 보다 많은 것을 원한다면 [Control Flow]()를 참조하기 바란다.

>NOTE
느낌표를 사용하여 값이 존재하지 않는 옵셔널 값에 접근하려 시도하면 런타임 에러가 발생한다. 느낌표를 사용하여 강제 언랩핑을 하기 전에는 항상 옵셔널 값이 `nil`이 아니라는 것을 확실히 해야 한다.

### 옵셔널 바인딩(Optional Binding)

당신은 옵셔널이 값을 가지고 있는지를 찾고 만일 그렇다면 값을 임시로 상수나 변수로 사용하도록 만들기 위해 옵셔널 바인딩을 사용할 수 있습니다. 옵셔널 바인딩은 `if`문이나 `while`문에서 옵셔널 안에 값이 있는지 체크하고 이를 상수나 변수로 추출하는 것을 한번에 하기 위해 사용할 수 있다.  `if`문이나 `while`문에 대해서 더욱 자세한 설명이 필요하다면 [Control Flow]페이지를 참고하시기 바랍니다.

`if`문을 위해서 옵셔널 바인딩을 하는 경우 다음과 같이 쓸 수 있습니다:
```
if let constantName = someOptional {
    statements
}
```
위 예시를 보면 당신은 `possibleNumber`예제를 강제 언랩핑하는 대신 옵셔널 바인딩을 사용하는 방식으로 다시 쓸 수 있습니다:
```
if let actualNumber = possibleNumber.toInt() {
    println("\(possibleNumber) has an integer value of \(actualNumber)")
} else {
    println("\(possibleNumber) could not be converted to an integer")
}
// prints "123 has an integer value of 123"
```
이는 다음을 의미합니다:

“만일 `possibleNumber.toInt`가 리턴한 옵셔널 `int`값이 값을 가지고 있을 경우,  새로운 상수인 `actualNumber`를 그 옵셔널이 가지는 값으로 설정한다.”

만일 변환이 성공적이라면, 상수 `actualNumber`는 `if`문의 첫번째 부분에서 사용하는 것이 가능하다. 이는 옵셔널이 가지는 값으로 이미 초기화 되어있고, !를 뒤에 붙여서 그 값을 가져오는 것이 필요하지 않다. 예제에서 `actualNumber`는 단순히 변환의 결과를 출력하기위해 사용한다.

옵셔널 바인딩은 변수와 상수 모두에 사용할 수 있다. 만일 `if`문의 첫번째 문장에서 `actualNumber`의 값을 조종하는 것을 원한다면, `actualNumber`를 변수로 사용할 수 있다. 그러면 옵셔널을 가지는 그 값을 상수대신 변수로서 만들 수 있다.

### nil

네가 값이 없는 상태의 옵셔널 변수를 원한다면 특별한 값인 `nil`로 옵셔널 변수를 설정하면 된다:
```
var serverResponseCode: Int? = 404
// serverResponseCode contains an actual Int value of 404
serverResponseCode = nil
// serverResponseCode now contains no value
```
>NOTE
`nil`은 옵셔널이 아닌 상수나 변수와 사용할 수 없다. 만일 네 코드에 있는 상수나 변수가 명확한 조건하에서 값의 부재에 대응하기를 원한다면, 항상 적절한 타입의 옵셔널 값으로 그것을 선언하여야 한다.

만일 네가 값을 제공하지 않고 옵셔널 상수나 변수를 정의한다면, 그 상수나 변수는 당신을 위해 자동적으로 `nil`로 설정할 것이다:
```
var surveyAnswer: String?
// surveyAnswer is automatically set to nil
```
>NOTE
Swift의 `nil` 은 Objective-C에서의 `nil`과 같지 않다. Objective-C에서 `nil`은 존재하지 않는 오브젝트를 위한 포인터라면, Swift에서 `nil`은 포인터가 아니고 명확한 값의 부재를 이야기할 뿐이다. 따라서 오브젝트 타입들뿐만 아니라 어떠한 타입의 옵셔널들이라도 `nil`로 설정하는 것이 가능하다.

### 무조건적으로 언랩핑된 옵셔널(Implicitly Unwrapped Optionals)

위에서 이야기한 것과 같이 옵셔널들은 상수나 변수가 "값을 가지지 않는 것"을 허용한다는 것을 나타낸다.  옵셔널은 값이 있는지 없는지를 보기 위해 `if`문을 이용하여 체크할 수 있고, 값이 존재하는 옵셔널의 값에 접근하기 위해 옵셔널 바인딩을 통한 조건부 언랩핑이 가능하다. 

때때로 옵셔널은 처음으로 값을 설정한 이후에는 값을 가지고 있다는 것은 프로그램 구조적으로 명확하다. 이러한 경우 위 사항들은 옵셔널의 값에 접근할때마다 체크하고 언랩핑해야하는 과정을 없애는데 유용하다. 이런 이유때문에 안전하게 항상 값을 가진다고 가정할 수 있다.

이러한 종류의 옵셔널들은 Implicitly Unwrapped Optionals로 정의되었다고 할 수 있다. 당신은 옵셔널로 만들기 원하는 타입 뒤에 물음표보다 느낌표를 붙이는 것으로 Implicitly Unwrapped Optional을 만들 수 있다.

Implicitly Unwrapped Optional은 옵셔널이 첫번째로 정의되고 옵셔널들이 각 포인트에서 확실하게 존재한다고 가정한 뒤에 옵셔널의 값이 존재하는지 즉시 확인할때 유용하다.
Swift에서 Implicitly Unwrapped Optional의 최우선 용도는 클래스의 초기화 과정에서 소유자가 없는 참조나 무조건적인 언랩핑된 옵셔널 속성들을 설명하는 것이다.

Implicitly Unwrapped Optional은 보이지 않는 곳에서는 일반적인 옵셔널과 같다. 그러나 접근할때마다 옵셔널 값의 언랩핑이 필요 없이 옵셔널 값이 아닌 것 처럼 사용할 수도 있다. 아래의 예시는 옵셔널 `String`과 무조건적인 언랩핑 옵셔널 `String`의 behavior에서의 차이점을 보여준다:
```
let possibleString: String? = "An optional string."
println(possibleString!) // requires an exclamation mark to access its value
// prints "An optional string."
 
let assumedString: String! = "An implicitly unwrapped optional string."
println(assumedString)  // no exclamation mark is needed to access its value
// prints "An implicitly unwrapped optional string."
```

Implicitly Unwrapped Optional을 그것이 사용될때마다 자동적으로 언랩핑을 하기 위한 권한이 주어진 옵셔널으로 생각 할 수 있다. 그것을 사용할때마다 느낌표를 옵셔널의 이름뒤에 붙이는 것 보다는 네가 옵셔널을 선언할때 옵셔널의 타입 뒤에 느낌표를 붙이는 것이 낫다.

>NOTE
만일 네가 명확하지 않은 값에 Implicitly Unwrapped Optional로 접근을 시도할 경우, 런타임 에러가 발생한다. 그 결과는 마치 값이 명확하지 않은 일반적인 옵셔널 뒤에 느낌표를 붙인 결과와 정확히 같다.

만일 Implicitly Unwrapped Optional이 값을 가졌는지를 체크하기 위해서는 여전히 일반적인 옵셔널 처럼 다룰 수 있다:
```
if assumedString {
    println(assumedString)
}
// prints "An implicitly unwrapped optional string."
```
또한 한 문장으로 옵셔널의 값을 체크하고 언랩핑하기 위한 Implicitly Unwrapped Optionals의 옵셔널 바인딩도 사용가능하다:
```
if let definiteString = assumedString {
    println(definiteString)
}
// prints "An implicitly unwrapped optional string."
```
>NOTE
Implicitly Unwrapped Optional은 나중에 값이 `nil`이 가능성이 있는 경우에는 사용할 수 없다. 어떠한 변수가 `nil` 값을 가지는지 체크할 필요가 있는 경우에는 항상 일반적인 옵셔널 타입을 사용한다.

## Assertions

옵셔널은 값이 있는지 있지 않은지 체크를 할수 있게 해주고, 값이 부재한지 우아하게 대처하는 코드를 작성합니다. 그러나 이것으로는 값이 없거나 명확한 조건을 만족하지 않은 값을 제공하는 경우에 코드를 계속 실행하게 하는 것은 불가능합니다. 이러한 상황에서 당신은 코드상에서 값이 없거나 올바르지 않은 경우를 디버그하기 위한 기회를 제공하고 종료 코드를 실행하기 위해 Assertion을 발생시킬수 있습니다.

### Assertions을 통한 디버그(Debugging with Assertions)

assertion은 논리적 조건이 항상 `true`인지를 런타임에 체크한다. 문자 그대로, assertion은 조건이 항상 `true`인 것을  “주장한다”. 더 이상의 코드를 실행시키기 전에 필수적인 조건을 만족하는 지를 확실히 하기 위해서 assertion을 사용한다. 만일 그 조건이 `true`라면, 보통 코드는 계속하여 실행된다. 그러나 만일 그 조건이 `false`라면 코드는 종료되고, 너의 앱도 종료될 것이다.

만일 Xcode에서 앱을 빌드하고 실행할때와 같이 당신의 코드가 디버깅 환경에서 돌아가고 있을때 assertion이 발생한다면, 어디서 올바르지 않은 상태가 발생했는지 볼 수 있고, assertion이 발생한 시점에서의 앱의 상태를 요구할 수있다. assertion은 또한 당신에게 assert가 발생한 원인에 대한 명확한 디버그 메시지도 제공한다.

당신는 전역적인 assert함수로서 assertion을 작성할 수도 있고, assert함수에게 `true`와 `false`를 체크할 조건과 조건이 `false`일때 출력할 메시지를 넘겨줄 수 있다:
```
let age = -3
assert(age >= 0, "A person's age cannot be less than zero")
// this causes the assertion to trigger, because age is not >= 0
```
이 예제에서 코드는 오직 `age >= 0`이 `true`일때(`age`가 음수가 아닐때)만 실행됩니다. 만일 `age`의 값이 음수라면 위와 같이 `age >= 0`의 결과는 `false`가 되고 assertion이 발생하며 그 앱은 종료됩니다.

Assertion 메시지는 문자어구를 사용해야하는 것은 아닙니다. assertion 메시지는 다음과 같이 원하는 경우에는 생략도 가능합니다:
```
assert(age >= 0)
```
### Assertion을 사용할 때(When to Use Assertions)

어떠한 조건이 `false`가 될수 있지만 코드 실행을 계속하기 위해서는 반드시 `true`이여만 하는 곳에 assertion을 사용한다. asertion 체크를 포함하는 올바른 경우들은 다음과 같다:

- 어떠한 정수의 서브스크립트 인덱스가 커스텀 서브스크립트 구현을 위해 제공되었으나, 그 서브스크립트 인덱스의 값이 너무 크거나 작을 수 있을때.
- 함수로 넘긴 어떤 값이 함수에서 작업을 진행하는데 적합하지 않은 값일때.
- 옵셔널 값이 현재 `nil`인데 추후의 코드 실행을 위해서 `nil`이 아닌 값이 필요할때.

이에 관해서는 [Subscripts]()와 [Functions]()을 참고하시기 바랍니다.

>NOTE
Assertions는 당신의 앱이 종료하는 원인이고, 당신의 코드를 부적절한 조건이라도 곤란한 상황이 발생하지 않도록 디자인 하기 위한 대체물이 없다. 그렇기는 하지만 올바르지 않은 조건이 발생할 수 있는 상황에서, assertion은 어떠한 조건을 앱의 출시 전에 개발에서 강조하고 주목시키기 위한 매우 효과적인 방법이다.





