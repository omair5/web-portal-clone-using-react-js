import React from 'react';
import AreaGuideCities from '../../components/AreaGuide/AreaGuideCities';
import AreaGuideHeader from '../../components/AreaGuide/AreaGuideHeader';
import Layout from '../../components/Layout/Layout';
import AreaImage from './areaImage.webp'
const AreaGuide = () => {
    return (
        <Layout FooterDisplay={true}>
            <AreaGuideHeader />
            <AreaGuideCities
                cityName='LAHORE'
                LahoreAreas={LahoreAreas}
            />
            <AreaGuideCities
                cityName='KARACHI'
                LahoreAreas={KarachiAreas}
            />
            <AreaGuideCities
                cityName='ISLAMABAD'
                LahoreAreas={IslamabadAreas}
            />
            <AreaGuideCities
                cityName='PESHAWAR'
                LahoreAreas={PeshawarAreas}
            />
        </Layout>);
}

export default AreaGuide;

const LahoreAreas = [
    { areaName: 'AL KABIR TOWN LAHORE', areaImage: AreaImage },
    { areaName: 'AL JALIL GARDEN LAHORE', areaImage: AreaImage },
    { areaName: 'SA GARDENS LAHORE', areaImage: AreaImage },
    { areaName: 'MM ALAM ROAD LAHORE', areaImage: AreaImage },
    { areaName: 'BAHRIA TOWN LAHORE', areaImage: AreaImage },
    { areaName: 'DHA DEFENCE LAHORE', areaImage: AreaImage },
]
const KarachiAreas = [
    { areaName: 'NORTH NAZIMABAD KARACHI', areaImage: AreaImage },
    { areaName: 'GULSHAN-E-MAYMAR KARACHI', areaImage: AreaImage },
    { areaName: 'BAHRIA TOWN KARACHI', areaImage: AreaImage },
    { areaName: 'DHA CITY KARACHI', areaImage: AreaImage },
    { areaName: 'GULSHAN-E-IQBAL KARACHI', areaImage: AreaImage },
    { areaName: 'DHA DEFENCE KARACHI', areaImage: AreaImage },
]
const IslamabadAreas = [
    { areaName: 'F-8 ISLAMABAD', areaImage: AreaImage },
    { areaName: 'DHA, DEFENCE ISLAMABAD', areaImage: AreaImage },
    { areaName: 'CAPITAL SMART CITY RAWALPINDI', areaImage: AreaImage },
    { areaName: 'EIGHTEEN ISLAMABAD', areaImage: AreaImage },
    { areaName: 'PWD HOUSING SCHEME, ISLAMABAD', areaImage: AreaImage },
    { areaName: 'BANI GALA ISLAMABAD', areaImage: AreaImage },
]
const PeshawarAreas = [
    { areaName: 'OPF HOUSING SCHEME PESHAWAR', areaImage: AreaImage },
    { areaName: 'DORANPUR PESHAWAR', areaImage: AreaImage },
    { areaName: 'SWATI GATE PESHAWAR', areaImage: AreaImage },
    { areaName: 'NEW CITY HOMES PESHAWAR', areaImage: AreaImage },
    { areaName: 'NORTHERN BYPASS, PESHAWAR', areaImage: AreaImage },
    { areaName: 'HAYATABAD PESHAWAR', areaImage: AreaImage },
]