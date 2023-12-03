"use client"
import {FC, ReactNode} from "react";

type ParamItemProps = {
    label: string,
    description: string | ReactNode
}

const ParamItem:FC<ParamItemProps> = ({label, description}) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='accent-neutral-8'>{label}</div>
            <div className='accent-neutral-10 font-medium'>{description}</div>
        </div>
    )
}

export { ParamItem }