# 15 상속 (Inheritance)
> Translator : YoonJeong Kwon (hoppingbonny@naver.com)

하나의 클래스는 또다른 클래스의 메서드, 프로퍼티, 이 외에 다른 특징들을 상속받을 수 있다. 어떤 클래스가 다른 클래스로부터 상속받을 때, 상속받는 클래스를 _**하위클래스(subclass)**_라 하고 하위클래스가 상속하는 클래스를 _**상위클래스(superclass)**_라 한다.
Swift에서 상속이란, 다른 타입의 클래스들과 차별화하는 기본적인 방법이다. 

Swift에서 모든 클래스는 상위클래스에 속한 메서드, 프로퍼티, 서브스크립트들을 호출하고 접근할 수 있고, 해당 메서드, 프로퍼티, 서브스크립트들을 오버라이딩하여 자신의 행동을 재정의하거나 수정할 수도 있다. Swift는 오버라이드 정의가 상위클래스의 정의와 일치하는 지를 확인하여 오버라이드가 정확히 이뤄졌음을 보장해주기도 한다.

또한 모든 클래스에는 프로퍼티 값의 변화를 감지하기 위한 프로퍼티 관찰자(property observers)를 상속한 프로퍼티에 추가할 수도 있다. 프로퍼티 관찰자는 해당 프로퍼티가 stored 혹은 computed 인지에 관계없이 어떤 프로퍼티에도 추가할 수 있다.

## 베이스 클래스 정의
**_베이스 클래스(Base Class)_**란, 어떤 클래스도 상속받지 않은 클래스를 말한다.

> NOTE
Swift 클래스들은 보편적인 베이스 클래스를 상속받지 않는다. 당신이 정의한 클래스가 상위클래스를 가지지 않는다면, 자동적으로 베이스 클래스가 된다.

아래 예제는 `Vehicle` 베이스 클래스를 정의한 것이다. 이 베이스 클래스는 두 개의 변수(`numberOfWheels`와 `maxPassengers`)를 선언하고 있고, 이 두 변수는 모든 vehicle에 대한 기본 속성이다. `description()`에서 이 변수들을 사용하여, vehicle 특징에 관한 설명을 `String`타입으로 리턴한다.
```
class Vehicle {
  var numberOfWheels: Int
  var maxPassengers: Int
  func description() -> String {
    return "\(numberOfWheels) wheels; up to \(maxPassengers) passengers"
   }
  init() {
    numberOfWheels = 0
    maxPassengers = 1
  }
}
```
`Vehicle` 클래스는 프로퍼티들의 초기값을 설정하기 위해 _**생성자(intializer)**_를 정의하고 있다. 생성자는 [Intialization] 에서 상세하게 다루며, 여기서는 상속한 변수가 하위클래스에 의해 어떻게 바뀌는지를 설명하기 위해 간략하게만 소개하도록 한다.

당신은 어떤 타입의 새로운 인스턴스를 생성하기 위해 생성자를 사용한다. 비록 생성자가 메서드는 아니지만, 그것들은 인스턴스 메서드와 매우 유사한 문법으로 작성된다. 생성자는 새로운 인스턴스를 사용 가능한 상태로 준비하고, 인스턴스의 모든 변수들이 유효한 초기값을 갖도록 보장한다.

가장 단순한 형태의 생성자는 매개변수가 없는 인스턴스 메서드처럼 보이며, `init` 키워드를 사용해서 작성한다.
```
init() {
	// perform some initialization here
}
```
`Vehicle`의 새로운 인스턴스를 생성하려면, `타입명(TypeName)`과 빈 괄호를 사용하여 생성자를 호출한다.
```
let someVehicle = Vehicle()
```
`Vehicle` 생성자는 인스턴스의 프로퍼티에 초기값을 설정한다. (`numberOfWheels = 0`, `maxPassengers = 1`)

`Vehicle` 클래스는 임의의 vehicle에 대해 공통적인 특징들을 정의하지만, 그 자체로 충분하지는 않다. 좀 더 유용한 클래스로 만들기 위해 더 구체적인 종류의 vehicle을 표현하도록 Vehicle 클래스를 재정의할 필요가 있다. 

