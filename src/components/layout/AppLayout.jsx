import { Layout } from 'antd';
import AppHeader from '../layout/AppHeader';
import AppSider from '../layout/AppSider';
import AppContent from '../layout/AppContent'
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';
import { Spin } from 'antd';

export default function AppLayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
        return (
           <Spin fullscreen/>
        );
    }

    return <Layout>
        <AppHeader />
        <Layout>
            <AppSider />
            <AppContent />
        </Layout>
    </Layout>
}