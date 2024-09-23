import { React } from 'react';

// Page Components
import Footer from '@/app/components/Footer';
import ContestWrapper from '../components/contests/ContestWrapper';
import SugilanonGuidelines from '../components/contests/guidelines/Sugilanon';



export default async function ContestsPage() {

    return (
        <ContestWrapper>
            <SugilanonGuidelines />
        </ContestWrapper>

    );
}
