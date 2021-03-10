import { Csv } from './csv';

describe('Component: Csv', () => {
  it('should create a file with name My_Report.csv', () => {
    let data = [
      {
        name: 'Test 1',
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 4',
        age: 10,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
    ];

    let testee = new Csv(data, 'My Report');
    expect(testee).toBeTruthy();
  });
});
