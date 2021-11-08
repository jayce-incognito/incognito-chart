import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { route as routeSetting } from 'src/module/Setting';

const Styled = styled(Link)`
    width: 22px;
    height: 22px;
`;

function SettingVector(props: any) {
    return (
        <svg width={22} height={22}>
            <path
                d="M11.852 21.154c.507 0 .878-.302.986-.8l.508-2.149c.38-.127.752-.273 1.074-.43l1.885 1.153c.42.263.898.224 1.25-.127l1.26-1.25c.351-.352.4-.86.117-1.28l-1.153-1.865c.166-.342.313-.693.42-1.045l2.168-.517c.498-.108.791-.479.791-.987V10.09c0-.498-.293-.87-.79-.977l-2.15-.517a9.693 9.693 0 00-.42-1.065l1.153-1.894c.274-.42.244-.899-.117-1.25l-1.28-1.26c-.36-.332-.79-.39-1.22-.147L14.42 4.162a6.468 6.468 0 00-1.074-.44l-.508-2.177c-.108-.498-.479-.8-.986-.8h-1.797c-.508 0-.88.302-.996.8L8.55 3.703c-.381.127-.752.274-1.084.45L5.572 2.98c-.43-.244-.869-.195-1.23.147l-1.27 1.26c-.361.351-.4.83-.117 1.25L4.098 7.53c-.127.303-.284.664-.41 1.065l-2.149.517c-.498.108-.791.479-.791.977v1.767c0 .508.293.88.791.987l2.168.517c.107.352.254.703.41 1.045l-1.142 1.865a.97.97 0 00.117 1.28l1.25 1.25c.351.351.84.39 1.26.127l1.875-1.153c.332.157.693.303 1.074.43l.508 2.149c.117.498.488.8.996.8h1.797zm-.899-6.758c-1.894 0-3.447-1.562-3.447-3.457 0-1.884 1.553-3.437 3.447-3.437 1.895 0 3.447 1.553 3.447 3.437 0 1.895-1.552 3.457-3.447 3.457z"
                fill="#000"
                fillRule="nonzero"
                {...props}
            />
        </svg>
    );
}

const Setting = React.memo(() => {
    return (
        <Styled to={routeSetting}>
            <SettingVector />
        </Styled>
    );
});

export default Setting;
