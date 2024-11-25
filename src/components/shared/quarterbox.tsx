import { FC } from "react";

interface Iprops {
    header: string;
    description: string;
    number: number;
    haveborder?: boolean
}
const Quarterbox: FC<Iprops> = ({ header, description, number, haveborder = true }) => {
    return (
        <div>
            <div className={`border relative rounded-md flex-1 px-8 py-8 xl:py-16 flex flex-col justify-center items ${haveborder===true ? "border" :" "  } `}>
                <h4 className="font-bold text-lg">{header}</h4>
                <p className="mt-2 text-slate-600">{description}</p>
                <div className="absolute text-[170px] -top-10 right-10 font-bold text-gray-200 -z-20 ">{number}</div>
            </div>
        </div>
    )
}

export default Quarterbox