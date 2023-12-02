import {Button, Drawer, Grid, Typography, Row, Col, Divider} from 'antd';
import {Vacancy} from "@/entities/Vacancy/mocks/vacancies";
import Link from "next/link";
import {CloseOutlined} from "@ant-design/icons";
import {ReactNode} from "react";

type ModalPanelProps = {
    onClose: () => void,
    open: boolean,
    vacancyData: Vacancy | null
}

const {useBreakpoint} = Grid

const ItemWrapper = ({label, value}: { label: string, value: string | ReactNode }) => {
    return (
        <>
            <Row>
                <Col span={10}>{label}</Col>
                <Col span={14}>{value}</Col>
            </Row>
            <Divider className='m-0'/>
        </>
    )
}

const WeekItem = ({week, name}: { week: string, name: string | ReactNode }) => {
    return (
        <div className='bg-white py-2 px-4 flex flex-col gap-2 rounded-md'>
            <div className='accent-neutral-8'>{week} неделя</div>
            <div className='font-medium'>{name}</div>
        </div>
    )
}

const DrawerPanel = ({onClose, open, vacancyData}: ModalPanelProps) => {
    const {sm} = useBreakpoint()
    console.log(vacancyData)
    return (
        <Drawer closeIcon={null} headerStyle={{all: 'unset'}} placement="right" onClose={onClose} open={open}
                width={sm ? 510 : '100%'} style={{background: '#F5F5F5'}}>
            {vacancyData &&
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-between'>
                        <Typography.Title level={2} style={{margin: 0}}>{vacancyData.vacancyName}</Typography.Title>
                        <CloseOutlined onClick={onClose}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <ItemWrapper label='Компания' value={vacancyData.companyName}/>
                        <ItemWrapper label='Местоположение' value={vacancyData.address}/>
                        <ItemWrapper label='Тип занятости' value={vacancyData.employmentType}/>
                        <ItemWrapper label='Формат' value={vacancyData.format}/>
                        <ItemWrapper label='Как попасть' value={
                            vacancyData.toGetProperties.map((item, index) =>
                                <div key={index}>{index + 1}. {item.name}</div>
                            )}
                        />
                        <ItemWrapper label='Требуемые навыки' value={
                            <div className='flex gap-3'>
                                {
                                    vacancyData.requireSkills.map((item, index) =>
                                        <div key={index * 3212}
                                             className='bg-neutral-5 px-2.5 py-1 rounded font-medium'>{item.name}</div>
                                    )
                                }
                            </div>
                        }/>
                        <ItemWrapper label='Сколько работать' value={vacancyData.workSchedule}/>
                        <div className='mt-8 flex flex-col gap-4'>
                            {
                                vacancyData.weeksPlan.map((item, index) =>
                                    <WeekItem key={index * 1213} week={`${index + 1} неделя`} name={item.name}/>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link href={`/vacancies/${vacancyData.vacancyName}`}>
                            <Button type='primary'>Подробнее</Button>
                        </Link>
                    </div>
                </div>
            }
        </Drawer>
    )
}

export {DrawerPanel}