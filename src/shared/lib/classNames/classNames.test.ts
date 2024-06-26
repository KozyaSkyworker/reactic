import { classNames } from "shared/lib/classNames/classNames"

describe('classNames', ()=>{
    test('first params is empty string', ()=>{
        expect(classNames('')).toBe('')
    })

    test('only first param exists', ()=>{
        expect(classNames('class1')).toBe('class1')
    })

    test('first param and mods exists', ()=>{
        expect(classNames('class1', {disabled: true, hovered: true})).toBe('class1 disabled hovered')
    })

    test('first param, mods exists and additional params exists', ()=>{
        expect(classNames('class1', {disabled: true, hovered: true}, ['class2', 'class3'])).toBe('class1 class2 class3 disabled hovered')
    })

    test('mods have false param', ()=>{
        expect(classNames('class1', {disabled: true, hovered: false}, ['class2', 'class3'])).toBe('class1 class2 class3 disabled')
    })

    test('additional param is undefined', ()=>{
        expect(classNames('class1', {disabled: true, hovered: true}, [undefined])).toBe('class1  disabled hovered')
    })

    test('mods param ', ()=>{
        expect(classNames('class1', {disabled: undefined, hovered: undefined})).toBe('class1')
    })
})