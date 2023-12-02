"use client"
import {Row, Typography} from "antd";
import {FC, ReactNode} from "react";

type VacancyHeaderProps = {
    vacancyName: string,
    date: string,
    requiredSkills: Array<{ id: number, name: string }>,
    format: string,
    address: string,
    employmentType: string,
    workSchedule: string
}

const ParamsWrapper = ({label, description}: { label: string, description: string | ReactNode }) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='accent-neutral-8'>{label}</div>
            <div className='accent-neutral-10 font-medium'>{description}</div>
        </div>
    )
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
        <div className='bg-white py-[10px] px-[15px] flex flex-col gap-5'>
            <Row justify='space-between' align='middle'>
                <Typography.Title level={3} style={{margin: 0}}>{vacancyName}</Typography.Title>
                <span className='accent-neutral-9'>{date}</span>
            </Row>
            <ParamsWrapper label='Формат' description={format}/>
            <ParamsWrapper label='Требуемые навыки' description={
                <div className='flex gap-3'>
                    {
                        requiredSkills.map((item, index) =>
                            <div key={index * 3212}
                                 className='bg-neutral-5 px-2.5 py-1 rounded font-medium'>{item.name}</div>
                        )
                    }
                </div>
            }/>
            <ParamsWrapper
                label='Местоположение и тип занятости'
                description={`${address} * ${employmentType} * ${workSchedule}`}
            />
        </div>
    )
}

export default VacancyHeader