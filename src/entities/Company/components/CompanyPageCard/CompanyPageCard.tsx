"use client"
import {Divider, Typography} from "antd";
import {FC} from "react";

type CompanyPageCardProps = {
    title: string,
    description: string,
    img?: string
}

type VacancyItemProps = {
    id: string,
    vacancyName: string,
}

const VacancyItem: FC<VacancyItemProps> = ({id, vacancyName}) => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center gap-[10px] p-[5px]'>
                <div>img</div>
                <div>{vacancyName}</div>
            </div>
            <Divider style={{margin: 0}}/>
        </div>
    )
}
const CompanyPageCard: FC<CompanyPageCardProps> = ({title, description, img}) => {
    const vacancies = [{id: '432321', vacancyName: 'Уборщик'}, {id: '1234', vacancyName: 'Чел'}]
    return (
        <div className='bg-white py-[10px] px-[15px] flex flex-col gap-5 rounded-[5px] items-center'>
            <div className='flex flex-col items-center gap-[10px]'>
                <div>Картинка компании</div>
                <div className='flex flex-col items-center'>
                    <Typography.Title level={3} style={{margin: 0}}>{title}</Typography.Title>
                    <div className='neutral-9'>{description}</div>
                </div>
            </div>
            <div className='w-full'>
                <Divider style={{margin: 0}}/>
                {
                    vacancies.map(item => (
                        <VacancyItem key={item.id} id={item.id} vacancyName={item.vacancyName}/>
                    ))
                }
            </div>
            <div>Другие вакансии компании</div>
        </div>
    )
}

export default CompanyPageCard