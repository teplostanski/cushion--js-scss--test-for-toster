import { Tabs } from './Tabs'
import { CustomSelect } from './CustomSelect'
import { timer } from './timer'

new Tabs('tab', {
  isChanged: (tabs) => {
    console.log(tabs)
  },
})

CustomSelect.hideOpenSelect()

document.addEventListener('DOMContentLoaded', () => {
  new CustomSelect('#size-select', {
    name: 'size', // значение атрибута name у кнопки
    targetValue: 'size1', // значение по умолчанию
    options: [
      ['size1', '2'],
      ['size2', '3'],
      ['size3', '4'],
      ['size4', '5'],
    ], // опции
  })

  new CustomSelect('#color-select', {
    name: 'color', // значение атрибута name у кнопки
    targetValue: 'color1', // значение по умолчанию
    options: [
      ['color1', 'Black'],
      ['color2', 'Orange'],
      ['color3', 'Pink'],
      ['color4', 'Yellow'],
    ], // опции
  })

  timer(4, 51, 16)
})
