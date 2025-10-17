import sum from "./sum.js"

describe("test for sum function",()=>{
    test("adds 2+2 to equal 4",()=>{
    expect(sum(2,2)).toBe(4);
    });
    test("add -1 + -3 equal -4",()=>{
        expect(sum(-1,-3)).toBe(-4);
    })
})
