"use client"
import {Divider, Typography} from "antd";
import {ParamItem} from "@/entities/Vacancy";

const ActionsPlan = () => {
    return (
        <div className='bg-white py-[10px] px-[15px] flex flex-col gap-[5px] rounded-[5px]'>
            <Typography.Title level={4} style={{margin: 0}}>План действий</Typography.Title>
            <Divider style={{margin: 0}}/>
            <div className='flex flex-col gap-[10px]'>
                <ParamItem label='1. Откликнитесь на вакансию'
                           description='Расскажите о себе, почему вы хотите попасть на эту позицию'/>
                <ParamItem label='2. Получите тестовое задание'
                           description='HR менеджер отправит тестовое в чате'/>
                <ParamItem label='3. Отправьте результат '
                           description='Дождитесь обратной связи и офера'/>
            </div>
        </div>
    )
}

export default ActionsPlan