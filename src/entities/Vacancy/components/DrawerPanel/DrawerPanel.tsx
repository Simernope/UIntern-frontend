import {Button, Drawer, Grid, Typography, Row, Col, Divider} from 'antd';
import {Vacancy} from "@/entities/Vacancy/mocks/vacancies";
import Link from "next/link";
import {CloseOutlined} from "@ant-design/icons";

type ModalPanelProps = {
    onClose: () => void,
    open: boolean,
    vacancyData: Vacancy | null
}

const {useBreakpoint} = Grid

const DrawerPanel = ({onClose, open, vacancyData}: ModalPanelProps) => {
    const {sm} = useBreakpoint()
    return (
        <Drawer closeIcon={null} headerStyle={{all: 'unset'}} placement="right" onClose={onClose} open={open}
                width={sm ? 510 : '100%'} style={{background: '#F5F5F5'}}>
            {vacancyData &&
                <div className='flex flex-col gap-8'>
                        <div className='flex items-center justify-between'>
                            <Typography.Title level={2} style={{margin: 0}}>{vacancyData.vacancyName}</Typography.Title>
                            <CloseOutlined onClick={onClose}/>
                        </div>
                    <div className='flex flex-col gap-2'>
                        <Row>
                            <Col span={12}>Компания</Col>
                            <Col span={12}>Сбер</Col>
                        </Row>
                        <Divider className='m-0'/>
                    </div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
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