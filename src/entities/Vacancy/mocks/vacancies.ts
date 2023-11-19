type Vacancy = {
    companyName: string,
    params: Array<{ id: number, name: string }>,
    vacancyName: string,
    image: string
}

export const vacancies: Array<Vacancy> = [
    {
        companyName: 'Сбер',
        params: [{id: 0, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Реакт разработчик',
        image: 'react'
    },
    {
        companyName: 'Уцсб',
        params: [{id: 1, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Тестировщик C#',
        image: 'testing'
    },
    {
        companyName: 'СКБ контур',
        params: [{id: 2, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Дизайнер',
        image: 'uxui'
    },
    {
        companyName: 'Сбер',
        params: [{id: 3, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Бэкенд разработчик',
        image: 'backend'
    },
    {
        companyName: 'Сбер 2',
        params: [{id: 0, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Реакт разработчик',
        image: 'react'
    },
    {
        companyName: 'Уцсб 2',
        params: [{id: 1, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Тестировщик C#',
        image: 'testing'
    },
    {
        companyName: 'СКБ контур 3',
        params: [{id: 2, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Дизайнер',
        image: 'uxui'
    },
    {
        companyName: 'Сбер 4',
        params: [{id: 3, name: 'Тестовое задание'}, {id: 1, name: 'Екатеринбург'}],
        vacancyName: 'Бэкенд разработчик',
        image: 'backend'
    }
]