import Icons from '../Icons/Icons';
import './Card.css'
function Card({player, onPlay, index, gameEnd}){
    
    let icon = <Icons/>;
    if(player == "X"){
        icon = <Icons name={"cross"} />
    }else if(player == "O"){
        icon = <Icons name={"circle"} />
    }
    
    return(
        <div className='Card' onClick={()=>{
           !gameEnd && player == "" && onPlay(index)
        }}>
            {icon}
        </div>
    )
}

export default Card;