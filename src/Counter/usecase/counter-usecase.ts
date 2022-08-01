import { CounterDomain } from '../entity';
import { CounterModel } from '../model';

export class CounterUsecase implements CounterDomain {
  maxValue: number = 10;
  counter: CounterModel = { count: 0 };

  constructor(initialValue: number, maxValue: number = 10) {
    this.counter.count = initialValue;
    this.maxValue = maxValue;
  }

  increment({ value }: CounterDomain.Value): CounterModel {
    this.counter.count += value;
    if (this.counter.count >= this.maxValue) {
      this.counter.count = this.maxValue;
    }
    return this.counter;
  }

  decrement({ value }: CounterDomain.Value): CounterModel {
    if (this.counter.count <= this.maxValue && this.counter.count > 0) {
      this.counter.count -= value;
    }
    return this.counter;
  }

  reset(): CounterModel {
    this.counter.count = 0;
    return this.counter;
  }
}
