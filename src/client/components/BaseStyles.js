import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
.Collapsible{
    width: 200px;
    .content-tab {
        li {
            list-style: none;
            margin-left: -40px;
        }
    }
}
.main-dashboard {
    margin-left:400px;
}

.sidebar .list-group{
    margin-bottom: 10px;
    overflow-y:scroll;
    max-height: 80vh;
}

.logout {
    text-align: center;
    a {
        &:hover {
            cursor: pointer;
        }
    }
    
}
`;
