import {FaCheck} from "react-icons/fa";

export function Player(){
    return (
        <>
        <div className='col-span-2'>
            <form className='flex items-center justify-center space-x-2'>
                <input
                    className='h-8 w-32 bg-third-theme rounded-sm shadow-inner transition-all hover:scale-105 font-frijole text-center placeholder-black'
                    type='text' placeholder='player'/>
                <FaCheck size={20}/>
            </form>
        </div>
    <div className='col-span-2 text-center'>
        <p className='font-frijole'> score:</p>
        <p className='font-frijole'> 321</p>
    </div>
        </>
)
}