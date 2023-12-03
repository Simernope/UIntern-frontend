"use client"
import {Row, Typography} from "antd";
import {FC} from "react";
import {ParamItem} from "@/entities/Vacancy";

type VacancyHeaderProps = {
    vacancyName: string,
    date: string,
    requiredSkills: Array<{ id: number, name: string }>,
    format: string,
    address: string,
    employmentType: string,
    workSchedule: string
}

const VacancyHeader: FC<VacancyHeaderProps> = (props) => {
    const {
        vacancyName,
        date,
        requiredSkills,
        format,
        address,
        employmentType,
        workSchedule
    } = props
    return (
        <div className='bg-white py-[10px] px-[15px] flex flex-col gap-5 rounded-[5px]'>
            <Row justify='space-between' align='middle'>
                <Typography.Title level={3} style={{margin: 0}}>{vacancyName}</Typography.Title>
                <span className='accent-neutral-9'>{date}</span>
            </Row>
            <ParamItem label='Формат' description={format}/>
            <ParamItem label='Требуемые навыки' description={
                <div className='flex gap-3'>
                    {
                        requiredSkills.map((item, index) =>
                            <div key={index * 3212}
                                 className='bg-neutral-5 px-2.5 py-1 rounded font-medium'>{item.name}</div>
                        )
                    }
                </div>
            }/>
            <ParamItem
                label='Местоположение и тип занятости'
                description={`${address} * ${employmentType} * ${workSchedule}`}
            />
        </div>
    )
}

export default VacancyHeader