## 하위클래스 정의
**_하위클래스를 정의(subclassing)_**한다는 것은 기존 클래스에 기반을 둔 새로운 클래스를 생성하는 것이다. 하위클래스는 기존 클래스의 모든 특징을 상속받고, 그것들을 재정의할 수 있다. 또한 새로운 특징들을 하위클래스에 추가할 수 있다.

어떤 클래스가 상위클래스를 갖는다는 것을 나타내려면 본 클래스명 뒤에 콜론(:)과 상위클래스명을 차례로 적는다.
```
class SomeClass: SomeSuperclass {
	// class definition goes here
}
```
다음 예제는 더 구체적인 vehicle의 `Bicycle`을 정의한 것이다. 이 새로운 클래스는 `Vehicle`이 가진 역량에 기반한다. 상위클래스명(`Vehicle`)을 콜론으로 구분하여 하위클래스명(`Bicycle`) 뒤에 놓음으로써 Bicycle과 Vehicle 관계를 나타낼 수 있다.

이는 다음와 같이 설명할 수도 있다.
"`Bicycle`이라는 새로운 클래스를 정의하고, 이 클래스가 `Vehicle`의 특징들을 상속받는다"
```
class Bicycle: Vehicle {
  init() {
    super.init()
    numberOfWheels = 2
  }
}
```
`Bicycle`은 `Vehicle`의 하위클래스이고, `Vehicle`은 `Bycicle`의 상위클래스이다. 새로운 `Bicycle` 클래스는 자동적으로 `Vehicle`의 모든 특징들, `maxPassengers`와 `numberOfWheels`와 같은 프로퍼티들을 획득한다. `Bicycle` 클래스의 요구조건을 맞추기 위해 상위클래스의 특징을 딱 맞게 조정하고 새로운 특징을 추가할 수 있다.

또한 `Bicycle` 클래스는 자신에게 딱 맞춰진 특징들을 설정하기 위해 생성자를 정의한다. `Bicycle` 생성자는 `super.init()` 메서드를 통해 상위클래스인 `Vehicle`의 생성자를 호출하고 있다. 이 때 `Bicycle`이 상속한 모든 변수들을 수정하기 전에 `Vehicle`에 의해 초기화된다.

> NOTE
Object-C와 달리, Swift에서 생성자는 디폴트로 상속하지 않는다. 더 많은 정보를 보려면, [Initializer Inheritance and Overriding]()을 참고하도록 한다.

`Vehicle`에 의해 초기화된 `maxPassengers`의 디폴트값은 어떤 bicycle에도 적절한 값이므로 `Bicycle` 생성자에서 변경하지 않았다. 그러나 `numberOfWheels`의 디폴트 값은 적절치 않아 `2` 로 새롭게 대체했다.

`Bicycle`은 `Vehicle`의 프로퍼티들만 상속받는 것이 아니라, 메서드도 상속받는다. `Bicycle`의 인스턴스를 생성한 다음, 상속한 `description()`을 호출하여 프로퍼티들의 값이 어떻게 변경되었는지를 확인할 수 있다.
```
let bicycle = Bicycle()
println("Bicycle: \(bicycle.description())")
// Bicycle: 2 wheels; up to 1 passengers
```
하위클래스는 또다른 하위클래스를 만들 수 있다.
```
class Tandem: Bicycle {
  init() {
    super.init()
    maxPassengers = 2
  }
}
```
위 예제는 2인용 tandem 자전거를 위한 `Bicycle`의 하위클래스이다. `Tandem`은 `Bicycle`로부터 두 프로퍼티를 상속받고, `Bicycle`은 그 두 프로퍼티를 `Vehicle`로부터 상속받는다. `Tandem`은 bicyle이기 때문에 바퀴의 숫자는 동일하다. 그러나 tandem 자전거를 만들기 위해 `maxPassengers` 값을 적절하게 변경하고 있다.

