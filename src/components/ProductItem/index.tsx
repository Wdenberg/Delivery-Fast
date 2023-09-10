
import Link from 'next/link';
import { Product } from '../../types/Products';
import styles from './styles.module.css';

type Props = {
  data: Product;
  mainColor: string;
  secondColor: string;

}

export const ProductItem = ({ data, mainColor, secondColor }: Props) => {
  return (
    <Link className={styles.link} href={`/wrdelivery/product/${data.id}`}>
      <div className={styles.container}>
        <div className={styles.Product}>
          <div className={styles.head} style={{ backgroundColor: secondColor }}></div>
          <div className={styles.info}>
            <div className={styles.img}>
              <img src={data.image} alt='' />
            </div>
            <div className={styles.catName}>{data.categoryName}</div>
            <div className={styles.Name}>{data.name}</div>
            <div className={styles.price} style={{ color: mainColor }}>{data.price}</div>
          </div>
        </div>
      </div>
    </Link>


  );
}