import { S } from './Footer.styles';
import { sharedAuthorizedOrganization } from 'src/sharedState';

interface Props {
    type?: 'default' | 'light';
}

export function AppFooter({ type = 'default' }: Props) {
    return (
        <S.Footer className={`_${type}`}>
            <S.Content>
                Made with &#10084;&#65039; by{' '}
                <S.Link href="https://beda.software/emr" target="_blank" rel="noreferrer">
                    Beda Software
                </S.Link>
                for <OrganizationName />
            </S.Content>
        </S.Footer>
    );
}

function OrganizationName() {
    const [organization] = sharedAuthorizedOrganization.useSharedState();
    
    return <span>{organization?.name ?? 'Unknown Organization'}</span>;
}
