import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';

export default function LookBookIndex() {
    return (
        <div>
            <NavLayout>
                <LeftMenu />
                <LookbookWrapper>룩북페이지</LookbookWrapper>
            </NavLayout>
        </div>
    );
}

const LookbookWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 100px;
    padding: 60px 0;
`;
