import { Button } from "@/components";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export const Selector = ({options, label, handleSelect}) => {

    const [selected, setSelected] = useState(null)

    const handleClick = (code) =>{
        handleSelect(code)
        setSelected(code)
    }

    useEffect(() => {
        if(options.length===1){
            handleClick(options[0].code)
        }
    }, [])
    
    return (
        <>
        <h4>{label}</h4>
        <div className={styles.selector}>
            {
                options.map(option=>(
                    <Button type="button"
                     key={option.code} onClick={()=>handleClick(option.code)}>
       { selected===option.code ? <i data-testid="check" className="fa fa-check" />:null}

                        {option.name}
                    </Button>
                ))
            }
        </div>
        </>
    )
}
