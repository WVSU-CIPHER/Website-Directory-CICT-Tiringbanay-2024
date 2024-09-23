import { React } from 'react';

// Page Components
import Footer from '@/app/components/Footer';
import ContestWrapper from '../components/contests/ContestWrapper';
import SugilanonGuidelines from '../components/contests/guidelines/Sugilanon';
import PanakayonGuidelines from '../components/contests/guidelines/PanakayonGuidelines';



export default async function ContestsPage() {

    return (
        <ContestWrapper>
            <PanakayonGuidelines />
        </ContestWrapper>

    );
}
