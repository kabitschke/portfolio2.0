import styles from '@/components/SectionMake/page.module.css';
import { ArrowRight, Icon, LucideIcon } from 'lucide-react';

type Props = {
    title: string;
    description: string;
    link: string;
    icon: LucideIcon;
}

export const SectionMakeItem = ({ title, description, link, icon: Icon }: Props) => {

    return (


        <div className={styles.card}>

            <div className={styles.cardIcon}>
                {<Icon size={30} />}
            </div>

            <div className={styles.cardItem}>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
                <div className={styles.link}>
                    <a href={link}>Saiba mais </a> <ArrowRight size={14} />
                </div>
            </div>


        </div>







    )


}