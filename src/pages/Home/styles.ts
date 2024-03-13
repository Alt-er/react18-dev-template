import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
    // 支持 css object 的写法
    container: {
        backgroundColor: token.colorBgLayout,
        borderRadius: token.borderRadiusLG,
        maxWidth: 400,
        width: '100%',
        height: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    // 也支持通过 css 字符串模板获得和 普通 css 一致的书写体验
    card: css`
        color: ${token.colorTextTertiary};
        box-shadow: ${token.boxShadow};
        &:hover {
            color: ${token.colorTextSecondary};
            box-shadow: ${token.boxShadowSecondary};
        }

        padding: ${token.padding}px;
        border-radius: ${token.borderRadius}px;
        background: ${token.colorBgContainer};
        transition: all 100ms ${token.motionEaseInBack};

        margin-bottom: 8px;
        cursor: pointer;
    `,
}));
