export function getOptions(option) {
    if (option) {
        return [
            {
                text: 'one',
                value: '1',
            },
            {
                text: 'two',
                value: '2',
            },
            {
                text: 'three',
                value: '3',
            },
        ]
    } else return [
        {
            text: 'four',
            value: '4',
        },
        {
            text: 'five',
            value: '5',
        },
        {
            text: 'six',
            value: '6',
        },
    ]
}
export function getCheckboxGroup(num) {
    return new Array(num).fill({
        checked: false,
        disabled: false
    }).map((item, index) => {
        return {
            ...item,
            id: index + 1,
            label: `checkbox1-${index + 2}`
        }
    })

}
export function getRadioGroup(num) {
    return new Array(num).fill({
        name: 'groupA'
    }).map((item, index) => {
        return {
            ...item,
            value: 1000 - index,
            label: 1000 - index,
        }
    })
}