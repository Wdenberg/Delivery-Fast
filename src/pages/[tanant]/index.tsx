import styles from '../../styles/Home.module.css';
import { SearchInput } from '../../components/SearchInput';
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';


const Home = () => {
  const handleSearch = (SearchValue: string) => {
    console.log(`Você esta Buscando Por:${SearchValue}`);
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo 👋</div>
            <div className={styles.headerSubitile}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLiner}></div>
              <div className={styles.menuButtonLiner}></div>
              <div className={styles.menuButtonLiner}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor='#FB9400'
            onSearch={handleSearch}
          />
        </div>
      </header>
      <Banner />
      <div className={styles.Grid}>
        <ProductItem
          data={{ id: 1, image: 'tmp/Texas Burger.png', categoryName: 'Tradicional', name: 'Texa Burge', price: 'R$ 25,50' }}
          mainColor='#FB9400'
          secondColor='#FFF9F2'

        />
        <ProductItem
          data={{ id: 2, image: 'tmp/Texas Burger.png', categoryName: 'Tradicional', name: 'Texa Burge', price: 'R$ 25,50' }}
          mainColor='#FB9400'
          secondColor='#FFF9F2'

        />
        <ProductItem
          data={{ id: 3, image: 'tmp/Texas Burger.png', categoryName: 'Tradicional', name: 'Texa Burge', price: 'R$ 25,50' }}
          mainColor='#FB9400'
          secondColor='#FFF9F2'

        />
        <ProductItem
          data={{ id: 4, image: 'tmp/Texas Burger.png', categoryName: 'Tradicional', name: 'Texa Burge', price: 'R$ 25,50' }}
          mainColor='#FB9400'
          secondColor='#FFF9F2'

        />
        <ProductItem
          data={{ id: 5, image: 'tmp/Texas Burger.png', categoryName: 'Tradicional', name: 'Texa Burge', price: 'R$ 25,50' }}
          mainColor='#FB9400'
          secondColor='#FFF9F2'

        />

      </div>
    </div>
  );
}

export default Home;