import styles from '@/components/Section/page.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  items: string[];
  link: string;
}

export const SectionItem = ({ src, alt, width, height, title, description, items, link }: Props) => {


  return (
    <div className={styles.cardWorkItem}>
      <div className={styles.imgCard}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>

      <div className={styles.textCard}>
        <h4>{title}</h4>

        <p>{description}</p>
      </div>

      <div className={styles.tec}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      <div className={styles.Link}>
        <a href={link}>Ver projeto</a>

        <ArrowRight size={12} />

      </div>

    </div>
  )
}