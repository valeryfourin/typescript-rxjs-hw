// 1. Add typings/access modifiers to the fruitBasket constant
enum Fruit {
  BANANA = 'banana',
  ORANGE = 'orange',
  KIWI = 'kiwi',
  APPLE = 'apple'
}
const fruitBasket = {
  [Fruit.BANANA]: 2,
  [Fruit.ORANGE]: 3,
  [Fruit.KIWI]: 2,
  [Fruit.APPLE]: 3
};

// console.log(fruitBasket[Fruit.BANANA])

// 2. Add typings/access modifiers to the Person class
class Person {
  private name: string;
  private gender: string;
  private age: number;
  private likes: string[];
  public constructor(name: string, gender: string, age: number, likes: string[]) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.likes = likes;
  }

  public introduce(): string {
    const { name, gender, age, likes } = this;
    const goodLookingMap = new Map([['male', 'handsome'], ['female', 'cute']]);
    return `
      Hello, I'm ${name}, ${age} years old, I like: ${likes.join(', ')}. 
      As you can see, I'm quite ${goodLookingMap.get(gender)} too!
    `;
  }
}

const Dima = new Person('Dima', 'male', 22, ['video games', 'martial arts']);

// console.log(Dima.introduce())

// 3. Add typings/access modifiers to MovieService class
class MovieService {
  logger: Logger;
  constructor(logger) {
    this.logger = logger;
  }
  public getMovies(): Promise<string[] | void> {
    return Promise.resolve(['Jaws', 'Spider-Man'])
    .then((result) => {
      console.log(result);
      return result
    })
    .then(() => {throw new Error('error')})
    .catch(err => {
      this.logger.log(err);
      return [];
    });
  }
}

class LoggerOne implements Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 1', err);
  }
}
class LoggerTwo implements Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 2', err);
  }
}

interface Logger {
  log: (err: Error) => void;
}

const movieService1 = new MovieService(new LoggerOne());
const movieService2 = new MovieService(new LoggerTwo());

console.log(movieService1.getMovies());
console.log(movieService2.getMovies());