import { TodoTextFilterPipe } from './todo-text-filter.pipe';

describe('TodoTextFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TodoTextFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
