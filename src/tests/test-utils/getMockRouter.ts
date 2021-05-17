import { RouteComponentProps } from 'react-router';

//This is to mock out the dependencies for react router
export const  getMockRouterProps = <P>(data: P): RouteComponentProps<P> => {
    const location = {
        hash: '',
        key: '',
        pathname: '',
        search: '',
        state: {},
    };

    const props: RouteComponentProps<P> = {
        match: {
            isExact: true,
            params: data,
            path: '',
            url: '',
        },
        location,
        history: {
            length: 2,
            action: 'POP',
            location: location,
            push: jest.fn(),
            replace: jest.fn(),
            go: jest.fn(),
            goBack: jest.fn(),
            goForward: jest.fn(),
            block: jest.fn(),
            createHref: jest.fn(),
            listen: jest.fn(),
        },
        staticContext: {},
    };

    return props;
}