> NOTE
하위클래스는 오로지 초기화하는 동안 상위클래스의 변수(variable properties)만 수정할 수 있다. 상속한 하위클래스의 상수(constant properties)는 변경할 수 없다.

`Tandem` 인스턴스를 생성하고 해당 인스턴스에 대한 설명을 출력하는 것은 해당 프로퍼티들이 어떻게 수정되었는지를 보여준다. 
```
let tandem = Tandem()
println("Tandem: \(tandem.description())")
// Tandem: 2 wheels; up to 2 passengers
```
`description()`는 `Tandem`이 상속받은 것이다. 어떤 클래스의 인스턴스 메서드는 그 클래스의 모든 하위클래스들이 상속받는다.

## 오버라이딩
하위클래스는 인스턴스 메서드, 클래스 메서드, 인스턴스 프로퍼티 혹은 서브스크립트에 대해 자신만의 커스텀 구현체를 제공할 수 있다. 그렇지 않았다면 상위클래스의 것들을 상속받을 것이다. 이를 **_오버라이딩(Overriding)_**이라 한다.

상속한 특징을 오버라이드하려면 오버라이딩한다는 의미로 `override` 키워드를 접두사로 붙인다. 그렇게 하는 것은 의도적으로 오버라이드를 했고 실수로 일치하는 않는 정의를 한 것이 아님을 분명하게 만든다. 우연히도 오버라이딩은 예기치 못한 행동을 일으킬 수도 있고, `override` 키워드가 없는 어떤 오버라이드는 코드가 컴파일될 때 에러로 인식될 수도 있다.

또한 `override` 키워드는 Swift 컴파일러에게 오버라이딩 클래스의 상위클래스(혹은 부모 클래스 중 하나)가 당신이 오버라이드한 것과 일치하는 선언을 갖고 있는지 확인하도록 즉각적인 명령을 내린다. 이러한 확인은 오버라이딩 정의가 올바르게 되었음을 확실하게 만든다.
‌
### 상위클래스의 메서드, 프로퍼티, 서브스크립트에 접근하는 방법 
메서드, 프로퍼티, 서브스크립트를 오버라이드해서 하위클래스를 만들 때 오버라이드의 일부분으로서 기존 상위클래스의 구현을 활용하는 것이 때때로 유용하다. 예를 들면, 기존 구현의 행동을 재정의할 수도 있고 상속한 변수에 변경된 값을 저장할 수 있기 때문이다.

적절한 위치에서 `super` 접두사를 가지고 상위클래스의 메서드, 프로퍼티, 서브스크립트에 접근할 수 있다.

- `someMethod()`가 오버라이드 되었을 때, 오버라이딩 메서드 내부에서 `super.someMethod()`를 통해 상위클래스의 `someMethod()` 메서드를 호출할 수 있다. 
- `someProperty`가 오버라이드 되었을 때, 오버라이딩한 접근자(getter)와 설정자(setter) 내부에서 `super.someProperty`를 통해 상위클래스의 `someProperty`를 호출할 수 있다.
- `someIndex`에 해당하는 서브스크립트가 오버라이드 되었을 때, 오버라이딩한 서브스크립트 내부에서 `super[someIndex]`를 통해 상위클래스의 동일한 서브스크립트를 호출할 수 있다.

### 메서드 오버라이딩
하위클래스에서 특정한 목적에 맞는 메서드를 제공하거나 해당 메서드를 대체하려면, 상속한 인스턴스나 클래스 메서드를 오버라이드하면 된다.

다음 예제에서 `Vehicle`의 하위클래스인 `Car`를 정의하였고, 이 클래스는 `Vehicle`로부터 `description()`를 상속받아 오버라이드한다.
```
class Car: Vehicle {
  var speed: Double = 0.0
  init() {
    super.init()
    maxPassengers = 5
    numberOfWheels = 4
  }
  override func description() -> String {
 	 return super.description() + "; " + "traveling at \(speed) mph"
  }
}
```
`Car`는 `Double` 타입의 새로운 `speed` 변수를 선언하고 있다. 이 변수는 `0.0`으로 초기화되었고 이는 "시간당 0마일"을 의미한다. 또한 `Car`는 커스텀 생성자를 통해 `maxPassengers`를 `5`, `numberOfWeels`를 `4`로 설정한다. 

