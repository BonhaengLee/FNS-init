import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';

export default function JobIndex() {
    return (
        <div>
            <NavLayout>
                <LeftMenu />
                <JobWrapper>잡페이지</JobWrapper>
            </NavLayout>
        </div>
    );
}

const JobWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 100px;
    padding: 60px 0;
`;
