'use client';
import AppComponent from '@/components/App/AppComponent';
import FooterSecond from '@/components/FooterSecond/FooterSecond';

const App: React.FC = () => {
    return (
        <div>
            <h2 style={{fontSize: '24px', fontWeight: '600', padding: '20px 20px 0 '}}>MoreApp</h2>
            <AppComponent />
            <FooterSecond />
        </div>
    );
};

export default App;