`Car`는 상속한 `description()`을 오버라이드하되, `Vehicle`의 `description()`과 동일한 선언부를 가진다. 오버라이딩 메서드 정의 시, `override` 키워드를 접두사로 사용한다.

오버라이딩한 `description()`이 완전한 커스텀 구현을 제공하지는 않는다. `super.description()`을 호출하여 `Vehicle`의 리턴값을 받아 사용하기 때문이다. 그 다음 car의 현재 속도 정보를 덧붙여 출력하고 있다.

`Car`의 새로운 인스턴스를 생성하고 `description()` 결과를 출력해보면, 실제 출력 내용이 변경되었음을 확인할 수 있다. 
```
let car = Car()
println("Car: \(car.description())")
// Car: 4 wheels; up to 5 passengers; traveling at 0.0 mph
```
### 프로퍼티 오버라이딩
프로퍼티에 대한 커스텀 접근자와 설정자를 제공하거나 프로퍼티 값의 변경을 감시하기 위한 프로퍼티 관찰자를 추가하려면, 상속한 인스턴스나 클래스 메서드를 오버라이드하면 된다.

#### 프로퍼티 접근자와 설정자 오버라이딩
상속한 프로퍼티를 오버라이드 하려면 그 프로퍼티가 stored 혹은 computed 프로퍼티인지에 관계없이 커스텀 접근자와 설정자를 제공하면 된다. 상속한 프로퍼티의 stored 혹은 computed 성질은 하위클래스는 알지 못하고, 오로지 상속한 프로퍼티의 이름과 타입만 알 뿐이다. 항상 오버라이딩 하려는 프로퍼티의 이름과 타입을 동일하게 유지해야 한다. 그래야 컴파일러가 오버라이드한 것과 상위클래스의 프로퍼티의 이름과 타입이 일치하는지를 체크할 수 있다.

하위클래스 프로퍼티를 오버라이딩할 때 접근자와 설정자를 동시에 정의함으로써 읽기만 가능했던 상속 프로퍼티를 읽고 쓰기가 가능한 프로퍼티로 나타낼 수 있다. 그러나 읽고 쓰기가 가능한 상속 프로퍼티를 읽기만 가능한 프로퍼티로 나타낼 수는 없다.	

> NOTE
프로퍼티 오버라이드 중 설정자를 제공한다면, 접근자도 반드시 제공해야 한다. 아래 `SpeedLimitedCar` 예제처럼 상속한 프로퍼티의 값을 오버라이딩 접근자 안에서 변경하고 싶지 않다면, `super.someProperty`를 통해 상속한 프로퍼티의 값을 그대로 해당 접근자로부터 가져올 수 있다. 

다음 예제는 `Car`의 하위클래스인 새로운 `SpeedLimitedCar`를 정의한 것이다.
`SpeedLimitedCar` 클래스는 속도 제한 장치가 장착된 차를 나타낸다. 속도 제한 장치는 40mph보다 빠르게 달리는 것을 방지한다. 이러한 제한규칙은 상속한 `speed` 프로퍼티를 오버라이딩함으로써 구현할 수 있다. 
```
class SpeedLimitedCar: Car {
  override var speed: Double {
    get {
	    return super.speed
    }
    set {
	    super.speed = min(newValue, 40.0)
    }
  }
}
```
`SpeedLimitedCar` 인스턴스의 `speed` 프로퍼티를 설정할 때마다 프로퍼티의 설정자는 새로운 값을 확인하고 그 값을 40mph로 제한한다. 이는 상위클래스의 `speed` 프로퍼티에 `새로 입력한 속도값`과 `40.0` 중 가장 작은 값을 대입함으로써 행해진다. `min` 함수에 의해 두 개의 값 중 가장 작은 것이 선택된다. `min` 함수는 글로벌 함수로 Swift 표준 라이브러리를 통해 제공되며, 두 개 이상의 값을 제공받아 가장 작은 값을 리턴한다.

