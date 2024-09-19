import ProfilePic from '../assets/female_Avatar.jpg'
import styles from './Card.module.css'

function Card(){

    const array = [
        {id: 1, title:"salma elrasheed", description:"HHHHHHHHHHHHH"},
        {id: 2, title:"fatma elrasheed", description:"KKKKKKKKKKKKK"},
        {id: 3, title:"eman elrasheed", description:"PPPPPPPPPPPPP"},
        
    ]

    return(
        
        <div className={styles.card}>
            <img className={styles.cardImg} src={ProfilePic} alt="Profile Picture"></img>
           
            <h2 className={styles.cardTitle}>
                Salma Elrasheed
            </h2>
           
            <p className={styles.cardDescription}>
                I'm .net developer and like to order home
            </p>

        </div>
        );
}

export default Card