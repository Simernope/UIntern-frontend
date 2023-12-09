"use client"
import {Vacancy} from "@/entities/Vacancy/mocks/vacancies";
import {ActionsPlan, VacancyDescription, VacancyHeader} from "@/entities/Vacancy";
import {NextPage} from "next";
import {CompanyPageCard} from "@/entities/Company";
import {Col, Row} from 'antd';
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

type VacancyPageProps = {
    vacancyData: Vacancy
}

const VacancyPage: NextPage<VacancyPageProps> = ({vacancyData}) => {
    const {vacancyName, requireSkills, format, address, employmentType, workSchedule} = vacancyData
    const {md} = useBreakpoint()
    return (
        <Row gutter={[20, 20]} style={md ? {flexDirection: 'row'} : {flexDirection: 'column-reverse'}}>
            <Col span={24} md={16} lg={18}>
                <div className='flex flex-col gap-[20px]'>
                    <VacancyHeader
                        vacancyName={vacancyName}
                        date={'1 октября'}
                        requiredSkills={requireSkills}
                        format={format}
                        address={address}
                        employmentType={employmentType}
                        workSchedule={workSchedule}
                    />
                    <VacancyDescription/>
                    <ActionsPlan/>
                </div>
            </Col>
            <Col span={24} md={8} lg={6}>
                <CompanyPageCard title={vacancyData.companyName} description='Разработка ПО'/>
            </Col>
        </Row>
    )
}

export default VacancyPage