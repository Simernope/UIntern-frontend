"use client"
import {Divider, Typography} from "antd";
import {WeekItem} from "@/entities/Vacancy";

const VacancyDescription = () => {
    return (
        <div className='bg-white py-[10px] px-[15px] flex flex-col gap-[5px] rounded-[5px]'>
            <Typography.Title level={4} style={{margin: 0}}>Описание вакансии</Typography.Title>
            <Divider style={{margin: 0}}/>
            <Typography.Title level={4} style={{margin: 0}}>О компании и команде</Typography.Title>
            <p className='m-0'>Интерфейсами, которые мы пишем на React, пользуются миллионы людей ежедневно — от
                интернет-банка до
                поиска авиарейсов и отелей, от инвестиций до покупки билетов в кино и бронирования ресторанов, от
                обучающих курсов Тинькофф Журнала до терминалов и банкоматов.</p>
            <Typography.Title level={4} style={{margin: 0}}>Ожидание от кандидата</Typography.Title>

            <ul className='m-0'>
                <li>Отличные знания JavaScript</li>
                <li>Опыт разработки на React от 3-х лет</li>
                <li>Понимание современного стека web-разработки</li>
                <li>Готовность работать в распределенной команде</li>
            </ul>
            <div className='my-1'>Будет плюсом</div>
            <ul className='m-0'>
                <li>Опыт работы с TypeScript</li>
                <li>Навыки написания Unit-тестов</li>
            </ul>

            <Typography.Title level={4} style={{margin: 0}}>Примерный план работы</Typography.Title>
            <div className='flex flex-col gap-[10px]'>
                <WeekItem week={'1'} name={'Онбординг'} description='Супер  важное описание что делают на этом этапе'/>
                <WeekItem week={'2'} name={'Анализ'} description='Супер  важное описание что делают на этом этапе'/>
                <WeekItem week={'3'} name={'Разработка'} description='Супер  важное описание что делают на этом этапе'/>
                <WeekItem week={'4'} name={'Тестирование'}
                          description='Супер  важное описание что делают на этом этапе'/>
            </div>
        </div>
    )
}

export default VacancyDescription