import React from 'react';
import Counter from '../Counter';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("header renders with correct text", () => {
    const {getByTestId} = render(<Counter />);
    const headerEl = getByTestId("header")
    expect(headerEl.textContent).toBe("My Counter")
})

test("Counter initially starts with 0", () => {
    const { getByTestId } = render(<Counter />)
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
})

test("input contains initial value of 1", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1")
})

test("add btn renders with +", ()=> {
    const { getByTestId } = render(<Counter />)
    const addBtn = getByTestId("add-btn")
    expect(addBtn.textContent).toBe("+")
})

test("subtract btn renders with +", ()=> {
    const { getByTestId } = render(<Counter />)
    const subBtn = getByTestId("sub-btn")
    expect(subBtn.textContent).toBe("-")
})

test("change value of input works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")
    fireEvent.change(inputEl, {
        target :{
        value : 5
        }
    });
    expect(inputEl.value).toBe("5")
    })

test("clicking button changes value to 1",() => {
    const { getByTestId } = render(<Counter />)
    const btnEl = getByTestId('add-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("1")
})    

test("clicking button changes value to -1",() => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId('sub-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subtractBtnEl)

    expect(counterEl.textContent).toBe("-1")
})    

test("clicking button changes input value",() => {
    const { getByTestId } = render(<Counter />)
    const btnEl = getByTestId('add-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    })

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("5")
})   

test("clicking sub button changes input value",() => {
    const { getByTestId } = render(<Counter />)
    const btnEl = getByTestId('sub-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    })

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("-5")
})  

test("counter shows the correct class name", () => {
    const { getByTestId } = render(<Counter />)
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')
    const addBtnEl = getByTestId('add-btn')
    const subBtnEl = getByTestId('sub-btn')

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target:{
            value:"50"
        }
    })

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("")

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("green")

    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("green")

    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);    
    fireEvent.click(subBtnEl);    
    fireEvent.click(subBtnEl);    

    expect(counterEl.className).toBe("red")

})