`SpeedLimitedCar` 인스턴스의 `speed` 프로퍼티에 40mph 이상을 대입하고 `description()`을 통해 결과를 출력해보면, 속도가 제한되었음을 확인할 수 있다.
```
let limitedCar = SpeedLimitedCar()
limitedCar.speed = 60.0
println("SpeedLimitedCar: \(limitedCar.description())")
// SpeedLimitedCar: 4 wheels; up to 5 passengers; traveling at 40.0 mph
```
#### 프로퍼티 관찰자 오버라이딩
프로퍼티 관찰자를 상속한 프로퍼티에 추가하려면, 프로퍼티 오버라이딩을 사용한다. 이것은 프로퍼티가 어떻게 구현되었는지에 관계없이 상속한 프로퍼티 값의 변화를 알아차릴 수 있도록 해준다. 프로퍼티 관찰자에 대한 더 많은 정보를 보려면, [Property Observers]()를 참고하도록 한다.

> NOTE
프로퍼티 관찰자는 상수 혹은 읽기 전용 프로퍼티에 추가될 수 없다. 이러한 프로퍼티 값은 다시 설정될 수 없기 때문에 오버라이드의 일부인 `willSet()` 혹은 `didSet()`을 제공하는 것은 적절치 않다.
또한 오버라이딩 설정자와 오버라이딩 프로퍼티 관찰자를 동시에 제공할 수 없다. 프로퍼티 값이 변경되는 것을 관찰하고 싶고 이미 그 프로퍼티를 위한 커스텀 설정자를 제공하고 있다면, 커스텀 설정자 안에서 값의 변화를 간단하게 관찰할 수 있다.

다음 예제는 `Car`의 하위클래스인 `AutomaticCar`를 정의한 것이다. `AutomaticCar` 클래스는 자동 기어박스를 가진 차를 나타내고, 자동 기어박스는 현재 속도에 따라 자동적으로 적절한 기어를 선택한다. 또한 `AutomaticCar`의 커스텀 `description()`는 현재 기어 정보를 포함하여 출력하도록 구현했다.
```
class AutomaticCar: Car {
  var gear = 1
  override var speed: Double {
    didSet {
    gear = Int(speed / 10.0) + 1
    }
  }
  override func description() -> String {
	  return super.description() + " in gear \(gear)"
  }
}
```
`AutomaticCar` 인스턴스의 `speed` 프로퍼티를 설정할 때마다, 프로퍼티의 `didSet` 관찰자는 새로운 속도 값에 따라 자동적으로 `gear` 프로퍼티에 적절한 기어값을 할당한다. 이 관찰자는 새로운 `speed` 값을 `10`으로 나눈 후 반올림한 정수를 기어값으로 선택한다. speed가 `10.0`이면 gear에`1`이 할당되고, speed가 `35.0`이면 gear에 `4`가 할당된다.
```
let automatic = AutomaticCar()
automatic.speed = 35.0
println("AutomaticCar: \(automatic.description())")
// AutomaticCar: 4 wheels; up to 5 passengers; traveling at 35.0 mph in gear 4
```
## 오버라이드 방지
메서드, 프로퍼티, 서브스크립트를 오버라이딩하지 못하도록 하려면, _final_로 표시하면 된다. `@final` 속성을 첫 키워드 앞에 표시한다. (예, `@final var`, `@final func`, `@final class func`, `@final subscript`)

하위클래스 내에 final 메서드, 프로퍼티, 서브스크립트를 오버라이드하면 컴파일 시간 에러(compile-time error)를 발생한다. 확장 클래스 안에 추가한 메서드, 프로퍼티, 서브스크립트도 final로 표시될 수 있다.

전체 클래스를 final로 만들려면 `class` 키워드 앞에 `@final`을 표시(`@final class`)하면 된다. 하위클래스를 final 클래스로 만들려면 컴파일 시간 에러를 발생할 것이다.
