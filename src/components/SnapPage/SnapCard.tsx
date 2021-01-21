import React from 'react';
import styled from 'styled-components';

const SnapCard = (props: any) => {
    return (
        <div className="flex-item">
            <SnapCardContainer>
                <SnapThumbnail>{props.source}</SnapThumbnail>
                <SnapTitle>{props.title}</SnapTitle>
            </SnapCardContainer>
        </div>
    );
};

const SnapCardContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.mode.borderColor};
`;

const SnapTitle = styled.h2`
    width: 305px;
    height: 53px;
`;

const SnapThumbnail = styled.div`
    width: 305px;
    height: 250px;
    background-color: gray;
`;

export default SnapCard;
