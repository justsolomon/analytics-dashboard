import Button from '../Button';
import Header from '../Header';
import Select from '../Select/select';
import Sidebar from '../Sidebar';
import styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main className={styles['main-content']}>
        <Button useDefaultWidth>Export</Button>
        <Select placeholder="Filter Options" options={[]} />
        {children}
      </main>
    </>
  );
};

export default Layout;
